export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

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

    // 🚫 IP BLOCKING FIRST
    if (blockedIPs.includes(ip)) {
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

    try {
      // =========================
      // OAUTH DEVICE CODE
      // =========================
      if (url.pathname === "/o/oauth2/device/code" && request.method === "POST") {
        const body = await request.json();
        const { client_id, scope } = body;

        if (!client_id || !scope) {
          return new Response("Client ID and scope required", { status: 400 });
        }

        const res = await fetch("https://oauth2.googleapis.com/device/code", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams({ client_id, scope })
        });

        return new Response(await res.text(), {
          status: res.status,
          headers: { "Content-Type": "application/json" }
        });
      }

      // =========================
      // TOKEN
      // =========================
      if (url.pathname === "/o/oauth2/token" && request.method === "POST") {
        const body = await request.json();
        const { client_id, client_secret, device_code, grant_type, refresh_token } = body;

        let params;

        if (grant_type === "urn:ietf:params:oauth:grant-type:device_code") {
          params = new URLSearchParams({
            client_id,
            client_secret,
            device_code,
            grant_type
          });
        } else if (grant_type === "refresh_token") {
          params = new URLSearchParams({
            client_id,
            client_secret,
            refresh_token,
            grant_type
          });
        } else {
          return new Response("Invalid grant_type", { status: 400 });
        }

        const res = await fetch("https://oauth2.googleapis.com/token", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: params
        });

        return new Response(await res.text(), {
          status: res.status,
          headers: { "Content-Type": "application/json" }
        });
      }

      // =========================
      // REVOKE
      // =========================
      if (url.pathname === "/o/oauth2/revoke" && request.method === "POST") {
        const { token } = await request.json();

        if (!token) {
          return new Response("you need a god damn token", { status: 400 });
        }

        const res = await fetch("https://oauth2.googleapis.com/revoke", {
          method: "POST",
          body: new URLSearchParams({ token })
        });

        return new Response(await res.text(), { status: res.status });
      }

      // =========================
      // YOUTUBE CHANNELS
      // =========================
      if (url.pathname === "/api/youtube/channels") {
        const auth = request.headers.get("authorization");
        const accessToken = auth?.startsWith("Bearer ") ? auth.split(" ")[1] : null;

        const res = await fetch("https://www.youtube.com/youtubei/v1/guide", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {})
          },
          body: JSON.stringify({
            context: {
              client: {
                clientName: "TVHTML5",
                clientVersion: "7.20250205.16.00",
                hl: "en",
                gl: "US"
              }
            }
          })
        });

        return new Response(await res.text(), {
          headers: { "Content-Type": "application/json" }
        });
      }

      // =========================
      // FALLBACK (normal site)
      // =========================
      return fetch(request);

    } catch (err) {
      return new Response(`Error: ${err.message}`, { status: 500 });
    }
  }
};