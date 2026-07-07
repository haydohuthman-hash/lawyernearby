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
          A move from <Link href="/removalists/new-farm">New Farm</Link> to{" "}
          <Link href="/removalists/broadbeach">Broadbeach</Link> covers different ground than{" "}
          <Link href="/removalists/chermside">Chermside</Link> to{" "}
          <Link href="/removalists/coolangatta">Coolangatta</Link>. Distance is built into your quote, but
          on this corridor it&apos;s a predictable 75–95 minute run each way, not an interstate haul.
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
            <strong>
              <Link href="/removalists/robina">Robina</Link>
            </strong>{" "}
            — master-planned, great schools, hospital, shopping and train station. The reliable family
            all-rounder.
          </li>
          <li>
            <strong>
              <Link href="/removalists/varsity-lakes">Varsity Lakes</Link>
            </strong>{" "}
            — waterways, parks and Bond University nearby; popular with young families and professionals.
          </li>
          <li>
            <strong>
              <Link href="/removalists/helensvale">Helensvale</Link> &amp;{" "}
              <Link href="/removalists/coomera">Coomera</Link>
            </strong>{" "}
            — the northern growth corridor, newer homes, and the easiest run back up to Brisbane on the M1
            and train line.
          </li>
        </ul>

        <h2>If you&apos;re a professional or couple</h2>
        <ul>
          <li>
            <strong>
              <Link href="/removalists/broadbeach">Broadbeach</Link>
            </strong>{" "}
            — walkable, dining and cafe culture, beach at your door, and a more grown-up feel than Surfers.
          </li>
          <li>
            <strong>
              <Link href="/removalists/burleigh-heads">Burleigh Heads</Link>
            </strong>{" "}
            — the it-suburb: beach, national park, buzzing food scene. In high demand, so move quickly
            when something comes up.
          </li>
          <li>
            <strong>
              <Link href="/removalists/mermaid-beach">Mermaid Beach</Link> &amp; Nobby Beach
            </strong>{" "}
            — quieter, stylish, and a short hop to everything.
          </li>
        </ul>

        <h2>If you&apos;re after the beach lifestyle</h2>
        <ul>
          <li>
            <strong>
              <Link href="/removalists/palm-beach">Palm Beach</Link>
            </strong>{" "}
            — long stretch of sand, relaxed, family-and-surf friendly, still improving fast.
          </li>
          <li>
            <strong>
              <Link href="/removalists/currumbin">Currumbin</Link> &amp; <Link href="/removalists/tugun">Tugun</Link>
            </strong>{" "}
            — southern, laid-back, close to the airport and the NSW border.
          </li>
          <li>
            <strong>
              <Link href="/removalists/main-beach">Main Beach</Link>
            </strong>{" "}
            — polished and central, marina lifestyle, walk to Surfers without being in the middle of it.
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
            <strong>The commute back to Brisbane</strong> is very doable from the northern suburbs (
            <Link href="/removalists/coomera">Coomera</Link>,{" "}
            <Link href="/removalists/helensvale">Helensvale</Link>) via the M1 and train — worth weighing
            if you&apos;ll still travel up for work.
          </li>
          <li>
            <strong>Apartment living is different here.</strong> Many Gold Coast towers require lift bookings
            and move-in time slots — factor that into moving day.
          </li>
          <li>
            <strong>Beachside suburbs move fast.</strong> Good rentals and listings in{" "}
            <Link href="/removalists/burleigh-heads">Burleigh</Link> and{" "}
            <Link href="/removalists/broadbeach">Broadbeach</Link> don&apos;t last, so line up your
            removalist early so you can commit when the right place appears.
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

  {
    slug: "pool-table-removal-cost-guide",
    title: "How Much Does Pool Table Removal Cost? (Brisbane & Gold Coast Guide)",
    metaTitle: "Pool Table Removal Cost Brisbane & Gold Coast (2026 Guide)",
    description:
      "What pool table removal really costs in Brisbane and the Gold Coast — price ranges by table type, why slate changes everything, and what's included in a proper quote.",
    excerpt:
      "Slate changes everything. What a pool table move actually costs, what a proper quote includes, and the mistakes that crack slate beds.",
    keyword: "pool table removal cost",
    category: "Pricing",
    date: "2026-07-08",
    updated: "2026-07-08",
    readMins: 5,
    faqs: [
      {
        question: "How much does it cost to move a pool table?",
        answer:
          "In Brisbane and on the Gold Coast, moving a slate pool table typically costs $350–$550 as a standalone job, or from around $220 when added to a house move. Non-slate (MDF) tables are cheaper — usually $150–$250 — because they can move in fewer pieces. Access (stairs, tight turns) and table size are the main price factors.",
      },
      {
        question: "Why is slate pool table removal more expensive?",
        answer:
          "A slate bed comes in one to three pieces weighing 150–300kg combined, and it cracks if it flexes. Moving it safely means full disassembly, slate trolleys, padded edge-transport and precision re-levelling at the destination — specialist labour and equipment a standard furniture move doesn't need.",
      },
      {
        question: "Can I move a pool table myself to save money?",
        answer:
          "For a slate table, we'd genuinely advise against it. The slates are the heaviest, most fragile part, and a cracked slate usually costs more to replace than the professional move would have. If it's a lightweight MDF table and a ground-floor-to-ground-floor move, a careful DIY with four people is feasible.",
      },
    ],
    body: (
      <>
        <p>
          Pool tables are the item that makes most removalists suddenly &ldquo;unavailable.&rdquo; The
          reason is slate — and slate is also why prices for pool table removal vary so much. Here&apos;s an
          honest breakdown of what it costs in Brisbane and on the Gold Coast, and what a proper quote
          should include.
        </p>

        <h2>Price guide at a glance</h2>
        <div className="article-scroll">
          <table>
            <thead>
              <tr>
                <th>Job type</th>
                <th>Typical price</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Slate table, added to a house move</td>
                <td>from ~$220</td>
                <td>Cheapest way — the crew and truck are already booked</td>
              </tr>
              <tr>
                <td>Slate table, standalone move</td>
                <td>~$350–$550</td>
                <td>7ft–9ft, includes disassembly + re-level</td>
              </tr>
              <tr>
                <td>Non-slate (MDF) table</td>
                <td>~$150–$250</td>
                <td>Lighter, moves in fewer pieces</td>
              </tr>
              <tr>
                <td>Stairs / difficult access</td>
                <td>+$50–$150</td>
                <td>Priced into the fixed quote up front</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>What actually drives the price</h2>
        <h3>Slate vs. MDF</h3>
        <p>
          Knock on the bed under the cloth: a dull solid knock is slate, a hollow one is MDF. Slate plays
          beautifully and lasts forever, but it&apos;s brutally heavy and cracks under flex — which is why
          it must be removed and transported as separate, padded pieces. MDF tables are far lighter and
          more forgiving.
        </p>
        <h3>Table size and slate count</h3>
        <p>
          An 8ft home table usually carries one or three slate pieces; a 9ft pub-size table is heavier
          again. Three-piece slates are easier to carry but need more precise re-levelling; one-piece
          slates need more muscle and a clearer path.
        </p>
        <h3>Access at both ends</h3>
        <p>
          Ground floor to ground floor is the base case. Stairs, split levels, tight doorways and long
          carries add crew and time — flagging them up front is what keeps the quote fixed and the day
          drama-free.
        </p>

        <h2>What a proper quote includes</h2>
        <ul>
          <li>Full disassembly: rails, pockets, cloth care, slates and frame</li>
          <li>Slate trolleys and padded, on-edge slate transport</li>
          <li>Reassembly with slate shimming and precision levelling</li>
          <li>A roll test before the crew leaves</li>
          <li>Transit insurance covering the table door to door</li>
        </ul>
        <p>
          If a quote is dramatically cheaper than the ranges above, ask which of those steps it skips —
          the usual answer is the levelling, and an unlevel table is a table you&apos;ll hate playing on.
        </p>

        <h2>The corridor advantage</h2>
        <p>
          Moving between Brisbane and the Gold Coast? A pool table rides beautifully as part of a{" "}
          <Link href="/removalists-brisbane-to-gold-coast">corridor house move</Link> — the specialist
          handling is the same, and you save the standalone call-out. See our full{" "}
          <Link href="/services/pool-table-removal">pool table removal service</Link> or{" "}
          <Link href="/#quote">get a fixed quote</Link> with the table included.
        </p>
      </>
    ),
  },

  {
    slug: "how-to-move-a-piano-safely",
    title: "How to Move a Piano Safely (And When Not to DIY)",
    metaTitle: "How to Move a Piano Safely — Upright & Grand Guide",
    description:
      "A practical guide to moving a piano safely: weights by type, the equipment professionals use, what a DIY move risks, and what piano removal costs in Brisbane and the Gold Coast.",
    excerpt:
      "Pianos weigh 200–500kg, carry their value in fragile places, and punish shortcuts. What a safe move looks like — and where the DIY line is.",
    keyword: "how to move a piano",
    category: "Guides",
    date: "2026-07-08",
    updated: "2026-07-08",
    readMins: 5,
    body: (
      <>
        <p>
          A piano is the heaviest fragile thing most households own. An upright runs 200–300kg, a grand
          300–500kg — and the value lives in delicate places: the soundboard, the action, the polished
          case. Here&apos;s how professionals move them, what you can safely do yourself, and where the
          DIY line sits.
        </p>

        <h2>Know your piano&apos;s weight class</h2>
        <ul>
          <li>
            <strong>Digital piano:</strong> 20–60kg. Two careful people, blankets, done.
          </li>
          <li>
            <strong>Console / small upright:</strong> ~180–250kg. Piano trolley territory.
          </li>
          <li>
            <strong>Full upright / pianola:</strong> ~250–350kg. Professional job.
          </li>
          <li>
            <strong>Baby grand / grand:</strong> 300–500kg, plus leg removal and a skid board.
            Absolutely professional territory.
          </li>
        </ul>

        <h2>How professionals actually move an upright</h2>
        <ol>
          <li>Lock or tape the keyboard lid and wrap the whole case in thick blankets.</li>
          <li>Tilt the piano just enough to slide a piano trolley under the centre of gravity.</li>
          <li>Roll on the flat; use ramps over every step — never lift up stairs freestyle.</li>
          <li>In the truck: against the wall, strapped top and bottom, never on its back.</li>
          <li>At the destination: same in reverse, then let it acclimatise before tuning.</li>
        </ol>

        <h2>Grands are a different sport</h2>
        <p>
          A grand travels on its side on a padded skid board. The lid, lyre (pedal assembly) and legs come
          off in order, each wrapped separately, and the body is rotated onto the skid by people who have
          done it many times. This is the move where a $70 saving on labour risks a five-figure
          instrument — it&apos;s the clearest &ldquo;don&apos;t DIY&rdquo; in the moving world.
        </p>

        <h2>The DIY line</h2>
        <p>
          <strong>Reasonable DIY:</strong> digital pianos, and rolling an upright within a flat room to
          reposition it (casters are for repositioning, not journeys).
        </p>
        <p>
          <strong>Call professionals:</strong> any staircase, any acoustic piano leaving the building, any
          grand, anything on polished floors you care about, and every move between houses. The physics
          don&apos;t negotiate: 300kg with a high centre of gravity injures backs and cracks cases.
        </p>

        <h2>What it costs (so you can sanity-check quotes)</h2>
        <p>
          In Brisbane and on the Gold Coast, an upright typically moves for $300–$450 standalone or from
          ~$220 as part of a house move; grands usually land between $450 and $750 depending on access.
          Fixed pricing matters more here than anywhere: a piano move that hits a tricky staircase
          shouldn&apos;t start billing by the hour.
        </p>

        <h2>After the move: the tuning myth</h2>
        <p>
          A well-executed move doesn&apos;t damage a piano, but new-room humidity will drift the tuning
          slightly. Wait two to three weeks for the instrument to settle, then book a tuner — that&apos;s
          normal maintenance, not moving damage.
        </p>

        <p>
          Ready to move yours? Our{" "}
          <Link href="/services/piano-removal">piano removal service</Link> covers uprights to grands
          across Brisbane, the Gold Coast and the corridor between —{" "}
          <Link href="/#quote">get a fixed quote</Link> and tell us about the stairs.
        </p>
      </>
    ),
  },

  {
    slug: "best-time-to-move-house-brisbane-gold-coast",
    title: "The Best Time to Move House in South-East Queensland",
    metaTitle: "Best Time to Move House in Brisbane & the Gold Coast",
    description:
      "When to move house in Brisbane and the Gold Coast: the cheapest months, the days that book out, weather traps, and how far ahead to lock in your removalist.",
    excerpt:
      "Month by month, day by day: when moving in South-East Queensland is cheapest, coolest and easiest to book — and the dates to avoid.",
    keyword: "best time to move house",
    category: "Guides",
    date: "2026-07-08",
    updated: "2026-07-08",
    readMins: 5,
    body: (
      <>
        <p>
          In South-East Queensland the moving calendar has real seasons — of demand, of weather and of
          price. Pick your dates well and you&apos;ll get better availability, a calmer moving day and
          often a friendlier quote. Here&apos;s the honest calendar.
        </p>

        <h2>The demand calendar</h2>
        <h3>Peak: December – January</h3>
        <p>
          School holidays, lease turnovers and the new-year fresh start collide. Beach suburbs like{" "}
          <Link href="/removalists/burleigh-heads">Burleigh</Link> and{" "}
          <Link href="/removalists/palm-beach">Palm Beach</Link> are at their busiest, trucks book out
          weeks ahead, and everyone wants the same Saturdays. If you must move now, book 3–4 weeks out and
          take a weekday if you can.
        </p>
        <h3>Busy: end of every month + all Saturdays</h3>
        <p>
          Leases end on month-boundaries, so the last weekend of any month is the hardest slot to get all
          year. The same move a week earlier — mid-month, mid-week — is dramatically easier to book.
        </p>
        <h3>The sweet spots: May – August</h3>
        <p>
          Winter in SEQ is the professional&apos;s favourite: 20-something degrees, low humidity, rare
          rain, and softer demand. If your dates are flexible, a mid-week move in June or July is the
          calmest, most bookable move of the year.
        </p>

        <h2>The weather angle (it matters here)</h2>
        <ul>
          <li>
            <strong>Summer storms (Nov–Mar):</strong> afternoon storms are near-scheduled events. Summer
            moves should load in the morning — another reason early slots go first.
          </li>
          <li>
            <strong>Heat:</strong> February moves are sweaty work; crews pace differently and fragile
            items (candles, vinyl, electronics) shouldn&apos;t sit in a hot truck longer than needed.
          </li>
          <li>
            <strong>Winter:</strong> basically perfect. The M1 corridor run is also at its most
            predictable outside holiday traffic.
          </li>
        </ul>

        <h2>How far ahead to book</h2>
        <div className="article-scroll">
          <table>
            <thead>
              <tr>
                <th>Your target date</th>
                <th>Book ahead</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Mid-week, mid-month (off-peak)</td>
                <td>1 week is usually fine</td>
              </tr>
              <tr>
                <td>Any Saturday</td>
                <td>2–3 weeks</td>
              </tr>
              <tr>
                <td>End of month</td>
                <td>3 weeks</td>
              </tr>
              <tr>
                <td>December–January</td>
                <td>3–4 weeks minimum</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>One more lever: flexibility beats haggling</h2>
        <p>
          The single best &ldquo;discount&rdquo; in moving isn&apos;t negotiating — it&apos;s offering
          flexibility. Tell your removalist you can do any weekday in a two-week window and you become the
          easiest job on the schedule. Fixed-price movers (like us) can then simply give you the calmest
          slot rather than the premium one.
        </p>

        <p>
          Once your dates are picked, work through our{" "}
          <Link href="/blog/brisbane-to-gold-coast-moving-checklist">week-by-week moving checklist</Link>{" "}
          and <Link href="/#quote">lock in your fixed quote</Link> — the date you want is easier to get
          the earlier you claim it.
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
