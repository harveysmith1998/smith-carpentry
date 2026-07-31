"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Phone, MapPin } from "lucide-react";
import { SERVICES, COMPANY, TESTIMONIALS } from "@/lib/data";
import { Star } from "lucide-react";

interface LocationPageProps {
  city: string;
  county: string;
  intro: string;
  nearbyAreas: string[];
  heroImage: string;
}

const featuredServices = [
  "bespoke-carpentry",
  "kitchens",
  "wardrobes",
  "staircases",
  "garden-rooms",
  "shopfitting",
];

export default function LocationPage({ city, county, intro, nearbyAreas, heroImage }: LocationPageProps) {
  const services = SERVICES.filter((s) => featuredServices.includes(s.slug));
  const reviews = TESTIMONIALS.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-24 bg-charcoal-950 overflow-hidden">
        <div className="absolute inset-0">
          <Image src={heroImage} alt={`Carpenter ${city}`} fill className="object-cover opacity-15" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal-950/70 to-charcoal-950" />
        </div>
        <div className="relative container mx-auto px-4 md:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="flex items-center gap-2 mb-4">
              <MapPin size={14} className="text-brand" />
              <span className="text-brand text-sm font-semibold uppercase tracking-widest">{county}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-5">
              Carpenter in <span className="gradient-text">{city}</span>
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mb-8">{intro}</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact"
                className="flex items-center gap-2 px-7 py-3.5 bg-brand text-charcoal-950 font-bold rounded-xl hover:bg-brand-400 hover:shadow-glow-brand transition-all">
                Get a Free Quote <ArrowRight size={16} />
              </Link>
              <a href={`tel:${COMPANY.phone}`}
                className="flex items-center gap-2 px-7 py-3.5 border border-white/20 text-white font-semibold rounded-xl hover:border-brand hover:text-brand transition-all">
                <Phone size={15} /> {COMPANY.phone}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="section-padding bg-white dark:bg-charcoal-950">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0 }} transition={{ duration: 0.7 }}>
              <span className="text-brand text-sm font-semibold uppercase tracking-widest mb-3 block">Why Smith Carpentry</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-charcoal-950 dark:text-white mb-6">
                Your Local Carpenter in {city}
              </h2>
              <p className="text-charcoal-500 dark:text-white/60 mb-6">
                Based in Sutton-in-Ashfield, we&apos;ve been delivering premium carpentry and joinery across {city} and {county} for over 10 years. Every job is carried out to the highest standard — no subcontractors, no shortcuts.
              </p>
              <div className="space-y-3">
                {[
                  "Free, fixed-price quotes with no hidden costs",
                  "Fully insured and qualified carpenter",
                  "10+ years experience across Nottinghamshire",
                  "Residential and commercial projects",
                  "All work guaranteed",
                ].map((point) => (
                  <div key={point} className="flex items-center gap-3">
                    <CheckCircle2 size={16} className="text-brand shrink-0" />
                    <span className="text-charcoal-700 dark:text-white/70 text-sm">{point}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0 }} transition={{ duration: 0.7 }}>
              <div className="relative rounded-2xl overflow-hidden shadow-luxury h-[420px]">
                <Image src="/images/kitchens/cover.jpg" alt={`Carpentry work in ${city}`} fill className="object-cover" sizes="(max-width:1024px) 100vw,50vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/40 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-[#F5F5F5] dark:bg-charcoal-900">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0 }} transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-brand text-sm font-semibold uppercase tracking-widest mb-3 block">What We Offer</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-charcoal-950 dark:text-white">
              Carpentry Services in {city}
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc, i) => (
              <motion.div key={svc.slug}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0 }} transition={{ duration: 0.5, delay: i * 0.08 }}>
                <Link href={`/services/${svc.slug}`}
                  className="group block bg-white dark:bg-charcoal-950 rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
                  <div className="relative h-44 overflow-hidden">
                    <Image src={svc.image} alt={svc.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width:768px) 100vw,33vw" />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xl">{svc.icon}</span>
                      <h3 className="font-bold text-charcoal-950 dark:text-white group-hover:text-brand transition-colors">{svc.title}</h3>
                    </div>
                    <p className="text-charcoal-500 dark:text-white/50 text-xs leading-relaxed line-clamp-2">{svc.shortDesc}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/services"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-charcoal-200 dark:border-white/15 text-charcoal-950 dark:text-white font-semibold rounded-xl hover:border-brand hover:text-brand transition-all">
              View All Services <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="section-padding bg-white dark:bg-charcoal-950">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0 }} transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-brand text-sm font-semibold uppercase tracking-widest mb-3 block">Google Reviews</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-charcoal-950 dark:text-white">
              What Customers Say
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0 }} transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-[#F5F5F5] dark:bg-charcoal-900 rounded-2xl p-6">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, j) => <Star key={j} size={13} className="text-brand fill-brand" />)}
                </div>
                <p className="text-charcoal-600 dark:text-white/60 text-sm italic leading-relaxed mb-4">
                  &ldquo;{r.text.slice(0, 140)}...&rdquo;
                </p>
                <span className="text-charcoal-950 dark:text-white font-semibold text-sm">{r.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby areas */}
      <section className="section-padding bg-[#F5F5F5] dark:bg-charcoal-900">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-brand text-sm font-semibold uppercase tracking-widest mb-3 block">Coverage</span>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-charcoal-950 dark:text-white mb-4">
              Also Covering Nearby Areas
            </h2>
            <p className="text-charcoal-500 dark:text-white/60 mb-8 max-w-xl mx-auto">
              Based close to {city}, we cover the whole of {county} including:
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {nearbyAreas.map((area) => (
                <span key={area} className="px-5 py-2.5 rounded-full bg-white dark:bg-charcoal-950 border border-charcoal-200 dark:border-white/10 text-charcoal-700 dark:text-white/80 text-sm font-medium">
                  {area}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-charcoal-950">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-brand text-sm font-semibold uppercase tracking-widest mb-4 block">Get Started</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Ready for Your {city} Project?
            </h2>
            <p className="text-white/50 mb-8 max-w-xl mx-auto">
              Get a free, fixed-price quote for any carpentry or joinery work in {city} and the surrounding {county} area.
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
