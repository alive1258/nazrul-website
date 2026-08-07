import Link from "next/link";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import SlideUp from "@/src/components/Common/Animaation/SlideUp";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden py-10 px-4 bg-black border-t border-white/10">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,#6366F1_1px,transparent_1px)] bg-size-[40px_40px]"></div>
      </div>

      <SlideUp className="container relative">
        <h2 className="text-3xl font-bold text-white mb-4">
          <span className="bg-linear-to-r from-indigo-400 to-indigo-200 bg-clip-text text-transparent">
            Dr. Nazrul Islam
          </span>
        </h2>
        {/* Brand & Social Section */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            {/* Brand */}
            <div>
              <div className="text-center md:text-left">
                <p className="text-gray-400 text-sm">
                  © {currentYear}{" "}
                  <span className="text-indigo-400 font-medium">
                    Dr. Nazrul Islam
                  </span>
                  . All rights reserved.
                </p>
                <p className="text-gray-400 text-sm mt-1">
                  Veterinarian | Researcher | Consultant
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              {/* Legal Links */}
              <div className="flex flex-wrap justify-center gap-6">
                <Link
                  href="/privacy-policy"
                  className="text-gray-400 hover:text-indigo-400 text-sm transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms"
                  className="text-gray-400 hover:text-indigo-400 text-sm transition-colors"
                >
                  Terms of Service
                </Link>
                <Link
                  href="/cookies"
                  className="text-gray-400 hover:text-indigo-400 text-sm transition-colors"
                >
                  Cookie Policy
                </Link>
                <Link
                  href="/sitemap"
                  className="text-gray-400 hover:text-indigo-400 text-sm transition-colors"
                >
                  Sitemap
                </Link>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-indigo-400 hover:text-white hover:bg-indigo-600 hover:border-indigo-600 transition-all duration-300"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-indigo-400 hover:text-white hover:bg-indigo-600 hover:border-indigo-600 transition-all duration-300"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-indigo-400 hover:text-white hover:bg-indigo-600 hover:border-indigo-600 transition-all duration-300"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-indigo-400 hover:text-white hover:bg-indigo-600 hover:border-indigo-600 transition-all duration-300"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-indigo-400 hover:text-white hover:bg-indigo-600 hover:border-indigo-600 transition-all duration-300"
              >
                <FaYoutube size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-6 text-center">
          <p className="text-gray-500 text-xs sm:text-sm">
            Designed and Developed by{" "}
            <a
              href="https://zamirul-kabir-portfolio.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-400 font-medium hover:text-indigo-300 transition-colors"
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
