"use client";

import { User, MapPin, GraduationCap, BookOpen, Award } from "lucide-react";
import SlideDown from "@/src/components/Common/Animaation/SlideDown";
import SlideLeft from "@/src/components/Common/Animaation/SlideLeft";
import SlideRight from "@/src/components/Common/Animaation/SlideRight";
import SlideUp from "@/src/components/Common/Animaation/SlideUp";
import bn from "@/src/data/locales/bn.json";
import en from "@/src/data/locales/en.json";
import ar from "@/src/data/locales/ar.json";

const LATIN_FONT = { fontFamily: "var(--font-inter)" };
const ARABIC_FONT = { fontFamily: "var(--font-arabic)" };

export default function About() {
  const facts = [
    {
      icon: MapPin,
      ar: ar.about.facts.address,
      en: en.about.facts.address,
      bn: bn.about.facts.address,
      value: {
        ar: "نوهاتا، شوهالي، سيراج‌غانج",
        en: "Nowhata, Chauhali, Sirajganj",
        bn: "নওহাটা, চৌহালী, সিরাজগঞ্জ",
      },
    },
    {
      icon: GraduationCap,
      ar: ar.about.facts.institution,
      en: en.about.facts.institution,
      bn: bn.about.facts.institution,
      value: {
        ar: ar.hero.badges[1].label,
        en: en.hero.badges[1].label,
        bn: bn.hero.badges[1].label,
      },
    },
    {
      icon: BookOpen,
      ar: ar.about.facts.specialty,
      en: en.about.facts.specialty,
      bn: bn.about.facts.specialty,
      value: {
        ar: ar.about.facts.specialtyValue,
        en: en.about.facts.specialtyValue,
        bn: bn.about.facts.specialtyValue,
      },
    },
  ];

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="py-16 md:py-24 bg-white"
    >
      <div className="container">
        <SlideDown className="flex flex-col items-center text-center gap-4 mb-10 md:mb-12">
          <div>
            <h2
              id="about-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900"
            >
              <span className="block" style={ARABIC_FONT} dir="rtl">
                {ar.about.heading}
              </span>
              <span
                className="block text-2xl sm:text-3xl md:text-4xl mt-1"
                style={LATIN_FONT}
              >
                {en.about.heading}
              </span>
              <span className="block text-2xl sm:text-3xl md:text-4xl mt-1">
                {bn.about.heading}
              </span>
            </h2>
            <p className="text-gray-500 mt-2 text-sm sm:text-base space-y-0.5">
              <span className="block" style={ARABIC_FONT} dir="rtl">
                {ar.about.subtitle}
              </span>
              <span className="block" style={LATIN_FONT}>
                {en.about.subtitle}
              </span>
              <span className="block">{bn.about.subtitle}</span>
            </p>
          </div>
        </SlideDown>

        <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
          <SlideLeft className="lg:col-span-2">
            <div className="h-full bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 space-y-6">
              {bn.about.paragraphs.map((paragraph, index) => (
                <div key={index} className="space-y-2">
                  <p
                    className="text-sm sm:text-base leading-relaxed text-gray-600"
                    style={ARABIC_FONT}
                    dir="rtl"
                  >
                    {ar.about.paragraphs[index]}
                  </p>
                  <p
                    className="text-sm sm:text-base leading-relaxed text-gray-600"
                    style={LATIN_FONT}
                  >
                    {en.about.paragraphs[index]}
                  </p>
                  <p className="text-sm sm:text-base leading-relaxed text-gray-600">
                    {paragraph}
                  </p>
                </div>
              ))}
            </div>
          </SlideLeft>

          <SlideRight>
            <div className="h-full bg-gradient-to-br from-indigo-50 to-indigo-100/60 rounded-2xl p-6 md:p-8 border border-indigo-100">
              <h3 className="text-lg font-bold text-gray-900 mb-5 space-y-0.5">
                <span className="block" style={ARABIC_FONT} dir="rtl">
                  {ar.about.sidebarHeading}
                </span>
                <span className="block text-base" style={LATIN_FONT}>
                  {en.about.sidebarHeading}
                </span>
                <span className="block text-base">
                  {bn.about.sidebarHeading}
                </span>
              </h3>
              <ul className="space-y-5">
                {facts.map(
                  (
                    {
                      icon: Icon,
                      ar: arLabel,
                      en: enLabel,
                      bn: bnLabel,
                      value,
                    },
                    i,
                  ) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="p-2 bg-white rounded-lg shadow-sm shrink-0">
                        <Icon
                          className="w-4 h-4 text-indigo-600"
                          aria-hidden="true"
                        />
                      </span>
                      <span className="space-y-1">
                        <span
                          className="block text-xs font-medium text-indigo-700 uppercase tracking-wide"
                          style={ARABIC_FONT}
                          dir="rtl"
                        >
                          {arLabel}
                        </span>
                        <span
                          className="block text-xs font-medium text-indigo-700 uppercase tracking-wide"
                          style={LATIN_FONT}
                        >
                          {enLabel}
                        </span>
                        <span className="block text-xs font-medium text-indigo-700 uppercase tracking-wide">
                          {bnLabel}
                        </span>
                        <span className="block text-sm text-gray-700 mt-1 space-y-0.5">
                          <span className="block" style={ARABIC_FONT} dir="rtl">
                            {value.ar}
                          </span>
                          <span className="block" style={LATIN_FONT}>
                            {value.en}
                          </span>
                          <span className="block">{value.bn}</span>
                        </span>
                      </span>
                    </li>
                  ),
                )}
              </ul>
            </div>
          </SlideRight>
        </div>

        {bn.about.highlights.length > 0 && (
          <SlideUp delay={2} className="mt-6 md:mt-8">
            <div className="grid sm:grid-cols-2 gap-6">
              {bn.about.highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <span className="p-2 bg-indigo-100 rounded-lg shrink-0 mt-0.5">
                      <Award
                        className="w-4 h-4 text-indigo-600"
                        aria-hidden="true"
                      />
                    </span>
                    <div className="space-y-1">
                      <h3
                        className="font-bold text-gray-900 text-sm sm:text-base"
                        style={ARABIC_FONT}
                        dir="rtl"
                      >
                        {ar.about.highlights[index].title}
                      </h3>
                      <h3
                        className="font-bold text-gray-900 text-sm sm:text-base"
                        style={LATIN_FONT}
                      >
                        {en.about.highlights[index].title}
                      </h3>
                      <h3 className="font-bold text-gray-900 text-sm sm:text-base">
                        {highlight.title}
                      </h3>
                      <p className="text-xs text-indigo-600 font-medium space-y-0.5 pt-1">
                        <span className="block" style={ARABIC_FONT} dir="rtl">
                          {ar.about.highlights[index].location}
                        </span>
                        <span className="block" style={LATIN_FONT}>
                          {en.about.highlights[index].location}
                        </span>
                        <span className="block">{highlight.location}</span>
                      </p>
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <p
                      className="text-sm text-gray-600 leading-relaxed"
                      style={ARABIC_FONT}
                      dir="rtl"
                    >
                      {ar.about.highlights[index].description}
                    </p>
                    <p
                      className="text-sm text-gray-600 leading-relaxed"
                      style={LATIN_FONT}
                    >
                      {en.about.highlights[index].description}
                    </p>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </SlideUp>
        )}
      </div>
    </section>
  );
}
