import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { HeroProps } from "@/types/hero";

export function HeroDefault({
  headline,
  description,
  badge,
  primaryCta,
  secondaryCta,
  image,
  className,
}: HeroProps) {
  return (
    <section className={cn("py-20 md:py-28", className)}>
      <div className="container">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col space-y-6">
            {badge && (
              <Badge variant="secondary" className="w-fit">
                {badge}
              </Badge>
            )}
            <h1 className="font-heading text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              {headline}
            </h1>
            {description && (
              <p className="max-w-[600px] text-lg text-muted-foreground md:text-xl">
                {description}
              </p>
            )}
            {(primaryCta || secondaryCta) && (
              <div className="flex flex-col gap-3 sm:flex-row">
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
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-xl">
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
      </div>
    </section>
  );
}
