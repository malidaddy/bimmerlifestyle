import { Card, CardContent } from "@/components/ui/card";
import { DynamicIcon } from "@/components/shared/dynamic-icon";
import { SectionWrapper } from "./section-wrapper";
import type { Feature } from "@/types/content";

interface FeaturesSectionProps {
  title?: string;
  description?: string;
  features: Feature[];
}

export function FeaturesSection({
  title = "Features",
  description,
  features,
}: FeaturesSectionProps) {
  return (
    <SectionWrapper title={title} description={description}>
      <div className={`grid gap-8 md:grid-cols-2 ${features.length % 3 === 0 ? "lg:grid-cols-3" : "lg:grid-cols-2"}`}>
        {features.map((feature) => (
          <Card
            key={feature.title}
            className="border-2 border-[#16588E]/12 bg-transparent shadow-[3px_3px_0_0_rgba(22,88,142,0.08)] hover:shadow-[5px_5px_0_0_rgba(22,88,142,0.12)] hover:border-[#16588E]/25 hover:-translate-y-1 transition-all duration-300"
          >
            <CardContent className="flex flex-col items-start space-y-4 p-8">
              <div className="rounded-xl bg-[#16588E]/10 p-4">
                <DynamicIcon
                  name={feature.icon}
                  className="h-8 w-8 text-[#16588E]"
                />
              </div>
              <h3 className="font-heading text-2xl font-bold uppercase">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-base leading-relaxed">
                {feature.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
