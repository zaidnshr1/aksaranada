import type { Metadata } from "next";
import Link from "next/link";
import { Check, ExternalLink, User, Users, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Kursus & Harga",
  description:
    "Detail lengkap 7 paket kursus musik AksaraNada — Reguler, Premium, Buddy Jam, Complete Musician, Ensemble, Pro Ensemble, dan Artist Package.",
};

const GFORM_URL = "https://forms.gle/YOUR_GOOGLE_FORM_LINK";

// ─── Package Data ─────────────────────────────────────────
const PACKAGES = [
  {
    id: "reguler",
    name: "Reguler Package",
    type: "Private",
    isPrivate: true,
    tagline: "Fondasi teknik yang kokoh, satu per satu.",
    desc: "Program privat untuk individu yang ingin fokus membangun teknik bermain dari nol hingga tingkat menengah. Kurikulum terstruktur, progres terpantau, tanpa distraksi.",
    instruments: [
      { name: "Acoustic Guitar", note: null },
      { name: "Electric Guitar", note: null },
      { name: "Bass", note: null },
      { name: "Keyboard", note: null },
      { name: "Drum", note: null },
    ],
    includes: [
      "4× sesi private / bulan (60 menit/sesi)",
      "Materi dan kurikulum terstruktur",
      "Evaluasi progres bulanan",
      "Akses grup komunitas WA",
    ],
    forWho: "Cocok untuk pemula hingga menengah, semua usia.",
    highlight: false,
    accentColor: "border-l-maroon/30",
  },
  {
    id: "premium",
    name: "Premium Package",
    type: "Private",
    isPrivate: true,
    tagline: "Pendekatan mendalam untuk instrumen eksklusif.",
    desc: "Kelas privat untuk instrumen dan bidang yang membutuhkan pendekatan lebih personal, mendalam, dan intensif. Instruktur terpilih dengan rekam jejak profesional.",
    instruments: [
      { name: "Vocal", note: "Pop · Jazz · Klasik · R&B" },
      { name: "Piano", note: "Klasik · Jazz · Kontemporer" },
      { name: "Saxophone", note: "Alto · Tenor" },
      { name: "Music Production", note: "FL Studio / Ableton" },
      { name: "Songwriting", note: "Lyric · Melody · Arrangement" },
    ],
    includes: [
      "4× sesi private / bulan (75–90 menit/sesi)",
      "Kurikulum personal disesuaikan kebutuhan",
      "Evaluasi berkala dan feedback mendalam",
      "Akses grup komunitas WA",
    ],
    forWho: "Untuk pelajar yang serius mendalami satu bidang secara intensif.",
    highlight: true,
    accentColor: "border-l-maroon",
  },
  {
    id: "buddy-jam",
    name: "Buddy Jam Package",
    type: "Semi Private · 2–3 orang",
    isPrivate: false,
    tagline: "Belajar lebih seru bersama teman.",
    desc: "Format semi-privat untuk dua hingga tiga orang yang belajar bersama. Lebih hemat dari kelas privat, tetap mendapat perhatian cukup dari instruktur, dan lebih dinamis.",
    instruments: [
      { name: "Acoustic Guitar", note: null },
      { name: "Electric Guitar", note: null },
      { name: "Bass", note: null },
    ],
    includes: [
      "4× sesi semi-private / bulan (75 menit/sesi)",
      "Materi sesuai level bersama",
      "Evaluasi individual di akhir bulan",
      "Akses grup komunitas WA",
    ],
    forWho:
      "Cocok untuk teman, saudara, atau pasangan yang ingin belajar bersama.",
    highlight: false,
    accentColor: "border-l-maroon/30",
  },
  {
    id: "complete-musician",
    name: "Complete Musician Package",
    type: "Private",
    isPrivate: true,
    tagline: "Vokal dan instrumen dalam satu program.",
    desc: "Paket kombinasi privat untuk yang ingin menguasai vokal sekaligus instrumen dalam satu program terintegrasi. Kurikulum dirancang agar keduanya saling memperkuat.",
    instruments: [
      { name: "Vocal + Acoustic Guitar", note: "Dua instrumen, satu program" },
      { name: "Vocal + Piano", note: "Dua instrumen, satu program" },
    ],
    includes: [
      "8× sesi private / bulan — terbagi dua instrumen",
      "Kurikulum terintegrasi vokal–instrumen",
      "Latihan performance bersama instruktur",
      "Evaluasi progres setiap dua minggu",
      "Akses grup komunitas WA",
    ],
    forWho:
      "Untuk penyanyi yang ingin bisa mengiringi diri sendiri, atau sebaliknya.",
    highlight: false,
    accentColor: "border-l-maroon/30",
  },
  {
    id: "ensemble",
    name: "Ensemble Package",
    type: "Semi Private · 3+ orang",
    isPrivate: false,
    tagline: "Belajar dinamika bermusik bersama.",
    desc: "Kelas kelompok untuk band atau vokal grup. Fokus pada dinamika bermain bersama, komunikasi antar musisi, dan membangun chemistry grup yang solid.",
    instruments: [
      { name: "Band", note: "Gabungan instrumen dalam 1 grup" },
      { name: "Vocal Group", note: "3+ penyanyi, harmony & arrangement" },
    ],
    includes: [
      "4× sesi ensemble / bulan (90 menit/sesi)",
      "Materi repertoar grup disesuaikan",
      "Latihan arrangement dan harmonisasi",
      "Evaluasi per anggota dan per grup",
      "Akses grup komunitas WA",
    ],
    forWho:
      "Untuk band yang ingin lebih solid, atau grup vokal yang ingin berkembang.",
    highlight: false,
    accentColor: "border-l-maroon/30",
  },
  {
    id: "pro-ensemble",
    name: "Pro Ensemble Package",
    type: "Semi Private · 3+ orang",
    isPrivate: false,
    tagline: "Ensemble + kreasi. Siap tampil, siap rilis.",
    desc: "Tingkat lanjut dari Ensemble Package. Selain berlatih bersama, grup juga mendapatkan sesi songwriting atau produksi musik untuk menghasilkan karya original yang siap dipresentasikan.",
    instruments: [
      {
        name: "Band + Songwriting",
        note: "Latihan + sesi cipta lagu original",
      },
      {
        name: "Band + Music Production",
        note: "Latihan + sesi rekaman & produksi",
      },
    ],
    includes: [
      "4× sesi ensemble + 2× sesi kreasi / bulan",
      "Workshop songwriting atau produksi untuk grup",
      "Evaluasi per anggota dan per produksi",
      "Akses grup komunitas WA",
    ],
    forWho:
      "Untuk band atau grup yang ingin menciptakan karya sendiri, bukan hanya cover.",
    highlight: false,
    accentColor: "border-l-maroon/30",
  },
  {
    id: "artist",
    name: "Artist Package",
    type: "Private",
    isPrivate: true,
    tagline: "Program paling komprehensif untuk musisi berkarya.",
    desc: "Paket privat terlengkap yang menggabungkan instrumen dengan kemampuan berkarya. Dirancang untuk individu yang ingin menjadi musisi utuh — bisa bermain, menciptakan, dan memproduksi.",
    instruments: [
      {
        name: "Songwriting + Instrument",
        note: "Acoustic Guitar / Piano / Vocal",
      },
      {
        name: "Instrument + Music Production",
        note: "Instrumen pilihan + DAW",
      },
    ],
    includes: [
      "8× sesi private / bulan — fleksibel antar bidang",
      "Kurikulum terintegrasi instrumen × kreasi",
      "Mentoring dari instruktur aktif di industri",
      "Akses penuh grup komunitas WA",
    ],
    forWho:
      "Untuk yang serius membangun identitas sebagai musisi, bukan sekadar bisa bermain.",
    highlight: false,
    accentColor: "border-l-maroon/30",
  },
];

