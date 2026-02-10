export interface LoyaltyTier {
  id: string;
  name: string;
  tagline: string;
  color: string;
  icon: string;
  earningRate: string;
  benefits: string[];
  highlighted?: boolean;
  gradient?: string;
  shadowColor?: string;
}
