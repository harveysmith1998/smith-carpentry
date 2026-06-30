"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, ArrowRight } from "lucide-react";
import { COMPANY } from "@/lib/data";

export default function ContactCTA() {
  return (
    <section className="py-24 relative overflow-hidden bg-charcoal-950">
      {/* Cyan glow blobs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-brand/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-brand/8 rounded-full blur-3xl" />
      <div className="absolute inset-0 border-y border-brand/10" />

      <div className="relative container mx-auto px-4 md:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7 }}
        >
          <span className="text-brand font-semibold text-sm uppercase tracking-widest mb-4 block">Start Your Project</span>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
            Ready to Transform
            <br />
            <span className="gradient-text">Your Space?</span>
          </h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto mb-10">
            Get a free, no-obligation quote. We&apos;ll visit your site, discuss your project and
            deliver a detailed proposal within 48 hours.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <Link
              href="/contact"
              className="flex items-center gap-2 px-8 py-4 bg-brand text-charcoal-950 font-bold rounded-xl hover:bg-brand-400 hover:shadow-glow-brand transition-all duration-300 hover:scale-105"
            >
              Request a Free Quote <ArrowRight size={18} />
            </Link>
            <a
              href={`tel:${COMPANY.phone}`}
              className="flex items-center gap-2 px-8 py-4 border border-white/20 text-white font-bold rounded-xl hover:border-brand hover:text-brand transition-all duration-300"
            >
              <Phone size={16} /> {COMPANY.phone}
            </a>
          </div>

          <p className="text-white/30 text-sm">
            Or email us at <a href={`mailto:${COMPANY.email}`} className="text-brand hover:underline">{COMPANY.email}</a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
