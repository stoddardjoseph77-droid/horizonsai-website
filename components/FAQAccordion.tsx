"use client";

import { useState } from "react";
import { track, EVENTS } from "@/lib/analytics";

interface FAQItem { question: string; answer: string; }
interface FAQAccordionProps { items: FAQItem[]; }

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number, question: string) => {
    const willOpen = openIndex !== index;
    setOpenIndex(willOpen ? index : null);
    queueMicrotask(() => track(EVENTS.FAQ_TOGGLED, { index, question, open: willOpen }));
  };

  return (
    <div className="max-w-2xl divide-y divide-white/[0.06]">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={index}>
            <button
              onClick={() => toggle(index, item.question)}
              aria-expanded={isOpen}
              className="w-full flex items-center justify-between py-5 text-left group"
            >
              <span className="font-medium text-[#E8EAED] pr-6 group-hover:text-white transition-colors text-base md:text-lg">
                {item.question}
              </span>
              <span
                className={`text-gold text-lg shrink-0 transition-transform duration-150 ease-out ${
                  isOpen ? "rotate-45" : ""
                }`}
              >
                +
              </span>
            </button>
            <div
              className="grid transition-[grid-template-rows] duration-200 ease-out"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <p
                  className={`pb-5 text-muted leading-relaxed text-sm md:text-base transition-opacity duration-150 ${
                    isOpen ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
