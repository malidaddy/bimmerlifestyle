import { LogoWatermark } from "@/components/shared/logo-watermark";
import type { Stat } from "@/types/content";

const statsBg = "linear-gradient(135deg, #1a4a72 0%, #142d47 100%)";

interface StatsSectionProps {
  title?: string;
  description?: string;
  stats: Stat[];
}

export function StatsSection({
  title,
  description,
  stats,
}: StatsSectionProps) {
  return (
    <section
      className="relative overflow-hidden py-20 md:py-28 text-white"
      style={{ background: statsBg, backgroundColor: "#142d47" }}
    >
      <LogoWatermark
        color="white"
        opacity={6}
        className="-left-16 -bottom-8 w-[450px] rotate-[10deg] md:w-[600px]"
      />
      <div className="container relative z-10">
        {(title || description) && (
          <div className="mx-auto mb-14 max-w-3xl text-center">
            {title && (
              <h2 className="font-heading text-3xl font-extrabold uppercase tracking-tight md:text-5xl">
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-5 text-lg text-white/80 md:text-xl leading-relaxed">
                {description}
              </p>
            )}
          </div>
        )}
        <div className="flex flex-col items-center justify-center md:flex-row md:divide-x md:divide-white/20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center px-10 py-6 md:py-0"
            >
              <span className="font-heading text-5xl font-extrabold uppercase text-[#81C4FF] md:text-6xl">
                {stat.value}
              </span>
              <span className="mt-3 text-base font-medium text-white/80">
                {stat.label}
              </span>
              {stat.description && (
                <span className="mt-1 text-sm text-white/60">
                  {stat.description}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
