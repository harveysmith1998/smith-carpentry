import type { MetadataRoute } from "next";
import { SERVICES } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://smithcarpentry.co.uk";
  const staticPages = [
    { url: base,                    priority: 1.0  },
    { url: `${base}/about`,         priority: 0.8  },
    { url: `${base}/services`,      priority: 0.9  },
    { url: `${base}/portfolio`,     priority: 0.8  },
    { url: `${base}/testimonials`,  priority: 0.7  },
    { url: `${base}/contact`,       priority: 0.9  },
  ].map((p) => ({ ...p, lastModified: new Date(), changeFrequency: "monthly" as const }));

  const servicePages = SERVICES.map((s) => ({
    url: `${base}/services/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticPages, ...servicePages];
}
