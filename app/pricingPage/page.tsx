import React from 'react';

import { PricingCard } from '../../components/cards/PricingCard';
import { addOnServices } from '../../Data/addOnServices';
import { pricingPlans } from '../../Data/pricingPlans';

// --- Reusable Feature List Item ---
// We can reuse the one from WhyUsPage, but I'll include it here
// for a self-contained component.


// --- Pricing Card Component ---
interface AddOnItemProps {
  service: string;
  price: string | number;
}


// --- Add-On Service Item ---
const AddOnItem : React.FC<AddOnItemProps> = ({ service, price }) => (
  <li className="flex justify-between items-center py-4 border-b border-gray-200">
    <span className="text-gray-700">{service}</span>
    <span className="font-bold text-gray-900">{price}</span>
  </li>
);

// --- Main Pricing Page Component ---
export default function PricingPage() {
  // Data for the pricing cards
 

  // Data for add-ons
 

  return (
    <div className="bg-gray-50 font-sans py-16 md:py-24">
      <div className="container mx-auto px-6">
        {/* --- Header --- */}
        <div className="text-center mb-16">
          {/* <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wider mb-2">
            Main page / Pricing
          </p> */}
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Starting Rates by Home Size
          </h1>
        </div>

        {/* --- Pricing Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {pricingPlans.map((plan) => (
            <PricingCard
              key={plan.plan}
              plan={plan.plan}
              price={plan.price}
              description={plan.description}
              subDescription={plan.subDescription}
              features={plan.features}
              discounts={plan.discounts}
            />
          ))}
        </div>

        {/* --- Add-On Services --- */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
            Add-On Services
          </h2>
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <ul className="divide-y divide-gray-200">
              {addOnServices.map((item) => (
                <AddOnItem
                  key={item.service}
                  service={item.service}
                  price={item.price}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
