"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Users, User } from "lucide-react";

const PACKAGES = [
  {
    id: "reguler",
    index: "01",
    name: "Reguler",
    type: "Private",
    tagline: "Fondasi teknik yang kokoh",
    desc: "Sesi one-on-one dengan instruktur. Kurikulum terstruktur untuk membangun teknik dasar hingga menengah.",
    instruments: [
      "Acoustic Guitar",
      "Electric Guitar",
      "Bass",
      "Keyboard",
      "Drum",
    ],
    isPrivate: true,
    featured: false,
  },
  {
    id: "premium",
    index: "02",
    name: "Premium",
    type: "Private",
    tagline: "Instrumen & kreasi tingkat lanjut",
    desc: "Kelas privat eksklusif untuk instrumen dan program yang membutuhkan pendekatan lebih mendalam dan personal.",
    instruments: [
      "Vocal",
      "Piano",
      "Saxophone",
      "Music Production",
      "Songwriting",
    ],
    isPrivate: true,
    featured: true,
  },
  {
    id: "buddy-jam",
    index: "03",
    name: "Buddy Jam",
    type: "Semi Private · 2–3 orang",
    tagline: "Belajar seru bersama teman",
    desc: "Format semi-privat untuk dua hingga tiga orang. Hemat biaya, tetap fokus, dan lebih dinamis.",
    instruments: ["Acoustic Guitar", "Electric Guitar", "Bass"],
    isPrivate: false,
    featured: false,
  },
  {
    id: "complete-musician",
    index: "04",
    name: "Complete Musician",
    type: "Private",
    tagline: "Lengkap vokal dan instrumen",
    desc: "Paket kombinasi untuk yang ingin menguasai vokal sekaligus instrumen dalam satu program terpadu.",
    instruments: ["Vocal + Acoustic Guitar", "Vocal + Piano"],
    isPrivate: true,
    featured: false,
  },
  {
    id: "ensemble",
    index: "05",
    name: "Ensemble",
    type: "Semi Private · 3+ orang",
    tagline: "Bermusik bersama, tumbuh bersama",
    desc: "Kelas kelompok untuk band atau vokal grup. Belajar dinamika bermain bersama dalam format ensemble.",
    instruments: ["Band", "Vocal Group"],
    isPrivate: false,
    featured: false,
  },
  {
    id: "pro-ensemble",
    index: "06",
    name: "Pro Ensemble",
    type: "Semi Private · 3+ orang",
    tagline: "Ensemble + kreasi profesional",
    desc: "Tingkat lanjut dari Ensemble — dipadukan dengan songwriting atau produksi musik untuk output yang siap rilis.",
    instruments: ["Band + Songwriting", "Band + Music Production"],
    isPrivate: false,
    featured: false,
  },
  {
    id: "artist",
    index: "07",
    name: "Artist",
    type: "Private",
    tagline: "Untuk jiwa yang ingin berkarya",
    desc: "Paket paling komprehensif. Menggabungkan songwriting atau produksi musik dengan instrumen pilihan Anda.",
    instruments: ["Songwriting + Instrument", "Instrument + Music Production"],
    isPrivate: true,
    featured: false,
  },
];

