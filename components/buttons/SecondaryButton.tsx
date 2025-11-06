'use client';

import { ReactNode } from 'react';

export default function SecondaryButton({ children }: { children: ReactNode }) {
  return (
    <button className="bg-yellow-400 text-gray-800 px-6 py-3 rounded-full font-medium hover:bg-yellow-500 transition-colors flex items-center">
      {children}
    </button>
  );
}