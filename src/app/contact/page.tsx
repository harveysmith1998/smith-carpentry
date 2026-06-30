import type { Metadata } from "next";
import ContactPage from "@/components/contact/ContactPage";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get a free carpentry quote from Smith Carpentry. Contact us by phone, email or WhatsApp. We respond within 24 hours.",
};

export default function Page() {
  return <ContactPage />;
}
