import { Hero } from "@/components/sections/hero";
import { TeamSection } from "@/components/sections/team-section";
import { BoardSection } from "@/components/sections/board-section";
import { getStaffMembers, getBoardMembers } from "@/lib/content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet the BMW enthusiasts and certified technicians behind Bimmer Lifestyle Autocare.",
};

export default function TeamPage() {
  const staff = getStaffMembers();
  const board = getBoardMembers();

  return (
    <>
      <Hero
        variant="centered"
        headline="Our Team"
        description="The BMW enthusiasts and certified technicians behind Bimmer Lifestyle Autocare."
        image={{
          src: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=1920&q=80",
          alt: "BMW mechanics working in garage",
        }}
      />
      <TeamSection
        title="Meet the Team"
        description="Factory-trained specialists who eat, sleep, and breathe BMW."
        members={staff}
      />
      {board.length > 0 && (
        <BoardSection
          title="Board of Directors"
          description="Providing strategic guidance and governance."
          members={board}
        />
      )}
    </>
  );
}
