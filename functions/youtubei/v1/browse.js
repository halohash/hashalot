export async function onRequest(context) {
  const { request } = context
  const method = request.method.toUpperCase()

  if (method === "OPTIONS") {
    return new Response(null, {
      status: 204,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type"
      }
    })
  }

  let body = {}
  if (method === "POST") {
    try {
      body = await request.json()
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
      const res = await fetch(`https://tv36.pages.dev/feeds/api/${endpoint}`)
      if (!res.ok) return null
      return await res.json()
    } catch {
      return null
    }
  }

  function mapVideos(entries) {
    return (entries || []).map(e => ({
      gridVideoRenderer: {
        videoId: e.id?.$t?.split(":").pop() || "",
        title: { simpleText: e.title?.$t || "Untitled" },
        thumbnail: {
          thumbnails: [
            { url: e.media$group?.media$thumbnail?.[0]?.url || "" }
          ]
        },
        shortBylineText: {
          runs: [
            { text: e.author?.[0]?.name?.$t || "Unknown" }
          ]
        }
      }
    }))
  }

  function mapChannels(entries) {
    return (entries || []).map(e => ({
      gridChannelRenderer: {
        channelId: e.id?.$t?.split(":").pop() || "",
        title: { simpleText: e.title?.$t || "Channel" }
      }
    }))
  }

  function mapSingleVideo(entry) {
    if (!entry) return null
    return {
      videoDetails: {
        videoId: entry.id?.$t?.split(":").pop() || "",
        title: entry.title?.$t || "Untitled",
        shortDescription: entry.media$group?.media$description?.$t || "",
        author: entry.author?.[0]?.name?.$t || "",
        thumbnail: {
          thumbnails: entry.media$group?.media$thumbnail || []
        }
      }
    }
  }

  let response

  if (browseId === "home") {
    const data = await fetchFeed("videos")
    response = {
      contents: {
        tvBrowseRenderer: {
          content: {
            tvSurfaceContentRenderer: {
              content: {
                gridRenderer: {
                  items: mapVideos(data?.feed?.entry)
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
                  items: mapVideos(data?.feed?.entry)
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
                  items: mapChannels(data?.feed?.entry)
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
                  items: mapVideos(data?.feed?.entry)
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

  else {
    response = {
      error: {
        message: "Unknown browseId"
      }
    }
  }

  return new Response(JSON.stringify(response), {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    }
  })
}