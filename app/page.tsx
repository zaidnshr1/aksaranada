import { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import USPSection from "@/components/sections/USPSection";
import CoursePricing from "@/components/sections/CoursePricing";
import InstagramReels from "@/components/sections/InstagramReels";
import LatestArticles from "@/components/sections/LatestArticles";
import CTABanner from "@/components/sections/CTABanner";
import MarqueeBar from "@/components/sections/MarqueeBar";
import { getAllArticles } from "@/lib/mdx";

export const metadata: Metadata = {
  title: "AksaraNada — Di Mana Nada Bertemu Jiwa",
  description:
    "Kursus musik profesional di Jakarta & Kota Bekasi. Vokal, gitar, piano, bass, keyboard, dan produksi musik untuk semua usia.",
};

export default function HomePage() {
  const articles = getAllArticles().slice(0, 6);

  return (
    <>
      {/* Hero */}
      <Hero />

      {/* Marquee ticker */}
      <MarqueeBar />

      {/* USP / Why Us */}
      <USPSection />

      {/* Course & Pricing cards */}
      <CoursePricing />

      {/* Instagram Reels */}
      <InstagramReels />

      {/* Latest Articles */}
      <LatestArticles articles={articles} />

      {/* CTA Banner */}
      <CTABanner />

      {/* Bottom marquee (inverted) */}
      <MarqueeBar inverted />
    </>
  );
}
