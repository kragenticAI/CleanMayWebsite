const endOfTenancyCleaningSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "End of Tenancy Cleaning",
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
  "description": "Professional end of tenancy cleaning service designed to help tenants, landlords, and property managers ensure the property is spotless for final inspection. We deep clean kitchens, bathrooms, appliances, carpets, and all living spaces to meet move-out standards.",
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
        "unitText": "standard apartment"
      }
    },
    "availability": "https://schema.org/InStock"
  },
  "category": "commercial Cleaning",
  "url": "https://yourcleaningservice.com/services/commercial/endoftenancycleaning"
}

export default endOfTenancyCleaningSchema
