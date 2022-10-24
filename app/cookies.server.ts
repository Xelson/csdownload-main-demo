import { createCookie } from "@remix-run/node"; // or cloudflare/deno

export const cookieLang = createCookie("lang", {
  // all of these are optional defaults that can be overridden at runtime
  httpOnly: true,
  path: "/",
  sameSite: "lax",
  secrets: ["s3cret1"],
  secure: true,
});