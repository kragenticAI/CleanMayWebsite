// This is your main page.tsx file
// Note: NO 'use client' here!

import React from 'react';
// 1. Import the client component you just made
import PostConstructionClient from './PostConstructionClient';
import postConstructionCleaningSchema from '@/schemas/postConstructionCleaningSchema';
import type { Metadata } from 'next';

// 2. Define your data here, on the server
// I've updated these FAQs to be specific to "Post-Construction Cleaning"
export const metadata: Metadata = {
  title: 'Postconstruction Cleaning ',
};
const faqData = [
  {
    id: 'faq-1',
    question: "What is post-construction cleaning?",
    answer: "Post-construction cleaning is a specialized, intensive cleaning service designed to remove all the fine dust, debris, paint splatters, and residues left behind after a renovation or new construction project. It makes the space move-in ready."
  },
  {
    id: 'faq-2',
    question: "How is this different from a deep clean?",
    answer: "A deep clean targets buildup from regular living. A post-construction clean targets specific construction materials like drywall dust (which is very fine and pervasive), sawdust, sticker residue, paint overspray, and grout haze."
  },
  {
    id: 'faq-3',
    question: "When is the best time to schedule this service?",
    answer: "You should schedule this service *after* all construction work is 100% complete, including any touch-ups, and all contractors have removed their equipment. Cleaning before this will just require a re-clean."
  },
  {
    id: 'faq-4',
    question: "Do you remove paint splatters or grout haze?",
    answer: "Yes, our service includes the careful removal of paint splatters from floors, windows, and fixtures, as well as buffing surfaces to remove grout haze. We use specialized tools and solvents to do this safely."
  },
  {
    id: 'faq-5',
    question: "Do I need to provide any supplies?",
    answer: "No. Our post-construction cleaning team comes fully equipped with all necessary heavy-duty vacuums (with HEPA filters), cleaning agents, and tools to handle construction debris and fine dust."
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
export default function PostConstructionPage() {
  return (
    <>
      {/* 5. Add the schema script here. It will be server-rendered. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(postConstructionCleaningSchema) }}
      />
      
      {/* 6. Render the Client Component and pass the data as props */}
      <PostConstructionClient
        faqData={faqData}
        checklistData={checklistData}
      />
    </>
  );
}