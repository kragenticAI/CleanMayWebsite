// This is app/page.tsx
// Note: 'use client' has been REMOVED. This is now a Server Component.

import React from 'react';
import Hero from '../components/hero/Hero'; // This is your Client Component

// 1. Define your homepage-specific schema
const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Clean May',
  url: 'https://www.prohousekeepers.com', // Your main homepage URL
  // This part can enable a Sitelinks Search Box in Google results
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://www.prohousekeepers.com/search?q={search_term_string}' // Change URL if your search is different
    },
    'query-input': 'required name=search_term_string'
  }
};


// 2. This is your main Page component (a Server Component)
export default function Home() {
  return (
    <main>
      
      {/* 3. Add the schema script here. It will be server-rendered. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      
      {/* 4. Render your Hero (Client Component) */}
      <Hero />
      
    </main>
  );
}