"use client";

import Image from "next/image";
import { MapPin, BookOpen, GraduationCap, type LucideIcon } from "lucide-react";
import SlideDown from "@/src/components/Common/Animaation/SlideDown";
import SlideUp from "@/src/components/Common/Animaation/SlideUp";
import bn from "@/src/data/locales/bn.json";
import en from "@/src/data/locales/en.json";
import ar from "@/src/data/locales/ar.json";

const ICONS: Record<string, LucideIcon> = {
  mapPin: MapPin,
  graduationCap: GraduationCap,
  bookOpen: BookOpen,
};

const LATIN_FONT = { fontFamily: "var(--font-inter)" };
const ARABIC_FONT = { fontFamily: "var(--font-arabic)" };

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-br from-indigo-50 via-white to-gray-50 overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,#4338CA_1px,transparent_1px)] bg-size-[40px_40px]"></div>
      </div>

      <div className="container relative grid md:grid-cols-2 gap-6 md:gap-8 items-center">
        <div className="text-center md:text-left order-2 md:order-1">
          <SlideUp>
            <h1 className="mb-3">
              <span
                className="block text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700"
                style={ARABIC_FONT}
                dir="rtl"
              >
                {ar.hero.name}
              </span>
              <span
                className="block text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 mt-1"
                style={LATIN_FONT}
              >
                {en.hero.name}
              </span>
              <span className="block text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mt-1">
                {bn.hero.name}
              </span>
            </h1>

            <p className="text-base sm:text-lg text-indigo-700 font-medium mb-6 flex flex-wrap items-center justify-center md:justify-start gap-x-2">
              <span style={ARABIC_FONT} dir="rtl">
                {ar.hero.role}
              </span>
              <span className="text-indigo-300">|</span>
              <span style={LATIN_FONT}>{en.hero.role}</span>
              <span className="text-indigo-300">|</span>
              <span>{bn.hero.role}</span>
            </p>

            <div className="max-w-xl mx-auto md:mx-0 text-gray-600 text-sm sm:text-base leading-relaxed mb-8 space-y-2">
              <p style={ARABIC_FONT} dir="rtl">
                {ar.hero.tagline}
              </p>
              <p style={LATIN_FONT}>{en.hero.tagline}</p>
              <p>{bn.hero.tagline}</p>
            </div>
          </SlideUp>

          <SlideUp delay={2}>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
              {bn.hero.badges.map((badge, i) => {
                const Icon = ICONS[badge.icon];
                return (
                  <span
                    key={badge.icon}
                    className="inline-flex flex-wrap items-center gap-x-2 gap-y-1 bg-white border border-gray-200 shadow-sm rounded-full px-4 py-2 text-xs sm:text-sm text-gray-600"
                  >
                    <Icon className="w-4 h-4 text-indigo-600 shrink-0" />
                    <span style={ARABIC_FONT} dir="rtl">
                      {ar.hero.badges[i].label}
                    </span>
                    <span className="text-gray-300">|</span>
                    <span style={LATIN_FONT}>{en.hero.badges[i].label}</span>
                    <span className="text-gray-300">|</span>
                    <span>{badge.label}</span>
                  </span>
                );
              })}
            </div>
          </SlideUp>
        </div>

        <SlideDown className="order-1 md:order-2 flex justify-center md:justify-end">
          <div className="relative w-full max-w-md aspect-3/4 rounded-2xl overflow-hidden ring-4 ring-white shadow-xl shadow-indigo-200">
            <Image
              src="/img/WhatsApp Image 2026-08-06 at 8.19.15 PM (1).jpeg"
              alt={bn.hero.name}
              fill
              sizes="(min-width: 768px) 448px, 100vw"
              className="object-cover"
              priority
            />
          </div>
        </SlideDown>
      </div>
    </section>
  );
}
