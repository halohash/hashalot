export async function onRequest(context) {
  const { request } = context;

  const ip = request.headers.get("CF-Connecting-IP");

  const blockedIPs = [
    { ip: "205.210.31.86", reason: "Scraping" },
    { ip: "119.179.249.227", reason: "Spam requests" },
    { ip: "61.72.55.130", reason: "Abuse" },
    { ip: "172.202.117.125", reason: "Bot traffic" },
    { ip: "193.138.63.50", reason: "Rate limit bypass attempts" },
    { ip: "182.95.107.110", reason: "Malicious activity" },
    { ip: "195.178.110.30", reason: "Scanner" },
    { ip: "61.171.215.25", reason: "Spam" },
    { ip: "63.46.33.63", reason: "Unknown abuse" },
    { ip: "147.185.132.167", reason: "Botnet" },
    { ip: "213.209.159.236", reason: "Flooding" },
    { ip: "106.75.13.142", reason: "Suspicious traffic" },
    { ip: "43.227.64.133", reason: "Exploit attempts" },
    { ip: "171.106.1.231", reason: "Brute force" },
    { ip: "167.148.161.16", reason: "Scanner" },
    { ip: "201.186.40.161", reason: "Spam" },
    { ip: "92.118.39.236", reason: "Bot traffic" },
    { ip: "20.116.34.103", reason: "Abuse" },
    { ip: "91.231.89.231", reason: "Malicious activity" }
  ];

  const banned = blockedIPs.find(entry => entry.ip === ip);

  if (banned) {
    return new Response(
      `<h1>YOU HAVE BEEN PICKLE BANNED!</h1>
       <br>
       <img src="https://file.garden/aUYIWVAKvQxCBY-_/only_pickles.png">
       <br>
       <b>Reason: ${banned.reason}</b>
       <br>
       <b>this type of ban cannot be appealed.</b>`,
      {
        status: 403,
        headers: { "content-type": "text/html" }
      }
    );
  }

  return context.next();
}
