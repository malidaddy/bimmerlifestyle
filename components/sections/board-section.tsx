import Image from "next/image";
import { SectionWrapper } from "./section-wrapper";
import type { TeamMember } from "@/types/team";

interface BoardSectionProps {
  title?: string;
  description?: string;
  members: TeamMember[];
}

export function BoardSection({
  title = "Board of Directors",
  description,
  members,
}: BoardSectionProps) {
  return (
    <SectionWrapper title={title} description={description} className="bg-muted/50">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {members.map((member) => (
          <div key={member.id} className="flex items-start space-x-4">
            <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="font-heading text-sm font-semibold">
                {member.name}
              </h3>
              <p className="text-xs text-primary font-medium">{member.role}</p>
              <p className="mt-1 text-xs text-muted-foreground line-clamp-2">
                {member.bio}
              </p>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
