const regularCleaningSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Regular Cleaning Service", // Service name updated
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
  "description": "A one-time, standard cleaning service focusing on the daily maintenance and tidiness of your home. We clean core living areas, surfaces, bathrooms, and kitchens to provide a comfortable and orderly environment.",
  "serviceOutput": "A clean and organized space with wiped-down surfaces, sanitized bathrooms, and vacuumed/mopped floors. This is a maintenance-level clean and does not include the exhaustive, deep tasks performed in a Deep Cleaning.",
  "offers": {
    "@type": "Offer",
    "priceCurrency": "USD",
    "price": "189.00", 
    "priceSpecification": {
      "@type": "PriceSpecification",
      "price": "189.00",
      "priceCurrency": "USD",
      "eligibleQuantity": {
        "@type": "QuantitativeValue",
        "value": "1",
        "unitText": "standard visit"
      }
    },
    "availability": "https://schema.org/InStock"
  },
  "category": "Residential Cleaning",
  "url": "https://yourcleaningservice.com/services/residential/regularcleaning" // URL updated for clarity
}

export default regularCleaningSchema