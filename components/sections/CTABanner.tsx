"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Link from "next/link";

export default function CTABanner() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section
      ref={ref}
      className="relative py-32 md:py-44 overflow-hidden bg-obsidian"
    >
      {/* Parallax background accent */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 pointer-events-none"
      >
        <div
          className="absolute left-0 top-0 w-full h-full opacity-20"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 20% 50%, #5B1B1B, transparent)",
          }}
        />
        {/* Decorative lines */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 79px, rgba(255,255,255,0.3) 80px)",
          }}
        />
      </motion.div>

      {/* Noise */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-10 text-center">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex items-center justify-center gap-4 mb-8"
        >
          <div className="h-px w-8 bg-maroon" />
          <span className="eyebrow text-maroon text-[0.65rem]">
            Bergabunglah Bersama Kami
          </span>
          <div className="h-px w-8 bg-maroon" />
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif font-bold text-ivory mb-6"
          style={{
            fontSize: "clamp(2.25rem, 6vw, 5rem)",
            lineHeight: "1.02",
            letterSpacing: "-0.02em",
          }}
        >
          Musik Bukan Bakat.
          <br />
          <span className="italic text-maroon-accent">
            Musik adalah Pilihan.
          </span>
        </motion.h2>

        {/* Body */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.25, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-ivory/50 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-12"
        >
          Setiap legenda pernah menjadi pemula. Yang membedakan adalah mereka
          memilih untuk memulai. Jadwalkan kelas pertama Anda bersama kami.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.35, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/pricing"
            className="group flex items-center gap-3 bg-maroon text-ivory eyebrow text-[0.7rem] px-8 py-4 hover:bg-maroon-light transition-all"
          >
            Pilih Program Kursus
            <motion.span
              className="block"
              initial={{ x: 0 }}
              whileHover={{ x: 4 }}
            >
              →
            </motion.span>
          </Link>
          <a
            href="mailto:info.aksaranada@gmail.com"
            className="flex items-center gap-3 border border-white/20 text-ivory/70 eyebrow text-[0.7rem] px-8 py-4 hover:border-white/50 hover:text-ivory transition-all"
          >
            Konsultasi Gratis
          </a>
        </motion.div>

        {/* Trust markers */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.55, duration: 0.7 }}
          className="flex items-center justify-center gap-6 mt-12"
        >
          {[
            "Online & Onsite",
            "Semua Usia",
            "Jadwal Fleksibel",
          ].map((m, i) => (
            <span
              key={m}
              className="flex items-center gap-2 eyebrow text-[0.58rem] text-white/30"
            >
              {i > 0 && <span className="w-1 h-1 rounded-full bg-white/15" />}
              {m}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
