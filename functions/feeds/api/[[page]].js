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
        views: 1234,
        file: "https://file.garden/aUYIWVAKvQxCBY-_/2013tvvideos/Ffx9w2K_M28.mp4"
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
        "gd$comments": {
          "gd$feedLink": `${base}/feeds/api/videos/${v.id}/comments`,
          rel: "http://gdata.youtube.com/schemas/2007#comments",
          countHint: 1
        },
        id: { $t: `tag:youtube.com,2008:video:${v.id}` },
        link: [
          {
            href: `http://www.youtube.com/watch?v=${v.id}`,
            rel: "alternate",
            type: "text/html"
          },
          {
            href: `${base}/feeds/api/videos/${v.id}`,
            rel: "self",
            type: "application/atom+xml"
          }
        ],
        "media$group": {
          "media$category": {
            label: v.category,
            scheme: "http://gdata.youtube.com/schemas/2007/categories.cat",
            term: v.category
          },
          "media$content": [
            {
              url: `${base}/get_video?video_id=${v.id}/mp4`,
              type: "video/mp4",
              medium: "video",
              duration: v.duration,
              "yt$format": 5
            }
          ],
          "media$credit": [
            {
              $t: v.author,
              role: "uploader",
              scheme: "urn:youtube",
              "yt$display": v.author
            }
          ],
          "media$description": { $t: v.description, type: "plain" },
          "media$keywords": {},
          "media$license": {
            $t: "youtube",
            type: "text/html",
            href: "http://www.youtube.com/t/terms"
          },
          "media$player": {
            url: `http://www.youtube.com/watch?v=${v.id}`
          },
          "media$thumbnail": [
            { url: `//i.ytimg.com/vi/${v.id}/default.jpg`, height: 90, width: 120, time: "00:00:00" },
            { url: `//i.ytimg.com/vi/${v.id}/mqdefault.jpg`, height: 180, width: 320, time: "00:00:00" },
            { url: `//i.ytimg.com/vi/${v.id}/hqdefault.jpg`, height: 360, width: 480, time: "00:00:00" }
          ],
          "media$title": { $t: v.title, type: "plain" },
          "yt$duration": { seconds: String(v.duration) },
          "yt$uploaded": { $t: v.uploaded },
          "yt$videoid": { $t: v.id },
          "yt$uploaderId": { $t: v.userId }
        },
        "yt$statistics": {
          viewCount: String(v.views)
        },
        published: v.uploaded,
        updated: v.uploaded,
        title: { $t: v.title },
        "yt$hd": {}
      };
    }

    function buildFeed(list, title) {
      return {
        version: "1.0",
        encoding: "UTF-8",
        feed: {
          entry: list.map(jsonEntry),
          "openSearch$totalResults": { $t: String(list.length) },
          "openSearch$startIndex": { $t: String(startIndex) },
          "openSearch$itemsPerPage": { $t: String(maxResults) },
          category: [
            {
              scheme: "http://schemas.google.com/g/2005#kind",
              term: "http://gdata.youtube.com/schemas/2007#video"
            }
          ],
          generator: {
            $t: "YouTube data API",
            uri: "http://gdata.youtube.com",
            version: "2.1"
          },
          id: { $t: `tag:youtube.com,2008:${title.toLowerCase().replace(/ /g, "")}` },
          logo: { $t: "http://www.gstatic.com/youtube/img/logo.png" },
          title: { $t: title },
          updated: { $t: new Date().toISOString() },
          xmlns: "http://www.w3.org/2005/Atom",
          "xmlns$app": "http://www.w3.org/2007/app",
          "xmlns$gd": "http://schemas.google.com/g/2005",
          "xmlns$media": "http://search.yahoo.com/mrss/",
          "xmlns$openSearch": "http://a9.com/-/spec/opensearch/1.1/",
          "xmlns$yt": "http://gdata.youtube.com/schemas/2007"
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

    const apiIndex = parts.findIndex(p => p === "feeds");
    if (apiIndex !== -1 && parts[apiIndex + 1] === "api") {
      const route = parts.slice(apiIndex + 2);

      if (alt !== "json") {
        return new Response("<feed></feed>", {
          headers: { "content-type": "application/xml" }
        });
      }

      if (route[0] === "standardfeeds") {
        if (route[1] === "most_popular") return respondJSON(buildFeed(videos, "Most Popular"));
        if (route[1] === "recently_featured") return respondJSON(buildFeed(videos, "Recently Featured"));
        if (route[1] === "top_rated") return respondJSON(buildFeed(videos, "Top Rated"));
      }

      if (route[0] === "videos" && route[1] && route[2] === "related") {
        return respondJSON(buildFeed(videos, "Related"));
      }

      if (route[0] === "videos" && route[1] && route[2] === "responses") {
        return respondJSON(buildFeed(videos, "Responses"));
      }

      if (route[0] === "videos" && route[1] && route[2] === "comments") {
        return respondJSON(buildFeed([], "Comments"));
      }

      if (route[0] === "videos" && route[1]) {
        const vid = videos.find(v => v.id === route[1]);
        if (!vid) return new Response("Not Found", { status: 404 });
        return respondJSON({ entry: jsonEntry(vid) });
      }

      if (route[0] === "videos") {
        const list = paginate(filter(videos));
        return respondJSON(buildFeed(list, "Videos"));
      }

      if (route[0] === "users" && route[2] === "uploads") {
        const list = videos.filter(v => v.author === route[1]);
        return respondJSON(buildFeed(list, `${route[1]} uploads`));
      }

      if (route[0] === "users" && route[1]) {
        return respondJSON({
          entry: {
            "yt$username": { $t: route[1] }
          }
        });
      }
    }

    if (parts[0] === "get_video") {
      const id = url.searchParams.get("video_id");
      const vid = videos.find(v => v.id === id);
      if (!vid) return new Response("Not Found", { status: 404 });
      return Response.redirect(vid.file, 302);
    }

    if (parts[0] === "watch.swf") {
      return Response.redirect("https://archive.org/download/youtube-swf/youtube-player.swf", 302);
    }

    return new Response("Not Found", { status: 404 });

  } catch (e) {
    return new Response(e.stack || e.toString(), {
      status: 500,
      headers: { "content-type": "text/plain" }
    });
  }
}