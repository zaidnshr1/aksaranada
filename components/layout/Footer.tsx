import Link from "next/link";
import { Instagram, Mail } from "lucide-react";

const COURSES = [
  "Vokal",
  "Gitar Elektrik",
  "Gitar Klasik",
  "Bass",
  "Piano",
  "Keyboard",
  "Produksi Musik",
];

const PAGES = [
  { label: "Tentang Kami", href: "/about" },
  { label: "Pengajar", href: "/teachers" },
  { label: "Kursus & Harga", href: "/pricing" },
  { label: "Artikel", href: "/blog" },
];

export default function Footer() {
  return (
    <footer className="bg-obsidian text-ivory relative overflow-hidden">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-maroon to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="py-16 md:py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-7 h-7 bg-maroon flex items-center justify-center">
                <span className="font-serif text-ivory text-xs font-bold">
                  AN
                </span>
              </div>
              <span className="font-serif font-bold text-lg tracking-tight">
                AksaraNada
              </span>
            </div>
            <p className="text-warm-gray text-sm leading-relaxed mb-6 max-w-xs">
              Tempat di mana bakat bertemu dedikasi. Kursus musik
              untuk semua usia, online dan onsite di Jakarta dan Kota Bekasi.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com/aksaranada.music"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-white/15 flex items-center justify-center text-warm-gray hover:border-maroon hover:text-maroon transition-all"
                aria-label="Instagram AksaraNada"
              >
                <Instagram size={15} strokeWidth={1.5} />
              </a>
              <a
                href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`}
                className="w-9 h-9 border border-white/15 flex items-center justify-center text-warm-gray hover:border-maroon hover:text-maroon transition-all"
                aria-label="Email AksaraNada"
              >
                <Mail size={15} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Navigasi column */}
          <div>
            <p className="eyebrow text-[0.62rem] text-maroon mb-5">Navigasi</p>
            <ul className="space-y-3">
              {PAGES.map((p) => (
                <li key={p.href}>
                  <Link
                    href={p.href}
                    className="text-warm-gray text-sm hover:text-ivory transition-colors"
                  >
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kursus column */}
          <div>
            <p className="eyebrow text-[0.62rem] text-maroon mb-5">
              Program Kursus
            </p>
            <ul className="space-y-3">
              {COURSES.map((c) => (
                <li key={c}>
                  <Link
                    href="/pricing"
                    className="text-warm-gray text-sm hover:text-ivory transition-colors"
                  >
                    {c}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontak column */}
          <div>
            <p className="eyebrow text-[0.62rem] text-maroon mb-5">
              Hubungi Kami
            </p>
            <div className="space-y-4 text-sm">
              <div>
                <p className="text-white/40 text-[0.7rem] mb-1">Email</p>
                <a
                  href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`}
                  className="text-warm-gray hover:text-ivory transition-colors break-all"
                >
                  {`${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`}
                </a>
              </div>
              <div>
                <p className="text-white/40 text-[0.7rem] mb-1">Instagram</p>
                <a
                  href="https://instagram.com/aksaranada.music"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-warm-gray hover:text-ivory transition-colors"
                >
                  @aksaranada.music
                </a>
              </div>
              <div>
                <p className="text-white/40 text-[0.7rem] mb-1">Lokasi</p>
                <p className="text-warm-gray leading-relaxed">
                  Jakarta · Bekasi
                  <br />
                  <span className="text-white/30 text-xs">
                    + Kelas Online (Seluruh Indonesia)
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/8 py-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} AksaraNada. Semua hak dilindungi.
          </p>
          <p className="text-white/20 text-xs italic font-serif">
            "Di Mana Nada Bertemu Jiwa"
          </p>
        </div>
      </div>
    </footer>
  );
}
