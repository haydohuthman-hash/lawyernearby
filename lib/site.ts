// Canonical site URL. The deploy workflow sets NEXT_PUBLIC_SITE_URL to the
// custom domain automatically once DNS for www.residencerelocations.com.au
// points at GitHub Pages (see .github/workflows/pages.yml).
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://haydohuthman-hash.github.io/lawyernearby";

// Prefix for hand-written asset paths (e.g. <img src>) that Next doesn't
// rewrite automatically. Matches next.config.mjs's basePath, which the
// deploy workflow sets to "/lawyernearby" on the github.io project URL and
// "" on the custom domain (see .github/workflows/pages.yml).
export const BASE_PATH = process.env.BASE_PATH || "";
