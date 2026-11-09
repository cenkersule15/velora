import { cookies, headers } from "next/headers";
import { createHmac, randomBytes, timingSafeEqual } from "node:crypto";
const key = randomBytes(32);
export const cookieName = "velora_demo_session";
export function isLocalHost(host: string | null) {
 return !!host && /^(localhost|127\.0\.0\.1|\[::1\])(?::\d+)?$/.test(host);
}
function sign(value: string) { return createHmac("sha256", key).update(value).digest("hex"); }
export function newSession() {
 const value = randomBytes(32).toString("hex") + "." + (Date.now() + 86400000);
 return value + "." + sign(value);
}
export async function getDemoUser() {
 if (!isLocalHost((await headers()).get("host"))) return null;
 const token = (await cookies()).get(cookieName)?.value;
 if (!token || !/^[a-f0-9]{64}\.\d{13}\.[a-f0-9]{64}$/.test(token)) return null;
 const [id, expiry, signature] = token.split(".");
 if (Number(expiry) < Date.now() || !timingSafeEqual(Buffer.from(signature, "hex"), Buffer.from(sign(id + "." + expiry), "hex"))) return null;
 return {userId: id};
}
