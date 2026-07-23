"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { SERVICES } from "@/lib/data";

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-charcoal-950 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/panelling/cover.jpg" alt="Smith Carpentry Services" fill
            className="object-cover opacity-15" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal-950/70 to-charcoal-950" />
        </div>
        <div className="relative container mx-auto px-4 md:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="text-brand text-sm font-semibold uppercase tracking-widest mb-4 block">What We Offer</span>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              From structural first fix to premium bespoke joinery — we deliver exceptional results
              across every trade, residential and commercial.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services grid */}
      <section className="section-padding bg-white dark:bg-charcoal-950">
        <div className="container mx-auto px-4 md:px-8">
          <div className="space-y-20">
            {SERVICES.map((svc, i) => (
              <motion.div
                key={svc.slug}
                initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.05 }}
                id={svc.slug}
                className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
              >
                {/* Image */}
                <div className={`relative ${i % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <div className="rounded-2xl overflow-hidden shadow-luxury">
                    <div className="img-zoom relative h-[420px]">
                      <Image src={svc.image} alt={svc.title} fill className="object-cover"
                        sizes="(max-width:1024px) 100vw,50vw" />
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/40 to-transparent" />
                    </div>
                  </div>
                  {/* Icon badge */}
                  <div className="absolute -bottom-5 -left-5 w-16 h-16 rounded-2xl bg-brand text-3xl flex items-center justify-center shadow-glow-brand">
                    {svc.icon}
                  </div>
                </div>

                {/* Content */}
                <div className={i % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                  <span className="text-brand text-sm font-semibold uppercase tracking-widest mb-3 block">
                    {i + 1 < 10 ? `0${i + 1}` : i + 1} / {SERVICES.length < 10 ? `0${SERVICES.length}` : SERVICES.length}
                  </span>
                  <h2 className="text-3xl md:text-4xl font-display font-bold text-charcoal-950 dark:text-white mb-4">
                    {svc.title}
                  </h2>
                  <p className="text-charcoal-500 dark:text-white/60 text-base leading-relaxed mb-6">
                    {svc.description}
                  </p>

                  <div className="grid grid-cols-2 gap-2 mb-8">
                    {svc.features.map((f) => (
                      <div key={f} className="flex items-center gap-2 text-sm text-charcoal-700 dark:text-white/70">
                        <CheckCircle2 size={15} className="text-brand shrink-0" />
                        {f}
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <Link href={`/services/${svc.slug}`}
                      className="flex items-center gap-2 px-6 py-3 bg-brand text-charcoal-950 font-bold rounded-xl hover:bg-brand-400 hover:shadow-glow-brand transition-all duration-200">
                      Learn More <ArrowRight size={16} />
                    </Link>
                    <Link href="/contact"
                      className="flex items-center gap-2 px-6 py-3 border border-charcoal-200 dark:border-white/15 text-charcoal-950 dark:text-white font-semibold rounded-xl hover:border-brand hover:text-brand transition-all duration-200">
                      Get a Quote
                    </Link>
                  </div>
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
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Can&apos;t See What You Need?
            </h2>
            <p className="text-white/50 mb-8">
              We offer a broad range of carpentry and joinery services. Get in touch and we&apos;ll find a solution.
            </p>
            <Link href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-brand text-charcoal-950 font-bold rounded-xl hover:bg-brand-400 hover:shadow-glow-brand transition-all duration-300">
              Contact Us <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
