import { HeroDefault } from "./hero-default";
import { HeroCentered } from "./hero-centered";
import { HeroSplit } from "./hero-split";
import { HeroVideo } from "./hero-video";
import type { HeroProps } from "@/types/hero";

const variants = {
  default: HeroDefault,
  centered: HeroCentered,
  split: HeroSplit,
  video: HeroVideo,
};

export function Hero({ variant = "default", ...props }: HeroProps) {
  const Component = variants[variant];
  return <Component {...props} />;
}
