import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/review',
        destination: 'https://g.page/r/CbI8a2yoeQHhEBM/review',
        permanent: false,
      },
    ];
  },
  // Customer links to online quotes/invoices open the same pages in read-only view
  async rewrites() {
    return [
      { source: '/q/:id', destination: '/quote.html' },
      { source: '/i/:id', destination: '/invoice.html' },
    ];
  },
  async headers() {
    const privatePage = [
      { key: 'X-Robots-Tag', value: 'noindex, nofollow' },
      { key: 'Referrer-Policy', value: 'no-referrer' },
    ];
    return ['/q/:id', '/i/:id', '/quote.html', '/invoice.html'].map((source) => ({
      source,
      headers: privatePage,
    }));
  },
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
};

export default nextConfig;
