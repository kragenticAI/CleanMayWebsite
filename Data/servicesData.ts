// const servicesData = [
//     {
//       title: "Residential",
//       icon: { src: "/images/home.png", alt: "Residential cleaning icon" },
//       link: "/service/residential/deepcleaning",
//       services: [
//         "Regular Cleaning",
//         "Deep Cleaning",
//         "Moving Cleaning",
//         "Post-Construction Cleaning"
//       ]
//     },
//     {
//       title: "Short-Term Rentals",
//       icon: { src: "/images/clock.png", alt: "Short-term rental icon" },
//       link: "/service/shortTerm/turnovercleaning",
//       services: [
//         "Turnover Service",
//         "Inventory Management",
//         "Laundry Service"
//       ]
//     },
//     {
//       title: "Commercial",
//       link: "/service/commercial/endoftenancycleaning",
//       icon: { src: "/images/commercial.png", alt: "Commercial cleaning icon" },
//       services: [
//         "Office Spaces",
//         "End of Tenancy",
//         "Educational Institutions",
//         "Healthcare Settings"
//       ]
//     },
//     {
//       title: "Special",
//         link: "/service/special/hoardercleanup",
//       icon: { src: "/images/covid.png", alt: "Other cleaning services icon" },
//       services: [
//         "Organizing Help",
//         "Hoarder Cleanup",
//         "Disinfection",
//         "Healthcare Settings"
//       ]
//     }
//   ];
//   export default servicesData;



const servicesData = [
  {
    title: "Residential",
    icon: { src: "/images/home.png", alt: "Residential cleaning icon" },
    link: "/service/residential/deepcleaning",
    services: [
      { name: "Regular Cleaning", href: "/service/residential/regularcleaning" },
      { name: "Deep Cleaning", href: "/service/residential/deepcleaning" },
      { name: "Moving Cleaning", href: "/service/residential/movingcleaning" },
      { name: "Post-Construction Cleaning", href: "/service/residential/postconstructioncleaning" }
    ]
  },

  {
    title: "Short-Term Rentals",
    icon: { src: "/images/clock.png", alt: "Short-term rental icon" },
    link: "/service/shortTerm/turnovercleaning",
    services: [
      { name: "Turnover Service", href: "/service/shortTerm/turnovercleaning" },
      { name: "Inventory Management", href: "/service/shortTerm/inventorymanagement" },
      { name: "Laundry Service", href: "/service/shortTerm/laundryservice" }
    ]
  },

  {
    title: "Commercial",
    icon: { src: "/images/commercial.png", alt: "Commercial cleaning icon" },
    link: "/service/commercial/endoftenancycleaning",
    services: [
      { name: "Office Spaces", href: "/service/commercial/officespace" },
      { name: "End of Tenancy", href: "/service/commercial/endoftenancycleaning" },
      { name: "Educational Institutions", href: "/service/commercial/educationcleaning" },
      { name: "Healthcare Settings", href: "/service/commercial/healthcarecleaning" }
    ]
  },

  {
    title: "Special",
    icon: { src: "/images/covid.png", alt: "Other cleaning services icon" },
    link: "/service/special/hoardercleanup",
    services: [
      { name: "Organizing Help", href: "/service/special/organizinghelp" },
      { name: "Hoarder Cleanup", href: "/service/special/hoardercleanup" },
      { name: "Disinfection", href: "/service/special/disinfection" },
      { name: "Healthcare Settings", href: "/service/special/healthcaresettings" }
    ]
  }
];

export default servicesData;
