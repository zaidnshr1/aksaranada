import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

// ─── Types ────────────────────────────────────────────────
export interface ArticleFrontmatter {
  title: string;
  excerpt: string;
  date: string;
  author: string;
  authorBio: string;
  authorRole?: string;
  category: string;
  tags: string[];
  coverImage?: string;
  featured?: boolean;
  seoTitle?: string;
  seoDescription?: string;
}

export interface Article extends ArticleFrontmatter {
  slug: string;
  readingTime: string;
  content: string;
}

// ─── Content Directory ────────────────────────────────────
const ARTICLES_DIR = path.join(process.cwd(), "content", "articles");

// ─── Helpers ──────────────────────────────────────────────
function ensureDir() {
  if (!fs.existsSync(ARTICLES_DIR)) {
    fs.mkdirSync(ARTICLES_DIR, { recursive: true });
  }
}

// ─── Get All Article Slugs ────────────────────────────────
export function getAllArticleSlugs(): string[] {
  ensureDir();
  return fs
    .readdirSync(ARTICLES_DIR)
    .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"))
    .map((f) => f.replace(/\.(mdx|md)$/, ""));
}

// ─── Get Single Article ───────────────────────────────────
export function getArticleBySlug(slug: string): Article | null {
  ensureDir();
  const mdxPath = path.join(ARTICLES_DIR, `${slug}.mdx`);
  const mdPath = path.join(ARTICLES_DIR, `${slug}.md`);
  const filePath = fs.existsSync(mdxPath)
    ? mdxPath
    : fs.existsSync(mdPath)
      ? mdPath
      : null;

  if (!filePath) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  const stats = readingTime(content);

  return {
    slug,
    title: data.title ?? "Tanpa Judul",
    excerpt: data.excerpt ?? "",
    date: data.date
      ? new Date(data.date).toISOString()
      : new Date().toISOString(),
    author: data.author ?? "Tim AksaraNada",
    authorBio: data.authorBio ?? "Seorang Professional",
    authorRole: data.authorRole ?? "",
    category: data.category ?? "Umum",
    tags: data.tags ?? [],
    coverImage: data.coverImage ?? null,
    featured: data.featured ?? false,
    seoTitle: data.seoTitle ?? data.title ?? "AksaraNada",
    seoDescription: data.seoDescription ?? data.excerpt ?? "",
    readingTime: stats.text,
    content,
  };
}

// ─── Get All Articles (sorted by date desc) ───────────────
export function getAllArticles(): Article[] {
  return getAllArticleSlugs()
    .map((slug) => getArticleBySlug(slug))
    .filter((a): a is Article => a !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

// ─── Get Featured Articles ────────────────────────────────
export function getFeaturedArticles(limit = 4): Article[] {
  return getAllArticles()
    .filter((a) => a.featured)
    .slice(0, limit);
}

// ─── Get Articles by Category ─────────────────────────────
export function getArticlesByCategory(category: string): Article[] {
  return getAllArticles().filter(
    (a) => a.category.toLowerCase() === category.toLowerCase(),
  );
}

// ─── Get Related Articles ─────────────────────────────────
export function getRelatedArticles(slug: string, limit = 3): Article[] {
  const current = getArticleBySlug(slug);
  if (!current) return [];

  return getAllArticles()
    .filter((a) => a.slug !== slug)
    .filter(
      (a) =>
        a.category === current.category ||
        a.tags.some((t) => current.tags.includes(t)),
    )
    .slice(0, limit);
}
