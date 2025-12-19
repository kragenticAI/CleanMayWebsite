const postConstructionCleaningSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Post Construction and Renovation Cleaning",
  "provider": {
    "@type": "LocalBusiness",
    "@id": "https://yourcleaningservice.com/#organization",
    "name": "clean may", // Updated from PDF
    "image": "https://yourcleaningservice.com/logo.jpg", 
    "telephone": "(844) 242-9464", // Updated from PDF [cite: 8]
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Tampa Bay", // Updated to Headquarters location from PDF [cite: 71]
      "addressRegion": "FL",
      "addressCountry": "US"
    }
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Houston",
      "@id": "https://yourcleaningservice.com/locations/houston"
    },
    {
      "@type": "City",
      "name": "Sugar Land",
      "@id": "https://yourcleaningservice.com/locations/sugar-land"
    }
  ],
  "description": "Specialized cleaning service designed to thoroughly remove all dust, debris, and construction residue after a renovation or new build. We focus on deep cleaning, sanitizing surfaces, and preparing the space for occupancy, ensuring a safe and spotless finish after construction is complete.",
  "serviceOutput": "A clean, dust-free environment with removal of all post-construction debris, including wiping down walls, cleaning light fixtures, removing paint splatter, and vacuuming fine dust from all surfaces and air vents.",
  "offers": {
    "@type": "Offer",
    "priceCurrency": "USD",
    "price": "450.00", // Price placeholder, as construction cleaning is typically higher
    "priceSpecification": {
      "@type": "PriceSpecification",
      "price": "450.00",
      "priceCurrency": "USD",
      "eligibleQuantity": {
        "@type": "QuantitativeValue",
        "value": "1",
        "unitText": "standard renovation job"
      }
    },
    "availability": "https://schema.org/InStock"
  },
  "category": "Special Cleaning", // Categorized as Special Cleaning based on the PDF section [cite: 42]
  "url": "https://yourcleaningservice.com/services/special/postconstruction" // Updated URL
}

export default postConstructionCleaningSchema