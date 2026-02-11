"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Logo } from "./logo";
import { MainNav } from "./main-nav";
import { MobileNav } from "./mobile-nav";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [hasHeroBleed, setHasHeroBleed] = useState(false);
  const pathname = usePathname();

  // Detect if page has a full-bleed dark hero
  useEffect(() => {
    setHasHeroBleed(!!document.querySelector("[data-hero-bleed]"));
  }, [pathname]);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Only go transparent when there's a dark hero AND we haven't scrolled
  const transparent = hasHeroBleed && !scrolled;

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        scrolled || !hasHeroBleed
          ? "border-b bg-background/98 backdrop-blur supports-[backdrop-filter]:bg-background/85"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="container flex h-16 items-center">
        <Logo transparent={transparent} />
        <MainNav transparent={transparent} />
        <div className="flex flex-1 items-center justify-end space-x-2">
          <ThemeToggle transparent={transparent} />
          <Button
            asChild
            size="sm"
            className={cn(
              "hidden md:inline-flex transition-colors duration-300",
              transparent &&
                "bg-white/15 text-white border-white/30 backdrop-blur-sm hover:bg-white/25"
            )}
          >
            <Link href="/contact">Get in Touch</Link>
          </Button>
          <MobileNav transparent={transparent} />
        </div>
      </div>
    </header>
  );
}
