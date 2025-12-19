// This is your main page.tsx file
// Note: NO 'use client' here!
import type { Metadata } from 'next';

import React from 'react';
// 1. Import the client component you just made
import DeepCleaningClient from './DeepCleaningClient';
import deepCleaningSchema from '@/schemas/deepCleaningSchema';
export const metadata: Metadata = {
  title: 'DeepCleaning Cleaning ',
};



// 2. Define your data here, outside the component
const faqData = [
  {
    id: 'faq-1',
    question: "What exactly does a deep cleaning service include?",
    answer: "Our deep cleaning service involves a thorough, comprehensive cleaning of your entire home. We meticulously scrub kitchens and bathrooms, dust all corners and fixtures, spend extra time cleaning carpets, and help tidy up the place. This service is designed to reach areas not typically covered by regular cleaning."
  },
  {
    id: 'faq-2',
    question: "How long does a deep cleaning service take?",
    answer: "The length of a deep cleaning service depends on the size of your home and its current condition. However, as a general rule, you can expect it to take significantly longer than a standard cleaning service due to the level of detail involved. We can provide a more accurate estimate after assessing your home."
  },
  {
    id: 'faq-3',
    question: "How often should I schedule a deep cleaning?",
    answer: "While the frequency can depend on your individual needs, we generally recommend scheduling a deep cleaning service every six months to maintain a high level of cleanliness in your home."
  },
  {
    id: 'faq-4',
    question: "How much does a deep cleaning service cost?",
    answer: "The cost of a deep cleaning service is determined by various factors such as the size of your home, the number of rooms, and the level of cleaning required. Please contact us directly, and we’d be happy to provide a detailed quote based on your specific needs."
  },
  {
    id: 'faq-5',
    question: "Do I need to be home during the deep cleaning?",
    answer: "It’s entirely up to you. Some customers prefer to be at home, while others choose not to be. Our professional team is trustworthy and can carry out the job to a high standard regardless of whether you’re present or not."
  }
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
export default function DeepCleaningPage() {
  return (
    <>
      {/* 5. Add the schema script here. It will be server-rendered. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(deepCleaningSchema) }}
      />
      
      {/* 6. Render the Client Component and pass the data as props */}
      <DeepCleaningClient
        faqData={faqData}
        checklistData={checklistData}
      />
    </>
  );
}