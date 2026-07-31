import type { Metadata } from "next";
import LocationPage from "@/components/location/LocationPage";

export const metadata: Metadata = {
  title: "Carpenter Mansfield",
  description:
    "Local carpenter serving Mansfield and surrounding areas. Bespoke joinery, fitted kitchens, wardrobes, staircases, garden rooms & commercial fit-outs. Free quotes.",
};

export default function CarpenterMansfield() {
  return (
    <LocationPage
      city="Mansfield"
      county="Nottinghamshire"
      intro="Smith Carpentry delivers premium bespoke carpentry and joinery throughout Mansfield and the surrounding Nottinghamshire area. From fitted kitchens and wardrobes to staircases, media walls and commercial shopfitting — all completed to the highest standard with free, fixed-price quotes."
      heroImage="/images/wardrobes/cover.jpg"
      nearbyAreas={[
        "Sutton-in-Ashfield", "Kirkby-in-Ashfield", "Hucknall",
        "Newark", "Worksop", "Nottingham", "Rainworth", "Shirebrook",
      ]}
    />
  );
}
