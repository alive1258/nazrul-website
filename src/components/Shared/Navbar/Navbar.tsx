"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navItems = [
  "Home",
  "About",
  "Education",
  "Publications",
  "Experience",
  "Projects",
  "Awards",

  "Blog",
  "Contact",
];

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="container">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <Image src={"/images/kas.png"} width={60} height={60} alt="kas" />
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
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-indigo-700 hover:bg-indigo-50 transition-colors duration-200"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 py-4 max-h-[80vh] overflow-y-auto">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 gap-2">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-600 hover:text-indigo-700 font-medium text-sm py-2 px-3 rounded-lg hover:bg-indigo-50 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
