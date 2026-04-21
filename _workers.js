export default {
  async fetch(request, env, ctx) {
    const ip = request.headers.get("CF-Connecting-IP");
    const agent = request.headers.get("user-agent");
    const blockedIPs = [
      "185.65.133.126",
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

    if (blockedIPs.includes(ip)) {
      return new Response("<h1>YOU HAVE BEEN PICKLE BANNED!</h1><br><img src='https://file.garden/aUYIWVAKvQxCBY-_/only_pickles.png'></img><br><b>this type of ban cannot be appealed. possibly due to your ip being abused to show cp or other illegal stuff. so if you see this message fuck you pedo</b>", {
        status: 403,
        headers: {
          "content-type": "text/plain"
        }
      });
    }

    // Allow normal request to continue
    return fetch(request);
  }
};