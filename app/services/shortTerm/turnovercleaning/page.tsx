// This is your main page.tsx file
// It's already a Server Component, which is perfect!

import React from 'react';
import type { Metadata } from 'next';
import EstimateFilloutForm from "@/components/EstimateFilloutForm";
import turnoverCleaningSchema from '@/schemas/turnoverCleaningSchema';


// 1. Add a page title
export const metadata: Metadata = {
  title: 'Turnover Cleaning ',
};


// 3. This is your page component
const TurnoverCleaning: React.FC = () => {
  return (
    // We wrap everything in a React fragment (<>) so we can add the script
    <>
      {/* 4. Add the schema script here. It will be server-rendered. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(turnoverCleaningSchema) }}
      />
      
      {/* This is your original form component */}
      <EstimateFilloutForm>
        <h1 className="text-[40px] font-semibold">Turn Over Cleaning</h1>
        <h2 className="text-[20px] font-bold mt-[15px]">REQUEST AN ESTIMATE FOR TURNOVER CLEANING</h2>
      </EstimateFilloutForm>
    </>
  );
};

export default TurnoverCleaning;