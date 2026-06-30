"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { STATS } from "@/lib/data";

function useCountUp(target: number, duration = 2000, started = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!started) return;
    const t0 = Date.now();
    const tick = () => {
      const p = Math.min((Date.now() - t0) / duration, 1);
      setCount(Math.round((1 - Math.pow(1 - p, 3)) * target));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [target, duration, started]);
  return count;
}

function StatCard({ value, suffix, label, index, started }: {
  value: number; suffix: string; label: string; index: number; started: boolean;
}) {
  const count = useCountUp(value, 2000, started);
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="text-center px-4"
    >
      <div className="text-5xl md:text-6xl font-display font-bold gradient-text mb-2 tabular-nums">
        {count}{suffix}
      </div>
      <div className="text-white/50 text-sm uppercase tracking-widest font-medium">{label}</div>
    </motion.div>
  );
}

export default function Stats() {
  const ref     = useRef<HTMLDivElement>(null);
  const [go, setGo] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setGo(true); obs.disconnect(); } }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="stats" ref={ref} className="bg-charcoal-900 py-20 border-y border-white/5">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 divide-x divide-white/8">
          {STATS.map((s, i) => (
            <StatCard key={s.label} value={s.value} suffix={s.suffix} label={s.label} index={i} started={go} />
          ))}
        </div>
      </div>
    </section>
  );
}
