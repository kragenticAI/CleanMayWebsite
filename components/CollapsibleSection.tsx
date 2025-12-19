"use client"
import React, { useState, ReactNode } from 'react';
// Import the header component you already made
import CollapsibleHeader from './CollapsibleHeader'; // Adjust path as needed

// Define the props
interface ICollapsibleSectionProps {
  title: string;
  startOpen?: boolean;
  children: ReactNode; // This accepts any JSX as content
}

const CollapsibleSection: React.FC<ICollapsibleSectionProps> = ({ 
  title, 
  children, 
  startOpen = false 
}) => {
  
  const [isOpen, setIsOpen] = useState(startOpen);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    // Add margin for spacing between sections
    <div className="w-full  my-4"> 
      
      {/* 1. Use the reusable header */}
      <CollapsibleHeader 
        title={title}
        isOpen={isOpen}
        onClick={toggleOpen}
      />

      {/* 2. The Collapsible Content */}
      {/* Conditionally render the 'children' passed from the parent */}
      {isOpen && (
        <div className=" pb-8">
          {children}
        </div>
      )}

      {/* Bottom border */}
      <div className="border-b border-gray-200"></div>
    </div>
  );
};

export default CollapsibleSection;