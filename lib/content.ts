import teamData from "@/content/team/team.json";
import servicesData from "@/content/services/services.json";
import type { TeamMember } from "@/types/team";
import type { Service } from "@/types/services";

export function getTeamMembers(): TeamMember[] {
  return (teamData as TeamMember[]).sort((a, b) => a.order - b.order);
}

export function getStaffMembers(): TeamMember[] {
  return getTeamMembers().filter((m) => m.type === "team");
}

export function getBoardMembers(): TeamMember[] {
  return getTeamMembers().filter((m) => m.type === "board");
}

export function getServices(): Service[] {
  return (servicesData as Service[]).sort((a, b) => a.order - b.order);
}

export function getServiceById(id: string): Service | undefined {
  return getServices().find((s) => s.id === id);
}
