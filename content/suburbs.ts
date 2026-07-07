export type Suburb = {
  slug: string;
  name: string;
  region: "Brisbane" | "Gold Coast";
  intro: string;
  housing: string;
  access: string;
  popularRoutes: { to: string; note: string }[];
  nearby: string[];
  faqs: { question: string; answer: string }[];
};

export const SUBURBS: Suburb[] = [
  {
    slug: "new-farm",
    name: "New Farm",
    region: "Brisbane",
    intro:
      "New Farm moves are a daily routine for our crews — from Moray Street apartments to the grand old homes off Brunswick Street. It's also the single most common starting point for our Brisbane to Gold Coast corridor runs.",
    housing:
      "A mix of prewar Queenslanders, art deco walk-up flats and modern riverside apartments. The older flats often mean narrow internal stairs and no lift; the newer towers on the river need lift bookings and dock access via Lamington Street.",
    access:
      "Street parking is tight and many streets are permit-zoned — we schedule early-morning loads and use council permits for truck parking where needed. Powerhouse-side streets have low-hanging fig branches; we bring the low-clearance truck when your street needs it.",
    popularRoutes: [
      { to: "Broadbeach", note: "the classic river-to-beach corridor move" },
      { to: "Burleigh Heads", note: "young professionals chasing the surf" },
      { to: "Teneriffe", note: "next-door upsizing into warehouse conversions" },
    ],
    nearby: ["Teneriffe", "Fortitude Valley", "Newstead"],
    faqs: [
      {
        question: "Can you move me out of a New Farm walk-up flat with no lift?",
        answer:
          "Yes — the art deco flats around Moray and Sydney Street are a weekly job for us. We size the crew for the stairs, protect the common-area walls, and carry compact trolleys that handle the tight landings.",
      },
      {
        question: "Is parking a problem for the truck in New Farm?",
        answer:
          "It can be, which is why we plan it rather than wing it. For permit streets we arrange a council truck permit or schedule an early slot before parking fills; for apartment towers we book the dock through your building manager.",
      },
    ],
  },
  {
    slug: "paddington",
    name: "Paddington",
    region: "Brisbane",
    intro:
      "Paddington's character homes are beautiful to live in and genuinely tricky to move out of — steep blocks, stumps, and stairs that turn twice before the front door. That's exactly the kind of move we plan for.",
    housing:
      "Classic tin-and-timber Queenslanders on stumps, many renovated with lower-level extensions. Furniture often has to come down external stairs or across sloped yards; large pieces sometimes leave over the veranda rail with lifting straps.",
    access:
      "Latrobe and Given Terrace side streets are steep and narrow — we position the truck at the best gradient point and ferry with trolleys. Rainy-day moves get ground protection so lawns and paths aren't churned.",
    popularRoutes: [
      { to: "Palm Beach", note: "families trading hills for flat beach blocks" },
      { to: "Robina", note: "school-zone driven family moves" },
      { to: "Ashgrove", note: "local upsizing within the inner north-west" },
    ],
    nearby: ["Red Hill", "Milton", "Bardon"],
    faqs: [
      {
        question: "Can you get furniture out of a Queenslander on a steep Paddington block?",
        answer:
          "It's our home turf. We use lifting straps, stair rollers and sometimes a veranda lift for oversized pieces. During the quote we ask for a photo of the front approach so the crew arrives with the right plan.",
      },
      {
        question: "Do you charge extra for stairs?",
        answer:
          "Stairs are priced into your fixed quote up front once you tell us about them — the price you're given is the price you pay. What we never do is 'discover' stairs on the day and add an hourly penalty.",
      },
    ],
  },
  {
    slug: "bulimba",
    name: "Bulimba",
    region: "Brisbane",
    intro:
      "Bulimba and the Oxford Street precinct give us some of our favourite moves — wide streets, renovated Queenslanders, and ferry-side apartments heading everywhere from Hawthorne to the Gold Coast.",
    housing:
      "Renovated Queenslanders and Hamptons-style rebuilds with generous furniture (think oversized sofas and stone-top tables), plus newer apartment blocks near the river with basement parking that has height limits.",
    access:
      "Basement car parks along the riverside blocks are often too low for trucks — we stage from street level with trolleys. Oxford Street itself is best loaded before 9am on weekdays.",
    popularRoutes: [
      { to: "Mermaid Beach", note: "riverside to beachside lifestyle moves" },
      { to: "Hawthorne", note: "next-suburb family shuffles" },
      { to: "Broadbeach", note: "downsizers heading to tower living" },
    ],
    nearby: ["Hawthorne", "Balmoral", "Morningside"],
    faqs: [
      {
        question: "My building's basement is too low for a truck — how does the move work?",
        answer:
          "Standard for riverside Bulimba blocks: we park at street level, protect the lobby and lift, and ferry with trolleys. It adds a little planning, not a surprise cost — it's in your fixed quote.",
      },
      {
        question: "Can you move large custom furniture from a renovated Queenslander?",
        answer:
          "Yes — oversized sofas, stone tables and custom joinery are wrapped, corner-protected and, where needed, disassembled by our crew. Stone tops travel on edge in padded racks, never flat.",
      },
    ],
  },
  {
    slug: "west-end",
    name: "West End",
    region: "Brisbane",
    intro:
      "West End moves run from Boundary Street share houses to the new riverfront towers at Montague Road — and a steady stream of corridor moves to the Gold Coast when the inner-city chapter ends.",
    housing:
      "A real mix: workers' cottages, mid-century flats, warehouse conversions and new high-rises. The towers need dock bookings; the cottages have narrow hallways where sofa disassembly earns its keep.",
    access:
      "Montague Road towers have well-run docks — book a slot and it's smooth. Around Boundary and Vulture Street, loading zones are short and enforced, so we time loads tightly and stage efficiently.",
    popularRoutes: [
      { to: "Surfers Paradise", note: "tower-to-tower corridor moves" },
      { to: "Burleigh Heads", note: "the West End-to-Burleigh pipeline is real" },
      { to: "Annerley", note: "first-home buyers heading south of the river" },
    ],
    nearby: ["South Brisbane", "Highgate Hill", "Dutton Park"],
    faqs: [
      {
        question: "Do you handle the dock booking for Montague Road apartment towers?",
        answer:
          "Yes — give us your building manager's contact and we'll book the dock and lift, provide our insurance certificate, and schedule the move inside the building's allowed window.",
      },
      {
        question: "Can you move a share house where everyone's going somewhere different?",
        answer:
          "We do split-destination moves regularly: one load, multiple drops, each person's items labelled and grouped. Quoted as one fixed job with per-drop clarity so housemates can split fairly.",
      },
    ],
  },
  {
    slug: "ascot",
    name: "Ascot",
    region: "Brisbane",
    intro:
      "Ascot moves tend to be big homes, fine furniture and high expectations — exactly the moves our white-glove standard was built for.",
    housing:
      "Large character homes and contemporary rebuilds around Lancaster and Kitchener Road, with formal furniture, artwork and often a piano in the mix. Multi-day pack-and-move jobs are common.",
    access:
      "Generous driveways make truck access easy, but long carries from back-of-block extensions are common — we stage through garages and use ground protection across lawns. Racecourse event days affect street access; we schedule around the racing calendar.",
    popularRoutes: [
      { to: "Main Beach", note: "downsizing to premium tower living" },
      { to: "Sanctuary Cove", note: "the golf-and-marina retirement move" },
      { to: "Clayfield", note: "staying local, changing house size" },
    ],
    nearby: ["Hamilton", "Clayfield", "Hendra"],
    faqs: [
      {
        question: "Can you move artwork, antiques and a piano in the same job?",
        answer:
          "Yes — that combination is a typical Ascot move. Artwork travels in padded art flats, antiques get soft-wrap plus corner protection, and the piano is handled by our piano crew with trolley and ramps. One fixed quote covers all of it.",
      },
      {
        question: "Do you offer packing for larger homes?",
        answer:
          "Full and partial packing services are available — most large Ascot homes book a pack day before moving day so nothing is rushed. Materials, labelling and unpack-and-place at the destination are included in the scope you choose.",
      },
    ],
  },
  {
    slug: "indooroopilly",
    name: "Indooroopilly",
    region: "Brisbane",
    intro:
      "From unit blocks near the station to family homes off Moggill Road, Indooroopilly is one of our busiest western-suburbs pickup points — often for families heading to bigger blocks or the coast.",
    housing:
      "Post-war family homes on sloped blocks, townhouse complexes with tight internal driveways, and apartments near the shopping centre. Complex driveways often can't take a large truck, so we plan the shuttle in advance.",
    access:
      "Townhouse complexes around Lambert and Stamford Road have tight turns and visitor-parking rules — we confirm body-corporate requirements before the day. Moggill Road loading is timed outside peak school runs.",
    popularRoutes: [
      { to: "Robina", note: "like-for-like family suburb swap on the coast" },
      { to: "Varsity Lakes", note: "university families relocating south" },
      { to: "Kenmore", note: "bigger block, same school runs" },
    ],
    nearby: ["Taringa", "St Lucia", "Chapel Hill"],
    faqs: [
      {
        question: "The truck won't fit down my townhouse driveway — what happens?",
        answer:
          "Standard plan: the truck parks at the complex entrance and we ferry with trolleys, protecting shared paths. It's built into the fixed quote when you tell us it's a complex — no day-of surcharge.",
      },
      {
        question: "Do you do weekend moves from Indooroopilly?",
        answer:
          "Yes, Saturdays are popular for family moves here — book 2–3 weeks ahead for weekend slots, especially around school holidays.",
      },
    ],
  },
  {
    slug: "broadbeach",
    name: "Broadbeach",
    region: "Gold Coast",
    intro:
      "Broadbeach is tower country — and tower moves are a procedure, not a lift-and-hope. We run them weekly: docks booked, lifts padded, body corporates satisfied, and furniture up 30 floors without a scuff.",
    housing:
      "High-rise apartments dominate, from older walk-ups off the highway to premium towers on the beach side. Lift dimensions and dock height limits decide what moves in one piece — we check both before quoting large furniture.",
    access:
      "Every major tower requires a booked move window, certificate of currency and lift protection — we handle all three with your building manager. Peak season (December–January) books out fast; reserve early.",
    popularRoutes: [
      { to: "New Farm", note: "the reverse corridor — coast back to the river" },
      { to: "Mermaid Beach", note: "tower to beach-house lifestyle change" },
      { to: "Robina", note: "families moving inland for space and schools" },
    ],
    nearby: ["Mermaid Beach", "Surfers Paradise", "Broadbeach Waters"],
    faqs: [
      {
        question: "My building needs insurance certificates and a lift booking — do you arrange that?",
        answer:
          "Yes, entirely. Give us the building manager's details and we book the dock and lift window, send our certificate of currency, and install lift protection on the day. It's routine for us in every major Broadbeach tower.",
      },
      {
        question: "Will my large sofa fit in the tower lift?",
        answer:
          "We check before we quote: lift door height, car depth and diagonal. If a piece won't fit whole, we disassemble where possible or advise honestly before moving day — never a surprise in the lobby.",
      },
    ],
  },
  {
    slug: "burleigh-heads",
    name: "Burleigh Heads",
    region: "Gold Coast",
    intro:
      "Everyone wants to move to Burleigh — and we move a lot of them in. Beach shacks, hillside homes with a view, and new walk-ups off James Street: each has its own quirks and we know them all.",
    housing:
      "Original beach houses on the flat, steep hillside homes around the headland with stair-only access, and boutique apartment blocks with tight basement parking. Salt air means we wrap electronics and metal furniture extra carefully.",
    access:
      "Headland streets like Gloria and Hill Avenue are steep and narrow — smaller trucks and shuttle runs are often the right call, planned into the quote. Beach-side streets fill with parking by 8am in summer; we load early.",
    popularRoutes: [
      { to: "West End", note: "the return leg of the Brisbane–Burleigh pipeline" },
      { to: "Palm Beach", note: "one beach south for more space" },
      { to: "Currumbin", note: "quieter beaches, same lifestyle" },
    ],
    nearby: ["Miami", "Palm Beach", "Burleigh Waters"],
    faqs: [
      {
        question: "Can you move into a hillside Burleigh home with stair-only access?",
        answer:
          "Yes — headland moves are a specialty. We size the crew for the stair run, use stair rollers for heavy items, and when a street can't take the big truck we shuttle with a smaller one. All planned and priced before the day.",
      },
      {
        question: "When should I book a summer move to Burleigh?",
        answer:
          "December and January are the busiest weeks of our year here. For a summer beach-suburb move, 3–4 weeks' notice protects your preferred date; mid-week slots stay open longer than Saturdays.",
      },
    ],
  },
  {
    slug: "surfers-paradise",
    name: "Surfers Paradise",
    region: "Gold Coast",
    intro:
      "Surfers moves are vertical logistics: high towers, busy docks and strict body corporates. Our crews treat every one like an operation — booked, insured, padded and on schedule.",
    housing:
      "Almost entirely apartments, from older mid-rises on the river side to supertowers on the Esplanade. Furniture size is governed by lift specs; some older buildings have freight lifts, many don't.",
    access:
      "Dock congestion is the main constraint — some towers share one dock across hundreds of units. We book the earliest window available and arrive pre-staged so the slot isn't wasted. Schoolies weeks and major events close streets; we plan around the events calendar.",
    popularRoutes: [
      { to: "West End", note: "tower-to-tower moves up the corridor" },
      { to: "Southport", note: "renters moving one suburb north for value" },
      { to: "Broadbeach", note: "the two-tower shuffle south" },
    ],
    nearby: ["Main Beach", "Broadbeach", "Southport"],
    faqs: [
      {
        question: "How do you handle a tower with a shared, busy loading dock?",
        answer:
          "We book the earliest window the building allows, arrive with everything staged in the lobby-ready order, and run a bigger crew for the booked hours so the whole move fits the slot. If the building charges dock fees we tell you up front.",
      },
      {
        question: "Can you do after-hours moves in Surfers Paradise?",
        answer:
          "Where the building allows evening or early-morning windows, yes — some towers only permit weekday business hours, which we confirm with your manager before locking your date.",
      },
    ],
  },
  {
    slug: "robina",
    name: "Robina",
    region: "Gold Coast",
    intro:
      "Robina is where Gold Coast families put down roots — and where a big share of our Brisbane corridor moves land. Master-planned streets make for smooth moving days; we make the rest easy.",
    housing:
      "Modern family homes with double garages, townhouse enclaves around the waterways, and low-rise apartments near the town centre. Homes tend to be furniture-heavy: big modulars, outdoor settings, trampolines and gym gear.",
    access:
      "Wide streets and driveways mean easy truck access almost everywhere; the main considerations are body-corporate rules in gated enclaves and school-hour traffic around Robina Town Centre, which we schedule around.",
    popularRoutes: [
      { to: "Indooroopilly", note: "the reverse family move up the M1" },
      { to: "Varsity Lakes", note: "next-door moves as families resize" },
      { to: "Mudgeeraba", note: "acreage upgrades further inland" },
    ],
    nearby: ["Varsity Lakes", "Mudgeeraba", "Merrimac"],
    faqs: [
      {
        question: "Can you disassemble and rebuild trampolines, swing sets and gym equipment?",
        answer:
          "Yes — outdoor and garage gear is half of a typical Robina load. We break down trampolines and racks, bag the hardware, and rebuild at the new place so the backyard works the same weekend.",
      },
      {
        question: "We're moving from Brisbane to Robina — how does the day run?",
        answer:
          "One truck, one crew, one day: morning load in Brisbane, the M1 run, afternoon unload in Robina with furniture placed room by room. Fixed price agreed before the day, no traffic surcharges.",
      },
    ],
  },
  {
    slug: "palm-beach",
    name: "Palm Beach",
    region: "Gold Coast",
    intro:
      "Palm Beach has gone from sleepy to sought-after — and our trucks follow the demand weekly, moving families into beach streets between the highway and the sand.",
    housing:
      "Original beach houses being renovated street by street, new duplexes and low-rise apartments, plus waterway homes on the canals. Sandy soil and narrow side setbacks shape how we stage heavy items.",
    access:
      "The numbered avenue streets are narrow with soft verges — we protect lawns and use shorter trucks where needed. Jefferson Lane-side properties often load from the lane itself, planned at quote time.",
    popularRoutes: [
      { to: "Paddington", note: "the coast-to-Brisbane return move" },
      { to: "Burleigh Heads", note: "one beach north as families grow" },
      { to: "Currumbin Waters", note: "canal-to-canal lifestyle moves" },
    ],
    nearby: ["Currumbin", "Elanora", "Burleigh Heads"],
    faqs: [
      {
        question: "Can the truck get down the narrow avenue streets?",
        answer:
          "Usually yes with our mid-size truck; where parking or width is tight we shuttle from the nearest corner. We confirm your street on the quote and never bill 'access surprises' on the day.",
      },
      {
        question: "Do you move canal-front homes with pontoon or water-side furniture?",
        answer:
          "Yes — outdoor and water-side pieces (settings, kayaks, small craft accessories) are wrapped for salt exposure and loaded with the household. For anything requiring water transport we coordinate with local barge operators.",
      },
    ],
  },
  {
    slug: "mermaid-beach",
    name: "Mermaid Beach",
    region: "Gold Coast",
    intro:
      "Mermaid Beach mixes millionaire's row with original beach flats — two very different move types, both of which our crews run regularly and quote precisely.",
    housing:
      "Hedges Avenue prestige homes with oversized and custom furniture, older three-storey walk-up flats a street back, and new boutique apartments. The mix means one week we're moving art and marble; the next, a studio up three flights.",
    access:
      "Hedges Avenue moves are scheduled outside peak beach traffic with careful driveway staging. The walk-up flats have no lifts and tight stairwells — crew size and compact trolleys solve what brute force can't.",
    popularRoutes: [
      { to: "Bulimba", note: "beachside back to riverside Brisbane" },
      { to: "Broadbeach", note: "flat-to-tower moves one suburb north" },
      { to: "Miami", note: "one beach south, same postcode-ish lifestyle" },
    ],
    nearby: ["Broadbeach", "Miami", "Mermaid Waters"],
    faqs: [
      {
        question: "Can you handle prestige homes with custom and oversized furniture?",
        answer:
          "Yes — white glove is our default, not an upgrade. Custom sofas, stone and marble pieces, artwork and wine collections are wrapped, crated where needed, and placed exactly where the designer intended.",
      },
      {
        question: "Do you move out of the old three-storey walk-up flats?",
        answer:
          "All the time. No lift means the right crew size and stair technique rather than a bigger bill on the day — stairs are in the fixed quote from the start.",
      },
    ],
  },
];

export function getSuburb(slug: string): Suburb | undefined {
  return SUBURBS.find((s) => s.slug === slug);
}
