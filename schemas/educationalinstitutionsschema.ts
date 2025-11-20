const educationalinstitutionsschema={
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Educational institutions cleaning",
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
  "description": "We provide comprehensive cleaning solutions for schools, colleges, and universities. Our team ensures every classroom, hallway, and facility is thoroughly sanitized, creating a safe, healthy, and spotless environment for students and staff.",
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
        "unitText": "bedroom apartment"
      }
    },
    "availability": "https://schema.org/InStock"
  },
  "category": "Commercial Cleaning",
  "url": "https://yourcleaningservice.com/services/commercial/educationalinstitutions"
}
export default educationalinstitutionsschema