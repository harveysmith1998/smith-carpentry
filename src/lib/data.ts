// -------------------------------------------------------------------
// Place your images in /public/images/ with these exact filenames.
// You supplied: logo.png, kitchen-1.jpg, feature-wall-1.jpg
// Additional high-quality Unsplash images are used as fallbacks.
// -------------------------------------------------------------------

export const COMPANY = {
  name:          "Smith Carpentry",
  tagline:       "Premium Carpentry & Joinery Across the UK",
  subtagline:
    "Expert craftsmanship delivering bespoke residential and commercial projects with precision, quality and attention to detail.",
  phone:      "07462 918476",
  email:      "smithcarpentryltd@outlook.com",
  address:    "Nottinghamshire, UK",
  whatsapp:   "447462918476",
  instagram:  "https://instagram.com/smith_carpentry_and_joinery",
  facebook:   "https://facebook.com/smithcarpentry",
  businessHours: [
    { day: "Monday – Friday", hours: "7:00am – 6:00pm" },
    { day: "Saturday",        hours: "8:00am – 4:00pm" },
    { day: "Sunday",          hours: "Emergency only"  },
  ],
};

export const STATS = [
  { value: 15,  suffix: "+", label: "Years Experience"   },
  { value: 500, suffix: "+", label: "Projects Completed" },
  { value: 450, suffix: "+", label: "Happy Clients"      },
  { value: 120, suffix: "+", label: "Commercial Projects" },
];

