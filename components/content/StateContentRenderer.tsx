import React from "react";
import SectionBlock from "./SectionBlock";
import FAQAccordion from "./FAQAccordion";

interface Section {
  heading: string;
  content: string;
}

interface FAQ {
  question: string;
  answer: string;
}

interface StateContent {
  stateName: string;
  sections: Section[];
  faqs: FAQ[];
}

interface Props {
  content: StateContent;
}

const StateContentRenderer: React.FC<Props> = ({ content }) => {
  return (
    <div className="w-full bg-white py-12">
      <div className="max-w-3xl mx-auto px-4 md:px-0">

        {/* STATE PAGE MAIN TITLE */}
        <h1 className="text-3xl md:text-4xl font-bold mb-10 text-center text-[#2937b1] uppercase">
          Cleaning Services in {content.stateName}
        </h1>

        {/* CONTENT SECTIONS */}
        <div className="space-y-12">
          {content.sections.map((section, idx) => (
            <SectionBlock
              key={idx}
              heading={section.heading}
              content={section.content}
            />
          ))}
        </div>

        {/* FAQ SECTION */}
        {content.faqs && content.faqs.length > 0 && (
            <FAQAccordion faqs={content.faqs} />
          
        )}
      </div>
    </div>
  );
};

export default StateContentRenderer;
