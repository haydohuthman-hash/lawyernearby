import Link from "next/link";
import type { ReactNode } from "react";
import type { ArtIcon } from "@/components/PostArt";

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
  artIcon: ArtIcon;
  faqs?: { question: string; answer: string }[];
  body: ReactNode;
};

export const POSTS: BlogPost[] = [
  {
    slug: "how-much-do-removalists-cost-brisbane-to-gold-coast",
    artIcon: "truck",
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
    artIcon: "box",
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
    artIcon: "house",
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
    artIcon: "table",
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
    artIcon: "piano",
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
    artIcon: "calendar",
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
    artIcon: "truck",
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
    artIcon: "trash",
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
    artIcon: "shield",
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
    artIcon: "paw",
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
    artIcon: "sparkle",
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
    artIcon: "box",
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
    artIcon: "shield",
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
    artIcon: "star",
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
    artIcon: "house",
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
    artIcon: "box",
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

  {
    slug: "how-to-wrap-furniture-properly",
    artIcon: "hand",
    title: "How to Wrap Furniture Properly for a Move",
    metaTitle: "How to Wrap Furniture Properly — A Removalist's Guide",
    description:
      "The right way to wrap furniture for a move — what materials to use for each piece, how professionals wrap sofas, tables and mattresses, and the mistakes that cause damage.",
    excerpt:
      "The material you use matters less than the technique. Here's how professionals actually wrap furniture so it survives the trip.",
    keyword: "how to wrap furniture properly",
    category: "Guides",
    date: "2026-07-09",
    updated: "2026-07-09",
    readMins: 5,
    faqs: [
      {
        question: "What's the best material to wrap furniture in for moving?",
        answer:
          "Moving blankets are the professional standard for most furniture — they cushion corners and edges without leaving residue. Stretch wrap (plastic film) is best used over the top of a blanket to hold it in place, not directly on wood or leather, since it can trap moisture and mark some finishes.",
      },
      {
        question: "Should I wrap furniture in bubble wrap or blankets?",
        answer:
          "Blankets for anything with a finish you care about (timber, leather, upholstery) — they protect without direct contact damage. Bubble wrap is better reserved for glass, mirrors and hard-edged decor items where puncture protection matters more than surface protection.",
      },
      {
        question: "Do I need to wrap furniture if a removalist is doing the move?",
        answer:
          "Not if it's a full-service move — blanket-wrapping every piece is included as standard with a professional removalist. This guide is most useful if you're doing a DIY or partial-DIY move, or just want to understand what should be happening when you watch a crew wrap your furniture.",
      },
    ],
    body: (
      <>
        <p>
          Furniture doesn't get damaged in transit because of bad luck — it gets damaged because of
          contact: corners against corners, wood against a truck wall, one box shifting into another for
          three hours on the M1. Wrapping properly is entirely about preventing that contact, and the
          technique matters more than the material.
        </p>

        <h2>The core materials, and what each is actually for</h2>
        <table>
          <thead>
            <tr>
              <th>Material</th>
              <th>Best for</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Moving blankets</td>
              <td>Sofas, tables, timber furniture, mattresses, appliances</td>
            </tr>
            <tr>
              <td>Stretch wrap (plastic film)</td>
              <td>Holding blankets in place, protecting from dust and moisture — over a blanket, not directly on wood/leather</td>
            </tr>
            <tr>
              <td>Bubble wrap</td>
              <td>Glass, mirrors, lamps, hard-edged decor</td>
            </tr>
            <tr>
              <td>Corner protectors</td>
              <td>Table and cabinet edges, artwork frames</td>
            </tr>
          </tbody>
        </table>

        <h2>Wrapping a sofa or armchair</h2>
        <ol>
          <li>Remove any loose cushions and wrap them separately.</li>
          <li>Drape a moving blanket over the full piece, tucking it around arms and legs.</li>
          <li>Secure the blanket with stretch wrap or packing tape — never tape directly to the fabric.</li>
          <li>Legs that unscrew should come off, be bagged with their hardware, and taped to the underside of the piece so nothing goes missing.</li>
        </ol>

        <h2>Wrapping tables and timber furniture</h2>
        <ul>
          <li>Corner-protect first, especially on glass or stone tops.</li>
          <li>Blanket-wrap the whole surface, securing with stretch wrap rather than tape (tape can pull finish off timber when removed).</li>
          <li>Table legs that unscrew should always come off for transport — it reduces bulk and removes the single most common breakage point.</li>
        </ul>

        <h2>Wrapping mattresses</h2>
        <p>
          A mattress bag (heavy-duty plastic, purpose-made) is worth the few dollars — it keeps a mattress
          clean and dry through the move and protects it from truck-wall scuffing. If you don't have one, a
          blanket secured with stretch wrap is the fallback, though it won't offer the same weatherproofing.
        </p>

        <h2>Wrapping glass, mirrors and artwork</h2>
        <ol>
          <li>Bubble wrap first, glass-side protected, taped at the edges only (not across the face).</li>
          <li>Corner protectors on all four corners for framed pieces.</li>
          <li>Transport vertically, never flat — flat glass under any weight is how cracks happen.</li>
          <li>Mark clearly as fragile so anyone handling it treats it accordingly.</li>
        </ol>

        <h2>Three mistakes that cause the most damage</h2>
        <ul>
          <li>
            <strong>Taping directly onto furniture surfaces</strong>{" "}— it can pull finish or paint off when
            removed, especially on timber and painted pieces.
          </li>
          <li>
            <strong>Wrapping too loosely.</strong>{" "}A blanket that shifts during transit protects nothing —
            secure it firmly enough that it can't slide.
          </li>
          <li>
            <strong>Stacking unprotected pieces against each other.</strong>{" "}Even wrapped furniture needs a
            blanket or padding between adjacent pieces in the truck, not just on the outside.
          </li>
        </ul>

        <p>
          If all of this sounds like a lot to get right on moving day — it is, which is why full transit
          insurance and professional wrapping are included as standard on every{" "}
          <Link href="/services/removalists">Residence Relocations move</Link>. Prefer to hand it over
          entirely? <Link href="/#quote">Get a fixed quote</Link>{" "}and we'll wrap and load everything
          properly, no plastic-wrap learning curve required.
        </p>
      </>
    ),
  },

  {
    slug: "two-men-and-a-truck-vs-full-service-removalist",
    artIcon: "truck",
    title: "\"Two Men and a Truck\" vs a Full-Service Removalist: What's the Real Difference?",
    metaTitle: "Two Men and a Truck vs Full-Service Removalist — Compared",
    description:
      "Searching for a two men and a truck style mover in Brisbane? Here's an honest comparison between a small hourly crew and a full-service, fixed-price removalist.",
    excerpt:
      "\"Two guys and a truck\" and a full-service removalist solve different problems. Here's how to know which one you actually need.",
    keyword: "two men and a truck brisbane",
    category: "Pricing",
    date: "2026-07-09",
    updated: "2026-07-09",
    readMins: 5,
    faqs: [
      {
        question: "Is \"two men and a truck\" cheaper than a full removalist?",
        answer:
          "For a very small job (a few items, one room, no stairs), often yes on the headline rate. For anything bigger, the hourly model can end up costing about the same or more once time adds up — a fixed-price quote removes that uncertainty entirely.",
      },
      {
        question: "What's the difference between a man with a van and a removalist company?",
        answer:
          "A \"man with a van\" or small two-person crew is typically an hourly, informal service best suited to single items or very small loads. A full-service removalist brings a dedicated truck, a trained multi-person crew, transit insurance, and — with us — a fixed price agreed before the day, suited to full house and apartment moves.",
      },
    ],
    body: (
      <>
        <p>
          If you've searched something like &ldquo;two men and a truck Brisbane&rdquo; or &ldquo;man with a
          van Brisbane,&rdquo; you're usually after one of two things: a genuinely small, cheap job, or
          you're not yet sure how big your move actually is. Here's an honest breakdown of when each
          option makes sense — this isn't a comparison against any specific franchise, just the two service
          models people usually mean by those searches.
        </p>

        <h2>What "two men and a truck" style services are good at</h2>
        <ul>
          <li>Moving a single item — a couch, a fridge, a bed — across town.</li>
          <li>Small share-house or studio moves with minimal furniture.</li>
          <li>Quick, informal jobs where flexibility matters more than insurance paperwork.</li>
        </ul>
        <p>
          These are usually priced hourly, with a small crew and a single truck size. For the right job,
          that's genuinely the most efficient option — you don't need a full removalist operation to move
          one sofa across the suburb.
        </p>

        <h2>Where the hourly, small-crew model starts to strain</h2>
        <ul>
          <li>
            <strong>Multi-bedroom homes.</strong>{" "}More furniture means more truck trips or a bigger vehicle
            — which is exactly the point where an hourly rate can climb past what a fixed price would have
            been.
          </li>
          <li>
            <strong>Stairs, lifts or long carries.</strong>{" "}A two-person crew moving a large item up three
            flights takes meaningfully longer than four trained movers would — and you're paying by the
            hour for that difference.
          </li>
          <li>
            <strong>Anything you'd be upset to lose.</strong>{" "}Ask directly whether your belongings are
            covered by transit insurance, not just whether the operator has public liability cover — they're
            not the same thing.
          </li>
          <li>
            <strong>Specialty items.</strong>{" "}Pianos and slate pool tables need specific equipment (piano
            trolleys, slate racks) that a general small-job crew may not carry.
          </li>
        </ul>

        <h2>The real question to ask yourself</h2>
        <p>
          Not "which is cheaper," but "how much room is there for this job to take longer than expected?"
          A single-item, ground-floor-to-ground-floor move has very little room for surprise — hourly is
          fine. A full home with stairs, an unknown amount of stuff in the garage, and traffic on the M1
          has a lot of room for surprise — that's exactly where a fixed price protects you.
        </p>

        <h2>How we compare</h2>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Small hourly crew</th>
              <th>Residence Relocations</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Pricing</td>
              <td>Hourly, can vary</td>
              <td>Fixed, agreed upfront</td>
            </tr>
            <tr>
              <td>Best for</td>
              <td>Single items, tiny loads</td>
              <td>Full homes, apartments, specialty items</td>
            </tr>
            <tr>
              <td>Transit insurance</td>
              <td>Ask directly</td>
              <td>Included as standard</td>
            </tr>
            <tr>
              <td>Disassembly/reassembly</td>
              <td>Ask directly</td>
              <td>Included as standard</td>
            </tr>
            <tr>
              <td>Corridor specialty</td>
              <td>Usually local-only</td>
              <td>Brisbane ↔ Gold Coast, daily</td>
            </tr>
          </tbody>
        </table>

        <p>
          If your move is bigger than "one sofa across town," see how a fixed-price quote actually compares
          — <Link href="/#quote">get an instant quote in 30 seconds</Link>, or read more about our{" "}
          <Link href="/removalists-brisbane-to-gold-coast">Brisbane to Gold Coast service</Link>.
        </p>
      </>
    ),
  },

  {
    slug: "shifting-house-in-brisbane-guide",
    artIcon: "house",
    title: "Shifting House in Brisbane: The Local's Guide",
    metaTitle: "Shifting House in Brisbane — A Local's Guide",
    description:
      "Shifting house in Brisbane? A practical local guide covering what Brisbane movers need to know — suburb quirks, traffic timing, and how to make shifting day painless.",
    excerpt:
      "\"Shifting house\" is what Queenslanders actually call it. Here's the local's guide to doing it painlessly.",
    keyword: "shifting house brisbane",
    category: "Guides",
    date: "2026-07-09",
    updated: "2026-07-09",
    readMins: 5,
    body: (
      <>
        <p>
          If you grew up in Queensland, you don't "move house" — you're "shifting." Whatever you call it,
          shifting day in Brisbane has its own local quirks that a generic moving guide won't cover. Here's
          the version written for actual Brisbane streets.
        </p>

        <h2>Brisbane's housing stock changes the plan</h2>
        <p>
          A huge share of Brisbane homes are Queenslanders — timber, on stumps, often with stairs and a
          steep or narrow driveway. Shifting out of one of these is a genuinely different job to shifting
          out of a modern brick townhouse: furniture often has to come down external stairs, sometimes over
          a veranda rail with lifting straps, and access needs to be assessed before the truck turns up, not
          on the day.
        </p>
        <p>
          If you're shifting into or out of a Queenslander, tell your removalist about the stairs, stumps
          and driveway slope when you book — it changes crew size, not just the quote.
        </p>

        <h2>Time your shift around traffic, not just the calendar</h2>
        <p>
          Brisbane's inner-city streets (New Farm, Paddington, West End) get genuinely difficult for a
          truck during school pick-up and peak commuter hours. A shift scheduled for an early morning start
          almost always runs smoother than a midday one, purely because of how much easier the streets are
          to navigate and park in before 9am.
        </p>

        <h2>Council permits: worth checking before shifting day</h2>
        <p>
          Inner-city Brisbane streets are often permit-zoned. If your street doesn't have obvious space for
          a truck, a quick call to Brisbane City Council or a check of the street signage can save a
          frustrating morning circling for parking. A good removalist will flag this at quote stage if your
          address looks tight.
        </p>

        <h2>Shifting to the Gold Coast? It's a bigger decision than a local shift</h2>
        <p>
          Plenty of Brisbane shifts these days aren't across the suburb — they're down the M1 entirely.
          If that's you, the logistics are genuinely different: a single dedicated truck for the whole
          route, one loading and one unloading window in the same day, and a fixed price that accounts for
          the drive. See our full{" "}
          <Link href="/removalists-brisbane-to-gold-coast">Brisbane to Gold Coast guide</Link>{" "}if that's the
          shift you're planning.
        </p>

        <h2>The shifting-day basics, Brisbane edition</h2>
        <ul>
          <li>Book your removalist and lock in your date — weekends and end-of-month book out fastest here too.</li>
          <li>Flag stairs, stumps, steep driveways or narrow streets when you get your quote.</li>
          <li>Schedule an early start if your street gets busy with school or commuter traffic.</li>
          <li>Check permit parking rules a week out, not the morning of.</li>
          <li>Pack a first-night box so shifting day doesn't end with you digging through 20 identical boxes.</li>
        </ul>

        <p>
          We run Brisbane shifts every day, Queenslander stairs and all —{" "}
          <Link href="/#quote">get your fixed quote</Link>{" "}and tell us about your street when you book.
        </p>
      </>
    ),
  },

  {
    slug: "13-things-every-brisbane-mover-understands",
    artIcon: "sparkle",
    title: "13 Things Every Brisbane Mover Understands",
    metaTitle: "13 Things Every Brisbane Mover Understands (A Funny Guide)",
    description:
      "A slightly funny, very true list of 13 things every Brisbane or Gold Coast mover understands — from Queenslander stairs to the M1 at 4pm on a Friday.",
    excerpt:
      "Queenslander stairs, mystery garage boxes, and the M1 at exactly the wrong time. 13 truths every Brisbane mover knows.",
    keyword: "moving house brisbane funny",
    category: "Guides",
    date: "2026-07-09",
    updated: "2026-07-09",
    readMins: 4,
    body: (
      <>
        <p>
          Moving is universally chaotic, but Brisbane and the Gold Coast add a few local flavours of chaos
          all their own. If you've shifted house here, you'll recognise every one of these.
        </p>

        <h2>1. The garage box you forgot you owned</h2>
        <p>
          Every Brisbane garage has at least one box that hasn't been opened since the last move. Nobody
          knows what's in it. Nobody ever opens it at the new place either.
        </p>

        <h2>2. Queenslander stairs are a personality trait</h2>
        <p>
          If you've lived in a Queenslander, you have Opinions about stairs, stumps and the physics of
          getting a couch around that one impossible corner. You will tell people about it for years.
        </p>

        <h2>3. The M1 at 4pm on a Friday is not a road, it's a weather system</h2>
        <p>
          Anyone who has driven the corridor knows: schedule the move for the morning, or accept your fate.
        </p>

        <h2>4. You will find at least one thing that belongs to a housemate from three addresses ago</h2>
        <p>No explanation. It's just there. It's always there.</p>

        <h2>5. "It'll fit in the lift" has ended more than one friendship</h2>
        <p>
          Gold Coast tower dwellers know this pain specifically. Measure twice. Argue about the sofa zero
          times.
        </p>

        <h2>6. Everyone becomes a weather expert on moving day</h2>
        <p>
          Suddenly you're checking radar like a storm chaser, because a Brisbane summer afternoon downpour
          waits for nobody's furniture.
        </p>

        <h2>7. There is always one box labelled "MISC" that is doing an enormous amount of work</h2>
        <p>It weighs as much as the fridge. Nobody knows why.</p>

        <h2>8. You will develop a sudden, deep respect for removalists</h2>
        <p>
          Usually somewhere around attempt three at getting a mattress down a Paddington staircase.
        </p>

        <h2>9. Every share house has a "whose couch is this" negotiation</h2>
        <p>It never ends amicably. Someone always claims the good one arrived "already there."</p>

        <h2>10. The first-night box always gets packed last, and packed badly</h2>
        <p>
          You will open it at 9pm looking for a toothbrush and instead find a photo frame and one shoe.
        </p>

        <h2>11. Body corporate paperwork is its own extreme sport on the Gold Coast</h2>
        <p>Certificate of currency, lift booking form, loading dock time slot — bring snacks.</p>

        <h2>12. You will Google "how many boxes for a 2 bedroom" and still be wrong</h2>
        <p>It's always more boxes. It is always, always more boxes.</p>

        <h2>13. By the end, you will have opinions about moving trucks you never expected to have</h2>
        <p>
          Turning radius, ramp angle, tie-down points — congratulations, you now know things.
        </p>

        <p>
          If reading all of that made you tired just thinking about it — fair. Let a crew who's genuinely
          seen it all handle the truck part. <Link href="/#quote">Get a fixed quote</Link>{" "}and keep your
          opinions about moving trucks purely theoretical.
        </p>
      </>
    ),
  },

  {
    slug: "diy-move-vs-hiring-removalists-cost-comparison",
    artIcon: "hand",
    title: "DIY Move vs Hiring Removalists: What It Actually Costs",
    metaTitle: "DIY Move vs Removalists — Real Cost Comparison",
    description:
      "Is a DIY move actually cheaper than hiring removalists? A real cost comparison covering truck hire, your time, injury risk and damage risk — not just the sticker price.",
    excerpt:
      "The truck hire fee isn't the real cost of a DIY move. Here's the honest comparison, numbers included.",
    keyword: "diy move vs removalists cost",
    category: "Pricing",
    date: "2026-07-09",
    updated: "2026-07-09",
    readMins: 5,
    faqs: [
      {
        question: "Is it cheaper to move yourself or hire removalists?",
        answer:
          "For a small, single-level move with willing helpers, DIY can be genuinely cheaper on paper. Once you factor in your own time, fuel, potential damage, and the physical toll, a fixed-price removalist is often closer in real cost than people expect — especially for anything bigger than a studio or 1-bedroom.",
      },
      {
        question: "What does a DIY move actually cost, all in?",
        answer:
          "Budget for truck hire ($80-$150/day for a ute or small truck), fuel, packing materials, and realistically a case of drinks or a meal for any friends helping. A day of DIY moving for a 2-3 bedroom home commonly lands in the $200-$400 range once everything is counted — before factoring in your own time or any damage.",
      },
    ],
    body: (
      <>
        <p>
          The sticker price of truck hire makes DIY moving look like the obvious cheap option. Once you add
          up everything else involved, the gap to a fixed-price removalist is often smaller than people
          expect — and sometimes it's not there at all. Here's the honest breakdown.
        </p>

        <h2>What a DIY move actually costs</h2>
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Typical cost</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Truck/ute hire (1 day)</td><td>$80–$180</td></tr>
            <tr><td>Fuel</td><td>$30–$60</td></tr>
            <tr><td>Packing materials (boxes, tape, wrap)</td><td>$50–$120</td></tr>
            <tr><td>Feeding/thanking helpers</td><td>$50–$100</td></tr>
            <tr><td><strong>Rough total</strong></td><td><strong>$210–$460</strong></td></tr>
          </tbody>
        </table>
        <p>
          That's before counting: your own labour (a full day, sometimes two), the physical toll of lifting
          heavy furniture without the right equipment, and the real risk of damaging your belongings, a
          rental wall, or your back.
        </p>

        <h2>What you're not pricing in</h2>
        <ul>
          <li>
            <strong>Your time.</strong>{" "}A DIY move for a 2-3 bedroom home commonly takes a full day, often
            spilling into a second for unpacking and returning the truck.
          </li>
          <li>
            <strong>Injury risk.</strong>{" "}Moving heavy furniture without proper technique or equipment
            (trolleys, straps, ramps) is one of the most common causes of moving-day back injuries.
          </li>
          <li>
            <strong>Damage risk.</strong>{" "}No transit insurance means any scratch, crack or dent — to your
            furniture or the property — is entirely your cost to absorb.
          </li>
          <li>
            <strong>Truck hire excess.</strong>{" "}Rental trucks usually carry an insurance excess of several
            hundred dollars if anything happens to the vehicle itself.
          </li>
        </ul>

        <h2>Where DIY genuinely makes sense</h2>
        <p>
          A small, single-level move (a studio, or a few pieces of furniture between nearby addresses) with
          willing, physically capable helpers can be a legitimately good DIY candidate — the risk is low and
          the job is short. It's the equation that changes as home size, stairs, and distance increase.
        </p>

        <h2>Where a fixed-price removalist starts winning on real cost</h2>
        <table>
          <thead>
            <tr>
              <th>Factor</th>
              <th>Tips the scale toward</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>2+ bedrooms of furniture</td><td>Removalist — the time/risk trade-off shifts fast</td></tr>
            <tr><td>Stairs or a lift involved</td><td>Removalist — proper equipment removes injury risk</td></tr>
            <tr><td>Specialty items (piano, pool table)</td><td>Removalist — DIY risk here is genuinely high</td></tr>
            <tr><td>Corridor move (Brisbane–Gold Coast)</td><td>Removalist — one dedicated truck, one day, done</td></tr>
            <tr><td>Small/studio, willing helpers, short distance</td><td>DIY can be reasonable</td></tr>
          </tbody>
        </table>

        <h2>See the real number for your move</h2>
        <p>
          Rather than guess which side of that table you're on, get an actual{" "}
          <Link href="/#quote">fixed quote</Link>{" "}and compare it directly to your realistic DIY budget,
          time included. Sometimes DIY wins. Often, once everything's counted, it's closer than the truck
          hire sticker price suggested.
        </p>
      </>
    ),
  },

  {
    slug: "hot-tub-spa-removal-cost-guide",
    artIcon: "spa",
    title: "Hot Tub & Spa Removal: What It Costs and How It Works",
    metaTitle: "Hot Tub & Spa Removal Cost Guide — Brisbane & Gold Coast",
    description:
      "Need a hot tub or spa removed in Brisbane or the Gold Coast? Here's what it costs, how the removal process actually works, and what to check before you book.",
    excerpt:
      "Spas and hot tubs are heavy, awkward, and easy to damage moving them wrong. Here's what removal actually involves and costs.",
    keyword: "spa removal cost brisbane",
    category: "Pricing",
    date: "2026-07-09",
    updated: "2026-07-09",
    readMins: 4,
    faqs: [
      {
        question: "How much does it cost to remove a hot tub or spa?",
        answer:
          "Spa and hot tub removal typically ranges from $250 to $600 depending on size, access (stairs, side gates, crane requirements) and whether it's being disposed of or relocated to a new address. Get a fixed quote with photos of the spa and its access path for an accurate number.",
      },
      {
        question: "Can a spa be moved to a new house, or only removed and disposed of?",
        answer:
          "Both are possible. A spa in good condition can be drained, secured and transported to a new address as part of your move. Older or damaged units are more commonly disposed of responsibly, with materials sorted for recycling where possible.",
      },
      {
        question: "Do I need to drain the spa myself before removal?",
        answer:
          "Yes — the spa needs to be fully drained before our crew arrives. We can advise on the best drainage method when you book, but arrange this a day or two ahead so it's not holding up moving day.",
      },
    ],
    body: (
      <>
        <p>
          A spa or hot tub is one of the heaviest, most awkward things in a backyard — several hundred
          kilograms empty, often wedged behind a gate or deck that wasn't built with removal in mind.
          Here's what actually goes into moving or removing one, and what it costs.
        </p>

        <h2>What it costs</h2>
        <table>
          <thead>
            <tr>
              <th>Job</th>
              <th>Typical cost</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Small inflatable/portable spa removal</td><td>from ~$150</td></tr>
            <tr><td>Standard hard-shell spa, easy access</td><td>~$250–$400</td></tr>
            <tr><td>Larger spa, tight access or stairs</td><td>~$400–$600</td></tr>
            <tr><td>Relocation to a new address (vs disposal)</td><td>Quoted as part of your move — ask for a bundled price</td></tr>
          </tbody>
        </table>

        <h2>What has to happen before removal day</h2>
        <ol>
          <li>
            <strong>Full drainage.</strong>{" "}A spa must be completely empty before our crew arrives — a full
            spa can weigh well over a tonne, which isn't something any crew can safely lift.
          </li>
          <li>
            <strong>Disconnect power and plumbing.</strong>{" "}Hard-wired spas need power isolated (an
            electrician, if you're not confident doing this yourself) before the unit can be moved.
          </li>
          <li>
            <strong>Clear the access path.</strong>{" "}Side gates, deck boards, or fencing sometimes need to
            come out temporarily — we'll flag this when quoting from your photos.
          </li>
        </ol>

        <h2>How the removal itself works</h2>
        <p>
          Once drained and disconnected, a spa is walked out on furniture dollies or slid on protective
          sheeting, depending on the surface and access. Tight gates or fence lines occasionally mean a
          panel comes out temporarily rather than forcing the unit through — better a fence panel comes off
          cleanly than the spa's shell gets cracked squeezing through.
        </p>

        <h2>Relocating vs disposing</h2>
        <p>
          If the spa is coming with you to a new address, it travels much like any other oversized item —
          strapped and padded in the truck, positioned and reconnected at the other end (reconnection is
          usually a separate electrician/plumber step, not part of the removal itself). If it's being
          disposed of, we sort materials for recycling where possible rather than sending everything
          straight to landfill.
        </p>

        <h2>Combine it with your move or a clear-out</h2>
        <p>
          Getting rid of a spa is often part of a bigger property clear-out before a sale, or a straight
          swap when a new owner doesn't want the old one. Pair it with our{" "}
          <Link href="/services/rubbish-removal">rubbish removal service</Link>{" "}or your{" "}
          <Link href="/removalists-brisbane-to-gold-coast">full house move</Link>{" "}for one coordinated
          booking. <Link href="/#quote">Get a fixed quote</Link>{" "}— a couple of photos of the spa and its
          access path is usually enough for an accurate price.
        </p>
      </>
    ),
  },
  {
    slug: "how-to-pack-a-moving-truck-like-a-pro",
    artIcon: "truck",
    title: "How to Pack a Moving Truck Like a Pro",
    metaTitle: "How to Pack a Moving Truck Properly — Loading Order Guide",
    description:
      "The loading order professional removalists actually use — what goes in first, how weight gets distributed, and the mistakes that cause damage or a truck that won't fit everything.",
    excerpt:
      "The order you load a truck determines whether everything survives the trip and whether it all fits. Here's the loading order we actually use.",
    keyword: "how to pack a moving truck",
    category: "Guides",
    date: "2026-07-10",
    updated: "2026-07-10",
    readMins: 5,
    faqs: [
      {
        question: "What order should you load a moving truck?",
        answer:
          "Heavy, flat items go in first against the cab wall (fridges, wardrobes, dressers), then large furniture and appliances, then boxes stacked heaviest-to-lightest, with soft items (mattresses, sofas) and fragile boxes loaded last so they sit on top and come off first.",
      },
      {
        question: "How do you stop items moving around in a moving truck?",
        answer:
          "Load wall-to-wall with no gaps — soft items like pillows, rolled blankets or rugs fill dead space so nothing has room to shift. Ratchet straps anchor tall furniture to the truck's rail, and a full load actually moves less than a half-empty one.",
      },
    ],
    body: (
      <>
        <p>
          The order you load a truck matters more than how carefully you wrap any single item. A badly
          loaded truck lets furniture shift, boxes crush, and glass crack against a two-hour drive's worth
          of braking and cornering — regardless of how well each box was taped. Here's the loading order a
          professional crew actually follows.
        </p>

        <h2>The loading order, step by step</h2>
        <ol>
          <li>
            <strong>Heavy, flat items against the cab wall first.</strong>{" "}Fridges, wardrobes, chests of
            drawers and dressers go in first, standing upright and flush against the front wall of the
            truck — this is the most stable position and takes the brunt of braking force.
          </li>
          <li>
            <strong>Large furniture next.</strong>{" "}Sofas on their end where possible, dining tables with
            legs removed or protected, bed frames disassembled. Anything with legs or a delicate finish
            gets padding at every contact point.
          </li>
          <li>
            <strong>Boxes, heaviest first.</strong>{" "}Books and heavy kitchen boxes go on the bottom, stacked
            no more than three high, with medium boxes above and the lightest (linen, soft goods) on top of
            each stack.
          </li>
          <li>
            <strong>Soft items and fragile boxes last.</strong>{" "}Mattresses, rugs and cushions load last so
            they sit on top of the stack — they're light enough not to crush anything, and they double as
            padding against the truck's ceiling and walls.
          </li>
          <li>
            <strong>Straps go on every tall stack.</strong>{" "}Ratchet straps anchored to the truck's internal
            rail stop wardrobes and dressers toppling under braking — this step gets skipped more than any
            other and causes more damage than any other single mistake.
          </li>
        </ol>

        <h2>Why weight distribution matters more than most people think</h2>
        <p>
          It's not just about not crushing things — an unevenly loaded truck (all the weight at the back,
          or all on one side) changes how the vehicle handles, especially braking distance and cornering.
          Heavy items belong low and toward the front axle, not stacked at the back doors where it's
          easiest to just stop loading.
        </p>

        <h2>Fill every gap — a full truck moves less than a half-empty one</h2>
        <p>
          Counterintuitively, a truck packed wall-to-wall with no dead space shifts less in transit than
          one with room to move. Use pillows, rolled towels, and spare blankets to fill gaps between
          furniture rather than leaving air — anything that can shift half a metre under braking can shift
          enough to do damage.
        </p>

        <h2>Three mistakes that cause most transit damage</h2>
        <ul>
          <li>
            <strong>Loading boxes before furniture.</strong>{" "}Furniture needs the stable wall position;
            boxes stacked against the cab wall have nothing solid behind them if the load shifts forward.
          </li>
          <li>
            <strong>Stacking boxes by size instead of weight.</strong>{" "}A heavy box on top of a light one
            crushes it, no matter how sturdy either box looks.
          </li>
          <li>
            <strong>Skipping straps because "it's not far."</strong>{" "}Distance doesn't matter — braking at
            60km/h does the same thing to an unstrapped wardrobe whether the trip is 5km or 100km.
          </li>
        </ul>

        <p>
          If this sounds like a lot to get right on moving day, it's exactly what a professional crew
          handles as standard — no guesswork about what goes where.{" "}
          <Link href="/#quote">Get a fixed quote</Link>{" "}for the{" "}
          <Link href="/removalists-brisbane-to-gold-coast">Brisbane to Gold Coast corridor</Link>{" "}and skip
          the truck-loading puzzle altogether.
        </p>
      </>
    ),
  },
  {
    slug: "how-to-pack-boxes-properly",
    artIcon: "box",
    title: "How to Pack Boxes Properly (Sizes, Labelling, Fragile Items)",
    metaTitle: "How to Pack Boxes Properly for Moving — Sizes & Labelling",
    description:
      "The right box size for what you're packing, a labelling system that actually works on moving day, and how to pack fragile items so they survive the trip.",
    excerpt:
      "Wrong box size and a lazy labelling system are why moving day turns into chaos. Here's the system that keeps it manageable.",
    keyword: "how to pack boxes properly",
    category: "Guides",
    date: "2026-07-10",
    updated: "2026-07-10",
    readMins: 5,
    faqs: [
      {
        question: "What size boxes should I use to pack for a move?",
        answer:
          "Small boxes for heavy, dense items like books — a full large box of books is often too heavy to lift safely. Medium boxes suit kitchenware and toys. Large boxes are for light, bulky items like linen and lampshades. Matching weight to box size, not just fitting the items in, is what prevents blown-out bottoms.",
      },
      {
        question: "What's the best way to label moving boxes?",
        answer:
          "Label every box with the destination room in large letters on the top and one side (so it's visible whichever way it's stacked), plus a one-word contents note and a priority mark for anything you need on day one — a coloured sticker system works well for this.",
      },
    ],
    body: (
      <>
        <p>
          Two things separate an easy unpack from a week of digging through unlabelled boxes: matching box
          size to what's actually going inside, and a labelling system you'll still be able to read after
          twelve hours of packing. Here's both.
        </p>

        <h2>Match the box size to the weight, not the item</h2>
        <table>
          <thead>
            <tr>
              <th>Box size</th>
              <th>Best for</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Small / book box</td>
              <td>Books, tools, tinned pantry items — anything dense and heavy</td>
            </tr>
            <tr>
              <td>Medium</td>
              <td>Kitchenware, toys, small appliances, shoes</td>
            </tr>
            <tr>
              <td>Large</td>
              <td>Linen, cushions, lampshades, light bulky items</td>
            </tr>
            <tr>
              <td>Wardrobe box</td>
              <td>Hanging clothes straight from the closet</td>
            </tr>
          </tbody>
        </table>
        <p>
          The most common packing mistake is filling a large box with books because "it fits" — the box
          usually blows out at the bottom, or becomes too heavy for one person to lift safely. If it's
          heavy, it belongs in a small box, full stop.
        </p>

        <h2>A labelling system that survives moving day chaos</h2>
        <ol>
          <li>
            <strong>Room name in large letters, on the top and one side.</strong>{" "}Boxes get stacked and
            turned — a label only on the top is invisible half the time.
          </li>
          <li>
            <strong>A one-word contents note.</strong>{" "}"Kitchen — pots" tells the crew far more than
            "Kitchen" alone when they're deciding what goes where first.
          </li>
          <li>
            <strong>A priority mark for day-one essentials.</strong>{" "}A coloured sticker or "OPEN FIRST"
            written boldly on anything with chargers, toiletries, medications or bedding — you don't want
            to be searching twenty identical boxes for a phone charger at 9pm.
          </li>
        </ol>

        <h2>Packing fragile items so they actually survive</h2>
        <ul>
          <li>
            <strong>Wrap individually, not just cushioned in the box.</strong>{" "}Paper or bubble wrap around
            each item stops them knocking against each other, which is where most breakages happen.
          </li>
          <li>
            <strong>Plates go on their edge, not flat.</strong>{" "}A stack of flat plates cracks under its
            own weight far more easily than plates stood on edge like records.
          </li>
          <li>
            <strong>Fill every gap.</strong>{" "}Scrunched paper in every empty corner stops items shifting —
            an item with room to move is an item that'll crack against the box wall.
          </li>
          <li>
            <strong>Mark it "FRAGILE" and "THIS WAY UP" on every side.</strong>{" "}Not just the top — boxes
            get tilted and stacked in ways you can't control once they're on the truck.
          </li>
        </ul>
        <p>
          For anything too large to box — furniture, mirrors, artwork — see our full{" "}
          <Link href="/blog/how-to-wrap-furniture-properly">guide to wrapping furniture properly</Link>.
        </p>

        <h2>Don't over-tape, and don't under-tape</h2>
        <p>
          Two strips across the bottom seam and one down each side edge is enough for a well-packed box.
          Over-taping doesn't add strength once the seam is sealed — it just makes boxes harder to open
          and slower to unpack on the other end.
        </p>

        <p>
          Packed and labelled properly, a house's worth of boxes turns from chaos into a system.{" "}
          <Link href="/#quote">Get a fixed quote</Link>{" "}for the move itself, or read our{" "}
          <Link href="/blog/brisbane-to-gold-coast-moving-checklist">full moving checklist</Link>{" "}for
          everything else on the timeline.
        </p>
      </>
    ),
  },
  {
    slug: "garage-sale-guide-before-you-move",
    artIcon: "tag",
    title: "The Ultimate Garage Sale Guide Before You Move",
    metaTitle: "Garage Sale Before Moving — Complete Guide (2026)",
    description:
      "Turn the stuff you're not taking into cash before moving day. Timing, pricing, promotion and what to do with what doesn't sell.",
    excerpt:
      "Every box you don't pack is money and time saved on moving day. Here's how to run a garage sale that actually clears the house.",
    keyword: "garage sale before moving",
    category: "Guides",
    date: "2026-07-10",
    updated: "2026-07-10",
    readMins: 5,
    body: (
      <>
        <p>
          The cheapest thing you can do before a move isn't finding a better removalist quote — it's
          moving less. Every box you don't pack is a box someone doesn't have to carry, and a garage sale
          turns the stuff you were going to donate or bin into cash instead. Here's how to run one that
          actually works.
        </p>

        <h2>When to hold it</h2>
        <p>
          Two to three weekends before moving day is the sweet spot — early enough that you're not
          scrambling to pack what didn't sell, late enough that you've already gone through most rooms and
          know what's actually staying. Saturday mornings from 7–8am get the serious bargain-hunters;
          finish by early afternoon once foot traffic drops off.
        </p>

        <h2>What sells, and what doesn't</h2>
        <table>
          <thead>
            <tr>
              <th>Sells well</th>
              <th>Usually doesn't</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Kids' toys and books, in good condition</td>
              <td>Old TVs and outdated electronics</td>
            </tr>
            <tr>
              <td>Kitchenware, small appliances that work</td>
              <td>Worn-out furniture with damage</td>
            </tr>
            <tr>
              <td>Tools, garden equipment</td>
              <td>Textbooks, VHS/DVDs (donate instead)</td>
            </tr>
            <tr>
              <td>Furniture in good condition, priced to move</td>
              <td>Anything that needs explaining to sell</td>
            </tr>
          </tbody>
        </table>

        <h2>Pricing to actually clear stock, not just list it</h2>
        <ul>
          <li>
            <strong>Price low enough that people don't need to think.</strong>{" "}A $2 item that sells beats
            a $5 item that sits there until you're donating it anyway.
          </li>
          <li>
            <strong>Bundle the small stuff.</strong>{" "}"$5 for the whole box" moves ten small items in one
            transaction instead of ten separate haggling conversations.
          </li>
          <li>
            <strong>Drop prices after the first hour.</strong>{" "}Early birds pay closer to asking price;
            everything left by 11am should be priced to just get gone.
          </li>
        </ul>

        <h2>Getting people to actually show up</h2>
        <p>
          Post it on local Facebook buy-swap-sell groups and Gumtree/Marketplace 3–4 days out with photos
          of the best items — furniture and anything unusual gets the clicks that bring people to the rest
          of the sale. Bright signage at the nearest main road corner on the morning of the sale still
          works better than almost anything digital for walk-up traffic.
        </p>

        <h2>What to do with what doesn't sell</h2>
        <p>
          Don't let leftovers turn back into moving-day boxes. Charities (Vinnies, Lifeline, Salvos) will
          take clean, working furniture and household goods — most offer pickup for larger items. Anything
          genuinely worn out or broken is a job for a{" "}
          <Link href="/services/rubbish-removal">same-day rubbish removal booking</Link>{" "}rather than
          letting it sit in the garage until moving week.
        </p>

        <p>
          A good garage sale pairs naturally with a broader declutter — see our{" "}
          <Link href="/blog/downsizing-checklist-decluttering-before-a-move">downsizing checklist</Link>{" "}
          for the room-by-room version. Once the house is lighter, {" "}
          <Link href="/#quote">get a fixed quote</Link>{" "}for what's actually moving.
        </p>
      </>
    ),
  },
  {
    slug: "removalist-insurance-explained",
    artIcon: "shield",
    title: "Removalist Insurance Explained: What's Actually Covered",
    metaTitle: "Removalist Insurance Explained — What's Covered vs Not",
    description:
      "What removalist insurance actually covers, what it typically excludes (like owner-packed boxes), and the questions to ask before you book.",
    excerpt:
      "\"Fully insured\" means different things at different companies. Here's what's usually covered, what's usually excluded, and what to ask.",
    keyword: "removalist insurance explained",
    category: "Guides",
    date: "2026-07-10",
    updated: "2026-07-10",
    readMins: 4,
    faqs: [
      {
        question: "What does removalist insurance actually cover?",
        answer:
          "Standard removalist transit cover protects items the removalist has packed and handled against damage or loss during the move itself — dropped furniture, transit damage, items lost in transit. It doesn't automatically cover pre-existing damage, or items you packed yourself in boxes the crew never opened.",
      },
      {
        question: "Are boxes I pack myself covered if something breaks?",
        answer:
          "Usually only partially. Most removalist insurance covers damage the crew directly causes to a box (dropping it, crushing it under something heavier), but not damage from how the contents were packed inside — a plate that broke because it wasn't wrapped isn't something the removalist can be responsible for.",
      },
      {
        question: "What's the difference between public liability and transit insurance?",
        answer:
          "Public liability covers damage to property (like a scratched wall or doorframe) during the move — it protects the house, not your belongings. Transit or goods-in-transit insurance covers your actual items. A legitimate removalist carries both; ask for confirmation of each separately.",
      },
    ],
    body: (
      <>
        <p>
          "Fully insured" gets printed on every removalist's website, but it means genuinely different
          things depending on the company. Here's what standard cover actually includes, what it usually
          excludes, and the exact questions worth asking before you book.
        </p>

        <h2>The two types of cover a legitimate removalist carries</h2>
        <table>
          <thead>
            <tr>
              <th>Type</th>
              <th>What it covers</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Public liability</td>
              <td>Damage to the property itself — scratched walls, damaged doorframes, broken stair rails</td>
            </tr>
            <tr>
              <td>Transit / goods-in-transit</td>
              <td>Damage or loss to your actual belongings while they're being moved and handled</td>
            </tr>
          </tbody>
        </table>
        <p>
          Both matter, and they're separate policies covering separate things — a removalist can genuinely
          be "insured" for one and not the other, so ask about both specifically rather than accepting
          "yes, we're insured" as a complete answer.
        </p>

        <h2>What's typically covered</h2>
        <ul>
          <li>Furniture and items the crew packs, wraps and handles directly</li>
          <li>Damage caused during loading, transit, or unloading</li>
          <li>Items lost in transit (rare, but covered under a genuine policy)</li>
        </ul>

        <h2>What's typically excluded (and why this catches people out)</h2>
        <ul>
          <li>
            <strong>Contents of boxes you packed yourself.</strong>{" "}If a plate breaks because it wasn't
            wrapped, that's a packing issue, not a transit issue — the removalist never saw inside the box.
          </li>
          <li>
            <strong>Pre-existing damage or wear.</strong>{" "}A scratch that was already there isn't a
            transit claim, which is why a lot of removalists photograph large furniture before loading.
          </li>
          <li>
            <strong>Particleboard/flat-pack furniture failure.</strong>{" "}Some policies exclude damage to
            cheaper flat-pack furniture that wasn't built to survive being moved at all, regardless of
            handling care.
          </li>
        </ul>

        <h2>Questions worth asking before you book</h2>
        <ol>
          <li>"Do you carry both public liability and transit insurance?"</li>
          <li>"Is my self-packed boxes' contents covered, or only the boxes themselves?"</li>
          <li>"What's the claims process if something's damaged on the day?"</li>
        </ol>
        <p>
          If a removalist can't answer these clearly and specifically, that's worth treating as a signal —
          our{" "}
          <Link href="/blog/what-does-a-removalist-quote-include">guide to what a proper quote includes</Link>{" "}
          covers the other things worth checking before you book.
        </p>

        <p>
          Every Residence Relocations booking includes transit and public liability cover as standard — no
          add-on, no asking. <Link href="/#quote">Get a fixed quote</Link>{" "}and it's built in from the
          start.
        </p>
      </>
    ),
  },
  {
    slug: "moving-with-kids-managing-the-chaos",
    artIcon: "person",
    title: "Moving With Kids: Keeping the Chaos Manageable",
    metaTitle: "Moving House With Kids — Practical Tips That Actually Help",
    description:
      "Practical ways to keep moving day manageable with kids in the house — from packing their room last to the first-night box that saves everyone's sanity.",
    excerpt:
      "Moving with kids in the house adds a layer most checklists ignore. Here's what actually helps on the day and the weeks around it.",
    keyword: "moving house with kids",
    category: "Guides",
    date: "2026-07-10",
    updated: "2026-07-10",
    readMins: 4,
    body: (
      <>
        <p>
          Moving with kids means running two logistics operations at once — the actual move, and keeping a
          small person's routine intact enough that they're not melting down on top of everything else.
          Here's what genuinely helps.
        </p>

        <h2>Pack their room last, unpack it first</h2>
        <p>
          A familiar bedroom, even in a new house, does more for a smooth transition than almost anything
          else. Keep their room as untouched as possible until the last day of packing, and make it the
          first room set up at the new place — bed made, toys out, familiar things visible before you
          touch another box.
        </p>

        <h2>Build a first-night box, separate from everything else</h2>
        <ul>
          <li>Pyjamas, a change of clothes, and their favourite comfort item</li>
          <li>Toothbrush, any medication, a familiar snack</li>
          <li>One or two favourite toys or books — not the whole toy box</li>
          <li>Chargers for anything they use to wind down at night</li>
        </ul>
        <p>
          Pack this last, keep it in the car (not the truck), and the first night in a new house stops
          being a search-through-forty-boxes exercise at 8pm.
        </p>

        <h2>Give them a job, age-appropriate to what they can handle</h2>
        <p>
          Kids old enough to help genuinely do better with some control over the process rather than
          having it happen around them. Let younger kids pack and decorate their own "special box," and
          older kids handle their own room — supervised, but genuinely theirs to manage. It turns moving
          from something happening to them into something they're part of.
        </p>

        <h2>Arrange supervision for moving day itself</h2>
        <p>
          Moving day is genuinely not a safe or manageable place for young kids to be underfoot — a truck
          reversing, a steady stream of heavy furniture through doorways, and stressed adults are not a
          combination that mixes well with a toddler. Where possible, arrange for a grandparent, friend or
          babysitter to take the kids for the core hours of loading and unloading, and reintroduce them to
          the new house once the heavy lifting is done.
        </p>

        <h2>Keep one routine constant through the chaos</h2>
        <p>
          Bath time, a bedtime story, whatever the anchor routine is — protecting it through moving week
          matters more than almost anything on a packing checklist. Kids read a maintained routine as "this
          is still normal" even when everything visually around them says otherwise.
        </p>

        <h2>Talk about it before it happens</h2>
        <p>
          A simple, honest explanation of what's happening and why — days ahead, not the morning of — gives
          kids time to process rather than being surprised. Letting them say goodbye to a room, a backyard,
          or a school if that's part of the move matters more than adults often expect.
        </p>

        <p>
          For the rest of the moving-day logistics, our{" "}
          <Link href="/blog/brisbane-to-gold-coast-moving-checklist">full moving checklist</Link>{" "}covers
          the week-by-week plan. When you're ready to book, {" "}
          <Link href="/#quote">get a fixed quote</Link>{" "}— fixed pricing means no surprises stacking on
          top of an already busy day.
        </p>
      </>
    ),
  },
  {
    slug: "renting-vs-buying-gold-coast",
    artIcon: "key",
    title: "Renting vs Buying on the Gold Coast: What Actually Makes Sense",
    metaTitle: "Renting vs Buying on the Gold Coast — 2026 Guide",
    description:
      "Thinking about a move to the Gold Coast? Here's an honest look at renting vs buying — the real costs, the suburbs where each makes more sense, and questions to answer before deciding.",
    excerpt:
      "Moving to the Gold Coast doesn't mean you have to buy straight away. Here's how to actually decide between renting and buying.",
    keyword: "renting vs buying gold coast",
    category: "Guides",
    date: "2026-07-11",
    updated: "2026-07-11",
    readMins: 5,
    faqs: [
      {
        question: "Is it better to rent or buy on the Gold Coast?",
        answer:
          "It depends on how long you're planning to stay and how certain you are about which suburb suits you. Renting for 6–12 months first lets you learn the area — traffic patterns, flood zones, noise, commute reality — before committing to a purchase in the wrong pocket of the coast.",
      },
      {
        question: "How long should I rent before buying on the Gold Coast?",
        answer:
          "Six to twelve months is common for people relocating from Brisbane or interstate — long enough to experience a full season (including a wet-season test of drainage and flood-prone streets) before locking in a suburb with a purchase.",
      },
    ],
    body: (
      <>
        <p>
          If you're relocating to the Gold Coast rather than having grown up here, the honest answer is:
          you don't have to decide between renting and buying before you move — and rushing that decision
          is one of the more expensive mistakes new arrivals make.
        </p>

        <h2>The case for renting first</h2>
        <ul>
          <li>
            <strong>You learn the area properly.</strong>{" "}Suburbs that look great on a real estate
            listing can be a nightmare commute at 7:45am, or backed onto a flood-prone canal that only
            shows up in a wet-season downpour.
          </li>
          <li>
            <strong>Flexibility while you settle work and school.</strong>{" "}A 6–12 month lease gives room
            to change your mind about which side of the M1 actually suits your commute once you're living
            it, not just mapping it.
          </li>
          <li>
            <strong>No stamp duty, no settlement risk.</strong>{" "}Renting means no six-figure decision made
            under time pressure from a competitive market.
          </li>
        </ul>

        <h2>The case for buying sooner</h2>
        <ul>
          <li>
            <strong>You already know the area.</strong>{" "}If you've holidayed on the coast for years or
            have family here, the "learn the suburb" argument carries less weight.
          </li>
          <li>
            <strong>Market timing and certainty.</strong>{" "}In a rising market, waiting a year to "be sure"
            can cost more in price growth than a year of rent would have.
          </li>
          <li>
            <strong>You're not planning to move again soon.</strong>{" "}Buying makes more sense the longer
            you're certain you'll stay put — the transaction costs of buying and selling within 2–3 years
            rarely pay off.
          </li>
        </ul>

        <h2>Questions worth answering before you decide</h2>
        <ol>
          <li>How certain are you about which suburb — beachside, hinterland, or somewhere between?</li>
          <li>Have you experienced the area in both dry season and wet season?</li>
          <li>Is your work situation (WFH, office days, school zones) settled enough to commit to a location?</li>
          <li>Would a bad suburb choice cost more to undo by renting again, or by selling and rebuying?</li>
        </ol>

        <h2>Whichever you choose, the move itself works the same way</h2>
        <p>
          Renting or buying, the actual move from Brisbane is identical logistically — same corridor, same
          truck, same fixed-price model. Our{" "}
          <Link href="/blog/moving-to-the-gold-coast-from-brisbane-suburb-guide">
            suburb-by-suburb Gold Coast guide
          </Link>{" "}is a good next read if you're still narrowing down where. When you're ready,{" "}
          <Link href="/#quote">get a fixed quote</Link>{" "}for the{" "}
          <Link href="/removalists-brisbane-to-gold-coast">Brisbane to Gold Coast corridor</Link>.
        </p>
      </>
    ),
  },
  {
    slug: "best-worst-streets-for-a-moving-truck-brisbane",
    artIcon: "road",
    title: "A Guide to Brisbane's Best (and Worst) Streets for a Moving Truck",
    metaTitle: "Brisbane's Best & Worst Streets for a Moving Truck",
    description:
      "Which Brisbane streets make moving day easy, and which ones turn it into a puzzle — steep Queenslander driveways, narrow inner-city lanes, and the access issues worth planning around.",
    excerpt:
      "Some Brisbane streets are a moving day dream. Others turn a simple job into a three-point-turn puzzle. Here's what actually causes the trouble.",
    keyword: "brisbane streets moving truck access",
    category: "Guides",
    date: "2026-07-11",
    updated: "2026-07-11",
    readMins: 4,
    body: (
      <>
        <p>
          Every Brisbane removalist has a mental list of streets that make a job easy and streets that make
          a crew's heart sink a little on the drive over. It's rarely about distance — it's about access.
          Here's what actually causes the trouble, suburb by suburb.
        </p>

        <h2>What actually makes a street hard to move on</h2>
        <ul>
          <li>
            <strong>Steep, narrow driveways.</strong>{" "}Classic Queenslander blocks in suburbs like
            Paddington and Red Hill often have driveways cut into a hillside — fine for a car, tight for a
            truck with a wide turning circle.
          </li>
          <li>
            <strong>No truck parking directly out front.</strong>{" "}Inner-city terrace streets (parts of
            New Farm, West End) sometimes mean parking half a block away and carrying everything further
            than the quote assumed.
          </li>
          <li>
            <strong>Council permit zones.</strong>{" "}Some inner-city streets require a temporary parking
            permit for a truck over a certain size — worth checking with your local council if you're on a
            permit-zoned street.
          </li>
          <li>
            <strong>Body corporate loading dock booking windows.</strong>{" "}High-rise apartment streets on
            the river (New Farm, Kangaroo Point, South Bank) often require the building's loading dock
            booked in a specific time slot — turn up outside it and you're waiting, not moving.
          </li>
        </ul>

        <h2>Suburbs that are genuinely easy</h2>
        <p>
          Newer suburbs with wide, straight streets and double garages — much of the outer south and
          western corridors, and newer Gold Coast estates — are about as simple as moving day gets. Wide
          driveways, easy truck parking, no permits, no steep pitches.
        </p>

        <h2>Suburbs where it pays to plan ahead</h2>
        <table>
          <thead>
            <tr>
              <th>Suburb type</th>
              <th>What to plan for</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Hillside Queenslander streets (Paddington, Red Hill, Bardon)</td>
              <td>Steep driveways, narrow street width — confirm truck access when booking</td>
            </tr>
            <tr>
              <td>Inner-city terrace streets (parts of New Farm, West End)</td>
              <td>Limited direct parking — factor in a longer carry distance</td>
            </tr>
            <tr>
              <td>High-rise apartment blocks (Kangaroo Point, South Bank)</td>
              <td>Loading dock booking window — book this before moving day, not on it</td>
            </tr>
            <tr>
              <td>Permit-zoned inner-city streets</td>
              <td>Check with council for a temporary truck parking permit if required</td>
            </tr>
          </tbody>
        </table>

        <h2>The fix is always the same: tell us before moving day</h2>
        <p>
          None of these are actually problems — they're just things a crew plans for when they know about
          them ahead of time. A quick note about stairs, steep driveways, or a loading dock booking window
          when you book means the right size truck and the right crew turn up, instead of discovering it on
          the day.
        </p>

        <p>
          Moving from one of Brisbane's trickier streets, or just want a fixed price regardless?{" "}
          <Link href="/#quote">Get a fixed quote</Link>{" "}and mention any access quirks — we plan around
          them, not around surprises.
        </p>
      </>
    ),
  },
  {
    slug: "how-much-notice-do-removalists-need",
    artIcon: "calendar",
    title: "How Much Notice Do Removalists Actually Need?",
    metaTitle: "How Much Notice Do Removalists Need? — Booking Timeline Guide",
    description:
      "The honest answer on how far ahead to book a removalist — by season, by home size, and what actually happens if you leave it later than ideal.",
    excerpt:
      "Booking early gets you the best date and price. Here's exactly how much notice actually matters, and when.",
    keyword: "how much notice do removalists need",
    category: "Guides",
    date: "2026-07-11",
    updated: "2026-07-11",
    readMins: 4,
    faqs: [
      {
        question: "How far in advance should I book a removalist?",
        answer:
          "2–4 weeks ahead is comfortable for most moves. During peak periods (school holidays, end/start of month, summer) 4–6 weeks gives you the best choice of dates. Less notice is often still workable — see our last-minute removalists guide — but your preferred date and time slot narrows the closer you get.",
      },
      {
        question: "What's the busiest time of year to book a removalist in Brisbane and the Gold Coast?",
        answer:
          "The end and start of each month are consistently busiest (lease turnover dates), with December–February the busiest season overall due to school holidays and warmer weather. Booking 4–6 weeks ahead during these windows is worth the extra planning.",
      },
    ],
    body: (
      <>
        <p>
          The honest answer: 2–4 weeks ahead is comfortable for most moves, and 4–6 weeks is worth aiming
          for if you're moving during a busy period. Here's how that breaks down and what actually happens
          if you're booking later than that.
        </p>

        <h2>The general rule, by timing</h2>
        <table>
          <thead>
            <tr>
              <th>Notice given</th>
              <th>What to expect</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>4–6 weeks</td>
              <td>Full choice of date and time slot, best rate visibility, no rush</td>
            </tr>
            <tr>
              <td>2–4 weeks</td>
              <td>Comfortable for most moves — good availability outside peak periods</td>
            </tr>
            <tr>
              <td>1–2 weeks</td>
              <td>Still workable most of the year — fewer time-slot options</td>
            </tr>
            <tr>
              <td>Under a week</td>
              <td>
                Often possible — see our{" "}
                <Link href="/blog/last-minute-removalists-brisbane">last-minute removalists guide</Link>
              </td>
            </tr>
          </tbody>
        </table>

        <h2>What actually makes a date "busy"</h2>
        <ul>
          <li>
            <strong>End and start of each month.</strong>{" "}Most leases turn over on the 1st, so the last
            weekend of the month and the first few days of the next are consistently the busiest across
            every removalist in Brisbane and the Gold Coast.
          </li>
          <li>
            <strong>School holidays.</strong>{" "}Families time moves around the school calendar wherever
            possible, tightening availability in those windows.
          </li>
          <li>
            <strong>Summer (December–February).</strong>{" "}The busiest season overall — better weather,
            school holidays, and end-of-year lease timing all stack up together.
          </li>
        </ul>

        <h2>If you can be flexible, use it</h2>
        <p>
          A mid-week move, or a date away from the 1st of the month, is consistently easier to book and
          often better priced — the demand simply isn't stacked on those days the way it is on a Saturday
          at month's end.
        </p>

        <h2>Booking early vs booking exactly right</h2>
        <p>
          Booking early doesn't just secure a date — it means the crew size and truck are matched properly
          to your job from the start, rather than adjusted last-minute. That said, if your notice is
          shorter than ideal, don't assume it's impossible — call and ask.{" "}
          <Link href="/#quote">Get a fixed quote</Link>{" "}either way and we'll tell you straight if your
          date's tight rather than leaving you guessing.
        </p>
      </>
    ),
  },
  {
    slug: "office-fit-out-waste-guide",
    artIcon: "trash",
    title: "Office Fit-Out Waste: What Counts as Rubbish vs What to Donate",
    metaTitle: "Office Fit-Out Waste Removal — What to Bin, Donate or Recycle",
    description:
      "Clearing an office fit-out or relocation? Here's what's genuinely rubbish, what's worth donating, and how to handle e-waste and furniture responsibly.",
    excerpt:
      "An office clear-out generates more usable furniture than most businesses realise. Here's what to bin, what to donate, and what needs special handling.",
    keyword: "office fit out waste removal",
    category: "Guides",
    date: "2026-07-11",
    updated: "2026-07-11",
    readMins: 4,
    body: (
      <>
        <p>
          An office fit-out or relocation generates a genuinely large amount of waste fast — but a
          surprising amount of it isn't rubbish at all. Here's how to sort it properly instead of sending
          everything to landfill by default.
        </p>

        <h2>What's genuinely rubbish</h2>
        <ul>
          <li>Damaged or broken furniture beyond reasonable repair</li>
          <li>Worn carpet tiles, old partition panels, outdated signage</li>
          <li>Obsolete cabling, damaged fixtures, general fit-out demolition debris</li>
        </ul>

        <h2>What's worth donating instead</h2>
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Where it can go</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Desks, chairs, filing cabinets in good condition</td>
              <td>Charities, community organisations, or resale via office furniture recyclers</td>
            </tr>
            <tr>
              <td>Working monitors, keyboards, small electronics</td>
              <td>School programs, community groups, or certified e-waste recyclers</td>
            </tr>
            <tr>
              <td>Meeting room furniture, soft seating</td>
              <td>Charities and startups often take good-condition furniture directly</td>
            </tr>
          </tbody>
        </table>

        <h2>What needs special handling, not the general skip</h2>
        <ul>
          <li>
            <strong>E-waste.</strong>{" "}Monitors, computers, and anything with a battery shouldn't go to
            general landfill — e-waste recycling is widely available and often free for businesses.
          </li>
          <li>
            <strong>Fluorescent tubes and old lighting.</strong>{" "}Contains materials that need proper
            disposal, not a general waste bin.
          </li>
          <li>
            <strong>Confidential documents.</strong>{" "}Should be shredded or securely destroyed before
            disposal, separate from the general clear-out.
          </li>
        </ul>

        <h2>Why sorting matters beyond doing the right thing</h2>
        <p>
          Donating usable furniture and separating e-waste genuinely reduces what you're paying to send to
          landfill — most rubbish removal pricing scales with volume, so anything diverted to donation or
          recycling is volume you're not paying disposal rates on.
        </p>

        <p>
          Clearing an office for a relocation or fit-out? Our{" "}
          <Link href="/services/rubbish-removal">rubbish removal service</Link>{" "}sorts materials for
          recycling where possible, and pairs naturally with an{" "}
          <Link href="/services/office-relocations">office relocation booking</Link>{" "}if you're moving to
          a new space at the same time. <Link href="/#quote">Get a fixed quote</Link>{" "}for either.
        </p>
      </>
    ),
  },
  {
    slug: "how-to-choose-the-right-size-moving-truck",
    artIcon: "truck",
    title: "How to Choose the Right Size Moving Truck",
    metaTitle: "What Size Moving Truck Do I Need? — By Home Size",
    description:
      "Ute, van, 4-tonne or 8-tonne — the right truck size for your move, matched to home size, so you're not paying for empty space or squeezing in a second trip.",
    excerpt:
      "Get the truck size wrong and you're either paying for empty space or making a second trip. Here's how to match it to your home.",
    keyword: "what size moving truck do i need",
    category: "Guides",
    date: "2026-07-12",
    updated: "2026-07-12",
    readMins: 4,
    faqs: [
      {
        question: "What size truck do I need for a 3 bedroom house?",
        answer:
          "A standard 3-bedroom home typically needs an 8-tonne furniture van — enough for a full lounge suite, bedroom furniture for 2–3 rooms, kitchen boxes, and a washing machine or fridge, with room to spare for awkward items.",
      },
      {
        question: "Is it better to get a bigger truck than I need?",
        answer:
          "Generally yes, within reason — a truck with some spare room means no second trip if you've underestimated, and loading is easier with a bit of breathing space. The real cost of going too small is a second trip, which almost always costs more than the next size up.",
      },
    ],
    body: (
      <>
        <p>
          Get the truck size wrong in either direction and it costs you — too small
          means a second trip, too big means paying for space you didn't use.
          Here's how truck size actually maps to home size.
        </p>

        <h2>Truck size by home size</h2>
        <table>
          <thead>
            <tr>
              <th>Home size</th>
              <th>Typical truck</th>
              <th>What it fits</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Studio / 1 bedroom</td>
              <td>Ute or small van</td>
              <td>Bed, small furniture, boxes — occasionally a second small trip</td>
            </tr>
            <tr>
              <td>2 bedroom apartment</td>
              <td>4-tonne van</td>
              <td>Full bedroom set, lounge, dining, kitchen boxes</td>
            </tr>
            <tr>
              <td>3 bedroom house</td>
              <td>8-tonne furniture van</td>
              <td>Full home contents, 2–3 bedrooms, appliances, some spare room</td>
            </tr>
            <tr>
              <td>4+ bedroom house</td>
              <td>8-tonne+, sometimes two trucks</td>
              <td>Full family home, multiple large items, garage/shed contents</td>
            </tr>
          </tbody>
        </table>

        <h2>When in doubt, go bigger</h2>
        <p>
          A truck with spare room costs you nothing extra to load — you just don't
          fill it completely. A truck that's too small costs you a second trip,
          which almost always works out more expensive than booking the next size
          up in the first place. If your move sits right on the line between two
          sizes, the bigger truck is the safer call.
        </p>

        <h2>What actually changes the answer</h2>
        <ul>
          <li>
            <strong>Garage and shed contents.</strong>{" "}These get forgotten in truck-size estimates
            more than anything else — tools, bikes, garden equipment add up fast.
          </li>
          <li>
            <strong>Large single items.</strong>{" "}A pool table, piano, or spa doesn't just add weight, it
            takes up dead space around it that can't be packed efficiently.
          </li>
          <li>
            <strong>How much you're taking vs starting fresh.</strong>{" "}A downsized load (see our{" "}
            <Link href="/blog/downsizing-checklist-decluttering-before-a-move">downsizing checklist</Link>)
            genuinely needs a smaller truck than a full household move.
          </li>
        </ul>

        <h2>Why this is one less thing to worry about with us</h2>
        <p>
          This is exactly the calculation we make behind every quote — you tell us your home size, not
          your truck size, and we bring the right vehicle and crew for the job. No under-quoting that
          turns into a surprise second trip, no oversized truck you're paying to drive around empty.{" "}
          <Link href="/#quote">Get a fixed quote</Link>{" "}based on your home size and we handle the rest.
        </p>
      </>
    ),
  },
  {
    slug: "moving-sustainably-cutting-landfill-waste",
    artIcon: "leaf",
    title: "Moving Sustainably: Cutting Landfill Waste From Your Move",
    metaTitle: "How to Move Sustainably — Reduce Moving Waste",
    description:
      "A house move generates more landfill waste than most people realise. Here's how to cut it down — reusing boxes, donating before bin day, and choosing a removalist that sorts materials properly.",
    excerpt:
      "Moving house generates a surprising amount of landfill waste. Here's how to cut it down without adding stress to an already busy week.",
    keyword: "how to move sustainably",
    category: "Guides",
    date: "2026-07-12",
    updated: "2026-07-12",
    readMins: 4,
    body: (
      <>
        <p>
          A house move generates more landfill waste than most people expect — packing materials, broken
          furniture, and everything decluttered along the way. None of it needs to end up in a skip bin by
          default. Here's how to cut it down without adding extra stress to an already busy week.
        </p>

        <h2>Source boxes before you buy them</h2>
        <ul>
          <li>
            <strong>Ask local shops for their leftover boxes.</strong>{" "}Bottle shops and supermarkets
            often have sturdy boxes headed for recycling anyway — free, and one less thing bought new.
          </li>
          <li>
            <strong>Check community buy-swap-sell groups.</strong>{" "}Someone who just moved almost always
            has a stack of good boxes they don't need anymore.
          </li>
          <li>
            <strong>Reusable plastic crates are worth it for a bigger move.</strong>{" "}Several rental
            services deliver and collect them — no cardboard waste at all, and they stack better than boxes.
          </li>
        </ul>

        <h2>Donate before you bin</h2>
        <p>
          A genuine amount of what gets thrown out during a move is still perfectly usable — furniture,
          kitchenware, kids' toys, clothes. Our{" "}
          <Link href="/blog/garage-sale-guide-before-you-move">garage sale guide</Link>{" "}and{" "}
          <Link href="/blog/downsizing-checklist-decluttering-before-a-move">downsizing checklist</Link>{" "}
          both cover this in more detail, but the short version: charities take more than most people
          assume, and most offer pickup for anything too large to drop off.
        </p>

        <h2>Recycle packing materials properly</h2>
        <ul>
          <li>Cardboard boxes — flatten and recycle, or better, pass them on to the next person moving</li>
          <li>Bubble wrap and plastic — check if your council recycling accepts soft plastics separately</li>
          <li>Packing paper — genuinely recyclable, no need to bin it with general waste</li>
        </ul>

        <h2>Choose a removalist that sorts waste, not just dumps it</h2>
        <p>
          If part of your move includes clearing out furniture or old items, ask whether the removalist
          sorts materials for recycling or donation before landfill, rather than sending everything straight
          to the tip. It's a fair question to ask any quote — see our{" "}
          <Link href="/services/rubbish-removal">rubbish removal service</Link>{" "}for how we handle it.
        </p>

        <h2>The net effect</h2>
        <p>
          None of this adds real time to a move — sourcing free boxes takes one phone call, donating takes
          one drop-off or pickup booking, and choosing a removalist that sorts materials costs nothing
          extra. It just means less of your move ends up in landfill by default.{" "}
          <Link href="/#quote">Get a fixed quote</Link>{" "}for your move or clear-out, and mention if
          sorting/donation matters to you — we build it into the job either way.
        </p>
      </>
    ),
  },
  {
    slug: "removalist-etiquette-tipping-and-what-to-expect",
    artIcon: "hand",
    title: "Removalist Etiquette: Tipping, Tea and What's Actually Expected",
    metaTitle: "Do You Tip Removalists in Australia? — Etiquette Guide",
    description:
      "Is tipping expected for removalists in Australia? The honest answer, plus the other on-the-day etiquette that actually matters — from access to a cup of tea.",
    excerpt:
      "Is tipping expected for removalists in Australia? Here's the honest answer, and the etiquette that actually matters more.",
    keyword: "do you tip removalists in australia",
    category: "Guides",
    date: "2026-07-12",
    updated: "2026-07-12",
    readMins: 3,
    faqs: [
      {
        question: "Is tipping expected for removalists in Australia?",
        answer:
          "No — tipping isn't a standard expectation in Australia the way it can be in the US. It's genuinely optional and appreciated for exceptional service, but a crew won't expect it and won't think less of you for not tipping.",
      },
      {
        question: "How much should I tip removalists if I want to?",
        answer:
          "There's no fixed rule, but $20–$50 per crew member for a job that went particularly well is a common range if you choose to tip. Splitting it evenly among the crew, handed to the team lead, is the simplest approach.",
      },
    ],
    body: (
      <>
        <p>
          No — tipping isn't a standard expectation for removalists in Australia, unlike in the US. It's
          genuinely optional. That said, there's real etiquette that matters more than a tip on moving day,
          and it's worth knowing.
        </p>

        <h2>Is tipping expected?</h2>
        <p>
          Not as a rule. Removalist pricing in Australia is built around the job, not a tip-supplemented
          wage — a crew turns up expecting to be paid what was quoted, nothing more. A tip for genuinely
          exceptional service (careful with something fragile, handled a tricky staircase well, finished
          faster than expected) is always appreciated, never expected.
        </p>

        <h2>The genuinely Australian custom: offer a cup of tea</h2>
        <p>
          More than tipping, offering the crew tea, coffee or cold water on a hot day is the actual local
          custom — small, genuinely appreciated, and costs nothing. A moving day is physical work over
          several hours; a drink offered partway through goes a long way.
        </p>

        <h2>Other etiquette that actually matters</h2>
        <ul>
          <li>
            <strong>Clear the path before the crew arrives.</strong>{" "}Hallways and driveways free of
            obstacles means the job starts moving items, not moving things out of the way first.
          </li>
          <li>
            <strong>Be present (or reachable) at the start.</strong>{" "}Someone needs to point out what's
            moving vs staying, and flag anything fragile or special before boxes start loading.
          </li>
          <li>
            <strong>Flag access issues ahead of time, not on the day.</strong>{" "}Steep driveways, narrow
            gates or a loading dock booking window — mentioned when you book, not discovered by the crew
            when they arrive.
          </li>
          <li>
            <strong>Keep kids and pets managed elsewhere.</strong>{" "}Not about manners so much as safety —
            see our{" "}
            <Link href="/blog/moving-with-kids-managing-the-chaos">moving with kids guide</Link>{" "}for
            more on this.
          </li>
        </ul>

        <h2>If you do want to tip</h2>
        <p>
          There's no fixed rule, but $20–$50 per crew member for a job that went particularly well is a
          common range. Handing it to the team lead to split is simpler than trying to give it to each
          person individually.
        </p>

        <p>
          None of this is required to get a great result — it's just what makes a moving day genuinely
          smooth for everyone involved. <Link href="/#quote">Get a fixed quote</Link>{" "}and we'll handle
          the rest professionally either way.
        </p>
      </>
    ),
  },
  {
    slug: "storm-season-moving-brisbane-wet-weather",
    artIcon: "cloud",
    title: "Storm Season and Your Move: Planning Around Brisbane's Wet Season",
    metaTitle: "Moving House in Brisbane's Wet Season — What to Know",
    description:
      "Storm season doesn't have to delay your move. Here's how Brisbane and Gold Coast removalists plan around wet weather, and what to do to protect your belongings.",
    excerpt:
      "Storm season doesn't have to derail moving day. Here's how it's actually handled, and how to protect your things either way.",
    keyword: "moving house wet season brisbane",
    category: "Guides",
    date: "2026-07-12",
    updated: "2026-07-12",
    readMins: 4,
    faqs: [
      {
        question: "Can you move house in the rain in Brisbane?",
        answer:
          "Yes — a professional crew moves in the rain regularly during SEQ's November–April storm season. Furniture gets wrapped and protected regardless of weather, and trucks are loaded to keep boxes dry. Only genuinely severe weather (storm warnings, dangerous conditions) would delay a booking.",
      },
      {
        question: "What's Brisbane's storm season and does it affect moving bookings?",
        answer:
          "Storm season runs roughly November to April, with the heaviest rain typically January–March. It doesn't reduce booking availability — it's simply planned around with extra protective wrapping and a flexible eye on the forecast for the day itself.",
      },
    ],
    body: (
      <>
        <p>
          Storm season in South-East Queensland runs roughly November to April — and no, it doesn't mean
          you should delay a move. It means planning around wet weather properly, which is a routine part
          of moving in this climate, not a reason to reschedule.
        </p>

        <h2>What actually changes when it's wet</h2>
        <ul>
          <li>
            <strong>Extra plastic wrapping on upholstery and mattresses.</strong>{" "}Standard practice
            during storm season regardless of the forecast that morning — better protected than not.
          </li>
          <li>
            <strong>Walkways get covered or timed carefully.</strong>{" "}Tarps over the path between house
            and truck when rain is genuinely falling during the load.
          </li>
          <li>
            <strong>Boxes get loaded to stay dry, not just stacked efficiently.</strong>{" "}Priority goes to
            keeping anything cardboard away from open truck edges.
          </li>
        </ul>

        <h2>What to do on your end</h2>
        <ol>
          <li>
            <strong>Check your street for flood risk.</strong>{" "}Some streets genuinely flood in heavy
            downpours — worth knowing ahead of time if you're on one (see our{" "}
            <Link href="/blog/best-worst-streets-for-a-moving-truck-brisbane">
              guide to Brisbane's trickier streets
            </Link>{" "}for access-related issues generally).
          </li>
          <li>
            <strong>Have a dry entry point ready.</strong>{" "}A garage, carport or covered porch to move
            boxes through rather than straight into open weather.
          </li>
          <li>
            <strong>Keep valuables and electronics in your own car, not the truck.</strong>{" "}Simple
            insurance against any weather-related risk, storm season or not.
          </li>
        </ol>

        <h2>When would a booking actually be affected?</h2>
        <p>
          Genuinely severe weather — an active storm warning, dangerous wind, or flooding that makes roads
          impassable — is the only thing that would move a booking, and that's a safety call, not a
          convenience one. Regular rain, even heavy rain, is planned around as routine.
        </p>

        <h2>Timing your move around the season</h2>
        <p>
          If you have flexibility, our{" "}
          <Link href="/blog/best-time-to-move-house-brisbane-gold-coast">best time to move guide</Link>{" "}
          covers month-by-month timing in more detail. But if storm season lines up with when you actually
          need to move, don't let it hold you back — it's genuinely business as usual for a crew that
          moves in this climate every week of the year.{" "}
          <Link href="/#quote">Get a fixed quote</Link>{" "}regardless of the forecast.
        </p>
      </>
    ),
  },
  {
    slug: "moving-a-home-office-or-gym-setup",
    artIcon: "monitor",
    title: "Moving a Home Office or Home Gym Setup",
    metaTitle: "Moving Home Office & Home Gym Equipment — What to Know",
    description:
      "Desks, monitors, and home gym equipment need different handling to standard furniture. Here's how to pack and move them without damage or a chiropractor visit.",
    excerpt:
      "Home offices and home gyms need different handling to standard furniture. Here's how to move both without damage.",
    keyword: "moving home office equipment",
    category: "Guides",
    date: "2026-07-12",
    updated: "2026-07-12",
    readMins: 4,
    body: (
      <>
        <p>
          Home offices and home gyms have both become standard parts of the modern house move — and both
          need handling that's genuinely different to a normal lounge room. Here's what actually matters
          for each.
        </p>

        <h2>Moving a home office</h2>
        <ul>
          <li>
            <strong>Label cables before disconnecting anything.</strong>{" "}A phone photo of the setup plus
            masking tape labels on each cable saves a genuinely frustrating reassembly puzzle later.
          </li>
          <li>
            <strong>Monitors travel upright, in their original box if you kept it.</strong>{" "}No original
            box, no problem — bubble wrap around the screen and a snug fit in a box sized correctly (see
            our{" "}
            <Link href="/blog/how-to-pack-boxes-properly">box-size guide</Link>{" "}for matching box to
            item).
          </li>
          <li>
            <strong>Small components go in one clearly labelled box.</strong>{" "}Chargers, mice, cables,
            adapters — scattered across three boxes is how half of them go missing.
          </li>
          <li>
            <strong>Ergonomic chairs need padding at the base and armrests.</strong>{" "}The mechanisms
            underneath are more fragile than they look.
          </li>
        </ul>

        <h2>Moving a home gym</h2>
        <ul>
          <li>
            <strong>Weight plates are dense — small box rule applies.</strong>{" "}A "small" amount of
            weight plates is genuinely heavy; box them the same way you'd box books, not linen.
          </li>
          <li>
            <strong>Dismantle large equipment where possible.</strong>{" "}Racks, benches and larger machines
            usually break down into flat-packable pieces — check the original assembly instructions if you
            still have them.
          </li>
          <li>
            <strong>Protect upholstered benches like furniture, not gym gear.</strong>{" "}Blanket-wrapped the
            same way a sofa would be — see our{" "}
            <Link href="/blog/how-to-wrap-furniture-properly">guide to wrapping furniture properly</Link>.
          </li>
          <li>
            <strong>Heavy equipment needs a genuine weight estimate given to your removalist.</strong>{" "}
            A loaded barbell rack or a treadmill is a two-person lift minimum — flag it ahead of time.
          </li>
        </ul>

        <h2>Why this is worth mentioning when you book</h2>
        <p>
          A home office setup and a home gym both change what a crew needs to bring — extra care for
          electronics, extra hands for genuinely heavy equipment. Mentioning either when you book means the
          right crew size and the right protective gear turn up, instead of being figured out on the day.
        </p>

        <p>
          Setting up a home office as part of a business move too? Our{" "}
          <Link href="/services/office-relocations">office relocations service</Link>{" "}covers exactly
          this. <Link href="/#quote">Get a fixed quote</Link>{" "}and mention what you're bringing.
        </p>
      </>
    ),
  },
  {
    slug: "strata-body-corporate-move-in-rules-gold-coast",
    artIcon: "shield",
    title: "Strata & Body Corporate Move-In Rules on the Gold Coast",
    metaTitle: "Gold Coast Apartment Move-In Rules — Strata & Body Corporate",
    description:
      "Gold Coast high-rises almost always have move-in requirements — lift bookings, certificates of currency, and move-in fees. Here's what to sort out before moving day.",
    excerpt:
      "Most Gold Coast apartment buildings have move-in rules that catch new residents off guard. Here's what to sort out ahead of time.",
    keyword: "gold coast apartment move in rules body corporate",
    category: "Guides",
    date: "2026-07-12",
    updated: "2026-07-12",
    readMins: 4,
    faqs: [
      {
        question: "Do Gold Coast apartments require a certificate of currency for movers?",
        answer:
          "Many strata-managed buildings do — a certificate of currency (COI) is proof of your removalist's insurance, and body corporate management typically wants it submitted a few days before moving day, not on the day itself.",
      },
      {
        question: "How far ahead should I book a lift for moving in a Gold Coast high-rise?",
        answer:
          "1–2 weeks ahead is typical for booking a building's lift or loading dock time slot, separate from booking your removalist. Popular buildings and weekend slots fill up faster, so earlier is safer if you have a fixed move date.",
      },
    ],
    body: (
      <>
        <p>
          Most Gold Coast high-rises have move-in requirements that catch new residents off guard — not
          because they're complicated, just because nobody mentions them until moving week. Here's what to
          sort out ahead of time.
        </p>

        <h2>The certificate of currency (COI)</h2>
        <p>
          Many strata-managed buildings require proof of your removalist's insurance before they'll allow
          the lift or loading dock to be used — this is the certificate of currency. It's a standard
          document any legitimate removalist can provide (see our{" "}
          <Link href="/blog/removalist-insurance-explained">insurance explained guide</Link>{" "}for what
          that cover actually includes), but building management usually wants it submitted a few days
          ahead, not handed over on the day.
        </p>

        <h2>Booking the lift or loading dock</h2>
        <table>
          <thead>
            <tr>
              <th>Step</th>
              <th>Typical timing</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Book removalist</td>
              <td>2–4 weeks ahead (see our notice guide)</td>
            </tr>
            <tr>
              <td>Submit COI to building management</td>
              <td>3–5 business days before move</td>
            </tr>
            <tr>
              <td>Book lift/loading dock time slot</td>
              <td>1–2 weeks ahead — popular buildings fill up faster</td>
            </tr>
          </tbody>
        </table>

        <h2>Move-in fees and bonds</h2>
        <p>
          Many buildings charge a move-in fee, and some hold a refundable bond against damage to common
          areas (lifts, corridors, walls) during the move. Check with your building manager or the
          property listing — these vary a lot between buildings and aren't something a removalist can tell
          you, since it's set by each individual strata scheme.
        </p>

        <h2>What happens if you skip this</h2>
        <p>
          Turning up without a booked lift slot or a submitted COI is the single most common cause of
          delays on Gold Coast apartment moves — not because the move itself is hard, but because building
          security won't release the lift without the paperwork sorted. A quick call to building management
          when you get your move date locked in avoids this entirely.
        </p>

        <p>
          Moving into (or out of) a Gold Coast apartment? Our{" "}
          <Link href="/blog/apartment-moving-checklist-brisbane-gold-coast">apartment moving checklist</Link>{" "}
          covers the rest of the logistics, and{" "}
          <Link href="/#quote">a fixed quote</Link>{" "}includes providing your COI as standard, no extra
          admin on your end.
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
