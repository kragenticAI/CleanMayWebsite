// This is your main page.tsx file
// (e.g., app/service/special/hoardercleanup/page.tsx)
// Note: NO 'use client' here!

import React from 'react';
// 1. Import the client component you just made
import HoarderCleanupClient from './HoarderCleanupClient';

// 2. Define your data here, on the server
const faqData = [
  {
    id: 'faq-1',
    question: "Is this service discreet?",
    answer: "Yes. Our team arrives in unmarked vehicles and operates with complete professionalism and confidentiality. We are committed to protecting your privacy."
  },
  {
    id: 'faq-2',
    question: "Do I need to be there during the cleanup?",
    answer: "It is your choice. Some clients prefer to be present to help sort items, while others find the process overwhelming and prefer to be off-site. We can work with you either way."
  },
  {
    id: 'faq-3',
    question: "What happens to all the items?",
    answer: "We work with you to sort items into categories: keep, donate, and dispose. We handle all hauling and disposal, including hazardous materials, and ensure donatable items go to a charity of your choice."
  },
  {
    id: 'faq-4',
    question: "Is this different from a normal cleaning service?",
    answer: "Vastly different. Hoarder cleanup requires specialized training in biohazard removal, deep sanitization, and junk removal. It's a project-based restoration service, not a regular maid service."
  }
];

// 3. Define your JSON-LD Schema (Updated for Hoarder Cleanup)
const hoarderCleanupSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Hoarder Cleanup',
  name: 'Hoarder Cleanup & Clutter Removal Service',
  description: 'Compassionate, discreet, and professional hoarder cleanup services. We handle junk removal, deep cleaning, and sanitation to restore safe living conditions.',
  provider: {
    '@type': 'Organization',
    name: 'Clean May' // Or your company name
  },
  // !! UPDATE THIS URL to the correct final URL
  url: 'https://www.yourwebsite.com/service/special/hoardercleanup',
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
export default function HoarderCleanupPage() {
  return (
    <>
      {/* 5. Add the schema script here. It will be server-rendered. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(hoarderCleanupSchema) }}
      />
      
      {/* 6. Render the Client Component and pass the data as props */}
      <HoarderCleanupClient
        faqData={faqData}
      />
    </>
  );
}