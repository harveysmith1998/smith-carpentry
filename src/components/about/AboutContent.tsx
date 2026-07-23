"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Award, Users, Clock, Shield } from "lucide-react";

const timeline = [
  { year: "Age 16", title: "Apprentice Competition Winner", desc: "Won carpentry apprentice competitions at 16 — an early sign of the attention to detail and drive that defines everything Harvey does." },
  { year: "10+", title: "Years in the Trade", desc: "Over a decade of hands-on experience across first fix, second fix, bespoke joinery, commercial fit-outs and everything in between." },
  { year: "500+", title: "Projects Completed", desc: "From single rooms to full commercial builds — every project completed to the same uncompromising standard." },
  { year: "Always", title: "Perfection at Own Cost", desc: "Harvey's aim is perfection, even when that means going the extra mile at his own expense. Customers come first, always." },
];

const values = [
  { icon: <Award size={22} />,  title: "Quality First",    desc: "We never compromise on materials or finish. Every project is treated as our most important." },
  { icon: <Users size={22} />,  title: "Client Focused",   desc: "We listen, advise and communicate throughout — you are always in control of your project." },
  { icon: <Clock size={22} />,  title: "Reliable",         desc: "We show up when we say we will and finish when we say we will. Always." },
  { icon: <Shield size={22} />, title: "Fully Insured",    desc: "Public liability and professional indemnity insurance on every project. No exceptions." },
];

export default function AboutContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-charcoal-950 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/kitchens/cover.jpg"
            alt="Smith Carpentry workshop" fill className="object-cover opacity-20" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal-950/60 to-charcoal-950" />
        </div>
        <div className="relative container mx-auto px-4 md:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="text-brand font-semibold text-sm uppercase tracking-widest mb-4 block">Our Story</span>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
              Built on Craftsmanship,<br /><span className="gradient-text">Driven by Quality</span>
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Smith Carpentry has spent 10+ years earning the trust of homeowners, developers and
              commercial clients across Nottinghamshire through exceptional workmanship.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-white dark:bg-charcoal-950">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <div className="relative rounded-2xl overflow-hidden shadow-luxury">
                <div className="img-zoom relative h-[560px]">
                  <Image src="/images/harvey-working.jpg" alt="Harvey Smith at work" fill className="object-cover object-center"
                    sizes="(max-width:1024px) 100vw,50vw" />
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <span className="text-brand font-semibold text-sm uppercase tracking-widest mb-3 block">The Man Behind the Work</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-charcoal-950 dark:text-white mb-6">
                Harvey Smith — Carpenter & Joiner
              </h2>
              <div className="space-y-4 text-charcoal-500 dark:text-white/60 text-base leading-relaxed mb-8">
                <p>
                  Harvey has been in the trade for over 10 years, but his passion for carpentry
                  started long before that. At just 16 years old he was winning apprentice
                  competitions — proof, even then, of a natural eye for detail and a drive
                  to be the best.
                </p>
                <p>
                  That same mindset shapes every project today. Whether it&apos;s a bespoke kitchen,
                  a commercial shopfit, or first-fix framing on a new build — Harvey brings the
                  same focus, the same care, and the same commitment to getting it right.
                </p>
                <p>
                  His aim is perfection, even at his own cost. Customers always come first —
                  and that&apos;s not just a line. It&apos;s the way he has worked from day one.
                </p>
              </div>
              <ul className="space-y-3 mb-8">
                {["10+ years professional experience", "Apprentice competition winner at 16", "Keen eye for detail on every job", "Customer satisfaction is always the priority", "12-month workmanship guarantee"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-charcoal-700 dark:text-white/70 text-sm">
                    <CheckCircle2 size={17} className="text-brand shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-brand text-charcoal-950 font-bold rounded-xl hover:bg-brand-400 hover:shadow-glow-brand transition-all duration-300">
                Work With Us <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-charcoal-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-brand/5" />
        <div className="absolute top-0 left-0 right-0 h-px bg-brand/20" />
        <div className="relative container mx-auto px-4 md:px-8 text-center max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <span className="text-brand font-semibold text-sm uppercase tracking-widest mb-4 block">Our Mission</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              &ldquo;My aim is perfection — even at my own cost. I&apos;ve always had a keen eye
              for detail and I&apos;m always driven to keep customers happy. That&apos;s never changed.&rdquo;
            </h2>
            <p className="text-white/50">— Harvey Smith, Smith Carpentry</p>
          </motion.div>
        </div>
      </section>

      {/* Core values */}
      <section className="section-padding bg-[#F5F5F5] dark:bg-charcoal-900">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.6 }} className="text-center mb-12">
            <span className="text-brand font-semibold text-sm uppercase tracking-widest mb-3 block">What We Stand For</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-charcoal-950 dark:text-white">Our Core Values</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => (
              <motion.div key={v.title}
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white dark:bg-charcoal-950 rounded-2xl p-6 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-brand/10 text-brand flex items-center justify-center mb-4 group-hover:bg-brand group-hover:text-charcoal-950 transition-all">
                  {v.icon}
                </div>
                <h3 className="font-bold text-charcoal-950 dark:text-white mb-2">{v.title}</h3>
                <p className="text-charcoal-500 dark:text-white/50 text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-white dark:bg-charcoal-950">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.6 }} className="text-center mb-14">
            <span className="text-brand font-semibold text-sm uppercase tracking-widest mb-3 block">By the Numbers</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-charcoal-950 dark:text-white">What Drives Smith Carpentry</h2>
          </motion.div>
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-brand/20" />
            <div className="space-y-10">
              {timeline.map((item, i) => (
                <motion.div key={item.year}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.55, delay: i * 0.08 }}
                  className={`relative flex items-start gap-6 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} md:gap-0`}
                >
                  {/* Year marker */}
                  <div className="relative z-10 flex-shrink-0 w-16 md:absolute md:left-1/2 md:-translate-x-1/2">
                    <div className="w-16 h-16 rounded-full bg-brand text-charcoal-950 font-bold text-sm flex items-center justify-center shadow-glow-brand">
                      {item.year}
                    </div>
                  </div>
                  <div className={`flex-1 bg-[#F5F5F5] dark:bg-charcoal-900 rounded-xl p-5 md:max-w-[44%] ${i % 2 === 0 ? "md:mr-auto md:pr-12" : "md:ml-auto md:pl-12"}`}>
                    <h3 className="font-bold text-charcoal-950 dark:text-white mb-1">{item.title}</h3>
                    <p className="text-charcoal-500 dark:text-white/50 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-charcoal-950 border-t border-white/5">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Let&apos;s Build Something Great Together
            </h2>
            <p className="text-white/50 mb-8 max-w-xl mx-auto">
              Whether it&apos;s a single room transformation or a full commercial fit-out, we&apos;re ready to deliver.
            </p>
            <Link href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-brand text-charcoal-950 font-bold rounded-xl hover:bg-brand-400 hover:shadow-glow-brand transition-all duration-300">
              Get a Free Quote <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
