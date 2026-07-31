import type { Metadata } from "next";
import LocationPage from "@/components/location/LocationPage";

export const metadata: Metadata = {
  title: "Carpenter Kirkby-in-Ashfield",
  description:
    "Local carpenter serving Kirkby-in-Ashfield and surrounding areas. Bespoke joinery, fitted kitchens, wardrobes, staircases, garden rooms & commercial fit-outs. Free quotes.",
};

export default function CarpenterKirkbyInAshfield() {
  return (
    <LocationPage
      city="Kirkby-in-Ashfield"
      county="Nottinghamshire"
      intro="Smith Carpentry provides expert bespoke carpentry and joinery throughout Kirkby-in-Ashfield and the wider Nottinghamshire area. Based nearby in Sutton-in-Ashfield, we offer fast response times and free, fixed-price quotes on all projects."
      heroImage="/images/panelling/cover.jpg"
      nearbyAreas={[
        "Sutton-in-Ashfield", "Hucknall", "Mansfield",
        "Annesley", "Nottingham", "Eastwood", "Selston", "Jacksdale",
      ]}
    />
  );
}
