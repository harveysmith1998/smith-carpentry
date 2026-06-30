import type { Metadata } from "next";
import PortfolioPage from "@/components/portfolio/PortfolioPage";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Browse the Smith Carpentry project portfolio — kitchens, shopfitting, bespoke joinery, garden rooms, wardrobes and more across the UK.",
};

export default function Page() {
  return <PortfolioPage />;
}
