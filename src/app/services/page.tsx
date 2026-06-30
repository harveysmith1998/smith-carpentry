import type { Metadata } from "next";
import ServicesPage from "@/components/services/ServicesPage";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore the full range of Smith Carpentry services — shopfitting, bespoke carpentry, kitchens, wardrobes, garden rooms, staircases, first & second fix, and more.",
};

export default function Page() {
  return <ServicesPage />;
}
