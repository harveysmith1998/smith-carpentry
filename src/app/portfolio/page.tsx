import type { Metadata } from "next";
import PortfolioPage from "@/components/portfolio/PortfolioPage";
import { GALLERY_CATEGORIES } from "@/lib/gallery";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Browse the Smith Carpentry gallery — kitchens, staircases, wardrobes, media walls, garden rooms, bespoke joinery and commercial fit-outs across Nottinghamshire.",
};

export default function Page() {
  return <PortfolioPage categories={GALLERY_CATEGORIES} />;
}
