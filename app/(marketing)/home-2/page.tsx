import { Hero } from "@/components/sections/hero";
import { FeaturesSection } from "@/components/sections/features-section";
import { ServicesSection } from "@/components/sections/services-section";
import { StatsSection } from "@/components/sections/stats-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { CtaSection } from "@/components/sections/cta-section";
import { getServices } from "@/lib/content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};

const features = [
  {
    title: "Performance First",
    description:
      "Built on Next.js for blazing fast page loads and optimal Core Web Vitals scores.",
    icon: "Zap",
  },
  {
    title: "Fully Responsive",
    description:
      "Looks great on every device and screen size, from mobile to desktop.",
    icon: "Monitor",
  },
  {
    title: "Easy to Customize",
    description:
      "Change colors, content, and layout with simple configuration files.",
    icon: "Palette",
  },
];

const stats = [
  { value: "99%", label: "Uptime" },
  { value: "50+", label: "Projects Delivered" },
  { value: "24/7", label: "Support Available" },
  { value: "100%", label: "Client Satisfaction" },
];

const testimonials = [
  {
    id: "1",
    name: "Alex Johnson",
    role: "CEO",
    company: "TechCorp",
    quote:
      "Working with this team transformed our online presence. The attention to detail and professionalism exceeded our expectations.",
  },
  {
    id: "2",
    name: "Maria Santos",
    role: "Founder",
    company: "GreenStart",
    quote:
      "They delivered a beautiful, fast website that perfectly represents our brand. The whole process was smooth and efficient.",
  },
  {
    id: "3",
    name: "David Kim",
    role: "Marketing Director",
    company: "Innovate Inc",
    quote:
      "Our conversion rates improved significantly after the redesign. The team truly understands modern web best practices.",
  },
];

export default function Home2Page() {
  const services = getServices();

  return (
    <>
      <Hero
        variant="video"
        badge="Welcome to MaliaWeb"
        headline="Build Something Meaningful"
        description="A professional web framework for organizations that value clarity, performance, and design. Your online presence, reimagined."
        primaryCta={{ text: "Get Started", href: "/contact" }}
        secondaryCta={{ text: "Learn More", href: "/about" }}
        image={{
          src: "https://res.cloudinary.com/dam4tupj7/image/upload/v1770487701/Malia_Web/gallery/interior/dining-room.jpg",
          alt: "Hero background",
        }}
      />
      <FeaturesSection
        title="Why Choose Us"
        description="We build websites that are fast, accessible, and designed to grow with your business."
        features={features}
      />
      <ServicesSection
        title="Our Services"
        description="Comprehensive solutions tailored to your organization's needs."
        services={services}
      />
      <StatsSection stats={stats} />
      <TestimonialsSection
        title="What Our Clients Say"
        description="Don't just take our word for it."
        testimonials={testimonials}
      />
      <CtaSection
        headline="Ready to Get Started?"
        description="Contact us today to discuss your project and see how we can help."
        cta={{ text: "Contact Us", href: "/contact" }}
      />
    </>
  );
}