export const SERVICES = [
  {
    slug:        "shopfitting",
    title:       "Shopfitting",
    shortDesc:   "Complete commercial fit-outs for retail, offices, restaurants and hospitality venues.",
    description: "We deliver premium shopfitting solutions for commercial clients across the UK. From high-street retail to boutique restaurants, our team brings your vision to life with precision craftsmanship.",
    features:    ["Retail fit-outs", "Office interiors", "Restaurant & bar fit-outs", "Hospitality venues", "Complete refurbishments", "Bespoke fixtures & fittings"],
    image:       "/images/media-wall-1.jpg",
    gallery:     ["/images/media-wall-1.jpg",
                  "/images/media-wall-5.jpg",
                  "/images/media-wall-10.jpg",
                  "/images/commercial-1.jpg",
                  "/images/commercial-3.jpg",
                  "/images/commercial-5.jpg"],
    icon:        "🏪",
  },
  {
    slug:        "bespoke-carpentry",
    title:       "Bespoke Carpentry",
    shortDesc:   "Handcrafted media walls, alcove units, shelving and bespoke storage solutions.",
    description: "Our bespoke carpentry service transforms your living spaces with custom-made furniture and joinery. Every piece is designed and built to your exact specifications.",
    features:    ["Media walls", "Alcove units", "Floating shelving", "Bespoke cabinets", "Custom storage", "Feature walls"],
    image:       "/images/media-wall-41.jpg",
    gallery:     ["/images/media-wall-41.jpg",
                  "/images/media-wall-42.jpg",
                  "/images/media-wall-43.jpg",
                  "/images/bespoke-1.jpg",
                  "/images/bespoke-2.jpg",
                  "/images/bespoke-3.jpg"],
    icon:        "🪚",
  },
  {
    slug:        "garden-rooms",
    title:       "Garden Rooms",
    shortDesc:   "Fully insulated garden rooms, offices, gyms, studios and entertainment spaces.",
    description: "Our bespoke garden rooms are fully insulated, turnkey builds designed to extend your living or working space. From home offices to entertainment rooms — we handle everything.",
    features:    ["Fully insulated structures", "Home offices", "Garden gyms", "Art studios", "Entertainment rooms", "Turnkey builds"],
    image:       "/images/garden-kitchen-1.jpg",
    gallery:     ["/images/garden-kitchen-1.jpg",
                  "/images/garden-kitchen-2.jpg",
                  "/images/garden-room-52.jpg",
                  "/images/garden-room-53.jpg",
                  "/images/garden-room-15.jpg",
                  "/images/garden-room-18.jpg"],
    icon:        "🏡",
  },
  {
    slug:        "kitchens",
    title:       "Kitchens",
    shortDesc:   "Kitchen installations, bespoke designs, worktops, renovations and finishing.",
    description: "We design and install stunning kitchens that combine beauty with functionality. From bespoke shaker kitchens with marble islands to sleek handleless designs — every installation is delivered to the highest standard.",
    features:    ["Kitchen installation", "Bespoke shaker kitchens", "Handleless modern kitchens", "Quartz & marble worktops", "Island installation", "Appliance integration"],
    image:       "/images/kitchen-61.jpg",
    gallery:     ["/images/kitchen-61.jpg",
                  "/images/kitchen-62.jpg",
                  "/images/kitchen-63.jpg",
                  "/images/kitchen-64.jpg",
                  "/images/kitchen-65.jpg",
                  "/images/kitchen-66.jpg"],
    icon:        "🍳",
  },
  {
    slug:        "wardrobes",
    title:       "Wardrobes",
    shortDesc:   "Fitted, sliding, walk-in and bespoke wardrobe storage solutions.",
    description: "Our bespoke wardrobe solutions maximise every inch of your space. We design and build fitted, sliding, and walk-in wardrobes to the highest standard.",
    features:    ["Fitted wardrobes", "Sliding wardrobes", "Walk-in wardrobes", "Bespoke storage", "Dressing rooms", "Custom interiors"],
    image:       "/images/wardrobe-1.jpg",
    gallery:     ["/images/wardrobe-1.jpg",
                  "/images/wardrobe-2.jpg",
                  "/images/wardrobe-3.jpg",
                  "/images/wardrobe-4.jpg",
                  "/images/bespoke-desk-1.jpg",
                  "/images/under-stairs-1.jpg"],
    icon:        "🚪",
  },
  {
    slug:        "first-fix-carpentry",
    title:       "First Fix Carpentry",
    shortDesc:   "Timber framing, oak frame structures, stud walls, floor joists and structural carpentry.",
    description: "Our first fix carpentry service provides the structural backbone for any build. From traditional oak frame porches and entrance structures to modern stud partitions — we deliver solid, accurate work every time.",
    features:    ["Oak frame structures", "Timber framing", "Stud partition walls", "Floor joists & decking", "Structural beams", "Loft conversions"],
    image:       "/images/garden-room-3.jpg",
    gallery:     ["/images/garden-room-3.jpg",
                  "/images/garden-room-4.jpg",
                  "/images/garden-room-1.jpg",
                  "/images/garden-room-2.jpg",
                  "/images/commercial-10.jpg",
                  "/images/commercial-15.jpg"],
    icon:        "🔨",
  },
  {
    slug:        "second-fix-carpentry",
    title:       "Second Fix Carpentry",
    shortDesc:   "Doors, skirting, architraves, dado panelling, ironmongery and premium final finishes.",
    description: "The finish is everything. Our second fix carpentry service brings your project to completion with perfectly fitted doors, skirting, architraves, dado rail panelling and all the fine details that make the difference.",
    features:    ["Door hanging & fitting", "Skirting boards", "Architraves & casings", "Dado rail & wall panelling", "Ironmongery fitting", "Final finishing"],
    image:       "/images/staircase-3.jpg",
    gallery:     ["/images/staircase-3.jpg",
                  "/images/staircase-6.jpg",
                  "/images/staircase-9.jpg",
                  "/images/staircase-12.jpg",
                  "/images/staircase-15.jpg",
                  "/images/staircase-1.jpg"],
    icon:        "🪟",
  },
  {
    slug:        "staircases",
    title:       "Staircases",
    shortDesc:   "Staircase installation, refurbishments, dado panelling and oak frame structures.",
    description: "A statement staircase transforms any home. We design and install bespoke staircases — and bring them to life with second fix detailing including dado rail, wall panelling and quality ironmongery.",
    features:    ["New staircase installation", "Staircase refurbishments", "Dado rail & panelling", "Oak staircases", "Timber frame structures", "Handrail installation"],
    image:       "/images/staircase-1.jpg",
    gallery:     ["/images/staircase-1.jpg",
                  "/images/staircase-2.jpg",
                  "/images/staircase-4.jpg",
                  "/images/staircase-5.jpg",
                  "/images/staircase-7.jpg",
                  "/images/staircase-10.jpg"],
    icon:        "🪜",
  },
  {
    slug:        "pvc-windows-doors",
    title:       "PVC Windows & External Doors",
    shortDesc:   "Installation, replacement, composite doors, uPVC windows and energy efficient products.",
    description: "We supply and install the full range of PVC windows and external doors. Energy-efficient, secure and beautifully finished — installed to the highest standard every time.",
    features:    ["uPVC window installation", "Composite door fitting", "Window replacement", "French & bi-fold doors", "Energy-rated products", "Secure locking systems"],
    image:       "/images/garden-room-11.jpg",
    gallery:     ["/images/garden-room-11.jpg",
                  "/images/garden-room-12.jpg",
                  "/images/garden-room-13.jpg",
                  "/images/garden-room-19.jpg"],
    icon:        "🏠",
  },
  {
    slug:        "plasterboarding",
    title:       "Plasterboarding & Drylining",
    shortDesc:   "Metal stud, MF ceilings, dot & dab, boarding and fire rated systems.",
    description: "Our drylining service provides fast, accurate plasterboarding for new builds, renovations and commercial projects. We work to tight tolerances to ensure perfect flat finishes every time.",
    features:    ["Metal stud partitions", "MF ceiling systems", "Dot & dab bonding", "Full board & plaster", "Fire-rated systems", "Acoustic partitions"],
    image:       "/images/commercial-3.jpg",
    gallery:     ["/images/commercial-3.jpg",
                  "/images/commercial-6.jpg",
                  "/images/commercial-9.jpg",
                  "/images/commercial-12.jpg",
                  "/images/commercial-1.jpg",
                  "/images/commercial-2.jpg"],
    icon:        "🧱",
  },
];

