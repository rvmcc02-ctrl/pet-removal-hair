import { Product, CleaningTip } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'fursweep-roller-pro',
    name: 'FurSweep™ Electrostatic Fur Roller Pro',
    tagline: 'The zero-waste reusable roller that grabs stubborn embedded hair in seconds',
    price: 24.99,
    originalPrice: 34.99,
    rating: 4.9,
    reviewCount: 3420,
    category: 'rollers',
    surfaces: ['furniture', 'clothing', 'car'],
    bestForHair: ['long', 'short', 'double-coat', 'fine'],
    badge: 'Bestseller',
    inStock: true,
    image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=900&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=900&q=80',
    description: 'Stop buying disposable sticky tape rollers that wind up in landfills. The FurSweep Electrostatic Fur Roller creates micro-static friction that traps both fine cat hair and thick double-coat dog fur inside its self-emptying chamber with simple back-and-forth strokes.',
    features: [
      '100% Reusable & Eco-Friendly: No sticky refills, tape sheets, or batteries required',
      'Dual-Directional Nylon Micro-Fiber Velvet head creates strong static lift',
      'One-Click Pop-Open Waste Chamber for mess-free disposal directly into your trash',
      'Safe for delicate couch fabrics, velvet, microfiber, bed comforters, and wool coats',
      'Ergonomic grip handle designed for fatigue-free cleaning over large sectional sofas'
    ],
    specs: {
      'Material': 'Durable ABS body + high-density nylon electrostatic bristles',
      'Dimensions': '7.5" x 7.5" x 2.4"',
      'Weight': '6.4 oz (180g)',
      'Cleaning Method': 'Rinse velvet with damp cloth or wipe with micro-fiber cloth',
      'Refill Requirement': 'Zero (Lifetime reusable)'
    },
    howToUse: [
      'Roll back and forth in rapid, short motions across the fabric surface.',
      'The roller automatically flips its velvet pads and pushes gathered fur into the internal chamber.',
      'Press the quick-release catch button on the handle to open the rear dust door.',
      'Empty the compressed pet fur bundle straight into the trash can.'
    ],
    reviews: [
      {
        id: 'rev-1',
        author: 'Sarah Jenkins',
        petType: 'Two Golden Retrievers',
        rating: 5,
        date: '3 days ago',
        title: 'Literally pulled a whole puppy out of our dark couch!',
        comment: 'I vacuumed our velvet couch yesterday, thought it was clean, then ran this roller over it. The hair it pulled out was unbelievable. No more sticky tape rolls in our house.',
        verified: true
      },
      {
        id: 'rev-2',
        author: 'Marcus Vance',
        petType: 'Maine Coon Cat',
        rating: 5,
        date: '1 week ago',
        title: 'Essential for fine white cat hair',
        comment: 'Fine cat hair weaves into clothes like thread. This roller is the only thing that pulls it out of our black knit cardigans and car upholstery without snagging.',
        verified: true
      }
    ]
  },
  {
    id: 'carpet-rake-max',
    name: 'FurSweep™ Deep-Pile Carpet & Rug Fur Rake',
    tagline: 'Heavy-duty copper edge blade designed for deep carpet underlay fur extraction',
    price: 29.99,
    originalPrice: 42.00,
    rating: 4.8,
    reviewCount: 2180,
    category: 'rakes',
    surfaces: ['carpet'],
    bestForHair: ['double-coat', 'long', 'short'],
    badge: 'Must-Have',
    inStock: true,
    image: 'https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=900&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=900&q=80',
    description: 'Vacuums only suck up the top 20% of surface hair; the remaining 80% gets felted into carpet roots. The Deep-Pile Carpet Fur Rake uses precision-machined pure copper teeth that glide through carpet pile to dredge up deeply buried pet fur, human hair, and dander without damaging carpet fibers.',
    features: [
      'Pure Copper Scraper Blade with dual micro-teeth rows for maximum grip',
      'Telescopic 48-Inch Stainless Steel Handle so you clean standing up without knee strain',
      'Removable handheld head for stairs, closet rugs, and car trunk mats',
      'Restores carpet pile volume and freshness while dredging up ground-in fur balls',
      'Zero electricity needed; works even when the power is out'
    ],
    specs: {
      'Blade Material': 'High-purity solid copper & stainless steel frame',
      'Handle Length': 'Adjustable 32" to 48" telescopic pole',
      'Width': '12-inch wide rake head for rapid area rug coverage',
      'Carpet Compatibility': 'Loop pile, low-pile, high-pile, and wool area rugs (not recommended for knitted silk or loose woven rugs)'
    },
    howToUse: [
      'Assemble the telescopic pole to comfortable waist height.',
      'Hold the rake at a 45-degree angle against your carpet or area rug.',
      'Pull backwards in firm, short strokes toward yourself.',
      'Watch as hidden fur ribbons emerge into neat rolls that you simply pick up.'
    ],
    reviews: [
      {
        id: 'rev-3',
        author: 'David Rodriguez',
        petType: 'Siberian Husky & German Shepherd',
        rating: 5,
        date: '2 weeks ago',
        title: 'Shocking amount of hair from a vacuumed rug',
        comment: 'We used our $500 pet vacuum first. Then we used this rake. Filled an entire grocery bag with hair the vacuum had missed for months. Unbelievable tool.',
        verified: true
      }
    ]
  },
  {
    id: 'auto-detailer-blade',
    name: 'FurSweep™ Pro Detailer Rubber Blade & Crevice Tool',
    tagline: 'Triple-edge automotive rubber blade engineered for car seats and trunk liners',
    price: 18.99,
    originalPrice: 24.99,
    rating: 4.9,
    reviewCount: 1640,
    category: 'auto',
    surfaces: ['car', 'furniture'],
    bestForHair: ['short', 'double-coat', 'long'],
    badge: 'Pro Detailer',
    inStock: true,
    image: 'https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&w=900&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=900&q=80',
    description: 'Vehicle carpeting is notoriously stiff and woven, creating a Velcro effect for pet hair that defies even gas station high-power vacuums. The Pro Detailer Rubber Blade features 3 distinct silicone gear teeth that scrape short, stubborn needle hair from automotive fabric, headliners, and floor mats.',
    features: [
      '3 Specialized Blade Densities: Coarse teeth for fast sweeps, fine teeth for deep embedded needles, flat blade for smooth finishes',
      'Pointed corner tip reaches into cup holders, seat creases, and tight car floor channels',
      '100% Medical-Grade TPR Rubber: Guaranteed never to scratch plastic or vinyl trims',
      'Compact glove-box size: always ready after trips to the dog park or beach',
      'Waterproof and 100% washable under the tap with warm soapy water'
    ],
    specs: {
      'Material': 'High-density thermo-plastic rubber (TPR)',
      'Dimensions': '5.8" x 3.8" x 0.6"',
      'Weight': '3.2 oz',
      'Cleaning': 'Dishwasher safe / warm water rinse'
    },
    howToUse: [
      'Choose the coarse gear edge to sweep large surface hair into a pile.',
      'Use the medium gear teeth across seat seams and side bolsters.',
      'Use the sharp pointed corner to flick out hairs trapped between seat backrests and center consoles.'
    ],
    reviews: [
      {
        id: 'rev-4',
        author: 'Elena Rostova',
        petType: 'Boxer & French Bulldog',
        rating: 5,
        date: '1 month ago',
        title: 'Only thing that removes short prickly boxer hairs',
        comment: 'Short dog hairs get stuck in car upholstery like tiny arrows. This triangular tool easily grabs them without tearing the fabric. Cleaned my entire SUV in 15 minutes.',
        verified: true
      }
    ]
  },
  {
    id: 'laundry-fur-catchers',
    name: 'FurSweep™ Laundry Fur & Lint Catcher Discs (4-Pack)',
    tagline: 'Self-cleansing silicone discs that grab fur during washing and drying cycles',
    price: 16.99,
    originalPrice: 22.99,
    rating: 4.7,
    reviewCount: 1950,
    category: 'laundry',
    surfaces: ['laundry', 'clothing'],
    bestForHair: ['long', 'short', 'fine'],
    badge: 'Eco-Friendly',
    inStock: true,
    image: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=900&q=80',
    description: 'Tired of taking pet blankets out of the wash only to find them still covered in wet hair? Toss these ultra-tacky, flexible silicone discs into your washing machine and dryer. As water spins, their unique micro-tack surface collects loose fur, hair, and fuzz before it settles into the drain or fabric.',
    features: [
      'Set of 4 Reusable Discs: 2 for the wash cycle, 2 for the tumble dryer',
      'Hypoallergenic & Non-Toxic: 100% safe for baby clothes, sensitive dog skins, and all laundry detergents',
      'Protects your washing machine drain pump and hoses from expensive pet hair clogs',
      'Rinses completely clean under lukewarm water to restore stickiness for 500+ washes',
      'Gentle on wool, delicates, fleece dog beds, and duvet covers'
    ],
    specs: {
      'Pack Count': '4 Discs (2 Sunburst Orange, 2 Forest Emerald)',
      'Material': 'Flexible PU Gel silicone with naturally sticky surface tension',
      'Lifespan': 'Up to 3 years / 500+ wash cycles',
      'Care': 'Rinse clean with dish soap when coated with hair to renew tackiness'
    },
    howToUse: [
      'Place 2-4 discs directly on top of your dirty pet laundry inside the drum.',
      'Run normal wash cycle with your regular detergent (avoid excessive fabric softener).',
      'Transfer directly to dryer along with clothes to capture remaining airborne lint.',
      'Rinse discs under warm tap water to peel off gathered hair glob.'
    ],
    reviews: [
      {
        id: 'rev-5',
        author: 'Chloe Simmons',
        petType: 'Long-haired Persian & Ragdoll',
        rating: 5,
        date: '5 days ago',
        title: 'Pet blankets finally come out actually clean',
        comment: 'Before these, my cat blankets would emerge from the dryer with fur baked in. Now these little discs trap it all. Super easy to wash off under the tap.',
        verified: true
      }
    ]
  },
  {
    id: 'gentle-deshedding-glove',
    name: 'FurSweep™ Gentle Touch 255-Tip Deshedding Glove (Pair)',
    tagline: 'Remove loose undercoat at the source while your pet enjoys a soothing massage',
    price: 19.99,
    originalPrice: 26.99,
    rating: 4.9,
    reviewCount: 2890,
    category: 'grooming',
    surfaces: ['pets'],
    bestForHair: ['long', 'short', 'double-coat', 'fine'],
    badge: 'Top Rated',
    inStock: true,
    image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=900&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&w=900&q=80',
    description: 'The best way to eliminate pet hair around your home is catching it before it ever lands on your furniture. These dual-hand grooming gloves feature 255 enhanced silicone grooming tips that mimic your gentle caress, loosening dead undercoat while stimulating natural skin oils.',
    features: [
      'Left & Right Hand Pair Included with adjustable velcro wrist straps',
      '255 Flexible Silicone Nodules that reach deep undercoat without scratching delicate skin',
      'Peel-and-Toss Fur Web: Traps hair in a solid continuous layer that peels right off in one sheet',
      'Perfect for anxious pets who run away when they see metal wire slicker brushes',
      'Breathable mesh fabric back dries quickly and prevents sweaty hands during grooming sessions'
    ],
    specs: {
      'Glove Size': 'Universal fit with elastic velcro wrist band',
      'Bristle Count': '255 soft rounded silicone pins per glove',
      'Washing': 'Machine washable in gentle cycle or rinse clean',
      'Pet Suitability': 'Dogs, cats, bunnies, ferrets, and horses'
    },
    howToUse: [
      'Slip on both gloves and secure the wrist strap comfortably.',
      'Pet your dog or cat in long, relaxing strokes following the natural fur direction.',
      'Pay extra attention behind ears, under the chest, and along the flank.',
      'Once a solid layer forms, gently lift from the wrist edge and peel the whole fur coat sheet away.'
    ],
    reviews: [
      {
        id: 'rev-6',
        author: 'Liam Bennett',
        petType: 'Rescue Cat with brush anxiety',
        rating: 5,
        date: '2 weeks ago',
        title: 'My anxious rescue cat purrs the entire time',
        comment: 'He would hiss at standard wire brushes. With these gloves he thinks he is just receiving love and ear scritches. The amount of hair that peels off in one sheet is so satisfying.',
        verified: true
      }
    ]
  },
  {
    id: 'cyclone-mini-vac',
    name: 'FurSweep™ Cyclone Turbo Motorized Pet Hair Vacuum',
    tagline: 'High-torque motorized mini brush roll with 14,000Pa suction for pet emergencies',
    price: 64.99,
    originalPrice: 89.99,
    rating: 4.8,
    reviewCount: 940,
    category: 'vacuums',
    surfaces: ['furniture', 'car', 'carpet', 'clothing'],
    bestForHair: ['long', 'short', 'double-coat', 'fine'],
    badge: 'Pro Pick',
    inStock: true,
    image: 'https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&w=900&q=80',
    description: 'Bulky full-sized vacuums are a chore to haul out when pet hair builds up on stairs or car seats. The Cyclone Turbo features a dedicated motorized mini-beater bar that pulsates against cushions while 14,000Pa suction pulls fur directly into a washable HEPA filtration canister.',
    features: [
      'High-Speed Motorized Bristle Brush Bar beats out deeply trapped dander and fur',
      '14,000Pa Brushless Suction Motor powered by long-life rechargeable lithium battery (30 min runtime)',
      'Triple-Stage HEPA Filtration traps 99.97% of pet dander, pollen, and microscopic allergens',
      'Includes 3 quick-swap attachments: motorized brush, 2-in-1 crevice nozzle, and upholstery brush',
      'USB-C Fast Charging: Charge in your car or at home in under 2.5 hours'
    ],
    specs: {
      'Suction Power': '14,000 Pascals (Pa)',
      'Battery Life': '30+ minutes continuous runtime (Eco/Boost mode)',
      'Weight': '1.8 lbs ultra-lightweight',
      'Filter': 'Washable H13 True-HEPA filter (includes 2 extra replacements)',
      'Charging': 'USB Type-C 18W Fast Charge'
    },
    howToUse: [
      'Click the motorized pet hair head into the vacuum nozzle.',
      'Power on and glide slowly over couch cushions, stair treads, or car headrests.',
      'Twist off the transparent dust cup with one hand and tap fur ball into the trash.',
      'Rinse the HEPA filter with cold water once monthly and air dry.'
    ],
    reviews: [
      {
        id: 'rev-7',
        author: 'Jessica Chen',
        petType: 'Australian Shepherd & Border Collie',
        rating: 5,
        date: '3 weeks ago',
        title: 'The motorized head makes all the difference',
        comment: 'Regular handheld vacuums just suck air and leave hair behind. The rotating roller on this actually lifts the hair free. Best purchase I made this year.',
        verified: true
      }
    ]
  },
  {
    id: 'rubber-bristle-broom',
    name: 'FurSweep™ Multi-Surface Electrostatic Rubber Broom',
    tagline: 'Sweeps hardwood and carpets without sending dander airborne, with built-in squeegee',
    price: 32.99,
    originalPrice: 44.99,
    rating: 4.8,
    reviewCount: 1420,
    category: 'rakes',
    surfaces: ['carpet', 'furniture'],
    bestForHair: ['long', 'short', 'double-coat'],
    badge: 'Must-Have',
    inStock: true,
    image: 'https://images.unsplash.com/photo-1527362950785-f487a7c1fe48?auto=format&fit=crop&w=900&q=80',
    description: 'Traditional brooms with plastic bristles flick pet hair into the air where it floats back down onto your tables. The FurSweep Rubber Broom features natural rubber static bristles that act as a hair magnet on hardwood, tile, and laminate, plus a flip-side squeegee for liquid spills or low-pile rugs.',
    features: [
      '500+ Natural Static Rubber Bristles attract fur clumps without flying dust clouds',
      'Integrated Squeegee Blade on reverse side wipes windows, spills, and cleans rug fibers',
      '55-Inch Heavy Duty Steel Extension Handle reaches under low beds and couches',
      'Will not scratch luxury hardwood, laminate, or glazed porcelain tiles',
      '100% Washable: just spray off hair with garden hose or bathroom shower head'
    ],
    specs: {
      'Bristle Material': '100% natural vulcanized rubber',
      'Handle': '4-piece threaded heavy-gauge steel pole (55 inches max)',
      'Broom Head Width': '12.5 inches',
      'Squeegee Length': '12 inches seamless rubber'
    },
    howToUse: [
      'Use rubber bristle side with short, pulling motions on hard floors or carpets.',
      'Gather hair piles in the center of the room.',
      'Flip over to squeegee side to pull trapped hair out of runners and entrance mats.',
      'Rinse head with warm water after cleaning heavy shed areas.'
    ],
    reviews: [
      {
        id: 'rev-8',
        author: 'Tom Braddock',
        petType: 'Labrador & Golden Mix',
        rating: 5,
        date: '1 month ago',
        title: 'Leaves traditional brooms in the dust',
        comment: 'With regular brooms, yellow lab hair just flew everywhere. This rubber broom gathers it like a giant magnetic roll. Also brilliant on our low-pile hallway runner.',
        verified: true
      }
    ]
  },
  {
    id: 'pocket-velvet-swivel',
    name: 'FurSweep™ Travel Pocket Swivel Lint & Fur Brush',
    tagline: 'Dual-action rotating velvet brush for quick coat, blazer, and suit touch-ups',
    price: 12.99,
    originalPrice: 17.99,
    rating: 4.7,
    reviewCount: 880,
    category: 'clothing',
    surfaces: ['clothing'],
    bestForHair: ['fine', 'short', 'long'],
    badge: 'Bestseller',
    inStock: true,
    image: 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=900&q=80',
    description: 'Heading to an important meeting or dinner only to realize your black coat is covered in dog kisses and cat fur? This sleek travel brush features dense micro-directional velvet with an instant swivel button so you can brush left-to-right or right-to-left with natural wrist motion.',
    features: [
      'One-Push Swivel Button switches velvet grain direction instantly',
      'Gentle on Cashmere, Silk, Wool, and fine tailored fabrics',
      'Slim & Lightweight: tucks effortlessly into work bags, carry-ons, or glove compartments',
      'No sticky paper garbage: wipes clean in reverse direction over palm or scrap cloth',
      'Durable matte protective travel casing'
    ],
    specs: {
      'Material': 'Impact-resistant polycarbonate + directional red micro-velvet',
      'Dimensions': '9.5" x 2.2" x 1.1"',
      'Weight': '2.8 oz',
      'Action': '180-degree reversible head'
    },
    howToUse: [
      'Click the head direction so arrow matches your sweeping motion.',
      'Brush downward along lapels, sleeves, and pants.',
      'To clean, swipe brush in reverse direction across a scrap cloth or tissue to drop collected hair bundle.'
    ],
    reviews: [
      {
        id: 'rev-9',
        author: 'Amanda Sterling',
        petType: 'White Ragdoll Cat',
        rating: 5,
        date: '2 months ago',
        title: 'Saved my black suits',
        comment: 'I wear black blazers to court every day and have a fluffy white cat. This travel brush lives in my briefcase. Works 10x faster than lint rollers.',
        verified: true
      }
    ]
  }
];

