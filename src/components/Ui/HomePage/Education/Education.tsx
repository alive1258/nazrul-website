"use client";

import { GraduationCap } from "lucide-react";
import SlideDown from "@/src/components/Common/Animaation/SlideDown";
import SlideUp from "@/src/components/Common/Animaation/SlideUp";
import bn from "@/src/data/locales/bn.json";
import en from "@/src/data/locales/en.json";
import ar from "@/src/data/locales/ar.json";

const LATIN_FONT = { fontFamily: "var(--font-inter)" };
const ARABIC_FONT = { fontFamily: "var(--font-arabic)" };

export default function Education() {
  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="py-16 md:py-24 bg-gradient-to-br from-indigo-50/40 via-white to-white"
    >
      <div className="container">
        <SlideDown className="flex flex-col items-center text-center gap-4 mb-12 md:mb-16">
          <div className="p-3 bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-2xl shadow-lg shadow-indigo-200 shrink-0">
            <GraduationCap
              className="w-7 h-7 sm:w-8 sm:h-8 text-white"
              aria-hidden="true"
            />
          </div>
          <div>
            <h2
              id="education-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900"
            >
              <span className="block" style={ARABIC_FONT} dir="rtl">
                {ar.education.heading}
              </span>
              <span
                className="block text-2xl sm:text-3xl md:text-4xl mt-1"
                style={LATIN_FONT}
              >
                {en.education.heading}
              </span>
              <span className="block text-2xl sm:text-3xl md:text-4xl mt-1">
                {bn.education.heading}
              </span>
            </h2>
            <p className="text-gray-500 mt-2 text-sm sm:text-base space-y-0.5">
              <span className="block" style={ARABIC_FONT} dir="rtl">
                {ar.education.subtitle}
              </span>
              <span className="block" style={LATIN_FONT}>
                {en.education.subtitle}
              </span>
              <span className="block">{bn.education.subtitle}</span>
            </p>
          </div>
        </SlideDown>

        <ol className="relative max-w-3xl mx-auto">
          <div
            className="absolute left-5 sm:left-6 top-2 bottom-2 w-0.5 bg-indigo-100"
            aria-hidden="true"
          />

          {bn.education.stages.map((stage, index) => {
            const isCurrent = Boolean(stage.current);
            return (
              <SlideUp
                key={index}
                delay={Math.min(index + 1, 4)}
                className="relative pl-14 sm:pl-16 pb-10 last:pb-0"
              >
                <span
                  className={`absolute left-0 top-0 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full border-4 border-white shadow-md ${
                    isCurrent
                      ? "bg-gradient-to-br from-indigo-500 to-indigo-700"
                      : "bg-indigo-100"
                  }`}
                >
                  <GraduationCap
                    className={`w-4 h-4 sm:w-5 sm:h-5 ${
                      isCurrent ? "text-white" : "text-indigo-600"
                    }`}
                    aria-hidden="true"
                  />
                </span>

                <div
                  className={`bg-white rounded-2xl p-5 sm:p-6 shadow-sm border ${
                    isCurrent ? "border-indigo-200 ring-1 ring-indigo-100" : "border-gray-100"
                  }`}
                >
                  {isCurrent && (
                    <span className="inline-flex items-center gap-2 mb-3 rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 animate-pulse" />
                      <span style={ARABIC_FONT} dir="rtl">
                        {ar.education.currentLabel}
                      </span>
                      <span style={LATIN_FONT}>{en.education.currentLabel}</span>
                      <span>{bn.education.currentLabel}</span>
                    </span>
                  )}

                  <h3 className="font-bold text-gray-900 space-y-0.5">
                    <span
                      className="block text-base sm:text-lg"
                      style={ARABIC_FONT}
                      dir="rtl"
                    >
                      {ar.education.stages[index].stage}
                    </span>
                    <span className="block text-base sm:text-lg" style={LATIN_FONT}>
                      {en.education.stages[index].stage}
                    </span>
                    <span className="block text-base sm:text-lg">{stage.stage}</span>
                  </h3>

                  <p className="text-indigo-600 font-medium text-sm mt-1 space-y-0.5">
                    <span className="block" style={ARABIC_FONT} dir="rtl">
                      {ar.education.stages[index].institution}
                    </span>
                    <span className="block" style={LATIN_FONT}>
                      {en.education.stages[index].institution}
                    </span>
                    <span className="block">{stage.institution}</span>
                  </p>

                  <div className="text-gray-600 text-sm leading-relaxed mt-3 space-y-1.5">
                    <p style={ARABIC_FONT} dir="rtl">
                      {ar.education.stages[index].description}
                    </p>
                    <p style={LATIN_FONT}>{en.education.stages[index].description}</p>
                    <p>{stage.description}</p>
                  </div>
                </div>
              </SlideUp>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
