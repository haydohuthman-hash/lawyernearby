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
  {
    slug: "hamilton",
    name: "Hamilton",
    region: "Brisbane",
    intro:
      "Hamilton runs from the old hill-top homes with river views down to the new Portside and Racecourse Road apartment towers — two completely different moves, both of which we run every week.",
    housing:
      "Elevated period homes on Hamilton Hill with sweeping stairs and terraced gardens, and newer high-rise apartments near Portside Wharf and Racecourse Road with basement parking and lift access. Furniture skews larger and heavier here — think entertaining-sized outdoor settings and formal dining suites.",
    access:
      "Hill-side streets are steep and often one-way, so we plan the truck's approach and staging before the crew arrives. Portside and Racecourse Road towers need a dock booking, which we coordinate directly with the building manager.",
    popularRoutes: [
      { to: "Main Beach", note: "riverside prestige to marina-side prestige" },
      { to: "Clayfield", note: "staying inner-north, changing lifestyle" },
      { to: "Broadbeach", note: "downsizing from a hill-top home to tower living" },
    ],
    nearby: ["Ascot", "Clayfield", "Newstead"],
    faqs: [
      {
        question: "Can you manage a move from a steep, hill-top Hamilton property?",
        answer:
          "Yes — it's a regular job for us. We assess the street and driveway gradient at quote stage, stage the truck at the safest point, and use trolleys and ramps for the carry. Nothing about the hill surprises us on the day.",
      },
      {
        question: "Do you handle apartment moves at Portside Wharf?",
        answer:
          "Regularly. We book the loading dock and lift with the building manager ahead of time and bring floor and lift protection as standard, so bond conditions are met without any fuss.",
      },
    ],
  },
  {
    slug: "toowong",
    name: "Toowong",
    region: "Brisbane",
    intro:
      "Toowong sits between the university crowd and long-term family homes — a suburb where we do everything from a share-house single-item pickup to a full family relocation, often heading over the river or down to the coast.",
    housing:
      "A mix of student-friendly unit blocks near Toowong Village and the busway, established homes on the slopes toward Mount Coot-tha, and townhouse complexes along Sherwood Road. Many properties are close to UQ, so timing around semester changeover is common.",
    access:
      "Coronation Drive traffic shapes our load timing — we avoid the peak commuter crush on truck runs toward the city. Sherwood Road complexes often have shared driveways and visitor parking limits we confirm with the body corporate before moving day.",
    popularRoutes: [
      { to: "Varsity Lakes", note: "university-to-university families heading south" },
      { to: "Robina", note: "young families chasing bigger blocks on the coast" },
      { to: "Chapel Hill", note: "staying local, moving further from the river" },
    ],
    nearby: ["Chapel Hill", "St Lucia", "Indooroopilly"],
    faqs: [
      {
        question: "Do you do share-house and student moves around Toowong?",
        answer:
          "Yes — including split-destination moves at semester's end where housemates are heading to different addresses. We quote it as one job with clear per-person item lists so costs can be split fairly.",
      },
      {
        question: "Is Coronation Drive traffic a problem for moving day?",
        answer:
          "We plan around it. Loads are scheduled outside the morning and evening commuter peaks so the truck isn't sitting in traffic — which also keeps your fixed price fixed.",
      },
    ],
  },
  {
    slug: "carindale",
    name: "Carindale",
    region: "Brisbane",
    intro:
      "Carindale is textbook eastern-suburbs family territory — double-garage homes, good schools, and a steady stream of moves to and from the Gold Coast as families change size or chase the beach.",
    housing:
      "1980s–2000s brick-and-tile family homes with double garages and decent-sized backyards, plus newer townhouse developments closer to Westfield Carindale. Loads tend to be furniture-heavy: full bedroom suites, home offices, and garage overflow.",
    access:
      "Wide suburban streets and driveways make truck access straightforward almost everywhere. The main timing consideration is school pick-up and drop-off traffic around Mansfield and Camp Hill state high catchments, which we schedule around.",
    popularRoutes: [
      { to: "Varsity Lakes", note: "the classic eastern-suburbs-to-coast family move" },
      { to: "Robina", note: "bigger block, same school-zone mindset" },
      { to: "Mount Gravatt", note: "staying local, changing house size" },
    ],
    nearby: ["Mount Gravatt", "Camp Hill", "Belmont"],
    faqs: [
      {
        question: "Can you move a full family home with a garage full of stored items?",
        answer:
          "Yes — garage overflow (tools, sports gear, storage tubs) is part of nearly every Carindale job we quote. Tell us roughly what's in there and it's factored into your fixed price from the start.",
      },
      {
        question: "Do you move families from Carindale to the Gold Coast?",
        answer:
          "It's one of our most common eastern-suburbs routes. One truck, one crew, one fixed price for the whole corridor run, with furniture placed room-by-room at the other end.",
      },
    ],
  },
  {
    slug: "chermside",
    name: "Chermside",
    region: "Brisbane",
    intro:
      "Chermside is northside's hub — Westfield Chermside anchors a mix of established homes, unit blocks and townhouses, and we move all three every week, including plenty of runs down the corridor to the coast.",
    housing:
      "Older post-war homes on generous blocks side by side with newer townhouse complexes and mid-rise units near the shopping centre. Many homes have been renovated or extended, meaning a mix of original and contemporary furniture in the same load.",
    access:
      "Gympie Road traffic and the Westfield precinct get busy through the day — we schedule loads for early morning or the quieter mid-afternoon window. Townhouse complexes typically have visitor-parking limits we check ahead of time.",
    popularRoutes: [
      { to: "Helensvale", note: "northside to the Gold Coast's own northern suburb" },
      { to: "Surfers Paradise", note: "downsizing to tower living on the coast" },
      { to: "Chermside West", note: "local moves within the same school catchment" },
    ],
    nearby: ["Kedron", "Aspley", "Wavell Heights"],
    faqs: [
      {
        question: "Can you schedule around Gympie Road and Westfield traffic?",
        answer:
          "Yes — we deliberately avoid the peak shopping-centre and school-run windows on Gympie Road so the truck isn't stuck idling. It's built into the time we quote, not an afterthought.",
      },
      {
        question: "Do you move renovated homes with a mix of old and new furniture?",
        answer:
          "Constantly. Original built-ins and newer pieces get the same treatment — blanket-wrapped, corner-protected and reassembled correctly at the other end.",
      },
    ],
  },
  {
    slug: "wilston",
    name: "Wilston",
    region: "Brisbane",
    intro:
      "Wilston's character homes near the train station are some of the prettiest — and steepest — streets we work in. Compact blocks, timber stairs and tight streetscapes mean every move here is planned, not improvised.",
    housing:
      "Restored Queenslanders and workers' cottages on narrow, often sloped blocks close to Wilston station, with some newer infill townhouses. Furniture tends to be a mix of restored antiques and contemporary pieces, both requiring careful handling.",
    access:
      "Streets around the station are narrow with permit parking in places — we check restrictions ahead of the move and, where needed, arrange a temporary permit. Sloped blocks mean careful trolley work rather than a straight carry.",
    popularRoutes: [
      { to: "Paddington", note: "character-home to character-home, staying inner-north" },
      { to: "Burleigh Heads", note: "swapping hills for headland views" },
      { to: "Clayfield", note: "staying local, upsizing the block" },
    ],
    nearby: ["Windsor", "Newmarket", "Grange"],
    faqs: [
      {
        question: "Can you move restored antiques safely from a Wilston Queenslander?",
        answer:
          "Yes — antique and restored furniture gets extra soft-wrap and corner protection, and where a piece is particularly fragile we discuss handling with you before the day, not during it.",
      },
      {
        question: "Is parking near Wilston station a problem for the truck?",
        answer:
          "It can be tight, so we check your street's permit rules at quote stage and arrange council permission where required, rather than discovering it on moving morning.",
      },
    ],
  },
  {
    slug: "clayfield",
    name: "Clayfield",
    region: "Brisbane",
    intro:
      "Clayfield is prestige inner-north-east — grand homes, private schools nearby, and furniture that's often worth as much care in the truck as it was to buy. It's a natural fit for our white-glove standard.",
    housing:
      "Large character and architect-designed homes, many with formal furniture, artwork and antiques accumulated over years. Some properties sit on double blocks with long driveways; others are closer to Sandgate Road with tighter street frontages.",
    access:
      "Long driveways generally make truck access easy, though private-school pick-up traffic around Eagle Junction affects timing on weekday afternoons — we load outside those windows. Formal homes often warrant a pre-move walkthrough to plan packing.",
    popularRoutes: [
      { to: "Main Beach", note: "prestige-to-prestige downsizing" },
      { to: "Sanctuary Cove", note: "the golf-and-marina retirement move" },
      { to: "Ascot", note: "staying in the same prestige pocket" },
    ],
    nearby: ["Ascot", "Hamilton", "Wooloowin"],
    faqs: [
      {
        question: "Do you offer a pre-move walkthrough for larger Clayfield homes?",
        answer:
          "Yes — for bigger or more formal homes we recommend a quick walkthrough (in person or by video) before the day, so packing, artwork handling and furniture sequencing are planned rather than improvised.",
      },
      {
        question: "Can you move fine art and antiques alongside everyday furniture?",
        answer:
          "Regularly, and in the same load. Art travels in padded flats, antiques get soft-wrap and corner protection, and everything is itemised on your fixed quote so nothing is treated as an afterthought.",
      },
    ],
  },
  {
    slug: "sunnybank",
    name: "Sunnybank",
    region: "Brisbane",
    intro:
      "Sunnybank is one of Brisbane's busiest southside hubs, and we move a genuine cross-section of it every week — family homes, townhouse complexes and units around Sunnybank Plaza.",
    housing:
      "A wide mix: established brick homes on standard suburban blocks, newer townhouse developments, and mid-rise unit blocks near the Plaza and Market Square. Multi-generational households are common, meaning larger loads with a wide range of furniture styles.",
    access:
      "Plaza-adjacent streets get busy around meal times and weekends — we time loads outside those peaks. Townhouse complexes often require body-corporate notice for truck access, which we arrange in advance.",
    popularRoutes: [
      { to: "Robina", note: "southside families chasing the coast lifestyle" },
      { to: "Coomera", note: "value-driven moves to newer northern Gold Coast estates" },
      { to: "Sunnybank Hills", note: "local upsizing within the same community" },
    ],
    nearby: ["Sunnybank Hills", "Runcorn", "Macgregor"],
    faqs: [
      {
        question: "Do you handle larger, multi-generational household moves?",
        answer:
          "Yes — bigger households with a wide mix of furniture are a normal Sunnybank job. We size the crew and truck to the load at quote stage so the fixed price reflects the real scope.",
      },
      {
        question: "Can you arrange body-corporate access for townhouse complexes?",
        answer:
          "Yes, we contact the body corporate or on-site manager ahead of time to confirm truck access and any notice requirements, so there are no surprises for you or your neighbours on the day.",
      },
    ],
  },
  {
    slug: "chapel-hill",
    name: "Chapel Hill",
    region: "Brisbane",
    intro:
      "Chapel Hill's bushland streets and family homes make for some of our most scenic — and most sloped — moving days. Good schools nearby mean plenty of families upsizing without leaving the area.",
    housing:
      "Split-level and elevated family homes on leafy, curving streets, many backing onto bushland or bikeway reserves. Blocks are often steep, with driveways that switch back or drop away from the road.",
    access:
      "Sloped driveways and split-level entries mean we plan the carry path before starting — sometimes staging through a garage rather than the front door. Streets near the bikeway can be narrow, so we confirm truck clearance in advance.",
    popularRoutes: [
      { to: "Toowong", note: "downsizing while staying in the western suburbs" },
      { to: "Robina", note: "bushland lifestyle traded for coastal family living" },
      { to: "Kenmore", note: "next-door moves as families need more room" },
    ],
    nearby: ["Kenmore", "Brookfield", "Indooroopilly"],
    faqs: [
      {
        question: "Can you move furniture out of a split-level home on a sloped block?",
        answer:
          "Yes — split-level Chapel Hill homes are common for us. We assess the internal level changes and driveway grade at quote time and plan the carry route, often via the garage, ahead of the day.",
      },
      {
        question: "Do narrow streets near the bikeway cause access issues?",
        answer:
          "Occasionally, which is why we check your specific street width when quoting. Where a full-size truck won't fit comfortably, we bring a smaller vehicle and shuttle if needed — planned, not discovered on the day.",
      },
    ],
  },
  {
    slug: "kangaroo-point",
    name: "Kangaroo Point",
    region: "Brisbane",
    intro:
      "Kangaroo Point's cliffside apartments and river views mean tower logistics are part of almost every move here — and it's a favourite starting point for downsizers heading to the Gold Coast.",
    housing:
      "Predominantly high-rise and mid-rise apartments along the river, with a handful of older character homes on the cliff-top streets further back. Furniture is typically apartment-scaled but often includes larger statement pieces that need careful lift planning.",
    access:
      "Almost every building requires a booked lift and dock window, which we coordinate directly with building management, along with a certificate of currency. Main Street and Lambert Street can be tight for truck parking during the day, so we favour early slots.",
    popularRoutes: [
      { to: "Main Beach", note: "river-view tower to marina-view tower" },
      { to: "Broadbeach", note: "downsizing to Gold Coast tower living" },
      { to: "Woolloongabba", note: "local moves within the inner south" },
    ],
    nearby: ["Woolloongabba", "East Brisbane", "South Brisbane"],
    faqs: [
      {
        question: "Do you manage lift bookings for Kangaroo Point apartment towers?",
        answer:
          "Yes, as standard. Give us your building manager's details and we book the lift and dock window, supply our insurance certificate, and bring lift protection so the move fits within your building's rules.",
      },
      {
        question: "Will my furniture fit in the building's lift?",
        answer:
          "We check the lift's dimensions against your larger pieces before quoting, and flag anything that won't fit whole so we can plan disassembly rather than find out in the lobby.",
      },
    ],
  },
  {
    slug: "fig-tree-pocket",
    name: "Fig Tree Pocket",
    region: "Brisbane",
    intro:
      "Fig Tree Pocket is riverside, leafy and spacious — large blocks, established gardens and a good number of full-house moves where we're packing an entire family's accumulated life, carefully.",
    housing:
      "Larger homes on generous, often river-adjacent blocks, many with pools, sheds and established gardens that add outdoor furniture and equipment to the load. Some streets flood-prone areas mean furniture is occasionally stored higher in the home, which we account for in access planning.",
    access:
      "Long driveways generally make truck access easy, but the Fig Tree Pocket Bridge and Jesmond Road can back up at school pick-up time — we schedule around it. Riverside properties sometimes need extra care around garden beds and pool fencing during the carry.",
    popularRoutes: [
      { to: "Robina", note: "riverside acreage to coastal family living" },
      { to: "Ascot", note: "staying riverside, changing suburb" },
      { to: "Chapel Hill", note: "local moves within the western riverside pocket" },
    ],
    nearby: ["Chapel Hill", "Kenmore", "Indooroopilly"],
    faqs: [
      {
        question: "Can you move a full house including shed and pool-area furniture?",
        answer:
          "Yes — sheds, pool furniture and garden equipment are standard inclusions in a Fig Tree Pocket quote. Walk us through what's in the shed when you book and it's priced in from the start.",
      },
      {
        question: "Do you work around school-traffic timing near the bridge?",
        answer:
          "We do — loads are scheduled to avoid the worst of the school pick-up and drop-off congestion around Fig Tree Pocket Bridge, keeping the day on schedule.",
      },
    ],
  },
  {
    slug: "miami",
    name: "Miami",
    region: "Gold Coast",
    intro:
      "Miami sits quietly between Nobby Beach and Burleigh, and we move a genuine mix here — original beach shacks being renovated, new builds going up, and everything in between.",
    housing:
      "Original 1960s–70s beach homes (many mid-renovation), newer duplexes and townhouses, and a scattering of boutique apartment blocks near the highway. Renovation-in-progress properties often mean careful navigation around builder's materials or partial access.",
    access:
      "Side streets off the highway are narrow with limited parking, so we time loads for quieter parts of the day. Properties under renovation get a quick access check beforehand so the crew isn't working around scaffolding unexpectedly.",
    popularRoutes: [
      { to: "West End", note: "beachside back to the river for a change of pace" },
      { to: "Mermaid Beach", note: "one suburb north, similar low-key lifestyle" },
      { to: "Burleigh Heads", note: "one suburb south for more buzz" },
    ],
    nearby: ["Mermaid Beach", "Burleigh Heads", "Nobby Beach"],
    faqs: [
      {
        question: "Can you move in or out of a home mid-renovation?",
        answer:
          "Yes — tell us about builder's access, materials on site or partial completion when you book, and we'll plan the crew and carry route around it rather than being surprised on the day.",
      },
      {
        question: "Is Miami covered by your standard Gold Coast pricing?",
        answer:
          "Yes — Miami is fully within our regular Gold Coast service area, quoted the same fixed-price way as Broadbeach or Burleigh.",
      },
    ],
  },
  {
    slug: "southport",
    name: "Southport",
    region: "Gold Coast",
    intro:
      "Southport is the Gold Coast's civic and health hub — Australia Fair, the light rail and the university hospital precinct all sit here, and our crews are in and out of its apartment towers constantly.",
    housing:
      "A dense mix of high-rise apartments, older low-rise unit blocks and pockets of family homes further from the CBD. Proximity to the hospital precinct means we see a steady flow of downsizing and relocation moves tied to work and healthcare.",
    access:
      "Light rail construction-era road layouts and one-way streets around the CBD mean route planning matters — we check the current traffic setup before the day. Towers require standard dock and lift bookings, which we manage with building management.",
    popularRoutes: [
      { to: "Surfers Paradise", note: "one light-rail stop, tower to tower" },
      { to: "New Farm", note: "the reverse corridor back to riverside Brisbane" },
      { to: "Helensvale", note: "trading CBD density for northern-suburb space" },
    ],
    nearby: ["Southport Broadwater Parklands", "Labrador", "Surfers Paradise"],
    faqs: [
      {
        question: "Do you know the current road layout around Southport CBD?",
        answer:
          "Yes — with ongoing precinct changes near the light rail and hospital, we check current access and one-way rules before every Southport job so the truck takes the right route on the day.",
      },
      {
        question: "Can you move someone relocating for work at the hospital precinct?",
        answer:
          "Regularly — we're used to tighter turnaround windows for health-precinct relocations and can often accommodate shorter notice than a typical booking.",
      },
    ],
  },
  {
    slug: "coolangatta",
    name: "Coolangatta",
    region: "Gold Coast",
    intro:
      "Coolangatta is as far south as the Gold Coast goes — a beach town with its own rhythm, right on the NSW border and a short hop from the airport. We run it as part of our standard corridor coverage, not as an afterthought.",
    housing:
      "Classic beach apartments and older walk-up flats close to the point, with newer developments further back from the coast. Many properties are holiday lets or downsizers' homes, meaning smaller, well-curated furniture loads.",
    access:
      "Beachfront streets get congested on weekends and school holidays — we favour weekday and early-morning loads. Airport proximity means some moves are timed tightly around flights, which we plan for.",
    popularRoutes: [
      { to: "Tugun", note: "one beach north, staying close to the border" },
      { to: "Burleigh Heads", note: "trading quiet for a livelier beach scene" },
      { to: "Paddington", note: "the full-corridor move back to Brisbane's inner north" },
    ],
    nearby: ["Tugun", "Kirra", "Bilinga"],
    faqs: [
      {
        question: "Do you service Coolangatta given it's right on the border?",
        answer:
          "Yes — Coolangatta is fully within our Gold Coast service area, quoted with the same fixed-price approach as anywhere else on the coast.",
      },
      {
        question: "Can you time a move around a flight out of Gold Coast Airport?",
        answer:
          "We do this regularly given how close Coolangatta sits to the airport — tell us your flight time and we'll build the schedule around it.",
      },
    ],
  },
  {
    slug: "currumbin",
    name: "Currumbin",
    region: "Gold Coast",
    intro:
      "Currumbin is beach-suburb living at its most relaxed — home to the Wildlife Sanctuary and a steady community of families who rarely want to leave, which makes most of our jobs here local upsizing rather than moving away.",
    housing:
      "Beach cottages and family homes on generous blocks, plus newer developments around Currumbin Waters. Many homes have accumulated outdoor and water-sport gear — kayaks, surfboards, paddleboards — that adds to a typical load.",
    access:
      "Quieter streets than the busier northern beaches make truck access generally easy, though weekend Sanctuary traffic on Tomewin Street affects timing near the main tourist strip. We schedule around it.",
    popularRoutes: [
      { to: "Palm Beach", note: "one beach north for more amenities" },
      { to: "Currumbin Waters", note: "local upsizing within the same community" },
      { to: "West End", note: "trading beach life for riverside Brisbane" },
    ],
    nearby: ["Currumbin Waters", "Palm Beach", "Tugun"],
    faqs: [
      {
        question: "Can you move surfboards, kayaks and water-sport gear safely?",
        answer:
          "Yes — this kind of gear is a normal part of a Currumbin load. Boards and paddles are padded and strapped separately so they arrive without a scratch.",
      },
      {
        question: "Does Wildlife Sanctuary traffic affect moving day?",
        answer:
          "Only around the immediate tourist strip on busy weekends, which we simply avoid by timing loads for weekday mornings where possible.",
      },
    ],
  },
  {
    slug: "main-beach",
    name: "Main Beach",
    region: "Gold Coast",
    intro:
      "Main Beach sits between Surfers and the Broadwater, with the marina and Sea World giving it a polished, slightly quieter prestige feel — and a steady stream of tower moves we handle with the same care as everywhere on the coast.",
    housing:
      "Premium apartment towers along Hedges Avenue's northern cousin — the Esplanade and Tedder Avenue — plus marina-front properties with boat access. Furniture is often higher-end, and marina properties sometimes include water-side gear.",
    access:
      "Towers require the standard dock and lift booking process; marina-front properties occasionally need coordination around private jetty access. Tedder Avenue's cafe strip gets busy on weekends, so we favour weekday loads.",
    popularRoutes: [
      { to: "Clayfield", note: "prestige-to-prestige upsizing north" },
      { to: "Broadbeach", note: "tower-to-tower moves south along the coast" },
      { to: "Hamilton", note: "marina lifestyle to riverside Brisbane" },
    ],
    nearby: ["Southport", "Surfers Paradise", "Labrador"],
    faqs: [
      {
        question: "Do you handle marina-front properties with private jetty access?",
        answer:
          "Yes — we coordinate access timing with the property or marina management where relevant, and treat water-side furniture and equipment with the same wrapping and care as everything else in the load.",
      },
      {
        question: "Can you move premium furniture from Main Beach towers?",
        answer:
          "White-glove handling is standard on every job, so premium and designer furniture gets the same wrap, padding and careful placement whether it's a Main Beach tower or anywhere else on the corridor.",
      },
    ],
  },
  {
    slug: "varsity-lakes",
    name: "Varsity Lakes",
    region: "Gold Coast",
    intro:
      "Varsity Lakes is master-planned family territory around Bond University — modern homes, waterway walking paths, and a lot of young families and students moving in as the area keeps growing.",
    housing:
      "Modern townhouses and family homes around the lake system, plus student-friendly apartments near Bond University. New estates mean wide streets and easy truck access almost everywhere, with the occasional body-corporate rule in townhouse complexes.",
    access:
      "Wide, modern streets make loading straightforward. The main timing factor is university semester changeover, when student moves cluster and we recommend booking a little further ahead.",
    popularRoutes: [
      { to: "Toowong", note: "the reverse university-to-university family move" },
      { to: "Robina", note: "next-door moves as families need more space" },
      { to: "Indooroopilly", note: "back up the corridor to Brisbane's west" },
    ],
    nearby: ["Robina", "Mudgeeraba", "Burleigh Waters"],
    faqs: [
      {
        question: "Do you get busy around Bond University semester changeover?",
        answer:
          "Yes — student and staff moves cluster around semester start and end dates, so we recommend booking 2–3 weeks ahead if your move falls in those windows.",
      },
      {
        question: "Is truck access easy in the newer Varsity Lakes streets?",
        answer:
          "Generally very easy — wide modern streets and driveways mean straightforward loading. Townhouse complexes just need a quick body-corporate check, which we handle in advance.",
      },
    ],
  },
  {
    slug: "helensvale",
    name: "Helensvale",
    region: "Gold Coast",
    intro:
      "Helensvale is the practical choice for families wanting Gold Coast life with an easy run back to Brisbane — the train station and M1 access make it one of our most frequent corridor drop-off points.",
    housing:
      "Established and newer family homes with double garages, plus townhouse complexes near Westfield Helensvale. Blocks tend to be generous, and loads often include boats, trailers or caravans stored at the side of the house.",
    access:
      "Wide suburban streets make truck access easy almost everywhere. The M1 and train station proximity mean this is often the fastest, most predictable leg of a Brisbane–Gold Coast corridor move.",
    popularRoutes: [
      { to: "Chermside", note: "the reverse northside-to-northside corridor run" },
      { to: "Carindale", note: "family-to-family eastern suburbs swap" },
      { to: "Coomera", note: "local moves to newer estates just north" },
    ],
    nearby: ["Coomera", "Oxenford", "Hope Island"],
    faqs: [
      {
        question: "Can you move boats, trailers or caravans stored at the property?",
        answer:
          "We can arrange transport for these alongside your household move — let us know what's parked at the side of the house when you book so it's included in the quote.",
      },
      {
        question: "Is Helensvale a common corridor destination?",
        answer:
          "Very — its M1 and train access make it one of the most popular landing points for Brisbane families moving to the Gold Coast, and one of our most efficient corridor runs.",
      },
    ],
  },
  {
    slug: "nerang",
    name: "Nerang",
    region: "Gold Coast",
    intro:
      "Nerang is inland Gold Coast — more affordable, a bit more space, and a steady stream of first-home buyers and growing families who want coast access without beachside prices.",
    housing:
      "A mix of older Queenslander-style homes, brick-and-tile family houses and newer estate developments further from the town centre. Blocks tend to be larger than beachside suburbs, often with sheds and workshop space that add to the load.",
    access:
      "Generally easy truck access on wide suburban streets. The main timing factor is Nerang Showgrounds event days, which occasionally affect local traffic — we check the calendar before locking in a date.",
    popularRoutes: [
      { to: "Sunnybank", note: "value-conscious families moving between the two cities" },
      { to: "Robina", note: "local upsizing toward the coast" },
      { to: "Carindale", note: "inland-to-inland corridor moves" },
    ],
    nearby: ["Carrara", "Mudgeeraba", "Advancetown"],
    faqs: [
      {
        question: "Do you move sheds and workshop contents in Nerang?",
        answer:
          "Yes — larger blocks here often come with a shed full of tools and equipment, which we quote for upfront once you tell us roughly what's in there.",
      },
      {
        question: "Does the Nerang Showgrounds calendar affect moving day?",
        answer:
          "Occasionally, on major event weekends — we check the calendar when confirming your date so the truck isn't caught in event traffic.",
      },
    ],
  },
  {
    slug: "coomera",
    name: "Coomera",
    region: "Gold Coast",
    intro:
      "Coomera is the fastest-growing pocket of the northern Gold Coast — new estates going up constantly near the theme parks, and a lot of our jobs here are brand-new-build handovers rather than older-home moves.",
    housing:
      "Predominantly new-build family homes in master-planned estates, many with display-home-style furniture and minimal wear. Some properties are still finishing landscaping on move-in day, which we factor into access planning.",
    access:
      "New estate streets are wide and easy for trucks, though display-village traffic and ongoing construction in parts of Coomera can affect specific streets — we check current road status before the day.",
    popularRoutes: [
      { to: "Sunnybank", note: "value-driven families moving from Brisbane's southside" },
      { to: "Helensvale", note: "local moves within the northern Gold Coast" },
      { to: "Chermside", note: "the reverse run back to Brisbane's north" },
    ],
    nearby: ["Helensvale", "Upper Coomera", "Pimpama"],
    faqs: [
      {
        question: "Do you handle new-build handover moves?",
        answer:
          "Yes — moving into a freshly completed home is common in Coomera, and we're careful with new paintwork, floors and skirting during the carry so the property stays pristine.",
      },
      {
        question: "Is truck access an issue in newer estates still under construction?",
        answer:
          "Occasionally on specific streets — we check current access and any construction traffic controls before your move so the day runs smoothly.",
      },
    ],
  },
  {
    slug: "tugun",
    name: "Tugun",
    region: "Gold Coast",
    intro:
      "Tugun is the quiet southern beach suburb right next to the airport — a favourite for people who want beach living without Surfers Paradise noise, and an easy, predictable move for our crews.",
    housing:
      "Beach houses and low-rise apartments a short walk from the sand, plus some newer developments near the highway. Properties tend to be smaller and simpler than further north, meaning generally straightforward loads.",
    access:
      "Quiet residential streets make truck access easy most of the year. Airport flight paths mean occasional noise but no real access impact — the main timing consideration is weekend beach traffic, which we simply load around.",
    popularRoutes: [
      { to: "Coolangatta", note: "one beach south, staying close to the border" },
      { to: "Currumbin", note: "one beach north for a bit more buzz" },
      { to: "New Farm", note: "the full corridor run back to riverside Brisbane" },
    ],
    nearby: ["Bilinga", "Coolangatta", "Currumbin"],
    faqs: [
      {
        question: "Is Tugun harder to service because it's next to the airport?",
        answer:
          "Not at all — access is straightforward and we regularly time moves around flight schedules for clients flying in or out the same day.",
      },
      {
        question: "Do you cover Tugun as part of standard Gold Coast pricing?",
        answer:
          "Yes — Tugun sits within our regular Gold Coast service area and is quoted the same fixed-price way as any other coastal suburb.",
      },
    ],
  },
];

export function getSuburb(slug: string): Suburb | undefined {
  return SUBURBS.find((s) => s.slug === slug);
}
