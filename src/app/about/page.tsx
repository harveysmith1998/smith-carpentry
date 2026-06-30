import type { Metadata } from "next";
import AboutContent from "@/components/about/AboutContent";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Smith Carpentry — 15+ years of premium carpentry and joinery across the UK. Fully insured, experienced and passionate about quality craftsmanship.",
};

export default function AboutPage() {
  return <AboutContent />;
}
