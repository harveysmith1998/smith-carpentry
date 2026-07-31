import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingButtons from "@/components/common/FloatingButtons";
import { COMPANY } from "@/lib/data";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Smith Carpentry | Carpenter Nottingham & Nottinghamshire",
    template: "%s | Smith Carpentry",
  },
  description:
    "Local carpenter based in Sutton-in-Ashfield covering Nottingham, Mansfield, Kirkby-in-Ashfield & all of Nottinghamshire. Bespoke joinery, kitchens, wardrobes, staircases & commercial fit-outs.",
  keywords: [
    "carpenter Nottingham",
    "carpenter Nottinghamshire",
    "carpenter Sutton-in-Ashfield",
    "carpenter Mansfield",
    "carpenter Kirkby-in-Ashfield",
    "carpenter Hucknall",
    "carpenter Arnold",
    "carpenter West Bridgford",
    "carpenter Newark",
    "carpenter Worksop",
    "carpentry Nottingham",
    "bespoke joinery Nottingham",
    "kitchen fitter Nottingham",
    "fitted wardrobes Nottingham",
    "staircases Nottinghamshire",
    "garden rooms Nottinghamshire",
    "shopfitting Nottingham",
    "media wall Nottingham",
    "wall panelling Nottingham",
    "first fix carpenter Nottinghamshire",
    "commercial fit-out Nottingham",
    "local carpenter near me Nottinghamshire",
  ],
  authors: [{ name: "Smith Carpentry" }],
  creator: "Smith Carpentry",
  metadataBase: new URL("https://www.smithcarpentry.uk"),
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://www.smithcarpentry.uk",
    siteName: "Smith Carpentry",
    title: "Smith Carpentry | Carpenter Nottingham & Nottinghamshire",
    description:
      "Local carpenter based in Sutton-in-Ashfield covering Nottingham, Mansfield, Kirkby-in-Ashfield & all of Nottinghamshire. Bespoke joinery, kitchens, wardrobes, staircases & commercial fit-outs.",
    images: [
      {
        url: "/images/kitchens/cover.jpg",
        width: 1200,
        height: 630,
        alt: "Smith Carpentry",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Smith Carpentry | Carpenter Nottingham & Nottinghamshire",
    description: "Local carpenter based in Sutton-in-Ashfield covering Nottingham, Mansfield, Kirkby-in-Ashfield & all of Nottinghamshire.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Carpenter",
  name: "Smith Carpentry",
  description:
    "Trusted qualified carpenter with over 10 years of experience in Nottinghamshire. Bespoke joinery, kitchens, staircases, wardrobes, garden rooms & commercial fit-outs.",
  image: "https://www.smithcarpentry.uk/images/logo.jpg",
  url: "https://www.smithcarpentry.uk",
  telephone: COMPANY.phone,
  email: COMPANY.email,
  priceRange: "££",
  areaServed: [
    { "@type": "City", name: "Nottingham" },
    { "@type": "City", name: "Mansfield" },
    { "@type": "City", name: "Sutton-in-Ashfield" },
    { "@type": "City", name: "Kirkby-in-Ashfield" },
    { "@type": "City", name: "Hucknall" },
    { "@type": "City", name: "Newark" },
    { "@type": "City", name: "West Bridgford" },
    { "@type": "City", name: "Arnold" },
    { "@type": "City", name: "Worksop" },
    { "@type": "City", name: "Beeston" },
    { "@type": "City", name: "Eastwood" },
    { "@type": "AdministrativeArea", name: "Nottinghamshire" },
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Sutton-in-Ashfield",
    addressRegion: "Nottinghamshire",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 52.9548,
    longitude: -1.1581,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "08:00",
      closes: "16:00",
    },
  ],
  sameAs: [
    COMPANY.instagram,
    COMPANY.facebook,
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} dark h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#0a0a0a] text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
