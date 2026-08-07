"use client";

import { BookOpen, Languages, Mic2, Plane } from "lucide-react";
import SlideDown from "@/src/components/Common/Animaation/SlideDown";
import SlideUp from "@/src/components/Common/Animaation/SlideUp";
import bn from "@/src/data/locales/bn.json";
import en from "@/src/data/locales/en.json";
import ar from "@/src/data/locales/ar.json";

const LATIN_FONT = { fontFamily: "var(--font-inter)" };
const ARABIC_FONT = { fontFamily: "var(--font-arabic)" };

const ICONS = [BookOpen, Languages, Mic2, Plane];

export default function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="py-16 md:py-24 bg-gradient-to-br from-indigo-50/40 via-white to-white"
    >
      <div className="container">
        <SlideDown className="flex flex-col items-center text-center gap-4 mb-10 md:mb-12">
          <div>
            <h2
              id="services-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900"
            >
              <span className="block" style={ARABIC_FONT} dir="rtl">
                {ar.services.heading}
              </span>
              <span
                className="block text-2xl sm:text-3xl md:text-4xl mt-1"
                style={LATIN_FONT}
              >
                {en.services.heading}
              </span>
              <span className="block text-2xl sm:text-3xl md:text-4xl mt-1">
                {bn.services.heading}
              </span>
            </h2>
            <p className="text-gray-500 mt-2 text-sm sm:text-base space-y-0.5">
              <span className="block" style={ARABIC_FONT} dir="rtl">
                {ar.services.subtitle}
              </span>
              <span className="block" style={LATIN_FONT}>
                {en.services.subtitle}
              </span>
              <span className="block">{bn.services.subtitle}</span>
            </p>
          </div>
        </SlideDown>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {bn.services.items.map((item, index) => {
            const Icon = ICONS[index % ICONS.length];
            return (
              <SlideUp
                key={index}
                delay={Math.min(index + 1, 4)}
                className="h-full bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:border-indigo-200 hover:shadow-md transition-all"
              >
                <span className="inline-flex items-center justify-center p-3 bg-indigo-50 rounded-xl mb-4">
                  <Icon className="w-5 h-5 text-indigo-600" aria-hidden="true" />
                </span>

                <h3 className="font-bold text-gray-900 space-y-0.5 mb-2">
                  <span className="block text-sm sm:text-base" style={ARABIC_FONT} dir="rtl">
                    {ar.services.items[index].title}
                  </span>
                  <span className="block text-sm sm:text-base" style={LATIN_FONT}>
                    {en.services.items[index].title}
                  </span>
                  <span className="block text-sm sm:text-base">
                    {item.title}
                  </span>
                </h3>

                <div className="text-gray-600 text-xs sm:text-sm leading-relaxed space-y-1.5">
                  <p style={ARABIC_FONT} dir="rtl">
                    {ar.services.items[index].description}
                  </p>
                  <p style={LATIN_FONT}>{en.services.items[index].description}</p>
                  <p>{item.description}</p>
                </div>
              </SlideUp>
            );
          })}
        </div>
      </div>
    </section>
  );
}
