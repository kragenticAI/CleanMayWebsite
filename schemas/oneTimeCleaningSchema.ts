const oneTimeCleaningSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "One-Time Cleaning Service",
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
  "description": "Flexible one-time cleaning service perfect for special occasions, seasonal cleaning, or when your home just needs a deep refresh. We clean kitchens, bathrooms, floors, living spaces, and high-touch areas to leave your home spotless and fresh.",
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
        "unitText": "standard home"
      }
    },
    "availability": "https://schema.org/InStock"
  },
  "category": "Residential Cleaning",
  "url": "https://yourcleaningservice.com/services/residential/onetimecleaning"
}

export default oneTimeCleaningSchema
