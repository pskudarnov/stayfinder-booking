import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin", "cyrillic"], variable: "--font-sans" });
const playfair = Playfair_Display({ subsets: ["latin", "cyrillic"], variable: "--font-serif" });

const siteUrl = "https://stayfinder.pavel-skudarnov.ru";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "StayFinder — Booking Search Experience Demo",
  description:
    "A production-ready Next.js booking search demo with search forms, filters, listing cards, property pages and responsive UX built with TypeScript and Tailwind CSS.",
  openGraph: {
    title: "StayFinder — Booking Search Experience Demo",
    description:
      "A production-ready Next.js booking search demo with search forms, filters, listing cards, property pages and responsive UX built with TypeScript and Tailwind CSS.",
    url: siteUrl,
    siteName: "StayFinder",
    images: [{ url: "/og-image.svg", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "StayFinder — Booking Search Experience Demo",
    description:
      "A production-ready Next.js booking search demo with search forms, filters, listing cards, property pages and responsive UX built with TypeScript and Tailwind CSS.",
    images: ["/og-image.svg"],
  },
  robots: { index: true, follow: true },
  icons: { icon: "/icon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body className={`${inter.variable} ${playfair.variable}`}>
        <Header />
        <main className="mx-auto min-h-[calc(100vh-160px)] w-full max-w-6xl px-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
