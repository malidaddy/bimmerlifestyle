import type { LoyaltyTier } from "@/types/loyalty";

export const loyaltyTiers: LoyaltyTier[] = [
  {
    id: "bronze",
    name: "Bronze",
    tagline: "Where every journey begins",
    color:
      "bg-orange-100 text-orange-700 dark:bg-orange-950 dark:text-orange-400",
    icon: "Medal",
    earningRate: "1 pt / $1,000 spent",
    gradient: "tier-bronze",
    shadowColor: "shadow-[0_8px_30px_rgba(205,127,50,0.35)]",
    benefits: [
      "Earn loyalty points on every service",
      "$50 redeemable per point earned",
      "Priority scheduling",
      "Members-only newsletter updates",
    ],
  },
  {
    id: "silver",
    name: "Silver",
    tagline: "Elevated care for dedicated owners",
    color: "bg-sky-100 text-sky-600 dark:bg-sky-950 dark:text-sky-400",
    icon: "Award",
    earningRate: "1.25 pts / $1,000 spent",
    gradient: "tier-silver",
    shadowColor: "shadow-[0_8px_30px_rgba(129,196,255,0.35)]",
    benefits: [
      "All Bronze benefits",
      "Free diagnostic assessment",
      "Enhanced 1.25\u00d7 earning rate",
      "Seasonal inspection reminders",
    ],
  },
  {
    id: "gold",
    name: "Gold",
    tagline: "Premium treatment you deserve",
    color:
      "bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-400",
    icon: "Crown",
    earningRate: "1.5 pts / $1,000 spent",
    gradient: "tier-gold",
    shadowColor: "shadow-[0_8px_30px_rgba(230,168,23,0.35)]",
    benefits: [
      "All Silver benefits",
      "Free diagnostic assessment",
      "3% discount on all services",
      "Premium 1.5\u00d7 earning rate",
    ],
  },
  {
    id: "vip",
    name: "VIP Diamond",
    tagline: "The ultimate Bimmer experience",
    color: "bg-sky-100 text-sky-700 dark:bg-sky-950 dark:text-sky-400",
    icon: "Gem",
    earningRate: "2.0 pts / $1,000 spent",
    highlighted: true,
    gradient: "tier-vip",
    shadowColor: "shadow-[0_8px_30px_rgba(22,88,142,0.45)]",
    benefits: [
      "All Gold benefits",
      "3% discount on all services",
      "Vehicle recovery assistance",
      "VIP 2.0\u00d7 maximum earning rate",
      "VIP priority lane",
    ],
  },
];
