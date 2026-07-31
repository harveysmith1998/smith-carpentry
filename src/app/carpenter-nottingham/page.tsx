import type { Metadata } from "next";
import LocationPage from "@/components/location/LocationPage";

export const metadata: Metadata = {
  title: "Carpenter Nottingham",
  description:
    "Local carpenter serving Nottingham and Nottinghamshire. Bespoke joinery, fitted kitchens, wardrobes, staircases, garden rooms & commercial fit-outs. Free quotes.",
};

export default function CarpenterNottingham() {
  return (
    <LocationPage
      city="Nottingham"
      county="Nottinghamshire"
      intro="Smith Carpentry provides premium bespoke carpentry and joinery throughout Nottingham and the surrounding area. From fitted kitchens and wardrobes to staircases, garden rooms and commercial shopfitting — all work is carried out to the highest standard with free, fixed-price quotes."
      heroImage="/images/media-walls/cover.jpg"
      nearbyAreas={[
        "West Bridgford", "Arnold", "Hucknall", "Beeston",
        "Eastwood", "Ilkeston", "Long Eaton", "Sutton-in-Ashfield",
      ]}
    />
  );
}
