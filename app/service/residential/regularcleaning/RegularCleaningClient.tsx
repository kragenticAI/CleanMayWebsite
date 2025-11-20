// RegularCleaningClient.tsx
"use client"; // This remains a Client Component for interactivity

import React, { useState } from 'react';
import PrimaryButton from '@/components/buttons/PrimaryButton';
import ChecklistSection from '@/components/ChecklistSection';
import CollapsibleSection from '@/components/CollapsibleSection';
import BookNowPopup from '@/components/Popup';
import Link from "next/link"; // Keep Link import if needed

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
}

interface RegularCleaningClientProps {
  faqData: IFaq[];
  checklistData: IChecklist;
}

// Your component now accepts data as props
export default function RegularCleaningClient({ faqData, checklistData }: RegularCleaningClientProps) {
  const [showPopup, setShowPopup] = useState(false);
  const pageTitle = "Regular Cleaning";

  return (
    <div className="w-full p-4 md:p-8">
      {/* Header Section */}
      <div className="mb-8 flex flex-col items-start justify-between md:flex-row md:items-center">
        <h1 className="mb-4 text-4xl font-bold text-gray-900 md:mb-0">{pageTitle}</h1>
        <PrimaryButton className="text-white hover:underline" onClick={() => setShowPopup(true)}>BOOK NOW</PrimaryButton>
        <BookNowPopup isOpen={showPopup} onClose={() => setShowPopup(false)} />
      </div>

      {/* Content Section */}
      <div className="space-y-6 ">
        <h2 className="text-3xl font-semibold text-gray-800">A Detailed Surface Clean</h2>
        <p className="text-base leading-relaxed text-gray-600">
          At Pro Housekeepers, we take pride in our Regular Cleaning package, designed to provide a meticulous
          surface clean for your residential or commercial spaces. Our dedicated team of professionals will dust,
          vacuum, mop, and sanitize high-touch areas, delivering a clean that gleams on the surface and maintains a
          welcoming atmosphere. We're committed to meeting your specific cleaning needs and customizing our
          services for each unique space. With our Regular Cleaning service, enjoy a consistently clean environment
          while freeing up your time to focus on life's more important things.
        </p>
      </div>

      {/* Checklist Section */}
      <div className="pt-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold mb-8">Regular Cleaning Checklist</h2>
          <ChecklistSection title="Kitchen:" items={checklistData.kitchen} />
          <ChecklistSection title="Bathrooms:" items={checklistData.bathrooms} />
          <ChecklistSection title="Bedrooms:" items={checklistData.bedrooms} />
        </div>
      </div>

      {/* Collapsible Sections */}
      <div className="container ">
        <CollapsibleSection title="What’s Included">
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              Pro Housekeepers provides a flexible range of year-round and 
              as-needed cleaning services, including an ultra-deep clean. Many
              of our clients prefer to clean their own home on a week-to-week
              basis, only scheduling us once or twice a year for an ultra-deep 
              clean. Our weekly clients schedule a more detailed clean a couple 
              of times per year. This includes cleaning areas of the home that don’t 
              require weekly cleaning such as your blinds, oven, refrigerator, ceilings,
              walls, more. Our deep clean service clean doesn’t include heavy lifting or 
              anything that requires moving furniture, but feel free to slide your couch,
              dresser, nightstands, bed, and other furniture out from the wall at least 3
              feet so that we can clean behind them. This is especially important
              for anyone who has cats or dogs.
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
              Pro Housekeepers offers a variety of packages designed to meet the needs
              of homes of various sizes. The pricing for these services is divided
              into five categories, each based on the size of the home and the
              number of bedrooms.
            </p>
            <p>
              The first category, called "La Petite", is aimed at smaller homes or
              condos, specifically those with 1-2 bedrooms and under 1000 square
              feet in size. For this standard cleaning service, customers can expect
              to pay a starting rate of $159.
            </p>
            <p>
              Next up is the "La Petite II" service, which is designed for 2 bedroom
              homes that are under 1500 square feet. The starting rate for this
              service increases slightly from the "La Petite" category, with prices
              beginning at $179.
            </p>
          </div>
        </CollapsibleSection>
      </div>
    </div>
  );
}