"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Play, Instagram } from "lucide-react";

// ──────────────────────────────────────────────────────────
// CARA MENAMBAHKAN REELS:
// 1. Buka Instagram, klik reels yang diinginkan
// 2. Klik "..." lalu "Copy Link"
// 3. Tambahkan objek baru ke array REELS di bawah ini
// 4. Isi url dengan link tersebut dan coverImage dengan URL thumbnail
// ──────────────────────────────────────────────────────────
const REELS: {
  id: string;
  url: string;
  coverImage?: string;
  caption: string;
  duration?: string;
}[] = [
  {
    id: "reel-1",
    url: "https://www.instagram.com/reel/DXeGRp2kdcx/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    coverImage: "/images/reels/reels1.jpg",
    caption:
      "Tanpa aksen yang kuat, lagu sekeren ini kedengeran biasa aja 🤔",
    duration: "1:15",
  },
  {
    id: "reel-2",
    url: "https://www.instagram.com/reel/PLACEHOLDER_2/",
    caption: "Jam session gitar elektrik bareng instruktur kami 🎸",
    duration: "0:45",
  },
  {
    id: "reel-3",
    url: "https://www.instagram.com/reel/PLACEHOLDER_3/",
    caption: "Penampilan vokal siswa di showcase akhir tahun 🎤",
    duration: "1:00",
  },
  {
    id: "reel-4",
    url: "https://www.instagram.com/reel/PLACEHOLDER_4/",
    caption: "Studio produksi musik — behind the scenes 🎚️",
    duration: "0:35",
  },
  {
    id: "reel-5",
    url: "https://www.instagram.com/reel/PLACEHOLDER_5/",
    caption: "Bass slap technique — level intermediate 🎸",
    duration: "0:28",
  },
];

function ReelCard({ reel, index }: { reel: (typeof REELS)[0]; index: number }) {
  const inView = useInView(useRef(null), { once: true });

  return (
    <motion.a
      href={reel.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.08 * index,
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group flex-shrink-0 w-44 md:w-52 block"
    >
      {/* Thumbnail / placeholder */}
      <div
        className="relative overflow-hidden mb-3"
        style={{ aspectRatio: "9/16" }}
      >
        {reel.coverImage ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={reel.coverImage}
            alt={reel.caption}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          // Placeholder when no image
          <div className="w-full h-full bg-obsidian-light flex items-center justify-center">
            <div className="text-center">
              <Instagram
                size={28}
                strokeWidth={1}
                className="text-white/20 mx-auto mb-2"
              />
              <span className="eyebrow text-[0.5rem] text-white/20">
                @aksaranada.music
              </span>
            </div>
          </div>
        )}

        {/* Overlay */}
        <div className="absolute inset-0 bg-obsidian/30 group-hover:bg-obsidian/10 transition-colors" />

        {/* Play button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-10 h-10 border border-white/50 flex items-center justify-center backdrop-blur-xs group-hover:bg-maroon/80 group-hover:border-maroon transition-all">
            <Play size={14} className="text-ivory ml-0.5" fill="currentColor" />
          </div>
        </div>

        {/* Duration badge */}
        {reel.duration && (
          <span className="absolute bottom-2 right-2 eyebrow text-[0.55rem] text-ivory bg-obsidian/70 px-1.5 py-0.5">
            {reel.duration}
          </span>
        )}
      </div>

      {/* Caption */}
      <p className="text-obsidian text-xs leading-snug group-hover:text-maroon transition-colors line-clamp-2">
        {reel.caption}
      </p>
    </motion.a>
  );
}

export default function InstagramReels() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="py-24 md:py-32 bg-ivory overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-end justify-between mb-10 md:mb-14"
        >
          <div>
            <span className="eyebrow text-maroon block mb-4">Instagram</span>
            <h2
              className="font-serif font-bold text-obsidian"
              style={{
                fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                lineHeight: "1.08",
                letterSpacing: "-0.02em",
              }}
            >
              Lihat Kami
              <br />
              <span className="italic">dalam Aksi.</span>
            </h2>
          </div>
          <a
            href="https://instagram.com/aksaranada.music"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-obsidian-muted eyebrow text-[0.65rem] hover:text-maroon transition-colors"
          >
            <Instagram size={14} strokeWidth={1.5} />
            @aksaranada.music
          </a>
        </motion.div>
      </div>

      {/* Scroll container — full-width overflow */}
      <div className="pl-6 md:pl-10 max-w-none">
        <div className="scroll-x-hide flex gap-4 pb-4">
          {REELS.map((reel, i) => (
            <ReelCard key={reel.id} reel={reel} index={i} />
          ))}

          {/* "See more" card */}
          <motion.a
            href="https://instagram.com/aksaranada.music"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="group flex-shrink-0 w-44 md:w-52 block"
          >
            <div
              className="flex flex-col items-center justify-center border border-border-soft bg-ivory-dark group-hover:border-maroon transition-colors"
              style={{ aspectRatio: "9/16" }}
            >
              <Instagram
                size={24}
                strokeWidth={1.5}
                className="text-maroon mb-3"
              />
              <span className="eyebrow text-[0.62rem] text-obsidian-muted group-hover:text-maroon transition-colors text-center px-4">
                Lihat semua
                <br />
                di Instagram
              </span>
            </div>
          </motion.a>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 mt-4">
        <p className="text-obsidian-muted text-[0.65rem] flex items-center gap-2">
          <span className="inline-block w-8 h-px bg-warm-gray" />
          Geser untuk melihat lebih banyak
        </p>
      </div>
    </section>
  );
}
