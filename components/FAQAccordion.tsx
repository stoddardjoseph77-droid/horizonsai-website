"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3 max-w-3xl mx-auto">
      {items.map((item, index) => (
        <div
          key={index}
          className="border border-light-border rounded-xl overflow-hidden"
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full flex items-center justify-between p-5 text-left hover:bg-light-secondary/50 transition-colors"
          >
            <span className="font-heading font-semibold text-text-primary pr-4">
              {item.question}
            </span>
            <span
              className={`text-brand-primary text-xl shrink-0 transition-transform duration-200 ${
                openIndex === index ? "rotate-45" : ""
              }`}
            >
              +
            </span>
          </button>
          {openIndex === index && (
            <div className="px-5 pb-5">
              <p className="text-text-secondary leading-relaxed">
                {item.answer}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
