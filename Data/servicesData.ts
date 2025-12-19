const servicesData = [
  {
    title: "Residential",
    icon: { src: "/images/home.png", alt: "Residential cleaning icon" },
    link: "/services/residential/", 
    services: ["Regular Cleaning", "Deep Cleaning", "Moving Cleaning", "Post-Construction Cleaning"]
  },
  {
    title: "Short-Term Rentals",
    icon: { src: "/images/clock.png", alt: "Short-term rental icon" },
    link: "/services/shortTerm/",
    services: ["Turnover cleaning", "Inventory Management", "Laundry Service"]
  },
  {
    title: "Commercial",
    icon: { src: "/images/commercial.png", alt: "Commercial cleaning icon" },
    link: "/services/commercial/",
    services: ["Office Space", "End of Tenancy cleaning", "Educational Institutions", "Healthcare Settings"]
  },
  {
    title: "Special",
    icon: { src: "/images/covid.png", alt: "Other cleaning services icon" },
    link: "/services/special/",
    services: ["Organizing Help", "Hoarder Cleanup", ]
  }
];

// Helper to make slug-friendly URLs
const toSlug = (str: string) =>
  str.toLowerCase().replace(/[^a-z0-9]+/g, "");

// Map services to include full links using the category base link
const servicesDataWithLinks = servicesData.map(category => ({
  ...category,
  services: category.services.map(serviceName => ({
    name: serviceName,
    link: `${category.link}${toSlug(serviceName)}` // Automatically prepend base
  }))
}));

export default servicesDataWithLinks;
