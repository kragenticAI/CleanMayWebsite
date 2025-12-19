const recurringCleaningSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Recurring House Cleaning Service",
  "provider": {
    "@type": "LocalBusiness",
    "@id": "https://yourcleaningservice.com/#organization",
    "name": "Clean May", // Reverted to original template name
    "image": "https://yourcleaningservice.com/logo.jpg", 
    "telephone": "+1-713-XXX-XXXX", // Reverted to original template placeholder
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Houston", // Reverted to original template city
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
  "description": "Scheduled maintenance house cleaning service designed for regular upkeep, maintaining a consistent level of cleanliness in your home. This service focuses on core living areas, surfaces, bathrooms, and kitchens to ensure your home is always tidy and comfortable.",
  "serviceOutput": "A regularly maintained, clean, and organized home. Includes dusting, surface cleaning, sanitizing bathrooms and kitchens, and vacuuming and mopping main living areas, focusing on consistent, routine cleaning tasks.",
  "offers": {
    "@type": "Offer",
    "priceCurrency": "USD",
    "price": "149.00", // Placeholder: Adjusted for recurring service rate
    "priceSpecification": {
      "@type": "PriceSpecification",
      "price": "149.00",
      "priceCurrency": "USD",
      "eligibleQuantity": {
        "@type": "QuantitativeValue",
        "value": "1",
        "unitText": "standard visit"
      }
    },
    "availability": "https://schema.org/InStock",
    "deliveryMethod": "https://schema.org/ScheduledDelivery"
  },
  "category": "Residential Cleaning",
  "url": "https://yourcleaningservice.com/services/residential/recurringcleaning" 
}

export default recurringCleaningSchema