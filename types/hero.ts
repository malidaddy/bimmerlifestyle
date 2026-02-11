export type HeroVariant = "default" | "centered" | "split" | "video";

export interface HeroProps {
  variant?: HeroVariant;
  headline: string;
  subheadline?: string;
  description?: string;
  primaryCta?: { text: string; href: string };
  secondaryCta?: { text: string; href: string };
  image?: { src: string; alt: string };
  videoSrc?: string;
  badge?: string;
  badgeHref?: string;
  className?: string;
}
