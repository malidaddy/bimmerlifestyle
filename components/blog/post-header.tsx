import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import type { BlogPost } from "@/types/blog";

interface PostHeaderProps {
  post: BlogPost;
}

export function PostHeader({ post }: PostHeaderProps) {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <Badge key={tag} variant="secondary">
            {tag}
          </Badge>
        ))}
      </div>
      <h1 className="font-heading text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
        {post.title}
      </h1>
      <div className="flex items-center gap-3 text-sm text-muted-foreground">
        <span className="font-medium text-foreground">{post.author}</span>
        <span>&middot;</span>
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
      {post.image && (
        <div className="relative aspect-[16/9] overflow-hidden rounded-lg">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}
    </div>
  );
}
