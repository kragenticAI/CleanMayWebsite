// This is your main page.tsx file
// Note: NO 'use client' here!

import React from 'react';
// 1. Import the client component you just made
import TurnOverCleaningClient from './TurnOverCleaningClient';

// 2. Define your data here, on the server
const faqData = [
  {
    id: 'faq-1',
    question: "What is a short-term rental turnover cleaning?",
    answer: "A turnover service is a complete cleaning, restocking, and staging of your property between guest stays. This includes changing all linens, sanitizing all surfaces, restocking amenities (like soap and paper towels), and ensuring the property is 5-star ready for the next guest."
  },
  {
    id: 'faq-2',
    question: "How fast can you clean my property?",
    answer: "We specialize in same-day turnovers. We work with your booking calendar to ensure the cleaning is completed in the window between check-out (e.g., 11 AM) and check-in (e.g., 4 PM)."
  },
  {
    id: 'faq-3',
    question: "Do you handle laundry?",
    answer: "Yes, we can integrate laundry services. We can either use the machines in your unit or use an off-site partner for larger properties, ensuring fresh, clean linens for every guest."
  },
  {
    id: 'faq-4',
    question: "Do you restock guest supplies?",
    answer: "Absolutely. We can manage your inventory and restock essential guest amenities like coffee, toiletries, paper towels, and toilet paper, reporting back to you when supplies are low."
  },
  {
    id: 'faq-5',
    question: "Do I need to be there for the cleaning?",
    answer: "No. Our service is designed for busy hosts. We work seamlessly with smart locks, lockboxes, or building concierges to gain access and complete the turnover independently."
  }
];

const checklistData = {
  kitchen: [
    'Check for leftover food and drinks',
    'Clean inside of microwave and surfaces of all appliances',
    'Wipe all countertops and sink',
    'Restock coffee, tea, and other kitchen amenities'
  ],
  bathrooms: [
    'Sanitize toilet, shower, and sink',
    'Clean mirrors and glass surfaces',
    'Replace all used towels with fresh sets',
    'Restock toiletries (shampoo, soap, toilet paper)'
  ],
  bedrooms: [
    'Strip beds and replace all linens with fresh sets',
    'Make beds (hotel style)',
    'Dust all furniture and surfaces',
    'Check under beds and in drawers for lost items'
  ],
  livingAreas: [
    'Dust all surfaces, including electronics',
    'Vacuum and/or mop all floors',
    'Tidy pillows and blankets',
    'Check for any guest-left items and report to host'
  ]
};

// 3. Define your JSON-LD Schema (Updated for Turnover Cleaning)
const turnoverCleaningSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Turnover Cleaning',
  name: 'Airbnb & Short-Term Rental Turnover Cleaning',
  description: 'Fast, reliable turnover cleaning service for Airbnb and short-term rentals. We handle cleaning, restocking, and linen changes to get you 5-star guest ready.',
  provider: {
    '@type': 'Organization',
    name: 'Clean May'
  },
  // !! UPDATE THIS URL to the correct final URL
  url: 'https://www.yourwebsite.com/service/shortTerm/turnovercleaning',
  mainEntity: {
    '@type': 'FAQPage',
    mainEntity: faqData.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  }
};


// 4. This is your main page component (a Server Component)
export default function TurnOverCleaningPage() {
  return (
    <>
      {/* 5. Add the schema script here. It will be server-rendered. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(turnoverCleaningSchema) }}
      />
      
      {/* 6. Render the Client Component and pass the data as props */}
      <TurnOverCleaningClient
        faqData={faqData}
        checklistData={checklistData}
      />
    </>
  );
}