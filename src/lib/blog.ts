import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "src/content/blog");

export type Sector = "b2b" | "local" | "realestate" | "general";

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  sector: Sector;
  ogImage?: string;
  content: string;
};

function readPost(slug: string): BlogPost {
  const raw = fs.readFileSync(path.join(BLOG_DIR, `${slug}.mdx`), "utf8");
  const { data, content } = matter(raw);
  return {
    slug,
    title: data.title,
    description: data.description,
    date: data.date,
    sector: data.sector ?? "general",
    ogImage: data.ogImage,
    content,
  };
}

export function getAllPosts(): BlogPost[] {
  const files = fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".mdx") && !f.startsWith("_"));

  return files
    .map((f) => readPost(f.replace(/\.mdx$/, "")))
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): BlogPost | null {
  try {
    return readPost(slug);
  } catch {
    return null;
  }
}
