// Canonical site URL, resolved in priority order:
// 1. NEXT_PUBLIC_SITE_URL — set this explicitly once the custom domain
//    (www.residencerelocations.com.au) is live, on whichever host serves it.
// 2. VERCEL_PROJECT_PRODUCTION_URL — provided automatically by Vercel builds,
//    so a Vercel deploy gets correct canonical/sitemap URLs with zero config.
// 3. The GitHub Pages project URL as the final fallback.
const vercelUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : undefined;

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  vercelUrl ??
  "https://haydohuthman-hash.github.io/lawyernearby";
