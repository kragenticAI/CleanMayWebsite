const deepCleaningSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Deep Cleaning Service",
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
  "description": "Thorough deep cleaning service that covers all areas of your home or office. We clean hard-to-reach spaces, high-touch surfaces, kitchen appliances, bathrooms, baseboards, and more to give your space a fresh, sanitized, and spotless finish.",
  "offers": {
    "@type": "Offer",
    "priceCurrency": "USD",
    "price": "249.00",
    "priceSpecification": {
      "@type": "PriceSpecification",
      "price": "249.00",
      "priceCurrency": "USD",
      "eligibleQuantity": {
        "@type": "QuantitativeValue",
        "value": "1",
        "unitText": "standard property"
      }
    },
    "availability": "https://schema.org/InStock"
  },
  "category": "Residential Cleaning",
  "url": "https://yourcleaningservice.com/services/residential/deepcleaning"
}

export default deepCleaningSchema
