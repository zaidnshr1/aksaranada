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
    default: "AksaraNada — Kursus Musik Jakarta, Bekasi & Bandung",
    template: "%s | AksaraNada",
  },
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  description:
    "AksaraNada adalah kursus musik profesional dengan instruktur bersertifikat. " +
    "Vokal, gitar, piano, bass, keyboard, dan produksi musik. Online & onsite di Jakarta, Bekasi, Bandung.",
  keywords: [
    "kursus musik jakarta",
    "kursus gitar bekasi",
    "les piano bandung",
    "kursus vokal online",
    "produksi musik",
    "kursus musik anak",
    "aksaranada",
    "sekolah musik",
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
      "Kursus musik profesional. Online & onsite Jakarta, Bekasi, Bandung.",
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
