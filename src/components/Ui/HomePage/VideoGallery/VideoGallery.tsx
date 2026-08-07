"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Play, X } from "lucide-react";
import SlideDown from "@/src/components/Common/Animaation/SlideDown";
import SlideUp from "@/src/components/Common/Animaation/SlideUp";
import bn from "@/src/data/locales/bn.json";
import en from "@/src/data/locales/en.json";
import ar from "@/src/data/locales/ar.json";
import { videos, type VideoCategory } from "@/src/data/videos";

const LATIN_FONT = { fontFamily: "var(--font-inter)" };
const ARABIC_FONT = { fontFamily: "var(--font-arabic)" };

const CATEGORIES: VideoCategory[] = ["recitation", "lectures", "events"];
const PAGE_SIZE = 9;

export default function VideoGallery() {
  const [activeCategory, setActiveCategory] = useState<VideoCategory | "all">(
    "all",
  );
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  useEffect(() => {
    if (!activeVideo) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveVideo(null);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [activeVideo]);

  const selectCategory = (category: VideoCategory | "all") => {
    setActiveCategory(category);
    setVisibleCount(PAGE_SIZE);
  };

  const filteredVideos =
    activeCategory === "all"
      ? videos
      : videos.filter((video) => video.category === activeCategory);

  const visibleVideos = filteredVideos.slice(0, visibleCount);
  const hasMore = visibleCount < filteredVideos.length;

  return (
    <section
      id="videos"
      aria-labelledby="videos-heading"
      className="py-16 md:py-24 bg-white"
    >
      <div className="container">
        <SlideDown className="flex flex-col items-center text-center gap-4 mb-10 md:mb-12">
          <div>
            <h2
              id="videos-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900"
            >
              <span className="block" style={ARABIC_FONT} dir="rtl">
                {ar.videos.heading}
              </span>
              <span
                className="block text-2xl sm:text-3xl md:text-4xl mt-1"
                style={LATIN_FONT}
              >
                {en.videos.heading}
              </span>
              <span className="block text-2xl sm:text-3xl md:text-4xl mt-1">
                {bn.videos.heading}
              </span>
            </h2>
            <p className="text-gray-500 mt-2 text-sm sm:text-base space-y-0.5">
              <span className="block" style={ARABIC_FONT} dir="rtl">
                {ar.videos.subtitle}
              </span>
              <span className="block" style={LATIN_FONT}>
                {en.videos.subtitle}
              </span>
              <span className="block">{bn.videos.subtitle}</span>
            </p>
          </div>
        </SlideDown>

        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 md:mb-12">
          <button
            type="button"
            onClick={() => selectCategory("all")}
            className={`rounded-full px-4 py-2 text-xs sm:text-sm font-medium transition-colors border ${
              activeCategory === "all"
                ? "bg-indigo-600 border-indigo-600 text-white"
                : "bg-white border-gray-200 text-gray-600 hover:border-indigo-300"
            }`}
          >
            {en.videos.all} · {bn.videos.all}
          </button>
          {CATEGORIES.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => selectCategory(category)}
              className={`inline-flex flex-wrap items-center gap-x-1.5 rounded-full px-4 py-2 text-xs sm:text-sm font-medium transition-colors border ${
                activeCategory === category
                  ? "bg-indigo-600 border-indigo-600 text-white"
                  : "bg-white border-gray-200 text-gray-600 hover:border-indigo-300"
              }`}
            >
              <span style={ARABIC_FONT} dir="rtl">
                {ar.videos.categories[category]}
              </span>
              <span className={activeCategory === category ? "text-indigo-200" : "text-gray-300"}>
                |
              </span>
              <span style={LATIN_FONT}>{en.videos.categories[category]}</span>
              <span className={activeCategory === category ? "text-indigo-200" : "text-gray-300"}>
                |
              </span>
              <span>{bn.videos.categories[category]}</span>
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleVideos.map((video, index) => (
            <SlideUp key={video.id} delay={Math.min((index % 3) + 1, 4)}>
              <button
                type="button"
                onClick={() => setActiveVideo(video.youtubeId)}
                aria-label={`${en.videos.play}: ${video.title}`}
                className="group relative block w-full aspect-video rounded-2xl overflow-hidden shadow-sm border border-gray-100"
              >
                <Image
                  src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
                  alt={video.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <span className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                  <span className="flex items-center justify-center w-14 h-14 rounded-full bg-white/90 shadow-lg">
                    <Play
                      className="w-6 h-6 text-indigo-600 translate-x-0.5"
                      fill="currentColor"
                      aria-hidden="true"
                    />
                  </span>
                </span>
                <span className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent px-4 py-3 text-left">
                  <span className="block text-white text-sm font-medium truncate">
                    {video.title}
                  </span>
                </span>
              </button>
            </SlideUp>
          ))}
        </div>

        {hasMore && (
          <div className="flex justify-center mt-10 md:mt-12">
            <button
              type="button"
              onClick={() => setVisibleCount((count) => count + PAGE_SIZE)}
              className="inline-flex items-center gap-x-1.5 rounded-full px-6 py-2.5 text-xs sm:text-sm font-medium bg-indigo-600 text-white hover:bg-indigo-700 transition-colors shadow-sm"
            >
              <span style={ARABIC_FONT} dir="rtl">
                {ar.videos.viewMore}
              </span>
              <span className="text-indigo-200">|</span>
              <span style={LATIN_FONT}>{en.videos.viewMore}</span>
              <span className="text-indigo-200">|</span>
              <span>{bn.videos.viewMore}</span>
            </button>
          </div>
        )}
      </div>

      {activeVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          role="dialog"
          aria-modal="true"
          onClick={() => setActiveVideo(null)}
        >
          <button
            type="button"
            onClick={() => setActiveVideo(null)}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            aria-label="Close"
          >
            <X className="w-6 h-6" aria-hidden="true" />
          </button>

          <div
            className="relative w-full max-w-3xl aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${activeVideo}?autoplay=1`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full rounded-xl"
            />
          </div>
        </div>
      )}
    </section>
  );
}
