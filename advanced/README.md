# Residence Relocations — Advanced SEO & Content Strategy

This folder is the standing reference for content and SEO work on this site. Read it
before writing new content, not just once. It exists so every future session (or
future you) picks up the strategy exactly where it left off, instead of re-deriving
it from scratch.

**Mandate:** rank on Google *and* get cited by AI answer engines (ChatGPT, Perplexity,
Google AI Overviews), and convert that traffic into real leads. Every piece of content
should do at least one of: rank for a real search, get quoted by an AI assistant, or
move a reader toward the quote calculator.

## Files in this folder

| File | Purpose |
|---|---|
| `01-brand-voice-and-aeo-guide.md` | Tone, voice, and how to write for both Google and AI answer engines |
| `02-keyword-map.md` | Full keyword universe by category, intent, and coverage status |
| `03-content-backlog.md` | Every post idea — published, planned, or parked — with target keyword and angle |
| `04-photo-header-workflow.md` | How to generate real photo headers (character + background composite) to replace a post's icon header |

## The standing brief

- **Business:** Residence Relocations. Positioning: "Move Without Compromise" — you
  shouldn't have to choose between careful/professional and affordable.
- **Specialty:** the Brisbane ↔ Gold Coast corridor, run daily — this is the wedge
  against generalist movers, and it should surface naturally in content, not be forced
  into every sentence.
- **Services covered in content:** house/apartment removals, office relocations,
  rubbish & junk removal, piano removal, pool table removal, spa/hot tub removal,
  pre-sale & bond cleaning.
- **Content types wanted, ongoing:** genuinely informative guides, price/comparison
  posts, how-to posts, and the occasional funny/entertaining post — not every post
  needs to be dry. Humour should be warm and local, never at a customer's expense.
- **Every post needs:** a real answer near the top (AEO), a clear structure (H2s an
  AI can lift), and a CTA into `/#quote` or the relevant service page. The post
  template (`app/blog/[slug]/page.tsx`) already renders a CTA card and related-posts
  block automatically — you don't need to hand-build that part.

## Where things live

- Blog posts: `content/posts.tsx` (each post is a `BlogPost` object with JSX `body`)
- Suburb pages: `content/suburbs.ts` + `app/removalists/[suburb]/page.tsx`
- Service pages: `app/services/*/page.tsx`
- Sitemap: `app/sitemap.ts` — new posts/pages must be added here or they won't be
  submitted to search engines
- Growth/marketing playbooks (GBP, domain, reviews): `../growth/`

## Non-negotiables (don't relitigate these each session)

- Australian English spelling (organise, colour, specialise).
- No competitor trademark impersonation. It's fine to write content that addresses
  searches like "two men and a truck brisbane" honestly (comparing service models,
  explaining what that search usually means) — it is **not** fine to claim to be, or
  imply affiliation with, a trademarked competitor brand.
- Every price mentioned should be presented as an estimate/range consistent with the
  live quote calculator's logic (see `components/QuoteCalculator.tsx` for current
  base prices) — don't invent numbers that contradict the on-site calculator.
- Don't publish a post without adding it to `app/sitemap.ts` and checking the build.