export const TESTIMONIALS = [
  {
    name:    "James Richardson",
    role:    "Homeowner, London",
    text:    "Smith Carpentry transformed our home. The bespoke media wall and alcove units are absolutely stunning — the finish is flawless and Harvey's attention to detail is second to none.",
    rating:  5,
    image:   "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    project: "Bespoke Media Wall",
  },
  {
    name:    "Sarah Thompson",
    role:    "Interior Designer, Manchester",
    text:    "I've worked with many carpenters over the years, but Smith Carpentry stands out. Reliable, professional, and the quality of their joinery is exceptional. My clients are always delighted.",
    rating:  5,
    image:   "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
    project: "Kitchen & Joinery",
  },
  {
    name:    "Marcus Williams",
    role:    "Restaurant Owner, Birmingham",
    text:    "Harvey fitted out our entire restaurant — the booth seating, bar fronts, and bespoke shelving all look incredible. Delivered on time and within budget. Can't recommend highly enough.",
    rating:  5,
    image:   "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80",
    project: "Restaurant Shopfit",
  },
  {
    name:    "Emma Clarke",
    role:    "Property Developer, Leeds",
    text:    "We use Smith Carpentry across all our residential developments. First and second fix, staircases, kitchen installs — they do it all. Absolutely brilliant to work with.",
    rating:  5,
    image:   "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
    project: "Full Residential Development",
  },
  {
    name:    "David Patel",
    role:    "Homeowner, Bristol",
    text:    "Our new garden room is absolutely perfect. Fully insulated, beautifully finished and exactly what we wanted. Harvey's team were professional throughout and the quality is outstanding.",
    rating:  5,
    image:   "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
    project: "Garden Room",
  },
];

