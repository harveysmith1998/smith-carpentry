import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import AboutSection from "@/components/home/AboutSection";
import FeaturedServices from "@/components/home/FeaturedServices";
import RecentProjects from "@/components/home/RecentProjects";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Testimonials from "@/components/home/Testimonials";
import AreasCovered from "@/components/home/AreasCovered";
import ContactCTA from "@/components/home/ContactCTA";
import VideoSection from "@/components/home/VideoSection";

export const metadata: Metadata = {
  title: "Smith Carpentry | Carpenter Nottingham & Nottinghamshire",
  description:
    "Local carpenter based in Sutton-in-Ashfield covering Nottingham, Mansfield, Kirkby-in-Ashfield & all of Nottinghamshire. Bespoke joinery, kitchens, wardrobes, staircases & commercial fit-outs.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <AboutSection />
      <FeaturedServices />
      <VideoSection />
      <RecentProjects />
      <WhyChooseUs />
      <Testimonials />
      <AreasCovered />
      <ContactCTA />
    </>
  );
}