const MODES = [
  {
    icon: "🌐",
    title: "Online",
    desc: "Via Zoom atau Google Meet. Bisa dari mana saja di seluruh Indonesia.",
    tag: "Seluruh Indonesia",
  },
  {
    icon: "📍",
    title: "Jakarta",
    desc: "Studio di Jakarta Selatan & Jakarta Timur. Termasuk slot akhir pekan.",
    tag: "Onsite",
  },
  {
    icon: "📍",
    title: "Bekasi",
    desc: "Studio di Bekasi Barat & Bekasi Selatan. Tersedia hari kerja & akhir pekan.",
    tag: "Onsite",
  },
  {
    icon: "📍",
    title: "Bandung",
    desc: "Studio area Dago & Buah Batu. Jadwal fleksibel.",
    tag: "Onsite",
  },
];

// ─── Package Card ─────────────────────────────────────────
function PackageCard({
  pkg,
  index,
}: {
  pkg: (typeof PACKAGES)[0];
  index: number;
}) {
  return (
    <div
      id={pkg.id}
      className={`group relative bg-ivory border border-border-soft border-l-4 ${
        pkg.highlight ? "border-l-maroon" : "border-l-maroon/25"
      } scroll-mt-28`}
    >
      {/* Featured badge */}
      {pkg.highlight && (
        <div className="absolute -top-3 left-7">
          <span className="eyebrow text-[0.58rem] bg-maroon text-ivory px-3 py-1">
            ✦ Paling Diminati
          </span>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-5 divide-y lg:divide-y-0 lg:divide-x divide-border-soft">
        {/* Left: Info (3 cols) */}
        <div className="lg:col-span-3 p-7 md:p-9 flex flex-col gap-5">
          {/* Header */}
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <span className="eyebrow text-[0.58rem] text-maroon block mb-2">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h2
                className="font-serif font-bold text-obsidian"
                style={{
                  fontSize: "clamp(1.35rem, 2.5vw, 1.9rem)",
                  lineHeight: "1.1",
                  letterSpacing: "-0.015em",
                }}
              >
                {pkg.name}
              </h2>
              <p className="text-obsidian-muted text-sm italic mt-1">
                {pkg.tagline}
              </p>
            </div>

            {/* Session badge */}
            <span
              className={`flex-shrink-0 flex items-center gap-1.5 eyebrow text-[0.6rem] px-3 py-1.5 border ${
                pkg.isPrivate
                  ? "border-maroon/30 text-maroon bg-maroon/5"
                  : "border-obsidian/15 text-obsidian-muted bg-ivory-dark"
              }`}
            >
              {pkg.isPrivate ? (
                <>
                  <User size={10} strokeWidth={1.5} />
                  {pkg.type}
                </>
              ) : (
                <>
                  <Users size={10} strokeWidth={1.5} />
                  {pkg.type}
                </>
              )}
            </span>
          </div>

          {/* Divider */}
          <div className="h-px bg-border-soft" />

          {/* Description */}
          <p className="text-obsidian-muted text-[0.9rem] leading-relaxed">
            {pkg.desc}
          </p>

          {/* For who */}
          <p className="text-obsidian text-xs font-medium">
            <span className="text-maroon mr-1">→</span>
            {pkg.forWho}
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <a
              href={GFORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center gap-2 eyebrow text-[0.65rem] px-6 py-3 transition-colors ${
                pkg.highlight
                  ? "bg-maroon text-ivory hover:bg-maroon-light"
                  : "bg-obsidian text-ivory hover:bg-obsidian-light"
              }`}
            >
              Daftar Paket Ini
              <ExternalLink size={12} strokeWidth={1.5} />
            </a>
            <a
              href="mailto:info.aksaranada@gmail.com"
              className="flex items-center justify-center gap-2 eyebrow text-[0.65rem] px-6 py-3 border border-border-soft text-obsidian-muted hover:border-maroon hover:text-maroon transition-colors"
            >
              Tanya Instruktur
            </a>
          </div>
        </div>

        {/* Right: Instruments + Includes (2 cols) */}
        <div className="lg:col-span-2 divide-y divide-border-soft">
          {/* Instruments */}
          <div className="p-7 md:p-9">
            <p className="eyebrow text-[0.6rem] text-maroon mb-4">
              Pilihan Program
            </p>
            <ul className="space-y-2">
              {pkg.instruments.map((inst) => (
                <li key={inst.name}>
                  <div className="flex items-start gap-2.5">
                    <ChevronRight
                      size={13}
                      strokeWidth={2}
                      className="text-maroon flex-shrink-0 mt-0.5"
                    />
                    <div>
                      <span className="text-obsidian text-sm font-medium">
                        {inst.name}
                      </span>
                      {inst.note && (
                        <span className="block text-obsidian-muted text-[0.7rem] mt-0.5">
                          {inst.note}
                        </span>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Includes */}
          <div className="p-7 md:p-9 bg-ivory-dark/60">
            <p className="eyebrow text-[0.6rem] text-maroon mb-4">
              Yang Didapatkan
            </p>
            <ul className="space-y-2">
              {pkg.includes.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <Check
                    size={13}
                    strokeWidth={2.5}
                    className="text-maroon flex-shrink-0 mt-0.5"
                  />
                  <span className="text-obsidian-muted text-[0.8rem] leading-snug">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────
export default function PricingPage() {
  return (
    <>
      {/* ── Hero ────────────────────────────────────────── */}
      <section className="pt-36 pb-16 md:pt-44 md:pb-20 bg-obsidian relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-15"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 70% 40%, #5B1B1B, transparent)",
          }}
        />
        <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
          <span className="eyebrow text-maroon text-[0.65rem] block mb-6">
            7 Paket Kursus
          </span>
          <h1
            className="font-serif font-bold text-ivory max-w-3xl"
            style={{
              fontSize: "clamp(2.25rem, 5vw, 4.25rem)",
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
          <p className="text-ivory/50 text-sm md:text-base leading-relaxed max-w-xl mt-5 mb-10">
            Tujuh paket dirancang untuk berbagai kebutuhan dan gaya belajar —
            dari sesi privat personal hingga ensemble kelompok. Pilih yang
            paling sesuai dengan tujuan musik Anda.
          </p>

          {/* Quick jump links */}
          <div className="flex flex-wrap gap-2">
            {PACKAGES.map((pkg) => (
              <a
                key={pkg.id}
                href={`#${pkg.id}`}
                className="eyebrow text-[0.6rem] border border-white/15 text-white/50 px-3 py-1.5 hover:border-maroon hover:text-maroon transition-colors"
              >
                {pkg.name.replace(" Package", "")}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Legend / Key ────────────────────────────────── */}
      <div className="bg-ivory border-b border-border-soft">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex flex-wrap items-center gap-5">
          <span className="eyebrow text-[0.6rem] text-warm-gray">
            Keterangan:
          </span>
          <span className="flex items-center gap-1.5 eyebrow text-[0.6rem] text-obsidian-muted">
            <User size={11} strokeWidth={1.5} className="text-maroon" />
            Private — sesi 1-on-1 dengan instruktur
          </span>
          <span className="flex items-center gap-1.5 eyebrow text-[0.6rem] text-obsidian-muted">
            <Users
              size={11}
              strokeWidth={1.5}
              className="text-obsidian-muted"
            />
            Semi Private — sesi bersama (2–3 atau 3+ orang)
          </span>
        </div>
      </div>

      {/* ── Package List ─────────────────────────────────── */}
      <section className="py-14 md:py-20 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          {/* Section header */}
          <div className="flex items-center gap-4 mb-10">
            <span className="eyebrow text-maroon text-[0.65rem]">
              Semua Paket
            </span>
            <div className="h-px flex-1 bg-border-soft" />
            <span className="eyebrow text-[0.6rem] text-warm-gray">
              {PACKAGES.length} paket tersedia
            </span>
          </div>

          {/* Package cards */}
          <div className="flex flex-col gap-8">
            {PACKAGES.map((pkg, i) => (
              <PackageCard key={pkg.id} pkg={pkg} index={i} />
            ))}
          </div>

          {/* Pricing note */}
          <div className="mt-12 p-7 bg-ivory-dark border border-border-soft text-center">
            <p
              className="font-serif text-obsidian text-lg mb-2"
              style={{ letterSpacing: "-0.01em" }}
            >
              Harga tidak ditampilkan di sini dengan sengaja.
            </p>
            <p className="text-obsidian-muted text-sm leading-relaxed max-w-xl mx-auto mb-5">
              Setiap murid memiliki kebutuhan berbeda. Kami percaya harga yang
              adil harus ditentukan setelah konsultasi singkat — bukan sebelum
              kami mengenal Anda.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="mailto:info.aksaranada@gmail.com?subject=Konsultasi Paket Kursus"
                className="flex items-center gap-2 bg-maroon text-ivory eyebrow text-[0.65rem] px-7 py-3.5 hover:bg-maroon-light transition-colors"
              >
                Minta Info Harga via Email
              </a>
              <a
                href="https://instagram.com/aksaranada.music"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-border-soft text-obsidian-muted eyebrow text-[0.65rem] px-7 py-3.5 hover:border-maroon hover:text-maroon transition-colors"
              >
                DM Instagram Kami
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Location ─────────────────────────────────────── */}
      <section className="py-14 md:py-20 bg-ivory-dark border-t border-border-soft">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="mb-10">
            <span className="eyebrow text-maroon text-[0.65rem] block mb-3">
              Pilihan Lokasi
            </span>
            <h2
              className="font-serif font-semibold text-obsidian"
              style={{
                fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
                lineHeight: "1.1",
                letterSpacing: "-0.015em",
              }}
            >
              Belajar di Mana
              <span className="italic"> Anda Paling Nyaman.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border-soft border border-border-soft">
            {MODES.map((m) => (
              <div key={m.title} className="bg-ivory p-7 flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="text-2xl">{m.icon}</span>
                  <span className="eyebrow text-[0.55rem] border border-maroon/25 text-maroon px-2 py-0.5">
                    {m.tag}
                  </span>
                </div>
                <h3 className="font-serif text-lg font-semibold text-obsidian">
                  {m.title}
                </h3>
                <p className="text-obsidian-muted text-xs leading-relaxed flex-1">
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────── */}
      <section className="py-14 md:py-20 bg-ivory border-t border-border-soft">
        <div className="max-w-3xl mx-auto px-6 md:px-10">
          <div className="mb-10">
            <span className="eyebrow text-maroon text-[0.65rem] block mb-3">
              FAQ
            </span>
            <h2
              className="font-serif font-semibold text-obsidian"
              style={{
                fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                letterSpacing: "-0.015em",
              }}
            >
              Pertanyaan yang Sering Muncul
            </h2>
          </div>

          <div className="border-t border-border-soft">
            {[
              {
                q: "Apakah ada persyaratan level sebelum mendaftar?",
                a: "Tidak ada. Kami menerima murid dari nol pengalaman. Sesi pertama adalah konsultasi dan penilaian level — dari situ kurikulum disesuaikan dengan kondisi Anda saat ini.",
              },
              {
                q: "Bisakah saya mencoba satu sesi dulu sebelum komitmen?",
                a: "Bisa. Kami menyediakan trial session untuk paket tertentu. Hubungi kami untuk informasi ketersediaan.",
              },
              {
                q: "Bagaimana jika saya ingin ganti paket di tengah jalan?",
                a: "Ganti paket bisa dilakukan di awal bulan berikutnya. Cukup hubungi admin kami sebelum tanggal penagihan.",
              },
              {
                q: "Instrumen disediakan atau harus bawa sendiri?",
                a: "Untuk kelas onsite, instrumen tersedia di studio. Untuk kelas online, Anda perlu memiliki instrumen sendiri. Kami bisa merekomendasikan pilihan sesuai budget jika dibutuhkan.",
              },
              {
                q: "Bagaimana jika tidak bisa hadir di sesi yang sudah terjadwal?",
                a: "Reschedule bisa dilakukan maksimal H-1 sesi, tanpa biaya tambahan. Tidak ada batas jumlah reschedule selama masih dalam ketersediaan jadwal instruktur.",
              },
              {
                q: "Apakah ada diskon untuk pembayaran tahunan atau pelajar?",
                a: "Ada. Kami menyediakan paket harga khusus untuk komitmen 3 bulan, 6 bulan, dan tahunan. Tanyakan langsung ke tim kami untuk detail.",
              },
            ].map((faq) => (
              <details
                key={faq.q}
                className="group border-b border-border-soft"
              >
                <summary className="flex items-center justify-between gap-4 py-5 cursor-pointer list-none select-none">
                  <span className="font-serif text-[0.95rem] font-semibold text-obsidian pr-4">
                    {faq.q}
                  </span>
                  <span className="text-maroon text-lg flex-shrink-0 group-open:rotate-45 transition-transform duration-300 origin-center">
                    +
                  </span>
                </summary>
                <p className="text-obsidian-muted text-sm leading-relaxed pb-6 pr-8">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-obsidian-muted text-sm mb-5">
              Masih ada pertanyaan lain?
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="mailto:info.aksaranada@gmail.com"
                className="bg-maroon text-ivory eyebrow text-[0.68rem] px-7 py-3.5 hover:bg-maroon-light transition-colors"
              >
                info.aksaranada@gmail.com
              </a>
              <a
                href="https://instagram.com/aksaranada.music"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-border-soft text-obsidian-muted eyebrow text-[0.68rem] px-7 py-3.5 hover:border-maroon hover:text-maroon transition-colors"
              >
                @aksaranada.music
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
