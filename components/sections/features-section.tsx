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
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <Card
            key={feature.title}
            className="border-0 shadow-none bg-transparent hover:bg-muted/50 transition-colors"
          >
            <CardContent className="flex flex-col items-start space-y-3 p-6">
              <div className="rounded-lg bg-primary/10 p-3">
                <DynamicIcon
                  name={feature.icon}
                  className="h-6 w-6 text-primary"
                />
              </div>
              <h3 className="font-heading text-xl font-semibold">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
