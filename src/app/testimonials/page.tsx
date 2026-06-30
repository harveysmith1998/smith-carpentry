import type { Metadata } from "next";
import TestimonialsPage from "@/components/testimonials/TestimonialsPage";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "Read verified client reviews for Smith Carpentry. 5-star rated across 200+ projects — residential and commercial across the UK.",
};

export default function Page() {
  return <TestimonialsPage />;
}
