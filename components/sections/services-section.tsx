import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DynamicIcon } from "@/components/shared/dynamic-icon";
import { SectionWrapper } from "./section-wrapper";
import type { Service } from "@/types/services";

interface ServicesSectionProps {
  title?: string;
  description?: string;
  services: Service[];
}

export function ServicesSection({
  title = "Our Services",
  description,
  services,
}: ServicesSectionProps) {
  return (
    <SectionWrapper title={title} description={description} className="bg-muted/50">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <Card key={service.id} className="h-full">
            <CardHeader>
              <div className="mb-2 rounded-lg bg-primary/10 p-3 w-fit">
                <DynamicIcon
                  name={service.icon}
                  className="h-6 w-6 text-primary"
                />
              </div>
              <CardTitle className="font-heading">{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">{service.description}</p>
              {service.features.length > 0 && (
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center text-sm text-muted-foreground"
                    >
                      <span className="mr-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
