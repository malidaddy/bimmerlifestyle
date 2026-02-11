import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { HeroProps } from "@/types/hero";

export function HeroVideo({
  headline,
  description,
  badge,
  badgeHref,
  primaryCta,
  secondaryCta,
  image,
  videoSrc,
  className,
}: HeroProps) {
  return (
    <section
      data-hero-bleed
      className={cn(
        "relative -mt-16 min-h-[100svh] overflow-hidden",
        className
      )}
    >
      {/* Video or image background */}
      {videoSrc ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          className="pointer-events-none absolute inset-0 h-full w-full object-cover"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      ) : image ? (
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="object-cover"
          priority
        />
      ) : null}

      {/* Gradient overlay — darker for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/90 via-black/50 to-black/60" />

      {/* Content — positioned in the lower portion */}
      <div className="relative flex min-h-[100svh] items-end pb-24 md:items-center md:pb-0">
        <div className="container flex flex-col items-center text-center text-white">
          {badge && (
            badgeHref ? (
              <a href={badgeHref} target="_blank" rel="noopener noreferrer" className="pointer-events-auto">
                <Badge
                  variant="secondary"
                  className="mb-4 bg-white/15 text-white backdrop-blur-sm border-white/20 hover:bg-white/25 transition-colors cursor-pointer"
                >
                  {badge}
                </Badge>
              </a>
            ) : (
              <Badge
                variant="secondary"
                className="mb-4 bg-white/15 text-white backdrop-blur-sm border-white/20"
              >
                {badge}
              </Badge>
            )
          )}
          <h1 className="font-heading max-w-5xl text-4xl font-extrabold tracking-tight md:text-6xl lg:text-8xl">
            {headline}
          </h1>
          {description && (
            <p className="mt-6 max-w-2xl text-lg text-zinc-100 md:text-2xl leading-relaxed">
              {description}
            </p>
          )}
          {(primaryCta || secondaryCta) && (
            <div className="mt-12 flex flex-col gap-4 sm:flex-row">
              {primaryCta && (
                <Button asChild size="lg" className="btn-lg shadow-lg shadow-primary/30">
                  <Link href={primaryCta.href}>{primaryCta.text}</Link>
                </Button>
              )}
              {secondaryCta && (
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="btn-lg border-2 border-white/40 bg-white/10 text-white backdrop-blur-sm hover:bg-white/25 shadow-lg"
                >
                  <Link href={secondaryCta.href}>{secondaryCta.text}</Link>
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
