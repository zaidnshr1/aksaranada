import type { Metadata } from "next";
import Link from "next/link";
import { Check, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Kursus & Harga",
  description:
    "Detail lengkap paket kursus musik AksaraNada. Vokal, gitar, piano, bass, keyboard, produksi musik. Daftar sekarang melalui Google Form.",
};

// ── GANTI URL GFORM SESUAI FORM PENDAFTARAN AKTUAL ──────────
const GFORM_URL = process.env.NEXT_PUBLIC_GFORM_URL;

const PACKAGES = [
  {
    id: "basic",
    name: "Paket Reguler",
    price: "Rp 350.000",
    period: "/ bulan",
    desc: "Ideal untuk pemula dan pelajar yang ingin membangun fondasi teknik yang kuat.",
    features: [
      "4× sesi per bulan (45–60 menit/sesi)",
      "Materi terstruktur sesuai level",
      "Evaluasi progres bulanan",
      "Akses grup komunitas WhatsApp",
      "Rekaman materi latihan via link",
    ],
    note: "Tersedia: Vokal, Gitar Elektrik, Gitar Klasik, Bass, Keyboard",
    highlight: false,
  },
  {
    id: "intensive",
    name: "Paket Intensif",
    price: "Rp 600.000",
    period: "/ bulan",
    desc: "Untuk yang ingin progres lebih cepat dengan sesi lebih banyak dan mentoring personal.",
    features: [
      "8× sesi per bulan (60 menit/sesi)",
      "Kurikulum personal disesuaikan",
      "Evaluasi progres dua mingguan",
      "Rekaman video sesi untuk review",
      "Akses grup komunitas WhatsApp",
      "1× sesi konsultasi online gratis/bulan",
    ],
    note: "Tersedia: Semua instrumen",
    highlight: true,
  },
  {
    id: "piano",
    name: "Paket Piano / Keyboard",
    price: "Rp 400.000",
    period: "/ bulan",
    desc: "Program khusus piano dengan kurikulum yang mencakup teknik klasik hingga modern.",
    features: [
      "4× sesi per bulan (60 menit/sesi)",
      "Materi dari teknik dasar hingga lanjutan",
      "Sheet music digital disediakan",
      "Evaluasi progres bulanan",
      "Akses rekaman materi online",
    ],
    note: "Tersedia: Piano & Keyboard",
    highlight: false,
  },
  {
    id: "produksi",
    name: "Paket Produksi Musik",
    price: "Rp 500.000",
    period: "/ bulan",
    desc: "Belajar memproduksi musik profesional dari nol hingga siap rilis.",
    features: [
      "4× sesi per bulan (90 menit/sesi)",
      "Pilihan DAW: FL Studio atau Ableton",
      "Materi: sound design, mixing, mastering",
      "1 project rekaman nyata/bulan",
      "Feedback dari produser aktif",
    ],
    note: "Online dan onsite tersedia",
    highlight: false,
  },
];

