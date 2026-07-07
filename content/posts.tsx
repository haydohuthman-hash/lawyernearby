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
          always the same: <strong>what&apos;s this going to cost me?</strong>{" "}The honest answer is that it
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
          A move from <Link href="/removalists/new-farm">New Farm</Link>{" "}to{" "}
          <Link href="/removalists/broadbeach">Broadbeach</Link>{" "}covers different ground than{" "}
          <Link href="/removalists/chermside">Chermside</Link>{" "}to{" "}
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
            <strong>Move mid-week, mid-month.</strong>{" "}End of month and weekends are the busiest and hardest to
            book on this corridor.
          </li>
          <li>
            <strong>Declutter first.</strong>{" "}The less you move, the smaller the job. A pre-move{" "}
            <Link href="/services/rubbish-removal">rubbish removal</Link>{" "}to clear what you don&apos;t want to
            take can shrink your quote and save you unpacking junk at the other end.
          </li>
          <li>
            <strong>Book online.</strong>{" "}Locking in your date early secures the price and avoids last-minute
            premium slots.
          </li>
          <li>
            <strong>Be ready on the day.</strong>{" "}Boxes packed and labelled before the crew arrives means less
            time on the clock (or, on a fixed price, a faster, smoother move).
          </li>
        </ul>

        <h2>Getting your exact price</h2>
        <p>
          Every home and route is a little different, so a real quote beats a table every time. Our{" "}
          <Link href="/removalists-brisbane-to-gold-coast">Brisbane to Gold Coast removalist service</Link>{" "}is
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
            corridor — <Link href="/#quote">get your fixed quote</Link>{" "}and secure the slot.
          </li>
          <li>Create a simple moving folder (digital or paper) for quotes, receipts and dates.</li>
          <li>
            Start decluttering room by room. Anything you won&apos;t use in the new place, sell, donate, or
            book a <Link href="/services/rubbish-removal">rubbish removal</Link>{" "}for.
          </li>
          <li>Measure large furniture against your new floor plan — especially for apartment lifts and doorways.</li>
          <li>Notify your landlord or set your settlement dates.</li>
        </ul>

        <h2>2 weeks before</h2>
        <ul>
          <li>Start packing non-essentials — books, out-of-season clothes, spare linen.</li>
          <li>Label every box by room <em>and</em>{" "}contents. Colour-coding by room saves hours at the other end.</li>
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
          <Link href="/removalists-brisbane-to-gold-coast">Brisbane to Gold Coast specialists</Link>{" "}handle the
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
              <Link href="/removalists/helensvale">Helensvale</Link>{" "}&amp;{" "}
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
              <Link href="/removalists/mermaid-beach">Mermaid Beach</Link>{" "}&amp; Nobby Beach
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
              <Link href="/removalists/currumbin">Currumbin</Link>{" "}&amp; <Link href="/removalists/tugun">Tugun</Link>
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
            <strong>Hope Island &amp; Sanctuary Cove</strong>{" "}— golf, marinas and gated communities in the
            north.
          </li>
          <li>
            <strong>Mermaid Waters</strong>{" "}— established, leafy, close to Pacific Fair and the light rail.
          </li>
        </ul>

        <h2>A few things Brisbane movers should know</h2>
        <ul>
          <li>
            <strong>The commute back to Brisbane</strong>{" "}is very doable from the northern suburbs (
            <Link href="/removalists/coomera">Coomera</Link>,{" "}
            <Link href="/removalists/helensvale">Helensvale</Link>) via the M1 and train — worth weighing
            if you&apos;ll still travel up for work.
          </li>
          <li>
            <strong>Apartment living is different here.</strong>{" "}Many Gold Coast towers require lift bookings
            and move-in time slots — factor that into moving day.
          </li>
          <li>
            <strong>Beachside suburbs move fast.</strong>{" "}Good rentals and listings in{" "}
            <Link href="/removalists/burleigh-heads">Burleigh</Link>{" "}and{" "}
            <Link href="/removalists/broadbeach">Broadbeach</Link>{" "}don&apos;t last, so line up your
            removalist early so you can commit when the right place appears.
          </li>
        </ul>

        <h2>Making the move itself easy</h2>
        <p>
          Once you&apos;ve picked your suburb, the move down is the straightforward part — if you use a crew
          that runs the corridor daily. We specialise in{" "}
          <Link href="/removalists-brisbane-to-gold-coast">Brisbane to Gold Coast removals</Link>, including
          high-rise apartment moves and body-corporate coordination, at a fixed price agreed before the day.
          See our <Link href="/moving-gold-coast">Gold Coast moving page</Link>{" "}for suburb coverage, or{" "}
          <Link href="/#quote">get an instant quote</Link>{" "}to lock in your date.
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
          <Link href="/removalists-brisbane-to-gold-coast">corridor house move</Link>{" "}— the specialist
          handling is the same, and you save the standalone call-out. See our full{" "}
          <Link href="/services/pool-table-removal">pool table removal service</Link>{" "}or{" "}
          <Link href="/#quote">get a fixed quote</Link>{" "}with the table included.
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
            <strong>Digital piano:</strong>{" "}20–60kg. Two careful people, blankets, done.
          </li>
          <li>
            <strong>Console / small upright:</strong>{" "}~180–250kg. Piano trolley territory.
          </li>
          <li>
            <strong>Full upright / pianola:</strong>{" "}~250–350kg. Professional job.
          </li>
          <li>
            <strong>Baby grand / grand:</strong>{" "}300–500kg, plus leg removal and a skid board.
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
          <strong>Reasonable DIY:</strong>{" "}digital pianos, and rolling an upright within a flat room to
          reposition it (casters are for repositioning, not journeys).
        </p>
        <p>
          <strong>Call professionals:</strong>{" "}any staircase, any acoustic piano leaving the building, any
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
          <Link href="/services/piano-removal">piano removal service</Link>{" "}covers uprights to grands
          across Brisbane, the Gold Coast and the corridor between —{" "}
          <Link href="/#quote">get a fixed quote</Link>{" "}and tell us about the stairs.
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
          <Link href="/removalists/burleigh-heads">Burleigh</Link>{" "}and{" "}
          <Link href="/removalists/palm-beach">Palm Beach</Link>{" "}are at their busiest, trucks book out
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
            <strong>Summer storms (Nov–Mar):</strong>{" "}afternoon storms are near-scheduled events. Summer
            moves should load in the morning — another reason early slots go first.
          </li>
          <li>
            <strong>Heat:</strong>{" "}February moves are sweaty work; crews pace differently and fragile
            items (candles, vinyl, electronics) shouldn&apos;t sit in a hot truck longer than needed.
          </li>
          <li>
            <strong>Winter:</strong>{" "}basically perfect. The M1 corridor run is also at its most
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
          and <Link href="/#quote">lock in your fixed quote</Link>{" "}— the date you want is easier to get
          the earlier you claim it.
        </p>
      </>
    ),
  },

  {
    slug: "last-minute-removalists-brisbane",
    title: "Last Minute Removalists Brisbane: What To Do When You've Left It Late",
    metaTitle: "Last Minute Removalists Brisbane | Same-Week Booking",
    description:
      "Need a removalist in Brisbane or the Gold Coast at short notice? Here's what's actually possible on short timeframes, what to prioritise, and how to get a fixed quote fast.",
    excerpt:
      "Lease ending Friday and no truck booked? Here's what's realistically possible at short notice, and how to move fast without moving badly.",
    keyword: "last minute removalists brisbane",
    category: "Guides",
    date: "2026-07-09",
    updated: "2026-07-09",
    readMins: 5,
    faqs: [
      {
        question: "Can I book a removalist for tomorrow or the same week?",
        answer:
          "Often, yes — weekday slots are far more available at short notice than weekends, and mid-month is easier than end-of-month. Get an instant quote to see live availability for your exact date rather than assuming it's booked out.",
      },
      {
        question: "Do last-minute moves cost more?",
        answer:
          "Not with us — our pricing is based on your home size and distance, not how much notice you gave. You may have fewer date options to choose from, but the fixed-price formula doesn't change for urgency.",
      },
      {
        question: "What can I do myself to speed up a last-minute move?",
        answer:
          "Grab boxes and tape today, start with things you won't need this week (books, out-of-season clothes, garage items), and have a first-night bag packed separately. Even two hours of head start makes moving day materially smoother.",
      },
    ],
    body: (
      <>
        <p>
          Lease ending in five days and no truck booked? It happens more than you&apos;d think — a
          settlement date moves, a lease isn&apos;t renewed, or life just gets in the way of planning. Here&apos;s
          the honest version of what&apos;s possible at short notice, and how to get moved without the
          wheels falling off.
        </p>

        <h2>What's actually realistic on short notice</h2>
        <p>
          Weekday slots are your friend. Removalists are booked out furthest in advance for Saturdays and
          the last few days of the month — a Tuesday or Wednesday two days from now is a completely
          different availability picture. If your date is flexible even slightly, ask what&apos;s open
          before fixing on a weekend.
        </p>
        <p>
          Small and medium moves (studio to 3-bedroom) are easiest to slot in quickly since they need less
          crew and truck time. Larger homes and specialty items (pianos, pool tables) generally need a
          little more lead time simply because the right equipment has to be on the truck.
        </p>

        <h2>Get your price locked in first</h2>
        <p>
          The fastest way to know what&apos;s possible is to{" "}
          <Link href="/#quote">run the quote calculator</Link>{" "}— it takes 30 seconds and tells you your
          fixed price immediately, regardless of how much notice you&apos;ve got. Pricing is based on your
          home size and the distance between addresses, not on how last-minute the booking is.
        </p>

        <h2>A same-day priority list, if you're truly down to the wire</h2>
        <ul>
          <li>
            <strong>Today:</strong>{" "}get your quote locked in and the date confirmed — this is the one thing
            that can actually run out.
          </li>
          <li>
            <strong>Today or tomorrow:</strong>{" "}grab boxes, tape and a permanent marker. Start with the
            garage, spare room and anything you won&apos;t touch this week.
          </li>
          <li>
            <strong>1–2 days out:</strong>{" "}pack a first-night bag (chargers, toiletries, medication,
            a change of clothes) so it never ends up sealed in a random box.
          </li>
          <li>
            <strong>The day before:</strong>{" "}confirm access at both ends — parking, lifts, stairs — so the
            crew isn&apos;t working it out on the spot.
          </li>
        </ul>

        <h2>Don't let urgency mean cutting corners on care</h2>
        <p>
          A rushed move is exactly when furniture gets scuffed and boxes go missing — which is why we run
          last-minute jobs the same way as a month-out booking: full transit insurance, blanket-wrapping,
          and a fixed price agreed before the truck arrives. Urgency changes the timeline, not the standard
          of care.
        </p>
        <p>
          Also clearing junk before you go? Pair the move with{" "}
          <Link href="/services/rubbish-removal">same-day rubbish removal</Link>{" "}so nothing gets left
          behind for the next tenant. <Link href="/#quote">Get your fixed quote now</Link>{" "}and we&apos;ll
          confirm what&apos;s available for your date.
        </p>
      </>
    ),
  },

  {
    slug: "same-day-rubbish-removal-brisbane-gold-coast",
    title: "Same-Day Rubbish Removal in Brisbane & the Gold Coast: How It Works",
    metaTitle: "Same-Day Rubbish Removal Brisbane & Gold Coast",
    description:
      "Need junk gone today? Here's how same-day rubbish removal actually works across Brisbane and the Gold Coast — what you can book, what it costs, and how fast our crews can arrive.",
    excerpt:
      "Old furniture that needs to disappear before an inspection tomorrow? Here's how same-day rubbish removal actually works, and what it costs.",
    keyword: "same day rubbish removal brisbane",
    category: "Pricing",
    date: "2026-07-09",
    updated: "2026-07-09",
    readMins: 4,
    faqs: [
      {
        question: "Can I really get rubbish removed the same day I call?",
        answer:
          "Often, yes — small to medium loads (a few items to a single room) are the easiest to slot into a same-day run. Full property clearances usually need at least next-day notice so the right size crew and truck are available.",
      },
      {
        question: "Do you charge extra for urgent or same-day bookings?",
        answer:
          "No — pricing is based on load size, not turnaround time. A same-day small load and a next-week small load are quoted the same way.",
      },
      {
        question: "What if I don't know how much I need removed?",
        answer:
          "Describe it in general terms (a couch and some boxes, vs a full garage) or send photos — we'll size the job and give you a fixed price before anything is booked.",
      },
    ],
    body: (
      <>
        <p>
          An agent&apos;s inspection tomorrow, a skip bin that&apos;s already full, or a couch that just
          needs to be gone before the weekend — same-day rubbish removal is one of our most common
          last-minute calls. Here&apos;s exactly how it works.
        </p>

        <h2>What can genuinely move today</h2>
        <p>
          Small loads — a few items, some boxes, an old mattress or two — are the easiest to fit into a
          same-day run. Half-truck jobs (a single room clear-out) are usually possible with a morning call.
          Full property clearances (a whole house or garage) are best booked a day ahead so we bring the
          right crew size the first time.
        </p>

        <h2>How the price works</h2>
        <p>
          Pricing is based on how much needs to go, not how soon you need it gone — a small same-day load
          starts from around $149, the same as a small load booked next week. Get a{" "}
          <Link href="/#quote">fixed quote</Link>{" "}and we&apos;ll tell you honestly whether today or
          tomorrow is realistic for your postcode.
        </p>

        <h2>What we take, on short notice or not</h2>
        <ul>
          <li>Old furniture and mattresses</li>
          <li>Whitegoods and appliances</li>
          <li>General household and garage junk</li>
          <li>Green waste and garden offcuts</li>
          <li>Renovation debris (in reasonable volumes — flag anything hazardous)</li>
        </ul>
        <p>See the full breakdown on our <Link href="/services/rubbish-removal">rubbish removal page</Link>.</p>

        <h2>Getting ready before we arrive</h2>
        <p>
          You don&apos;t need to move anything to the curb — our crew collects from wherever it sits,
          including garages, backyards and upstairs rooms. The one thing that speeds a same-day job along
          is telling us roughly what&apos;s involved upfront (a couch vs. a garage full of boxes) so the
          right size truck turns up the first time.
        </p>
        <p>
          Combining a clear-out with a move? See our{" "}
          <Link href="/removalists-brisbane-to-gold-coast">Brisbane to Gold Coast removalist service</Link>{" "}
          — we can often run both in the one visit. <Link href="/#quote">Get your fixed quote</Link>{" "}to
          check today&apos;s availability.
        </p>
      </>
    ),
  },

  {
    slug: "cheap-removalists-brisbane-hidden-costs",
    title: "Cheap Removalists Brisbane: The Hidden Costs of the Lowest Quote",
    metaTitle: "Cheap Removalists Brisbane — What the Lowest Quote Doesn't Include",
    description:
      "Searching for cheap removalists in Brisbane? Here's what the lowest quote often leaves out, how hourly rates can end up costing more, and how to compare quotes properly.",
    excerpt:
      "The cheapest quote on paper isn't always the cheapest move. Here's what to check before you book on price alone.",
    keyword: "cheap removalists brisbane",
    category: "Pricing",
    date: "2026-07-09",
    updated: "2026-07-09",
    readMins: 5,
    faqs: [
      {
        question: "Are fixed-price removalists more expensive than hourly ones?",
        answer:
          "Not usually — the headline hourly rate is often lower, but total cost depends on how long the job actually takes, which is outside your control once a truck is loading in traffic. A fixed price removes that variable entirely, so you're comparing your final bill, not just an hourly figure.",
      },
      {
        question: "How do I compare quotes properly?",
        answer:
          "Ask each company for the same three things: is the price fixed or hourly, is transit insurance included, and is disassembly/reassembly included. Comparing those three answers tells you more than comparing the headline number alone.",
      },
      {
        question: "Is the cheapest removalist ever the right choice?",
        answer:
          "Sometimes — for a very small, simple, single-item move, a low hourly rate with no complications can genuinely be cheap. For anything bigger, or with stairs, a lift, or specialty items, the risk of the hourly total climbing is much higher.",
      },
    ],
    body: (
      <>
        <p>
          Searching &ldquo;cheap removalists Brisbane&rdquo; makes sense — moving is expensive enough
          already. But the lowest number on a quote page isn&apos;t always the lowest number on your bank
          statement. Here&apos;s what&apos;s worth checking before you book on price alone.
        </p>

        <h2>The hourly rate trap</h2>
        <p>
          A lot of low quotes are hourly rates, not total prices. That&apos;s fine if everything goes
          perfectly — but traffic, a slow lift, an extra flight of stairs, or a bigger-than-expected load
          all add billable hours you didn&apos;t see coming. The &ldquo;cheap&rdquo; quote can end up
          costing more than a fixed price would have, and you find out after the truck has already left.
        </p>

        <h2>What's sometimes missing from a bargain quote</h2>
        <ul>
          <li>
            <strong>Transit insurance</strong>{" "}— ask directly whether your belongings are covered while in
            transit, not just &ldquo;insured business&rdquo; (that&apos;s about the company, not your
            furniture).
          </li>
          <li>
            <strong>Disassembly and reassembly</strong>{" "}— some low quotes charge this as an add-on per item.
          </li>
          <li>
            <strong>Blankets and protective wrap</strong>{" "}— occasionally billed separately.
          </li>
          <li>
            <strong>Minimum call-out hours</strong>{" "}— some hourly operators have a 3–4 hour minimum even for
            a small job.
          </li>
        </ul>

        <h2>Three questions that reveal the real price</h2>
        <ol>
          <li>Is this a fixed price, or an hourly rate with an estimate?</li>
          <li>Is transit insurance included, and what does it cover?</li>
          <li>Is disassembly/reassembly and blanket-wrapping included, or extra?</li>
        </ol>
        <p>
          Ask every company you&apos;re comparing the same three questions and you&apos;ll get a genuine
          apples-to-apples comparison instead of comparing a low headline number to a fuller one.
        </p>

        <h2>Where we land on this</h2>
        <p>
          We&apos;re not the cheapest hourly rate in Brisbane, because we don&apos;t quote an hourly rate at
          all — every move is one fixed price, agreed before the day, with insurance, wrapping and
          reassembly included as standard. It&apos;s the &ldquo;Move Without Compromise&rdquo; idea:
          you shouldn&apos;t have to choose between affordable and done properly.
        </p>
        <p>
          Compare us against any quote you&apos;ve got — <Link href="/#quote">get an instant fixed price</Link>{" "}
          and see the real number before you decide.
        </p>
      </>
    ),
  },

  {
    slug: "moving-house-with-pets",
    title: "Moving House With Pets: A Stress-Free Guide for Cats and Dogs",
    metaTitle: "Moving House With Pets — Cats & Dogs Guide",
    description:
      "A practical guide to moving house with pets — how to prepare cats and dogs for moving day, what to pack for them, and how to help anxious animals settle into a new home.",
    excerpt:
      "Moving day is confusing for pets too. A practical guide to keeping cats and dogs calm, safe and settled through the move.",
    keyword: "moving house with pets",
    category: "Guides",
    date: "2026-07-09",
    updated: "2026-07-09",
    readMins: 5,
    body: (
      <>
        <p>
          Moving day is a lot for a household to manage — and pets experience all of the chaos with none of
          the context. Boxes appearing, furniture disappearing, strangers in the house: it&apos;s
          disorienting for cats and dogs alike. A little planning keeps them calm and safe through it.
        </p>

        <h2>In the weeks before</h2>
        <ul>
          <li>
            Keep your pet&apos;s routine (feeding times, walks) as normal as possible while everything else
            changes around them.
          </li>
          <li>
            Update microchip details and ID tags to the new address <em>before</em>{" "}moving day, not after.
          </li>
          <li>
            If your pet is anxious by nature, ask your vet about a calming aid well ahead of time — don&apos;t
            trial something new on the day itself.
          </li>
          <li>Pack a clearly labelled pet box last: food, bowls, lead, litter tray, a favourite toy or blanket.</li>
        </ul>

        <h2>On moving day itself</h2>
        <p>
          The safest place for most pets on moving day is somewhere they&apos;re not underfoot — a
          bathroom with the door shut, a crate in a quiet room, or (best of all) a friend&apos;s house or
          doggy daycare for the day. Open doors, unfamiliar people and a driveway full of activity are a
          real escape risk, and it&apos;s the day you least want a runaway pet on top of everything else.
        </p>
        <p>
          If your pet must stay on site, keep them in one closed room with food, water, a litter tray or
          pee pad, and a sign on the door so the crew knows not to open it.
        </p>

        <h2>The trip itself</h2>
        <p>
          Dogs generally travel fine in a car with a seatbelt harness or crate. Cats do best in a secure
          carrier — never loose in the car, even for a short trip, since a startled cat in a moving vehicle
          is genuinely dangerous. Familiar-smelling bedding in the carrier helps.
        </p>

        <h2>Settling in at the new place</h2>
        <ul>
          <li>
            Set up one &ldquo;home base&rdquo; room first — food, water, bed, litter tray — before opening
            up the rest of the house to them.
          </li>
          <li>
            For cats especially, a slow, room-by-room introduction over a few days beats free access to a
            whole unfamiliar house on day one.
          </li>
          <li>Keep walks and feeding times as close to normal schedule as you can from day one.</li>
          <li>
            Expect a few off days — reduced appetite, extra clinginess or hiding is normal and usually
            settles within a week or two.
          </li>
        </ul>

        <h2>Moving between Brisbane and the Gold Coast?</h2>
        <p>
          On a corridor move, plan for your pet to travel separately in your own car rather than with the
          truck — it&apos;s calmer for them and means you&apos;re not waiting on the removalist&apos;s
          schedule to let them out for a break. Our crews are used to working around pets in the house and
          simply ask that they&apos;re secured somewhere quiet while we load.
        </p>
        <p>
          Sorting the rest of the move? <Link href="/blog/brisbane-to-gold-coast-moving-checklist">
            See our full moving checklist
          </Link>{" "}
          or <Link href="/#quote">get a fixed quote</Link>{" "}for the human side of the move.
        </p>
      </>
    ),
  },

  {
    slug: "bond-clean-vs-pre-sale-clean",
    title: "Bond Clean vs Pre-Sale Clean: What's the Difference?",
    metaTitle: "Bond Clean vs Pre-Sale Clean — Which Do You Need?",
    description:
      "Bond clean or pre-sale clean — what's the difference, and which one do you actually need? A clear breakdown for renters, sellers and agents in Brisbane and the Gold Coast.",
    excerpt:
      "Renting or selling, the clean you need is different. Here's the real difference between a bond clean and a pre-sale presentation clean.",
    keyword: "bond clean vs pre sale clean",
    category: "Guides",
    date: "2026-07-09",
    updated: "2026-07-09",
    readMins: 4,
    faqs: [
      {
        question: "Do I need a bond clean or a pre-sale clean?",
        answer:
          "If you're a renter moving out, you need a bond clean matched to your agency's exit checklist. If you're selling (or an agent preparing a listing), you want a pre-sale presentation clean focused on how the property looks in photos and to buyers, which is a different priority list.",
      },
      {
        question: "Can one clean cover both?",
        answer:
          "There's overlap (both include a genuinely clean kitchen and bathroom), but a bond clean checks boxes an agency requires, while a pre-sale clean optimises for buyer impression. Tell us your situation and we'll scope the right one rather than a generic clean.",
      },
    ],
    body: (
      <>
        <p>
          &ldquo;Clean before we hand back the keys&rdquo; and &ldquo;clean before the photographer comes&rdquo;
          sound similar but aren't the same job. Here's the real difference.
        </p>

        <h2>Bond clean: built around a checklist</h2>
        <p>
          A bond (end-of-lease) clean exists to satisfy your property manager&apos;s exit inspection so you
          get your deposit back. It follows a fairly standard checklist: oven and rangehood degreased,
          skirting boards wiped, tracks and blinds dusted, walls spot-cleaned, garage swept. The goal is
          ticking every box the agency will check, in the order they&apos;ll check it.
        </p>

        <h2>Pre-sale clean: built around first impressions</h2>
        <p>
          A pre-sale presentation clean has a different job: making the property look its absolute best for
          listing photos and open homes. That means extra attention to the areas buyers actually notice —
          kitchen benchtops, bathroom fixtures, window glass, and anything that photographs poorly when
          dusty or streaked. It&apos;s less about a checklist and more about how the space feels when
          someone walks in.
        </p>

        <h2>Which one do you need?</h2>
        <div className="article-scroll">
          <table>
            <thead>
              <tr>
                <th>Situation</th>
                <th>Clean type</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Renting, moving out, need bond back</td>
                <td>Bond clean</td>
              </tr>
              <tr>
                <td>Selling your home, listing soon</td>
                <td>Pre-sale clean</td>
              </tr>
              <tr>
                <td>Agent preparing a vendor's property</td>
                <td>Pre-sale clean</td>
              </tr>
              <tr>
                <td>Moving into a new place</td>
                <td>Post-move "walk into clean" (see below)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>The third option people forget: cleaning the new place</h2>
        <p>
          It&apos;s easy to focus entirely on the property you&apos;re leaving and forget the one you&apos;re
          walking into. A quick clean of the new home before your furniture arrives means beds go into
          fresh rooms, not someone else&apos;s dust — worth booking alongside your move if the previous
          occupants didn&apos;t leave it spotless.
        </p>

        <p>
          Not sure which applies to you? See the full breakdown on our{" "}
          <Link href="/services/pre-sale-cleaning">pre-sale and bond cleaning page</Link>, or{" "}
          <Link href="/#quote">get a fixed quote</Link>{" "}that bundles your clean with the move itself.
        </p>
      </>
    ),
  },

  {
    slug: "apartment-moving-checklist-brisbane-gold-coast",
    title: "Apartment Moving Checklist: Lifts, Loading Docks & Body Corporate Rules",
    metaTitle: "Apartment Moving Checklist — Lifts & Body Corporate Rules",
    description:
      "Moving out of (or into) an apartment in Brisbane or the Gold Coast? A checklist covering lift bookings, loading docks, body corporate paperwork and insurance certificates.",
    excerpt:
      "Apartment moves have a rulebook houses don't. A checklist for lift bookings, loading docks, insurance certificates and body corporate approval.",
    keyword: "apartment moving checklist",
    category: "Guides",
    date: "2026-07-09",
    updated: "2026-07-09",
    readMins: 5,
    body: (
      <>
        <p>
          A house move is mostly about you. An apartment move is about you <em>and</em>{" "}a building manager,
          a body corporate, a shared lift, and sometimes a strata by-law you didn&apos;t know existed. Here&apos;s
          the checklist that keeps a tower move from stalling in the lobby.
        </p>

        <h2>2–3 weeks before</h2>
        <ul>
          <li>
            <strong>Check your building's move-in/move-out policy.</strong>{" "}Many Gold Coast and Brisbane
            towers require advance notice — sometimes 5–10 business days — to book a lift and loading dock.
          </li>
          <li>
            <strong>Confirm certificate of currency requirements.</strong>{" "}Most buildings want proof the
            removalist carries public liability insurance before they'll approve access.
          </li>
          <li>
            <strong>Ask about permitted moving hours.</strong>{" "}Weekday business hours only, or weekends
            allowed? This can decide your whole moving day plan.
          </li>
          <li>
            <strong>Check lift dimensions</strong>{" "}against your largest pieces of furniture — sofas,
            mattresses and dining tables are the usual problem items.
          </li>
        </ul>

        <h2>1 week before</h2>
        <ul>
          <li>Confirm your booked lift/dock window in writing with the building manager.</li>
          <li>Arrange visitor parking or a loading zone permit for the truck if the building doesn't have its own bay.</li>
          <li>Ask whether lift protection (padding) is required — most buildings expect it, and we bring it as standard.</li>
        </ul>

        <h2>On the day</h2>
        <ul>
          <li>Have your booking confirmation and the removalist's insurance certificate on hand in case building security asks.</li>
          <li>Check in with the concierge or building manager on arrival so the lift booking is actually released to you.</li>
          <li>Protect hallway walls and corners near the lift — some buildings deduct from a bond for scuffs, even if they weren't from your move.</li>
        </ul>

        <h2>What furniture won't fit — and what to do about it</h2>
        <p>
          If a piece genuinely won't fit in the lift, the options are: disassemble it (most sofas and beds
          come apart further than people expect), use the fire stairs for a single item with extra crew, or
          in rare cases a crane/hoist through a balcony (uncommon, and needs its own approval). We check
          lift dimensions against your bigger items when quoting so this is planned, not discovered on the
          day.
        </p>

        <h2>We do this every week</h2>
        <p>
          Coordinating with building managers, arranging certificates of currency, and bringing lift
          protection as standard is routine for us across Gold Coast towers and Brisbane apartment blocks —
          see our{" "}
          <Link href="/moving-gold-coast">Gold Coast moving page</Link>{" "}or{" "}
          <Link href="/services/removalists">removalist service</Link>{" "}for more. Give us your building
          manager's details when you <Link href="/#quote">book your fixed quote</Link>{" "}and we'll handle the
          paperwork.
        </p>
      </>
    ),
  },

  {
    slug: "what-does-a-removalist-quote-include",
    title: "What Should a Removalist Quote Actually Include?",
    metaTitle: "What Should a Removalist Quote Include? (Avoid Surprise Fees)",
    description:
      "Comparing removalist quotes? Here's exactly what a proper quote should include — insurance, wrapping, disassembly — and the fine-print gaps that lead to surprise fees.",
    excerpt:
      "Two quotes with the same number on top can mean very different things. Here's what should actually be in a removalist quote.",
    keyword: "what does a removalist quote include",
    category: "Pricing",
    date: "2026-07-09",
    updated: "2026-07-09",
    readMins: 4,
    faqs: [
      {
        question: "Is transit insurance usually included in a removalist quote?",
        answer:
          "It should be, but always confirm — some operators offer it as a paid add-on rather than a standard inclusion. Ask specifically whether your belongings are covered in transit, not just whether the company itself is insured.",
      },
      {
        question: "Should packing materials be included in the quote?",
        answer:
          "Not always, and that's reasonable — many people pack their own boxes. What matters is that the quote is clear about it, so you're not billed for boxes you assumed were included.",
      },
      {
        question: "What's a fair way to compare two different quotes?",
        answer:
          "List what each quote includes side by side — fixed vs hourly, insurance, disassembly/reassembly, blankets/wrap, minimum hours — rather than just comparing the total number. The cheaper-looking quote sometimes has the shorter list.",
      },
    ],
    body: (
      <>
        <p>
          Two removalist quotes can show the same dollar figure and mean two very different things. Here&apos;s
          what a proper quote should spell out, so you're comparing like for like.
        </p>

        <h2>1. Fixed price or hourly estimate?</h2>
        <p>
          This is the single biggest variable. A fixed price is the number you pay, full stop. An hourly
          estimate is a guess based on how the day is expected to go — traffic, access, load size — and can
          climb if any of those don't cooperate. Ask directly: &ldquo;is this the total price, or an
          estimate based on an hourly rate?&rdquo;
        </p>

        <h2>2. Transit insurance</h2>
        <p>
          Your belongings should be covered from the moment they leave your old address to the moment
          they're placed in the new one. Confirm this explicitly — "we're a fully insured business" refers
          to the company, not necessarily your furniture in transit.
        </p>

        <h2>3. Disassembly and reassembly</h2>
        <p>
          Bed frames, modular sofas, large tables — do these come apart and go back together as part of the
          price, or is that billed separately? This is a common line-item gap in cheaper quotes.
        </p>

        <h2>4. Blankets, wrapping and floor/lift protection</h2>
        <p>
          Furniture protection should be standard, not optional. If a building requires lift padding or
          floor protection, check whether that's included or charged as an extra.
        </p>

        <h2>5. Packing materials (if you want them)</h2>
        <p>
          Not every quote needs to include boxes — plenty of people pack their own — but if you want them
          supplied, confirm the cost upfront rather than discovering it at the door.
        </p>

        <h2>6. Minimum hours or call-out fees</h2>
        <p>
          Some hourly operators have a 3–4 hour minimum regardless of how small your job is. Worth knowing
          before you book a one-item move and get billed for four hours.
        </p>

        <h2>A simple comparison checklist</h2>
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Included?</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Fixed price (not hourly)</td><td>Ask directly</td></tr>
            <tr><td>Transit insurance</td><td>Ask directly</td></tr>
            <tr><td>Disassembly/reassembly</td><td>Ask directly</td></tr>
            <tr><td>Blankets/wrap/protection</td><td>Ask directly</td></tr>
            <tr><td>Minimum call-out hours</td><td>Ask directly</td></tr>
          </tbody>
        </table>

        <p>
          Every one of these is included as standard in our quotes — fixed price, full insurance, wrapping
          and reassembly, no minimum-hour catch. <Link href="/#quote">Get an instant quote</Link>{" "}and
          compare the full picture, not just the top-line number.
        </p>
      </>
    ),
  },

  {
    slug: "how-to-choose-a-removalist",
    title: "How to Choose a Removalist: 8 Questions to Ask Before You Book",
    metaTitle: "How to Choose a Removalist — 8 Questions to Ask First",
    description:
      "Not sure how to pick a removalist? Eight practical questions to ask any moving company before you book, covering pricing, insurance, and what actually happens on the day.",
    excerpt:
      "Eight questions that separate a good removalist from a risky one — ask these before you book anyone.",
    keyword: "how to choose a removalist",
    category: "Guides",
    date: "2026-07-09",
    updated: "2026-07-09",
    readMins: 5,
    body: (
      <>
        <p>
          Anyone with a truck can call themselves a removalist. Here are eight questions that quickly tell
          you whether you're talking to a professional operation or a risk you'll regret.
        </p>

        <h2>1. "Is this price fixed, or an hourly estimate?"</h2>
        <p>
          The single most important question. A fixed price tells you exactly what you'll pay; an hourly
          estimate is a guess that can move in the wrong direction on the day.
        </p>

        <h2>2. "What happens if something is damaged?"</h2>
        <p>
          A real removalist has a clear, immediate answer involving transit insurance. Hesitation or
          vagueness here is a red flag.
        </p>

        <h2>3. "Can I see reviews from recent customers?"</h2>
        <p>
          Google reviews with real names and specific details (suburbs, dates, what was moved) are far more
          telling than a polished website alone. A pattern of recent 5-star reviews mentioning care and
          punctuality is a good sign.
        </p>

        <h2>4. "Do you disassemble and reassemble furniture?"</h2>
        <p>
          Bed frames, large tables and modular sofas often need this. Ask whether it's included or billed
          as an extra so there's no surprise line item.
        </p>

        <h2>5. "How do you handle stairs, lifts or difficult access?"</h2>
        <p>
          A good removalist asks about access <em>before</em>{" "}quoting, not on the day. If a company doesn't
          ask, it's worth asking yourself whether they've actually thought it through.
        </p>

        <h2>6. "Are you insured, and does that cover my belongings in transit?"</h2>
        <p>
          Being "an insured business" and having transit cover for your specific belongings are two
          different things — ask about the second one explicitly.
        </p>

        <h2>7. "What's included versus what costs extra?"</h2>
        <p>
          Blankets, floor protection, packing materials — get the full list, not just the headline price.
          See our companion guide on{" "}
          <Link href="/blog/what-does-a-removalist-quote-include">what a quote should include</Link>.
        </p>

        <h2>8. "How far in advance should I book?"</h2>
        <p>
          A removalist who gives you an honest answer (weekends and end-of-month book out faster; weekdays
          are more flexible) is thinking about your move practically, not just trying to close the booking.
        </p>

        <h2>The short version</h2>
        <p>
          Fixed price, clear insurance answer, transparent inclusions, and a company that asks about access
          before quoting — that combination filters out almost every risky operator. We answer all eight of
          these the same way on every job: <Link href="/#quote">try our quote calculator</Link>{" "}and judge
          for yourself.
        </p>
      </>
    ),
  },

  {
    slug: "moving-out-for-the-first-time-checklist",
    title: "Moving Out for the First Time: The Beginner's Checklist",
    metaTitle: "Moving Out for the First Time — Beginner's Checklist",
    description:
      "Moving out of home for the first time? A beginner's checklist covering what to organise, what people forget, and how to budget for your first move in Brisbane or the Gold Coast.",
    excerpt:
      "Your first move out of home comes with a learning curve. Here's what to organise, and what almost everyone forgets the first time.",
    keyword: "moving out for the first time checklist",
    category: "Guides",
    date: "2026-07-09",
    updated: "2026-07-09",
    readMins: 5,
    body: (
      <>
        <p>
          Your first move out of home is exciting and a little overwhelming — there's a lot nobody
          mentions until it's suddenly your problem at 9pm the night before. Here's the beginner's version
          of what to sort, and what almost everyone forgets the first time.
        </p>

        <h2>Budget for more than just rent and the truck</h2>
        <p>
          First-timers often budget the bond and first week's rent and stop there. Also plan for: connection
          fees for power/internet, a rental bond on utilities in some cases, basic furniture you didn't
          realise your share house didn't have (a broom, a bin, curtains), and simple kitchen basics if
          you're starting from nothing.
        </p>

        <h2>The paperwork nobody warns you about</h2>
        <ul>
          <li>Update your address with your bank, licence and Medicare.</li>
          <li>Set up mail redirection with Australia Post if you're leaving a family home permanently.</li>
          <li>Photograph the property's condition on move-in day, before you unpack anything — this protects your bond later.</li>
          <li>Read your lease before you sign, specifically the exit-clean and bond-return sections.</li>
        </ul>

        <h2>What people forget to organise</h2>
        <ul>
          <li>
            <strong>Utilities before move-in day</strong>, not on it — power connected a day early beats
            arriving to a dark apartment.
          </li>
          <li>
            <strong>Basic tools</strong>{" "}— a screwdriver set and an Allen key see more use in the first
            week than almost anything else you own.
          </li>
          <li>
            <strong>A first-night box</strong>{" "}— bedding, toiletries, chargers, and something to eat off, so
            you're not digging through 20 identical boxes at 10pm.
          </li>
        </ul>

        <h2>Should you hire a removalist for a first move?</h2>
        <p>
          For a single-bedroom or share-house move, hiring a removalist is often cheaper than people expect
          — a small, one-bedroom move is priced from around $349, and it removes the "who do I even ask to
          help me carry a mattress" problem entirely. It also means your (or a friend's) car isn't doing
          five trips across town.
        </p>
        <p>
          Get an <Link href="/#quote">instant fixed quote</Link>{" "}for your first move — it takes 30 seconds
          and there's no obligation to book. And if it's specifically a share-house or single-item move,
          our <Link href="/services/furniture-removal">furniture removal service</Link>{" "}covers exactly
          that.
        </p>
      </>
    ),
  },

  {
    slug: "downsizing-checklist-decluttering-before-a-move",
    title: "Downsizing Checklist: How to Declutter Before You Move",
    metaTitle: "Downsizing Checklist — Declutter Before Your Move",
    description:
      "Downsizing to a smaller home? A practical decluttering checklist for deciding what to keep, sell, donate or remove before your move — and how it lowers your moving cost.",
    excerpt:
      "Moving to a smaller place means hard choices about what comes with you. A practical checklist for decluttering before the truck arrives.",
    keyword: "downsizing checklist",
    category: "Guides",
    date: "2026-07-09",
    updated: "2026-07-09",
    readMins: 5,
    body: (
      <>
        <p>
          Downsizing isn't just a smaller version of a normal move — it's a genuine sorting exercise, often
          through decades of accumulated belongings. A little structure makes it far less overwhelming than
          tackling every room at once.
        </p>

        <h2>Start with a simple four-pile system</h2>
        <ul>
          <li><strong>Keep</strong>{" "}— genuinely needed or loved, and it fits the new space.</li>
          <li><strong>Sell</strong>{" "}— worth something and worth the effort of listing it.</li>
          <li><strong>Donate</strong>{" "}— usable, but not worth selling.</li>
          <li><strong>Remove</strong>{" "}— genuinely done, straight to rubbish removal.</li>
        </ul>
        <p>
          Go room by room rather than trying to decide the whole house's fate in one sitting — it's far
          less exhausting and you make better decisions with fresh eyes each time.
        </p>

        <h2>Measure the new space first</h2>
        <p>
          Before deciding what furniture to keep, get the room dimensions of your new home. A dining table
          that's perfect in a large home can dominate a smaller one. Measuring first turns "do I love this?"
          into the more useful "does this actually fit and make sense here?"
        </p>

        <h2>The categories people find hardest</h2>
        <ul>
          <li>
            <strong>Sentimental items</strong>{" "}— give yourself permission to keep a curated few rather than
            everything. Photographing items you're letting go of is a genuine compromise that works for
            many people.
          </li>
          <li>
            <strong>"Might need it someday" items</strong>{" "}— if it's been unused for 2+ years, someday
            rarely arrives.
          </li>
          <li>
            <strong>Duplicate furniture</strong>{" "}— two lounges, two dining sets. Be honest about which one
            you'll actually use in a smaller footprint.
          </li>
        </ul>

        <h2>Decluttering lowers your moving cost too</h2>
        <p>
          Since removalist pricing is based on home/load size, everything you genuinely let go of before
          moving day is furniture you're not paying to transport, unpack, and then store or discard at the
          other end. A serious declutter can shift you into a smaller, cheaper quote bracket entirely.
        </p>

        <h2>Getting rid of it, properly</h2>
        <p>
          For the "remove" pile — old furniture, appliances, general junk — our{" "}
          <Link href="/services/rubbish-removal">rubbish removal service</Link>{" "}collects from wherever it
          sits (no need to drag anything to the curb) and sorts items for donation, recycling or landfill
          responsibly.
        </p>
        <p>
          Once you've decluttered, get a{" "}
          <Link href="/#quote">fixed quote</Link>{" "}for the move itself — pairing a clear-out with your move
          date in one booking is usually the most efficient way to do both.
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
