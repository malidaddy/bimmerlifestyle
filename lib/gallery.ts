import { v2 as cloudinary } from "cloudinary";
import type { GalleryImage } from "@/types/content";

// Configure Cloudinary Admin API (server-side only)
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

export interface GalleryAlbum {
  name: string;
  slug: string;
  images: GalleryImage[];
}

/**
 * Fetch all images from a Cloudinary folder.
 *
 * Folder structure:
 *   {ORG_FOLDER}/gallery/{subfolder}
 *
 * Each subfolder becomes an album/category.
 * Images at the root of /gallery/ have no category.
 *
 * @param galleryFolder - subfolder under ORG_FOLDER (default: "gallery")
 */
export async function getGalleryImages(
  galleryFolder: string = "gallery"
): Promise<GalleryImage[]> {
  const orgFolder = process.env.ORG_FOLDER || "";
  const basePath = orgFolder ? `${orgFolder}/${galleryFolder}` : galleryFolder;

  try {
    // Get all images recursively from the gallery folder
    const result = await cloudinary.search
      .expression(`folder:${basePath}/* AND resource_type:image`)
      .sort_by("created_at", "desc")
      .max_results(500)
      .execute();

    return (result.resources || []).map((resource: CloudinaryResource) => {
      // Extract category from subfolder path
      // e.g. "Malia_Web/gallery/food/dish.jpg" → category = "food"
      const relativePath = resource.public_id.replace(`${basePath}/`, "");
      const parts = relativePath.split("/");
      const category = parts.length > 1 ? parts[0] : undefined;

      return {
        src: resource.secure_url,
        alt: resource.context?.custom?.alt || formatAlt(resource.public_id),
        caption: resource.context?.custom?.caption || undefined,
        category,
      };
    });
  } catch (error) {
    console.error("Failed to fetch gallery images from Cloudinary:", error);
    return [];
  }
}

/**
 * Fetch gallery images grouped by album (subfolder).
 */
export async function getGalleryAlbums(
  galleryFolder: string = "gallery"
): Promise<GalleryAlbum[]> {
  const images = await getGalleryImages(galleryFolder);

  const albumMap = new Map<string, GalleryImage[]>();

  for (const image of images) {
    const key = image.category || "_uncategorized";
    const existing = albumMap.get(key) || [];
    existing.push(image);
    albumMap.set(key, existing);
  }

  const albums: GalleryAlbum[] = [];
  albumMap.forEach((imgs, key) => {
    if (key === "_uncategorized") return;
    albums.push({
      name: formatAlbumName(key),
      slug: key,
      images: imgs,
    });
  });

  // Add uncategorized images at the end if any
  const uncategorized = albumMap.get("_uncategorized");
  if (uncategorized && uncategorized.length > 0) {
    albums.push({
      name: "Other",
      slug: "other",
      images: uncategorized,
    });
  }

  return albums;
}

/**
 * List available album names (subfolders) without fetching all images.
 */
export async function getAlbumNames(
  galleryFolder: string = "gallery"
): Promise<string[]> {
  const orgFolder = process.env.ORG_FOLDER || "";
  const basePath = orgFolder ? `${orgFolder}/${galleryFolder}` : galleryFolder;

  try {
    const result = await cloudinary.api.sub_folders(basePath);
    return (result.folders || []).map((f: { name: string }) => f.name);
  } catch (error) {
    console.error("Failed to fetch album names from Cloudinary:", error);
    return [];
  }
}

// --- Helpers ---

interface CloudinaryResource {
  public_id: string;
  secure_url: string;
  context?: {
    custom?: {
      alt?: string;
      caption?: string;
    };
  };
}

/** Convert public_id to a readable alt text */
function formatAlt(publicId: string): string {
  const filename = publicId.split("/").pop() || publicId;
  return filename
    .replace(/[-_]/g, " ")
    .replace(/\.[^.]+$/, "")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

/** Convert folder slug to display name */
function formatAlbumName(slug: string): string {
  return slug
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}
