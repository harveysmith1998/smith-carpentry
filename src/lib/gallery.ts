import fs from "fs";
import path from "path";

export type GalleryCategory = {
  slug: string;
  label: string;
  description: string;
  images: string[];
};

const IMAGES_DIR = path.join(process.cwd(), "public/images");

function getImagesFromFolder(folder: string): string[] {
  const dir = path.join(IMAGES_DIR, folder);
  if (!fs.existsSync(dir)) return [];
  try {
    return fs
      .readdirSync(dir)
      .filter((f) => /\.(jpg|jpeg|png|webp)$/i.test(f))
      .sort((a, b) => {
        const nA = parseInt(a.match(/(\d+)/)?.[1] ?? "0");
        const nB = parseInt(b.match(/(\d+)/)?.[1] ?? "0");
        return nA - nB;
      })
      .map((f) => `/images/${folder}/${f}`);
  } catch {
    return [];
  }
}

export const GALLERY_CATEGORIES: GalleryCategory[] = [
  { slug: "kitchens",     label: "Kitchens",             description: "Bespoke kitchen installations and renovations",  images: getImagesFromFolder("kitchens") },
  { slug: "stairs",       label: "Staircases",            description: "Handcrafted staircase installations",            images: getImagesFromFolder("stairs") },
  { slug: "wardrobes",    label: "Wardrobes & Furniture", description: "Fitted wardrobes and bespoke furniture",         images: getImagesFromFolder("wardrobes") },
  { slug: "garden-rooms", label: "Garden Rooms",          description: "Bespoke garden rooms and outdoor kitchens",      images: getImagesFromFolder("garden-rooms") },
  { slug: "media-walls",  label: "Media Walls",           description: "Custom media walls and alcove units",            images: getImagesFromFolder("media-walls") },
  { slug: "panelling",    label: "Panelling",             description: "Wall panelling and interior finishing",           images: getImagesFromFolder("panelling") },
  { slug: "shopfitting",  label: "Shopfitting",           description: "Commercial fit-outs and shopfitting",            images: getImagesFromFolder("shopfitting") },
].filter((c) => c.images.length > 0);
