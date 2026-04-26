import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { ArrowLeft } from "lucide-react";
import {
  getArticleBySlug,
  getAllArticleSlugs,
  getRelatedArticles,
} from "@/lib/mdx";
import { formatDate } from "@/lib/utils";

// ─── Static params for SSG ────────────────────────────────
export async function generateStaticParams() {
  return getAllArticleSlugs().map((slug) => ({ slug }));
}

// ─── Dynamic SEO metadata ─────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const article = getArticleBySlug(params.slug);
  if (!article) return { title: "Artikel Tidak Ditemukan | AksaraNada" };

  return {
    title: article.seoTitle || article.title,
    description: article.seoDescription || article.excerpt,
    authors: [{ name: article.author }],
    keywords: article.tags,
    openGraph: {
      type: "article",
      locale: "id_ID",
      url: `https://aksaranada.com/blog/${article.slug}`,
      title: article.seoTitle || article.title,
      description: article.seoDescription || article.excerpt,
      publishedTime: article.date,
      authors: [article.author],
      tags: article.tags,
      images: article.coverImage
        ? [
            {
              url: article.coverImage,
              width: 1200,
              height: 630,
              alt: article.title,
            },
          ]
        : [
            {
              url: "/og-image.jpg",
              width: 1200,
              height: 630,
              alt: "AksaraNada",
            },
          ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.seoTitle || article.title,
      description: article.seoDescription || article.excerpt,
      images: article.coverImage ? [article.coverImage] : ["/og-image.jpg"],
    },
  };
}

