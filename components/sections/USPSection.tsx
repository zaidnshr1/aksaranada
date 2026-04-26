"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Globe, MapPin, Music2, Clock, Users, Award } from "lucide-react";

const USPs = [
  {
    icon: Globe,
    label: "Online",
    title: "Belajar dari Mana Saja",
    desc: "Kelas online langsung bersama instruktur profesional dengan Jadwal fleksibel.",
  },
  {
    icon: MapPin,
    label: "Onsite",
    title: "Jakarta · Bekasi",
    desc: "Layanan kami tersedia secara on-site di lokasi Anda untuk wilayah Jakarta dan Kota Bekasi, maupun studio kami di Kota Bekasi. Rasakan pengalaman belajar tatap muka.",
  },
  {
    icon: Music2,
    label: "Band Management",
    title: "Layanan Bimbingan Band",
    desc: "Kami membantu band Anda tumbuh — dari latihan bersama hingga manajemen profesional untuk penampilan panggung.",
  },
  {
    icon: Clock,
    label: "Jadwal Fleksibel",
    title: "Sesuai Jadwal Anda",
    desc: "Pilih jadwal yang paling cocok, termasuk hari kerja, akhir pekan, dan slot khusus malam hari.",
  },
  {
    icon: Users,
    label: "Semua Usia",
    title: "Dari Anak-anak hingga Dewasa",
    desc: "Program dirancang khusus untuk setiap kalangan. Dari 5 tahun hingga lansia, pemula hingga mahir.",
  },
  {
    icon: Award,
    label: "Terpercaya",
    title: "Instruktur Berpengalaman",
    desc: "Setiap pengajar telah berpengalaman mengajar dan memiliki rekam jejak profesional di industri musik.",
  },
];

export default function USPSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="py-24 md:py-32 bg-ivory relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-maroon/3 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="eyebrow text-maroon block mb-4">
              Mengapa AksaraNada
            </span>
            <h2
              className="font-serif font-bold text-obsidian"
              style={{
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                lineHeight: "1.05",
                letterSpacing: "-0.02em",
              }}
            >
              Standar Tinggi,
              <br />
              <span className="italic">Hati yang Terbuka.</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-obsidian-muted text-sm leading-relaxed max-w-xs md:text-right"
          >
            Kami membangun kurikulum di atas dua pilar: teknik yang solid dan
            ekspresi yang bebas. Karena musik sejati lahir dari keduanya.
          </motion.p>
        </div>

        {/* Decorative divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          style={{ transformOrigin: "left" }}
          className="h-px bg-border-soft mb-16 md:mb-20"
        />

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border-soft border border-border-soft">
          {USPs.map((usp, i) => {
            const Icon = usp.icon;
            return (
              <motion.div
                key={usp.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  delay: 0.1 * i,
                  duration: 0.7,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group bg-ivory p-8 md:p-10 hover:bg-maroon transition-colors duration-500 cursor-default"
              >
                <div className="mb-6">
                  <div className="w-10 h-10 border border-maroon/30 flex items-center justify-center mb-4 group-hover:border-maroon-accent group-hover:bg-maroon-dark transition-all">
                    <Icon
                      size={18}
                      strokeWidth={1.5}
                      className="text-maroon group-hover:text-ivory transition-colors"
                    />
                  </div>
                  <span className="eyebrow text-[0.6rem] text-maroon group-hover:text-ivory/60 transition-colors">
                    {usp.label}
                  </span>
                </div>

                <h3 className="font-serif text-lg font-semibold text-obsidian group-hover:text-ivory transition-colors mb-3">
                  {usp.title}
                </h3>
                <p className="text-obsidian-muted text-sm leading-relaxed group-hover:text-ivory/70 transition-colors">
                  {usp.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
