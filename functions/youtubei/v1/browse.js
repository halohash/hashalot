const CORS_HEADERS = (request) => ({
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers":
    request.headers.get("Access-Control-Request-Headers") ||
    "Content-Type, Authorization",
  "Access-Control-Max-Age": "86400"
})

export async function onRequest(context) {
  const { request } = context
  const method = request.method.toUpperCase()

  if (method === "OPTIONS") {
    return new Response(null, {
      status: 204,
      headers: CORS_HEADERS(request)
    })
  }

  // ... your existing logic ...

  return new Response(JSON.stringify(response), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      ...CORS_HEADERS(request)
    }
  })
}