import { Hero } from "@/components/sections/hero";
import { FeaturesSection } from "@/components/sections/features-section";
import { LoyaltyTiersSection } from "@/components/sections/loyalty-tiers-section";
import { CtaSection } from "@/components/sections/cta-section";
import { LogoWatermark } from "@/components/shared/logo-watermark";
import { loyaltyTiers } from "@/content/loyalty/tiers";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rewards Program",
  description:
    "Join the Bimmer Lifestyle Rewards Program. Earn points on every service and unlock exclusive benefits from Bronze to VIP Diamond.",
  openGraph: {
    title: "Rewards Program",
    description:
      "Join the Bimmer Lifestyle Rewards Program. Earn points on every service and unlock exclusive benefits from Bronze to VIP Diamond.",
    url: "/rewards",
  },
  alternates: { canonical: "/rewards" },
};

const howItWorks = [
  {
    title: "Earn Points",
    description:
      "Every dollar you spend on services earns you loyalty points. The more you service, the faster you climb.",
    icon: "Coins",
  },
  {
    title: "Unlock Tiers",
    description:
      "As your points accumulate, you automatically advance through Bronze, Silver, Gold, and VIP Diamond tiers.",
    icon: "TrendingUp",
  },
  {
    title: "Redeem Rewards",
    description:
      "Use your points toward future services. Each point is worth $50 in service credit, plus tier-specific perks.",
    icon: "Gift",
  },
];

const rewardsStats = [
  { value: "$50", label: "Per Point Redeemed" },
  { value: "2\u00d7", label: "Max Earning Rate (VIP)" },
  { value: "3%", label: "Service Discount (Gold+)" },
  { value: "$0", label: "To Join \u2014 It's Free" },
];

export default function RewardsPage() {
  return (
    <>
      <Hero
        variant="centered"
        badge="Loyalty Rewards"
        headline="Bimmer Lifestyle Rewards"
        description="More than maintenance. A membership that rewards your loyalty with every visit. Start earning from day one."
        image={{
          src: "https://images.unsplash.com/photo-1583669133761-f381444b03b0?auto=format&fit=crop&w=1920&q=80",
          alt: "BMW luxury interior",
        }}
      />

      <FeaturesSection
        title="How It Works"
        description="Three simple steps to start earning."
        features={howItWorks}
      />

      {/* BMW Red accent stats band */}
      <section
        className="relative overflow-hidden py-20 md:py-28 text-white"
        style={{ background: "linear-gradient(135deg, #E7222E 0%, #b81a23 50%, #8a131a 100%)", backgroundColor: "#E7222E" }}
      >
        <LogoWatermark
          color="white"
          opacity={8}
          className="-right-16 -top-8 w-[500px] rotate-[-10deg] md:w-[650px]"
        />
        <div className="container relative z-10">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <h2 className="font-heading text-3xl font-extrabold uppercase tracking-tight md:text-5xl">
              Rewards at a Glance
            </h2>
            <p className="mt-5 text-lg text-white/85 md:text-xl leading-relaxed">
              Every visit earns. Every tier unlocks more.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center md:flex-row md:divide-x md:divide-white/25">
            {rewardsStats.map((stat, index) => (
              <div
                key={index}
                className="flex flex-col items-center px-10 py-6 md:py-0"
              >
                <span className="font-heading text-5xl font-extrabold uppercase md:text-6xl">
                  {stat.value}
                </span>
                <span className="mt-3 text-base font-medium text-white/80">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <LoyaltyTiersSection
        title="Reward Tiers"
        description="Four levels of membership, each unlocking greater benefits. Every customer starts at Bronze."
        tiers={loyaltyTiers}
      />

      <CtaSection
        headline="Ready to Join?"
        description="Your first service starts earning points automatically. No signup needed, just bring your BMW."
        cta={{ text: "WhatsApp Us", href: "https://wa.me/18764020107" }}
        secondaryCta={{ text: "View Services", href: "/services" }}
      />
    </>
  );
}
