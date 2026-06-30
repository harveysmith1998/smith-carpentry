"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, CheckCircle2, Phone } from "lucide-react";
import { SERVICES, COMPANY, TESTIMONIALS } from "@/lib/data";
import { Star } from "lucide-react";

interface Service {
  slug: string; title: string; shortDesc: string; description: string;
  features: string[]; image: string; gallery: string[]; icon: string;
}

export default function ServiceDetail({ service }: { service: Service }) {
  const related = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-24 bg-charcoal-950 overflow-hidden">
        <div className="absolute inset-0">
          <Image src={service.image} alt={service.title} fill className="object-cover opacity-20" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal-950/80 to-charcoal-950" />
        </div>
        <div className="relative container mx-auto px-4 md:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <Link href="/services" className="inline-flex items-center gap-2 text-brand text-sm mb-6 hover:gap-3 transition-all">
              <ArrowLeft size={14} /> Back to Services
            </Link>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-4xl">{service.icon}</span>
              <span className="text-brand text-sm font-semibold uppercase tracking-widest">Smith Carpentry</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-5">
              {service.title}
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mb-8">{service.description}</p>
            <div className="flex gap-4">
              <Link href="/contact"
                className="flex items-center gap-2 px-7 py-3.5 bg-brand text-charcoal-950 font-bold rounded-xl hover:bg-brand-400 hover:shadow-glow-brand transition-all">
                Get a Quote <ArrowRight size={16} />
              </Link>
              <a href={`tel:${COMPANY.phone}`}
                className="flex items-center gap-2 px-7 py-3.5 border border-white/20 text-white font-semibold rounded-xl hover:border-brand hover:text-brand transition-all">
                <Phone size={15} /> Call Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-white dark:bg-charcoal-950">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-3 gap-12">

            {/* Gallery */}
            <div className="lg:col-span-2 space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.gallery.map((img, i) => (
                  <motion.div key={i}
                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                    className={`img-zoom rounded-2xl overflow-hidden shadow-card ${i === 0 ? "md:col-span-2 h-72" : "h-52"}`}
                  >
                    <Image src={img} alt={`${service.title} project ${i + 1}`} fill className="object-cover"
                      sizes="(max-width:768px) 100vw,50vw" />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Features */}
              <div className="bg-[#F5F5F5] dark:bg-charcoal-900 rounded-2xl p-6">
                <h3 className="font-display font-bold text-charcoal-950 dark:text-white text-xl mb-4">What&apos;s Included</h3>
                <ul className="space-y-3">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-charcoal-600 dark:text-white/60 text-sm">
                      <CheckCircle2 size={16} className="text-brand shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Card */}
              <div className="bg-charcoal-950 dark:bg-charcoal-900 border border-brand/20 rounded-2xl p-6">
                <h3 className="font-display font-bold text-white text-xl mb-2">Ready to Start?</h3>
                <p className="text-white/50 text-sm mb-5">Get a free, fixed-price quote for your {service.title.toLowerCase()} project.</p>
                <Link href="/contact"
                  className="block text-center px-6 py-3 bg-brand text-charcoal-950 font-bold rounded-xl hover:bg-brand-400 hover:shadow-glow-brand transition-all mb-3">
                  Request a Quote
                </Link>
                <a href={`tel:${COMPANY.phone}`}
                  className="flex items-center justify-center gap-2 text-white/60 hover:text-brand text-sm transition-colors">
                  <Phone size={13} /> {COMPANY.phone}
                </a>
              </div>

              {/* Testimonial snippet */}
              <div className="bg-[#F5F5F5] dark:bg-charcoal-900 rounded-2xl p-6 border-l-4 border-brand">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => <Star key={i} size={13} className="text-brand fill-brand" />)}
                </div>
                <p className="text-charcoal-600 dark:text-white/60 text-sm italic leading-relaxed mb-3">
                  &ldquo;{TESTIMONIALS[0].text.slice(0, 120)}...&rdquo;
                </p>
                <span className="text-charcoal-950 dark:text-white font-semibold text-sm">{TESTIMONIALS[0].name}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related services */}
      <section className="section-padding bg-[#F5F5F5] dark:bg-charcoal-900">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-charcoal-950 dark:text-white mb-8">Related Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {related.map((s, i) => (
              <motion.div key={s.slug}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link href={`/services/${s.slug}`}
                  className="group block bg-white dark:bg-charcoal-950 rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
                  <div className="img-zoom relative h-40">
                    <Image src={s.image} alt={s.title} fill className="object-cover"
                      sizes="(max-width:768px) 100vw,33vw" />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xl">{s.icon}</span>
                      <h3 className="font-bold text-charcoal-950 dark:text-white group-hover:text-brand transition-colors">{s.title}</h3>
                    </div>
                    <p className="text-charcoal-500 dark:text-white/50 text-xs leading-relaxed line-clamp-2">{s.shortDesc}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
