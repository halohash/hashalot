export async function onRequest(context) {
  function withCORS(res) {
    const headers = new Headers(res.headers);
    headers.set("Access-Control-Allow-Origin", "*");
    return new Response(res.body, {
      status: res.status,
      statusText: res.statusText,
      headers
    });
  }

  try {
    const { request } = context;
    const url = new URL(request.url);

    const FEED_URL = "https://tv36.pages.dev/videos.json";

    const alt = url.searchParams.get("alt") || "xml";
    const callback = url.searchParams.get("callback");
    const query = (url.searchParams.get("q") || "").toLowerCase();
    const startIndex = parseInt(url.searchParams.get("start-index") || "1");
    const maxResults = parseInt(url.searchParams.get("max-results") || "25");

    const parts = url.pathname.split("/").filter(Boolean);
    const feedIndex = parts.indexOf("feeds");

    if (feedIndex === -1 || parts[feedIndex + 1] !== "api") {
      return withCORS(new Response("Not Found", { status: 404 }));
    }

    const route = parts.slice(feedIndex + 2);

    if (route[0] === "users" && route[1] === "trends" && route[2] === "favorites") {
      const redirectURL = new URL(url.origin + "/feeds/api/standardfeeds/most_popular_Trending");
      redirectURL.search = url.search;
      return withCORS(Response.redirect(redirectURL.toString(), 302));
    }

    if (route[0] === "users" && route[1] === "default" && route[2] === "recommendations") {
      const redirectURL = new URL(url.origin + "/feeds/api/videos");
      redirectURL.search = url.search;
      return withCORS(Response.redirect(redirectURL.toString(), 302));
    }

    if (route[0] === "playlists") {
      const redirectURL = new URL("https://tv96.pages.dev/feeds/api/videos");
      redirectURL.search = url.search;
      return withCORS(Response.redirect(redirectURL.toString(), 302));
    }

    if (route[0] === "users" && route[1] === "HaloHash" && route[2] === "favorites") {
      const redirectURL = new URL("https://tv96.pages.dev/feeds/api/videos");
      redirectURL.search = url.search;
      return withCORS(Response.redirect(redirectURL.toString(), 302));
    }

    const STANDARD_FEEDS = {
      most_popular: "Most Popular",
      most_popular_Music: "Music",
      most_popular_Games: "Gaming",
      most_popular_Sports: "Sports",
      most_popular_Film: "Film & Animation",
      most_popular_Entertainment: "Entertainment",
      most_popular_Comedy: "Comedy",
      most_popular_News: "News & Politics",
      most_popular_People: "People & Blogs",
      most_popular_Tech: "Science & Technology",
      most_popular_Howto: "Howto & Style",
      most_popular_Education: "Education",
      most_popular_Animals: "Pets & Animals"
    };

    async function loadVideos() {
      const res = await fetch(FEED_URL, { cf: { cacheTtl: 60 } });
      if (!res.ok) throw new Error("Feed fetch failed");
      const data = await res.json();
      if (Array.isArray(data)) return data;
      if (data.feed?.entry) return data.feed.entry;
      return [];
    }

    function getId(v) {
      return v?.media$group?.["yt$videoid"]?.$t || "";
    }

    function getTitle(v) {
      return v?.title?.$t || "";
    }

    function getDescription(v) {
      return v?.media$group?.["media$description"]?.$t || "";
    }

    function getAuthor(v) {
      return v?.author?.name?.$t || "unknown";
    }

    function getCategory(v) {
      return v?.media$group?.["media$category"]?.term || "";
    }

    function getVideoURL(v) {
      return v?.media$group?.["media$content"]?.[0]?.url || "";
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

    function buildFeed(page, total, title) {
      return {
        version: "1.0",
        encoding: "UTF-8",
        feed: {
          entry: page,
          title: { $t: title },
          "openSearch$totalResults": { $t: String(total) },
          "openSearch$startIndex": { $t: String(startIndex) },
          "openSearch$itemsPerPage": { $t: String(maxResults) },
          updated: { $t: new Date().toISOString() }
        }
      };
    }

    function respondJSON(data) {
      let body = JSON.stringify(data);
      if (callback) body = `${callback}(${body})`;
      return withCORS(new Response(body, {
        headers: {
          "content-type": callback ? "application/javascript" : "application/json"
        }
      }));
    }

    function escapeXML(str) {
      return String(str || "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
    }

    function entryXML(v) {
      return `
<entry>
  <id>${getId(v)}</id>
  <title>${escapeXML(getTitle(v))}</title>
  <content>${escapeXML(getDescription(v))}</content>
  <author><name>${escapeXML(getAuthor(v))}</name></author>
  <media:group>
    <media:title>${escapeXML(getTitle(v))}</media:title>
    <media:content url="${getVideoURL(v)}"/>
    <yt:videoid>${getId(v)}</yt:videoid>
  </media:group>
</entry>`;
    }

    function buildXML(page, total, title) {
      return `<?xml version="1.0" encoding="UTF-8"?>
<feed xmlns="http://www.w3.org/2005/Atom"
 xmlns:media="http://search.yahoo.com/mrss/"
 xmlns:yt="http://gdata.youtube.com/schemas/2007">

<title>${escapeXML(title)}</title>
<updated>${new Date().toISOString()}</updated>
<openSearch:totalResults xmlns:openSearch="http://a9.com/-/spec/opensearch/1.1/">${total}</openSearch:totalResults>

${page.map(entryXML).join("")}

</feed>`;
    }

    const videos = await loadVideos();

    if (route[0] === "videos" && route[2] === "related") {
      const id = route[1];
      const base = videos.find(v => getId(v) === id);
      if (!base) return withCORS(new Response("Not Found", { status: 404 }));

      let related = videos.filter(v => getId(v) !== id);
      const cat = getCategory(base);

      if (cat) {
        related = related.filter(v => getCategory(v) === cat);
      }

      const page = paginate(filter(related));

      return alt === "json"
        ? respondJSON(buildFeed(page, related.length, "Related"))
        : withCORS(new Response(buildXML(page, related.length, "Related"), {
            headers: { "content-type": "application/xml" }
          }));
    }

    if (route[0] === "videos" && route[1]) {
      const id = route[1];
      const v = videos.find(x => getId(x) === id);
      if (!v) return withCORS(new Response("Not Found", { status: 404 }));

      return alt === "json"
        ? respondJSON({ entry: v })
        : withCORS(new Response(entryXML(v), {
            headers: { "content-type": "application/xml" }
          }));
    }

    if (route[0] === "standardfeeds") {
      const id = route[1];

      if (!id) {
        return respondJSON({
          sets: Object.entries(STANDARD_FEEDS).map(([k, t]) => ({
            title: t,
            gdata_list_id: k,
            gdata_url: `${url.origin}/feeds/api/videos`
          }))
        });
      }

      let list = videos;
      const mapped = STANDARD_FEEDS[id];

      if (mapped && mapped !== "Most Popular") {
        list = videos.filter(v => getCategory(v) === mapped);
      }

      const page = paginate(filter(list));

      return alt === "json"
        ? respondJSON(buildFeed(page, list.length, mapped || "Most Popular"))
        : withCORS(new Response(buildXML(page, list.length, mapped || "Most Popular"), {
            headers: { "content-type": "application/xml" }
          }));
    }

    if (route[0] === "users" && route[2] === "uploads") {
      const user = route[1].toLowerCase();
      const list = videos.filter(v => getAuthor(v).toLowerCase() === user);
      const page = paginate(list);

      return alt === "json"
        ? respondJSON(buildFeed(page, list.length, `${user} uploads`))
        : withCORS(new Response(buildXML(page, list.length, `${user} uploads`), {
            headers: { "content-type": "application/xml" }
          }));
    }

    if (route[0] === "videos") {
      const list = filter(videos);
      const page = paginate(list);

      return alt === "json"
        ? respondJSON(buildFeed(page, list.length, "Videos"))
        : withCORS(new Response(buildXML(page, list.length, "Videos"), {
            headers: { "content-type": "application/xml" }
          }));
    }

    return withCORS(new Response("Not Found", { status: 404 }));

  } catch (e) {
    return withCORS(new Response(e.stack || String(e), {
      status: 500,
      headers: { "content-type": "text/plain" }
    }));
  }
}
