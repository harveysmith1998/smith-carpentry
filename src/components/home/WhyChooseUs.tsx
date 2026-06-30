"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { WHY_CHOOSE_US } from "@/lib/data";

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-white dark:bg-charcoal-950">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-luxury">
              <div className="img-zoom relative h-[540px]">
                <Image
                  src="/images/feature-wall-1.jpg"
                  alt="Smith Carpentry quality workmanship"
                  fill className="object-cover"
                  sizes="(max-width:1024px) 100vw,50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/50 to-transparent" />
              </div>
            </div>
            {/* Badge */}
            <div className="absolute -bottom-6 -right-6 bg-brand rounded-2xl p-6 shadow-luxury-lg text-charcoal-950">
              <div className="text-4xl font-display font-bold">15+</div>
              <div className="text-xs font-bold uppercase tracking-wider mt-1">Years of<br />Excellence</div>
            </div>
            {/* Top badge */}
            <div className="absolute top-6 left-6 bg-charcoal-950/80 backdrop-blur-sm border border-brand/30 rounded-xl px-4 py-3">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-brand" />
                <span className="text-white text-sm font-medium">Fully Insured</span>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}
          >
            <span className="text-brand font-semibold text-sm uppercase tracking-widest mb-3 block">
              Why Smith Carpentry
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-charcoal-950 dark:text-white mb-6">
              Craftsmanship You Can <span className="gradient-text">Trust</span>
            </h2>
            <p className="text-charcoal-500 dark:text-white/50 text-lg leading-relaxed mb-10">
              With over 15 years of experience, Smith Carpentry has built a reputation for delivering
              premium results on every project — on time, within budget, and to the highest standard.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
              {WHY_CHOOSE_US.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.07 }}
                  className="flex gap-3 p-4 rounded-xl bg-[#F5F5F5] dark:bg-charcoal-900 hover:bg-brand/8 dark:hover:bg-brand/10 transition-colors duration-200 group"
                >
                  <span className="text-xl shrink-0 mt-0.5">{item.icon}</span>
                  <div>
                    <div className="font-bold text-charcoal-950 dark:text-white text-sm mb-0.5 group-hover:text-brand transition-colors">
                      {item.title}
                    </div>
                    <div className="text-charcoal-500 dark:text-white/40 text-xs leading-relaxed">
                      {item.description}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-8 py-4 bg-brand text-charcoal-950 font-bold rounded-xl hover:bg-brand-400 hover:shadow-glow-brand transition-all duration-300"
            >
              Learn More About Us <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
