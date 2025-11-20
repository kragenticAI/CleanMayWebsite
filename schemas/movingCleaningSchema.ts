const movingCleaningSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Move-In / Move-Out Cleaning",
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
  "description": "Professional moving cleaning service designed for both move-in and move-out situations. We deep clean kitchens, bathrooms, appliances, floors, walls, and all living areas to ensure the property is spotless for new occupants or final inspection.",
  "offers": {
    "@type": "Offer",
    "priceCurrency": "USD",
    "price": "199.00",
    "priceSpecification": {
      "@type": "PriceSpecification",
      "price": "199.00",
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
  "url": "https://yourcleaningservice.com/services/residential/movingcleaning"
}

export default movingCleaningSchema
