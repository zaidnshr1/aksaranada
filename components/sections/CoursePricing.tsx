"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const COURSES = [
  {
    id: "vokal",
    label: "01",
    name: "Vokal",
    tagline: "Temukan kekuatan suara Anda",
    desc: "Teknik pernapasan, intonasi, falsetto, vibrato, dan karakter vokal unik. Untuk pop, jazz, dan klasik.",
    price: "Mulai Rp 350.000",
    period: "/ bulan",
    features: ["4× sesi/bulan", "Evaluasi berkala", "Rekaman demo"],
    color: "#5B1B1B",
  },
  {
    id: "gitar-elektrik",
    label: "02",
    name: "Gitar Elektrik",
    tagline: "Dari chord hingga shredding",
    desc: "Penguasaan teknik rhythm, lead, tone shaping, dan improvisasi. Kurikulum dari blues hingga metal.",
    price: "Mulai Rp 350.000",
    period: "/ bulan",
    features: ["4× sesi/bulan", "Materi genre beragam", "Analisis lagu"],
    color: "#3D1010",
  },
  {
    id: "gitar-klasik",
    label: "03",
    name: "Gitar Klasik",
    tagline: "Presisi, elegasi, kedalaman",
    desc: "Teknik fingerstyle, membaca not balok, dan repertoar klasik dari era Baroque hingga kontemporer.",
    price: "Mulai Rp 350.000",
    period: "/ bulan",
    features: ["4× sesi/bulan", "Not balok", "Repertoar klasik"],
    color: "#5B1B1B",
  },
  {
    id: "bass",
    label: "04",
    name: "Bass Elektrik",
    tagline: "Fondasi dari setiap musik",
    desc: "Groove, slap & pop, fingerstyle, dan teori ritme. Belajar menjadi tulang punggung band yang solid.",
    price: "Mulai Rp 350.000",
    period: "/ bulan",
    features: ["4× sesi/bulan", "Teori ritme", "Ensemble session"],
    color: "#3D1010",
  },
  {
    id: "piano",
    label: "05",
    name: "Piano",
    tagline: "Raja dari semua instrumen",
    desc: "Teknik klasik, harmonisasi, chord voicing, dan aransemen. Dari Czerny hingga solo jazz kontemporer.",
    price: "Mulai Rp 400.000",
    period: "/ bulan",
    features: ["4× sesi/bulan", "Teori harmoni", "Sheet music"],
    featured: true,
    color: "#5B1B1B",
  },
  {
    id: "keyboard",
    label: "06",
    name: "Keyboard",
    tagline: "Fleksibel, modern, ekspresif",
    desc: "Chord pattern, rhythm programming, MIDI dasar, dan bermain dalam konteks band pop dan worship.",
    price: "Mulai Rp 350.000",
    period: "/ bulan",
    features: ["4× sesi/bulan", "MIDI dasar", "Pop & worship"],
    color: "#3D1010",
  },
  {
    id: "produksi-musik",
    label: "07",
    name: "Produksi Musik",
    tagline: "Ciptakan duniamu sendiri",
    desc: "DAW (FL Studio / Ableton), sound design, mixing, mastering, dan workflow produser profesional.",
    price: "Mulai Rp 500.000",
    period: "/ bulan",
    features: ["4× sesi/bulan", "DAW pilihan", "Project nyata"],
    color: "#5B1B1B",
  },
];

export default function CoursePricing() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="py-24 md:py-32 bg-ivory-dark relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="mb-14 md:mb-18">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row sm:items-end justify-between gap-6"
          >
            <div>
              <span className="eyebrow text-maroon block mb-4">
                Program Kursus
              </span>
              <h2
                className="font-serif font-bold text-obsidian"
                style={{
                  fontSize: "clamp(2rem, 4vw, 3.25rem)",
                  lineHeight: "1.05",
                  letterSpacing: "-0.02em",
                }}
              >
                Temukan Instrumen
                <br />
                <span className="italic">yang Bicara untuk Anda.</span>
              </h2>
            </div>
            <Link
              href="/pricing"
              className="group flex items-center gap-2 text-maroon eyebrow text-[0.68rem] border-b border-maroon pb-0.5 self-end hover:gap-4 transition-all"
            >
              Lihat detail lengkap
              <ArrowRight size={13} strokeWidth={1.5} />
            </Link>
          </motion.div>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-0 border border-border-soft">
          {COURSES.map((course, i) => (
            <motion.article
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: 0.07 * i,
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`relative group p-7 border-r border-b border-border-soft flex flex-col gap-4 hover:bg-obsidian transition-colors duration-500 ${
                course.featured ? "bg-maroon" : "bg-ivory"
              }`}
            >
              {/* Number */}
              <span
                className={`eyebrow text-[0.6rem] ${course.featured ? "text-white/50" : "text-warm-gray"} group-hover:text-white/30 transition-colors`}
              >
                {course.label}
              </span>

              {/* Name */}
              <div>
                <h3
                  className={`font-serif text-xl font-semibold leading-tight mb-1 ${
                    course.featured ? "text-ivory" : "text-obsidian"
                  } group-hover:text-ivory transition-colors`}
                >
                  {course.name}
                </h3>
                <p
                  className={`text-xs italic ${course.featured ? "text-white/60" : "text-obsidian-muted"} group-hover:text-white/50 transition-colors`}
                >
                  {course.tagline}
                </p>
              </div>

              {/* Divider */}
              <div
                className={`h-px ${course.featured ? "bg-white/20" : "bg-border-soft"} group-hover:bg-white/10 transition-colors`}
              />

              {/* Description */}
              <p
                className={`text-xs leading-relaxed flex-1 ${
                  course.featured ? "text-white/70" : "text-obsidian-muted"
                } group-hover:text-white/60 transition-colors`}
              >
                {course.desc}
              </p>

              {/* Features */}
              <ul className="space-y-1">
                {course.features.map((f) => (
                  <li
                    key={f}
                    className={`flex items-center gap-2 text-[0.7rem] ${
                      course.featured ? "text-white/60" : "text-obsidian-muted"
                    } group-hover:text-white/40 transition-colors`}
                  >
                    <span className="w-1 h-1 rounded-full bg-maroon-accent group-hover:bg-white/40 transition-colors" />
                    {f}
                  </li>
                ))}
              </ul>

              {/* Price */}
              <div className="flex items-baseline gap-1 mt-auto pt-4">
                <span
                  className={`font-serif font-semibold text-base ${
                    course.featured ? "text-ivory" : "text-obsidian"
                  } group-hover:text-ivory transition-colors`}
                >
                  {course.price}
                </span>
                <span
                  className={`text-xs ${
                    course.featured ? "text-white/50" : "text-obsidian-muted"
                  } group-hover:text-white/40 transition-colors`}
                >
                  {course.period}
                </span>
              </div>

              {/* CTA */}
              <Link
                href="/pricing"
                className={`block text-center eyebrow text-[0.62rem] py-2.5 border transition-all ${
                  course.featured
                    ? "border-white/30 text-ivory hover:bg-white/10"
                    : "border-maroon/40 text-maroon group-hover:border-white/30 group-hover:text-ivory"
                }`}
              >
                Daftar Kursus
              </Link>
            </motion.article>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="text-center text-obsidian-muted text-xs mt-8"
        >
          Harga dapat bervariasi berdasarkan lokasi dan paket. Konsultasi gratis
          untuk sesi pertama.
          <Link href="/pricing" className="text-maroon ml-1 hover:underline">
            Lihat detail →
          </Link>
        </motion.p>
      </div>
    </section>
  );
}
