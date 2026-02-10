/**
 * Upload sample gallery images to Cloudinary.
 * Run: node scripts/upload-sample-gallery.mjs
 *
 * Uses picsum.photos for free sample images.
 */
import { v2 as cloudinary } from "cloudinary";
import { config } from "dotenv";

config({ path: ".env.local" });

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

const ORG_FOLDER = process.env.ORG_FOLDER || "Malia_Web";

const sampleImages = [
  // Food images (picsum IDs that look good)
  { url: "https://picsum.photos/id/292/1200/800", folder: "food", name: "grilled-salmon" },
  { url: "https://picsum.photos/id/312/1200/800", folder: "food", name: "fresh-salad" },
  { url: "https://picsum.photos/id/429/1200/800", folder: "food", name: "pasta-dish" },
  // Interior images
  { url: "https://picsum.photos/id/164/1200/800", folder: "interior", name: "dining-room" },
  { url: "https://picsum.photos/id/271/1200/800", folder: "interior", name: "bar-area" },
  { url: "https://picsum.photos/id/349/1200/800", folder: "interior", name: "lounge-seating" },
  // Events images
  { url: "https://picsum.photos/id/225/1200/800", folder: "events", name: "dinner-party" },
  { url: "https://picsum.photos/id/452/1200/800", folder: "events", name: "celebration" },
  { url: "https://picsum.photos/id/399/1200/800", folder: "events", name: "private-event" },
];

async function upload() {
  console.log(`Uploading ${sampleImages.length} sample images to Cloudinary...`);
  console.log(`Cloud: ${process.env.CLOUD_NAME}, Org folder: ${ORG_FOLDER}\n`);

  for (const img of sampleImages) {
    const folder = `${ORG_FOLDER}/gallery/${img.folder}`;
    try {
      const result = await cloudinary.uploader.upload(img.url, {
        folder,
        public_id: img.name,
        overwrite: true,
        context: `alt=${img.name.replace(/-/g, " ")}|caption=Sample ${img.folder} image`,
      });
      console.log(`  ✓ ${folder}/${img.name} → ${result.secure_url}`);
    } catch (err) {
      console.error(`  ✗ ${folder}/${img.name} → ${err.message}`);
    }
  }

  console.log("\nDone!");
}

upload();
