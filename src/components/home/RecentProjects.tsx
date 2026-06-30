"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { PORTFOLIO_ITEMS } from "@/lib/data";

const recent = PORTFOLIO_ITEMS.slice(0, 6);

export default function RecentProjects() {
  return (
    <section className="section-padding bg-[#F5F5F5] dark:bg-charcoal-900">
      <div className="container mx-auto px-4 md:px-8">

        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-12"
        >
          <div>
            <span className="text-brand font-semibold text-sm uppercase tracking-widest mb-3 block">Recent Work</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-charcoal-950 dark:text-white">
              Featured Projects
            </h2>
          </div>
          <Link href="/portfolio" className="flex items-center gap-2 text-brand font-semibold hover:gap-3 transition-all">
            View Full Portfolio <ArrowRight size={16} />
          </Link>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {recent.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.07 }}
              className={`group relative rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 ${i % 5 === 0 ? "md:row-span-2" : ""}`}
              style={{ height: i % 5 === 0 ? "440px" : "210px" }}
            >
              <div className="img-zoom absolute inset-0">
                <Image src={p.image} alt={p.title} fill className="object-cover"
                  sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw,33vw" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/90 via-charcoal-950/20 to-transparent opacity-70 group-hover:opacity-95 transition-opacity duration-300" />

              {/* Category */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full bg-brand text-charcoal-950 text-xs font-bold">
                  {p.category}
                </span>
              </div>

              {/* Info */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="text-white font-display font-bold text-lg mb-1 translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                  {p.title}
                </h3>
                <p className="text-white/60 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 mb-2">
                  {p.description}
                </p>
                <Link href="/portfolio"
                  className="text-brand text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1">
                  View Project <ArrowRight size={13} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