export const CLEANING_TIPS: CleaningTip[] = [
  {
    id: 'tip-carpet-crosshatch',
    title: 'The Cross-Hatch Rake Technique for Buried Undercoat',
    surface: 'Carpets & Area Rugs',
    summary: 'Why pulling in just one direction leaves 40% of pet hair behind, and how 90-degree cross-raking frees embedded hair roots.',
    steps: [
      'First pass: Pull the Fur Rake in vertical straight lines toward yourself across a 3x3 foot section.',
      'Second pass: Rotate 90 degrees and rake horizontally across the exact same section.',
      'The alternating friction unlocks twisted fur balls trapped around carpet loops.',
      'Finish with your standard vacuum pass to lift loosened micro-dander.'
    ],
    recommendedToolId: 'carpet-rake-max',
    iconName: 'Sparkles'
  },
  {
    id: 'tip-microfiber-static',
    title: 'Discharging Static Electricity from Couches & Chairs',
    surface: 'Furniture & Sofas',
    summary: 'Static charge binds pet fur to synthetic microfiber like a magnet. Learn how to neutralize it before rolling.',
    steps: [
      'Lightly mist your couch with a 1:10 mixture of water and gentle fabric conditioner or distilled water.',
      'Wait 30 seconds for the moisture to neutralize static electrical bonds.',
      'Roll back and forth with the FurSweep Roller; the fur will ball up 3x faster without escaping.',
      'Allow fabric to air dry completely for a clean, odor-neutral couch.'
    ],
    recommendedToolId: 'fursweep-roller-pro',
    iconName: 'Zap'
  },
  {
    id: 'tip-dryer-first-trick',
    title: 'The 10-Minute "Dryer First" Laundry Secret',
    surface: 'Blankets & Clothing',
    summary: 'Never put hair-covered pet blankets straight into the wash! Wet fur turns into sticky wet papier-mâché.',
    steps: [
      'Toss dry pet bedding into your tumble dryer on "No Heat" (Air Fluff) for 10 minutes with 2 Fur Catcher discs.',
      'The tumbling motion and centrifugal air blow 85% of dry hair directly into the dryer lint trap.',
      'Now transfer to the washing machine — your clothes get cleaner, and your drain pipes never clog!',
      'Add the silicone discs into the final wash cycle for any remaining stray strands.'
    ],
    recommendedToolId: 'laundry-fur-catchers',
    iconName: 'Shirt'
  },
  {
    id: 'tip-car-velcro-hair',
    title: 'Conquering Stiff Needle Hair in Car Trunks and Footwells',
    surface: 'Car Interiors',
    summary: 'Short dog hairs (French Bulldogs, Labs, Pointers) pierce automotive needle-punch carpet. Here is the detailer secret.',
    steps: [
      'Vacuum the loose dirt and gravel first so you do not drag grit across fabrics.',
      'Use the coarse edge of the Pro Detailer Blade at a 30-degree shallow angle to coax needles out.',
      'Form gathered hair into neat focal lines, then pinch up with gloved hands.',
      'Use the pointed crevice tip along seat rails and center console seams.'
    ],
    recommendedToolId: 'auto-detailer-blade',
    iconName: 'Car'
  }
];
