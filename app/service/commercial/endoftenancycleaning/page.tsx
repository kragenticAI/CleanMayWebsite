// This is your main page.tsx file
// (e.g., app/service/commercial/endoftenancycleaning/page.tsx)
// It's already a Server Component, which is perfect!

import React from 'react';
import type { Metadata } from 'next';
import EstimateFilloutForm from "@/components/EstimateFilloutForm";

// 1. Add a page title
export const metadata: Metadata = {
  title: 'End of Tenancy Cleaning | Pro Housekeepers',
};

// 2. Define your JSON-LD Schema
// Since there are no FAQs on this page, we will just use the "Service" schema.
const endOfTenancySchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'End of Tenancy Cleaning',
  name: 'End of Tenancy / Move-Out Cleaning Service',
  description: 'Comprehensive move-out cleaning to help you get your deposit back. We clean inside ovens, fridges, and all cabinets. Request your estimate online.',
  provider: {
    '@type': 'Organization',
    name: 'Clean May' // Or your company name
  },
  // !! UPDATE THIS URL to the correct final URL
  url: 'https://www.yourwebsite.com/service/commercial/endoftenancycleaning',
};

// 3. This is your page component
const EndOfTenancyCleaning: React.FC = () => {
  return (
    // We wrap everything in a React fragment (<>) so we can add the script
    <>
      {/* 4. Add the schema script here. It will be server-rendered. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(endOfTenancySchema) }}
      />
      
      {/* This is your original form component */}
      <EstimateFilloutForm>
        <h1 className="text-[40px] font-semibold">Request a Cleaning Estimate</h1>
        <h2 className="text-[20px] font-bold mt-[15px]">REQUEST AN ESTIMATE FOR END OF TENANCY CLEANING</h2>
      </EstimateFilloutForm>
    </>
  );
};

export default EndOfTenancyCleaning;