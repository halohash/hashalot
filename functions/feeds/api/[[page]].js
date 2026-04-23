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

    const parts = url.pathname.split("/").filter(Boolean);
    const feedIndex = parts.indexOf("feeds");

    if (feedIndex === -1 || parts[feedIndex + 1] !== "api") {
      return new Response("Not Found", { status: 404 });
    }

    const route = parts.slice(feedIndex + 2);

    async function loadVideos() {
      const res = await fetch(FEED_URL);
      const text = await res.text();
      const data = JSON.parse(text);

      if (Array.isArray(data)) return data;
      if (data.feed?.entry) return data.feed.entry;
      return [];
    }

    function getId(v) {
      return v?.media$group?.["yt$videoid"]?.$t;
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

    function paginate(list) {
      const start = Math.max(startIndex - 1, 0);
      return list.slice(start, start + maxResults);
    }

    function filter(list) {
      if (!query) return list;
      return list.filter(v =>
        getTitle(v).toLowerCase().includes(query) ||
        getDescription(v).toLowerCase().includes(query)
      );
    }

    function buildFeed(page, total, title, description = "") {
      return {
        version: "1.0",
        encoding: "UTF-8",
        feed: {
          entry: page,
          title: { $t: title },
          subtitle: { $t: description },
          author: {
            name: { $t: "YouTube" },
            uri: { $t: "http://www.youtube.com/" }
          },
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
      return new Response(body, {
        headers: {
          "content-type": callback ? "application/javascript" : "application/json"
        }
      });
    }

    function escapeXML(str) {
      return str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
    }

    function entryToXML(v) {
      const id = getId(v);
      const title = escapeXML(getTitle(v));
      const desc = escapeXML(getDescription(v));
      const author = escapeXML(getAuthor(v));

      return `
<entry>
  <id>${id}</id>
  <published>${v.published}</published>
  <updated>${v.updated}</updated>
  <title>${title}</title>
  <content>${desc}</content>
  <author>
    <name>${author}</name>
  </author>
  <media:group>
    <media:title>${title}</media:title>
    <media:description>${desc}</media:description>
    <media:content url="${v.media$group.media$content[0].url}" type="video/mp4"/>
    <yt:videoid>${id}</yt:videoid>
  </media:group>
</entry>`;
    }

    function buildXML(page, total, title, description = "") {
      return `<?xml version="1.0" encoding="UTF-8"?>
<feed xmlns="http://www.w3.org/2005/Atom"
 xmlns:media="http://search.yahoo.com/mrss/"
 xmlns:yt="http://gdata.youtube.com/schemas/2007"
 xmlns:openSearch="http://a9.com/-/spec/opensearch/1.1/">

  <title>${escapeXML(title)}</title>
  <subtitle>${escapeXML(description)}</subtitle>
  <updated>${new Date().toISOString()}</updated>

  <author>
    <name>YouTube</name>
    <uri>http://www.youtube.com/</uri>
  </author>

  <openSearch:totalResults>${total}</openSearch:totalResults>
  <openSearch:startIndex>${startIndex}</openSearch:startIndex>
  <openSearch:itemsPerPage>${maxResults}</openSearch:itemsPerPage>

  ${page.map(entryToXML).join("\n")}

</feed>`;
    }

    const videos = await loadVideos();

    let list = filter(videos);
    let page = paginate(list);

    const title = "Videos";
    const description = "YouTube feed";

    if (alt === "json") {
      return respondJSON(buildFeed(page, list.length, title, description));
    }

    const xml = buildXML(page, list.length, title, description);

    return new Response(xml, {
      headers: { "content-type": "application/xml" }
    });

  } catch (e) {
    return new Response(e.stack || String(e), {
      status: 500,
      headers: { "content-type": "text/plain" }
    });
  }
}