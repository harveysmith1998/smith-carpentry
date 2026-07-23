"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Star, Quote, ArrowRight, ExternalLink } from "lucide-react";
import { TESTIMONIALS } from "@/lib/data";

const initials = (name: string) =>
  name.split(" ").map((w) => w[0]).slice(0, 2).join("");

export default function TestimonialsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-[#0a0a0a] overflow-hidden">
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
            <p className="text-white/60 text-lg">5.0 average rating · Nottinghamshire clients</p>
          </motion.div>
        </div>
      </section>

      {/* Overall rating */}
      <section className="bg-[#111111] border-y border-white/5 py-12">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: "Overall Rating",  value: "5.0",   sub: "out of 5" },
              { label: "Happy Clients",   value: "450+",  sub: "across Nottinghamshire" },
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
      <section className="section-padding bg-[#0a0a0a]">
        <div className="container mx-auto px-4 md:px-8">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-5 space-y-5">
            {[...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                className="break-inside-avoid bg-white/5 rounded-2xl p-6 hover:-translate-y-1 transition-all duration-300 border border-white/10 hover:border-brand/40"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, j) => <Star key={j} size={14} className="text-brand fill-brand" />)}
                </div>
                <Quote size={24} className="text-brand/20 mb-3" />
                <p className="text-white/70 text-sm leading-relaxed mb-5 italic">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-white/8">
                  <div className="w-10 h-10 rounded-full bg-brand/15 ring-2 ring-brand/30 text-brand text-sm font-bold flex items-center justify-center shrink-0">
                    {initials(t.name)}
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-white text-sm">{t.name}</div>
                    <div className="text-white/40 text-xs">{t.role}</div>
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

      {/* Leave a review CTA */}
      <section className="py-20 bg-[#0a0a0a] border-t border-white/5">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-display font-bold text-white mb-4">
              Had Work Done By Us?
            </h2>
            <p className="text-white/50 mb-8 max-w-lg mx-auto">
              We&apos;d love to hear your feedback. Leave us a Google review — it takes 30 seconds and helps other customers find us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://g.page/r/CbI8a2yoeQHhEBM/review"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-brand text-[#0a0a0a] font-bold rounded-xl hover:bg-cyan-light transition-all duration-300"
              >
                <Star size={18} className="fill-[#0a0a0a]" />
                Leave a Google Review
                <ExternalLink size={16} />
              </a>
              <Link href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white font-bold rounded-xl hover:border-brand hover:text-brand transition-all duration-300">
                Request a Free Quote <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
