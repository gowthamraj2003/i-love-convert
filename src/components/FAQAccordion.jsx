"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FAQAccordion({ faqs }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (!faqs || faqs.length === 0) return null;

  return (
    <div className="faq-list">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={index} className="faq-item" style={{ transition: "all 0.2s ease" }}>
            <button
              onClick={() => toggleIndex(index)}
              className="faq-question"
              style={{
                width: "100%",
                background: "none",
                border: "none",
                textAlign: "left",
                outline: "none",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                color: "var(--text-primary)",
                fontFamily: "inherit"
              }}
              aria-expanded={isOpen}
            >
              <span>{faq.q}</span>
              {isOpen ? <ChevronUp size={18} color="var(--accent)" /> : <ChevronDown size={18} color="var(--text-muted)" />}
            </button>
            
            {isOpen && (
              <div className="faq-answer animate-fade-in" style={{ borderTop: "1px solid var(--border)" }}>
                {faq.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
