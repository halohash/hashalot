export async function onRequest(context) {
  const url = new URL(context.request.url);

  const userAgent = context.request.headers.get("user-agent") || "";

  const blacklist = [
    "curl",
    "ChatGPT-User",
    "wget",
    "python",
    "node",
    "axios",
    "bot",
    "crawler",
    "spider"
  ];

  const isBlocked = blacklist.some(entry =>
    userAgent.toLowerCase().includes(entry)
  );

  if (isBlocked) {
    return Response.redirect(
      "https://file.garden/aUYIWVAKvQxCBY-_/reverendvideos/developers/unsupported.mp4",
      302
    );
  }

  const videos = [
    { id: "QNJL6nfu__Q", url: "https://file.garden/aUYIWVAKvQxCBY-_/2013tvvideos/QNJL6nfu__Q.mp4" },
    { id: "jNQXAC9IVRw", url: "https://haus.webchnl.com/memfs/4b5bb625-7942-4025-b571-dd464a8968f0.m3u8" },
    { id: "unavailable", url: "https://file.garden/aUYIWVAKvQxCBY-_/reverendvideos/system/audio.put.replace.a28c20ee.mp4" },
    { id: "CtJLWVyWbYo", url: "https://archive.org/download/PatronL/Vamos%20a%20celebrar%20con%20Animal%20Crossing%20Parte%209%20-%20Snow%20Day%20%28480p_30fps_H264-128kbit_AAC%29.mp4"},
    { id: "adminperms", url: "https://file.garden/aUYIWVAKvQxCBY-_/reverendvideos/SmashBrawl67/Screen%20recording%202026-04-23%208.31.07%20PM.webm"},
    { id: "Kalderz", url: "https://file.garden/aUYIWVAKvQxCBY-_/reverendvideos/SmashBrawl67/direct_url.mp4"},
    { id: "plastic", url: "https://file.garden/aUYIWVAKvQxCBY-_/reverendvideos/developers/boll.mp4"}
  ];

  const defaultId = "unavailable";

  const requestedId = url.searchParams.get("v");

  let selected = videos.find(v => v.id === requestedId);

  if (!selected) {
    selected = videos.find(v => v.id === defaultId);
  }

  return Response.redirect(selected.url, 302);
}