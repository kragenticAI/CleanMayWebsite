'use client';

import { ReactNode } from 'react';

interface HomeSizeCardProps {
  title: string;
  subtitle: string;
  icon: ReactNode;
  selected?: boolean;
  onClick: () => void;
}

export default function HomeSizeCard({
  title,
  subtitle,
  icon,
  selected = false,
  onClick,
}: HomeSizeCardProps) {
  return (
    <div
      onClick={onClick}
      className={`flex flex-col items-center justify-center 
        border rounded-[10px] cursor-pointer   lg:w-[100px] h-[140px]
                transition-all duration-200 ease-in-out p-4 
        ${
          selected
            ? 'bg-[#e4e6f9] border-blue-500 shadow-sm'
            : 'bg-white border border-[rgba(0,0,0,0.1)] hover:shadow-md'
        }`}
    >
      <div className="text-blue-700 mb-2">{icon}</div>
      <div className="text-center text-sm font-semibold text-gray-900">{title}</div>
      <div className="text-center text-xs text-gray-500 mt-1">{subtitle}</div>
    </div>
  );
}
