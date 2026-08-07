"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import SlideDown from "@/src/components/Common/Animaation/SlideDown";
import SlideUp from "@/src/components/Common/Animaation/SlideUp";
import bn from "@/src/data/locales/bn.json";
import en from "@/src/data/locales/en.json";
import ar from "@/src/data/locales/ar.json";

const LATIN_FONT = { fontFamily: "var(--font-inter)" };
const ARABIC_FONT = { fontFamily: "var(--font-arabic)" };

const IMAGES = [
  "/img/WhatsApp Image 2026-08-06 at 8.19.14 PM (1).jpeg",
  "/img/WhatsApp Image 2026-08-06 at 8.19.14 PM.jpeg",
  "/img/WhatsApp Image 2026-08-06 at 8.19.15 PM (2).jpeg",
  "/img/WhatsApp Image 2026-08-06 at 8.19.15 PM.jpeg",
  "/img/WhatsApp Image 2026-08-06 at 8.19.17 PM.jpeg",
  "/img/WhatsApp Image 2026-08-06 at 8.19.18 PM (1).jpeg",
  "/img/WhatsApp Image 2026-08-06 at 8.19.18 PM (2).jpeg",
  "/img/WhatsApp Image 2026-08-06 at 8.19.18 PM.jpeg",
  "/img/WhatsApp Image 2026-08-06 at 8.19.19 PM (1).jpeg",
  "/img/WhatsApp Image 2026-08-06 at 8.19.19 PM.jpeg",
  "/img/WhatsApp Image 2026-08-06 at 8.19.20 PM.jpeg",
  "/img/WhatsApp Image 2026-08-06 at 8.19.21 PM (1).jpeg",
  "/img/WhatsApp Image 2026-08-06 at 8.19.21 PM (2).jpeg",
  "/img/WhatsApp Image 2026-08-06 at 8.19.21 PM (3).jpeg",
  "/img/WhatsApp Image 2026-08-06 at 8.19.21 PM (4).jpeg",
  "/img/WhatsApp Image 2026-08-06 at 8.19.21 PM (5).jpeg",
  "/img/WhatsApp Image 2026-08-06 at 8.19.21 PM.jpeg",
  "/img/WhatsApp Image 2026-08-06 at 8.19.22 PM.jpeg",
  "/img/WhatsApp Image 2026-08-06 at 8.19.23 PM.jpeg",
  "/img/WhatsApp Image 2026-08-06 at 8.19.24 PM (1).jpeg",
  "/img/WhatsApp Image 2026-08-06 at 8.19.24 PM.jpeg",
  "/img/WhatsApp Image 2026-08-06 at 8.19.25 PM (1).jpeg",
  "/img/WhatsApp Image 2026-08-06 at 8.19.25 PM.jpeg",
  "/img/WhatsApp Image 2026-08-06 at 8.19.26 PM (1).jpeg",
  "/img/WhatsApp Image 2026-08-06 at 8.19.26 PM.jpeg",
  "/img/WhatsApp Image 2026-08-06 at 8.19.27 PM (1).jpeg",
  "/img/WhatsApp Image 2026-08-06 at 8.19.27 PM (2).jpeg",
  "/img/WhatsApp Image 2026-08-06 at 8.19.27 PM.jpeg",
  "/img/WhatsApp Image 2026-08-06 at 8.19.28 PM.jpeg",
  "/img/WhatsApp Image 2026-08-06 at 8.19.29 PM (1).jpeg",
  "/img/WhatsApp Image 2026-08-06 at 8.19.29 PM.jpeg",
  "/img/WhatsApp Image 2026-08-06 at 8.19.30 PM (1).jpeg",
  "/img/WhatsApp Image 2026-08-06 at 8.19.30 PM (2).jpeg",
  "/img/WhatsApp Image 2026-08-06 at 8.19.30 PM (3).jpeg",
  "/img/WhatsApp Image 2026-08-06 at 8.19.30 PM.jpeg",
];

