// This is your main page.tsx file
// (e.g., app/whyUs/page.tsx)
// Note: NO 'use client' here!

import React from 'react';
// 1. Import the client component you just made
// We import the default export from that file, which is the WhyUsPage component
import WhyUsClient from './WhyUsClient';

// 2. Define your JSON-LD Schema for this page
// We will use an "AboutPage" schema
const whyUsSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage', // This tells Google this is an "About Us" page
  name: 'Why Pro Housekeepers?',
  description: 'Learn about our mission, our vetted staff, and why Pro Housekeepers is the most trusted cleaning service with hassle-free booking.',
  
  // This links it to your main company organization schema
  mainEntity: {
    '@type': 'Organization',
    name: 'Clean May',
    url: 'https://www.yourwebsite.com', // Your main homepage URL
    logo: 'https://www.yourwebsite.com/images/websitelogo.png' // Your logo URL
  },

  // !! UPDATE THIS URL to the correct final URL
  url: 'https://www.yourwebsite.com/whyUs'
};


// 3. This is your main page component (a Server Component)
export default function WhyUsPage() {
  return (
    <>
      {/* 4. Add the schema script here. It will be server-rendered. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(whyUsSchema) }}
      />
      
      {/* 5. Render the Client Component */}
      <WhyUsClient />
    </>
  );
}