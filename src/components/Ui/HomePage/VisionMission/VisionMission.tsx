"use client";

import { Eye, Target } from "lucide-react";
import SlideDown from "@/src/components/Common/Animaation/SlideDown";
import SlideLeft from "@/src/components/Common/Animaation/SlideLeft";
import SlideRight from "@/src/components/Common/Animaation/SlideRight";
import bn from "@/src/data/locales/bn.json";
import en from "@/src/data/locales/en.json";
import ar from "@/src/data/locales/ar.json";

const LATIN_FONT = { fontFamily: "var(--font-inter)" };
const ARABIC_FONT = { fontFamily: "var(--font-arabic)" };

export default function VisionMission() {
  const cards = [
    {
      key: "vision",
      icon: Eye,
      slide: SlideLeft,
      ar: ar.visionMission.vision,
      en: en.visionMission.vision,
      bn: bn.visionMission.vision,
    },
    {
      key: "mission",
      icon: Target,
      slide: SlideRight,
      ar: ar.visionMission.mission,
      en: en.visionMission.mission,
      bn: bn.visionMission.mission,
    },
  ];

  return (
    <section
      id="vision-mission"
      aria-labelledby="vision-mission-heading"
      className="py-16 md:py-24 bg-white"
    >
      <div className="container">
        <SlideDown className="flex flex-col items-center text-center gap-4 mb-10 md:mb-12">
          <div>
            <h2
              id="vision-mission-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900"
            >
              <span className="block" style={ARABIC_FONT} dir="rtl">
                {ar.visionMission.heading}
              </span>
              <span
                className="block text-2xl sm:text-3xl md:text-4xl mt-1"
                style={LATIN_FONT}
              >
                {en.visionMission.heading}
              </span>
              <span className="block text-2xl sm:text-3xl md:text-4xl mt-1">
                {bn.visionMission.heading}
              </span>
            </h2>
            <p className="text-gray-500 mt-2 text-sm sm:text-base space-y-0.5">
              <span className="block" style={ARABIC_FONT} dir="rtl">
                {ar.visionMission.subtitle}
              </span>
              <span className="block" style={LATIN_FONT}>
                {en.visionMission.subtitle}
              </span>
              <span className="block">{bn.visionMission.subtitle}</span>
            </p>
          </div>
        </SlideDown>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {cards.map(({ key, icon: Icon, slide: Slide, ar: arC, en: enC, bn: bnC }) => (
            <Slide key={key}>
              <div className="h-full bg-gradient-to-br from-indigo-50 to-indigo-100/60 rounded-2xl p-6 md:p-8 border border-indigo-100">
                <span className="inline-flex items-center justify-center p-3 bg-white rounded-xl shadow-sm mb-5">
                  <Icon className="w-6 h-6 text-indigo-600" aria-hidden="true" />
                </span>

                <h3 className="font-bold text-gray-900 space-y-0.5 mb-3">
                  <span className="block text-lg" style={ARABIC_FONT} dir="rtl">
                    {arC.title}
                  </span>
                  <span className="block text-lg" style={LATIN_FONT}>
                    {enC.title}
                  </span>
                  <span className="block text-lg">{bnC.title}</span>
                </h3>

                <div className="text-gray-600 text-sm sm:text-base leading-relaxed space-y-2">
                  <p style={ARABIC_FONT} dir="rtl">
                    {arC.description}
                  </p>
                  <p style={LATIN_FONT}>{enC.description}</p>
                  <p>{bnC.description}</p>
                </div>
              </div>
            </Slide>
          ))}
        </div>
      </div>
    </section>
  );
}
