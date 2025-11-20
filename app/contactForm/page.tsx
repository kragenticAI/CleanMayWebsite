// app/contactForm/page.tsx
// THIS IS YOUR NEW SERVER COMPONENT
// Note: NO 'use client' here!

import React from 'react';
// 1. Import the client component you just renamed
import ContactFormClient from './ContactFormClient'; 

// 2. Define your JSON-LD Schema
const contactSchemas = [
  {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Pro Housekeepers',
    description: 'Get in touch with Pro Housekeepers for support or a free cleaning estimate. Contact us by phone, email, or our online form.',
    // !! UPDATE THIS URL to the correct final URL
    url: 'https://www.prohousekeepers.com/contactForm' // Example URL
  },
  {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Clean May',
    telephone: '(844) 242-9464',
    email: 'support@prohousekeepers.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '6902 E Adamo Dr',
      addressLocality: 'Tampa',
      addressRegion: 'FL',
      postalCode: '33619'
    },
    url: 'https://www.prohousekeepers.com', 
    logo: 'https://www.prohousekeepers.com/images/websitelogo.png'
  }
];


// 3. This is your main page component
export default function ContactUsPage() {
  return (
    <>
      {/* 4. Add the schema script here. It will be server-rendered. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchemas) }}
      />
      
      {/* 5. Render the Client Component */}
      <ContactFormClient />
    </>
  );
}