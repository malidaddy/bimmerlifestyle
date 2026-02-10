import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import { compileMDX } from "next-mdx-remote/rsc";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import { mdxComponents } from "@/components/blog/mdx-components";
import type { BlogPost } from "@/types/blog";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

function getBlogFiles(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs.readdirSync(BLOG_DIR).filter((file) => file.endsWith(".mdx"));
}

function parsePostFile(filename: string): BlogPost | null {
  const filePath = path.join(BLOG_DIR, filename);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  if (!data.published && process.env.NODE_ENV === "production") {
    return null;
  }

  const slug = filename.replace(/\.mdx$/, "");

  return {
    slug,
    title: data.title || "",
    description: data.description || "",
    date: data.date || "",
    author: data.author || "",
    image: data.image,
    tags: data.tags || [],
    published: data.published ?? true,
    readingTime: readingTime(content).text,
  };
}

export async function getAllPosts(): Promise<BlogPost[]> {
  const files = getBlogFiles();
  const posts = files
    .map(parsePostFile)
    .filter((post): post is BlogPost => post !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}

export async function getPostBySlug(slug: string) {
  const filename = `${slug}.mdx`;
  const filePath = path.join(BLOG_DIR, filename);

  if (!fs.existsSync(filePath)) return null;

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content: rawContent } = matter(fileContent);

  const { content } = await compileMDX({
    source: rawContent,
    components: mdxComponents,
    options: {
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [rehypeSlug],
      },
    },
  });

  const metadata: BlogPost = {
    slug,
    title: data.title || "",
    description: data.description || "",
    date: data.date || "",
    author: data.author || "",
    image: data.image,
    tags: data.tags || [],
    published: data.published ?? true,
    readingTime: readingTime(rawContent).text,
  };

  return { metadata, content };
}

export async function getPostSlugs(): Promise<string[]> {
  const files = getBlogFiles();
  return files.map((file) => file.replace(/\.mdx$/, ""));
}
