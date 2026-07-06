import Link from "next/link";
import type { ReactNode } from "react";

export type BlogPost = {
  slug: string;
  title: string;
  metaTitle?: string;
  description: string;
  excerpt: string;
  keyword: string;
  category: string;
  date: string;
  updated: string;
  readMins: number;
  faqs?: { question: string; answer: string }[];
  body: ReactNode;
};

export const POSTS: BlogPost[] = [
  {
    slug: "how-much-do-removalists-cost-brisbane-to-gold-coast",
    title: "How Much Do Removalists Cost Brisbane to Gold Coast? (2026 Price Guide)",
    metaTitle: "How Much Do Removalists Cost Brisbane to Gold Coast? 2026 Guide",
    description:
      "A clear 2026 price guide to what removalists cost from Brisbane to the Gold Coast, broken down by home size, plus the factors that change your quote and how to pay less.",
    excerpt:
      "What a Brisbane to Gold Coast move actually costs in 2026 — real price ranges by home size, the factors that move your quote, and how to keep it down.",
    keyword: "removalists cost brisbane to gold coast",
    category: "Pricing",
    date: "2026-07-06",
    updated: "2026-07-06",
    readMins: 6,
    faqs: [
      {
        question: "How much does it cost to move from Brisbane to the Gold Coast?",
        answer:
          "Most Brisbane to Gold Coast moves fall between $500 and $1,200 depending on the size of your home and the exact distance between your two addresses. A 2-bedroom move typically starts from around $549 and a 3-bedroom home from around $699, with the final figure fixed on your quote before moving day.",
      },
      {
        question: "Is it cheaper to move on a weekday?",
        answer:
          "Yes. Weekdays and mid-month dates are quieter on this corridor, so availability is better and you avoid the end-of-month and weekend rush. If your dates are flexible, a Tuesday to Thursday move mid-month is the easiest to book and the least stressful.",
      },
      {
        question: "Do removalists charge by the hour for a Brisbane to Gold Coast move?",
        answer:
          "Some do, which is where costs blow out when traffic on the M1 is heavy. Residence Relocations quotes one fixed price based on your home size and distance, agreed before the day, so a slow run never changes what you pay.",
      },
    ],
    body: (
      <>
        <p>
          If you&apos;re planning a move from Brisbane to the Gold Coast, the first question is almost
          always the same: <strong>what&apos;s this going to cost me?</strong> The honest answer is that it
          depends on a few things — but you can get a reliable ballpark before you speak to anyone. Here&apos;s
          how pricing actually works on this corridor in 2026.
        </p>

        <h2>The short answer</h2>
        <p>
          Most Brisbane to Gold Coast moves land between <strong>$500 and $1,200</strong>. Where you sit in
          that range comes down mostly to the size of your home and the exact distance between your pickup and
          drop-off addresses. Here&apos;s a rough guide by home size:
        </p>

        <div className="article-scroll">
          <table>
            <thead>
              <tr>
                <th>Home size</th>
                <th>Typical starting price</th>
                <th>What&apos;s included</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Studio / 1 bedroom</td>
                <td>from ~$349</td>
                <td>Small apartment or unit</td>
              </tr>
              <tr>
                <td>2 bedroom</td>
                <td>from ~$549</td>
                <td>Apartment or townhouse</td>
              </tr>
              <tr>
                <td>3 bedroom</td>
                <td>from ~$699</td>
                <td>Standard family home</td>
              </tr>
              <tr>
                <td>4+ bedroom</td>
                <td>from ~$849</td>
                <td>Large family home</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          These are starting points — the fastest way to get your real number is the{" "}
          <Link href="/#quote">instant quote calculator</Link>, which factors in your two addresses and the
          M1 distance automatically.
        </p>

        <h2>What actually changes the price</h2>
        <h3>1. The size of your home</h3>
        <p>
          More rooms means more to load, more truck space, and more crew hours. This is the single biggest
          factor, which is why an honest size estimate up front gives you an accurate quote.
        </p>
        <h3>2. Distance along the corridor</h3>
        <p>
          A move from New Farm to Broadbeach covers different ground than Chermside to Coolangatta. Distance is
          built into your quote, but on this corridor it&apos;s a predictable 75–95 minute run each way, not an
          interstate haul.
        </p>
        <h3>3. Access at both ends</h3>
        <p>
          Stairs, high-rise lifts, long driveways and tight streets add time. Gold Coast apartment towers often
          need a lift booking; older Brisbane Queenslanders may have stairs and stumps. A good removalist asks
          about this up front so there are no surprises.
        </p>
        <h3>4. Specialty items</h3>
        <p>
          Pianos, pool tables, large safes and oversized furniture need extra equipment and care. Flag them
          early — you don&apos;t want a crew arriving unprepared for a slate pool table.
        </p>

        <h2>Fixed price vs. hourly — the trap to avoid</h2>
        <p>
          Plenty of removalists quote an hourly rate. It sounds cheap until the M1 is backed up and the clock
          keeps running while your furniture sits in traffic. A <strong>fixed price</strong>, agreed before the
          day, means the number you&apos;re quoted is the number you pay — regardless of traffic or how long
          loading takes. On a fixed-distance corridor like Brisbane to the Gold Coast, there&apos;s no good
          reason to accept an open-ended hourly clock.
        </p>

        <h2>How to pay less (without cutting corners)</h2>
        <ul>
          <li>
            <strong>Move mid-week, mid-month.</strong> End of month and weekends are the busiest and hardest to
            book on this corridor.
          </li>
          <li>
            <strong>Declutter first.</strong> The less you move, the smaller the job. A pre-move{" "}
            <Link href="/services/rubbish-removal">rubbish removal</Link> to clear what you don&apos;t want to
            take can shrink your quote and save you unpacking junk at the other end.
          </li>
          <li>
            <strong>Book online.</strong> Locking in your date early secures the price and avoids last-minute
            premium slots.
          </li>
          <li>
            <strong>Be ready on the day.</strong> Boxes packed and labelled before the crew arrives means less
            time on the clock (or, on a fixed price, a faster, smoother move).
          </li>
        </ul>

        <h2>Getting your exact price</h2>
        <p>
          Every home and route is a little different, so a real quote beats a table every time. Our{" "}
          <Link href="/removalists-brisbane-to-gold-coast">Brisbane to Gold Coast removalist service</Link> is
          priced on your home size and distance, fixed before the day, with white-glove service included as
          standard. Get your instant estimate in 30 seconds and we&apos;ll confirm the exact figure with you.
        </p>
      </>
    ),
  },

  {
    slug: "brisbane-to-gold-coast-moving-checklist",
    title: "The Ultimate Brisbane to Gold Coast Moving Checklist (Week by Week)",
    metaTitle: "Brisbane to Gold Coast Moving Checklist (Free, Week by Week)",
    description:
      "A free, week-by-week moving checklist for your Brisbane to Gold Coast move — everything to organise from four weeks out to moving day, so nothing gets forgotten.",
    excerpt:
      "Everything to organise for a smooth Brisbane→Gold Coast move, from four weeks out to the day itself — a free week-by-week checklist you can work straight through.",
    keyword: "brisbane to gold coast moving checklist",
    category: "Guides",
    date: "2026-07-06",
    updated: "2026-07-06",
    readMins: 7,
    body: (
      <>
        <p>
          A move goes smoothly when it&apos;s planned in stages, not crammed into the last 48 hours. Work
          through this checklist from about a month out and moving day becomes the easy part. It&apos;s built
          specifically for the Brisbane–Gold Coast corridor, so it covers the things that catch people out on
          this route.
        </p>

        <h2>4 weeks before</h2>
        <ul>
          <li>
            Book your removalist and lock in your date. Peak dates (end of month, weekends) go fast on this
            corridor — <Link href="/#quote">get your fixed quote</Link> and secure the slot.
          </li>
          <li>Create a simple moving folder (digital or paper) for quotes, receipts and dates.</li>
          <li>
            Start decluttering room by room. Anything you won&apos;t use in the new place, sell, donate, or
            book a <Link href="/services/rubbish-removal">rubbish removal</Link> for.
          </li>
          <li>Measure large furniture against your new floor plan — especially for apartment lifts and doorways.</li>
          <li>Notify your landlord or set your settlement dates.</li>
        </ul>

        <h2>2 weeks before</h2>
        <ul>
          <li>Start packing non-essentials — books, out-of-season clothes, spare linen.</li>
          <li>Label every box by room <em>and</em> contents. Colour-coding by room saves hours at the other end.</li>
          <li>
            Arrange mail redirection with Australia Post from your Brisbane address to your Gold Coast one.
          </li>
          <li>Book any specialty moves now (piano, pool table) so the crew arrives with the right gear.</li>
          <li>Use up freezer food and pantry items you don&apos;t want to transport.</li>
        </ul>

        <h2>1 week before</h2>
        <ul>
          <li>Confirm your move time and access details with your removalist (lift bookings, parking, stairs).</li>
          <li>Pack a clearly-marked &ldquo;first night&rdquo; box: chargers, toiletries, a change of clothes, snacks, kettle, basic tools.</li>
          <li>Transfer or set up utilities at the new place — electricity, gas, internet — so you arrive connected.</li>
          <li>Update your address: bank, licence, insurance, subscriptions, electoral roll.</li>
          <li>Defrost the fridge/freezer 24–48 hours before the move.</li>
        </ul>

        <h2>The day before</h2>
        <ul>
          <li>Finish packing everything except your first-night box and valuables.</li>
          <li>Charge your phone and keep chargers on you, not in a box.</li>
          <li>Confirm the crew&apos;s arrival window and your contact number.</li>
          <li>Keep passports, documents, jewellery and medication separate to travel with you.</li>
          <li>Set aside cash or card for anything you want to grab on the road down the M1.</li>
        </ul>

        <h2>Moving day</h2>
        <ul>
          <li>Do a final walk-through of every room, cupboard and the garage before loading finishes.</li>
          <li>Keep your first-night box and valuables in your own car.</li>
          <li>Note final meter readings at the Brisbane property.</li>
          <li>Be reachable at the Gold Coast end to direct where furniture goes.</li>
          <li>Check nothing&apos;s left behind — under-stair cupboards and outdoor areas are the usual culprits.</li>
        </ul>

        <h2>Once you&apos;ve arrived</h2>
        <ul>
          <li>Unpack the first-night box and make up the beds first — future you will be grateful.</li>
          <li>Check large items arrived in good order.</li>
          <li>Locate the meter box, water mains and hot water system.</li>
          <li>Introduce yourself to the neighbours and enjoy the new place.</li>
        </ul>

        <p>
          The single biggest stress-reducer on this list is booking a removalist who does this exact route
          every day. Our{" "}
          <Link href="/removalists-brisbane-to-gold-coast">Brisbane to Gold Coast specialists</Link> handle the
          heavy lifting, wrapping and reassembly so your job is just working through the checklist above.{" "}
          <Link href="/#quote">Get a fixed quote in 30 seconds.</Link>
        </p>
      </>
    ),
  },

  {
    slug: "moving-to-the-gold-coast-from-brisbane-suburb-guide",
    title: "Moving to the Gold Coast from Brisbane: A Suburb-by-Suburb Guide",
    metaTitle: "Moving to the Gold Coast from Brisbane: Suburb Guide (2026)",
    description:
      "Thinking of moving to the Gold Coast from Brisbane? A practical suburb-by-suburb guide to where to live — for families, professionals, retirees and beach lovers.",
    excerpt:
      "Where to actually live when you move to the Gold Coast from Brisbane — a practical suburb guide by lifestyle, from family-friendly to beachfront.",
    keyword: "moving to the gold coast from brisbane",
    category: "Guides",
    date: "2026-07-06",
    updated: "2026-07-06",
    readMins: 6,
    body: (
      <>
        <p>
          Trading Brisbane for the Gold Coast is one of Queensland&apos;s most popular moves — and for good
          reason. But &ldquo;the Gold Coast&rdquo; is a big, varied place, and the right suburb depends
          entirely on how you want to live. Here&apos;s a practical guide to help you narrow it down before you
          book the truck.
        </p>

        <h2>If you&apos;ve got a family</h2>
        <p>
          Look inland and to the central suburbs for space, schools and value:
        </p>
        <ul>
          <li>
            <strong>Robina</strong> — master-planned, great schools, hospital, shopping and train station.
            The reliable family all-rounder.
          </li>
          <li>
            <strong>Varsity Lakes</strong> — waterways, parks and Bond University nearby; popular with young
            families and professionals.
          </li>
          <li>
            <strong>Helensvale &amp; Coomera</strong> — the northern growth corridor, newer homes, and the
            easiest run back up to Brisbane on the M1 and train line.
          </li>
        </ul>

        <h2>If you&apos;re a professional or couple</h2>
        <ul>
          <li>
            <strong>Broadbeach</strong> — walkable, dining and cafe culture, beach at your door, and a more
            grown-up feel than Surfers.
          </li>
          <li>
            <strong>Burleigh Heads</strong> — the it-suburb: beach, national park, buzzing food scene. In high
            demand, so move quickly when something comes up.
          </li>
          <li>
            <strong>Mermaid Beach &amp; Nobby Beach</strong> — quieter, stylish, and a short hop to everything.
          </li>
        </ul>

        <h2>If you&apos;re after the beach lifestyle</h2>
        <ul>
          <li>
            <strong>Palm Beach</strong> — long stretch of sand, relaxed, family-and-surf friendly, still
            improving fast.
          </li>
          <li>
            <strong>Currumbin &amp; Tugun</strong> — southern, laid-back, close to the airport and the NSW
            border.
          </li>
          <li>
            <strong>Main Beach</strong> — polished and central, marina lifestyle, walk to Surfers without being
            in the middle of it.
          </li>
        </ul>

        <h2>If you&apos;re downsizing or retiring</h2>
        <ul>
          <li>
            <strong>Hope Island &amp; Sanctuary Cove</strong> — golf, marinas and gated communities in the
            north.
          </li>
          <li>
            <strong>Mermaid Waters</strong> — established, leafy, close to Pacific Fair and the light rail.
          </li>
        </ul>

        <h2>A few things Brisbane movers should know</h2>
        <ul>
          <li>
            <strong>The commute back to Brisbane</strong> is very doable from the northern suburbs (Coomera,
            Helensvale) via the M1 and train — worth weighing if you&apos;ll still travel up for work.
          </li>
          <li>
            <strong>Apartment living is different here.</strong> Many Gold Coast towers require lift bookings
            and move-in time slots — factor that into moving day.
          </li>
          <li>
            <strong>Beachside suburbs move fast.</strong> Good rentals and listings in Burleigh and Broadbeach
            don&apos;t last, so line up your removalist early so you can commit when the right place appears.
          </li>
        </ul>

        <h2>Making the move itself easy</h2>
        <p>
          Once you&apos;ve picked your suburb, the move down is the straightforward part — if you use a crew
          that runs the corridor daily. We specialise in{" "}
          <Link href="/removalists-brisbane-to-gold-coast">Brisbane to Gold Coast removals</Link>, including
          high-rise apartment moves and body-corporate coordination, at a fixed price agreed before the day.
          See our <Link href="/moving-gold-coast">Gold Coast moving page</Link> for suburb coverage, or{" "}
          <Link href="/#quote">get an instant quote</Link> to lock in your date.
        </p>
      </>
    ),
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return POSTS.find((post) => post.slug === slug);
}

export function formatPostDate(iso: string): string {
  const d = new Date(iso + "T00:00:00");
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-AU", { day: "numeric", month: "long", year: "numeric" });
}