const MODES = [
  {
    title: "Online",
    desc: "Sesi via Zoom/Google Meet. Fleksibel dari mana saja.",
    note: "→ Seluruh Indonesia",
    icon: "🌐",
  },
  {
    title: "Onsite Jakarta",
    desc: "Studio kami di Jakarta Selatan & Jakarta Timur.",
    note: "→ Jadwal disesuaikan",
    icon: "📍",
  },
  {
    title: "Onsite Bekasi",
    desc: "Studio Bekasi Barat & Bekasi Selatan.",
    note: "→ Termasuk akhir pekan",
    icon: "📍",
  },
  {
    title: "Onsite Bandung",
    desc: "Studio Bandung area Dago & Buah Batu.",
    note: "→ Jadwal fleksibel",
    icon: "📍",
  },
];

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-20 md:pt-44 md:pb-28 bg-obsidian relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-15"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 70% 40%, #5B1B1B, transparent)",
          }}
        />
        <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
          <span className="eyebrow text-maroon text-[0.65rem] block mb-6">
            Paket & Harga
          </span>
          <h1
            className="font-serif font-bold text-ivory max-w-3xl"
            style={{
              fontSize: "clamp(2.25rem, 5vw, 4.5rem)",
              lineHeight: "1.04",
              letterSpacing: "-0.02em",
            }}
          >
            Investasi Terbaik
            <br />
            <span className="italic text-maroon-accent">
              adalah pada Diri Sendiri.
            </span>
          </h1>
          <p className="text-ivory/50 text-sm md:text-base leading-relaxed max-w-xl mt-5">
            Semua paket mencakup konsultasi gratis sesi pertama, tanpa komitmen
            jangka panjang. Mulai kapan saja.
          </p>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20 md:py-28 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="mb-12">
            <span className="eyebrow text-maroon text-[0.65rem] block mb-3">
              Pilihan Paket
            </span>
            <h2
              className="font-serif font-bold text-obsidian text-3xl md:text-4xl"
              style={{ letterSpacing: "-0.02em" }}
            >
              Paket Kursus
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PACKAGES.map((pkg) => (
              <div
                key={pkg.id}
                className={`relative p-8 md:p-10 border flex flex-col gap-6 ${
                  pkg.highlight
                    ? "bg-maroon border-maroon-dark"
                    : "bg-ivory border-border-soft hover:border-maroon/30 transition-colors"
                }`}
              >
                {pkg.highlight && (
                  <div className="absolute top-4 right-4">
                    <span className="eyebrow text-[0.58rem] bg-ivory text-maroon px-2 py-1">
                      Terpopuler
                    </span>
                  </div>
                )}

                <div>
                  <span
                    className={`eyebrow text-[0.6rem] block mb-3 ${pkg.highlight ? "text-white/50" : "text-maroon"}`}
                  >
                    {pkg.name}
                  </span>
                  <div className="flex items-baseline gap-1.5 mb-2">
                    <span
                      className={`font-serif text-3xl font-bold ${pkg.highlight ? "text-ivory" : "text-obsidian"}`}
                      style={{ letterSpacing: "-0.02em" }}
                    >
                      {pkg.price}
                    </span>
                    <span
                      className={`text-sm ${pkg.highlight ? "text-white/50" : "text-obsidian-muted"}`}
                    >
                      {pkg.period}
                    </span>
                  </div>
                  <p
                    className={`text-sm leading-relaxed ${pkg.highlight ? "text-white/70" : "text-obsidian-muted"}`}
                  >
                    {pkg.desc}
                  </p>
                </div>

                <div
                  className={`h-px ${pkg.highlight ? "bg-white/15" : "bg-border-soft"}`}
                />

                <ul className="space-y-2.5 flex-1">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <Check
                        size={14}
                        strokeWidth={2}
                        className={`mt-0.5 flex-shrink-0 ${pkg.highlight ? "text-maroon-accent" : "text-maroon"}`}
                      />
                      <span
                        className={`text-[0.82rem] leading-snug ${pkg.highlight ? "text-white/75" : "text-obsidian-muted"}`}
                      >
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                <p
                  className={`text-[0.7rem] italic ${pkg.highlight ? "text-white/40" : "text-warm-gray"}`}
                >
                  {pkg.note}
                </p>

                <a
                  href={GFORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-2 eyebrow text-[0.68rem] py-3.5 border transition-all ${
                    pkg.highlight
                      ? "border-white/30 text-ivory hover:bg-white/10"
                      : "bg-maroon border-maroon text-ivory hover:bg-maroon-light"
                  }`}
                >
                  Daftar Paket Ini
                  <ExternalLink size={12} strokeWidth={1.5} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location modes */}
      <section className="py-16 md:py-20 bg-ivory-dark border-t border-border-soft">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="mb-10">
            <span className="eyebrow text-maroon text-[0.65rem] block mb-3">
              Pilihan Lokasi
            </span>
            <h2
              className="font-serif font-semibold text-obsidian text-2xl md:text-3xl"
              style={{ letterSpacing: "-0.01em" }}
            >
              Belajar di Mana{" "}
              <span className="italic">Anda Paling Nyaman.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {MODES.map((m) => (
              <div
                key={m.title}
                className="bg-ivory border border-border-soft p-6"
              >
                <span className="text-xl mb-4 block">{m.icon}</span>
                <h3 className="font-serif text-base font-semibold text-obsidian mb-2">
                  {m.title}
                </h3>
                <p className="text-obsidian-muted text-xs leading-relaxed mb-3">
                  {m.desc}
                </p>
                <span className="eyebrow text-[0.58rem] text-maroon">
                  {m.note}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20 bg-ivory">
        <div className="max-w-3xl mx-auto px-6 md:px-10">
          <div className="mb-10 text-center">
            <span className="eyebrow text-maroon text-[0.65rem] block mb-3">
              Pertanyaan Umum
            </span>
            <h2
              className="font-serif font-semibold text-obsidian text-2xl md:text-3xl"
              style={{ letterSpacing: "-0.01em" }}
            >
              Masih ada pertanyaan?
            </h2>
          </div>
          <div className="space-y-0 border-t border-border-soft">
            {[
              {
                q: "Apakah ada tes atau audisi sebelum masuk?",
                a: "Tidak ada. Kelas pertama adalah sesi konsultasi dan evaluasi level — kami menyesuaikan kurikulum dengan kondisi Anda saat ini.",
              },
              {
                q: "Instrumen sendiri atau disediakan?",
                a: "Untuk kelas onsite, instrumen tersedia di studio. Untuk kelas online, Anda perlu memiliki instrumen sendiri. Kami bisa merekomendasikan pilihan yang sesuai budget.",
              },
              {
                q: "Apakah bisa ganti instruktur?",
                a: "Tentu saja. Kenyamanan belajar adalah prioritas. Hubungi kami dan kami akan mengatur perubahan dengan lancar.",
              },
              {
                q: "Bagaimana jika sesi saya tidak bisa hadir?",
                a: "Reschedule bisa dilakukan maksimal H-1 sesi. Tanpa biaya tambahan, tanpa batas reschedule per bulan selama dalam jadwal tersedia.",
              },
            ].map((faq) => (
              <details
                key={faq.q}
                className="group border-b border-border-soft"
              >
                <summary className="flex items-center justify-between gap-4 py-5 cursor-pointer list-none">
                  <span className="font-serif text-sm font-semibold text-obsidian">
                    {faq.q}
                  </span>
                  <span className="text-maroon text-lg flex-shrink-0 group-open:rotate-45 transition-transform">
                    +
                  </span>
                </summary>
                <p className="text-obsidian-muted text-sm leading-relaxed pb-5">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
          <div className="text-center mt-10">
            <p className="text-obsidian-muted text-sm mb-4">
              Pertanyaan lain? Kami siap menjawab.
            </p>
            <a
              href="mailto:info.aksaranada@gmail.com"
              className="inline-block bg-maroon text-ivory eyebrow text-[0.68rem] px-7 py-3.5 hover:bg-maroon-light transition-colors"
            >
              Hubungi Kami
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
