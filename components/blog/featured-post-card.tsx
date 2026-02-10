import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import type { BlogPost } from "@/types/blog";

interface FeaturedPostCardProps {
  post: BlogPost;
}

export function FeaturedPostCard({ post }: FeaturedPostCardProps) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block overflow-hidden rounded-xl border bg-card transition-shadow hover:shadow-lg"
    >
      <div className="grid md:grid-cols-2">
        {/* Image */}
        {post.image && (
          <div className="relative aspect-[16/10] md:aspect-auto md:min-h-[320px]">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        )}

        {/* Content */}
        <div className="flex flex-col justify-center p-8 md:p-10">
          <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </time>
            <span>&middot;</span>
            <span>{post.readingTime}</span>
          </div>

          <h2 className="font-heading mt-4 text-2xl font-bold tracking-tight md:text-3xl">
            {post.title}
          </h2>

          <p className="mt-3 text-muted-foreground line-clamp-3">
            {post.description}
          </p>

          {post.tags.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {post.tags.slice(0, 3).map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          )}

          <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary">
            Read More
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    </Link>
  );
}
