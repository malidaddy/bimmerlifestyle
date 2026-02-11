import { Hero } from "@/components/sections/hero";
import { getAllPosts } from "@/lib/mdx";
import { PostCard } from "@/components/blog/post-card";
import { FeaturedPostCard } from "@/components/blog/featured-post-card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Technical guides, build spotlights, and BMW care tips from the Bimmer Lifestyle team.",
  openGraph: {
    title: "Blog",
    description:
      "Technical guides, build spotlights, and BMW care tips from the Bimmer Lifestyle team.",
    url: "/blog",
  },
  alternates: { canonical: "/blog" },
};

export default async function BlogPage() {
  const posts = await getAllPosts();

  const [featured, ...rest] = posts;

  return (
    <>
      <Hero
        variant="centered"
        headline="The Workshop Blog"
        description="Technical guides, build spotlights, and BMW care tips from the Bimmer Lifestyle team."
        image={{
          src: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=1920&q=80",
          alt: "BMW engine close-up in workshop",
        }}
      />

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
