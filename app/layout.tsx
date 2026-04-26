import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Preloader from "@/components/ui/Preloader";
import AdPopup from "@/components/ui/AdPopup";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://aksaranada.vercel.app",
  ),
  title: {
    default: "AksaraNada — Kursus Musik Jakarta & Kota Bekasi",
    template: "%s | AksaraNada",
  },
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  description:
    "AksaraNada adalah kursus musik profesional dengan instruktur berpengalaman. " +
    "Vokal, gitar, piano, bass, keyboard, dan produksi musik. Online & onsite di Jakarta & Kota Bekasi.",
  keywords: [
    "kursus musik jakarta dan kota bekasi",
    "kursus gitar jakarta dan kota bekasi",
    "les piano jakarta dan kota bekasi",
    "kursus vokal online",
    "produksi musik jakarta dan kota bekasi",
    "kursus musik anak jakarta dan kota bekasi",
    "aksaranada",
    "sekolah musik jakarta dan kota bekasi",
  ],
  authors: [{ name: "AksaraNada" }],
  creator: "AksaraNada",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://aksaranada.vercel.app",
    siteName: "AksaraNada",
    title: "AksaraNada — Di Mana Nada Bertemu Jiwa",
    description:
      "Kursus musik profesional. Vokal, gitar, piano, bass, keyboard, produksi musik.",
    images: [
      { url: "/og-image.jpg", width: 1200, height: 630, alt: "AksaraNada" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AksaraNada — Kursus Musik Profesional",
    description:
      "Kursus musik profesional. Online & onsite Jakarta & Kota Bekasi.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        {/* Preconnect for Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-ivory text-obsidian antialiased">
        {/* Elegant preloader */}
        <Preloader />

        {/* Navigation */}
        <Navbar />

        {/* Page content */}
        <main>{children}</main>

        {/* Footer */}
        <Footer />

        {/* Ad popup — appears once per load */}
        <AdPopup />
      </body>
    </html>
  );
}
