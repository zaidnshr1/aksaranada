import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description:
    "AksaraNada lahir dari keyakinan bahwa musik adalah bahasa universal. Kenali filosofi, visi, dan orang-orang di balik kursus musik profesional kami.",
};

const VALUES = [
  {
    number: "01",
    title: "Teknik yang Solid",
    body: "Fondasi yang kuat bukan penghalang kreativitas melainkan tanah tempat kreativitas tumbuh. Kami mengajarkan teknik bukan sebagai tujuan, melainkan sebagai kebebasan.",
  },
  {
    number: "02",
    title: "Ekspresi yang Bebas",
    body: "Setiap murid memiliki suara unik yang menunggu untuk dibebaskan. Pengajar kami berperan sebagai pemandu, bukan pencetak, karena kami percaya pada individualitas.",
  },
  {
    number: "03",
    title: "Komunitas yang Hangat",
    body: "Musik paling bermakna ketika dibagi. Kami membangun komunitas di mana murid saling mendukung, berkolaborasi, dan bertumbuh bersama.",
  },
  {
    number: "04",
    title: "Standar tanpa Kompromi",
    body: "Setiap instruktur melalui kurasi ketat. Setiap kurikulum dirancang oleh praktisi industri. Kami menjunjung tinggi kualitas kepada anda.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-24 md:pt-44 md:pb-32 bg-obsidian relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-15"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 80% 50%, #5B1B1B, transparent)",
          }}
        />
        <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
          <span className="eyebrow text-maroon text-[0.65rem] block mb-6">
            Tentang AksaraNada
          </span>
          <h1
            className="font-serif font-bold text-ivory max-w-3xl"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 5.5rem)",
              lineHeight: "1.02",
              letterSpacing: "-0.02em",
            }}
          >
            Musik Bukan Sekadar
            <br />
            <span className="italic text-maroon-accent">Keterampilan.</span>
          </h1>
        </div>
      </section>

      {/* Opening statement */}
      <section className="py-20 md:py-28 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-start">
            <div className="md:col-span-5">
              <p className="eyebrow text-maroon text-[0.65rem] mb-4">
                Manifesto Kami
              </p>
              <h2
                className="font-serif font-semibold text-obsidian"
                style={{
                  fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
                  lineHeight: "1.1",
                  letterSpacing: "-0.01em",
                }}
              >
                Lahir dari keyakinan bahwa setiap jiwa berhak berbicara melalui
                musik.
              </h2>
            </div>
            <div className="md:col-span-7 space-y-5 text-obsidian-muted leading-relaxed text-[0.975rem]">
              <p>
                <strong className="text-obsidian font-semibold">
                  AksaraNada lahir dari satu keyakinan:
                </strong>{" "}
                musik adalah bahasa universal yang tersimpan dalam setiap jiwa,
                menunggu untuk dibebaskan. Bukan hak istimewa bagi yang
                "berbakat". Melainkan hak setiap manusia yang memilih untuk
                mendengarkan panggilan itu.
              </p>
              <p>
                Kami memulai perjalanan ini karena melihat gap yang nyata bahwa
                banyak orang ingin belajar musik, tetapi jarang menemukan ruang
                yang benar-benar memahami mereka. Ruang yang tidak hanya
                mengajarkan teknik, tetapi juga menghargai proses, menghormati
                keunikan, dan merayakan setiap progres kecil.
              </p>
              <p>
                AksaraNada hadir untuk menjadi ruang itu. Dengan instruktur
                terpilih, kurikulum yang kontekstual, dan pendekatan yang
                personal. Kami percaya bahwa belajar musik seharusnya menjadi
                salah satu pengalaman paling bermakna dalam hidup Anda.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider quote */}
      <section className="py-16 md:py-20 bg-maroon relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(255,255,255,0.03) 40px, rgba(255,255,255,0.03) 41px)",
          }}
        />
        <div className="max-w-4xl mx-auto px-6 md:px-10 text-center relative z-10">
          <p
            className="font-serif italic text-ivory leading-tight"
            style={{
              fontSize: "clamp(1.5rem, 4vw, 3rem)",
              letterSpacing: "-0.01em",
            }}
          >
            "Di mana nada bertemu jiwa, di situlah musik yang sesungguhnya
            lahir."
          </p>
          <span className="eyebrow text-white/40 text-[0.6rem] block mt-5">
            — Filosofi AksaraNada
          </span>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28 bg-ivory-dark">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="mb-14">
            <span className="eyebrow text-maroon text-[0.65rem] block mb-4">
              Nilai-Nilai Kami
            </span>
            <h2
              className="font-serif font-bold text-obsidian"
              style={{
                fontSize: "clamp(1.75rem, 3.5vw, 3rem)",
                lineHeight: "1.08",
                letterSpacing: "-0.02em",
              }}
            >
              Empat Pilar yang{" "}
              <span className="italic">Menopang Segalanya.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border-soft border border-border-soft">
            {VALUES.map((v) => (
              <div
                key={v.number}
                className="bg-ivory p-8 md:p-10 hover:bg-obsidian group transition-colors duration-500"
              >
                <span className="eyebrow text-[0.6rem] text-maroon group-hover:text-maroon-accent transition-colors block mb-4">
                  {v.number}
                </span>
                <h3 className="font-serif text-xl font-semibold text-obsidian group-hover:text-ivory transition-colors mb-3">
                  {v.title}
                </h3>
                <p className="text-obsidian-muted text-sm leading-relaxed group-hover:text-ivory/60 transition-colors">
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 md:py-20 bg-ivory border-y border-border-soft">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "50+", label: "Murid Aktif" },
              { number: "5", label: "Instruktur Bersertifikat" },
              { number: "12", label: "Program Kursus" },
              { number: "2", label: "Kota (+ Online)" },
            ].map((s) => (
              <div key={s.label}>
                <p
                  className="font-serif text-4xl md:text-5xl font-bold text-maroon mb-2"
                  style={{ letterSpacing: "-0.03em" }}
                >
                  {s.number}
                </p>
                <p className="eyebrow text-[0.62rem] text-obsidian-muted">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 md:py-20 bg-ivory-dark">
        <div className="max-w-4xl mx-auto px-6 md:px-10 text-center">
          <span className="eyebrow text-maroon text-[0.65rem] block mb-4">
            Ada Pertanyaan?
          </span>
          <h2
            className="font-serif font-semibold text-obsidian text-2xl md:text-3xl mb-4"
            style={{ letterSpacing: "-0.01em" }}
          >
            Kami senang mendengar dari Anda.
          </h2>
          <p className="text-obsidian-muted text-sm mb-8 max-w-md mx-auto">
            Hubungi kami via email atau Instagram. Respons dalam 1×24 jam hari
            kerja.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`}
              className="bg-maroon text-ivory eyebrow text-[0.68rem] px-7 py-3.5 hover:bg-maroon-light transition-colors"
            >
              {`${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`}
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
      </section>

      <CTABanner />
    </>
  );
}
