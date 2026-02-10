import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

interface LogoProps {
  transparent?: boolean;
}

export function Logo({ transparent }: LogoProps) {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <Image
        src={siteConfig.logo.src}
        alt={siteConfig.logo.alt}
        width={siteConfig.logo.width}
        height={siteConfig.logo.height}
        className={cn(
          "h-8 w-auto transition-all duration-300",
          transparent && "brightness-0 invert"
        )}
        priority
      />
    </Link>
  );
}
