"use client";

import Image, { ImageProps } from "next/image";
import { useState } from "react";

// Fallback Unsplash images by category hint in the src path
const FALLBACKS: Record<string, string> = {
  "kitchen": "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
  "feature-wall": "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
  "logo": "/next.svg",
};

function getFallback(src: string): string {
  for (const [key, url] of Object.entries(FALLBACKS)) {
    if (src.includes(key)) return url;
  }
  return "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80";
}

export default function SmartImage(props: ImageProps) {
  const [errored, setErrored] = useState(false);
  const src = errored ? getFallback(String(props.src)) : props.src;
  return (
    <Image
      {...props}
      src={src}
      onError={() => setErrored(true)}
      alt={props.alt}
    />
  );
}
