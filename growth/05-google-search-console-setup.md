# Google Search Console Setup

Search Console needs your Google account to set up — I can't create the property
myself, but everything on the site side is ready to go the moment you add it.
Two verification methods work here; DNS is simplest since we already have your
Crazy Domains panel open from the domain setup.

## What's already done (code side)

- `app/sitemap.ts` generates a full sitemap automatically from every page,
  suburb, and blog post — nothing to maintain manually.
- `app/robots.ts` (if present) or the static `robots.txt` already points
  crawlers at the sitemap.
- The root layout (`app/layout.tsx`) supports the HTML-tag verification method
  out of the box: set `NEXT_PUBLIC_GSC_VERIFICATION` and it renders the
  `google-site-verification` meta tag automatically, no code changes needed.
- `.github/workflows/pages.yml` passes that variable into the build from a
  GitHub Actions repository variable, same pattern as the GA4 Measurement ID.

## Step 1: add the property

1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add property → **Domain** (not URL-prefix) → enter `residencerelocations.com.au`
   — a domain property covers `www`, the bare apex, and `http`/`https` all at
   once, which is the right choice here since both resolve to the same site.

## Step 2: verify ownership (DNS method — recommended)

Domain properties are verified via a DNS TXT record, not a meta tag:

1. Google shows you a TXT record value like `google-site-verification=abc123...`
2. In Crazy Domains DNS panel (same place you added the A/CNAME records):
   add a new **TXT** record — Host/Sub Domain: `@` (or blank), Value: the
   string Google gave you
3. Back in Search Console, click **Verify** — DNS TXT records usually verify
   within minutes since your DNS is already working correctly

## Step 2 (alternative): HTML tag method

If you'd rather not touch DNS again, use a **URL-prefix** property instead of
a domain property, and choose the HTML tag verification option:

1. Google gives you a meta tag value (just the content string, e.g. `abc123...`)
2. Add it to the repo: Settings → Secrets and variables → Actions →
   **Variables** tab → new repository variable named
   `NEXT_PUBLIC_GSC_VERIFICATION`, value = that string
3. Trigger a deploy (push, or Actions → run workflow manually)
4. Back in Search Console, click **Verify**

Note: URL-prefix properties only cover the exact URL you enter (e.g. just
`https://www.residencerelocations.com.au`), so you'd want two — one for
`www` and one for the bare apex — unless you use the DNS domain-property
method above, which covers both in one go.

## Step 3: submit the sitemap

Once verified, go to Sitemaps in the left nav and submit:

```
https://www.residencerelocations.com.au/sitemap.xml
```

This tells Google about every page, suburb, and blog post immediately rather
than waiting for organic crawl discovery.

## Step 4: link it to GA4 (optional but useful)

In GA4 (Admin → Product links → Search Console links), link the same
property — this pulls Search Console's query and impression data directly
into GA4 reports, so you can see search terms alongside conversion data in
one place instead of switching tools.

## What to check after a week or two

- **Coverage report**: confirms all pages are indexed, flags any Google
  couldn't crawl (shouldn't happen on a static export like this, but worth
  checking once).
- **Performance report**: shows which search queries are actually bringing
  traffic — this is the real-world version of the keyword map in
  `advanced/02-keyword-map.md` and worth cross-checking against it
  periodically to see which targeted keywords are actually landing.

## Non-negotiables

- Don't remove the `NEXT_PUBLIC_GSC_VERIFICATION` variable once it's set and
  verified — Google periodically re-checks verification and removing it can
  cause the property to lose verified status.
- Prefer the DNS domain-property method if you're comfortable with one more
  DNS record — it's the more complete option and matches how the GBP/domain
  setup was already done.
