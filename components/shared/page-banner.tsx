import Image from "next/image";
import { cn } from "@/lib/utils";

interface PageBannerProps {
  title: string;
  description?: string;
  image: string;
  className?: string;
}

export function PageBanner({
  title,
  description,
  image,
  className,
}: PageBannerProps) {
  return (
    <section
      data-hero-bleed
      className={cn(
        "relative -mt-16 flex items-end overflow-hidden",
        className
      )}
      style={{ minHeight: "320px" }}
    >
      {/* Background image with blur */}
      <Image
        src={image}
        alt=""
        fill
        className="object-cover blur-[2px] scale-105"
        sizes="100vw"
        priority
      />

      {/* Gradient overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/65 via-black/40 to-black/20" />

      {/* Content — aligned to bottom */}
      <div className="container relative z-10 pb-10 pt-24 text-center">
        <h1 className="font-heading text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mx-auto mt-4 max-w-2xl text-base text-white/80 md:text-lg">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
