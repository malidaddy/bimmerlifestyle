"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Lightbox } from "@/components/shared/lightbox";
import type { GalleryImage } from "@/types/content";

interface GallerySectionProps {
  title?: string;
  description?: string;
  images: GalleryImage[];
  columns?: 2 | 3 | 4;
  className?: string;
}

export function GallerySection({
  title = "Gallery",
  description,
  images,
  columns = 3,
  className,
}: GallerySectionProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  // Extract unique categories
  const categories = useMemo(() => {
    const cats = images
      .map((img) => img.category)
      .filter((c): c is string => !!c);
    return Array.from(new Set(cats));
  }, [images]);

  // Filter images by active category
  const filteredImages = useMemo(() => {
    if (!activeCategory) return images;
    return images.filter((img) => img.category === activeCategory);
  }, [images, activeCategory]);

  function openLightbox(index: number) {
    setLightboxIndex(index);
    setLightboxOpen(true);
  }

  const gridCols = {
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4",
  };

  return (
    <section className={cn("py-16 md:py-24", className)}>
      <div className="container">
        {/* Header */}
        {(title || description) && (
          <div className="mx-auto mb-12 max-w-2xl text-center">
            {title && (
              <h2 className="font-heading text-3xl font-bold tracking-tight md:text-4xl">
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-4 text-lg text-muted-foreground">
                {description}
              </p>
            )}
          </div>
        )}

        {/* Category filter tabs */}
        {categories.length > 1 && (
          <div className="mb-8 flex flex-wrap items-center justify-center gap-2">
            <button
              onClick={() => setActiveCategory(null)}
              className={cn(
                "rounded-full px-4 py-1.5 text-sm font-medium transition-colors",
                activeCategory === null
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              )}
            >
              All
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "rounded-full px-4 py-1.5 text-sm font-medium transition-colors",
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                )}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        )}

        {/* Image grid */}
        <div className={cn("grid gap-3 md:gap-4", gridCols[columns])}>
          {filteredImages.map((image, index) => (
            <button
              key={`${image.src}-${index}`}
              onClick={() => openLightbox(index)}
              className="group relative aspect-square overflow-hidden rounded-lg bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes={
                  columns === 4
                    ? "(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    : columns === 3
                    ? "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    : "(max-width: 640px) 100vw, 50vw"
                }
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {image.caption && (
                  <p className="w-full p-4 text-left text-sm font-medium text-white">
                    {image.caption}
                  </p>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <Lightbox
        images={filteredImages}
        initialIndex={lightboxIndex}
        open={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </section>
  );
}
