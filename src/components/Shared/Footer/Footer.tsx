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
    <footer className="relative overflow-hidden py-10 px-4 border-t border-indigo-900/10">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,#4338CA_1px,transparent_1px)] bg-size-[40px_40px]"></div>
      </div>

      <SlideUp className="container">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          <span className="bg-linear-to-r from-indigo-700 to-indigo-500 bg-clip-text text-transparent">
            Dr. Nazrul Islam
          </span>
        </h2>
        {/* Brand & Social Section */}
        <div className="border-t border-gray-100 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            {/* Brand */}
            <div>
              <div className="text-center md:text-left">
                <p className="text-gray-500 text-sm">
                  © {currentYear}{" "}
                  <span className="text-indigo-700 font-medium">
                    Dr. Nazrul Islam
                  </span>
                  . All rights reserved.
                </p>
                <p className="text-gray-500 text-sm mt-1">
                  Veterinarian | Researcher | Consultant
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              {/* Legal Links */}
              <div className="flex flex-wrap justify-center gap-6">
                <Link
                  href="/privacy-policy"
                  className="text-gray-500 hover:text-indigo-700 text-sm transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms"
                  className="text-gray-500 hover:text-indigo-700 text-sm transition-colors"
                >
                  Terms of Service
                </Link>
                <Link
                  href="/cookies"
                  className="text-gray-500 hover:text-indigo-700 text-sm transition-colors"
                >
                  Cookie Policy
                </Link>
                <Link
                  href="/sitemap"
                  className="text-gray-500 hover:text-indigo-700 text-sm transition-colors"
                >
                  Sitemap
                </Link>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 hover:text-white hover:bg-indigo-700 hover:border-indigo-700 transition-all duration-300"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 hover:text-white hover:bg-indigo-700 hover:border-indigo-700 transition-all duration-300"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 hover:text-white hover:bg-indigo-700 hover:border-indigo-700 transition-all duration-300"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 hover:text-white hover:bg-indigo-700 hover:border-indigo-700 transition-all duration-300"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 hover:text-white hover:bg-indigo-700 hover:border-indigo-700 transition-all duration-300"
              >
                <FaYoutube size={20} />
              </a>
            </div>
          </div>
        </div>
      </SlideUp>
    </footer>
  );
};

export default Footer;
