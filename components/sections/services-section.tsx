import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DynamicIcon } from "@/components/shared/dynamic-icon";
import { SectionWrapper } from "./section-wrapper";
import { ServicesBackground } from "./services-background";
import type { Service } from "@/types/services";

interface ServicesSectionProps {
  title?: string;
  description?: string;
  services: Service[];
  compact?: boolean;
}

export function ServicesSection({
  title = "Our Services",
  description,
  services,
  compact = false,
}: ServicesSectionProps) {
  if (compact) {
    return (
      <SectionWrapper title={title} description={description} className="relative overflow-hidden bg-[#16588E]/[0.03]">
        <ServicesBackground />
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.id}
              className="flex flex-col items-center text-center p-5 rounded-xl border-2 border-[#16588E]/10 bg-background hover:border-[#16588E]/20 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="mb-3 rounded-xl bg-[#16588E]/10 p-3">
                <DynamicIcon
                  name={service.icon}
                  className="h-6 w-6 text-[#16588E]"
                />
              </div>
              <span className="font-heading text-sm uppercase font-bold">
                {service.title}
              </span>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button asChild size="lg" style={{ backgroundColor: "#16588E" }} className="hover:opacity-90 text-white">
            <Link href="/services">View All Services</Link>
          </Button>
        </div>
      </SectionWrapper>
    );
  }

  return (
    <SectionWrapper title={title} description={description} className="relative overflow-hidden bg-[#16588E]/[0.03]">
      <ServicesBackground />
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => (
          <Card key={service.id} className="h-full border-2 border-[#16588E]/10 shadow-[3px_3px_0_0_rgba(22,88,142,0.06)] hover:shadow-[5px_5px_0_0_rgba(22,88,142,0.1)] hover:border-[#16588E]/20 hover:-translate-y-1 transition-all duration-300">
            <CardHeader className="pb-4">
              <div className="mb-3 rounded-xl bg-[#16588E]/10 p-4 w-fit">
                <DynamicIcon
                  name={service.icon}
                  className="h-7 w-7 text-[#16588E]"
                />
              </div>
              <CardTitle className="font-heading text-xl uppercase">
                {service.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-5 leading-relaxed">
                {service.description}
              </p>
              {service.features.length > 0 && (
                <ul className="space-y-2.5">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center text-sm text-muted-foreground"
                    >
                      <span className="mr-2.5 h-2 w-2 rounded-full bg-[#16588E] shrink-0" />
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
