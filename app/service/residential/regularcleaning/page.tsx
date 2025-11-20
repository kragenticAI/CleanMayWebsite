// This is your main page.tsx file
// Note: NO 'use client' here!

import React from 'react';
// 1. Import the client component you just made
import RegularCleaningClient from './RegularCleaningClient';

// 2. Define your data here, on the server
const faqData = [
  {
    id: 'faq-1',
    question: "What is included in your regular/standard cleaning service?",
    answer: "Check our Regular Cleaning Checklist below."
  },
  {
    id: 'faq-2',
    question: "How long does a regular cleaning service usually take?",
    answer: "It varies according to the size of the home, but on average you can expect the service to take 2-3 hours."
  },
  {
    id: 'faq-3',
    question: "How often should I schedule cleaning services?",
    answer: "We recommend at least every 3 weeks to maintain a clean home."
  },
  {
    id: 'faq-4',
    question: "How much does your service cost?",
    answer: "Please refer to Pricing."
  },
  {
    id: 'faq-5',
    question: "Are your cleaning products safe for children and pets?",
    answer: "For eco-friendly, child and pet-safe products please make the explicit request. We use standard..."
  }
];

const checklistData = {
  kitchen: [
    'Clean countertops and cabinets',
    'Clean appliance surfaces (fridge, oven, microwave, dishwasher)',
    'Wipe down stovetop and clean inside of microwave',
    'Clean inside and around sink',
    'Sweep and mop floor',
  ],
  bathrooms: [
    'Remove any items from the shower or tub',
    'Clean the shower or tub walls and door',
    'Clean the sink and countertop',
    'Wipe down cabinet fronts',
    'Clean mirrors',
    'Clean and disinfect the toilet',
    'Sweep and mop floor',
  ],
  bedrooms: [
    'Dust all surfaces and objects, including picture frames and knick-knacks',
    'Vacuum carpet or sweep and mop hard flooring',
    'Clean mirrors and glass surfaces'
  ]
};

// 3. Define your JSON-LD Schema (Updated for Regular Cleaning)
const regularCleaningSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Regular Cleaning',
  name: 'Regular Cleaning Service',
  description: 'Our Regular Cleaning package provides a meticulous surface clean for your home, including dusting, vacuuming, mopping, and sanitizing high-touch areas.',
  provider: {
    '@type': 'Organization',
    name: 'Clean May'
  },
  // !! UPDATE THIS URL to the correct final URL
  url: 'https://www.yourwebsite.com/service/residential/regularCleaning',
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
export default function RegularCleaningPage() {
  return (
    <>
      {/* 5. Add the schema script here. It will be server-rendered. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(regularCleaningSchema) }}/>
      
      {/* 6. Render the Client Component and pass the data as props */}
      <RegularCleaningClient
        faqData={faqData}
        checklistData={checklistData}
      />
    </>
  );
}