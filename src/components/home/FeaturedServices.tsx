"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SERVICES } from "@/lib/data";

const featured = SERVICES.slice(0, 6);

export default function FeaturedServices() {
  return (
    <section className="section-padding bg-white dark:bg-charcoal-950">
      <div className="container mx-auto px-4 md:px-8">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="text-brand font-semibold text-sm uppercase tracking-widest mb-3 block">What We Do</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-charcoal-950 dark:text-white mb-4">
            Our Services
          </h2>
          <p className="text-charcoal-500 dark:text-white/50 text-lg">
            From structural carpentry to bespoke joinery, we deliver premium results across every trade.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((svc, i) => (
            <motion.div
              key={svc.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.09 }}
            >
              <Link
                href={`/services/${svc.slug}`}
                className="group block rounded-2xl overflow-hidden bg-[#F5F5F5] dark:bg-charcoal-900 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1.5"
              >
                <div className="relative h-52 img-zoom">
                  <Image
                    src={svc.image}
                    alt={svc.title}
                    fill
                    className="object-cover"
                    sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw,33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/70 to-transparent" />
                  <span className="absolute top-4 left-4 text-2xl">{svc.icon}</span>
                  {/* Cyan accent line on hover */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-display font-bold text-charcoal-950 dark:text-white mb-2 group-hover:text-brand transition-colors">
                    {svc.title}
                  </h3>
                  <p className="text-charcoal-500 dark:text-white/50 text-sm leading-relaxed mb-4 line-clamp-2">
                    {svc.shortDesc}
                  </p>
                  <div className="flex items-center gap-2 text-brand font-semibold text-sm group-hover:gap-3 transition-all">
                    Learn More <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-4 bg-charcoal-950 dark:bg-brand text-white dark:text-charcoal-950 font-bold rounded-xl hover:bg-brand hover:text-charcoal-950 transition-all duration-300 hover:shadow-glow-brand"
          >
            View All Services <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
