const healthcareCleaningSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Healthcare  Cleaning",
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
  "description": "Professional healthcare cleaning services for hospitals, clinics, urgent care centers, medical offices, and surgical facilities. We follow strict sanitation standards to ensure a sterile, hygienic, and safe environment for patients and healthcare staff.",
  "offers": {
    "@type": "Offer",
    "priceCurrency": "USD",
    "price": "299.00",
    "priceSpecification": {
      "@type": "PriceSpecification",
      "price": "299.00",
      "priceCurrency": "USD",
      "eligibleQuantity": {
        "@type": "QuantitativeValue",
        "value": "1",
        "unitText": "standard medical facility"
      }
    },
    "availability": "https://schema.org/InStock"
  },
  "category": "Commercial Cleaning",
  "url": "https://yourcleaningservice.com/services/commercial/healthcaresettings"
}

export default healthcareCleaningSchema
