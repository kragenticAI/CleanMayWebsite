// import { faqs , Sections } from './locationsData';
/// --- TypeScript Types ---

// Type for a single neighborhood
export interface LocationNeighborhood {
  name: string;
  href: string;
  latitude?: string;
  longtitude?: string;
}

export interface Sections{
  heading : string;
  content : string;
}

export interface faqs{
  question: string;
  answer : string;
}


// Type for a single city
export interface LocationCity {
  name: string;
  href: string;
  latitude: string;
  longtitude: string;

  // Nested neighborhoods (OPTION 1)
  neighborhoods?: LocationNeighborhood[];
}

// Type for a single state
export interface LocationState {
  stateName: string;
  cities: LocationCity[];
  sections : Sections[];
  faqs : faqs[];
}

// Main locations object
export interface LocationsMenu {
  [stateCode: string]: LocationState;
   
}


// --- Data ---

export const locationsMenu: LocationsMenu = {
  TX: {
    stateName: 'Texas',
    cities: [
      { name: 'The Woodlands', href: '/locations/tx/the-woodlands', latitude: "30.1658", longtitude: "-95.4613" ,
              neighborhoods: [
              { name: "Creekside Park", href: "/locations/tx/the-woodlands/creekside-park" },
              { name: "Alden Bridge", href: "/locations/tx/the-woodlands/alden-bridge" },
              { name: "Sterling Ridge", href: "/locations/tx/the-woodlands/sterling-ridge" },
              { name: "Panther Creek", href: "/locations/tx/the-woodlands/panther-creek" },
              { name: "Grogan's Mill", href: "/locations/tx/the-woodlands/grogan-s-mill" }
            ]
       },
      { name: 'Houston', href: '/locations/tx/houston', latitude: "29.7604", longtitude: "-95.3698" ,
              neighborhoods: [
                { name: "River Oaks", href: "/locations/tx/houston/river-oaks" },
                { name: "Memorial", href: "/locations/tx/houston/memorial" },
                { name: "Tanglewood", href: "/locations/tx/houston/tanglewood" },
                { name: "Heights", href: "/locations/texas/houston/heights" },
                { name: "Montrose", href: "/locations/texas/houston/montrose" },
                { name: "Galleria", href: "/locations/texas/houston/galleria" },
                { name: "Energy Corridor", href: "/locations/texas/houston/energy-corridor" },
                { name: "Clear Lake", href: "/locations/texas/houston/clear-lake" },
                { name: "Meyerland", href: "/locations/tx/houston/meyerland" },
                { name: "Rice Village", href: "/locations/tx/houston/rice-village" }
              ]
      },
      { name: 'Katy', href: '/locations/tx/katy', latitude: "29.7858", longtitude: "-95.8245" ,
              neighborhoods: [
                { name: "Cinco Ranch", href: "/locations/tx/katy/cinco-ranch" },
                { name: "Grand Lakes", href: "/locations/tx/katy/grand-lakes" },
                { name: "Cross Creek Ranch", href: "/locations/tx/katy/cross-creek-ranch" }
              ]
       },
      { name: 'Sugar Land', href: '/locations/tx/sugar-land', latitude: "29.6197", longtitude: "-95.6349",
              neighborhoods: [
                { name: "Greatwood", href: "/locations/tx/sugar-land/greatwood" },
                { name: "First Colony", href: "/locations/tx/sugar-land/first-colony" },
                { name: "Telfair", href: "/locations/tx/sugar-land/telfair" }
              ]
       },
      { name: 'Cypress', href: '/locations/tx/cypress', latitude: "29.9691", longtitude: "-95.6972" ,
              neighborhoods: [
                { name: "Bridgeland", href: "/locations/tx/cypress/bridgeland" },
                { name: "Towne Lake", href: "/locations/tx/cypress/towne-lake" },
                { name: "Fairfield", href: "/locations/tx/cypress/fairfield" }
              ]
       },
      { name: 'Spring', href: '/locations/tx/spring', latitude: "30.0799", longtitude: "-95.4172" },
      { name: 'Pearland', href: '/locations/tx/pearland', latitude: "29.5636", longtitude: "-95.2860" ,
              neighborhoods: [
                { name: "Shadow Creek Ranch", href: "/locations/tx/pearland/shadow-creek-ranch" },
                { name: "Silverlake", href: "/locations/tx/pearland/silverlake" }
              ]
      },
      { name: 'Friendswood', href: '/locations/tx/friendswood', latitude: "29.5294", longtitude: "-95.2010" },
      { name: 'League City', href: '/locations/tx/league-city', latitude: "29.5075", longtitude: "-95.0949" ,
              neighborhoods: [
                { name: "Tuscan Lakes", href: "/locations/tx/league-city/tuscan-lakes" }
              ]
       },
      { name: 'Humble', href: '/locations/tx/humble', latitude: "29.9988", longtitude: "-95.2622" , 
                neighborhoods: [
                  { name: "Kingwood", href: "/locations/tx/humble/kingwood" },
                  { name: "Atascocita", href: "/locations/tx/humble/atascocita" }
                ]
       },
      { name: 'Missouri City', href: '/locations/tx/missouri-city', latitude: "29.6186", longtitude: "-95.5377",               neighborhoods: [
                { name: "Sienna Plantation", href: "/locations/tx/missouri-city/sienna-plantation" }
              ]
       },
      { name: 'West University Place', href: '/locations/tx/west-university-place', latitude: "29.7170", longtitude: "-95.4337" },
      { name: 'Bellaire', href: '/locations/tx/bellaire', latitude: "29.7058", longtitude: "-95.4588" },
      { name: 'Southside Place', href: '/locations/tx/southside-place', latitude: "29.7077", longtitude: "-95.4383" },
      { name: 'Magnolia', href: '/locations/tx/magnolia', latitude: "30.2094", longtitude: "-95.7519" },
      { name: 'Tomball', href: '/locations/tx/tomball', latitude: "30.0972", longtitude: "-95.6161" },
      { name: 'Richmond', href: '/locations/tx/richmond', latitude: "29.5822", longtitude: "-95.7608" },
      { name: 'Rosenberg', href: '/locations/tx/rosenberg', latitude: "29.5601", longtitude: "-95.8086" },
      { name: 'Fulshear', href: '/locations/tx/fulshear', latitude: "29.6941", longtitude: "-95.8994" },
      { name: 'Stafford', href: '/locations/tx/stafford', latitude: "29.6161", longtitude: "-95.5577" },
      { name: 'Webster', href: '/locations/tx/webster', latitude: "29.5377", longtitude: "-95.1183" },
      { name: 'Nassau Bay', href: '/locations/tx/nassau-bay', latitude: "29.5441", longtitude: "-95.0891" },
      { name: 'Seabrook', href: '/locations/tx/seabrook', latitude: "29.5641", longtitude: "-95.0255" },
      { name: 'Kemah', href: '/locations/tx/kemah', latitude: "29.5391", longtitude: "-95.0205" },
      { name: 'Clear Lake Shores', href: '/locations/tx/clear-lake-shores', latitude: "29.5402", longtitude: "-95.0313" },
      { name: 'Shenandoah', href: '/locations/tx/shenandoah', latitude: "30.1774", longtitude: "-95.4519" },
      { name: 'Oak Ridge North', href: '/locations/tx/oak-ridge-north', latitude: "30.1606", longtitude: "-95.4697" },
      { name: 'Jersey Village', href: '/locations/tx/jersey-village', latitude: "29.8880", longtitude: "-95.5638" },
      { name: 'Conroe', href: '/locations/tx/conroe', latitude: "30.3119", longtitude: "-95.4561" },
      { name: 'Galveston', href: '/locations/tx/galveston', latitude: "29.3013", longtitude: "-94.7977" },
      { name: 'Dickinson', href: '/locations/tx/dickinson', latitude: "29.4608", longtitude: "-95.0513" },
      { name: 'Alvin', href: '/locations/tx/alvin', latitude: "29.4238", longtitude: "-95.2353" },
      { name: 'Manvel', href: '/locations/tx/manvel', latitude: "29.4627", longtitude: "-95.3577" },
      { name: 'Santa Fe', href: '/locations/tx/santa-fe', latitude: "29.3852", longtitude: "-95.0977" },
      { name: 'La Marque', href: '/locations/tx/la-marque', latitude: "29.3680", longtitude: "-94.9719" }
    ],
    sections: [
      {
        heading: "Professional House Cleaning Services Across tx",
        content:
          "Clean May proudly delivers reliable, high-quality cleaning services throughout tx. From busy metropolitan areas like Houston and Dallas to family-oriented suburbs such as The Woodlands, Katy, and Sugar Land, our trained professionals are dedicated to making every home look spotless, refreshed, and beautifully maintained. With flexible scheduling, eco-friendly supplies, and consistent quality you can trust, Clean May is the top choice for homeowners across the Lone Star State."
      },
      {
        heading: "Why Texas Homeowners Choose Clean May",
        content:
          "Texas families and professionals choose Clean May because of our commitment to quality, transparency, and convenience. Our highly trained cleaners follow detailed checklists, use safe and effective eco-friendly products, and pay attention to the small details that make a home feel truly clean. Whether you need recurring housekeeping, deep cleaning, move-in/move-out cleaning, Airbnb turnovers, or emergency last-minute service, Clean May offers dependable solutions tailored to your schedule and lifestyle."
      },
      {
        heading: "Clean May House Cleaning Services in Texas",
        content:
          "Clean May proudly serves homeowners across the state of Texas, including Houston, The Woodlands, Dallas, Austin, San Antonio, Katy, Cypress, Spring, and more. Wherever you’re located in Texas, our team brings the same level of care, professionalism, and reliability to your home. From apartments and condos to large single-family homes, our service plans are designed to suit both everyday needs and special cleaning requests."
      },
      {
        heading: "Expert Texas Cleaning & Home Care Services",
        content:
          "At Clean May, we provide everything from routine housekeeping to full deep cleaning. Whether you are hosting guests, preparing a property for sale, or just want your home to feel fresh again, our teams arrive fully equipped and ready to deliver exceptional results. We specialize in dust removal, sanitization, bathroom and kitchen deep cleaning, baseboard polishing, appliance detailing, and full-house organization support. We ensure every cleaning is thorough, consistent, and satisfaction-guaranteed."
      },
      {
        heading: "Residential House Cleaning Services You Can Trust",
        content:
          "Clean May understands that every household has unique needs. That’s why we offer highly customizable residential cleaning services across Texas. We handle everything — from routine weekly or biweekly visits to once-off deep cleans and seasonal refreshes. Our cleaners follow structured cleaning systems to cover all high-touch areas, surfaces, floors, fixtures, and hidden spaces that accumulate dust and grime. With Clear communication, trustworthy staff, and dependable follow-up, Clean May has become a preferred choice for families across Texas."
      },
      {
        heading: "Move-In and Move-Out Cleaning Services",
        content:
          "Moving in or out of a home can be overwhelming — but your cleaning doesn’t have to be. Clean May provides detailed move-in and move-out cleaning tailored to Texas homeowners, renters, realtors, and landlords. We prepare properties for new residents by tackling tough buildup, sanitizing bathrooms and kitchens, scrubbing floors, cleaning interiors of appliances, wiping all surfaces, and ensuring the entire home is move-ready. Our move services help renters secure deposits and help sellers present spotless homes to buyers."
      },
      {
        heading: "Deep Cleaning Services for Texas Homes",
        content:
          "Our deep cleaning service is ideal for homes needing extra attention. Whether it’s seasonal cleaning, post-renovation dust, or simply a long-overdue refresh, Clean May’s deep cleaning removes hidden dirt, grime, and buildup from often-overlooked areas. We scrub baseboards, detail appliances, wipe wall marks, sanitize high-touch surfaces, remove stuck-on residue, clean behind furniture, and leave your home feeling revived. Many Texas homeowners schedule deep cleaning quarterly or before holidays and events."
      },
      {
        heading: "Eco-Friendly and Pet-Safe Cleaning Options",
        content:
          "Clean May uses environmentally friendly, non-toxic cleaning products that are safe for families, children, and pets — without compromising on performance. Texas homeowners appreciate our commitment to creating healthier indoor environments and reducing chemical exposure. We offer green cleaning options at no extra cost and ensure every product is professional-grade and proven to clean effectively."
      },
      {
        heading: "Same-Day and Emergency Cleaning in Texas",
        content:
          "Life happens — surprise guests, events, spills, last-minute showings, or unexpected messes. Clean May provides same-day and next-day cleaning services across many Texas cities when availability allows. Our rapid-response teams can help restore order quickly so your home looks presentable and refreshed. Simply contact us to check same-day availability in your area."
      },
      {
        heading: "Exclusive Cleaning Specials for Texas Residents",
        content:
          "Texas homeowners can take advantage of Clean May’s ongoing promotions, including first-time customer discounts, recurring-service savings, and seasonal offers. We believe professional cleaning should be affordable, accessible, and high-value. Our pricing is transparent, upfront, and free from hidden fees. Whether you need a one-time service or recurring visits, Clean May offers flexible packages designed to meet your needs and budget."
      }
    ],

    faqs: [
      {
        question: "How much does house cleaning cost in Texas?",
        answer:
          "House cleaning prices in Texas depend on your home's size, condition, and the type of cleaning you choose. Deep cleanings and move-related cleanings take more time and cost more than standard maintenance visits. Clean May offers transparent, competitive pricing with no hidden fees. Contact us for a customized quote based on your home’s layout and needs."
      },
      {
        question: "Do Clean May cleaners bring their own supplies?",
        answer:
          "Yes. Our cleaners arrive fully equipped with professional cleaning tools, eco-friendly cleaning products, microfiber cloths, disinfectants, mops, vacuums, and all materials needed to complete your service."
      },
      {
        question: "Are your cleaners background-checked?",
        answer:
          "Absolutely. Every Clean May cleaner is background-checked, vetted, trained, and insured. We prioritize trust and safety across all Texas homes we serve."
      },
      {
        question: "Can I schedule recurring cleaning services?",
        answer:
          "Yes. We offer weekly, biweekly, and monthly recurring plans depending on your lifestyle and cleaning needs. Recurring customers also receive exclusive discounted rates."
      },
      {
        question: "Is same-day cleaning available in Texas?",
        answer:
          "Clean May offers same-day cleaning depending on team availability in your city. Contact us to check open schedule slots near you."
      }
    ]

  },

};