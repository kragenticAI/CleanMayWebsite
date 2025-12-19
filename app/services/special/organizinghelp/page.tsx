// This is your main page.tsx file
// (e.g., app/service/special/organizinghelp/page.tsx)
// Note: NO 'use client' here!

import React from 'react';
// 1. Import the client component you just made
import OrganizingHelpClient from './OrganizingHelpClient';

// 2. Define your data here, on the server
const faqData = [
  {
    id: 'faq-1',
    question: "Do I have to get rid of my things?",
    answer: "No. Our job is not to force you to throw things away. We work *with* you to help you decide what to keep, donate, or discard based on your own goals for the space."
  },
  {
    id: 'faq-2',
    question: "Do I need to be there the whole time?",
    answer: "We require you to be present for the initial de-cluttering and sorting phase to make decisions. Once we have a plan, we can often do much of the organizing work independently."
  },
  {
    id: 'faq-3',
    question: "Will I need to buy a lot of containers and bins?",
    answer: "Not necessarily. We first try to use organizing containers you already own. If new products are needed, we will provide a shopping list or can shop for you, based on a pre-approved budget."
  },
  {
    id: 'faq-4',
    question: "How long will it take?",
    answer: "This depends entirely on the size of the project. A single closet may take a few hours, while an entire kitchen or garage may take one or more full days. We will provide a time estimate after our consultation."
  }
];

// 3. Define your JSON-LD Schema (Updated for Organizing Help)
const organizingHelpSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Professional Organizing',
  name: 'Home Organizing Help',
  description: 'Professional home organizing services to de-clutter your space, create custom storage systems, and restore order to your home or office.',
  provider: {
    '@type': 'Organization',
    name: 'Pro Housekeepers' // Or your company name
  },
  // !! UPDATE THIS URL to the correct final URL
  url: 'https://www.yourwebsite.com/service/special/organizinghelp',
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
export default function OrganizingHelpPage() {
  return (
    <>
      {/* 5. Add the schema script here. It will be server-rendered. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizingHelpSchema) }}
      />
      
      {/* 6. Render the Client Component and pass the data as props */}
      <OrganizingHelpClient
        faqData={faqData}
      />
    </>
  );
}