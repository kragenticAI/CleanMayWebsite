import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import PrimaryButton from '../buttons/PrimaryButton';

// ✅ Type for FeatureListItem
interface FeatureListItemProps {
  children: React.ReactNode;
}

const FeatureListItem: React.FC<FeatureListItemProps> = ({ children }) => (
  <li className="flex items-start space-x-3">
    <div className="flex-shrink-0">
      <CheckCircle2 className="h-5 w-5 text-[#fae084]" />
    </div>
    <span className="text-gray-600">{children}</span>
  </li>
);

// ✅ Type for PricingCard props
interface PricingCardProps {
  plan: string;
  price: string;
  description: string;
  subDescription?: string;
  features: string[];
  discounts: string[];
}

export const PricingCard: React.FC<PricingCardProps> = ({
  plan,
  price,
  description,
  subDescription,
  features,
  discounts,
}) => (
  <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col">
    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan}</h3>
    <p className="text-5xl font-extrabold mb-3">{price}</p>
    <p className="font-semibold text-gray-800">{description}</p>
    <p className="text-sm text-gray-500 mb-6">{subDescription}</p>

    {/* ✅ Feature List */}
    <ul className="space-y-3 mb-8">
      {features.map((feature, index) => (
        <FeatureListItem key={index}>{feature}</FeatureListItem>
      ))}
    </ul>

    {/* ✅ Footer / Discounts Section */}
    <div className="mt-auto">
      <div className="rounded-lg p-4 mb-6">
        <h4 className="font-semibold text-gray-800 mb-2">Recurring Customers</h4>
        <ul className="text-sm text-gray-600 space-y-1">
          {discounts.map((discount, index) => (
            <li key={index}>{discount}</li>
          ))}
        </ul>
      </div>
      <div className="text-center">
        <PrimaryButton className="text-white hover:underline">
          BOOK NOW
        </PrimaryButton>
      </div>
    </div>
  </div>
);