const INITIAL_VISIBLE = 12;
const LOAD_STEP = 8;

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);
  const visibleImages = IMAGES.slice(0, visibleCount);

  useEffect(() => {
    if (activeIndex === null) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveIndex(null);
      if (e.key === "ArrowRight")
        setActiveIndex((i) => (i === null ? i : (i + 1) % IMAGES.length));
      if (e.key === "ArrowLeft")
        setActiveIndex((i) =>
          i === null ? i : (i - 1 + IMAGES.length) % IMAGES.length,
        );
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [activeIndex]);

  return (
    <section
      id="gallery"
      aria-labelledby="gallery-heading"
      className="py-16 md:py-24 bg-linear-to-br from-indigo-50/40 via-white to-white"
    >
      <div className="container">
        <SlideDown className="flex flex-col items-center text-center gap-4 mb-10 md:mb-12">
          <div>
            <h2
              id="gallery-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900"
            >
              <span className="block" style={ARABIC_FONT} dir="rtl">
                {ar.gallery.heading}
              </span>
              <span
                className="block text-2xl sm:text-3xl md:text-4xl mt-1"
                style={LATIN_FONT}
              >
                {en.gallery.heading}
              </span>
              <span className="block text-2xl sm:text-3xl md:text-4xl mt-1">
                {bn.gallery.heading}
              </span>
            </h2>
            <p className="text-gray-500 mt-2 text-sm sm:text-base space-y-0.5">
              <span className="block" style={ARABIC_FONT} dir="rtl">
                {ar.gallery.subtitle}
              </span>
              <span className="block" style={LATIN_FONT}>
                {en.gallery.subtitle}
              </span>
              <span className="block">{bn.gallery.subtitle}</span>
            </p>
          </div>
        </SlideDown>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
          {visibleImages.map((src, index) => (
            <SlideUp
              key={src}
              delay={Math.min((index % 4) + 1, 4)}
              className="relative aspect-square rounded-xl overflow-hidden shadow-sm border border-gray-100 group cursor-pointer"
            >
              <button
                type="button"
                onClick={() => setActiveIndex(index)}
                className="block w-full h-full"
                aria-label={`${bn.gallery.imageAlt} ${index + 1}`}
              >
                <Image
                  src={src}
                  alt={`${bn.gallery.imageAlt} ${index + 1}`}
                  fill
                  sizes="(min-width: 768px) 25vw, 50vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </button>
            </SlideUp>
          ))}
        </div>

        {visibleCount < IMAGES.length && (
          <div className="flex justify-center mt-8 md:mt-10">
            <button
              type="button"
              onClick={() =>
                setVisibleCount((count) =>
                  Math.min(count + LOAD_STEP, IMAGES.length),
                )
              }
              className="inline-flex items-center gap-x-1.5 rounded-full px-6 py-2.5 text-xs sm:text-sm font-medium bg-indigo-600 text-white hover:bg-indigo-700 transition-colors shadow-sm"
            >
              <span style={ARABIC_FONT} dir="rtl">
                {ar.gallery.loadMore}
              </span>
              <span className="text-indigo-200">|</span>
              <span style={LATIN_FONT}>{en.gallery.loadMore}</span>
              <span className="text-indigo-200">|</span>
              <span>{bn.gallery.loadMore}</span>
            </button>
          </div>
        )}
      </div>

      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          role="dialog"
          aria-modal="true"
          onClick={() => setActiveIndex(null)}
        >
          <button
            type="button"
            onClick={() => setActiveIndex(null)}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            aria-label="Close"
          >
            <X className="w-6 h-6" aria-hidden="true" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setActiveIndex((i) =>
                i === null ? i : (i - 1 + IMAGES.length) % IMAGES.length,
              );
            }}
            className="absolute left-2 sm:left-6 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" aria-hidden="true" />
          </button>

          <div
            className="relative w-full max-w-3xl aspect-4/3 sm:aspect-16/10"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={IMAGES[activeIndex]}
              alt={`${bn.gallery.imageAlt} ${activeIndex + 1}`}
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setActiveIndex((i) => (i === null ? i : (i + 1) % IMAGES.length));
            }}
            className="absolute right-2 sm:right-6 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" aria-hidden="true" />
          </button>
        </div>
      )}
    </section>
  );
}
