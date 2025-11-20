// TurnOverCleaningClient.tsx
"use client"; // This remains a Client Component

import React, { useState } from 'react';
import PrimaryButton from '@/components/buttons/PrimaryButton';
import ChecklistSection from '@/components/ChecklistSection';
import CollapsibleSection from '@/components/CollapsibleSection';
import BookNowPopup from '@/components/Popup';
import Link from "next/link";

// Define the types for the props
interface IFaq {
  id: string;
  question: string;
  answer: string;
}

interface IChecklist {
  kitchen: string[];
  bathrooms: string[];
  bedrooms: string[];
  livingAreas: string[];
}

interface TurnOverCleaningClientProps {
  faqData: IFaq[];
  checklistData: IChecklist;
}

// Your component now accepts data as props
export default function TurnOverCleaningClient({ faqData, checklistData }: TurnOverCleaningClientProps) {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="w-full p-4 md:p-8">
      {/* Breadcrumbs */}
      <div className="mb-6 text-sm text-gray-500">
        Main page / Short-Term Rentals / Turnover Service
      </div>

      {/* Header Section */}
      <div className="mb-8 flex flex-col items-start justify-between md:flex-row md:items-center">
        <h1 className="mb-4 text-4xl font-bold text-gray-900 md:mb-0">
          Turnover Cleaning
        </h1>
        <PrimaryButton className="text-white hover:underline" onClick={() => setShowPopup(true)}>BOOK NOW</PrimaryButton>
        <BookNowPopup isOpen={showPopup} onClose={() => setShowPopup(false)} />
      </div>

      {/* Content Section */}
      <div className="space-y-6">
        <h2 className="text-3xl font-semibold text-gray-800">
          Fast, Reliable, 5-Star Ready
        </h2>
        <p className="text-base leading-relaxed text-gray-600">
          At Pro Housekeepers, we understand that in the short-term rental market, time is money and reviews are everything. Our Turnover Service is specifically designed for Airbnb and short-term rentals to get your property perfectly clean, restocked, and 5-star guest-ready in the tight window between check-out and check-in.
        </p>
      </div>
      
      {/* Checklist Section */}
      <div className="pt-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold mb-8">Turnover Cleaning Checklist</h2>
          <ChecklistSection title="Kitchen:" items={checklistData.kitchen} />
          <ChecklistSection title="Bathrooms:" items={checklistData.bathrooms} />
          <ChecklistSection title="Bedrooms:" items={checklistData.bedrooms} />
          <ChecklistSection title="Living Areas:" items={checklistData.livingAreas} />
        </div>
      </div>

      {/* Collapsible Sections */}
      <div className="container ">
        <CollapsibleSection title="What’s Included">
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              Our turnover service is more than just a cleaning. It's a complete reset of your property. We sanitize all high-touch surfaces, change all linens and towels, clean all rooms, and restock guest amenities. We can also integrate laundry services and report any damage or low-stock items to you immediately.
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

        <CollapsibleSection title="Pricing">
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              Turnover pricing is based on the size of your property (number of bedrooms/bathrooms) and can be customized to include laundry and restocking. We offer competitive rates designed for hosts, and provide discounts for hosts with multiple properties. Please contact us for a custom quote.
            </p>
          </div>
        </CollapsibleSection>
      </div>
    </div>
  );
}