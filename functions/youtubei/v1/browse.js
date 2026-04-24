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
    const browseId =
      body.browseId ||
      url.searchParams.get("browseId") ||
      "home"

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
      return (entries || []).map(e => {
        const vid = getVideoId(e)
        const cid = getChannelId(e)

        return {
          gridVideoRenderer: {
            videoId: vid,
            title: { simpleText: e?.title?.$t || "Untitled" },

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
            title: { simpleText: e?.title?.$t || "Channel" },

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
          title: entry?.title?.$t || "Untitled",
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

    let response = { error: { message: "Unknown browseId" } }

    if (browseId === "home") {
      const data = await fetchFeed("videos")
      response = {
        contents: {
          tvBrowseRenderer: {
            content: {
              tvSurfaceContentRenderer: {
                content: {
                  gridRenderer: {
                    items: mapVideos(safeEntries(data))
                  }
                }
              }
            }
          }
        }
      }
    }

    else if (browseId === "trending") {
      const data = await fetchFeed("standardfeeds/trending")
      response = {
        contents: {
          tvBrowseRenderer: {
            content: {
              tvSurfaceContentRenderer: {
                content: {
                  gridRenderer: {
                    items: mapVideos(safeEntries(data))
                  }
                }
              }
            }
          }
        }
      }
    }

    else if (browseId === "channels") {
      const data = await fetchFeed("channels")
      response = {
        contents: {
          tvBrowseRenderer: {
            content: {
              tvSurfaceContentRenderer: {
                content: {
                  gridRenderer: {
                    items: mapChannels(safeEntries(data))
                  }
                }
              }
            }
          }
        }
      }
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
        contents: {
          tvBrowseRenderer: {
            content: {
              tvSurfaceContentRenderer: {
                content: {
                  gridRenderer: {
                    items: mapVideos(safeEntries(data))
                  }
                }
              }
            }
          }
        }
      }
    }

    else if (browseId.startsWith("video_")) {
      const videoId = browseId.replace("video_", "")
      const data = await fetchFeed(`videos/${videoId}`)
      response = mapSingleVideo(data?.entry)
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