import { DynamicIcon } from "@/components/shared/dynamic-icon";
import { SectionWrapper } from "./section-wrapper";
import { Medal } from "lucide-react";
import { cn } from "@/lib/utils";
import type { LoyaltyTier } from "@/types/loyalty";

const tierStyles: Record<string, { background: string; shadow: string; textClass: string }> = {
  silver: {
    background: "linear-gradient(145deg, #E7222E 0%, #b81a23 60%, #991620 100%)",
    shadow: "6px 6px 0 0 rgba(184,26,35,0.45), 0 8px 30px rgba(231,34,46,0.25)",
    textClass: "text-white",
  },
  gold: {
    background: "linear-gradient(145deg, #d4a017 0%, #b8860b 50%, #9a7209 100%)",
    shadow: "6px 6px 0 0 rgba(154,114,9,0.5), 0 8px 30px rgba(212,160,23,0.3)",
    textClass: "text-white",
  },
  vip: {
    background: "linear-gradient(145deg, rgba(129,196,255,0.15) 0%, rgba(22,88,142,0.12) 50%, rgba(129,196,255,0.08) 100%)",
    shadow: "6px 6px 0 0 rgba(129,196,255,0.2), 0 8px 40px rgba(129,196,255,0.15), inset 0 1px 0 rgba(255,255,255,0.4), inset 0 -1px 0 rgba(129,196,255,0.2)",
    textClass: "text-foreground",
  },
};

interface LoyaltyTiersSectionProps {
  title?: string;
  description?: string;
  tiers: LoyaltyTier[];
}

export function LoyaltyTiersSection({
  title = "Rewards Program",
  description,
  tiers,
}: LoyaltyTiersSectionProps) {
  const displayTiers = tiers.filter((t) => t.id !== "bronze");
  const bronze = tiers.find((t) => t.id === "bronze");

  return (
    <SectionWrapper title={title} description={description} id="rewards">
      {/* Bronze baseline statement */}
      {bronze && (
        <div className="mx-auto mb-12 flex max-w-xl items-center justify-center gap-3 rounded-xl border-2 border-[#cd7f32]/20 bg-[#cd7f32]/5 px-6 py-4 text-center">
          <Medal className="h-6 w-6 shrink-0 text-[#cd7f32]" />
          <p className="text-base">
            <span className="font-bold text-[#cd7f32]">Every customer starts at Bronze</span>
            <span className="text-muted-foreground"> — earning {bronze.earningRate} with ${"\u200B"}50 redeemable per point.</span>
          </p>
        </div>
      )}

      <div className="grid gap-8 md:grid-cols-3">
        {displayTiers.map((tier) => {
          const style = tierStyles[tier.id] || tierStyles.silver;
          const isVip = tier.id === "vip";
          const isLight = isVip;

          return (
            <div
              key={tier.id}
              className={cn(
                "relative flex h-full flex-col rounded-xl p-7 transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02]",
                style.textClass,
                isVip && "border-2 border-[#81C4FF]/30 backdrop-blur-sm",
                tier.highlighted && "md:scale-105"
              )}
              style={{
                background: style.background,
                boxShadow: style.shadow,
              }}
            >
              {tier.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span
                    className="rounded-full px-4 py-1 text-xs font-bold uppercase tracking-widest"
                    style={{
                      backgroundColor: isVip ? "#16588E" : "#ffffff",
                      color: isVip ? "#ffffff" : "#16588E",
                    }}
                  >
                    Most Exclusive
                  </span>
                </div>
              )}

              <div className="mb-5 text-center">
                <div
                  className={cn(
                    "mx-auto mb-4 inline-flex rounded-full p-4",
                    isLight ? "bg-[#16588E]/10" : "bg-white/20"
                  )}
                >
                  <DynamicIcon
                    name={tier.icon}
                    className={cn("h-8 w-8", isLight ? "text-[#16588E]" : "text-white")}
                  />
                </div>
                <h3 className="font-heading text-2xl font-extrabold uppercase">
                  {tier.name}
                </h3>
                <p className={cn("mt-1 text-sm", isLight ? "text-muted-foreground" : "text-white/75")}>
                  {tier.tagline}
                </p>
              </div>

              <div
                className={cn(
                  "mb-5 rounded-xl p-4 text-center backdrop-blur-sm",
                  isLight ? "bg-[#16588E]/8 border border-[#81C4FF]/20" : "bg-white/15"
                )}
              >
                <p
                  className={cn(
                    "text-xs font-bold uppercase tracking-widest",
                    isLight ? "text-muted-foreground" : "text-white/70"
                  )}
                >
                  Earning Rate
                </p>
                <p className={cn("mt-2 text-xl font-extrabold", isLight ? "text-[#16588E]" : "text-white")}>
                  {tier.earningRate}
                </p>
              </div>

              <ul className="flex-1 space-y-3">
                {tier.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start text-sm">
                    <span
                      className={cn(
                        "mr-2.5 mt-1 h-2 w-2 shrink-0 rounded-full",
                        isLight ? "bg-[#16588E]/40" : "bg-white/60"
                      )}
                    />
                    <span className={cn("leading-snug", isLight ? "text-foreground/80" : "text-white/90")}>
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
