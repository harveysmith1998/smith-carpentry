import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingButtons from "@/components/common/FloatingButtons";

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
    default: "Smith Carpentry | Premium Carpentry & Joinery UK",
    template: "%s | Smith Carpentry",
  },
  description:
    "Expert carpentry and joinery across the UK. Bespoke residential and commercial projects — kitchens, wardrobes, shopfitting, garden rooms and more. 15+ years experience. Free quotes.",
  keywords: [
    "carpentry",
    "joinery",
    "bespoke carpentry",
    "shopfitting",
    "kitchen installation",
    "garden rooms",
    "fitted wardrobes",
    "UK carpenter",
  ],
  authors: [{ name: "Smith Carpentry" }],
  creator: "Smith Carpentry",
  metadataBase: new URL("https://smithcarpentry.co.uk"),
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://smithcarpentry.co.uk",
    siteName: "Smith Carpentry",
    title: "Smith Carpentry | Premium Carpentry & Joinery UK",
    description:
      "Expert carpentry and joinery across the UK. Bespoke residential and commercial projects with 15+ years experience.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Smith Carpentry",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Smith Carpentry | Premium Carpentry & Joinery UK",
    description: "Expert carpentry and joinery across the UK.",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-white text-[#222222]">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
