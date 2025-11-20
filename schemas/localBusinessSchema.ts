
const localBusinessSchema={
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://yourcleaningservice.com/#organization",
  "name": "Clean May",
  "image": "https://yourcleaningservice.com/logo.jpg",
  "logo": "https://yourcleaningservice.com/logo.jpg",
  "url": "https://yourcleaningservice.com",
  "telephone": "+1-713-XXX-XXXX",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Main Street",
    "addressLocality": "Houston",
    "addressRegion": "TX",
    "postalCode": "77001",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "29.7604",
    "longitude": "-95.3698"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "09:00",
      "closes": "15:00"
    }
  ],
  "sameAs": [
    "https://www.facebook.com/yourcleaningservice",
    "https://www.instagram.com/yourcleaningservice",
    "https://www.yelp.com/biz/your-cleaning-service"
  ],
  "areaServed": [
    {
      "@type": "City",
      "name": "Houston"
    },
    {
      "@type": "City",
      "name": "Sugar Land"
    },
    {
      "@type": "City",
      "name": "Katy"
    }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Cleaning Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Move Out Cleaning",
          "url": "https://yourcleaningservice.com/services/move-out-cleaning"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Deep Cleaning",
          "url": "https://yourcleaningservice.com/services/deep-cleaning"
        }
      }
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "127"
  }
}
export default localBusinessSchema;
