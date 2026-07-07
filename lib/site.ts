// Canonical site URL. The deploy workflow sets NEXT_PUBLIC_SITE_URL to the
// custom domain automatically once DNS for www.residencerelocations.com.au
// points at GitHub Pages (see .github/workflows/pages.yml).
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://haydohuthman-hash.github.io/lawyernearby";
