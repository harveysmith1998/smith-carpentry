"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Award, Users, Clock, Shield } from "lucide-react";

const timeline = [
  { year: "2009", title: "Smith Carpentry Founded", desc: "Started as a sole trader taking on first fix and second fix carpentry across Nottinghamshire." },
  { year: "2012", title: "Commercial Division Launched", desc: "Expanded into shopfitting and commercial fit-outs — restaurants, offices, retail." },
  { year: "2015", title: "Team Growth", desc: "Grew to a team of specialist carpenters, taking on larger residential and commercial projects." },
  { year: "2018", title: "Garden Rooms & Extensions", desc: "Launched a dedicated garden rooms division, delivering turnkey insulated builds." },
  { year: "2021", title: "500 Projects Milestone", desc: "Passed 500 completed projects with a 5-star average rating across all review platforms." },
  { year: "2024", title: "Nationwide Coverage", desc: "Now operating across the whole of Nottinghamshire, with specialist teams for commercial and residential work." },
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
                <div className="img-zoom relative h-[500px]">
                  <Image src="/images/panelling/cover.jpg" alt="Harvey Smith at work" fill className="object-cover"
                    sizes="(max-width:1024px) 100vw,50vw" />
                </div>
              </div>
              {/* Floating stat */}
              <div className="absolute -bottom-4 -right-4 bg-brand rounded-xl p-5 shadow-luxury-lg text-charcoal-950">
                <div className="text-3xl font-display font-bold">500+</div>
                <div className="text-xs font-bold uppercase tracking-wide">Projects Done</div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <span className="text-brand font-semibold text-sm uppercase tracking-widest mb-3 block">Who We Are</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-charcoal-950 dark:text-white mb-6">
                10+ Years of Premium Carpentry
              </h2>
              <div className="space-y-4 text-charcoal-500 dark:text-white/60 text-base leading-relaxed mb-8">
                <p>
                  Smith Carpentry was founded in 2009 by Harvey Smith, a time-served carpenter with
                  a passion for quality workmanship and an eye for detail. What started as a local
                  joinery service has grown into one of Nottinghamshire&apos;s most trusted carpentry
                  businesses.
                </p>
                <p>
                  We serve homeowners who demand the best, property developers who need reliable
                  tradespeople, and commercial clients who need fit-outs delivered on time and
                  to spec. From first fix frames to bespoke furniture — we do it all, and we do
                  it properly.
                </p>
                <p>
                  Every project is backed by our commitment to quality, clear communication and
                  a finish that speaks for itself.
                </p>
              </div>
              <ul className="space-y-3 mb-8">
                {["10+ years professional experience", "Fully insured & certified", "Residential & commercial specialists", "Fixed-price, transparent quotes", "12-month workmanship guarantee"].map((item) => (
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
              &ldquo;To deliver carpentry and joinery that stands the test of time — crafted with
              skill, completed with pride and built to exceed every expectation.&rdquo;
            </h2>
            <p className="text-white/50">— Harvey Smith, Founder</p>
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
            <span className="text-brand font-semibold text-sm uppercase tracking-widest mb-3 block">Our Journey</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-charcoal-950 dark:text-white">The Smith Carpentry Story</h2>
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
