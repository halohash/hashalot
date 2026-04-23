export async function onRequest(context) {
  try {
    const { request } = context;
    const url = new URL(request.url);

    const alt = url.searchParams.get("alt") || "xml";
    const callback = url.searchParams.get("callback");
    const query = (url.searchParams.get("q") || "").toLowerCase();
    const startIndex = parseInt(url.searchParams.get("start-index") || "1");
    const maxResults = parseInt(url.searchParams.get("max-results") || "25");

    const base = url.origin;

    const parts = url.pathname.split("/").filter(Boolean);

    const videos = [
      {
        id: "Ffx9w2K_M28",
        title: "help setting up fraps sound",
        description: "-",
        author: "LacedSniper",
        userId: "ofBoD-pahdptI_UuvTcy1A",
        duration: 999,
        uploaded: "2009-12-17T10:11:27Z",
        category: "Entertainment",
        views: 1234
      }
    ];

    function filter(list) {
      if (!query) return list;
      return list.filter(v =>
        v.title.toLowerCase().includes(query) ||
        v.description.toLowerCase().includes(query)
      );
    }

    function paginate(list) {
      const start = Math.max(startIndex - 1, 0);
      return list.slice(start, start + maxResults);
    }

    function jsonEntry(v) {
      return {
        author: {
          name: { $t: v.author },
          uri: { $t: `${base}/feeds/api/users/${v.author}` },
          "yt$userId": { $t: v.userId }
        },
        category: [
          {
            scheme: "http://schemas.google.com/g/2005#kind",
            term: "http://gdata.youtube.com/schemas/2007#video"
          },
          {
            label: v.category,
            scheme: "http://gdata.youtube.com/schemas/2007/categories.cat",
            term: v.category
          }
        ],
        content: {
          src: `${base}/watch.swf?video_id=${v.id}`,
          type: "application/x-shockwave-flash"
        },
        id: { $t: `tag:youtube.com,2008:video:${v.id}` },
        "media$group": {
          "media$content": [
            {
              url: `${base}/get_video?video_id=${v.id}/mp4`,
              type: "video/mp4",
              medium: "video",
              duration: v.duration,
              "yt$format": 5
            }
          ],
          "media$title": { $t: v.title, type: "plain" },
          "yt$duration": { seconds: String(v.duration) },
          "yt$videoid": { $t: v.id }
        },
        title: { $t: v.title }
      };
    }

    function buildFeed(list) {
      return {
        version: "1.0",
        encoding: "UTF-8",
        feed: {
          entry: list.map(jsonEntry)
        }
      };
    }

    function respondJSON(data) {
      let body = JSON.stringify(data);
      if (callback) {
        body = `${callback}(${body})`;
        return new Response(body, { headers: { "content-type": "application/javascript" } });
      }
      return new Response(body, { headers: { "content-type": "application/json" } });
    }

    if (alt !== "json") {
      return new Response("<feed></feed>", {
        headers: { "content-type": "application/xml" }
      });
    }

    if (parts[0] === "feeds" && parts[1] === "api") {
      if (parts[2] === "videos" && parts[3]) {
        const vid = videos.find(v => v.id === parts[3]);
        if (!vid) return new Response("Not Found", { status: 404 });
        return respondJSON({ entry: jsonEntry(vid) });
      }

      if (parts[2] === "videos") {
        const list = paginate(filter(videos));
        return respondJSON(buildFeed(list));
      }
    }

    return new Response("Not Found", { status: 404 });
  } catch (e) {
    return new Response(e.stack || e.toString(), {
      status: 500,
      headers: { "content-type": "text/plain" }
    });
  }
}