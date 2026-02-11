"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  variant?: "dark" | "light";
}

export default function FAQAccordion({
  items,
  variant = "dark",
}: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const isDark = variant === "dark";

  return (
    <div className="space-y-4 max-w-3xl mx-auto">
      {items.map((item, index) => (
        <div
          key={index}
          className={
            isDark
              ? "glass-card overflow-hidden"
              : "border border-light-border rounded-3xl overflow-hidden"
          }
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className={`w-full flex items-center justify-between p-5 text-left transition-colors ${
              isDark ? "hover:bg-white/[0.06]" : "hover:bg-light-secondary/50"
            }`}
          >
            <span
              className={`font-heading font-semibold pr-4 ${
                isDark ? "text-text-on-dark" : "text-text-primary"
              }`}
            >
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
          <AnimatePresence initial={false}>
            {openIndex === index && (
              <motion.div
                key="content"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="px-5 pb-5">
                  <p
                    className={`leading-relaxed ${
                      isDark ? "text-white/60" : "text-text-secondary"
                    }`}
                  >
                    {item.answer}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
