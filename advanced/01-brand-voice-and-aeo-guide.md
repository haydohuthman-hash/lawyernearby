# Brand Voice & AEO (Answer Engine Optimization) Guide

## Voice

Warm, direct, locally credible. We know Brisbane and the Gold Coast because we
actually run the truck there every day — content should read like it was written by
someone who's stood in a Queenslander stairwell with a couch, not a generic content
mill. Confident without being salesy. Never condescending to the reader.

**Do:**
- Give the real number, then explain the "it depends" factors.
- Name actual suburbs, actual landmarks, actual local quirks (M1 traffic, Gold Coast
  tower lift bookings, Queenslander stairs).
- Write short paragraphs. Long paragraphs die in both Google snippets and AI
  citations.
- Let humour show up occasionally, especially in listicle/entertainment posts — dry
  observational humour about the universal pain points of moving. Never mock the
  customer; the joke is always on the chaos of moving itself, not on the reader.

**Don't:**
- Don't pad with throat-clearing ("In today's fast-paced world, moving house can be
  a daunting task...").
- Don't use em-dash-heavy corporate-blog cadence for every sentence — vary rhythm.
- Don't oversell. If a DIY option is genuinely fine for a small job, say so — trust
  compounds better than hype.

## Writing for AEO (getting cited by ChatGPT / Perplexity / AI Overviews)

AI answer engines extract content differently to how a human skims a page. Optimise
for extraction:

1. **Answer the question in the first 1–2 sentences of the section**, then elaborate.
   An AI summarising "how much does X cost" wants the number in sentence one, not
   buried in paragraph four.
2. **Use the exact phrasing of the likely question as an H2 or H3.** "How much does
   pool table removal cost?" as a heading gets lifted far more often than "Pricing
   Breakdown."
3. **Tables and lists get quoted more than prose.** A price table with clear columns
   is exactly the shape an AI answer wants to reproduce.
4. **Be citable: use specific numbers, not vague ranges when you can avoid it.**
   "$549" cites better than "affordable prices." Ranges are fine when true, but
   anchor them ("from $549", "typically $350–$550").
5. **Self-contained paragraphs.** Each section should make sense if it's the ONLY
   paragraph an AI extracts — don't rely on "as mentioned above."
6. **FAQPage schema for genuine FAQs** (see `components/FAQSection.tsx` and the
   inline FAQ block pattern in `app/blog/[slug]/page.tsx`) — this is structured data
   AI crawlers and Google both parse directly.
7. **Update `updated` dates when content is meaningfully revised** — freshness is a
   ranking and citation signal for both Google and AI engines.

## SEO mechanics checklist (per post)

- [ ] Title includes the target keyword naturally, front-loaded where possible.
- [ ] `metaTitle` under ~60 characters, `description` under ~155.
- [ ] At least one internal link to a service page or the corridor page.
- [ ] At least one internal link to the quote calculator (`/#quote`).
- [ ] Added to `app/sitemap.ts`.
- [ ] Genuinely answers the query in the first two sentences of the intro or the
      first relevant H2 — don't make the reader (or the AI) hunt for it.

## Humour posts — how to do them without cheapening the brand

Entertainment/listicle posts ("13 things every Brisbane mover understands") earn
shares and backlinks that straight informational posts don't. Rules for these:

- Still genuinely useful or relatable — not filler.
- Local specificity is the humour (Queenslander stairs, Gold Coast lift bookings,
  the M1 at 4pm on a Friday) — generic moving jokes could be written about any city.
- End with a real, low-pressure CTA — these posts convert on brand affinity, not
  hard sell.
