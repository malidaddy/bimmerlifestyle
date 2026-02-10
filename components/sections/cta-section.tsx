import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CtaSectionProps {
  headline: string;
  description?: string;
  cta: { text: string; href: string };
  secondaryCta?: { text: string; href: string };
  className?: string;
}

export function CtaSection({
  headline,
  description,
  cta,
  secondaryCta,
  className,
}: CtaSectionProps) {
  return (
    <section className={cn("py-16 md:py-24 bg-muted", className)}>
      <div className="container flex flex-col items-center text-center">
        <h2 className="font-heading max-w-2xl text-3xl font-bold tracking-tight md:text-4xl">
          {headline}
        </h2>
        {description && (
          <p className="mt-4 max-w-xl text-lg text-muted-foreground">
            {description}
          </p>
        )}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg">
            <Link href={cta.href}>{cta.text}</Link>
          </Button>
          {secondaryCta && (
            <Button asChild variant="outline" size="lg">
              <Link href={secondaryCta.href}>{secondaryCta.text}</Link>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
