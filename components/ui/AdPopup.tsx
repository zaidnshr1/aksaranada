"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Link from "next/link";

export default function AdPopup() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Show popup after 3.5 seconds on page load
    const timer = setTimeout(() => setVisible(true), 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.96 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-6 right-6 z-50 w-72 bg-obsidian shadow-2xl overflow-hidden"
        >
          {/* Top accent bar */}
          <div className="h-0.5 bg-maroon w-full" />

          <div className="p-5">
            {/* Close button */}
            <button
              onClick={() => setVisible(false)}
              className="absolute top-3 right-3 w-7 h-7 flex items-center justify-center text-warm-gray hover:text-ivory transition-colors"
              aria-label="Tutup"
            >
              <X size={15} strokeWidth={1.5} />
            </button>

            {/* Eyebrow */}
            <span className="eyebrow text-maroon text-[0.6rem] block mb-3">
              ✦ Pendaftaran Dibuka
            </span>

            {/* Headline */}
            <p className="font-serif text-ivory text-xl leading-tight mb-2">
              Mulai Perjalanan Musik Anda Hari Ini
            </p>

            {/* Body */}
            <p className="text-warm-gray text-xs leading-relaxed mb-4">
              Daftarkan diri sekarang dan dapatkan konsultasi kelas pertama
              secara gratis. Tersedia online &amp; onsite.
            </p>

            {/* CTA */}
            <Link
              href="/pricing"
              onClick={() => setVisible(false)}
              className="block w-full text-center bg-maroon text-ivory eyebrow text-[0.65rem] py-2.5 hover:bg-maroon-light transition-colors"
            >
              Lihat Paket Kursus →
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
