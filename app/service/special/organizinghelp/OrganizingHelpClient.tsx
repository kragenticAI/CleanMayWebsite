// OrganizingHelpClient.tsx
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

interface OrganizingHelpClientProps {
  faqData: IFaq[];
}

export default function OrganizingHelpClient({ faqData }: OrganizingHelpClientProps) {
  // This state is for the collapsibles
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className="w-full p-4 md:p-8">
      
      {/* EstimateFilloutForm with props for this service */}
      <EstimateFilloutForm 
        propertySizeLabel="Number of Rooms to Organize"
        numRoomsLabel="Areas of Focus (e.g., Closets, Kitchen)"
      >
        {/* These h1/h2 tags are passed as children */}
        <h1 className="text-[40px] font-semibold">Organizing Help</h1>
        <h2 className="text-[20px] font-bold mt-[15px]">REQUEST AN ESTIMATE FOR ORGANIZING SERVICES</h2>
      </EstimateFilloutForm>

      {/* Collapsible sections for more info */}
      <div className="container mt-12">
        <CollapsibleSection title="How Our Organizing Service Works">
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              Our professional organizing service is designed to bring peace and order to your space. We work with you to understand your goals, then create a custom plan to de-clutter, sort, and implement sustainable organizing systems for your home or office.
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
              Organizing projects are highly customized. We typically charge an hourly rate, as the time required depends on the size of the space and the volume of items.
            </p>
            <p>
              Please fill out the form above, and one of our organizing specialists will contact you to discuss your project and provide a detailed estimate.
            </p>
          </div>
        </CollapsibleSection>
      </div>

    </div>
  );
}