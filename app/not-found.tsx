"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-obsidian flex items-center justify-center relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, #5B1B1B, transparent)",
        }}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
      >
        <span
          className="font-serif font-bold text-white/3"
          style={{
            fontSize: "clamp(12rem, 40vw, 28rem)",
            lineHeight: 1,
            letterSpacing: "-0.05em",
          }}
        >
          404
        </span>
      </motion.div>

      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="eyebrow text-maroon text-[0.65rem] block mb-6">
            ✦ Halaman Tidak Ditemukan
          </span>

          <h1
            className="font-serif font-bold text-ivory mb-4"
            style={{
              fontSize: "clamp(2rem, 5vw, 4rem)",
              lineHeight: "1.05",
              letterSpacing: "-0.02em",
            }}
          >
            Nada yang Anda Cari
            <br />
            <span className="italic text-maroon-accent">
              Tidak Ada di Sini.
            </span>
          </h1>

          <p className="text-ivory/40 text-sm md:text-base leading-relaxed max-w-md mx-auto mb-10">
            Halaman ini mungkin telah dipindahkan, dihapus, atau mungkin Anda
            salah ketik. Tidak apa-apa — mari kembali ke harmoni.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="flex items-center gap-2 bg-maroon text-ivory eyebrow text-[0.68rem] px-7 py-4 hover:bg-maroon-light transition-all"
            >
              <ArrowLeft size={14} strokeWidth={1.5} />
              Kembali ke Beranda
            </Link>
            <Link
              href="/pricing"
              className="flex items-center gap-2 border border-white/20 text-ivory/60 eyebrow text-[0.68rem] px-7 py-4 hover:border-white/50 hover:text-ivory transition-all"
            >
              Lihat Kursus Kami
            </Link>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.4, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        style={{ transformOrigin: "left" }}
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-maroon to-transparent"
      />
    </div>
  );
}
