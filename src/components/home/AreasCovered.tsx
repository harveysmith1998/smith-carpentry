"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { AREAS } from "@/lib/data";

export default function AreasCovered() {
  return (
    <section className="section-padding bg-[#111111] border-y border-white/5">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="text-wood font-semibold text-sm uppercase tracking-widest mb-3 block">Areas Covered</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
            Proudly Serving Nottinghamshire
          </h2>
          <p className="text-white/60 text-lg">
            Based in the heart of Nottinghamshire, we deliver bespoke carpentry and joinery across the
            county and all surrounding areas.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {AREAS.map((area, i) => (
            <motion.span
              key={area}
              initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }} transition={{ duration: 0.35, delay: i * 0.05 }}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-white/80 text-sm font-medium hover:border-wood/40 hover:text-wood transition-all duration-200"
            >
              <MapPin size={14} className="text-wood" />
              {area}
            </motion.span>
          ))}
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }} transition={{ duration: 0.35, delay: AREAS.length * 0.05 }}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-wood/10 border border-wood/40 text-wood text-sm font-semibold"
          >
            & surrounding areas
          </motion.span>
        </div>
      </div>
    </section>
  );
}
