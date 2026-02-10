import { Hero } from "@/components/sections/hero";
import { ServicesSection } from "@/components/sections/services-section";
import { CtaSection } from "@/components/sections/cta-section";
import { getServices } from "@/lib/content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore our comprehensive range of services designed to help your organization thrive.",
};

export default function ServicesPage() {
  const services = getServices();

  return (
    <>
      <Hero
        variant="centered"
        headline="Our Services"
        description="Comprehensive solutions tailored to help your organization achieve its goals."
      />
      <ServicesSection services={services} />
      <CtaSection
        headline="Need a Custom Solution?"
        description="Let's discuss how we can tailor our services to your specific needs."
        cta={{ text: "Contact Us", href: "/contact" }}
      />
    </>
  );
}
