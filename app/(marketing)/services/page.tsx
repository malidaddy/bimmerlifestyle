import { Hero } from "@/components/sections/hero";
import { ServicesSection } from "@/components/sections/services-section";
import { CtaSection } from "@/components/sections/cta-section";
import { DynamicIcon } from "@/components/shared/dynamic-icon";
import { getServices } from "@/lib/content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Full-service BMW repair, maintenance, and performance tuning. From diagnostics to engine rebuilds.",
};

export default function ServicesPage() {
  const services = getServices();

  return (
    <>
      <Hero
        variant="centered"
        headline="Our Services"
        description="Expert BMW care from routine maintenance to full performance builds. Every service earns loyalty rewards."
        image={{
          src: "https://images.unsplash.com/photo-1707406766915-94bf6f275108?auto=format&fit=crop&w=1920&q=80",
          alt: "BMW engine bay in garage",
        }}
      />
      {/* ── Live Repair Tracking highlight ── */}
      <section className="bg-[#16588E]/[0.04] py-20 md:py-28">
        <div className="container">
          <div className="mx-auto max-w-4xl rounded-2xl border-2 border-[#16588E]/15 bg-white p-8 shadow-[4px_4px_0_0_rgba(22,88,142,0.08)] dark:bg-[hsl(215,28%,8%)] md:p-12">
            <div className="flex flex-col items-center text-center gap-6">
              <div className="rounded-xl bg-[#16588E]/10 p-4">
                <DynamicIcon
                  name="MonitorSmartphone"
                  className="h-10 w-10 text-[#16588E]"
                />
              </div>
              <h2 className="font-heading text-3xl font-extrabold uppercase tracking-tight md:text-4xl heading-accent">
                Live Repair Tracking
              </h2>
              <p className="max-w-2xl text-lg text-muted-foreground leading-relaxed md:text-xl">
                Our advanced auto repair management system keeps you fully
                informed every step of the way. Receive real-time progress
                updates with photos and videos of your vehicle as our
                technicians work — you see what we see.
              </p>
              <div className="mt-2 grid gap-6 sm:grid-cols-3 w-full max-w-2xl">
                <div className="flex flex-col items-center gap-2 rounded-xl bg-[#16588E]/[0.06] p-5">
                  <DynamicIcon
                    name="Camera"
                    className="h-7 w-7 text-[#16588E]"
                  />
                  <span className="text-sm font-semibold uppercase tracking-wide">
                    Photos &amp; Videos
                  </span>
                  <span className="text-xs text-muted-foreground">
                    See your vehicle in real time
                  </span>
                </div>
                <div className="flex flex-col items-center gap-2 rounded-xl bg-[#16588E]/[0.06] p-5">
                  <DynamicIcon
                    name="Bell"
                    className="h-7 w-7 text-[#16588E]"
                  />
                  <span className="text-sm font-semibold uppercase tracking-wide">
                    Instant Alerts
                  </span>
                  <span className="text-xs text-muted-foreground">
                    Know the moment your car is ready
                  </span>
                </div>
                <div className="flex flex-col items-center gap-2 rounded-xl bg-[#16588E]/[0.06] p-5">
                  <DynamicIcon
                    name="ClipboardCheck"
                    className="h-7 w-7 text-[#16588E]"
                  />
                  <span className="text-sm font-semibold uppercase tracking-wide">
                    Progress Updates
                  </span>
                  <span className="text-xs text-muted-foreground">
                    Every step tracked and shared
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServicesSection services={services} />
      <CtaSection
        headline="Need a Specialist Opinion?"
        description="Contact us for a diagnostic assessment and let us take care of your BMW."
        cta={{ text: "WhatsApp Us", href: "https://wa.me/18764020107" }}
        secondaryCta={{ text: "View Rewards", href: "/rewards" }}
      />
    </>
  );
}
