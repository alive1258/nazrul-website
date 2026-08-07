"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Calendar, Clock, X } from "lucide-react";
import SlideDown from "@/src/components/Common/Animaation/SlideDown";
import SlideUp from "@/src/components/Common/Animaation/SlideUp";
import bn from "@/src/data/locales/bn.json";
import en from "@/src/data/locales/en.json";
import ar from "@/src/data/locales/ar.json";
import { blogPosts, type BlogCategory } from "@/src/data/blogPosts";

const LATIN_FONT = { fontFamily: "var(--font-inter)" };
const ARABIC_FONT = { fontFamily: "var(--font-arabic)" };

const CATEGORIES: BlogCategory[] = ["quran", "islamicStudies", "lifeJourney"];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState<BlogCategory | "all">(
    "all",
  );
  const [activePostId, setActivePostId] = useState<string | null>(null);

  const activePost = blogPosts.find((post) => post.id === activePostId) ?? null;

  useEffect(() => {
    if (!activePost) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActivePostId(null);
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [activePost]);

  const filteredPosts =
    activeCategory === "all"
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeCategory);

  return (
    <section
      id="blog"
      aria-labelledby="blog-heading"
      className="py-16 md:py-24 bg-gradient-to-br from-indigo-50/40 via-white to-white"
    >
      <div className="container">
        <SlideDown className="flex flex-col items-center text-center gap-4 mb-10 md:mb-12">
          <div>
            <h2
              id="blog-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900"
            >
              <span className="block" style={ARABIC_FONT} dir="rtl">
                {ar.blog.heading}
              </span>
              <span
                className="block text-2xl sm:text-3xl md:text-4xl mt-1"
                style={LATIN_FONT}
              >
                {en.blog.heading}
              </span>
              <span className="block text-2xl sm:text-3xl md:text-4xl mt-1">
                {bn.blog.heading}
              </span>
            </h2>
            <p className="text-gray-500 mt-2 text-sm sm:text-base space-y-0.5">
              <span className="block" style={ARABIC_FONT} dir="rtl">
                {ar.blog.subtitle}
              </span>
              <span className="block" style={LATIN_FONT}>
                {en.blog.subtitle}
              </span>
              <span className="block">{bn.blog.subtitle}</span>
            </p>
          </div>
        </SlideDown>

        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 md:mb-12">
          <button
            type="button"
            onClick={() => setActiveCategory("all")}
            className={`rounded-full px-4 py-2 text-xs sm:text-sm font-medium transition-colors border ${
              activeCategory === "all"
                ? "bg-indigo-600 border-indigo-600 text-white"
                : "bg-white border-gray-200 text-gray-600 hover:border-indigo-300"
            }`}
          >
            {en.blog.all} · {bn.blog.all}
          </button>
          {CATEGORIES.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`inline-flex flex-wrap items-center gap-x-1.5 rounded-full px-4 py-2 text-xs sm:text-sm font-medium transition-colors border ${
                activeCategory === category
                  ? "bg-indigo-600 border-indigo-600 text-white"
                  : "bg-white border-gray-200 text-gray-600 hover:border-indigo-300"
              }`}
            >
              <span style={ARABIC_FONT} dir="rtl">
                {ar.blog.categories[category]}
              </span>
              <span
                className={
                  activeCategory === category
                    ? "text-indigo-200"
                    : "text-gray-300"
                }
              >
                |
              </span>
              <span style={LATIN_FONT}>{en.blog.categories[category]}</span>
              <span
                className={
                  activeCategory === category
                    ? "text-indigo-200"
                    : "text-gray-300"
                }
              >
                |
              </span>
              <span>{bn.blog.categories[category]}</span>
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post, index) => (
            <SlideUp key={post.id} delay={Math.min((index % 3) + 1, 4)}>
              <article className="h-full flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="relative aspect-video">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                  <span className="absolute top-3 left-3 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-indigo-700 shadow-sm">
                    {bn.blog.categories[post.category]}
                  </span>
                </div>

                <div className="flex flex-col flex-1 p-5">
                  <div className="flex items-center gap-3 text-xs text-gray-500 mb-2">
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
                      {post.date}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" aria-hidden="true" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="font-bold text-gray-900 text-base sm:text-lg mb-2 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed line-clamp-3 mb-4">
                    {post.excerpt}
                  </p>

                  <button
                    type="button"
                    onClick={() => setActivePostId(post.id)}
                    className="mt-auto inline-flex items-center gap-x-1.5 self-start rounded-full px-4 py-2 text-xs sm:text-sm font-medium bg-indigo-50 text-indigo-700 hover:bg-indigo-100 transition-colors"
                  >
                    <span style={ARABIC_FONT} dir="rtl">
                      {ar.blog.readMore}
                    </span>
                    <span className="text-indigo-300">|</span>
                    <span style={LATIN_FONT}>{en.blog.readMore}</span>
                    <span className="text-indigo-300">|</span>
                    <span>{bn.blog.readMore}</span>
                  </button>
                </div>
              </article>
            </SlideUp>
          ))}
        </div>
      </div>

      {activePost && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="blog-modal-title"
          onClick={() => setActivePostId(null)}
        >
          <div
            className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-white rounded-2xl shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActivePostId(null)}
              aria-label={en.blog.close}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/90 text-gray-700 hover:bg-white shadow-sm"
            >
              <X className="w-5 h-5" aria-hidden="true" />
            </button>

            <div className="relative aspect-video">
              <Image
                src={activePost.image}
                alt={activePost.title}
                fill
                sizes="(min-width: 768px) 672px, 100vw"
                className="object-cover rounded-t-2xl"
              />
              <span className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-indigo-700 shadow-sm">
                {bn.blog.categories[activePost.category]}
              </span>
            </div>

            <div className="p-6 sm:p-8">
              <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                <span className="inline-flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
                  {activePost.date}
                </span>
                <span className="inline-flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" aria-hidden="true" />
                  {activePost.readTime}
                </span>
              </div>

              <h3
                id="blog-modal-title"
                className="text-xl sm:text-2xl font-bold text-gray-900 mb-4"
              >
                {activePost.title}
              </h3>

              <div className="space-y-4 text-sm sm:text-base text-gray-600 leading-relaxed">
                {activePost.content.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
