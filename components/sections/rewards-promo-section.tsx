import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Trophy, TrendingUp, Gift, Star } from "lucide-react";

const perks = [
  {
    icon: Trophy,
    title: "Earn on Every Visit",
    description: "Collect points every time you service your BMW with us.",
  },
  {
    icon: TrendingUp,
    title: "Climb the Tiers",
    description: "Move from Bronze to VIP Diamond and unlock bigger rewards.",
  },
  {
    icon: Gift,
    title: "Redeem for Savings",
    description: "$50 redeemable per point — plus tier discounts up to 3%.",
  },
  {
    icon: Star,
    title: "VIP Exclusives",
    description: "Priority lane, vehicle recovery, and maximum earning rates.",
  },
];

export function RewardsPromoSection() {
  return (
    <section className="py-20 md:py-28 overflow-hidden">
      <div className="container">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image side */}
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border-2 border-[#16588E]/10 shadow-[6px_6px_0_0_rgba(22,88,142,0.08)]">
              <Image
                src="/images/rewards-customer.jpg"
                alt="Happy BMW owner enjoying the rewards experience"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Floating badge */}
            <div
              className="absolute -bottom-5 -right-3 rounded-xl px-5 py-3 text-white shadow-lg md:-right-6"
              style={{
                background: "linear-gradient(135deg, #E7222E 0%, #b81a23 100%)",
                boxShadow: "4px 4px 0 0 rgba(231,34,46,0.2), 0 8px 24px rgba(231,34,46,0.3)",
              }}
            >
              <p className="text-xs font-bold uppercase tracking-widest opacity-80">Free to Join</p>
              <p className="text-lg font-extrabold">$0 Signup</p>
            </div>
          </div>

          {/* Content side */}
          <div>
            <h2 className="font-heading text-3xl font-extrabold uppercase tracking-tight md:text-4xl heading-accent after:mx-0 text-left">
              Get Rewarded for Being a BMW Owner
            </h2>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Our loyalty rewards program is designed to give back to the
              customers who trust us with their vehicles. No signup fees, no
              hoops — just bring your BMW and start earning.
            </p>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {perks.map((perk) => (
                <div key={perk.title} className="flex gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#16588E]/10">
                    <perk.icon className="h-5 w-5 text-[#16588E]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold">{perk.title}</h3>
                    <p className="mt-0.5 text-xs text-muted-foreground leading-relaxed">
                      {perk.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="bg-[#E7222E] text-white shadow-lg shadow-[#E7222E]/20 hover:bg-[#c91c26] hover:shadow-[#E7222E]/30 transition-all"
              >
                <Link href="/rewards">View All Tiers</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                style={{ color: "#16588E", borderColor: "rgba(22,88,142,0.2)" }}
                className="border-2 hover:bg-[#16588E]/5 hover:text-[#16588E]"
              >
                <Link href="https://wa.me/18768591704">Start Earning</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
