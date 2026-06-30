import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import FeaturedServices from "@/components/home/FeaturedServices";
import RecentProjects from "@/components/home/RecentProjects";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Testimonials from "@/components/home/Testimonials";
import ContactCTA from "@/components/home/ContactCTA";

export const metadata: Metadata = {
  title: "Smith Carpentry | Premium Carpentry & Joinery UK",
  description:
    "Smith Carpentry delivers premium bespoke carpentry and joinery across the UK. Residential and commercial specialists with 15+ years experience. Free quotes available.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <FeaturedServices />
      <RecentProjects />
      <WhyChooseUs />
      <Testimonials />
      <ContactCTA />
    </>
  );
}
