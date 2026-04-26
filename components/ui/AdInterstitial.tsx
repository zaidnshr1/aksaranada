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
      const timer = setTimeout(() => setIsOpen(true), 3000);
      return () => clearTimeout(timer);
    }
  }, [ad]);

  if (!ad) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 bg-obsidian/80 backdrop-blur-md">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative bg-ivory max-w-lg w-full shadow-2xl border border-border-soft overflow-hidden"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 z-[110] bg-obsidian text-ivory p-2 hover:bg-maroon transition-colors flex items-center justify-center shadow-lg"
              aria-label="Tutup Iklan"
            >
              <X size={20} strokeWidth={2} />
            </button>

            <div className="max-h-[85vh] overflow-y-auto">
              <a href={ad.link} target="_blank" className="block group">
                <div className="relative overflow-hidden aspect-[4/5] md:aspect-video bg-ivory-dark">
                  <img
                    src={ad.image}
                    alt={ad.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 md:p-10 text-center bg-ivory">
                  <span className="eyebrow text-[0.55rem] text-maroon block mb-3 tracking-[0.2em]">
                    PENAWARAN SPESIAL
                  </span>
                  <h3 className="font-serif text-xl md:text-2xl text-obsidian mb-6 leading-tight px-4">
                    {ad.title}
                  </h3>
                  <div className="inline-block eyebrow text-[0.62rem] border border-obsidian px-6 py-3 group-hover:bg-obsidian group-hover:text-ivory transition-all uppercase tracking-widest">
                    Pelajari Selengkapnya →
                  </div>
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
