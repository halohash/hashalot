export async function onRequest(context) {
  const url = new URL(context.request.url);

  const videos = [
    { id: "QNJL6nfu__Q", url: "https://file.garden/aUYIWVAKvQxCBY-_/2013tvvideos/QNJL6nfu__Q.mp4" },
    { id: "jNQXAC9IVRw", url: "https://haus.webchnl.com/memfs/4b5bb625-7942-4025-b571-dd464a8968f0.m3u8" },
    { id: "unavailable", url: "https://file.garden/aUYIWVAKvQxCBY-_/reverendvideos/system/audio.put.replace.a28c20ee.mp4" },
    { id: "CtJLWVyWbYo", url: "https://archive.org/download/PatronL/Vamos%20a%20celebrar%20con%20Animal%20Crossing%20Parte%209%20-%20Snow%20Day%20%28480p_30fps_H264-128kbit_AAC%29.mp4"},
    { id: "adminperms", url: "https://file.garden/aUYIWVAKvQxCBY-_/reverendvideos/SmashBrawl67/Screen%20recording%202026-04-23%208.31.07%20PM.webm"}
  ];

  const defaultId = "unavailable";

  const requestedId = url.searchParams.get("v");

  let selected = videos.find(v => v.id === requestedId);

  if (!selected) {
    selected = videos.find(v => v.id === defaultId);
  }

  return Response.redirect(selected.url, 302);
}
