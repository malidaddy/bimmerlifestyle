"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { LogoWatermark } from "@/components/shared/logo-watermark";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

interface MobileNavProps {
  transparent?: boolean;
}

export function MobileNav({ transparent }: MobileNavProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className={cn(
            "md:hidden transition-colors duration-300",
            transparent && "text-white hover:bg-white/15 hover:text-white"
          )}
        >
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-[300px] sm:w-[400px] bg-zinc-950 border-l border-zinc-800 text-white p-0 [&>button]:z-20"
      >
        <div className="relative overflow-hidden h-full">
          {/* Car SVG watermark */}
          <LogoWatermark
            color="white"
            opacity={4}
            className="-right-10 bottom-10 w-[350px] rotate-[-8deg]"
          />

          {/* BMW tri-color accent line */}
          <div
            className="absolute left-0 top-0 h-full w-1.5"
            style={{
              background:
                "linear-gradient(180deg, #16588E 0%, #81C4FF 50%, #E7222E 100%)",
            }}
          />

          <div className="relative z-10 flex flex-col h-full pt-8 pb-10 px-6">
          {/* Logo */}
          <div className="mb-10">
            <Image
              src={siteConfig.logo.src}
              alt={siteConfig.logo.alt}
              width={siteConfig.logo.width}
              height={siteConfig.logo.height}
              className="h-8 w-auto brightness-0 invert"
            />
          </div>

          {/* Nav links */}
          <nav className="flex flex-col space-y-1 flex-1">
            {siteConfig.mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "font-heading text-lg font-bold uppercase tracking-widest px-4 py-3 rounded-lg transition-all",
                  pathname === item.href
                    ? "text-white bg-white/10 border-l-2 border-[#81C4FF]"
                    : "text-zinc-400 hover:text-white hover:bg-white/5"
                )}
              >
                {item.title}
              </Link>
            ))}
          </nav>

          {/* CTA button */}
          <div className="mt-6">
            <Button
              asChild
              size="lg"
              className="w-full btn-lg"
              style={{ backgroundColor: "#16588E" }}
            >
              <Link href="/contact" onClick={() => setOpen(false)}>
                Get in Touch
              </Link>
            </Button>
          </div>

          {/* Bottom info */}
          <div className="mt-6 pt-6 border-t border-zinc-800">
            <p className="text-xs text-zinc-500">
              {siteConfig.contact.phone}
            </p>
            <p className="text-xs text-zinc-500 mt-1">
              {siteConfig.contact.email}
            </p>
          </div>
        </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
