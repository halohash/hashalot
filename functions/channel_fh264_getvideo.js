export async function onRequest(context) {
  const url = new URL(context.request.url);

  const userAgent = context.request.headers.get("user-agent") || "";
  const ip = context.request.headers.get("CF-Connecting-IP");

  const blacklist = [
    "curl",
    "ChatGPT-User",
    "wget",
    "python",
    "node",
    "axios",
    "bot",
    "crawler",
    "spider",
    "Windows NT 6.3",
    "Mozilla/5.0 (compatible; archive.org_bot; Wayback Machine Live Record; +http://archive.org/details/archive.org_bot)",
    "Android 3","Android 2","Android 3","Android 4","Android 5","Android 6"
  ];
  const ipblacklist = [
    "1.1.1.1","185.65.133.126","65.109.54.230","185.242.226.60","104.21.35.143"
  ];

  const isBlocked = blacklist.some(entry =>
    userAgent.toLowerCase().includes(entry)
  );
  const isHarmfulIpBlocked = ipblacklist.some(entry => ip === entry);
/*
  if (isBlocked || isHarmfulIpBlocked) {
    return Response.redirect(
      "https://file.garden/aUYIWVAKvQxCBY-_/reverendvideos/system/unsupported.mp4",
      302
    );
  } */

    if (isBlocked || isHarmfulIpBlocked) {
    return Response.redirect(
      "https://file.garden/aUYIWVAKvQxCBY-_/reverendvideos/system/deathofyou.mp4",
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
    { id: "plastic", url: "https://file.garden/aUYIWVAKvQxCBY-_/reverendvideos/developers/boll.mp4"},
    { id: "U7QyqBBbabg", url: "https://file.garden/aUYIWVAKvQxCBY-_/database/videos/copy_F0683591-25D6-415E-85F7-1C0909B6DF41.mov"},
    { id: "94zRy9zcUDI", url: "https://file.garden/aUYIWVAKvQxCBY-_/database/videos/nexus10.mp4"}
  ];

  const defaultId = "unavailable";

  const requestedId = url.searchParams.get("v");

  let selected = videos.find(v => v.id === requestedId);

  if (!selected) {
    selected = videos.find(v => v.id === defaultId);
  }

  return Response.redirect(selected.url, 302);
}
