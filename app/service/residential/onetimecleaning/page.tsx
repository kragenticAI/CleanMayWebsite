// This is your main page.tsx file
// Note: NO 'use client' here!

import React from 'react';
// 1. Import the client component you just made
import OneTimeCleaningClient from './OneTimeCleaningClient';
import oneTimeCleaningSchema from '@/schemas/oneTimeCleaningSchema';

// 2. Define your data here, on the server
// I've updated these FAQs to be specific to "One-Time Cleaning"
const faqData = [
  {
    id: 'faq-1',
    question: "What's included in a one-time cleaning?",
    answer: "Our one-time cleaning is a thorough clean of your home, covering all the essentials like dusting, vacuuming, mopping, and sanitizing kitchens and bathrooms. It's similar to our regular cleaning but booked as a single session."
  },
  {
    id: 'faq-2',
    question: "Is a one-time clean the same as a deep clean?",
    answer: "No. Our deep cleaning is more intensive and includes details like inside the oven, baseboards, and light fixtures. A one-time clean is a standard, thorough cleaning. You can, however, book a 'One-Time Deep Clean' if that's what you need."
  },
  {
    id: 'faq-3',
    question: "Do I need to sign a contract for a one-time cleaning?",
    answer: "Absolutely not. Our one-time cleaning service is designed for flexibility. There are no contracts or recurring commitments. You just book it when you need it."
  },
  {
    id: 'faq-4',
    question: "How is the price for a one-time cleaning determined?",
    answer: "The cost is typically based on the size of your home (number of bedrooms and bathrooms) and its current condition. We provide an upfront quote based on these details."
  }
];

// This data is generic, so it's fine to reuse
const checklistData = {
  AllRooms: [
    'Dusting of all surfaces, including corners of walls, ceilings, baseboards and decorative items. Deep vacuuming and mopping of floors including underneath furniture and in other hard-to-reach areas.',
  ],
  bathrooms: [
    'Descale showerheads, taps, and tiles. Cleaning and sanitizing of the bathtub, shower, sink, and toilet. Washing of the mirror and vanity.'
  ],
  bedrooms: [
    'Dusting and cleaning of all furniture, fixtures, and decorative items. Cleaning under the bed and other furniture. Washing of inside windows and window sills.'
  ],
  Kitchen: [
    'Cleaning of stove drip pans, burner grates, and control knobs. Degreasing of the range hood and the inside of the oven. Scrubbing and sanitizing of the sink, countertops, and backsplash. Washing of the fronts of appliances and cabinets.'
  ]
};



// 4. This is your main page component (a Server Component)
export default function OneTimeCleaningPage() {
  return (
    <>
      {/* 5. Add the schema script here. It will be server-rendered. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(oneTimeCleaningSchema) }}
      />
      
      {/* 6. Render the Client Component and pass the data as props */}
      <OneTimeCleaningClient
        faqData={faqData}
        checklistData={checklistData}
      />
    </>
  );
}