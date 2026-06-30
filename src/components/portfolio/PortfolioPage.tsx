"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import { PORTFOLIO_ITEMS, PORTFOLIO_CATEGORIES } from "@/lib/data";

export default function PortfolioPage() {
  const [active,    setActive]   = useState("All");
  const [lightbox,  setLightbox] = useState<string | null>(null);

  const filtered = active === "All"
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter((p) => p.category === active);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-charcoal-950 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/kitchen-4.jpg" alt="Portfolio" fill className="object-cover opacity-15" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal-950/80 to-charcoal-950" />
        </div>
        <div className="relative container mx-auto px-4 md:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="text-brand text-sm font-semibold uppercase tracking-widest mb-4 block">Our Work</span>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-5">
              Project <span className="gradient-text">Portfolio</span>
            </h1>
            <p className="text-white/60 text-lg max-w-xl mx-auto">
              Every project tells a story. Browse our work across residential, commercial and bespoke joinery.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter tabs */}
      <section className="bg-white dark:bg-charcoal-950 sticky top-16 z-30 border-b border-charcoal-100 dark:border-white/8">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex gap-2 py-4 overflow-x-auto scrollbar-none">
            {PORTFOLIO_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-200 ${
                  active === cat
                    ? "bg-brand text-charcoal-950 shadow-glow-brand"
                    : "bg-[#F5F5F5] dark:bg-charcoal-900 text-charcoal-500 dark:text-white/50 hover:bg-brand/10 hover:text-brand"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="section-padding bg-white dark:bg-charcoal-950">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            <AnimatePresence mode="popLayout">
              {filtered.map((p, i) => (
                <motion.div
                  key={p.id}
                  layout
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                  className="break-inside-avoid group relative rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover cursor-pointer"
                  style={{ height: `${220 + (i % 3) * 80}px` }}
                  onClick={() => setLightbox(p.image)}
                >
                  <div className="img-zoom absolute inset-0">
                    <Image src={p.image} alt={p.title} fill className="object-cover"
                      sizes="(max-width:640px) 100vw,(max-width:1024px) 50vw,33vw" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/90 via-charcoal-950/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-brand text-charcoal-950 text-xs font-bold">{p.category}</span>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 rounded-full bg-brand/90 text-charcoal-950 flex items-center justify-center">
                      <ZoomIn size={20} />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                    <h3 className="text-white font-bold text-sm">{p.title}</h3>
                    <p className="text-white/60 text-xs">{p.description}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-charcoal-400 dark:text-white/40">
              No projects in this category yet.
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-charcoal-950/95 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center hover:border-brand hover:text-brand transition-all"
              aria-label="Close"
            >
              <X size={18} />
            </button>
            <motion.div
              initial={{ scale: 0.85 }} animate={{ scale: 1 }} exit={{ scale: 0.85 }}
              className="relative w-full max-w-4xl max-h-[85vh] rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <Image src={lightbox} alt="Project photo" fill className="object-contain" sizes="100vw" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