// ─── Page Component ───────────────────────────────────────
export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticleBySlug(params.slug);
  if (!article) notFound();

  const related = getRelatedArticles(params.slug, 3);

  return (
    <>
      {/* ── Article Hero ──────────────────────────────────── */}
      <section className="pt-32 pb-10 md:pt-40 md:pb-14 bg-ivory border-b border-border-soft">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          {/* Breadcrumb */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-obsidian-muted eyebrow text-[0.62rem] hover:text-maroon transition-colors mb-8"
          >
            <ArrowLeft size={12} strokeWidth={1.5} />
            Kembali ke Artikel
          </Link>

          {/* Category & meta */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="eyebrow text-[0.6rem] bg-maroon text-ivory px-2.5 py-1">
              {article.category}
            </span>
            <span className="eyebrow text-[0.6rem] text-warm-gray">
              {article.readingTime}
            </span>
            <span className="text-warm-gray/40">·</span>
            <span className="eyebrow text-[0.6rem] text-warm-gray">
              {formatDate(article.date)}
            </span>
          </div>

          {/* Title */}
          <h1
            className="font-serif font-bold text-obsidian max-w-3xl"
            style={{
              fontSize: "clamp(1.75rem, 4vw, 3.5rem)",
              lineHeight: "1.07",
              letterSpacing: "-0.02em",
            }}
          >
            {article.title}
          </h1>

          {/* Excerpt */}
          {article.excerpt && (
            <p className="text-obsidian-muted text-base leading-relaxed max-w-2xl mt-5">
              {article.excerpt}
            </p>
          )}

          {/* Author */}
          <div className="flex items-center gap-3 mt-8 pt-8 border-t border-border-soft">
            <div className="w-9 h-9 bg-maroon/10 border border-maroon/20 flex items-center justify-center">
              <span className="font-serif text-maroon text-xs font-bold">
                {article.author
                  .split(" ")
                  .map((w) => w[0])
                  .join("")
                  .slice(0, 2)}
              </span>
            </div>
            <div>
              <p className="text-obsidian text-sm font-medium">
                {article.author}
              </p>
              {article.authorRole && (
                <p className="eyebrow text-[0.58rem] text-warm-gray">
                  {article.authorRole}
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── Cover Image ───────────────────────────────────── */}
      {article.coverImage && (
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-8">
          <div className="overflow-hidden" style={{ maxHeight: "520px" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={article.coverImage}
              alt={article.title}
              className="w-full object-cover"
            />
          </div>
        </div>
      )}

      {/* ── Main layout: Article + Sidebar ────────────────── */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-14 md:py-20">
        <div className="flex flex-col lg:flex-row gap-12 xl:gap-20">
          {/* ── Article body ────────────────────────────── */}
          <article className="lg:flex-1 min-w-0">
            <div className="prose-aksara">
              <MDXRemote source={article.content} />
            </div>

            {/* Tags */}
            {article.tags?.length > 0 && (
              <div className="mt-12 pt-8 border-t border-border-soft">
                <p className="eyebrow text-[0.6rem] text-warm-gray mb-3">Tag</p>
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="eyebrow text-[0.58rem] border border-border-soft text-obsidian-muted px-2.5 py-1.5 hover:border-maroon hover:text-maroon transition-colors cursor-default"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Author card */}
            <div className="mt-12 p-7 bg-ivory-dark border border-border-soft">
              <p className="eyebrow text-[0.6rem] text-maroon mb-4">
                Tentang Penulis
              </p>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-maroon/10 border border-maroon/20 flex items-center justify-center flex-shrink-0">
                  <span className="font-serif text-maroon font-bold">
                    {article.author
                      .split(" ")
                      .map((w) => w[0])
                      .join("")
                      .slice(0, 2)}
                  </span>
                </div>
                <div>
                  <p className="font-serif text-obsidian font-semibold">
                    {article.author}
                  </p>
                  {article.authorRole && (
                    <p className="text-obsidian-muted text-xs mt-0.5">
                      {article.authorRole}
                    </p>
                  )}
                  <p className="text-obsidian-muted text-xs mt-2 leading-relaxed">
                    {article.authorBio}
                  </p>
                </div>
              </div>
            </div>
          </article>

          {/* ── Sidebar ─────────────────────────────────── */}
          <aside className="lg:w-72 xl:w-80 flex-shrink-0">
            <div className="sticky top-28 flex flex-col gap-8">
              {/* ── AD SPACE ── */}
              {/*
                ┌─────────────────────────────────────────────────────┐
                │  SLOT IKLAN — SIDEBAR KANAN                         │
                │                                                      │
                │  Ukuran ideal  : 280 × 280 px  (square)             │
                │  Atau          : 280 × 360 px  (portrait)           │
                │                                                      │
                │  Cara pasang:                                        │
                │  1. Ganti blok <div> placeholder di bawah dengan    │
                │     kode iklan (Google AdSense / banner manual)      │
                │  2. Atau embed <img> dengan link href                │
                └─────────────────────────────────────────────────────┘
              */}
              <div className="border border-dashed border-maroon/25 bg-maroon/3 p-6 text-center min-h-[260px] flex flex-col items-center justify-center gap-3">
                <span className="eyebrow text-[0.6rem] text-maroon/40">
                  SLOT IKLAN
                </span>
                <p className="text-warm-gray text-xs leading-relaxed max-w-[180px]">
                  Ruang iklan sidebar tersedia di sini. Hubungi kami untuk
                  pemasangan.
                </p>
                <a
                  href="mailto:info.aksaranada@gmail.com?subject=Pemasangan Iklan Blog AksaraNada"
                  className="eyebrow text-[0.6rem] text-maroon border-b border-maroon/40 pb-0.5 hover:opacity-70 transition-opacity"
                >
                  Pasang Iklan →
                </a>
              </div>

              {/* Quick CTA */}
              <div className="bg-obsidian p-6">
                <span className="eyebrow text-[0.6rem] text-maroon block mb-3">
                  Tertarik Belajar?
                </span>
                <p className="font-serif text-ivory text-base leading-snug mb-4">
                  Mulai perjalanan musik Anda bersama kami.
                </p>
                <Link
                  href="/pricing"
                  className="block text-center eyebrow text-[0.62rem] border border-white/20 text-ivory py-3 hover:bg-white/5 transition-colors"
                >
                  Lihat Paket Kursus
                </Link>
              </div>

              {/* Table of Contents placeholder */}
              <div className="border border-border-soft p-6">
                <p className="eyebrow text-[0.6rem] text-maroon mb-4">
                  Kategori Artikel
                </p>
                <div className="space-y-2">
                  {[
                    "Teknik",
                    "Teori Musik",
                    "Inspirasi",
                    "Gear",
                    "Produksi",
                    "Karir",
                  ].map((cat) => (
                    <Link
                      key={cat}
                      href={`/blog?category=${cat}`}
                      className="flex items-center gap-2 text-obsidian-muted text-xs hover:text-maroon transition-colors group"
                    >
                      <span className="w-1 h-1 rounded-full bg-warm-gray group-hover:bg-maroon transition-colors" />
                      {cat}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Second ad slot */}
              <div className="border border-dashed border-maroon/25 bg-maroon/3 p-6 text-center min-h-[200px] flex flex-col items-center justify-center gap-3">
                <span className="eyebrow text-[0.6rem] text-maroon/40">
                  SLOT IKLAN #2
                </span>
                <p className="text-warm-gray text-xs max-w-[180px]">
                  Banner iklan kedua tersedia di sini.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* ── Related Articles ──────────────────────────────── */}
      {related.length > 0 && (
        <section className="py-16 md:py-20 bg-ivory-dark border-t border-border-soft">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <p className="eyebrow text-maroon text-[0.65rem] mb-8">
              Artikel Terkait
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/blog/${rel.slug}`}
                  className="group"
                >
                  <div
                    className="bg-ivory-deeper overflow-hidden mb-3"
                    style={{ aspectRatio: "16/9" }}
                  >
                    {rel.coverImage ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={rel.coverImage}
                        alt={rel.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="font-serif text-3xl text-warm-gray/30 italic">
                          {rel.category.charAt(0)}
                        </span>
                      </div>
                    )}
                  </div>
                  <span className="eyebrow text-[0.58rem] text-maroon block mb-1.5">
                    {rel.category}
                  </span>
                  <h3 className="font-serif text-sm font-semibold text-obsidian group-hover:text-maroon transition-colors leading-snug line-clamp-2">
                    {rel.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
