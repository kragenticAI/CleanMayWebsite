'use client';

import { ReactNode } from 'react';

interface PrimaryButtonProps {
  children: ReactNode;
 
  onClick?: () => void;
  className?: string;
}

export default function PrimaryButton({
  children,
  onClick,
 
  className = "",
}: PrimaryButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`bg-[#2937b1] cursor-pointer  px-8 py-3 rounded-full font-medium text-[18px] font-semibold 
    hover:bg-[#00084c]  underline-offset-4 transition-all ${className}`}
    >
      {children}
    </button>

  );
}
