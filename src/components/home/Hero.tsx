"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Star, ShieldCheck } from "lucide-react";

export default function Hero() {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (bgRef.current) {
        bgRef.current.style.transform = `translateY(${window.scrollY * 0.35}px)`;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-charcoal-950">
      {/* Parallax background */}
      <div className="absolute inset-0 overflow-hidden">
        <div ref={bgRef} className="absolute inset-0 scale-[1.15] will-change-transform">
          <Image
            src="/images/kitchen-2.jpg"
            alt="Premium carpentry by Smith Carpentry"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950/95 via-charcoal-950/80 to-charcoal-950/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/70 via-transparent to-transparent" />
        {/* Brand colour tint */}
        <div className="absolute inset-0 bg-brand/5 mix-blend-overlay" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 md:px-8 pt-28 pb-20">
        <div className="max-w-3xl">

          {/* Eyebrow badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/8 border border-brand/40 backdrop-blur-sm mb-7"
          >
            <Star size={13} className="text-brand fill-brand" />
            <span className="text-white/90 text-sm font-medium">5-Star Rated · 15+ Years Experience</span>
            <Star size={13} className="text-brand fill-brand" />
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-[1.1] mb-6"
          >
            Premium Carpentry{" "}
            <span className="gradient-text">&amp; Joinery</span>
            <br className="hidden sm:block" />
            <span className="text-white"> Across the UK</span>
          </motion.h1>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="text-lg md:text-xl text-white/70 leading-relaxed mb-10 max-w-2xl"
          >
            Expert craftsmanship delivering bespoke residential and commercial projects
            with precision, quality and attention to detail.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.38 }}
            className="flex flex-wrap gap-4 mb-12"
          >
            <Link
              href="/portfolio"
              className="group flex items-center gap-2 px-8 py-4 bg-brand text-charcoal-950 font-bold rounded-xl hover:bg-brand-400 hover:shadow-glow-brand transition-all duration-300 text-base"
            >
              View Our Work
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="flex items-center gap-2 px-8 py-4 border border-white/30 text-white font-bold rounded-xl hover:border-brand hover:text-brand hover:bg-brand/5 transition-all duration-300 text-base"
            >
              Request a Quote
            </Link>
          </motion.div>

          {/* Trust signals */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="flex flex-wrap items-center gap-6"
          >
            {["Fully Insured", "Free Quotes", "5★ Reviews", "UK Nationwide"].map((badge) => (
              <div key={badge} className="flex items-center gap-2">
                <ShieldCheck size={14} className="text-brand" />
                <span className="text-white/60 text-sm font-medium">{badge}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        onClick={() => document.getElementById("stats")?.scrollIntoView({ behavior: "smooth" })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 hover:text-brand transition-colors"
        aria-label="Scroll down"
      >
        <span className="text-[10px] tracking-[0.2em] uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
          <ChevronDown size={18} />
        </motion.div>
      </motion.button>
    </section>
  );
}
