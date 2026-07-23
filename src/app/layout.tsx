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
    default: "Smith Carpentry | Bespoke Carpentry Nottinghamshire",
    template: "%s | Smith Carpentry",
  },
  description:
    "Trusted qualified carpenter with over 10 years of experience in Nottinghamshire. Bespoke joinery, kitchens, staircases, wardrobes, garden rooms & commercial fit-outs.",
  keywords: [
    "carpentry Nottinghamshire",
    "carpenter Nottingham",
    "bespoke joinery Nottinghamshire",
    "kitchen fitter Nottingham",
    "staircases Nottinghamshire",
    "fitted wardrobes Nottingham",
    "garden rooms Nottinghamshire",
    "commercial fit-out Nottingham",
  ],
  authors: [{ name: "Smith Carpentry" }],
  creator: "Smith Carpentry",
  metadataBase: new URL("https://smithcarpentry.co.uk"),
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://smithcarpentry.co.uk",
    siteName: "Smith Carpentry",
    title: "Smith Carpentry | Bespoke Carpentry Nottinghamshire",
    description:
      "Trusted qualified carpenter with over 10 years of experience in Nottinghamshire. Bespoke joinery, kitchens, staircases and commercial fit-outs.",
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
    title: "Smith Carpentry | Bespoke Carpentry Nottinghamshire",
    description: "Trusted qualified carpenter with over 10 years of experience in Nottinghamshire.",
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
  "@type": "LocalBusiness",
  name: "Smith Carpentry",
  description:
    "Trusted qualified carpenter with over 10 years of experience in Nottinghamshire. Bespoke joinery, kitchens, staircases, wardrobes, garden rooms & commercial fit-outs.",
  image: "https://smithcarpentry.co.uk/images/logo.jpg",
  url: "https://smithcarpentry.co.uk",
  telephone: COMPANY.phone,
  email: COMPANY.email,
  priceRange: "££",
  areaServed: "Nottinghamshire",
  address: {
    "@type": "PostalAddress",
    addressRegion: "Nottinghamshire",
    addressCountry: "GB",
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
