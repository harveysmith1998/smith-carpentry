"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Star, Quote, ArrowRight } from "lucide-react";
import { TESTIMONIALS } from "@/lib/data";

export default function TestimonialsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-charcoal-950 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand/10 rounded-full blur-3xl" />
        <div className="relative container mx-auto px-4 md:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="text-brand text-sm font-semibold uppercase tracking-widest mb-4 block">Reviews</span>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-5">
              Client <span className="gradient-text">Testimonials</span>
            </h1>
            <div className="flex justify-center gap-1.5 mb-4">
              {[...Array(5)].map((_, i) => <Star key={i} size={22} className="text-brand fill-brand" />)}
            </div>
            <p className="text-white/60 text-lg">5.0 average rating · 200+ verified reviews</p>
          </motion.div>
        </div>
      </section>

      {/* Overall rating */}
      <section className="bg-charcoal-900 border-y border-white/5 py-12">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: "Overall Rating",  value: "5.0",   sub: "out of 5" },
              { label: "Total Reviews",   value: "200+",  sub: "verified reviews" },
              { label: "Recommend Us",    value: "100%",  sub: "of clients" },
              { label: "Response Time",   value: "24h",   sub: "average quote time" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-4xl font-display font-bold gradient-text mb-1">{stat.value}</div>
                <div className="text-white/80 text-sm font-medium">{stat.label}</div>
                <div className="text-white/40 text-xs">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews grid */}
      <section className="section-padding bg-white dark:bg-charcoal-950">
        <div className="container mx-auto px-4 md:px-8">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-5 space-y-5">
            {[...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                className="break-inside-avoid bg-[#F5F5F5] dark:bg-charcoal-900 rounded-2xl p-6 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-brand/20"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, j) => <Star key={j} size={14} className="text-brand fill-brand" />)}
                </div>
                {/* Quote */}
                <Quote size={24} className="text-brand/20 mb-3" />
                <p className="text-charcoal-700 dark:text-white/70 text-sm leading-relaxed mb-5 italic">
                  &ldquo;{t.text}&rdquo;
                </p>
                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-charcoal-100 dark:border-white/8">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden ring-2 ring-brand/30 shrink-0">
                    <Image src={t.image} alt={t.name} fill className="object-cover" sizes="40px" />
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-charcoal-950 dark:text-white text-sm">{t.name}</div>
                    <div className="text-charcoal-400 dark:text-white/40 text-xs">{t.role}</div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-brand/10 text-brand text-xs font-medium shrink-0">
                    {t.project}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-charcoal-950 border-t border-white/5">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-display font-bold text-white mb-4">
              Join Our Growing List of Happy Clients
            </h2>
            <p className="text-white/50 mb-8 max-w-lg mx-auto">
              Get a free quote today and experience the Smith Carpentry difference for yourself.
            </p>
            <Link href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-brand text-charcoal-950 font-bold rounded-xl hover:bg-brand-400 hover:shadow-glow-brand transition-all duration-300">
              Request a Free Quote <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
