import fs from "fs";
import path from "path";

export type GalleryCategory = {
  slug: string;
  label: string;
  description: string;
  cover: string;
  images: string[];
};

const IMAGES_DIR = path.join(process.cwd(), "public/images");

function getImagesFromFolder(folder: string): { cover: string; images: string[] } {
  const dir = path.join(IMAGES_DIR, folder);
  if (!fs.existsSync(dir)) return { cover: "", images: [] };
  try {
    const all = fs.readdirSync(dir).filter((f) => /\.(jpg|jpeg|png|webp)$/i.test(f));
    const cover = all.includes("main.jpg") ? `/images/${folder}/main.jpg` : "";
    const rest = all
      .filter((f) => f !== "main.jpg")
      .sort((a, b) => {
        const nA = parseInt(a.match(/(\d+)/)?.[1] ?? "0");
        const nB = parseInt(b.match(/(\d+)/)?.[1] ?? "0");
        return nA - nB;
      })
      .map((f) => `/images/${folder}/${f}`);
    return { cover, images: cover ? [cover, ...rest] : rest };
  } catch {
    return { cover: "", images: [] };
  }
}

const CATEGORIES_CONFIG = [
  { slug: "kitchens",     label: "Kitchens",                    description: "Bespoke kitchen installations and renovations" },
  { slug: "stairs",       label: "Staircases",                  description: "Handcrafted staircase installations" },
  { slug: "wardrobes",    label: "Wardrobes & Furniture",       description: "Fitted wardrobes and bespoke furniture" },
  { slug: "garden-rooms", label: "Garden Rooms",                description: "Bespoke garden rooms and outdoor kitchens" },
  { slug: "media-walls",  label: "Media Walls",                 description: "Custom media walls and alcove units" },
  { slug: "panelling",    label: "Panelling",                   description: "Wall panelling and interior finishing" },
  { slug: "shopfitting",  label: "Shopfitting",                 description: "Commercial fit-outs and shopfitting" },
  { slug: "first-fix",    label: "First Fix & Plasterboarding", description: "Structural carpentry and drylining" },
];

export const GALLERY_CATEGORIES: GalleryCategory[] = CATEGORIES_CONFIG
  .map((c) => {
    const { cover, images } = getImagesFromFolder(c.slug);
    return { ...c, cover, images };
  })
  .filter((c) => c.images.length > 0);
