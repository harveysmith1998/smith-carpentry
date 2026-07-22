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

export const metadata: Metadata = {
  title: "Smith Carpentry | Bespoke Carpentry Nottinghamshire",
  description:
    "Trusted qualified carpenter with over 10 years of experience in Nottinghamshire. Bespoke joinery, kitchens, staircases, wardrobes, garden rooms & commercial fit-outs.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <AboutSection />
      <FeaturedServices />
      <RecentProjects />
      <WhyChooseUs />
      <Testimonials />
      <AreasCovered />
      <ContactCTA />
    </>
  );
}
