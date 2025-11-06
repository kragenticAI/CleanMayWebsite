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
      className={`flex flex-col items-center p-4 border rounded-[10px]  cursor-pointer padding-[10px] w-[111px] transition-all  ${
        selected 
          ? 'bg-[#e4e6f9] border border-[rgba(0,0,0,0.1)] ' 
          : ' border border-[rgba(0,0,0,0.1)] '
      }`}
    >
      <div className="text-blue-700 mb-2">{icon}</div>
      <div className="text-center text-sm font-medium">{title}</div>
      <div className="text-xs text-gray-500 mt-1">{subtitle}</div>
    </div>
  );
}