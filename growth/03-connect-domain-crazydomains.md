# Connect www.residencerelocations.com.au (Crazy Domains → GitHub Pages)

The website is already fully prepared for the domain. The deploy pipeline checks DNS
every 6 hours (and on every code push): **the moment the DNS records below are live,
the site automatically switches** to https://www.residencerelocations.com.au with
correct canonical URLs, root paths and a CNAME file. Nothing else to configure code-side.

**Your part takes ~5 minutes in the Crazy Domains control panel.**

---

## Step 1 — Log in to Crazy Domains

1. Go to **crazydomains.com.au** → Log in.
2. Open **My Account → Domains** and click **residencerelocations.com.au**.
3. Find **DNS Settings** / **DNS & Nameservers** (Crazy Domains sometimes labels it
   "Manage DNS" or "Zone Editor").

> If the domain currently uses Crazy Domains "Web Hosting" or "Website Builder" DNS
> presets, choose to manage DNS records manually.

## Step 2 — Delete any conflicting records

Remove existing **A** records on `@` (the bare domain) and any **A/CNAME** on `www`
that point to Crazy Domains parking/hosting (currently `27.124.125.171`).

## Step 3 — Add these records exactly

| Type | Host / Name | Value | TTL |
|---|---|---|---|
| CNAME | `www` | `haydohuthman-hash.github.io` | 1 hour (or default) |
| A | `@` | `185.199.108.153` | 1 hour |
| A | `@` | `185.199.109.153` | 1 hour |
| A | `@` | `185.199.110.153` | 1 hour |
| A | `@` | `185.199.111.153` | 1 hour |

Notes:
- The CNAME value is the **GitHub username domain only** — no `/lawyernearby`, no `https://`.
- The four A records make the bare domain (`residencerelocations.com.au`) work too;
  GitHub will redirect it to `www`.
- Do **not** add a trailing dot unless the panel requires it (most add it automatically).

## Step 4 — Save and wait

- DNS usually propagates in 15 minutes – 2 hours (worst case 24–48h).
- Within 6 hours of propagation the site auto-deploys to the custom domain
  (or trigger it instantly: GitHub repo → Actions → "Deploy to GitHub Pages" → Run workflow).

## Step 5 — One click in GitHub for HTTPS (after DNS is live)

1. Go to **github.com/haydohuthman-hash/lawyernearby → Settings → Pages**.
2. Custom domain should show `www.residencerelocations.com.au` with a green check
   (the deploy writes it automatically).
3. Tick **Enforce HTTPS** once the certificate is issued (GitHub provisions it
   automatically; can take up to an hour after DNS verifies).

## How to know it worked

- https://www.residencerelocations.com.au loads the site with a padlock.
- https://residencerelocations.com.au redirects to the www version.
- The old github.io URL 301-redirects to the custom domain (SEO-safe — Google
  transfers indexing to the new domain automatically).

## After the domain is live — SEO follow-ups (fast)

1. **Google Search Console**: add property `www.residencerelocations.com.au`
   (DNS verification is easiest — Crazy Domains TXT record), then submit
   `https://www.residencerelocations.com.au/sitemap.xml`.
2. **Google Business Profile**: update the website + booking links to the new domain
   (replace the github.io URLs from `growth/02` asset pack).
3. Update any directory/citation listings to the new domain for NAP consistency.
