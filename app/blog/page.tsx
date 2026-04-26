import type { Metadata } from "next";
import Link from "next/link";
import { getAllArticles } from "@/lib/mdx";
import { formatDate } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Artikel & Inspirasi",
  description:
    "Bacaan untuk musisi yang terus berkembang. Tips teknik, teori musik, cerita inspiratif, dan panduan dari instruktur AksaraNada.",
};

const CATEGORIES = [
  "Semua",
  "Teknik",
  "Teori Musik",
  "Inspirasi",
  "Gear",
  "Produksi",
  "Karir",
];

export default function BlogPage({
  searchParams,
}: {
  searchParams: { category?: string };
}) {
  const allArticles = getAllArticles();
  const activeCategory = searchParams.category ?? "Semua";

  const filtered =
    activeCategory === "Semua"
      ? allArticles
      : allArticles.filter(
          (a) => a.category.toLowerCase() === activeCategory.toLowerCase(),
        );

  const featured = filtered.find((a) => a.featured) ?? filtered[0];
  const rest = filtered.filter((a) => a.slug !== featured?.slug);

  return (
    <>
      {/* ── Page Hero ──────────────────────────────────────────── */}
      <section className="pt-36 pb-16 md:pt-44 md:pb-20 bg-obsidian relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-15"
          style={{
            background:
              "radial-gradient(ellipse 55% 50% at 20% 60%, #5B1B1B, transparent)",
          }}
        />
        <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
          <span className="eyebrow text-maroon text-[0.65rem] block mb-6">
            Redaksi AksaraNada
          </span>
          <h1
            className="font-serif font-bold text-ivory max-w-2xl"
            style={{
              fontSize: "clamp(2.25rem, 5vw, 4.5rem)",
              lineHeight: "1.04",
              letterSpacing: "-0.02em",
            }}
          >
            Bacaan untuk Musisi
            <br />
            <span className="italic text-maroon-accent">
              yang Terus Bertumbuh.
            </span>
          </h1>
          <p className="text-ivory/50 text-sm md:text-base leading-relaxed max-w-lg mt-5">
            Tips teknik, teori, cerita inspiratif, dan panduan dari instruktur
            dan praktisi musik.
          </p>
        </div>
      </section>

      {/* ── Category Filter ────────────────────────────────────── */}
      <div className="sticky top-[68px] z-20 bg-ivory border-b border-border-soft">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="scroll-x-hide flex gap-0 py-0">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat}
                scroll={false}
                href={cat === "Semua" ? "/blog" : `/blog?category=${cat}`}
                className={`flex-shrink-0 eyebrow text-[0.62rem] px-5 py-4 border-b-2 transition-colors ${
                  activeCategory === cat
                    ? "border-maroon text-maroon"
                    : "border-transparent text-obsidian-muted hover:text-obsidian"
                }`}
              >
                {cat}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="py-16 md:py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          {allArticles.length === 0 ? (
            /* ── Empty state ─────────────────────────────────── */
            <div className="text-center py-24">
              <span className="font-serif text-6xl text-warm-gray/30 italic block mb-6">
                ✦
              </span>
              <h2 className="font-serif text-2xl text-obsidian mb-3">
                Artikel segera hadir.
              </h2>
              <p className="text-obsidian-muted text-sm max-w-xs mx-auto">
                Kami sedang menyiapkan konten terbaik. Pantau terus Instagram
                kami untuk update terbaru.
              </p>
              <a
                href="https://instagram.com/aksaranada.music"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-6 eyebrow text-[0.65rem] text-maroon border-b border-maroon pb-0.5"
              >
                @aksaranada.music →
              </a>
            </div>
          ) : (
            <>
              {/* ── Featured Article ─────────────────────────── */}
              {featured && (
                <div className="mb-16 md:mb-20">
                  <p className="eyebrow text-maroon text-[0.62rem] mb-6">
                    Artikel Pilihan
                  </p>
                  <Link
                    href={`/blog/${featured.slug}`}
                    className="group grid grid-cols-1 md:grid-cols-2 gap-0 border border-border-soft hover:border-maroon/30 transition-colors"
                  >
                    {/* Image */}
                    <div
                      className="relative overflow-hidden bg-ivory-deeper"
                      style={{ minHeight: "280px" }}
                    >
                      {featured.coverImage ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={featured.coverImage}
                          alt={featured.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <span className="font-serif text-7xl text-warm-gray/20 italic">
                            {featured.category.charAt(0)}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="bg-ivory p-8 md:p-12 flex flex-col justify-center gap-5">
                      <div className="flex items-center gap-3">
                        <span className="eyebrow text-[0.58rem] bg-maroon text-ivory px-2 py-1">
                          {featured.category}
                        </span>
                        <span className="eyebrow text-[0.58rem] text-warm-gray">
                          {featured.readingTime}
                        </span>
                      </div>

                      <h2
                        className="font-serif font-bold text-obsidian group-hover:text-maroon transition-colors"
                        style={{
                          fontSize: "clamp(1.4rem, 2.5vw, 2.25rem)",
                          lineHeight: "1.1",
                          letterSpacing: "-0.01em",
                        }}
                      >
                        {featured.title}
                      </h2>

                      <p className="text-obsidian-muted text-sm leading-relaxed line-clamp-3">
                        {featured.excerpt}
                      </p>

                      <div className="flex items-center justify-between mt-2">
                        <div>
                          <p className="text-obsidian text-xs font-medium">
                            {featured.author}
                          </p>
                          <p className="eyebrow text-[0.58rem] text-warm-gray mt-0.5">
                            {formatDate(featured.date)}
                          </p>
                        </div>
                        <span className="flex items-center gap-2 text-maroon eyebrow text-[0.62rem] group-hover:gap-4 transition-all">
                          Baca
                          <ArrowRight size={12} strokeWidth={1.5} />
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              )}

              {/* ── Article Grid ──────────────────────────────── */}
              {rest.length > 0 && (
                <>
                  <div className="h-px bg-border-soft mb-14" />
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {rest.map((article) => (
                      <Link
                        key={article.slug}
                        href={`/blog/${article.slug}`}
                        className="group flex flex-col"
                      >
                        {/* Thumbnail */}
                        <div
                          className="relative overflow-hidden bg-ivory-deeper mb-4"
                          style={{ aspectRatio: "16/9" }}
                        >
                          {article.coverImage ? (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img
                              src={article.coverImage}
                              alt={article.title}
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center">
                              <span className="font-serif text-4xl text-warm-gray/30 italic">
                                {article.category.charAt(0)}
                              </span>
                            </div>
                          )}
                          <span className="absolute top-2.5 left-2.5 eyebrow text-[0.55rem] bg-maroon text-ivory px-1.5 py-0.5">
                            {article.category}
                          </span>
                        </div>

                        {/* Meta */}
                        <div className="flex items-center gap-2 mb-2">
                          <span className="eyebrow text-[0.58rem] text-warm-gray">
                            {formatDate(article.date)}
                          </span>
                          <span className="text-warm-gray/50 text-xs">·</span>
                          <span className="eyebrow text-[0.58rem] text-warm-gray">
                            {article.readingTime}
                          </span>
                        </div>

                        {/* Title */}
                        <h2 className="font-serif text-base md:text-lg font-semibold text-obsidian group-hover:text-maroon transition-colors leading-snug mb-2 line-clamp-2 flex-1">
                          {article.title}
                        </h2>

                        {/* Excerpt */}
                        <p className="text-obsidian-muted text-xs leading-relaxed line-clamp-2 mb-3">
                          {article.excerpt}
                        </p>

                        <div className="flex items-center gap-1.5 text-maroon eyebrow text-[0.6rem] group-hover:gap-3 transition-all mt-auto">
                          Baca selengkapnya
                          <ArrowRight size={11} strokeWidth={2} />
                        </div>
                      </Link>
                    ))}
                  </div>
                </>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
}
