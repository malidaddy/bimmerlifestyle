import { SectionWrapper } from "./section-wrapper";
import type { Stat } from "@/types/content";

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
    <SectionWrapper title={title} description={description} className="bg-muted/50">
      <div className="flex flex-col items-center justify-center md:flex-row md:divide-x md:divide-border">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex flex-col items-center px-8 py-4 md:py-0"
          >
            <span className="font-heading text-4xl font-bold text-primary md:text-5xl">
              {stat.value}
            </span>
            <span className="mt-2 text-sm font-medium text-muted-foreground">
              {stat.label}
            </span>
            {stat.description && (
              <span className="mt-1 text-xs text-muted-foreground/70">
                {stat.description}
              </span>
            )}
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
