import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { HeroProps } from "@/types/hero";

export function HeroSplit({
  headline,
  description,
  badge,
  primaryCta,
  secondaryCta,
  image,
  className,
}: HeroProps) {
  return (
    <section className={cn("overflow-hidden", className)}>
      <div className="grid min-h-[600px] lg:grid-cols-2">
        <div className="flex flex-col justify-center px-6 py-20 md:px-12 lg:px-16">
          {badge && (
            <Badge variant="secondary" className="mb-4 w-fit">
              {badge}
            </Badge>
          )}
          <h1 className="font-heading text-4xl font-bold tracking-tight md:text-5xl">
            {headline}
          </h1>
          {description && (
            <p className="mt-6 max-w-lg text-lg text-muted-foreground">
              {description}
            </p>
          )}
          {(primaryCta || secondaryCta) && (
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              {primaryCta && (
                <Button asChild size="lg">
                  <Link href={primaryCta.href}>{primaryCta.text}</Link>
                </Button>
              )}
              {secondaryCta && (
                <Button asChild variant="outline" size="lg">
                  <Link href={secondaryCta.href}>{secondaryCta.text}</Link>
                </Button>
              )}
            </div>
          )}
        </div>
        {image && (
          <div className="relative min-h-[400px] lg:min-h-0">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}
      </div>
    </section>
  );
}
