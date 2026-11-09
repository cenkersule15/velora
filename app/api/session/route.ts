import { cookieName, isLocalHost, newSession } from "../../../lib/demo-session";
export async function POST(request: Request) {
 const url = new URL(request.url);
 if (!isLocalHost(request.headers.get("host"))) return Response.json({error: "Local demo only"}, {status: 403});
 if (request.headers.get("origin") && request.headers.get("origin") !== url.origin) return Response.json({error: "Invalid origin"}, {status: 403});
 return Response.json({ok: true}, {headers: {"Set-Cookie": `${cookieName}=${newSession()}; Path=/; HttpOnly; SameSite=Strict; Max-Age=86400${url.protocol === "https:" ? "; Secure" : ""}`, "Cache-Control": "no-store"}});
}
