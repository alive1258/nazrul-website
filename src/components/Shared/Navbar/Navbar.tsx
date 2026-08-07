"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  "Home",
  "About",
  "Achievements",
  "Education",
  "Experience",
  "Services",
  "Gallery",
  "Blog",
  "Contact",
];

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (!isMenuOpen) return;

    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [isMenuOpen]);

  return (
    <>
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="container">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <h1>Md Nazrul Islam</h1>
            </div>

            <div className="hidden md:flex items-center gap-4 lg:gap-6">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-600 hover:text-indigo-700 font-medium transition-colors duration-200 text-sm whitespace-nowrap"
                >
                  {item}
                </a>
              ))}
            </div>

            <button
              onClick={() => setIsMenuOpen(true)}
              className="md:hidden p-2 rounded-lg text-indigo-700 hover:bg-indigo-50 transition-colors duration-200"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setIsMenuOpen(false)}
              className="md:hidden fixed inset-0 z-40 bg-black/50"
              aria-hidden="true"
            />

            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
              role="dialog"
              aria-modal="true"
              aria-label="Mobile menu"
              className="md:hidden fixed inset-y-0 left-0 z-50 w-72 max-w-[80vw] bg-white shadow-xl overflow-y-auto"
            >
              <div className="flex items-center justify-between h-16 px-4 border-b border-gray-100">
                <h2 className="font-semibold text-gray-900">Menu</h2>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 rounded-lg text-indigo-700 hover:bg-indigo-50 transition-colors duration-200"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="flex flex-col px-2 py-3">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + index * 0.03, duration: 0.2 }}
                    className="text-gray-600 hover:text-indigo-700 hover:bg-indigo-50 font-medium text-sm py-3 px-3 rounded-lg transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
