import Image from "next/image";
import { Hero } from "@/components/sections/hero";
import { StatsSection } from "@/components/sections/stats-section";
import { FeaturesSection } from "@/components/sections/features-section";
import { CtaSection } from "@/components/sections/cta-section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Bimmer Lifestyle Autocare — Montego Bay's trusted BMW & MINI specialist with over 20 years of dedicated experience.",
  openGraph: {
    title: "About",
    description:
      "Learn about Bimmer Lifestyle Autocare — Montego Bay's trusted BMW & MINI specialist with over 20 years of dedicated experience.",
    url: "/about",
  },
  alternates: { canonical: "/about" },
};

const stats = [
  {
    value: "20+",
    label: "Years Experience",
    description: "Maintaining, servicing and diagnosing BMW & Mini vehicles.",
  },
  {
    value: "#1",
    label: "Auto Electrical Parts",
    description:
      "Widest range of auto electrical parts for 12 & 24 volt vehicles island wide.",
  },
  {
    value: "100%",
    label: "Certified Technicians",
    description: "Every member of our service team is fully certified.",
  },
  {
    value: "5★",
    label: "Customer Service",
    description:
      "Top of the line service in our parts department & service centre.",
  },
];

const whyChooseUs = [
  {
    icon: "ShieldCheck",
    title: "Certified Technicians",
    description:
      "Our service team is comprised entirely of certified technicians and supervisors, with over 20 years of experience in maintaining, servicing and diagnosing BMW & Mini vehicles. We do specialized service for BMW & MINI — Performance tuning, Battery Registration, Module Coding, Module Cloning, Key Programming.",
  },
  {
    icon: "Cpu",
    title: "Technologically Advanced",
    description:
      "At Bimmer Lifestyle, we use original equipment manufacturer scan tools, so we are just as equipped as dealerships. We use some of the most sophisticated diagnostic tools available to complete any task.",
  },
  {
    icon: "Heart",
    title: "Great Customer Service",
    description:
      "Our goal in the auto industry is to provide top of the line customer service in our parts department & service centre. We build lasting relationships with every client.",
  },
  {
    icon: "MonitorSmartphone",
    title: "Live Repair Tracking",
    description:
      "Our advanced auto repair management system keeps you in the loop. Get real-time progress updates, photos and videos of your vehicle as our technicians work. Know instantly once your car is ready — you see what we see.",
  },
];

const shopImages = [
  {
    src: "https://scottsautoja.com/wp-content/uploads/2021/06/scotts-auto-team.jpg",
    alt: "Bimmer Lifestyle team",
  },
  {
    src: "https://scottsautoja.com/wp-content/uploads/2021/06/scotts-bimmerlifestyle.jpg",
    alt: "Bimmer Lifestyle shop front",
  },
  {
    src: "https://scottsautoja.com/wp-content/uploads/2021/06/scotts-auto-shop.jpg",
    alt: "Bimmer Lifestyle service bay",
  },
  {
    src: "https://scottsautoja.com/wp-content/uploads/2021/06/bimmerl-lifestyle.jpg",
    alt: "Bimmer Lifestyle automotive work",
  },
];

export default function AboutPage() {
  return (
    <>
      <Hero
        variant="centered"
        headline="About Bimmer Lifestyle"
        description="Montego Bay's trusted BMW & MINI specialist — built by enthusiasts, for enthusiasts."
        image={{
          src: "https://scottsautoja.com/wp-content/uploads/2021/06/scotts-bimmerlifestyle.jpg",
          alt: "Bimmer Lifestyle Autocare shop front",
        }}
      />

      {/* ── Story + Image Grid ── */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            {/* Text column */}
            <div className="space-y-6">
              <h2 className="font-heading text-3xl font-extrabold uppercase tracking-tight md:text-4xl heading-accent text-left after:mx-0">
                Our Story
              </h2>
              <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Since 2000, Bimmer Lifestyle Autocare has been the name
                  Jamaica&apos;s BMW and MINI owners trust. What started at 9
                  Church Hill Ave in Montego Bay has grown into the
                  island&apos;s premier destination for BMW specialist service —
                  staffed entirely by certified technicians and supervisors who
                  live and breathe the Ultimate Driving Machine.
                </p>
                <p>
                  Our goal in the auto industry is to provide top-of-the-line
                  customer service in both our parts department and service
                  centre. We stock the widest range of auto electrical parts for
                  12 &amp; 24 volt vehicles island-wide, and our service team
                  specialises in performance tuning, battery registration, module
                  coding, module cloning, and key programming.
                </p>
                <p>
                  But we&apos;re more than a repair shop. Our loyalty rewards
                  program was created to build a community of enthusiasts who are
                  recognised and rewarded for their trust in us. From Bronze to
                  VIP Diamond, every visit brings you closer to exclusive perks
                  and savings.
                </p>
              </div>
            </div>

            {/* Image grid column */}
            <div className="grid grid-cols-2 gap-4">
              {shopImages.map((img, i) => (
                <div
                  key={i}
                  className="relative aspect-[4/3] overflow-hidden rounded-xl border-2 border-[#16588E]/10 shadow-[3px_3px_0_0_rgba(22,88,142,0.06)]"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <StatsSection stats={stats} />

      <FeaturesSection
        title="Why Choose Us"
        description="What sets Bimmer Lifestyle apart from the rest."
        features={whyChooseUs}
      />

      <CtaSection
        headline="Experience the Bimmer Lifestyle"
        description="Get in touch and see why BMW owners across Jamaica trust us with their vehicles."
        cta={{ text: "WhatsApp Us", href: "https://wa.me/18768591704" }}
        secondaryCta={{ text: "View Rewards", href: "/rewards" }}
      />
    </>
  );
}
