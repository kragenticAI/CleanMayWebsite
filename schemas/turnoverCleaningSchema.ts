const turnoverCleaningSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Short-Term Rental / Airbnb Turnover Service",
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
  "description": "Fast and reliable turnover service specializing in preparing short-term rentals and Airbnb properties between guests. This includes cleaning, sanitization, making beds with fresh linens, restocking essential supplies, and preparing the unit for a 5-star guest experience.",
  "serviceOutput": "A sparkling clean, fully sanitized, and guest-ready short-term rental unit. Service includes changing linens, laundering, towel management, restocking amenities, and ensuring all areas meet high hospitality standards.",
  "offers": {
    "@type": "Offer",
    "priceCurrency": "USD",
    "price": "169.00", // Price placeholder: Often based on speed and added tasks like laundry/restocking
    "priceSpecification": {
      "@type": "PriceSpecification",
      "price": "169.00",
      "priceCurrency": "USD",
      "eligibleQuantity": {
        "@type": "QuantitativeValue",
        "value": "1",
        "unitText": "standard unit turnover"
      }
    },
    "availability": "https://schema.org/InStock",
    "deliveryMethod": "https://schema.org/ScheduledDelivery"
  },
  "category": "Short-Term / Airbnb Turnover Service",
  "url": "https://yourcleaningservice.com/services/residential/turnoverservice"
}

export default turnoverCleaningSchema