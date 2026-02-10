import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

interface PageSeoProps {
  title: string;
  description: string;
  image?: string;
  noIndex?: boolean;
  pathname?: string;
}

export function generatePageMetadata({
  title,
  description,
  image,
  noIndex = false,
  pathname = "",
}: PageSeoProps): Metadata {
  const url = `${siteConfig.url}${pathname}`;
  const ogImage = image || siteConfig.ogImage;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      images: [{ url: ogImage, width: 1200, height: 630 }],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    ...(noIndex && {
      robots: { index: false, follow: false },
    }),
    alternates: {
      canonical: url,
    },
  };
}
