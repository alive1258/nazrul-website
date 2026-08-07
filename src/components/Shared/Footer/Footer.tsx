import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import SlideUp from "@/src/components/Common/Animaation/SlideUp";
import { contactInfo } from "@/src/data/contactInfo";

const LATIN_FONT = { fontFamily: "var(--font-inter)" };
const ARABIC_FONT = { fontFamily: "var(--font-arabic)" };

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Achievements", href: "#achievements" },
  { label: "Vision & Mission", href: "#vision-mission" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Videos", href: "#videos" },
  { label: "Blog", href: "#blog" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    icon: FaFacebook,
    label: "Facebook",
    href: "https://www.facebook.com/share/1M3ryvpq9V/",
  },
  { icon: FaTwitter, label: "Twitter", href: "#" },
  { icon: FaInstagram, label: "Instagram", href: "#" },
  { icon: FaLinkedin, label: "LinkedIn", href: "#" },
  { icon: FaYoutube, label: "YouTube", href: "#" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-black border-t border-white/10">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10" aria-hidden="true">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,#6366F1_1px,transparent_1px)] bg-size-[40px_40px]" />
      </div>

      <SlideUp className="max-w-7xl mx-auto relative py-14 md:py-16">
        <div className="flex flex-col gap-10 md:flex-row">
          {/* Brand */}
          <div className="md:w-1/3">
            <div className="flex items-center gap-3">
              <Image
                src="/img/n-logo.png"
                alt="Md. Nazrul Islam"
                width={44}
                height={44}
                className="h-10 w-10 sm:h-11 sm:w-11 object-contain shrink-0"
              />
              <span className="text-xl sm:text-2xl font-bold bg-linear-to-r from-indigo-400 to-indigo-200 bg-clip-text text-transparent">
                Md. Nazrul Islam
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mt-4 max-w-xs">
              Hafiz-e-Quran | Islamic Studies Student at Al-Azhar University
            </p>
            <div className="flex items-center gap-3 mt-6">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href !== "#" ? "_blank" : undefined}
                  rel={href !== "#" ? "noopener noreferrer" : undefined}
                  aria-label={label}
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-indigo-400 hover:text-white hover:bg-indigo-600 hover:border-indigo-600 transition-all duration-300"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:w-1/3 lg:w-1/4">
            <h3 className="text-white text-sm font-semibold uppercase tracking-wide mb-4">
              Quick Links
            </h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5">
              {quickLinks.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-gray-400 hover:text-indigo-400 text-sm transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Get in Touch */}
          <div className="md:w-1/3 lg:w-5/12 flex flex-col">
            <h3 className="text-white text-sm font-semibold uppercase tracking-wide mb-4">
              Get in Touch
            </h3>
            <ul className="flex-1 flex flex-col justify-between gap-3">
              <li>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center gap-2.5 text-gray-400 hover:text-indigo-400 text-sm transition-colors"
                >
                  <Mail
                    className="w-4 h-4 text-indigo-400 shrink-0"
                    aria-hidden="true"
                  />
                  {contactInfo.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="flex items-center gap-2.5 text-gray-400 hover:text-indigo-400 text-sm transition-colors"
                >
                  <Phone
                    className="w-4 h-4 text-indigo-400 shrink-0"
                    aria-hidden="true"
                  />
                  {contactInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-gray-400 text-sm">
                <MapPin
                  className="w-4 h-4 text-indigo-400 shrink-0"
                  aria-hidden="true"
                />
                {contactInfo.location}
              </li>
              <li className="flex items-start gap-2.5 text-gray-400 text-sm">
                <MapPin
                  className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <span className="space-y-0.5">
                  <span className="block" style={ARABIC_FONT} dir="rtl">
                    مدينة السلام، القاهرة، مصر
                  </span>
                  <span className="block" style={LATIN_FONT}>
                    Madinat al-Salam, Cairo, Egypt
                  </span>
                  <span className="block">মদীনাতুস সালাম, কায়রো, মিশর</span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p className="text-gray-300 text-sm">
            © {currentYear} Md. Nazrul Islam. All rights reserved.
          </p>
          <p className="text-gray-300 text-sm">
            Designed and Developed by{" "}
            <a
              href="https://zamirul-kabir-portfolio.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-400 text-base font-medium hover:text-indigo-300 transition-colors"
            >
              Zamirul Kabir
            </a>
          </p>
        </div>
      </SlideUp>
    </footer>
  );
};

export default Footer;
