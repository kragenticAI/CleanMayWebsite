// This is your main page.tsx file
// Note: NO 'use client' here!

import React from 'react';
// 1. Import the client component you just made
import RecurringCleaningClient from './RecurringCleaningClient';
import recurringCleaningSchema from '@/schemas/recurringCleaningSchema';
import type { Metadata } from 'next';

// 2. Define your data here, on the server
// I've updated these FAQs to be specific to "Recurring Cleaning"
export const metadata: Metadata = {
  title: 'Recurring Cleaning ',
};
const faqData = [
  {
    id: 'faq-1',
    question: "What's included in a recurring cleaning service?",
    answer: "Our recurring cleaning service maintains the cleanliness of your home with regular visits. This includes dusting all surfaces, vacuuming and mopping floors, sanitizing bathrooms, and cleaning the kitchen. It's designed to keep your home consistently fresh and tidy."
  },
  {
    id: 'faq-2',
    question: "How often can I schedule recurring cleaning?",
    answer: "We offer flexible scheduling to fit your needs, including weekly, bi-weekly (every two weeks), and monthly (every four weeks) services. Weekly and bi-weekly are our most popular options for maintaining a high level of cleanliness."
  },
  {
    id: 'faq-3',
    question: "Do I get a discount for recurring service?",
    answer: "Yes! We offer discounts for recurring services as a thank you for your loyalty. The more frequent the cleaning, the larger the discount. This is typically applied after your initial (first-time) cleaning."
  },
  {
    id: 'faq-4',
    question: "Will I have the same cleaning professional every time?",
    answer: "We make every effort to send the same cleaner or team to your home for each visit. This ensures consistency and allows your cleaner to become familiar with your specific needs and preferences."
  },
  {
    id: 'faq-5',
    question: "What if I need to skip or reschedule a cleaning?",
    answer: "We understand that life happens. We just ask that you give us at least 24-48 hours' notice to reschedule or cancel a service. You can easily manage your bookings through your customer account or by contacting us directly."
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
export default function RecurringCleaningPage() {
  return (
    <>
      {/* 5. Add the schema script here. It will be server-rendered. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(recurringCleaningSchema) }}
      />
      
      {/* 6. Render the Client Component and pass the data as props */}
      <RecurringCleaningClient
        faqData={faqData}
        checklistData={checklistData}
      />
    </>
  );
}