import { Hero } from "@/components/sections/hero";
import { TeamSection } from "@/components/sections/team-section";
import { BoardSection } from "@/components/sections/board-section";
import { getStaffMembers, getBoardMembers } from "@/lib/content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet the talented professionals and board members who drive our organization forward.",
};

export default function TeamPage() {
  const staff = getStaffMembers();
  const board = getBoardMembers();

  return (
    <>
      <Hero
        variant="centered"
        headline="Our Team"
        description="Meet the people who make it all happen."
      />
      <TeamSection
        title="Leadership"
        description="Our experienced leadership team drives innovation and results."
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
