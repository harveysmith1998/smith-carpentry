"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";
import type { GalleryCategory } from "@/lib/gallery";

type Slide = { src: string; label: string };

export default function PortfolioPage({ categories }: { categories: GalleryCategory[] }) {
  const [active, setActive] = useState("all");
  const [index, setIndex] = useState<number | null>(null);

  // Flat list of every image with its category label
  const allSlides: Slide[] = useMemo(
    () =>
      categories.flatMap((c) => c.images.map((src) => ({ src, label: c.label }))),
    [categories]
  );

  const slides: Slide[] = useMemo(() => {
    if (active === "all") return allSlides;
    const cat = categories.find((c) => c.slug === active);
    return cat ? cat.images.map((src) => ({ src, label: cat.label })) : [];
  }, [active, categories, allSlides]);

  const close = useCallback(() => setIndex(null), []);
  const prev = useCallback(
    () => setIndex((i) => (i === null ? i : (i - 1 + slides.length) % slides.length)),
    [slides.length]
  );
  const next = useCallback(
    () => setIndex((i) => (i === null ? i : (i + 1) % slides.length)),
    [slides.length]
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

  const tabs = [{ slug: "all", label: "All" }, ...categories.map((c) => ({ slug: c.slug, label: c.label }))];

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-[#0a0a0a] overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/kitchen-61.jpg" alt="Portfolio" fill className="object-cover opacity-15" sizes="100vw" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/80 to-[#0a0a0a]" />
        </div>
        <div className="relative container mx-auto px-4 md:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="text-wood text-sm font-semibold uppercase tracking-widest mb-4 block">Our Work</span>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-5">
              Project <span className="gradient-text">Gallery</span>
            </h1>
            <p className="text-white/60 text-lg max-w-xl mx-auto">
              Browse our bespoke carpentry and joinery across Nottinghamshire — kitchens, staircases,
              wardrobes, media walls, garden rooms and more.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter tabs */}
      <section className="bg-[#0a0a0a] sticky top-16 z-30 border-b border-white/10">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex gap-2 py-4 overflow-x-auto scrollbar-none">
            {tabs.map((t) => (
              <button
                key={t.slug}
                onClick={() => setActive(t.slug)}
                className={`px-5 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-200 ${
                  active === t.slug
                    ? "bg-wood text-[#0a0a0a] shadow-glow-brand"
                    : "bg-white/5 border border-white/10 text-white/60 hover:border-wood/40 hover:text-wood"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="section-padding bg-[#0a0a0a]">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            <AnimatePresence mode="popLayout">
              {slides.map((s, i) => (
                <motion.button
                  key={`${s.src}-${i}`}
                  layout
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.94 }}
                  transition={{ duration: 0.35, delay: Math.min(i, 12) * 0.03 }}
                  onClick={() => setIndex(i)}
                  className="break-inside-avoid group relative block w-full rounded-2xl overflow-hidden border border-white/10 hover:border-wood/40 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                  style={{ height: `${240 + (i % 3) * 70}px` }}
                >
                  <div className="img-zoom absolute inset-0">
                    <Image
                      src={s.src}
                      alt={`${s.label} project`}
                      fill
                      loading={i < 6 ? "eager" : "lazy"}
                      priority={i < 3}
                      className="object-cover"
                      sizes="(max-width:640px) 100vw,(max-width:1024px) 50vw,33vw"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/90 via-[#0a0a0a]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 rounded-full bg-wood/90 text-[#0a0a0a] flex items-center justify-center">
                      <ZoomIn size={20} />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-left translate-y-2 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                    <span className="px-3 py-1 rounded-full bg-wood text-[#0a0a0a] text-xs font-bold">{s.label}</span>
                  </div>
                </motion.button>
              ))}
            </AnimatePresence>
          </motion.div>

          {slides.length === 0 && (
            <div className="text-center py-20 text-white/40">No projects in this category yet.</div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {index !== null && slides[index] && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#0a0a0a]/97 flex items-center justify-center p-4"
            onClick={close}
          >
            {/* Close */}
            <button
              onClick={close}
              className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center hover:border-wood hover:text-wood transition-all z-10"
              aria-label="Close"
            >
              <X size={18} />
            </button>

            {/* Counter */}
            <div className="absolute top-6 left-1/2 -translate-x-1/2 text-white/60 text-sm font-medium">
              {index + 1} / {slides.length}
            </div>

            {/* Prev */}
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-3 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center hover:border-wood hover:text-wood transition-all z-10"
              aria-label="Previous"
            >
              <ChevronLeft size={22} />
            </button>

            {/* Next */}
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-3 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center hover:border-wood hover:text-wood transition-all z-10"
              aria-label="Next"
            >
              <ChevronRight size={22} />
            </button>

            <motion.div
              key={slides[index].src}
              initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-5xl h-[80vh] rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <Image src={slides[index].src} alt={`${slides[index].label} project`} fill className="object-contain" sizes="100vw" />
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                <span className="px-4 py-1.5 rounded-full bg-wood text-[#0a0a0a] text-sm font-bold">{slides[index].label}</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