export const WHY_CHOOSE_US = [
  { icon: "🏆", title: "Award-Winning Quality",   description: "15+ years of delivering premium carpentry that exceeds client expectations on every project." },
  { icon: "🛡️", title: "Fully Insured",           description: "Full public liability and professional indemnity insurance for your complete peace of mind." },
  { icon: "📋", title: "Fixed Price Quotes",       description: "Transparent, detailed quotes with no hidden costs. What we quote is what you pay." },
  { icon: "⏰", title: "On Time, Every Time",      description: "We respect your time and schedule. Projects delivered on time without compromising quality." },
  { icon: "🤝", title: "Trusted by Hundreds",     description: "Over 450 satisfied clients across the UK — residential and commercial." },
  { icon: "✨", title: "Premium Finish",           description: "We obsess over the details. Every joint, every surface, every finish is to the highest standard." },
];

export const PORTFOLIO_ITEMS = [
  // Kitchens
  { id: "1",  title: "Handleless Grey Kitchen with Island",        category: "Kitchens",      image: "/images/kitchen-1.jpg",        description: "Sleek handleless grey kitchen with large island, quartz worktop and herringbone floor" },
  { id: "2",  title: "Kitchen Installation",                       category: "Kitchens",      image: "/images/kitchen-5.jpg",        description: "Full kitchen installation with integrated appliances and bespoke joinery" },
  { id: "3",  title: "Shaker Kitchen — Large Island",              category: "Kitchens",      image: "/images/kitchen-10.jpg",       description: "Bespoke shaker kitchen with large quartz island, herringbone floor and oak upper cabinets" },
  { id: "4",  title: "Shaker Kitchen — Skylight & Pendants",       category: "Kitchens",      image: "/images/kitchen-20.jpg",       description: "Shaker kitchen with vaulted ceiling, skylights, pendant lighting and marble island" },
  { id: "5",  title: "Kitchen — Quartz Island Detail",             category: "Kitchens",      image: "/images/kitchen-30.jpg",       description: "Quartz island worktop with integrated sink and premium appliances" },
  { id: "6",  title: "White Gloss Kitchen Installation",           category: "Kitchens",      image: "/images/kitchen-40.jpg",       description: "White high-gloss handleless kitchen with large format floor tiles and double oven" },
  { id: "7",  title: "Kitchen Renovation",                         category: "Kitchens",      image: "/images/kitchen-50.jpg",       description: "Full kitchen renovation with bespoke cabinets, island and integrated appliances" },
  { id: "8",  title: "Modern Kitchen — Evening Shoot",             category: "Kitchens",      image: "/images/kitchen-60.jpg",       description: "Contemporary kitchen with LED lighting, quartz worktops and herringbone floor" },

  // Staircases
  { id: "9",  title: "Oak Staircase — Glass Balustrade",           category: "Residential",   image: "/images/staircase-1.jpg",      description: "Solid oak staircase with glass balustrade panels — clean contemporary finish" },
  { id: "10", title: "Staircase — Glass & White Painted",          category: "Residential",   image: "/images/staircase-2.jpg",      description: "White painted staircase with glass balustrade panels and oak handrail" },
  { id: "11", title: "Oak Staircase — Twisted Metal Spindles",     category: "Residential",   image: "/images/staircase-3.jpg",      description: "Oak staircase with twisted black metal spindles and solid oak handrail" },
  { id: "12", title: "Staircase & Panel Moulding",                 category: "Residential",   image: "/images/staircase-4.jpg",      description: "Staircase with bespoke MDF panel moulding detail and painted handrail" },
  { id: "13", title: "White Staircase — Square Spindles",          category: "Residential",   image: "/images/staircase-5.jpg",      description: "White painted staircase with square-section spindles and oak newel cap" },
  { id: "14", title: "New Oak Staircase — Open Treads",            category: "Residential",   image: "/images/staircase-6.jpg",      description: "New oak open-tread staircase with glass balustrade, installed alongside oak door" },
  { id: "15", title: "Staircase Renovation",                       category: "Residential",   image: "/images/staircase-7.jpg",      description: "Complete staircase renovation with new treads, handrail and spindles" },
  { id: "16", title: "Staircase — Landing & Doors",                category: "Residential",   image: "/images/staircase-8.jpg",      description: "Staircase with landing second fix — oak doors and quality ironmongery" },

  // Media walls & bespoke joinery
  { id: "17", title: "Alcove Media Wall — Niche Lighting & Fire",  category: "Joinery",       image: "/images/media-wall-1.jpg",     description: "Bespoke alcove media wall with LED niche lighting and electric fire below TV" },
  { id: "18", title: "Stone-Effect Alcove Media Wall",             category: "Joinery",       image: "/images/media-wall-5.jpg",     description: "Media wall with stone-effect alcove niches, electric fire and TV recess" },
  { id: "19", title: "Media Wall — Stone Niches & Electric Fire",  category: "Joinery",       image: "/images/media-wall-10.jpg",    description: "Bespoke media wall with stone-effect recessed niches and panoramic electric fire" },
  { id: "20", title: "Bespoke Media Wall — Full Room",             category: "Joinery",       image: "/images/media-wall-15.jpg",    description: "Full room view showing bespoke media wall installation" },
  { id: "21", title: "Media Wall — Illuminated Shelving",          category: "Joinery",       image: "/images/media-wall-20.jpg",    description: "Media wall with illuminated open shelving and integrated electric fire" },
  { id: "22", title: "Bespoke Joinery — Feature Wall",             category: "Joinery",       image: "/images/media-wall-25.jpg",    description: "Bespoke feature wall with built-in joinery and recessed display niches" },
  { id: "23", title: "Media Wall — Contemporary Design",           category: "Joinery",       image: "/images/media-wall-30.jpg",    description: "Contemporary media wall with clean lines, push-to-open doors and TV recess" },
  { id: "24", title: "Bespoke Alcove Units",                       category: "Joinery",       image: "/images/media-wall-35.jpg",    description: "Bespoke alcove units with floating shelves and integrated storage below" },
  { id: "25", title: "Media Wall — Fireplace Feature",             category: "Joinery",       image: "/images/media-wall-40.jpg",    description: "Statement media wall with fireplace surround and built-in alcove storage" },

  // Garden Rooms
  { id: "26", title: "Garden Room — Dark Grey Cladding",           category: "Garden Rooms",  image: "/images/garden-room-7.jpg",    description: "Modern dark grey cladded garden room with anthracite bi-fold doors and gravel surround" },
  { id: "27", title: "Garden Room — Bi-fold Doors Open",           category: "Garden Rooms",  image: "/images/garden-room-10.jpg",   description: "Dark grey garden room with bi-fold doors fully open, timber steps and gravel" },
  { id: "28", title: "Garden Room — Exterior with Planting",       category: "Garden Rooms",  image: "/images/garden-room-8.jpg",    description: "Charcoal cladded garden room with rhododendron planting and gravel border" },
  { id: "29", title: "Garden Room — Interior Fit-Out",             category: "Garden Rooms",  image: "/images/garden-room-15.jpg",   description: "Garden room interior with white shiplap walls, recessed spotlights and hardwood floor" },
  { id: "30", title: "Garden Room — Interior with French Doors",   category: "Garden Rooms",  image: "/images/garden-room-18.jpg",   description: "Insulated garden room interior showing fitted shiplap, floor and French doors" },
  { id: "31", title: "Garden Room — Timber Summerhouse Build",     category: "Garden Rooms",  image: "/images/garden-room-4.jpg",    description: "Bespoke timber summerhouse with lean-to canopy, tiled roof and timber decking" },

  // Commercial / Drylining
  { id: "32", title: "Commercial Drylining — MF Ceiling",          category: "Commercial",    image: "/images/commercial-1.jpg",     description: "Large commercial space with MF ceiling grid and metal stud partition walls" },
  { id: "33", title: "Commercial Drylining — Partitions",          category: "Commercial",    image: "/images/commercial-3.jpg",     description: "Commercial drylining — plasterboard ceiling coffers and partitions in progress" },
  { id: "34", title: "Commercial Fit-Out — Drylining",             category: "Commercial",    image: "/images/commercial-5.jpg",     description: "Commercial interior fit-out with plasterboard partitions and MF ceiling" },
  { id: "35", title: "Commercial Drylining — Wide Angle",          category: "Commercial",    image: "/images/commercial-8.jpg",     description: "Large commercial drylining project — MF ceiling grid and plasterboard walls" },
  { id: "36", title: "Commercial — Metal Stud Framing",            category: "Commercial",    image: "/images/commercial-12.jpg",    description: "Commercial metal stud partition installation with plasterboard boarding" },
  { id: "37", title: "Retail Unit Fit-Out",                        category: "Commercial",    image: "/images/commercial-15.jpg",    description: "Retail unit first fix — metal stud partitions and plasterboard installation" },

  // Wardrobes
  { id: "38", title: "Over-Bed Fitted Wardrobes — Taupe",          category: "Wardrobes",     image: "/images/wardrobe-1.jpg",       description: "Bespoke over-bed fitted wardrobes with bridge unit and wall-mounted lighting" },
  { id: "39", title: "Fitted Bedroom Wardrobes — Blue Cushions",   category: "Wardrobes",     image: "/images/wardrobe-2.jpg",       description: "Full bedroom fitted wardrobe suite with bridge over bed and feature lighting" },
  { id: "40", title: "Loft Bedroom — Fitted Wardrobes",            category: "Wardrobes",     image: "/images/wardrobe-3.jpg",       description: "Loft bedroom fitted wardrobes and drawer units with dressing table" },
  { id: "41", title: "Loft Bedroom — Dressing Table & Drawers",    category: "Wardrobes",     image: "/images/wardrobe-4.jpg",       description: "Bespoke dressing table with round mirror and fitted drawer units in loft bedroom" },

  // Bespoke Joinery
  { id: "42", title: "Bespoke Desk & Overhead Storage",            category: "Joinery",       image: "/images/bespoke-desk-1.jpg",   description: "Wall-to-wall bespoke desk with LED strip under overhead cabinets" },
  { id: "43", title: "Dark Alcove Bookcases with TV Recess",        category: "Joinery",       image: "/images/bespoke-1.jpg",        description: "Bespoke dark stained bookcases either side of TV recess" },
  { id: "44", title: "Tall Dark Bookcase — Alcove Fit",             category: "Joinery",       image: "/images/bespoke-2.jpg",        description: "Tall bespoke dark bookcase fitted to alcove recess" },
  { id: "45", title: "Alcove Media Wall — LED & Fire",              category: "Joinery",       image: "/images/media-wall-41.jpg",    description: "Bespoke alcove media wall with stone inserts, LED niche lighting and fireplace" },
  { id: "46", title: "Alcove Units with LED Strip & Fire",          category: "Joinery",       image: "/images/media-wall-42.jpg",    description: "Fitted alcove units with LED lighting strip and electric fire below TV" },

  // Under-stairs
  { id: "47", title: "Under-Stairs Storage Unit",                  category: "Joinery",       image: "/images/under-stairs-1.jpg",   description: "Bespoke pull-out under-stairs storage shelving unit" },

  // Garden Kitchens
  { id: "48", title: "Outdoor Garden Kitchen — Lit Up",            category: "Garden Rooms",  image: "/images/garden-kitchen-1.jpg", description: "Bespoke outdoor garden kitchen with integrated appliances and downlighting" },
  { id: "49", title: "Garden Kitchen — External View",             category: "Garden Rooms",  image: "/images/garden-kitchen-2.jpg", description: "Garden kitchen outbuilding with open front and recessed spotlights" },
  { id: "50", title: "Garden Kitchen — Wider View",                category: "Garden Rooms",  image: "/images/garden-kitchen-3.jpg", description: "Garden kitchen with countertop, BBQ and sink — fully fitted outdoor room" },
  { id: "51", title: "Dark Grey Garden Room — Small",              category: "Garden Rooms",  image: "/images/garden-room-50.jpg",   description: "Small dark grey cladded garden room with mono pitch roof" },
  { id: "52", title: "Garden Room — Open Bi-Fold Doors",           category: "Garden Rooms",  image: "/images/garden-room-52.jpg",   description: "Dark grey garden room with open bi-fold doors and timber step surround" },

  // New Kitchens
  { id: "53", title: "Sage Green Kitchen — Pendant Lights",        category: "Kitchens",      image: "/images/kitchen-61.jpg",       description: "Sage green kitchen with filament pendants, oak upper cabinets and island" },
  { id: "54", title: "Grey Handleless Kitchen — Large Space",      category: "Kitchens",      image: "/images/kitchen-62.jpg",       description: "Large handleless grey kitchen with central island and integrated appliances" },
  { id: "55", title: "Handleless Kitchen — Grey Herringbone",      category: "Kitchens",      image: "/images/kitchen-63.jpg",       description: "Grey handleless kitchen with herringbone engineered wood floor" },
  { id: "56", title: "Dark Kitchen — Marble Island & LED Ceiling", category: "Kitchens",      image: "/images/kitchen-64.jpg",       description: "Dark navy kitchen with marble island, LED cove ceiling and pendant lights" },
  { id: "57", title: "White High Gloss Kitchen — Skylight",        category: "Kitchens",      image: "/images/kitchen-66.jpg",       description: "White high gloss handleless kitchen with roof lantern and large format tiles" },
  { id: "58", title: "Dark Bar Kitchen — White Marble Top",        category: "Kitchens",      image: "/images/kitchen-67.jpg",       description: "Dark navy bar/kitchen with white marble worktop and glass display cabinets" },
  { id: "59", title: "Shaker Kitchen — Island & Bench Seating",   category: "Kitchens",      image: "/images/kitchen-68.jpg",       description: "Light grey shaker kitchen with island, bench seating and vaulted ceiling" },
];

