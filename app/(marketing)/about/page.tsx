import { Hero } from "@/components/sections/hero";
import { StatsSection } from "@/components/sections/stats-section";
import { TeamSection } from "@/components/sections/team-section";
import { CtaSection } from "@/components/sections/cta-section";
import { getStaffMembers } from "@/lib/content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about our mission, values, and the team behind our success.",
};

const stats = [
  { value: "10+", label: "Years of Experience" },
  { value: "200+", label: "Happy Clients" },
  { value: "50+", label: "Team Members" },
  { value: "15", label: "Countries Served" },
];

export default function AboutPage() {
  const staff = getStaffMembers();

  return (
    <>
      <Hero
        variant="centered"
        headline="About Us"
        description="We're a team of passionate professionals dedicated to building exceptional digital experiences for organizations of all sizes."
      />
      <section className="container pb-16">
        <div className="mx-auto max-w-3xl space-y-6 text-lg text-muted-foreground">
          <p>
            Founded with the belief that every organization deserves a
            world-class online presence, we combine strategic thinking with
            technical excellence to deliver results that matter.
          </p>
          <p>
            Our approach is simple: listen carefully, plan thoughtfully, and
            execute with precision. We work closely with each client to
            understand their unique needs and create tailored solutions that
            drive real business outcomes.
          </p>
        </div>
      </section>
      <StatsSection stats={stats} />
      <TeamSection
        title="Meet Our Team"
        description="The talented people behind our success."
        members={staff}
      />
      <CtaSection
        headline="Want to Work With Us?"
        description="We'd love to hear about your project."
        cta={{ text: "Get in Touch", href: "/contact" }}
      />
    </>
  );
}
