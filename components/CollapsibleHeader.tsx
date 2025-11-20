import React from 'react';

// Define the props this component will accept
interface ICollapsibleHeaderProps {
  title: string;
  isOpen: boolean;
  onClick: () => void;
}

const CollapsibleHeader: React.FC<ICollapsibleHeaderProps> = ({ title, isOpen, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex justify-between items-center w-full"
      aria-expanded={isOpen}
    >
      <h2 className="text-lg font-bold text-gray-900">{title}</h2>
      
      {/* This is the + / — icon */}
      <span className="text-[50px] font-light text-gray-700">
        {isOpen ? '-' : '+'}
      </span>
    </button>
  );
};

export default CollapsibleHeader;