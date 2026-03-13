"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Are there side effects?",
    a: "Some users may notice mild warmth, tingling, temporary dryness, or a faint sulfur-like odor. These are known characteristics of DMSO and botanical ingredients and often lessen with use. If significant irritation occurs, discontinue use.",
  },
  {
    q: "Is this suitable for sensitive skin?",
    a: "Many people with sensitive skin find it suitable when used as directed, but everyone’s skin is different. Patch test first, and discontinue if irritation occurs.",
  },
  {
    q: "Can I use it with other lotions or medications?",
    a: "Because DMSO enhances absorption, avoid applying other products immediately before or after. Wait until the cream is fully absorbed and your skin is free of other substances.",
  },
  {
    q: "Can I use it on any part of the body?",
    a: "The cream is formulated for use on areas of daily tension and overworked skin. Avoid eyes, open wounds, and mucous membranes, and always check skin tolerance in a small area first.",
  },
  {
    q: "How often should I apply it? Do I need to clean the skin first?",
    a: "Use once or twice daily. More frequent use may increase sensitivity. Start with a small amount. Apply only to clean, dry skin. Avoid lotions, oils, or cosmetics before use.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpen(open === index ? null : index);
  };

  return (
    <section id="faq" className="bg-gray-50 py-20">
      <div className="max-w-3xl mx-auto px-6">

        {/* Header */}
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
          Frequently Asked Questions
        </h2>

        {/* Accordion */}
        <div className="space-y-2">

          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-gray-200">

              <button
                onClick={() => toggle(i)}
                className="w-full flex justify-between items-center text-left py-3"
              >
                <span className="font-medium text-gray-900">
                  {faq.q}
                </span>
                <span className="text-xl text-gray-500">
                  {open === i ? "−" : "+"}
                </span>
              </button>

              {open === i && (
                <p className="text-gray-600 pb-3 text-sm leading-relaxed">
                  {faq.a}
                </p>
              )}

            </div>
          ))}

        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <a
            href="https://vigority.com/products/dmso-cream?_pos=1&_psq=DMSO&_ss=e&_v=1.0"
            className="bg-brand text-white px-8 py-3 rounded-lg font-semibold"
          >
            Get Treatment Kit
          </a>
        </div>

      </div>
    </section>
  );
}