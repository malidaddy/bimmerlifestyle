import { getAllPosts } from "@/lib/mdx";
import { PostCard } from "@/components/blog/post-card";
import { FeaturedPostCard } from "@/components/blog/featured-post-card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Latest articles, insights, and company updates.",
};

export default async function BlogPage() {
  const posts = await getAllPosts();

  const [featured, ...rest] = posts;

  return (
    <>
      {/* Intro */}
      <section className="container pt-16 pb-8 md:pt-24 md:pb-12">
        <div className="max-w-2xl">
          <h1 className="font-heading text-3xl font-bold tracking-tight md:text-4xl">
            News &amp; Insights
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Explore our latest articles, company updates, and industry insights.
          </p>
        </div>
      </section>

      {posts.length > 0 ? (
        <>
          {/* Featured post */}
          {featured && (
            <section className="container pb-12">
              <FeaturedPostCard post={featured} />
            </section>
          )}

          {/* Remaining posts grid */}
          {rest.length > 0 && (
            <section className="container pb-20">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {rest.map((post) => (
                  <PostCard key={post.slug} post={post} />
                ))}
              </div>
            </section>
          )}
        </>
      ) : (
        <section className="container pb-20">
          <p className="text-center text-muted-foreground">
            No posts yet. Check back soon!
          </p>
        </section>
      )}
    </>
  );
}
