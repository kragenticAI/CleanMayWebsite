const hoarderCleanupSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Hoarder Cleanup and Organization",
  "provider": {
    "@type": "LocalBusiness",
    "@id": "https://yourcleaningservice.com/#organization",
    "name": "Clean May", 
    "image": "https://yourcleaningservice.com/logo.jpg", 
    "telephone": "+1-713-XXX-XXXX", 
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Houston", 
      "addressRegion": "TX",
      "postalCode": "77001",
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
  "description": "Specialized, confidential, and compassionate cleanup service for situations involving excessive clutter and hoarding. This service includes safe biohazard remediation, disposal of bulk waste, deep cleaning, and full property restoration to habitable condition.",
  "serviceOutput": "A completely cleared, cleaned, and sanitized property ready for use. Includes debris removal, deep cleaning, disinfection, and organization of remaining items.",
  "offers": {
    "@type": "Offer",
    "priceCurrency": "USD",
    "price": "Custom Estimate", // Hoarder cleanup requires a custom quote
    "priceSpecification": {
      "@type": "PriceSpecification",
      "price": "Custom Estimate",
      "priceCurrency": "USD",
      "valueAddedTaxIncluded": false,
      "description": "Price varies significantly based on the severity of the hoarding condition and property size. Contact us for a detailed estimate."
    },
    "availability": "https://schema.org/InStock"
  },
  "category": "Special Cleaning", // Categorized as Special Cleaning based on the PDF section
  "url": "https://yourcleaningservice.com/services/special/hoardercleanup" // Updated URL
}

export default hoarderCleanupSchema