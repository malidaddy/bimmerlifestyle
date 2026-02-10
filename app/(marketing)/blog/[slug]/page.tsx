import { notFound } from "next/navigation";
import { getPostBySlug, getPostSlugs } from "@/lib/mdx";
import { PostHeader } from "@/components/blog/post-header";
import type { Metadata } from "next";

interface BlogPostPageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  const slugs = await getPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);
  if (!post) return {};

  return {
    title: post.metadata.title,
    description: post.metadata.description,
    openGraph: {
      title: post.metadata.title,
      description: post.metadata.description,
      type: "article",
      publishedTime: post.metadata.date,
      authors: [post.metadata.author],
      images: post.metadata.image ? [post.metadata.image] : [],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <article className="container max-w-3xl py-16">
      <PostHeader post={post.metadata} />
      <div className="prose prose-zinc dark:prose-invert mt-10 max-w-none">
        {post.content}
      </div>
    </article>
  );
}
