"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.0, ease: [0.16, 1, 0.3, 1] },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // Parallax transforms
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const scaleDecor = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <section
      ref={heroRef}
      className="relative h-screen min-h-[680px] flex items-center overflow-hidden bg-obsidian"
    >
      {/* ── Background layer ── */}
      <motion.div
        style={{ y: bgY, scale: scaleDecor }}
        className="absolute inset-0 pointer-events-none"
      >
        {/* Radial gradient glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-obsidian via-obsidian to-maroon-dark opacity-90" />
        {/* Maroon accent circle */}
        <div
          className="absolute top-1/4 right-0 w-[55vw] h-[55vw] rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, #5B1B1B 0%, transparent 70%)",
          }}
        />
        {/* Noise texture */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
      </motion.div>

      {/* ── Decorative vertical line ── */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ delay: 0.2, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        style={{ transformOrigin: "top" }}
        className="absolute left-6 md:left-10 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-maroon/40 to-transparent"
      />

      {/* ── Decorative number ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute right-8 md:right-12 bottom-24 hidden md:block"
        style={{ writingMode: "vertical-rl" }}
      >
        <span className="eyebrow text-[0.58rem] text-white/20 tracking-[0.3em]">
          EST · 2026 · BEKASI
        </span>
      </motion.div>

      {/* ── Main content ── */}
      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 w-full"
      >
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-5xl"
        >
          {/* Eyebrow label */}
          <motion.div
            variants={fadeIn}
            className="flex items-center gap-4 mb-8 md:mb-10"
          >
            <span className="eyebrow text-maroon text-[0.65rem]">
              Kursus Musik Profesional
            </span>
            <div className="h-px w-12 bg-maroon/60" />
          </motion.div>

          {/* Main headline */}
          <motion.h1
            variants={fadeUp}
            className="font-serif font-bold text-ivory leading-none mb-6 md:mb-8"
            style={{
              fontSize: "clamp(3rem, 9vw, 8rem)",
              letterSpacing: "-0.02em",
              lineHeight: "0.97",
            }}
          >
            Di Mana
            <br />
            <span className="italic text-maroon-accent">Nada</span>
            <br />
            Bertemu Jiwa.
          </motion.h1>

          {/* Divider */}
          <motion.div variants={fadeIn}>
            <div className="h-px w-20 bg-maroon mb-6 md:mb-8" />
          </motion.div>

          {/* Subtext */}
          <motion.p
            variants={fadeUp}
            className="text-ivory/60 text-base md:text-lg leading-relaxed max-w-xl mb-10 md:mb-12"
          >
            Melampaui batasan nada dan irama.{" "}
            <span className="text-ivory/40">
              Seni mengartikulasikan rasa melalui setiap nada, ritme, dan
              harmoni yang diciptakan.
            </span>
          </motion.p>

          {/* CTA group */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/pricing"
              className="group inline-flex items-center gap-3 bg-maroon text-ivory eyebrow text-[0.68rem] px-7 py-4 hover:bg-maroon-light transition-all"
            >
              Mulai Perjalanan Anda
              <motion.span
                className="block"
                initial={{ x: 0 }}
                whileHover={{ x: 4 }}
                transition={{ duration: 0.3 }}
              >
                →
              </motion.span>
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-3 border border-white/20 text-ivory/70 eyebrow text-[0.68rem] px-7 py-4 hover:border-white/50 hover:text-ivory transition-all"
            >
              Kenali Kami
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent"
        />
        <span className="eyebrow text-[0.55rem] text-white/25">SCROLL</span>
      </motion.div>
    </section>
  );
}
