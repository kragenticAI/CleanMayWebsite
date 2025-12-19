// This is your main page.tsx file
// It's already a Server Component, which is perfect!

import React from 'react';
import type { Metadata } from 'next';
import EstimateFilloutForm from "@/components/EstimateFilloutForm";
import healthcareCleaningSchema from '@/schemas/healthcareCleaningSchema';

// 1. Add a page title
export const metadata: Metadata = {
  title: 'Healthcare Setting Cleaning',
};


// 3. This is your page component
const HealthcareSettings: React.FC = () => {
  return (
    // We wrap everything in a React fragment (<>) so we can add the script
    <>
      {/* 4. Add the schema script here. It will be server-rendered. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(healthcareCleaningSchema) }}
      />
      
      {/* This is your original form component */}
      <EstimateFilloutForm>
        <h1 className="text-[40px] font-semibold">Healthcare settings</h1>
        <h2 className="text-[20px] font-bold mt-[15px]">REQUEST AN ESTIMATE FOR HEALTHCARE CLEANING</h2>
      </EstimateFilloutForm>
    </>
  );
};

export default HealthcareSettings;