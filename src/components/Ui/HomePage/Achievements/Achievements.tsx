"use client";

import { BookOpen, Globe2, Languages, Award } from "lucide-react";
import SlideDown from "@/src/components/Common/Animaation/SlideDown";
import SlideUp from "@/src/components/Common/Animaation/SlideUp";
import bn from "@/src/data/locales/bn.json";
import en from "@/src/data/locales/en.json";
import ar from "@/src/data/locales/ar.json";

const LATIN_FONT = { fontFamily: "var(--font-inter)" };
const ARABIC_FONT = { fontFamily: "var(--font-arabic)" };

export default function Achievements() {
  const stats = [
    { icon: BookOpen, value: `${bn.education.stages.length}` },
    { icon: Globe2, value: "2" },
    { icon: Languages, value: "3" },
    { icon: Award, value: "1" },
  ];

  return (
    <section
      id="achievements"
      aria-labelledby="achievements-heading"
      className="py-16 md:py-24 bg-white"
    >
      <div className="container">
        <SlideDown className="flex flex-col items-center text-center gap-4 mb-10 md:mb-12">
          <div>
            <h2
              id="achievements-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900"
            >
              <span className="block" style={ARABIC_FONT} dir="rtl">
                {ar.achievements.heading}
              </span>
              <span
                className="block text-2xl sm:text-3xl md:text-4xl mt-1"
                style={LATIN_FONT}
              >
                {en.achievements.heading}
              </span>
              <span className="block text-2xl sm:text-3xl md:text-4xl mt-1">
                {bn.achievements.heading}
              </span>
            </h2>
            <p className="text-gray-500 mt-2 text-sm sm:text-base space-y-0.5">
              <span className="block" style={ARABIC_FONT} dir="rtl">
                {ar.achievements.subtitle}
              </span>
              <span className="block" style={LATIN_FONT}>
                {en.achievements.subtitle}
              </span>
              <span className="block">{bn.achievements.subtitle}</span>
            </p>
          </div>
        </SlideDown>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {bn.achievements.stats.map((stat, index) => {
            const Icon = stats[index].icon;
            return (
              <SlideUp
                key={index}
                delay={Math.min(index + 1, 4)}
                className="h-full text-center bg-gradient-to-br from-indigo-50 to-indigo-100/60 rounded-2xl p-5 sm:p-6 border border-indigo-100"
              >
                <span className="inline-flex items-center justify-center p-3 bg-white rounded-xl shadow-sm mb-4">
                  <Icon className="w-6 h-6 text-indigo-600" aria-hidden="true" />
                </span>
                <span className="block text-3xl sm:text-4xl font-bold text-gray-900">
                  {stats[index].value}
                  <span className="text-indigo-600">+</span>
                </span>
                <span className="block text-xs sm:text-sm font-medium text-gray-500 mt-2 space-y-0.5">
                  <span className="block" style={ARABIC_FONT} dir="rtl">
                    {ar.achievements.stats[index].label}
                  </span>
                  <span className="block" style={LATIN_FONT}>
                    {en.achievements.stats[index].label}
                  </span>
                  <span className="block">{stat.label}</span>
                </span>
              </SlideUp>
            );
          })}
        </div>
      </div>
    </section>
  );
}
