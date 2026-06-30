"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/data";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent((c) => (c === 0 ? TESTIMONIALS.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === TESTIMONIALS.length - 1 ? 0 : c + 1));

  return (
    <section className="section-padding bg-charcoal-950 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">

        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="text-center max-w-xl mx-auto mb-14"
        >
          <span className="text-brand font-semibold text-sm uppercase tracking-widest mb-3 block">Client Reviews</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">What Our Clients Say</h2>
          <div className="flex justify-center gap-1 mb-3">
            {[...Array(5)].map((_, i) => <Star key={i} size={18} className="text-brand fill-brand" />)}
          </div>
          <p className="text-white/50 text-sm">5.0 average · 200+ verified reviews</p>
        </motion.div>

        {/* Featured carousel */}
        <div className="max-w-4xl mx-auto mb-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.35 }}
              className="bg-charcoal-900/80 border border-white/8 rounded-2xl p-8 md:p-12"
            >
              <Quote size={36} className="text-brand/25 mb-6" />
              <blockquote className="text-white/85 text-lg md:text-xl leading-relaxed mb-8 italic font-light">
                &ldquo;{TESTIMONIALS[current].text}&rdquo;
              </blockquote>
              <div className="flex items-center gap-4 flex-wrap">
                <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-brand/30">
                  <Image src={TESTIMONIALS[current].image} alt={TESTIMONIALS[current].name} fill className="object-cover" sizes="48px" />
                </div>
                <div>
                  <div className="text-white font-bold">{TESTIMONIALS[current].name}</div>
                  <div className="text-white/40 text-sm">{TESTIMONIALS[current].role}</div>
                  <div className="flex gap-0.5 mt-1">
                    {[...Array(TESTIMONIALS[current].rating)].map((_, i) => <Star key={i} size={11} className="text-brand fill-brand" />)}
                  </div>
                </div>
                <span className="ml-auto px-3 py-1 rounded-full bg-brand/15 text-brand text-xs font-medium">
                  {TESTIMONIALS[current].project}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-between mt-6">
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button key={i} onClick={() => setCurrent(i)} aria-label={`Go to review ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${i === current ? "w-8 bg-brand" : "w-2 bg-white/20 hover:bg-white/40"}`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button onClick={prev} aria-label="Previous"
                className="w-10 h-10 rounded-full border border-white/15 hover:border-brand hover:text-brand text-white/60 flex items-center justify-center transition-all">
                <ChevronLeft size={17} />
              </button>
              <button onClick={next} aria-label="Next"
                className="w-10 h-10 rounded-full border border-white/15 hover:border-brand hover:text-brand text-white/60 flex items-center justify-center transition-all">
                <ChevronRight size={17} />
              </button>
            </div>
          </div>
        </div>

        {/* Mini cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {TESTIMONIALS.slice(0, 3).map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-charcoal-900/60 border border-white/8 rounded-xl p-5 hover:border-brand/30 transition-colors"
            >
              <div className="flex gap-0.5 mb-3">{[...Array(5)].map((_, j) => <Star key={j} size={11} className="text-brand fill-brand" />)}</div>
              <p className="text-white/60 text-sm leading-relaxed mb-4 line-clamp-3 italic">&ldquo;{t.text}&rdquo;</p>
              <div className="flex items-center gap-2">
                <div className="relative w-8 h-8 rounded-full overflow-hidden">
                  <Image src={t.image} alt={t.name} fill className="object-cover" sizes="32px" />
                </div>
                <div>
                  <div className="text-white text-xs font-semibold">{t.name}</div>
                  <div className="text-white/30 text-xs">{t.project}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
