import { PageBanner } from "@/components/shared/page-banner";
import { GallerySection } from "@/components/sections/gallery-section";
import { getGalleryImages } from "@/lib/gallery";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Browse our photo gallery.",
};

export const revalidate = 3600; // revalidate every hour

export default async function GalleryPage() {
  const images = await getGalleryImages();

  // Use the first image as the banner background, or a fallback
  const bannerImage = images[0]?.src || "/images/og-default.jpg";

  return (
    <>
      <PageBanner
        title="Gallery"
        description="Take a look at some of our highlights."
        image={bannerImage}
      />
      <GallerySection
        images={images}
        columns={3}
        title=""
      />
    </>
  );
}
