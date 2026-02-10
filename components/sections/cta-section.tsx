import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LogoWatermark } from "@/components/shared/logo-watermark";
import { cn } from "@/lib/utils";

/* Hex colors for maximum browser compatibility */
const darkBg = "linear-gradient(135deg, #1a4a72 0%, #142d47 100%)";
const lightBg = "linear-gradient(135deg, #f0f7ff 0%, #e2ecf4 100%)";

interface CtaSectionProps {
  headline: string;
  description?: string;
  cta: { text: string; href: string };
  secondaryCta?: { text: string; href: string };
  className?: string;
  variant?: "dark" | "light";
}

export function CtaSection({
  headline,
  description,
  cta,
  secondaryCta,
  className,
  variant = "dark",
}: CtaSectionProps) {
  const isDark = variant === "dark";

  return (
    <section
      className={cn("relative overflow-hidden py-20 md:py-32", isDark ? "text-white" : "text-foreground", className)}
      style={{
        background: isDark ? darkBg : lightBg,
        backgroundColor: isDark ? "#142d47" : "#f0f7ff",
      }}
    >
      <LogoWatermark
        color={isDark ? "white" : "navy"}
        opacity={isDark ? 8 : 5}
        className="-right-20 -top-12 w-[500px] rotate-[-8deg] md:w-[700px]"
      />
      <div className="container relative z-10 flex flex-col items-center text-center">
        <h2
          className={cn(
            "font-heading max-w-3xl text-3xl font-extrabold uppercase tracking-tight md:text-5xl",
            !isDark && "text-[#16588E]"
          )}
        >
          {headline}
        </h2>
        {description && (
          <p
            className={cn(
              "mt-6 max-w-xl text-lg md:text-xl",
              isDark ? "text-white/90" : "text-muted-foreground"
            )}
          >
            {description}
          </p>
        )}
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="btn-lg bg-[#E7222E] text-white shadow-lg shadow-[#E7222E]/25 hover:bg-[#c91c26] hover:shadow-[#E7222E]/40 transition-all duration-300"
          >
            <Link href={cta.href}>{cta.text}</Link>
          </Button>
          {secondaryCta && (
            <Button
              asChild
              variant="outline"
              size="lg"
              className={cn(
                "btn-lg border-2",
                isDark
                  ? "border-white/40 bg-transparent text-white hover:bg-white/15"
                  : "border-[#E7222E]/30 bg-transparent text-[#E7222E] hover:bg-[#E7222E]/10"
              )}
            >
              <Link href={secondaryCta.href}>{secondaryCta.text}</Link>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
