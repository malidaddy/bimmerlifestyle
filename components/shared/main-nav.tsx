"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

interface MainNavProps {
  transparent?: boolean;
}

export function MainNav({ transparent }: MainNavProps) {
  const pathname = usePathname();

  return (
    <nav className="hidden md:flex md:items-center md:space-x-6 md:ml-6">
      {siteConfig.mainNav.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            "text-base font-semibold transition-colors duration-300",
            transparent
              ? pathname === item.href
                ? "text-white"
                : "text-white/75 hover:text-white"
              : pathname === item.href
              ? "text-foreground"
              : "text-muted-foreground hover:text-primary"
          )}
        >
          {item.title}
        </Link>
      ))}
    </nav>
  );
}
