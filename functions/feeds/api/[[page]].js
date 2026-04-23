export async function onRequest(context) {
  try {
    const { request } = context;
    const url = new URL(request.url);

    const alt = url.searchParams.get("alt") || "xml";
    const callback = url.searchParams.get("callback");
    const query = (url.searchParams.get("q") || "").toLowerCase();
    const startIndex = parseInt(url.searchParams.get("start-index") || "1");
    const maxResults = parseInt(url.searchParams.get("max-results") || "25");
    const categoryParam = url.searchParams.get("category") || url.searchParams.get("list");

    const base = url.origin;

    const parts = url.pathname.split("/").filter(Boolean);

    const feedIndex = parts.indexOf("feeds");
    if (feedIndex === -1 || parts[feedIndex + 1] !== "api") {
      return new Response("Not Found", { status: 404 });
    }

    const route = parts.slice(feedIndex + 2);

    const GDATA_SETS = {
      STmost_popular: "Most Popular",
      STmost_popular_Music: "Music",
      STmost_popular_Games: "Gaming",
      STmost_popular_Sports: "Sports",
      STmost_popular_Film: "Film & Animation",
      STmost_popular_Entertainment: "Entertainment",
      STmost_popular_Comedy: "Comedy",
      STmost_popular_News: "News & Politics",
      STmost_popular_People: "People & Blogs",
      STmost_popular_Tech: "Science & Technology",
      STmost_popular_Howto: "Howto & Style",
      STmost_popular_Education: "Education",
      STmost_popular_Animals: "Pets & Animals"
    };

const videos = [
  {
    author: {
      name: { $t: "jawed" },
      uri: { $t: "http://a-yt2009.truehosting.net:80/feeds/api/users/jawed" },
      "yt$userId": { $t: "4QobU6STFB0P71PMvOGN5A" }
    },
    category: [
      {
        scheme: "http://schemas.google.com/g/2005#kind",
        term: "http://gdata.youtube.com/schemas/2007#video"
      },
      {
        label: "Film & Animation",
        scheme: "http://gdata.youtube.com/schemas/2007/categories.cat",
        term: "Film & Animation"
      }
    ],
    content: {
      src: "http://a-yt2009.truehosting.net:80/watch.swf?video_id=jNQXAC9IVRw",
      type: "application/x-shockwave-flash"
    },
    "gd$comments": {
      "gd$feedLink": "http://a-yt2009.truehosting.net:80/feeds/api/videos/jNQXAC9IVRw/comments",
      rel: "http://gdata.youtube.com/schemas/2007#comments",
      countHint: 1
    },
    id: { $t: "tag:youtube.com,2008:video:jNQXAC9IVRw" },
    link: [
      {
        href: "http://www.youtube.com/watch?v=jNQXAC9IVRw",
        rel: "alternate",
        type: "text/html"
      },
      {
        href: "http://a-yt2009.truehosting.net:80/feeds/api/videos/jNQXAC9IVRw",
        rel: "http://gdata.youtube.com/schemas/2007#video.related",
        type: "application/atom+xml"
      }
    ],
    "media$group": {
      "media$category": {
        label: "Film & Animation",
        scheme: "http://gdata.youtube.com/schemas/2007/categories.cat",
        term: "Film & Animation"
      },
      "media$content": [
        {
          duration: 2,
          medium: "video",
          "yt$format": 5,
          url: "http://a-yt2009.truehosting.net:80/get_video?video_id=jNQXAC9IVRw/mp4"
        }
      ],
      "media$credit": [
        {
          $t: "jawed",
          role: "uploader",
          scheme: "urn:youtube",
          "yt$display": "jawed"
        }
      ],
      "media$description": { $t: "-" },
      "media$keywords": {},
      "media$license": {
        $t: "youtube",
        href: "http://www.youtube.com/t/terms",
        type: "text/html"
      },
      "media$player": {
        url: "http://www.youtube.com/watch?v=jNQXAC9IVRw"
      },
      "media$thumbnail": [
        { height: 90, width: 120, time: "00:00:00", url: "//i.ytimg.com/vi/jNQXAC9IVRw/default.jpg" },
        { height: 180, width: 320, time: "00:00:00", url: "//i.ytimg.com/vi/jNQXAC9IVRw/mqdefault.jpg" },
        { height: 360, width: 480, time: "00:00:00", url: "//i.ytimg.com/vi/jNQXAC9IVRw/hqdefault.jpg" },
        { height: 480, width: 360, time: "00:00:00", url: "//i.ytimg.com/vi/jNQXAC9IVRw/sddefault.jpg" }
      ],
      "media$title": { $t: "Me at the zoo", type: "plain" },
      "yt$duration": { seconds: "2" },
      "yt$uploaded": { $t: "2005-04-24T03:31:52Z" },
      "yt$videoid": { $t: "jNQXAC9IVRw" },
      "yt$uploaderId": { $t: "4QobU6STFB0P71PMvOGN5A" }
    },
    published: "2005-04-24T03:31:52Z",
    updated: "2005-04-24T03:31:52Z",
    title: { $t: "Me at the zoo" },
    "yt$hd": {}
  },

  {
    author: {
      name: { $t: "Google Nexus" },
      uri: { $t: "http://a-yt2009.truehosting.net:80/feeds/api/users/Google%20Nexus" },
      "yt$userId": { $t: "unknown" }
    },
    category: [
      {
        scheme: "http://schemas.google.com/g/2005#kind",
        term: "http://gdata.youtube.com/schemas/2007#video"
      },
      {
        label: "-",
        scheme: "http://gdata.youtube.com/schemas/2007/categories.cat",
        term: "-"
      }
    ],
    content: {
      src: "http://a-yt2009.truehosting.net:80/watch.swf?video_id=6AAFF9PN-WU",
      type: "application/x-shockwave-flash"
    },
    "gd$comments": {
      "gd$feedLink": "http://a-yt2009.truehosting.net:80/feeds/api/videos/6AAFF9PN-WU/comments",
      rel: "http://gdata.youtube.com/schemas/2007#comments",
      countHint: 1
    },
    id: { $t: "tag:youtube.com,2008:video:6AAFF9PN-WU" },
    link: [
      {
        href: "http://www.youtube.com/watch?v=6AAFF9PN-WU",
        rel: "alternate",
        type: "text/html"
      },
      {
        href: "http://a-yt2009.truehosting.net:80/feeds/api/videos/6AAFF9PN-WU",
        rel: "http://gdata.youtube.com/schemas/2007#video.related",
        type: "application/atom+xml"
      }
    ],
    "media$group": {
      "media$category": {
        label: "-",
        scheme: "http://gdata.youtube.com/schemas/2007/categories.cat",
        term: "-"
      },
      "media$content": [
        {
          duration: 120,
          medium: "video",
          "yt$format": 5,
          url: "http://a-yt2009.truehosting.net:80/get_video?video_id=6AAFF9PN-WU/mp4"
        }
      ],
      "media$credit": [
        {
          $t: "Google Nexus",
          role: "uploader",
          scheme: "urn:youtube",
          "yt$display": "Google Nexus"
        }
      ],
      "media$description": { $t: "-" },
      "media$keywords": {},
      "media$license": {
        $t: "youtube",
        href: "http://www.youtube.com/t/terms",
        type: "text/html"
      },
      "media$player": {
        url: "http://www.youtube.com/watch?v=6AAFF9PN-WU"
      },
      "media$thumbnail": [
        { height: 90, width: 120, time: "00:00:00", url: "//i.ytimg.com/vi/6AAFF9PN-WU/default.jpg" },
        { height: 180, width: 320, time: "00:00:00", url: "//i.ytimg.com/vi/6AAFF9PN-WU/mqdefault.jpg" },
        { height: 360, width: 480, time: "00:00:00", url: "//i.ytimg.com/vi/6AAFF9PN-WU/hqdefault.jpg" },
        { height: 480, width: 360, time: "00:00:00", url: "//i.ytimg.com/vi/6AAFF9PN-WU/sddefault.jpg" }
      ],
      "media$title": { $t: "Explore Nexus S: Youtube 2.0", type: "plain" },
      "yt$duration": { seconds: "120" },
      "yt$uploaded": { $t: "2011-04-22T22:00:00Z" },
      "yt$videoid": { $t: "6AAFF9PN-WU" },
      "yt$uploaderId": { $t: "unknown" }
    },
    published: "2011-04-22T22:00:00Z",
    updated: "2011-04-22T22:00:00Z",
    title: { $t: "Explore Nexus S: Youtube 2.0" },
    "yt$hd": {}
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
          "yt$videoid": { $t: v.id },
          "media$thumbnail": [
            { url: `//i.ytimg.com/vi/${v.id}/hqdefault.jpg`, width: 480, height: 360 }
          ]
        },
        "yt$statistics": {
          viewCount: String(v.views)
        },
        published: v.uploaded,
        updated: v.uploaded,
        title: { $t: v.title }
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
          id: { $t: "tag:youtube.com,2008:videos" },
          logo: { $t: "http://www.gstatic.com/youtube/img/logo.png" },
          title: { $t: title },
          updated: { $t: new Date().toISOString() },
          xmlns: "http://www.w3.org/2005/Atom",
          "xmlns$media": "http://search.yahoo.com/mrss/",
          "xmlns$yt": "http://gdata.youtube.com/schemas/2007",
          "xmlns$openSearch": "http://a9.com/-/spec/opensearch/1.1/"
        }
      };
    }

    function respondJSON(data) {
      let body = JSON.stringify(data);
      if (callback) body = `${callback}(${body})`;
      return new Response(body, {
        headers: {
          "content-type": callback ? "application/javascript" : "application/json"
        }
      });
    }

    if (alt !== "json") {
      return new Response("<feed></feed>", {
        headers: { "content-type": "application/xml" }
      });
    }

    if (route[0] === "standardfeeds") {
      const id = route[1];

      if (!id) {
        return respondJSON({
          sets: Object.entries(GDATA_SETS).map(([key, title]) => ({
            title,
            gdata_list_id: key,
            gdata_url: `${base}/feeds/api/videos`,
            tab: "featured"
          }))
        });
      }

      const mapped = GDATA_SETS[id];

      const list = mapped
        ? videos.filter(v => mapped === "Most Popular" || v.category === mapped)
        : videos;

      return respondJSON(buildFeed(paginate(filter(list)), mapped || "Most Popular"));
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
      if (!vid) return respondJSON({ entry: null });
      return respondJSON({ entry: jsonEntry(vid) });
    }

    if (route[0] === "videos") {
      let list = videos;

      if (categoryParam && GDATA_SETS[categoryParam]) {
        const cat = GDATA_SETS[categoryParam];
        list = videos.filter(v =>
          cat === "Most Popular" || v.category === cat
        );
      }

      return respondJSON(buildFeed(paginate(filter(list)), "Videos"));
    }

    if (route[0] === "users" && route[2] === "uploads") {
      const user = route[1];
      const list = videos.filter(v => v.author === user);
      return respondJSON(buildFeed(list, `${user} uploads`));
    }

    if (route[0] === "users" && route[1]) {
      return respondJSON({
        entry: {
          "yt$username": { $t: route[1] }
        }
      });
    }

    if (route[0] === "get_video") {
      const id = url.searchParams.get("video_id");
      const vid = videos.find(v => v.id === id);
      if (!vid) return new Response("Not Found", { status: 404 });
      return Response.redirect(vid.file, 302);
    }

    if (route[0] === "watch.swf") {
      return Response.redirect(
        "https://archive.org/download/youtube-swf/youtube-player.swf",
        302
      );
    }

    return new Response("Not Found", { status: 404 });

  } catch (e) {
    return new Response(e.stack || String(e), {
      status: 500,
      headers: { "content-type": "text/plain" }
    });
  }
}