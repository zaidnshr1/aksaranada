"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { ALL_ADS } from "@/lib/ads";

export default function AdInterstitial({ adId }: { adId?: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const ad = adId ? ALL_ADS[adId as keyof typeof ALL_ADS] : null;

  useEffect(() => {
    if (ad) {
      // muncul iklan setelah 5 detik agar user sempat membaca judul
      const timer = setTimeout(() => setIsOpen(true), 5000);
      return () => clearTimeout(timer);
    }
  }, [ad]);

  if (!ad) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-obsidian/40 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative bg-ivory max-w-lg w-full shadow-2xl border border-border-soft p-1"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute -top-10 right-0 text-ivory hover:text-maroon transition-colors flex items-center gap-2 eyebrow text-[0.6rem]"
            >
              Tutup <X size={16} strokeWidth={1.5} />
            </button>

            <a href={ad.link} target="_blank" className="block group">
              <div className="relative overflow-hidden aspect-[4/5] md:aspect-video bg-ivory-dark">
                <img
                  src={ad.image}
                  alt={ad.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
              <div className="p-8 text-center bg-ivory">
                <span className="eyebrow text-[0.6rem] text-maroon block mb-4 tracking-[0.2em]">
                  PENAWARAN SPESIAL
                </span>
                <h3 className="font-serif text-2xl text-obsidian mb-6 leading-tight">
                  {ad.title}
                </h3>
                <span className="inline-block eyebrow text-[0.65rem] border border-obsidian px-8 py-3 group-hover:bg-obsidian group-hover:text-ivory transition-all">
                  Pelajari Selengkapnya →
                </span>
              </div>
            </a>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
