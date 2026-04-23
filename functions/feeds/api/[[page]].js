export async function onRequest(context) {
  const { request, params } = context;
  const url = new URL(request.url);

  const alt = url.searchParams.get("alt") || "xml";
  const callback = url.searchParams.get("callback");
  const query = (url.searchParams.get("q") || "").toLowerCase();
  const startIndex = parseInt(url.searchParams.get("start-index") || "1");
  const maxResults = parseInt(url.searchParams.get("max-results") || "25");

  const base = url.origin;

  const path = params.page || "";
  const parts = path.split("/").filter(Boolean);

  const videos = [
    {
      id: "Ffx9w2K_M28",
      title: "help setting up fraps sound",
      description: "-",
      author: "LacedSniper",
      userId: "ofBoD-pahdptI_UuvTcy1A",
      duration: 999,
      uploaded: "2009-12-17T10:11:27Z",
      category: "Entertainment"
    }
  ];

  function filterVideos() {
    let result = videos;
    if (query) {
      result = result.filter(v =>
        v.title.toLowerCase().includes(query) ||
        v.description.toLowerCase().includes(query)
      );
    }
    return result;
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
          rel: "http://gdata.youtube.com/schemas/2007#video.related",
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
            duration: v.duration,
            medium: "video",
            "yt$format": 5,
            url: `${base}/get_video?video_id=${v.id}/mp4`
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
        "media$description": { $t: v.description },
        "media$keywords": {},
        "media$license": {
          $t: "youtube",
          href: "http://www.youtube.com/t/terms",
          type: "text/html"
        },
        "media$player": {
          url: `http://www.youtube.com/watch?v=${v.id}`
        },
        "media$thumbnail": [
          { height: 90, width: 120, time: "00:00:00", url: `//i.ytimg.com/vi/${v.id}/default.jpg` },
          { height: 180, width: 320, time: "00:00:00", url: `//i.ytimg.com/vi/${v.id}/mqdefault.jpg` },
          { height: 360, width: 480, time: "00:00:00", url: `//i.ytimg.com/vi/${v.id}/hqdefault.jpg` },
          { height: 480, width: 360, time: "00:00:00", url: `//i.ytimg.com/vi/${v.id}/sddefault.jpg` },
          { height: 90, width: 120, time: "00:00:00", url: `//i.ytimg.com/vi/${v.id}/1.jpg` },
          { height: 90, width: 120, time: "00:00:00", url: `//i.ytimg.com/vi/${v.id}/2.jpg` },
          { height: 90, width: 120, time: "00:00:00", url: `//i.ytimg.com/vi/${v.id}/3.jpg` }
        ],
        "media$title": { $t: v.title, type: "plain" },
        "yt$duration": { seconds: String(v.duration) },
        "yt$uploaded": { $t: v.uploaded },
        "yt$videoid": { $t: v.id },
        "yt$uploaderId": { $t: v.userId }
      },
      published: v.uploaded,
      updated: v.uploaded,
      title: { $t: v.title },
      "yt$hd": {}
    };
  }

  function buildJSONFeed(list) {
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
        id: { $t: "tag:youtube.com,2008:videos" },
        logo: { $t: "http://www.gstatic.com/youtube/img/logo.png" },
        title: { $t: "Videos" },
        updated: { $t: new Date().toISOString() },
        xmlns: "http://www.w3.org/2005/Atom",
        "xmlns$app": "http://www.w3.org/2007/app",
        "xmlns$gd": "http://schemas.google.com/g/2005",
        "xmlns$georss": "http://www.georss.org/georss",
        "xmlns$gml": "http://www.opengis.net/gml",
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

  if (parts[0] === "videos" && parts[1]) {
    const vid = videos.find(v => v.id === parts[1]);
    if (!vid) return new Response("you did not put a cd in pc so this is now a fucking teapot lol", { status: 418 });

    if (alt === "json") {
      return respondJSON({ entry: jsonEntry(vid) });
    }
  }

  if (parts[0] === "videos") {
    const filtered = filterVideos();
    const paged = paginate(filtered);

    if (alt === "json") {
      return respondJSON(buildJSONFeed(paged));
    }
  }

  if (alt === "xml") {
    return new Response("<feed></feed>", {
      headers: { "content-type": "application/xml" }
    });
  }

  return new Response("Unavailable", { status: 500 });
}