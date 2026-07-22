import fs from "fs";
import path from "path";

export type GalleryCategory = {
  slug: string;
  label: string;
  description: string;
  images: string[]; // paths like /images/kitchen-1.jpg
};

const IMAGES_DIR = path.join(process.cwd(), "public/images");

function getImagesByPrefix(prefix: string | string[]): string[] {
  const prefixes = Array.isArray(prefix) ? prefix : [prefix];
  let all: string[] = [];
  try {
    all = fs.readdirSync(IMAGES_DIR);
  } catch {
    return [];
  }
  return all
    .filter(
      (f) =>
        /\.(jpg|jpeg|png|webp)$/i.test(f) &&
        prefixes.some((p) => f.startsWith(p))
    )
    .sort((a, b) => {
      const numA = parseInt(a.match(/(\d+)/)?.[1] ?? "0");
      const numB = parseInt(b.match(/(\d+)/)?.[1] ?? "0");
      return numA - numB;
    })
    .map((f) => `/images/${f}`);
}

export const GALLERY_CATEGORIES: GalleryCategory[] = [
  { slug: "kitchens",     label: "Kitchens",        description: "Bespoke kitchen installations and renovations", images: getImagesByPrefix("kitchen-") },
  { slug: "staircases",   label: "Staircases",       description: "Handcrafted staircase installations",          images: getImagesByPrefix("staircase-") },
  { slug: "wardrobes",    label: "Wardrobes",        description: "Fitted and bespoke wardrobe solutions",        images: getImagesByPrefix(["wardrobe-", "loft-bedroom-", "bedroom-fitted-", "loft-"]) },
  { slug: "media-walls",  label: "Media Walls",      description: "Custom media walls and bespoke joinery",       images: getImagesByPrefix("media-wall-") },
  { slug: "garden-rooms", label: "Garden Rooms",     description: "Bespoke garden rooms and outdoor kitchens",    images: getImagesByPrefix(["garden-room-", "garden-kitchen-"]) },
  { slug: "bespoke",      label: "Bespoke Joinery",  description: "Custom furniture and bespoke carpentry",       images: getImagesByPrefix(["bespoke-", "alcove-", "bookcase-", "under-stairs-", "hallway-unit-", "feature-wall-", "barn-door-"]) },
  { slug: "commercial",   label: "Commercial",       description: "Commercial fit-outs and shopfitting",          images: getImagesByPrefix(["commercial-", "shopfit-"]) },
  { slug: "second-fix",   label: "Second Fix",       description: "Doors, skirting, panelling and finishing",     images: getImagesByPrefix(["second-fix-", "door-", "panelling-"]) },
  { slug: "first-fix",    label: "First Fix",        description: "Structural carpentry and timber framing",      images: getImagesByPrefix(["timber-frame-"]) },
].filter((c) => c.images.length > 0);
