export async function onRequest(context) {
  const { request } = context;

  const ip = request.headers.get("CF-Connecting-IP");

  const blockedIPs = [
    "205.210.31.86",
    "119.179.249.227",
    "61.72.55.130",
    "172.202.117.125",
    "193.138.63.50",
    "182.95.107.110",
    "195.178.110.30",
    "61.171.215.25",
    "63.46.33.63",
    "147.185.132.167",
    "213.209.159.236",
    "106.75.13.142",
    "43.227.64.133",
    "171.106.1.231",
    "167.148.161.16",
    "201.186.40.161",
    "92.118.39.236",
    "20.116.34.103",
    "91.231.89.231"
  ];

  // 🚫 Block IPs
  if (ip && blockedIPs.includes(ip)) {
    return new Response(
      `<h1>YOU HAVE BEEN PICKLE BANNED!</h1>
       <br>
       <img src="https://file.garden/aUYIWVAKvQxCBY-_/only_pickles.png">
       <br>
       <b>this type of ban cannot be appealed.</b>`,
      {
        status: 403,
        headers: { "content-type": "text/html" }
      }
    );
  }

  // ✅ Let everything else through
  return context.next();
}