export default function CoursePricing() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="py-24 md:py-32 bg-ivory-dark relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14"
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
              Temukan Paket
              <br />
              <span className="italic">yang Tepat untuk Anda.</span>
            </h2>
          </div>
          <Link
            href="/pricing"
            className="group flex items-center gap-2 text-maroon eyebrow text-[0.68rem] border-b border-maroon pb-0.5 self-end hover:gap-4 transition-all"
          >
            Lihat detail & harga lengkap
            <ArrowRight size={13} strokeWidth={1.5} />
          </Link>
        </motion.div>

        {/* Package Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-0 border border-border-soft">
          {PACKAGES.map((pkg, i) => (
            <motion.article
              key={pkg.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: 0.07 * i,
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`group relative flex flex-col p-7 border-r border-b border-border-soft hover:bg-obsidian transition-colors duration-500 ${
                pkg.featured ? "bg-maroon" : "bg-ivory"
              }`}
            >
              {/* Top row: index + session type badge */}
              <div className="flex items-center justify-between mb-5">
                <span
                  className={`eyebrow text-[0.58rem] transition-colors ${
                    pkg.featured ? "text-white/40" : "text-warm-gray"
                  } group-hover:text-white/25`}
                >
                  {pkg.index}
                </span>
                <span
                  className={`flex items-center gap-1 eyebrow text-[0.55rem] px-2 py-1 border transition-colors ${
                    pkg.isPrivate
                      ? pkg.featured
                        ? "border-white/20 text-white/50 group-hover:border-white/10 group-hover:text-white/30"
                        : "border-maroon/25 text-maroon/70 group-hover:border-white/20 group-hover:text-white/40"
                      : pkg.featured
                        ? "border-white/20 text-white/50 group-hover:border-white/10 group-hover:text-white/30"
                        : "border-obsidian/15 text-obsidian-muted group-hover:border-white/20 group-hover:text-white/40"
                  }`}
                >
                  {pkg.isPrivate ? (
                    <>
                      <User size={9} strokeWidth={1.5} />
                      Private
                    </>
                  ) : (
                    <>
                      <Users size={9} strokeWidth={1.5} />
                      Semi Private
                    </>
                  )}
                </span>
              </div>

              {/* Package name */}
              <div className="mb-4">
                <h3
                  className={`font-serif text-xl font-semibold leading-tight mb-1 transition-colors ${
                    pkg.featured ? "text-ivory" : "text-obsidian"
                  } group-hover:text-ivory`}
                >
                  {pkg.name}
                </h3>
                <p
                  className={`text-xs italic transition-colors ${
                    pkg.featured ? "text-white/55" : "text-obsidian-muted"
                  } group-hover:text-white/45`}
                >
                  {pkg.tagline}
                </p>
              </div>

              {/* Divider */}
              <div
                className={`h-px mb-4 transition-colors ${
                  pkg.featured ? "bg-white/15" : "bg-border-soft"
                } group-hover:bg-white/8`}
              />

              {/* Description */}
              <p
                className={`text-xs leading-relaxed mb-5 flex-1 transition-colors ${
                  pkg.featured ? "text-white/65" : "text-obsidian-muted"
                } group-hover:text-white/55`}
              >
                {pkg.desc}
              </p>

              {/* Instruments list */}
              <ul className="space-y-1.5 mb-5">
                {pkg.instruments.map((inst) => (
                  <li
                    key={inst}
                    className={`flex items-center gap-2 text-[0.72rem] transition-colors ${
                      pkg.featured ? "text-white/70" : "text-obsidian"
                    } group-hover:text-white/60`}
                  >
                    <span
                      className={`w-1 h-1 rounded-full flex-shrink-0 transition-colors ${
                        pkg.featured ? "bg-maroon-accent" : "bg-maroon"
                      } group-hover:bg-white/40`}
                    />
                    {inst}
                  </li>
                ))}
              </ul>

              {/* Session type label */}
              <p
                className={`text-[0.63rem] italic mb-5 transition-colors ${
                  pkg.featured ? "text-white/30" : "text-warm-gray"
                } group-hover:text-white/22`}
              >
                {pkg.type}
              </p>

              {/* CTA */}
              <Link
                href="/pricing"
                className={`block text-center eyebrow text-[0.62rem] py-2.5 border transition-all ${
                  pkg.featured
                    ? "border-white/30 text-ivory hover:bg-white/10"
                    : "border-maroon/40 text-maroon group-hover:border-white/30 group-hover:text-ivory"
                }`}
              >
                Lihat Detail
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
          Harga disesuaikan berdasarkan paket dan lokasi. Konsultasi gratis
          sebelum mendaftar.{" "}
          <Link href="/pricing" className="text-maroon hover:underline">
            Lihat semua paket & harga →
          </Link>
        </motion.p>
      </div>
    </section>
  );
}
