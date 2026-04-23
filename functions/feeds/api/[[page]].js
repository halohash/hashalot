export async function onRequest(context) {
  try {
    const { request } = context;
    const url = new URL(request.url);

    const FEED_URL = "https://tv36.pages.dev/videos.json";

    const alt = url.searchParams.get("alt") || "xml";
    const callback = url.searchParams.get("callback");
    const query = (url.searchParams.get("q") || "").toLowerCase();
    const startIndex = parseInt(url.searchParams.get("start-index") || "1");
    const maxResults = parseInt(url.searchParams.get("max-results") || "25");
    const categoryParam = url.searchParams.get("category") || url.searchParams.get("list");

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

    async function loadVideos() {
      const res = await fetch(FEED_URL);
      const data = await res.json();

      if (Array.isArray(data)) return data;
      if (data.feed && Array.isArray(data.feed.entry)) return data.feed.entry;

      return [];
    }

    function getId(v) {
      return v?.media$group?.["yt$videoid"]?.$t;
    }

    function getTitle(v) {
      return typeof v.title === "string" ? v.title : v?.title?.$t || "";
    }

    function getDescription(v) {
      return v?.media$group?.["media$description"]?.$t || "";
    }

    function getCategory(v) {
      return v?.category?.[1]?.term || "-";
    }

    function getAuthor(v) {
      return typeof v.author === "string"
        ? v.author
        : v?.author?.name?.$t || "unknown";
    }

    function filter(list) {
      if (!query) return list;
      return list.filter(v =>
        getTitle(v).toLowerCase().includes(query) ||
        getDescription(v).toLowerCase().includes(query)
      );
    }

    function paginate(list) {
      const start = Math.max(startIndex - 1, 0);
      return list.slice(start, start + maxResults);
    }

    function buildFeed(list, title) {
      return {
        version: "1.0",
        encoding: "UTF-8",
        feed: {
          entry: list,
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

    const videos = await loadVideos();

    if (route[0] === "standardfeeds") {
      const id = route[1];

      if (!id) {
        return respondJSON({
          sets: Object.entries(GDATA_SETS).map(([key, title]) => ({
            title,
            gdata_list_id: key,
            gdata_url: "/feeds/api/videos",
            tab: "featured"
          }))
        });
      }

      const mapped = GDATA_SETS[id];

      const list = mapped
        ? videos.filter(v => mapped === "Most Popular" || getCategory(v) === mapped)
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
      const vid = videos.find(v => getId(v) === route[1]);
      if (!vid) return respondJSON({ entry: null });
      return respondJSON({ entry: vid });
    }

    if (route[0] === "videos") {
      let list = videos;

      if (categoryParam && GDATA_SETS[categoryParam]) {
        const cat = GDATA_SETS[categoryParam];
        list = videos.filter(v =>
          cat === "Most Popular" || getCategory(v) === cat
        );
      }

      return respondJSON(buildFeed(paginate(filter(list)), "Videos"));
    }

    if (route[0] === "users" && route[2] === "uploads") {
      const user = route[1];
      const list = videos.filter(v => getAuthor(v) === user);
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
      const vid = videos.find(v => getId(v) === id);
      if (!vid) return new Response("Not Found", { status: 404 });

      const file = vid?.media$group?.["media$content"]?.[0]?.url;
      return Response.redirect(file.replace("/mp4", ""), 302);
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