export const PORTFOLIO_CATEGORIES = ["All", "Kitchens", "Wardrobes", "Joinery", "Residential", "Garden Rooms", "Commercial"];

export const FAQS = [
  {
    question: "What areas do you cover?",
    answer:   "We cover the whole of the UK, with a primary focus on the Midlands, London, and the North of England. Travel costs may apply for projects outside a 50-mile radius.",
  },
  {
    question: "How do I get a quote?",
    answer:   "Simply contact us via the form, phone, or WhatsApp with your project details. We'll arrange a free site visit and provide a detailed, fixed-price quote within 48 hours.",
  },
  {
    question: "Are you fully insured?",
    answer:   "Yes — we carry full public liability insurance and professional indemnity insurance. Copies are available on request.",
  },
  {
    question: "How long does a typical project take?",
    answer:   "Timescales vary by project size. A bespoke fitted wardrobe typically takes 1–2 days, a kitchen 3–5 days, and larger commercial fit-outs are planned on a project-by-project basis.",
  },
  {
    question: "Do you provide a guarantee on your work?",
    answer:   "Absolutely. All our work comes with a 12-month workmanship guarantee. We stand behind everything we do.",
  },
  {
    question: "Can you work outside normal hours?",
    answer:   "We understand that some commercial projects need to be done outside trading hours. We're flexible and can accommodate early starts, late finishes, and weekend working.",
  },
];
