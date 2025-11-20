// HoarderCleanupClient.tsx
"use client";

import React, { useState } from 'react';
import EstimateFilloutForm from "@/components/EstimateFilloutForm";
import CollapsibleSection from '@/components/CollapsibleSection';

// Define the types for the props
interface IFaq {
  id: string;
  question: string;
  answer: string;
}

interface HoarderCleanupClientProps {
  faqData: IFaq[];
}

export default function HoarderCleanupClient({ faqData }: HoarderCleanupClientProps) {
  // This state is for the collapsibles
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className="w-full p-4 md:p-8">
      
      {/* This is your EstimateFilloutForm component */}
      {/* I have corrected the props to be relevant to Hoarder Cleanup */}
      <EstimateFilloutForm 
        propertySizeLabel="Property Size (sq ft)"
        numRoomsLabel="Number of Rooms Affected"
      >
        {/* These h1/h2 tags are passed as children */}
        <h1 className="text-[40px] font-semibold">Hoarder Cleanup</h1>
        <h2 className="text-[20px] font-bold mt-[15px]">REQUEST AN ESTIMATE FOR HOARDER CLEANUP</h2>
      </EstimateFilloutForm>

      {/* We can add the same Collapsible sections here
        to keep the page layout consistent with your other services.
      */}
      <div className="container mt-12">
        <CollapsibleSection title="What This Service Entails">
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              Hoarder cleanup is a specialized service that goes far beyond regular cleaning. It involves the compassionate and discreet removal of clutter, sorting of items, and deep sanitization of the property. Our trained team works to restore the home to a safe and livable condition.
            </p>
          </div>
        </CollapsibleSection>

        <CollapsibleSection title="FAQs">
          <div className="space-y-6">
            {faqData.map((faq, index) => (
              <div key={faq.id}>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {index + 1}. {faq.question}
                </h3>
                <p className="text-gray-700 leading-relaxed pl-6">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </CollapsibleSection>

        <CollapsibleSection title="Pricing & Estimates">
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              Due to the unique and complex nature of hoarding situations, we cannot provide a flat rate online. 
            </p>
            <p>
              Pricing is based on the volume of items to be removed, the level of sanitation required, and the size of the property. Please fill out the form above for a comprehensive, no-obligation estimate.
            </p>
          </div>
        </CollapsibleSection>
      </div>

    </div>
  );
}