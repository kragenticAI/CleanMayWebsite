"use client";
import React, { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  faqs: FAQItem[];
}

const FAQAccordion: React.FC<FAQAccordionProps> = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="w-full bg-white py-12">
      {/* Center Container */}
      <div className="max-w-3xl mx-auto px-4 md:px-0">
        <h2 className="text-3xl font-bold text-[#2937b1] text-center mb-8 uppercase">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border border-gray-200 rounded-lg shadow-sm bg-white"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex justify-between items-center px-4 py-3 font-semibold text-gray-900"
                >
                  <span>{faq.question}</span>
                  <span className="text-2xl text-gray-600">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-4 py-3 border-t border-gray-200 text-gray-700 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FAQAccordion;
