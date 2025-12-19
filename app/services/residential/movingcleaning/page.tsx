// This is your main page.tsx file
// Note: NO 'use client' here!

import React from 'react';
// 1. Import the client component you just made
import MovingCleaningClient from './MovingCleaningClient';
import movingCleaningSchema from '@/schemas/movingCleaningSchema';
import type { Metadata } from 'next';

// 2. Define your data here, on the server
// NOTE: You've used the same FAQs as Deep Cleaning.
// You should update these questions and answers to be specific to MOVING.
export const metadata: Metadata = {
  title: 'Moving Cleaning ',
};

const faqData = [
  {
    id: 'faq-1',
    question: "What's included in a move-in/move-out cleaning?",
    answer: "Our moving cleaning is a comprehensive service designed to clean an empty home. This includes everything in our deep clean, plus inside all cabinets, drawers, and appliances like the oven and refrigerator."
  },
  {
    id: 'faq-2',
    question: "Do I need to be at the property for the cleaning?",
    answer: "No, you don't have to be present. Most clients provide access via a lockbox or code, and we can handle the entire cleaning while you're busy with your move."
  },
  {
    id: 'faq-3',
    question: "Should the home be empty?",
    answer: "Yes, for a move-in or move-out cleaning, we require the home to be completely empty of all furniture and personal belongings. This allows us to clean all surfaces, including inside cabinets and closets, effectively."
  },
  {
    id: 'faq-4',
    question: "How long does a moving cleaning take?",
    answer: "The time depends on the size and condition of the home. Because it includes cleaning inside all appliances and cabinets, it typically takes longer than a standard deep clean."
  },
  // ... (add more relevant FAQs)
];

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
export default function MovingCleaningPage() {
  return (
    <>
      {/* 5. Add the schema script here. It will be server-rendered. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(movingCleaningSchema) }}
      />
      
      {/* 6. Render the Client Component and pass the data as props */}
      <MovingCleaningClient
        faqData={faqData}
        checklistData={checklistData}
      />
    </>
  );
}