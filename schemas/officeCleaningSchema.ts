const officeCleaningSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Office Cleaning",
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
  "description": "Professional office cleaning services designed for businesses of all sizes. We clean workstations, meeting rooms, restrooms, common areas, and high-touch surfaces to create a clean, productive, and healthy workspace.",
  "offers": {
    "@type": "Offer",
    "priceCurrency": "USD",
    "price": "149.00",
    "priceSpecification": {
      "@type": "PriceSpecification",
      "price": "149.00",
      "priceCurrency": "USD",
      "eligibleQuantity": {
        "@type": "QuantitativeValue",
        "value": "1",
        "unitText": "standard office space"
      }
    },
    "availability": "https://schema.org/InStock"
  },
  "category": "Commercial Cleaning",
  "url": "https://yourcleaningservice.com/services/commercial/officespace"
}

export default officeCleaningSchema
