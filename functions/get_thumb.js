export async function onRequest(context) {
  const url = new URL(context.request.url);

  const type = url.searchParams.get("t"); // "video" or "profile"

  const videos = [
    { id: "unavailable", url: "https://file.garden/aUYIWVAKvQxCBY-_/reverendthumbnails/placeholder.png" },
    { id: "adminperms", url: "https://file.garden/aUYIWVAKvQxCBY-_/database/collabvm-archive/vm6.PNG" },
    { id: "plastics", url: "https://file.garden/aUYIWVAKvQxCBY-_/reverendthumbnails/b237ff12.png"}
  ];

  const profiles = [
    { id: "default", url: "https://file.garden/aUYIWVAKvQxCBY-_/reverendthumbnails/profiles/defaults/youtube%20blue%20curly%20guy.png" },
    { id: "KmauG4Z", url: "https://file.garden/aUYIWVAKvQxCBY-_/reverendthumbnails/profiles/KmauG4Z.png" },
    { id:"Y30JRSgfhYXA6i6xX1erWg", url:"https://file.garden/aUYIWVAKvQxCBY-_/reverendthumbnails/profiles/smosh.jpg"},
    { id:"DeveloperAccess", url:"https://file.garden/aUYIWVAKvQxCBY-_/reverendthumbnails/profiles/developeraccount.jpg"},
    { id:"4dOFHrcqbhrf9yrNUN13cw", url:"https://file.garden/aUYIWVAKvQxCBY-_/reverendthumbnails/profiles/default.jpg"}
  ];

  let selected;
  let requestedId;

if (type === "profile" || type === "1") {
  requestedId = url.searchParams.get("v"); // use "p" for profiles
  selected = profiles.find(p => p.id === requestedId) 
          || profiles.find(p => p.id === "default");
} else {
  // default to video thumbnails
  requestedId = url.searchParams.get("v");
  selected = videos.find(v => v.id === requestedId) 
          || videos.find(v => v.id === "unavailable");
}

  return Response.redirect(selected.url, 302);
}