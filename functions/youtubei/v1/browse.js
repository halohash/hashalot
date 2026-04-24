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
    case "FEhome": return "home"
    case "FEsubscriptions": return "subscriptions"
    case "FEmy_youtube": return "my"
    default: return id
  }
}

export async function onRequest(context) {
  const { request } = context

  try {
    if (request.method === "OPTIONS") {
      return new Response(null, {
        status: 204,
        headers: buildCORS(request)
      })
    }

    let body = {}
    if (request.method === "POST") {
      try {
        const txt = await request.text()
        body = txt ? JSON.parse(txt) : {}
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
          `https://tv36.pages.dev/feeds/api/${endpoint}?alt=json`
        )
        if (!res.ok) return null
        const text = await res.text()
        return text ? JSON.parse(text) : null
      } catch {
        return null
      }
    }

    function safeEntries(data) {
      return data?.feed?.entry || []
    }

    function getVideoId(e) {
      return e?.media$group?.yt$videoid?.$t ||
             e?.id?.$t?.split(":").pop() || ""
    }

    function getChannelId(e) {
      return e?.yt$userId?.$t ||
             e?.author?.[0]?.yt$userId?.$t ||
             ""
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

          const duration =
            parseInt(e?.media$group?.yt$duration?.seconds || 0)

          const minutes = Math.floor(duration / 60)
          const seconds = duration % 60
          const durationText =
            minutes + ":" + String(seconds).padStart(2, "0")

          return {
            gridVideoRenderer: {
              videoId: vid,

              title: {
                runs: [{ text: e?.title?.$t || "Untitled" }]
              },

              shortBylineText: {
                runs: [{ text: e?.author?.[0]?.name?.$t || "Unknown" }]
              },

              publishedTimeText: {
                runs: [{ text: e?.published?.$t || "" }]
              },

              viewCountText: {
                runs: [{ text: "0 views" }]
              },

              lengthText: {
                runs: [{ text: durationText }]
              },

              thumbnail: {
                thumbnails: [
                  { url: videoThumb(vid), width: 320, height: 180 }
                ]
              },

              channelThumbnail: {
                thumbnails: [
                  { url: profileThumb(cid), width: 68, height: 68 }
                ]
              },

              thumbnailOverlays: [
                {
                  thumbnailOverlayTimeStatusRenderer: {
                    text: {
                      runs: [{ text: durationText }]
                    }
                  }
                }
              ],

              navigationEndpoint: {
                clickTrackingParams: "",
                watchEndpoint: {
                  videoId: vid
                }
              },

              menu: {
                menuRenderer: {
                  items: []
                }
              }
            }
          }
        })
    }

    function mapChannels(entries) {
      return (entries || [])
        .filter(e => e)
        .map(e => {
          const cid = getChannelId(e)

          const name =
            e?.title?.$t ||
            e?.author?.[0]?.name?.$t ||
            "Channel"

          return {
            gridChannelRenderer: {
              channelId: cid,

              title: {
                runs: [{ text: name }]
              },

              thumbnail: {
                thumbnails: [
                  { url: profileThumb(cid), width: 68, height: 68 }
                ]
              },

              navigationEndpoint: {
                browseEndpoint: {
                  browseId: "channel_" + cid
                }
              }
            }
          }
        })
    }

    function shelf(title, items) {
      return {
        shelfRenderer: {
          title: {
            runs: [{ text: title }]
          },
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
      const smashbrawl = await fetchFeed("users/SmashBrawl67/uploads")
      const videos = await fetchFeed("videos")
      const trending = await fetchFeed("standardfeeds/most_popular")

      response = buildBrowse([
        shelf("Recommended", mapVideos(safeEntries(videos))),
        shelf("Trending", mapVideos(safeEntries(trending))),
        shelf("SmashBrawl67 - Topic", mapVideos(safeEntries(smashbrawl)))
      ])
    }

    else if (browseId === "subscriptions") {
      const data = await fetchFeed("videos")
      response = buildBrowse([
        shelf("Subscriptions", mapVideos(safeEntries(data)))
      ])
    }

    else if (browseId === "my") {
      const smashbrawl = await fetchFeed("users/SmashBrawl67/uploads")
      response = buildBrowse([
        shelf("My YouTube", mapVideos(safeEntries(smashbrawl)))
      ])
    }

    else if (browseId === "trending") {
      const data = await fetchFeed("standardfeeds/most_popular")
      response = buildBrowse([
        shelf("Trending", mapVideos(safeEntries(data)))
      ])
    }

    else if (browseId === "channels") {
      const data = await fetchFeed("users")
      response = buildBrowse([
        shelf("Channels", mapChannels(safeEntries(data)))
      ])
    }

    else if (browseId.startsWith("channel_")) {
      const channelId = browseId.replace("channel_", "")
      const data = await fetchFeed(`users/${channelId}/uploads`)

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
      response = mapVideos([data?.entry])[0]
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
