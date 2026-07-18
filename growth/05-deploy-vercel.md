# Deploying the Site to Vercel

The site is a static-export Next.js app (`output: "export"` in
`next.config.mjs`), which Vercel supports out of the box — no config file or
code changes are needed to deploy it there.

## One-time setup

1. Go to [vercel.com/new](https://vercel.com/new) and sign in with GitHub.
2. Import the `lawyernearby` repository.
3. Vercel auto-detects Next.js — leave the build settings exactly as detected
   (build command `next build`, no output directory override needed).
4. Do **not** set the `BASE_PATH` environment variable. That variable exists
   only for the GitHub Pages project-subpath deploy; on Vercel the site lives
   at the domain root.
5. Click Deploy. Every push to the production branch redeploys automatically,
   and every other branch gets a preview URL.

## Canonical URLs (sitemap, robots, Open Graph)

`lib/site.ts` resolves the canonical site URL in this order:

1. `NEXT_PUBLIC_SITE_URL` if set — use this once the custom domain is live.
2. Vercel's own `VERCEL_PROJECT_PRODUCTION_URL` — automatic on Vercel, so a
   fresh deploy gets correct `sitemap.xml`/canonical URLs with zero config.
3. The GitHub Pages URL as the last-resort fallback.

## Connecting the custom domain

When pointing `www.residencerelocations.com.au` at Vercel instead of GitHub
Pages:

1. In the Vercel project: Settings → Domains → add
   `www.residencerelocations.com.au` (and the apex, which Vercel will redirect).
2. At Crazy Domains, update DNS to the records Vercel shows you (a CNAME for
   `www`, and Vercel's A record for the apex) — this replaces the GitHub Pages
   records from `03-connect-domain-crazydomains.md`.
3. In the Vercel project settings, add the environment variable
   `NEXT_PUBLIC_SITE_URL = https://www.residencerelocations.com.au` and
   redeploy, so canonicals and the sitemap use the real domain.
4. Once traffic is confirmed on Vercel, disable the GitHub Pages deploy
   (Settings → Pages in the repo, and/or delete `.github/workflows/pages.yml`)
   so two hosts aren't serving competing copies of the site.

## What stays the same

- Google Search Console verification (`public/googlef2f4d07edb2bd8dd.html`)
  ships with the static export on any host, Vercel included.
- GA4 tracking is baked into the pages and is host-independent.
