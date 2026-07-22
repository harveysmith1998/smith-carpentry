"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, BadgeCheck, Clock, Building2, ShieldCheck, Ruler, MapPin } from "lucide-react";

const points = [
  { icon: <BadgeCheck size={18} />, text: "Trusted qualified carpenter" },
  { icon: <Clock size={18} />,      text: "10+ years experience" },
  { icon: <Building2 size={18} />,  text: "Domestic & Commercial" },
  { icon: <ShieldCheck size={18} />, text: "Fully insured" },
  { icon: <Ruler size={18} />,      text: "Attention to detail" },
  { icon: <MapPin size={18} />,     text: "Based in Nottinghamshire" },
];

export default function AboutSection() {
  return (
    <section className="section-padding bg-[#0a0a0a]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}
          >
            <span className="text-wood font-semibold text-sm uppercase tracking-widest mb-3 block">About Smith Carpentry</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
              Craftsmanship You Can <span className="gradient-text">Trust</span>
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-8">
              Smith Carpentry is a trusted, qualified carpenter with over 10 years of experience serving
              homeowners and businesses across Nottinghamshire. From bespoke joinery to complete commercial
              fit-outs, every project is delivered with precision, quality and genuine attention to detail.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {points.map((p, i) => (
                <motion.div
                  key={p.text}
                  initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.07 }}
                  className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-wood/40 transition-colors duration-200"
                >
                  <span className="w-9 h-9 rounded-lg bg-wood/10 text-wood flex items-center justify-center shrink-0">
                    {p.icon}
                  </span>
                  <span className="text-white/80 text-sm font-medium">{p.text}</span>
                </motion.div>
              ))}
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-8 py-4 bg-wood text-[#0a0a0a] font-bold rounded-xl hover:bg-wood-light hover:shadow-glow-brand transition-all duration-300"
            >
              More About Us <ArrowRight size={18} />
            </Link>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-luxury border border-white/10">
              <div className="img-zoom relative h-[520px]">
                <Image
                  src="/images/kitchen-68.jpg"
                  alt="Bespoke shaker kitchen by Smith Carpentry"
                  fill className="object-cover"
                  sizes="(max-width:1024px) 100vw,50vw"
                />
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-wood rounded-2xl p-6 shadow-luxury-lg text-[#0a0a0a]">
              <div className="text-4xl font-display font-bold">10+</div>
              <div className="text-xs font-bold uppercase tracking-wider mt-1">Years of<br />Experience</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
