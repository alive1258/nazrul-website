"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import SlideDown from "@/src/components/Common/Animaation/SlideDown";
import SlideUp from "@/src/components/Common/Animaation/SlideUp";
import bn from "@/src/data/locales/bn.json";
import en from "@/src/data/locales/en.json";
import ar from "@/src/data/locales/ar.json";

const LATIN_FONT = { fontFamily: "var(--font-inter)" };
const ARABIC_FONT = { fontFamily: "var(--font-arabic)" };

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="py-16 md:py-24 bg-white"
    >
      <div className="container">
        <SlideDown className="flex flex-col items-center text-center gap-4 mb-10 md:mb-12">
          <div>
            <h2
              id="faq-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900"
            >
              <span className="block" style={ARABIC_FONT} dir="rtl">
                {ar.faq.heading}
              </span>
              <span
                className="block text-2xl sm:text-3xl md:text-4xl mt-1"
                style={LATIN_FONT}
              >
                {en.faq.heading}
              </span>
              <span className="block text-2xl sm:text-3xl md:text-4xl mt-1">
                {bn.faq.heading}
              </span>
            </h2>
            <p className="text-gray-500 mt-2 text-sm sm:text-base space-y-0.5">
              <span className="block" style={ARABIC_FONT} dir="rtl">
                {ar.faq.subtitle}
              </span>
              <span className="block" style={LATIN_FONT}>
                {en.faq.subtitle}
              </span>
              <span className="block">{bn.faq.subtitle}</span>
            </p>
          </div>
        </SlideDown>

        <div className="max-w-3xl mx-auto space-y-3">
          {bn.faq.items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <SlideUp
                key={index}
                delay={Math.min(index + 1, 4)}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="w-full flex items-start gap-3 text-left px-5 py-4 sm:px-6 sm:py-5"
                >
                  <span className="flex-1 font-medium text-gray-900 space-y-0.5">
                    <span className="block text-sm sm:text-base" style={ARABIC_FONT} dir="rtl">
                      {ar.faq.items[index].question}
                    </span>
                    <span className="block text-sm sm:text-base" style={LATIN_FONT}>
                      {en.faq.items[index].question}
                    </span>
                    <span className="block text-sm sm:text-base">
                      {item.question}
                    </span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-indigo-600 shrink-0 mt-0.5 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-gray-600 text-sm sm:text-base leading-relaxed space-y-2">
                    <p style={ARABIC_FONT} dir="rtl">
                      {ar.faq.items[index].answer}
                    </p>
                    <p style={LATIN_FONT}>{en.faq.items[index].answer}</p>
                    <p>{item.answer}</p>
                  </div>
                )}
              </SlideUp>
            );
          })}
        </div>
      </div>
    </section>
  );
}
