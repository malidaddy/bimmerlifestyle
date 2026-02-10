import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { HeroProps } from "@/types/hero";

export function HeroCentered({
  headline,
  description,
  badge,
  primaryCta,
  secondaryCta,
  image,
  className,
}: HeroProps) {
  const hasImage = !!image;

  return (
    <section
      data-hero-bleed={hasImage || undefined}
      className={cn(
        hasImage
          ? "relative -mt-16 flex items-end overflow-hidden"
          : "py-20 md:py-28",
        className
      )}
      style={hasImage ? { minHeight: "340px" } : undefined}
    >
      {hasImage && (
        <>
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-black/40" />
        </>
      )}
      <div
        className={cn(
          "container flex flex-col items-center text-center",
          hasImage ? "relative z-10 pb-12 pt-28" : ""
        )}
      >
        {badge && (
          <Badge
            variant="secondary"
            className={cn(
              "mb-4",
              hasImage && "bg-white/15 text-white backdrop-blur-sm border-white/20"
            )}
          >
            {badge}
          </Badge>
        )}
        <h1
          className={cn(
            "font-heading max-w-4xl text-4xl font-extrabold uppercase tracking-tight md:text-5xl lg:text-6xl",
            hasImage && "text-white"
          )}
        >
          {headline}
        </h1>
        {description && (
          <p
            className={cn(
              "mt-6 max-w-2xl text-lg md:text-xl",
              hasImage ? "text-white/85" : "text-muted-foreground"
            )}
          >
            {description}
          </p>
        )}
        {(primaryCta || secondaryCta) && (
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            {primaryCta && (
              <Button
                asChild
                size="lg"
                className={cn(
                  hasImage && "bg-[#E7222E] hover:bg-[#E7222E]/90 text-white shadow-lg"
                )}
              >
                <Link href={primaryCta.href}>{primaryCta.text}</Link>
              </Button>
            )}
            {secondaryCta && (
              <Button
                asChild
                variant="outline"
                size="lg"
                className={cn(
                  hasImage &&
                    "border-white/40 text-white hover:bg-white/15"
                )}
              >
                <Link href={secondaryCta.href}>{secondaryCta.text}</Link>
              </Button>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
