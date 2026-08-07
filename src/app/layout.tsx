import type { Metadata } from "next";
import { Inter, Noto_Sans_Bengali, Noto_Naskh_Arabic } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const notoBengali = Noto_Sans_Bengali({
  subsets: ["bengali"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-bengali",
  display: "swap",
});

const notoArabic = Noto_Naskh_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-arabic",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Md. Nazrul Islam | Hafiz-e-Quran",
  description:
    "Continuing my studies with the goal of acquiring Islamic knowledge — currently pursuing higher education at Al-Azhar University in Egypt.",
  keywords:
    "hafiz e quran, al-azhar university, islamic studies, Md. Nazrul Islam, মোঃ নজরুল ইসলাম, محمد نظر الإسلام",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="bn"
      className={`scroll-smooth ${inter.variable} ${notoBengali.variable} ${notoArabic.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
