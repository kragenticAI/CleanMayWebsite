import React from "react";

interface SectionBlockProps {
  heading: string;
  content: string;
}

const sectionBlock: React.FC<SectionBlockProps> = ({ heading, content }) => {
  return (
    <div className="space-y-3 py-3 ">
      <h2 className="text-2xl font-bold  text-[#2937b1] uppercase">{heading}</h2>
      <p className="text-gray-700 leading-relaxed whitespace-pre-line">
        {content}
      </p>
    </div>
  );
};

export default sectionBlock;
