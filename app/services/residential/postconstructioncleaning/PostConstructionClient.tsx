// PostConstructionClient.tsx
"use client"; // This remains a Client Component

import React, { useState } from 'react';
import PrimaryButton from '@/components/buttons/PrimaryButton';
import ChecklistSection from '@/components/ChecklistSection';
import CollapsibleSection from '@/components/CollapsibleSection';
import BookNowPopup from '@/components/Popup';
import EstimateFilloutForm from '@/components/EstimateFilloutForm';

// Define the types for the props
interface IFaq {
  id: string;
  question: string;
  answer: string;
}

interface IChecklist {
  AllRooms: string[];
  bathrooms: string[];
  bedrooms: string[];
  Kitchen: string[];
}

interface PostConstructionClientProps {
  faqData: IFaq[];
  checklistData: IChecklist;
}

// Your component now accepts data as props
export default function PostConstructionClient({ faqData, checklistData }: PostConstructionClientProps) {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="w-full p-4 md:p-8">
      {/* Header Section */}
      <div className="mb-8 flex flex-col items-start justify-between md:flex-row md:items-center">
        <h1 className="mb-4 text-4xl font-bold text-gray-900 md:mb-0">Post-Construction Cleaning</h1>

        <BookNowPopup isOpen={showPopup} onClose={() => setShowPopup(false)} />
      </div>

      {/* Content Section (You can update this description) */}
      <div className="space-y-6">
        <h2 className="text-3xl font-semibold text-gray-800">An Ultra-Deep Floor-to-Ceiling Clean</h2>
        <p className="text-base leading-relaxed text-gray-600">
          At Pro Housekeepers, our deep cleaning service offers a comprehensive and meticulous cleaning solution for your home,
          penetrating those often-overlooked areas that regular cleaning just can’t reach.
          This premier service includes an exhaustive cleanse of your entire
          living space, focusing on areas that accumulate the most grime and dirt.
          Our expert housekeepers delve into the depths of kitchen appliances, providing a
          deep scrub and sanitization for your oven and refrigerator. We shine a spotlight on your bathroom fixtures,
          performing a thorough cleaning to ensure an immaculate finish.
          From dusting every nook and cranny, even those hard-to-reach corners and high fixtures,
          our service ensures no detail is missed. Pro Housekeepers’ deep cleaning service is the perfect choice for those seeking a first-time cleaning, a monthly spruce-up, or preparing a home for a new tenant or owner. Trust us to bring the sparkle back to your home.
        </p>
      </div>

      {/* Checklist Section */}
      <div className="pt-8">
        <div className="">
          <h2 className="text-2xl font-bold mb-8">Post-Construction Cleaning Checklist</h2>
          <ChecklistSection title="All rooms" items={checklistData.AllRooms} />
          <ChecklistSection title="Bathrooms:" items={checklistData.bathrooms} />
          <ChecklistSection title="Bedrooms:" items={checklistData.bedrooms} />
          <ChecklistSection title="kitchen:" items={checklistData.Kitchen} />
        </div>
      </div>

      {/* Collapsible Sections */}
      <CollapsibleSection title="What’s Included">
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>
            As a part of our Pro Housekeepers’ deep cleaning service, we deliver a comprehensive and
            meticulous clean of your entire home. Our service includes a detailed
            cleaning of kitchens and bathrooms, extensive dusting of all corners, surfaces,
            and fixtures. We pay close attention to high-traffic areas, ensuring they’re thoroughly cleaned.
            Please note, while our service is exhaustive, it does not include window washing or deep carpet cleaning.
            Trust us to leave your home sparkling clean and fresh, reaching those often missed spots in a regular cleaning routine.
            For specific details, please refer to the Deep Cleaning Checklist below.
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
            Pro Housekeepers provides a diverse range of deep cleaning packages tailored
            to accommodate homes of different sizes. The pricing for these
            intensive services is stratified into five groups, each reflecting
            the size of the home and number of bedrooms.
          </p>
          <p>
            Starting with the “La Petite” category, this package is designed for smaller
            homes or condos, specifically those with 1-2 bedrooms and under 1000 square feet.
            For this deep cleaning service, customers can anticipate a starting
            rate of $258, which is $99 more than the standard cleaning rate.
          </p>
          <p>
            Following is the “La Petite II” service, curated for 2 bedroom homes
            that are under 1500 square feet. The beginning rate for this service,
            offering a comprehensive deep clean, is now $278.
          </p>
        </div>
      </CollapsibleSection>
      <EstimateFilloutForm>
         <h2 className="text-[30px] font-bold mt-[15px]">REQUEST AN ESTIMATE FOR  POSTCONSTRUCTION CLEANING</h2>

      </EstimateFilloutForm>
    </div>
  );
}