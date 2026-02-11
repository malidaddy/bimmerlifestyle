import { Hero } from "@/components/sections/hero";
import { FeaturesSection } from "@/components/sections/features-section";
import { ServicesSection } from "@/components/sections/services-section";
import { LoyaltyTiersSection } from "@/components/sections/loyalty-tiers-section";
import { GoogleReviewsSection } from "@/components/sections/google-reviews-section";
import { RewardsPromoSection } from "@/components/sections/rewards-promo-section";
import { CtaSection } from "@/components/sections/cta-section";
import { getServices } from "@/lib/content";
import { getGoogleReviews } from "@/lib/google-reviews";
import { loyaltyTiers } from "@/content/loyalty/tiers";

const features = [
  {
    title: "BMW & MINI Specialist",
    description:
      "Over 20 years of dedicated BMW and MINI experience. Factory-trained technicians with island-wide reputation for excellence.",
    icon: "Wrench",
  },
  {
    title: "Performance & Tuning",
    description:
      "ECU remapping, suspension upgrades, and full performance builds. We unlock your BMW's true potential with precision engineering.",
    icon: "Gauge",
  },
  {
    title: "Loyalty Rewards Club",
    description:
      "Earn points on every service. Climb from Bronze to VIP Diamond and unlock free diagnostics, discounts, and vehicle recovery.",
    icon: "Trophy",
  },
];

// Static fallback testimonials — used when Google API key is not configured
const fallbackTestimonials = [
  {
    id: "1",
    name: "Marcus Thompson",
    role: "BMW F30 Owner",
    company: "Montego Bay",
    quote:
      "The team at Bimmer Lifestyle truly understands BMWs. They diagnosed an issue three other shops missed. I won't take my 3 Series anywhere else.",
  },
  {
    id: "2",
    name: "Khadija Williams",
    role: "BMW X5 Owner",
    company: "St. James",
    quote:
      "Their loyalty program is amazing. After a few visits I'd already earned enough points for a free service. The Gold tier discount saves me real money.",
  },
  {
    id: "3",
    name: "Devon Clarke",
    role: "BMW E46 Owner",
    company: "Kingston",
    quote:
      "They treat your car like it's their own. The attention to detail on my E46 restoration was incredible. These guys are true BMW enthusiasts.",
  },
];

export default async function HomePage() {
  const services = getServices();
  const { reviews, rating, totalReviews } = await getGoogleReviews();

  return (
    <>
      <Hero
        variant="video"
        badge="📍 9 Church Hill Ave, Montego Bay 🇯🇲"
        badgeHref="https://www.google.com/maps/search/?api=1&query=9+Church+Hill+Ave+Montego+Bay+St+James+Jamaica"
        headline="Elite BMW Care. Exclusive Rewards."
        description="Expert mechanical repair, performance tuning, and a loyalty program that rewards you every visit."
        primaryCta={{ text: "Our Services", href: "/services" }}
        secondaryCta={{ text: "Earn Rewards", href: "/rewards" }}
        image={{
          src: "https://scottsautoja.com/wp-content/uploads/2021/06/bimmerlife_1.jpg",
          alt: "BMW Lifestyle Autocare",
        }}
      />
      <FeaturesSection
        title="Why Bimmer Lifestyle"
        description="More than a shop. A community of BMW enthusiasts dedicated to excellence since 2000."
        features={features}
      />
      <ServicesSection
        title="What We Do"
        description="Everything your BMW or MINI needs, under one roof."
        services={services}
        compact
      />
      <RewardsPromoSection />
      <LoyaltyTiersSection
        title="Bimmer Lifestyle Rewards"
        description="Earn points on every service. Unlock exclusive perks as you move through the tiers. Every customer starts at Bronze."
        tiers={loyaltyTiers}
      />
      <GoogleReviewsSection
        title="What Our Customers Say"
        description="Real reviews from our customers on Google."
        reviews={reviews}
        overallRating={rating}
        totalReviews={totalReviews}
        fallbackTestimonials={fallbackTestimonials}
      />
      <CtaSection
        headline="Ready to Experience the Difference?"
        description="Contact us today and start earning loyalty rewards from your first visit."
        cta={{ text: "WhatsApp Us", href: "https://wa.me/18764020107" }}
        secondaryCta={{ text: "Contact Us", href: "/contact" }}
      />
    </>
  );
}
