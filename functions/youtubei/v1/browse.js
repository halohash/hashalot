function buildCORS(request) {
  return {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers":
      request.headers.get("Access-Control-Request-Headers") ||
      "Content-Type, Authorization, X-Goog-Visitor-Id",
    "Access-Control-Max-Age": "86400"
  }
}

function normalizeBrowseId(id) {
  switch (id) {
    case "FEhome":
      return "home"
    case "FEsubscriptions":
      return "subscriptions"
    case "FEmy_youtube":
      return "my"
    default:
      return id
  }
}

export async function onRequest(context) {
  const { request } = context

  try {
    const method = request.method.toUpperCase()

    if (method === "OPTIONS") {
      return new Response(null, {
        status: 204,
        headers: buildCORS(request)
      })
    }

    let body = {}
    if (method === "POST") {
      try {
        const text = await request.text()
        body = text ? JSON.parse(text) : {}
      } catch {
        body = {}
      }
    }

    const url = new URL(request.url)

    const rawBrowseId =
      body.browseId ||
      url.searchParams.get("browseId") ||
      "home"

    const browseId = normalizeBrowseId(rawBrowseId)

    async function fetchFeed(endpoint) {
      try {
        const res = await fetch(
          `https://tv36.pages.dev/feeds/api/${endpoint}?alt=json`,
          { headers: { "Accept": "application/json" } }
        )

        if (!res.ok) return null

        const text = await res.text()
        if (!text) return null

        return JSON.parse(text)
      } catch {
        return null
      }
    }

    function safeEntries(data) {
      return data?.feed?.entry || []
    }

    function getVideoId(e) {
      return e?.media$group?.yt$videoid?.$t ||
             e?.id?.$t?.split(":").pop() ||
             ""
    }

    function getChannelId(e) {
      return e?.author?.[0]?.yt$userId?.$t || ""
    }

    function videoThumb(id) {
      return `https://tv36.pages.dev/get_thumb?v=${id}`
    }

    function profileThumb(id) {
      return `https://tv36.pages.dev/get_thumb?v=${id}&t=1`
    }

    function mapVideos(entries) {
      return (entries || [])
        .filter(e => {
          const vid = getVideoId(e)
          return e && vid
        })
        .map(e => {
          const vid = getVideoId(e)
          const cid = getChannelId(e)

          return {
            gridVideoRenderer: {
              videoId: vid,

              title: {
                runs: [
                  { text: e?.title?.$t || "Untitled" }
                ]
              },

              thumbnail: {
                thumbnails: [
                  { url: videoThumb(vid) }
                ]
              },

              shortBylineText: {
                runs: [
                  { text: e?.author?.[0]?.name?.$t || "Unknown" }
                ]
              },

              channelThumbnail: {
                thumbnails: [
                  { url: profileThumb(cid) }
                ]
              },

              navigationEndpoint: {
                clickTrackingParams: "",
                watchEndpoint: {
                  videoId: vid
                }
              }
            }
          }
        })
    }

    function mapChannels(entries) {
      return (entries || []).map(e => {
        const cid = getChannelId(e)

        return {
          gridChannelRenderer: {
            channelId: cid,

            title: {
              runs: [
                { text: e?.title?.$t || "Channel" }
              ]
            },

            thumbnail: {
              thumbnails: [
                { url: profileThumb(cid) }
              ]
            }
          }
        }
      })
    }

    function mapSingleVideo(entry) {
      if (!entry) {
        return { error: { message: "Video not found" } }
      }

      const vid = getVideoId(entry)
      const cid = getChannelId(entry)

      return {
        videoDetails: {
          videoId: vid,

          title: {
            runs: [
              { text: entry?.title?.$t || "Untitled" }
            ]
          },

          shortDescription:
            entry?.media$group?.media$description?.$t || "",

          author: entry?.author?.[0]?.name?.$t || "",

          thumbnail: {
            thumbnails: [
              { url: videoThumb(vid) }
            ]
          },

          channelThumbnail: {
            thumbnails: [
              { url: profileThumb(cid) }
            ]
          }
        }
      }
    }

    function shelf(title, items) {
      return {
        shelfRenderer: {
          title: { simpleText: title },
          content: {
            horizontalListRenderer: {
              items
            }
          }
        }
      }
    }

    function buildBrowse(shelves) {
      return {
        contents: {
          tvBrowseRenderer: {
            content: {
              tvSurfaceContentRenderer: {
                content: {
                  sectionListRenderer: {
                    contents: shelves
                  }
                }
              }
            }
          }
        }
      }
    }

    let response = null

    if (browseId === "home") {
      const videos = await fetchFeed("videos")
      const trending = await fetchFeed("standardfeeds/trending")

      response = buildBrowse([
        shelf("Recommended", mapVideos(safeEntries(videos))),
        shelf("Trending", mapVideos(safeEntries(trending)))
      ])
    }

    else if (browseId === "subscriptions") {
      const data = await fetchFeed("videos")

      response = buildBrowse([
        shelf("Subscriptions", mapVideos(safeEntries(data)))
      ])
    }

    else if (browseId === "my") {
      response = buildBrowse([
        shelf("My YouTube", [])
      ])
    }

    else if (browseId === "trending") {
      const data = await fetchFeed("standardfeeds/trending")

      response = buildBrowse([
        shelf("Trending", mapVideos(safeEntries(data)))
      ])
    }

    else if (browseId === "channels") {
      const data = await fetchFeed("channels")

      response = buildBrowse([
        shelf("Channels", mapChannels(safeEntries(data)))
      ])
    }

    else if (browseId.startsWith("channel_")) {
      const channelId = browseId.replace("channel_", "")
      const data = await fetchFeed(`channels/${channelId}/uploads`)

      response = {
        header: {
          channelHeaderRenderer: {
            title: `Channel ${channelId}`
          }
        },
        ...buildBrowse([
          shelf("Uploads", mapVideos(safeEntries(data)))
        ])
      }
    }

    else if (browseId.startsWith("video_")) {
      const videoId = browseId.replace("video_", "")
      const data = await fetchFeed(`videos/${videoId}`)
      response = mapSingleVideo(data?.entry)
    }

    if (!response) {
      const data = await fetchFeed("videos")
      response = buildBrowse([
        shelf("Recommended", mapVideos(safeEntries(data)))
      ])
    }

    return new Response(JSON.stringify(response), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...buildCORS(request)
      }
    })

  } catch (err) {
    return new Response(JSON.stringify({
      error: "Worker crashed",
      details: err.message
    }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    })
  }
}
