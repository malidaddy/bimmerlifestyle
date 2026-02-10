import Link from "next/link";
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
  className,
}: HeroProps) {
  return (
    <section className={cn("py-20 md:py-28", className)}>
      <div className="container flex flex-col items-center text-center">
        {badge && (
          <Badge variant="secondary" className="mb-4">
            {badge}
          </Badge>
        )}
        <h1 className="font-heading max-w-4xl text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
          {headline}
        </h1>
        {description && (
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
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
    </section>
  );
}
