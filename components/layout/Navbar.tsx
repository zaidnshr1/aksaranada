"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Tentang Kami", href: "/about" },
  { label: "Pengajar", href: "/teachers" },
  { label: "Kursus & Harga", href: "/pricing" },
  { label: "Artikel", href: "/blog" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const isHome = pathname === "/";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? "bg-ivory/95 backdrop-blur-sm border-b border-border-soft shadow-sm"
            : isHome
              ? "bg-transparent"
              : "bg-ivory/95 backdrop-blur-sm border-b border-border-soft"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 md:px-10 h-[68px] flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-3">
            <div className="w-7 h-7 bg-maroon flex items-center justify-center">
              <span className="font-serif text-ivory text-xs font-bold">
                AN
              </span>
            </div>
            <span
              className={`font-serif font-bold text-[1.1rem] tracking-tight transition-colors ${
                scrolled || !isHome ? "text-obsidian" : "text-ivory"
              }`}
            >
              AksaraNada
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`eyebrow text-[0.68rem] transition-colors relative group ${
                  scrolled || !isHome
                    ? "text-obsidian-muted hover:text-maroon"
                    : "text-ivory/70 hover:text-ivory"
                } ${pathname === link.href ? (scrolled || !isHome ? "!text-maroon" : "!text-ivory") : ""}`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-0.5 left-0 h-px bg-maroon transition-all duration-300 ${
                    pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/pricing"
              className="eyebrow text-[0.65rem] bg-maroon text-ivory px-5 py-2.5 hover:bg-maroon-light transition-colors"
            >
              Daftar Sekarang
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen((p) => !p)}
            className={`md:hidden w-10 h-10 flex items-center justify-center transition-colors ${
              scrolled || !isHome ? "text-obsidian" : "text-ivory"
            }`}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <X size={20} strokeWidth={1.5} />
            ) : (
              <Menu size={20} strokeWidth={1.5} />
            )}
          </button>
        </nav>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-30 bg-obsidian flex flex-col pt-[68px]"
          >
            <div className="flex flex-col gap-0 px-6 py-10">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 0.05 * i,
                    duration: 0.5,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <Link
                    href={link.href}
                    className="block py-5 border-b border-white/10 font-serif text-2xl text-ivory hover:text-maroon-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="mt-8"
              >
                <Link
                  href="/pricing"
                  className="block w-full text-center bg-maroon text-ivory eyebrow text-[0.7rem] py-4 hover:bg-maroon-light transition-colors"
                >
                  Daftar Sekarang
                </Link>
              </motion.div>
            </div>

            {/* Mobile contact */}
            <div className="px-6 mt-auto pb-10">
              <p className="eyebrow text-white/30 text-[0.6rem] mb-2">
                Hubungi Kami
              </p>
              <a
                href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`}
                className="text-warm-gray text-sm hover:text-ivory transition-colors"
              >
                {`${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
