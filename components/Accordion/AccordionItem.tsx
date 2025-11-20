"use client";

import React, { useState, ReactNode } from 'react';

interface AccordionItemProps {
  title: string;
  children: ReactNode;
}

/**
 * A reusable AccordionItem component
 * Manages its own open/close state.
 */
const AccordionItem: React.FC<AccordionItemProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between py-5 text-left"
      >
        <span className="text-xl font-medium text-gray-800">{title}</span>
        <span className="text-2xl text-gray-500">
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
            </svg>
          )}
        </span>
      </button>

      {isOpen && (
        <div className="pb-5 pr-10 text-gray-600">
          {children}
        </div>
      )}
    </div>
  );
};

export default AccordionItem;
