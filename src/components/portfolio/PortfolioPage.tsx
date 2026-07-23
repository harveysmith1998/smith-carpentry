"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";
import type { GalleryCategory } from "@/lib/gallery";

type Slide = { src: string; label: string };

export default function PortfolioPage({ categories }: { categories: GalleryCategory[] }) {
  const [index, setIndex] = useState<number | null>(null);
  const [slidePool, setSlidePool] = useState<Slide[]>([]);

  const openLightbox = useCallback((pool: Slide[], i: number) => {
    setSlidePool(pool);
    setIndex(i);
  }, []);

  const close = useCallback(() => setIndex(null), []);
  const prev = useCallback(
    () => setIndex((i) => (i === null ? i : (i - 1 + slidePool.length) % slidePool.length)),
    [slidePool.length]
  );
  const next = useCallback(
    () => setIndex((i) => (i === null ? i : (i + 1) % slidePool.length)),
    [slidePool.length]
  );

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, close, prev, next]);

  return (
    <>
      {/* Page header */}
      <section className="relative pt-32 pb-16 bg-[#0a0a0a] overflow-hidden">
        {categories[0]?.cover && (
          <div className="absolute inset-0">
            <Image src={categories[0].cover} alt="Portfolio" fill className="object-cover opacity-10" sizes="100vw" priority />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/80 to-[#0a0a0a]" />
          </div>
        )}
        <div className="relative container mx-auto px-4 md:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="text-brand text-sm font-semibold uppercase tracking-widest mb-4 block">Our Work</span>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-5">
              Project <span className="gradient-text">Gallery</span>
            </h1>
            <p className="text-white/60 text-lg max-w-xl mx-auto">
              Browse our bespoke carpentry and joinery across Nottinghamshire.
            </p>
          </motion.div>
        </div>
      </section>

      {/* One section per category */}
      {categories.map((cat, catIdx) => {
        const gallery = cat.images.filter((s) => s !== cat.cover);
        const pool: Slide[] = cat.images.map((src) => ({ src, label: cat.label }));
        const coverIdx = 0; // cover is always first in pool

        return (
          <section key={cat.slug} id={cat.slug} className="bg-[#0a0a0a] py-16 border-t border-white/5">
            <div className="container mx-auto px-4 md:px-8">
              {/* Category header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-10"
              >
                <div className="flex items-center gap-4 mb-2">
                  <div className="h-px flex-1 bg-white/10" />
                  <span className="text-brand text-xs font-semibold uppercase tracking-[0.2em]">
                    {String(catIdx + 1).padStart(2, "0")}
                  </span>
                  <div className="h-px flex-1 bg-white/10" />
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-white text-center mb-2">
                  {cat.label}
                </h2>
                <p className="text-white/50 text-center text-sm">{cat.description}</p>
              </motion.div>

              {/* Cover photo — full width */}
              {cat.cover && (
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  onClick={() => openLightbox(pool, coverIdx)}
                  className="group relative w-full rounded-2xl overflow-hidden border border-white/10 hover:border-brand/50 transition-all duration-300 mb-4 block"
                  style={{ height: "480px" }}
                >
                  <Image
                    src={cat.cover}
                    alt={cat.label}
                    fill
                    priority={catIdx < 2}
                    loading={catIdx < 2 ? "eager" : "lazy"}
                    className="object-cover group-hover:scale-[1.02] transition-transform duration-700"
                    sizes="(max-width:768px) 100vw, 90vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 rounded-full bg-brand/90 text-[#0a0a0a] flex items-center justify-center shadow-lg">
                      <ZoomIn size={26} />
                    </div>
                  </div>
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-brand text-[#0a0a0a] text-xs font-bold">
                    Featured
                  </span>
                </motion.button>
              )}

              {/* Gallery grid */}
              {gallery.length > 0 && (
                <div className="columns-2 md:columns-3 gap-3 space-y-3">
                  {gallery.map((src, i) => (
                    <motion.button
                      key={src}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: Math.min(i, 8) * 0.05 }}
                      onClick={() => openLightbox(pool, i + 1)}
                      className="group break-inside-avoid relative block w-full rounded-xl overflow-hidden border border-white/8 hover:border-brand/40 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
                      style={{ height: `${220 + (i % 3) * 60}px` }}
                    >
                      <Image
                        src={src}
                        alt={`${cat.label} ${i + 2}`}
                        fill
                        loading="lazy"
                        className="object-cover group-hover:scale-[1.04] transition-transform duration-500"
                        sizes="(max-width:640px) 50vw,(max-width:1024px) 33vw,25vw"
                      />
                      <div className="absolute inset-0 bg-[#0a0a0a]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <ZoomIn size={20} className="text-white" />
                      </div>
                    </motion.button>
                  ))}
                </div>
              )}
            </div>
          </section>
        );
      })}

      {/* Lightbox */}
      <AnimatePresence>
        {index !== null && slidePool[index] && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#0a0a0a]/97 flex items-center justify-center p-4"
            onClick={close}
          >
            <button
              onClick={close}
              className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center hover:border-brand hover:text-brand transition-all z-10"
              aria-label="Close"
            >
              <X size={18} />
            </button>

            <div className="absolute top-6 left-1/2 -translate-x-1/2 text-white/60 text-sm font-medium">
              {index + 1} / {slidePool.length}
            </div>

            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-3 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center hover:border-brand hover:text-brand transition-all z-10"
              aria-label="Previous"
            >
              <ChevronLeft size={22} />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-3 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center hover:border-brand hover:text-brand transition-all z-10"
              aria-label="Next"
            >
              <ChevronRight size={22} />
            </button>

            <motion.div
              key={slidePool[index].src}
              initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-5xl h-[80vh] rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <Image src={slidePool[index].src} alt={slidePool[index].label} fill className="object-contain" sizes="100vw" />
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                <span className="px-4 py-1.5 rounded-full bg-brand text-[#0a0a0a] text-sm font-bold">{slidePool[index].label}</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
