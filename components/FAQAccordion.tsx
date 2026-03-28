"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem { question: string; answer: string; }
interface FAQAccordionProps { items: FAQItem[]; }

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="max-w-2xl divide-y divide-white/[0.06]">
      {items.map((item, index) => (
        <div key={index}>
          <button onClick={() => setOpenIndex(openIndex === index ? null : index)} className="w-full flex items-center justify-between py-5 text-left group">
            <span className="font-medium text-[#E8EAED] pr-6 group-hover:text-white transition-colors">{item.question}</span>
            <span className={`text-gold text-lg shrink-0 transition-transform duration-200 ${openIndex === index ? "rotate-45" : ""}`}>+</span>
          </button>
          <AnimatePresence initial={false}>
            {openIndex === index && (
              <motion.div key="content" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: "easeInOut" }} className="overflow-hidden">
                <p className="pb-5 text-muted leading-relaxed text-sm">{item.answer}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
