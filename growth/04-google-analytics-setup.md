# Google Analytics (GA4) Setup

The site is wired to load GA4 automatically at build time — I can't create the
Google Analytics property myself (it needs your Google account), but once you give
me the Measurement ID, tracking goes live on the next deploy with zero further
code changes.

## What's already done (code side)

- `components/GoogleAnalytics.tsx` loads `gtag.js` and initialises GA4 using
  `NEXT_PUBLIC_GA_MEASUREMENT_ID`. If that variable is empty, the component
  renders nothing — so the site is safe to deploy before you've set this up.
- `.github/workflows/pages.yml` passes `NEXT_PUBLIC_GA_MEASUREMENT_ID` into the
  build from a GitHub Actions repository **variable** (not a secret — GA
  Measurement IDs are meant to be public, they're visible in every page's source).
- Every page automatically gets pageview + Core Web Vitals tracking once the ID
  is set — no per-page code needed since it lives in the root layout.

## What you need to do (5 minutes)

1. **Create the GA4 property**
   - Go to [analytics.google.com](https://analytics.google.com)
   - Admin → Create Property → name it "Residence Relocations"
   - Time zone: Australia/Brisbane, currency: AUD
   - Business details: Real Estate / Local Services, "Generate leads" as an
     objective (this unlocks lead-focused reports)

2. **Create a Web data stream**
   - Inside the new property: Data Streams → Add stream → Web
   - URL: `https://www.residencerelocations.com.au`
   - Stream name: "Residence Relocations — main site"
   - Copy the **Measurement ID** shown (format `G-XXXXXXXXXX`)

3. **Add it to GitHub as a repository variable**
   - In the `haydohuthman-hash/lawyernearby` repo: Settings → Secrets and
     variables → Actions → **Variables** tab (not Secrets)
   - New repository variable:
     - Name: `NEXT_PUBLIC_GA_MEASUREMENT_ID`
     - Value: the `G-XXXXXXXXXX` ID from step 2
   - Save

4. **Trigger a deploy**
   - Either push any change, or go to Actions → "Deploy to GitHub Pages" →
     Run workflow manually
   - The workflow also runs automatically every 6 hours, so it'll pick this up
     on its own even if you do nothing else

5. **Verify it's tracking**
   - In GA4: Reports → Realtime
   - Open the live site in another tab, click around
   - You should see yourself as an active user within ~30 seconds

## Recommended: mark the quote submission as a conversion

Once GA4 is receiving data, the highest-value thing to track is when someone
submits the quote calculator (`components/QuoteCalculator.tsx`) — that's the
actual lead event, not just a pageview. Two options, easiest first:

- **Quick (no code change):** in GA4, mark `form_submit` as a key event
  (Admin → Events → toggle "Mark as key event") — GA4's default enhanced
  measurement already fires `form_submit` when the quote form's mailto
  submission happens, since it's a native `<form>` submit.
- **Precise (small code change, ask me when ready):** fire an explicit
  `gtag('event', 'generate_lead', {...})` call right when a quote is
  successfully submitted, so you get clean lead-count reporting independent of
  any other forms added to the site later.

## Non-negotiables

- Never commit the Measurement ID directly into a source file — it's fine
  being public, but keeping it as a GitHub Actions variable means you can swap
  properties (e.g. staging vs production) without touching code.
- Don't add Google Tag Manager on top of this for now — one tracking layer is
  enough until there's a concrete reason (e.g. needing server-side tagging).
