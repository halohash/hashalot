export async function onRequest(context) {
  const { request, params } = context;
  const url = new URL(request.url);

  const alt = url.searchParams.get("alt") || "xml";
  const callback = url.searchParams.get("callback");
  const query = (url.searchParams.get("q") || "").toLowerCase();
  const startIndex = parseInt(url.searchParams.get("start-index") || "1");
  const maxResults = parseInt(url.searchParams.get("max-results") || "25");

  const base = url.origin;

  const rawPath = params?.page || "";
  const parts = rawPath.split("/").filter(Boolean);

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

  function buildFeed(list, title = "Videos") {
    return {
      version: "1.0",
      encoding: "UTF-8",
      feed: {
        entry: list.map(jsonEntry),
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
        id: { $t: `tag:youtube.com,2008:${title.toLowerCase()}` },
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

  if (alt !== "json") {
    return new Response("<feed></feed>", {
      headers: { "content-type": "application/xml" }
    });
  }

  if (parts[0] === "feeds" && parts[1] === "api") {
    if (parts[2] === "videos" && parts[3] && parts[4] === "related") {
      const vid = videos.find(v => v.id === parts[3]);
      if (!vid) return new Response("Not Found", { status: 404 });
      return respondJSON(buildFeed(videos, "Related"));
    }

    if (parts[2] === "videos" && parts[3] && parts[4] === "comments") {
      return respondJSON(buildFeed([], "Comments"));
    }

    if (parts[2] === "videos" && parts[3]) {
      const vid = videos.find(v => v.id === parts[3]);
      if (!vid) return new Response("Not Found", { status: 404 });
      return respondJSON({ entry: jsonEntry(vid) });
    }

    if (parts[2] === "videos") {
      const list = paginate(filter(videos));
      return respondJSON(buildFeed(list, "Videos"));
    }

    if (parts[2] === "users" && parts[4] === "uploads") {
      const user = parts[3];
      const list = videos.filter(v => v.author === user);
      return respondJSON(buildFeed(list, `${user} uploads`));
    }

    if (parts[2] === "standardfeeds" && parts[3] === "most_popular") {
      return respondJSON(buildFeed(videos, "Most Popular"));
    }
  }

  return new Response("Not Found", { status: 404 });
}