"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Article } from "@/lib/mdx";
import { formatDate } from "@/lib/utils";

interface Props {
  articles: Pick<
    Article,
    | "slug"
    | "title"
    | "excerpt"
    | "date"
    | "category"
    | "readingTime"
    | "coverImage"
  >[];
}

function ArticleCard({
  article,
  index,
}: {
  article: Props["articles"][0];
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.08 * index,
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group flex-shrink-0 w-64 md:w-72"
    >
      <Link href={`/blog/${article.slug}`} className="block">
        {/* Image */}
        <div
          className="relative overflow-hidden mb-4 bg-ivory-deeper"
          style={{ aspectRatio: "4/3" }}
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
              <span className="font-serif text-4xl text-warm-gray/40 italic">
                {article.category.charAt(0)}
              </span>
            </div>
          )}
          {/* Category tag */}
          <div className="absolute top-3 left-3">
            <span className="eyebrow text-[0.55rem] bg-maroon text-ivory px-2 py-1">
              {article.category}
            </span>
          </div>
        </div>

        {/* Meta */}
        <div className="flex items-center gap-2 mb-2">
          <span className="eyebrow text-[0.6rem] text-warm-gray">
            {formatDate(article.date)}
          </span>
          <span className="text-warm-gray text-[0.6rem]">·</span>
          <span className="eyebrow text-[0.6rem] text-warm-gray">
            {article.readingTime}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-serif text-base font-semibold text-obsidian group-hover:text-maroon transition-colors leading-snug mb-2 line-clamp-2">
          {article.title}
        </h3>

        {/* Excerpt */}
        <p className="text-obsidian-muted text-xs leading-relaxed line-clamp-2">
          {article.excerpt}
        </p>

        {/* Read more */}
        <div className="flex items-center gap-1.5 mt-3 text-maroon eyebrow text-[0.6rem] group-hover:gap-3 transition-all">
          Baca artikel
          <ArrowRight size={11} strokeWidth={2} />
        </div>
      </Link>
    </motion.article>
  );
}

export default function LatestArticles({ articles }: Props) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  if (!articles.length) return null;

  return (
    <section ref={ref} className="py-24 md:py-32 bg-ivory-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-end justify-between mb-10 md:mb-14"
        >
          <div>
            <span className="eyebrow text-maroon block mb-4">Dari Redaksi</span>
            <h2
              className="font-serif font-bold text-obsidian"
              style={{
                fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                lineHeight: "1.08",
                letterSpacing: "-0.02em",
              }}
            >
              Bacaan untuk
              <br />
              <span className="italic">Musisi Berkembang.</span>
            </h2>
          </div>
          <Link
            href="/blog"
            className="hidden md:flex items-center gap-2 text-maroon eyebrow text-[0.65rem] border-b border-maroon pb-0.5 hover:gap-4 transition-all"
          >
            Semua artikel
            <ArrowRight size={12} strokeWidth={1.5} />
          </Link>
        </motion.div>
      </div>

      {/* Horizontal scroll */}
      <div className="pl-6 md:pl-10">
        <div className="scroll-x-hide flex gap-6 pb-4">
          {articles.map((article, i) => (
            <ArticleCard key={article.slug} article={article} index={i} />
          ))}
        </div>
      </div>

      {/* Mobile see all */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 mt-6 md:hidden">
        <Link
          href="/blog"
          className="flex items-center gap-2 text-maroon eyebrow text-[0.65rem]"
        >
          Lihat semua artikel
          <ArrowRight size={12} strokeWidth={1.5} />
        </Link>
      </div>
    </section>
  );
}
