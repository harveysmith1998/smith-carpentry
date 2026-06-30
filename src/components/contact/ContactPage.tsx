"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, MapPin, Clock, ChevronDown, CheckCircle2, Send } from "lucide-react";
import { COMPANY, FAQS } from "@/lib/data";

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-charcoal-100 dark:border-white/10 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-[#F5F5F5] dark:hover:bg-charcoal-900 transition-colors"
      >
        <span className="font-semibold text-charcoal-950 dark:text-white pr-4">{q}</span>
        <ChevronDown size={18} className={`text-brand shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 text-charcoal-500 dark:text-white/60 text-sm leading-relaxed border-t border-charcoal-100 dark:border-white/8 pt-4">
              {a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ContactPage() {
  const [form,    setForm]    = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [status,  setStatus]  = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // In production, wire this to your API route or a service like Resend/Formspree
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("sent");
  };

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-charcoal-950 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand/8 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="relative container mx-auto px-4 md:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="text-brand text-sm font-semibold uppercase tracking-widest mb-4 block">Get In Touch</span>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-5">
              Start Your <span className="gradient-text">Project</span>
            </h1>
            <p className="text-white/60 text-lg max-w-xl mx-auto">
              Ready to transform your space? Get a free, fixed-price quote within 48 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main content */}
      <section className="section-padding bg-white dark:bg-charcoal-950">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-5 gap-12">

            {/* Form — 3 cols */}
            <motion.div
              initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6 }}
              className="lg:col-span-3"
            >
              <h2 className="text-2xl md:text-3xl font-display font-bold text-charcoal-950 dark:text-white mb-2">
                Request a Free Quote
              </h2>
              <p className="text-charcoal-500 dark:text-white/50 mb-8 text-sm">
                Fill in the form below and we&apos;ll be in touch within 24 hours.
              </p>

              {status === "sent" ? (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-16 h-16 rounded-full bg-brand/15 text-brand flex items-center justify-center mb-4">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-charcoal-950 dark:text-white mb-2">Message Sent!</h3>
                  <p className="text-charcoal-500 dark:text-white/50">
                    Thanks for getting in touch. We&apos;ll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-charcoal-700 dark:text-white/70 mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text" required placeholder="Your name"
                        value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-charcoal-200 dark:border-white/15 bg-[#F5F5F5] dark:bg-charcoal-900 text-charcoal-950 dark:text-white placeholder-charcoal-400 dark:placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-charcoal-700 dark:text-white/70 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email" required placeholder="your@email.com"
                        value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-charcoal-200 dark:border-white/15 bg-[#F5F5F5] dark:bg-charcoal-900 text-charcoal-950 dark:text-white placeholder-charcoal-400 dark:placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all text-sm"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-charcoal-700 dark:text-white/70 mb-1.5">
                        Phone Number
                      </label>
                      <input
                        type="tel" placeholder="07700 000000"
                        value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-charcoal-200 dark:border-white/15 bg-[#F5F5F5] dark:bg-charcoal-900 text-charcoal-950 dark:text-white placeholder-charcoal-400 dark:placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-charcoal-700 dark:text-white/70 mb-1.5">
                        Service Required
                      </label>
                      <select
                        value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-charcoal-200 dark:border-white/15 bg-[#F5F5F5] dark:bg-charcoal-900 text-charcoal-950 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all text-sm"
                      >
                        <option value="">Select a service…</option>
                        {["Shopfitting","Bespoke Carpentry","Garden Rooms","Kitchens","Wardrobes","First Fix","Second Fix","Staircases","PVC Windows & Doors","Plasterboarding","Other"].map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-charcoal-700 dark:text-white/70 mb-1.5">
                      Project Details *
                    </label>
                    <textarea
                      required rows={5} placeholder="Tell us about your project — location, scope, timescale…"
                      value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-charcoal-200 dark:border-white/15 bg-[#F5F5F5] dark:bg-charcoal-900 text-charcoal-950 dark:text-white placeholder-charcoal-400 dark:placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all text-sm resize-none"
                    />
                  </div>
                  <button
                    type="submit" disabled={status === "sending"}
                    className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-brand text-charcoal-950 font-bold rounded-xl hover:bg-brand-400 hover:shadow-glow-brand disabled:opacity-60 transition-all duration-200 text-base"
                  >
                    {status === "sending" ? (
                      <><div className="w-5 h-5 border-2 border-charcoal-950/30 border-t-charcoal-950 rounded-full animate-spin" /> Sending…</>
                    ) : (
                      <><Send size={18} /> Send Message</>
                    )}
                  </button>
                  <p className="text-charcoal-400 dark:text-white/30 text-xs text-center">
                    We respond within 24 hours. No spam, ever.
                  </p>
                </form>
              )}
            </motion.div>

            {/* Sidebar — 2 cols */}
            <motion.div
              initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6 }}
              className="lg:col-span-2 space-y-5"
            >
              {/* Contact details */}
              <div className="bg-charcoal-950 rounded-2xl p-6 text-white">
                <h3 className="font-display font-bold text-xl mb-5">Contact Details</h3>
                <div className="space-y-4">
                  <a href={`tel:${COMPANY.phone}`} className="flex items-center gap-3 group">
                    <div className="w-10 h-10 rounded-xl bg-brand/15 text-brand flex items-center justify-center group-hover:bg-brand group-hover:text-charcoal-950 transition-all">
                      <Phone size={16} />
                    </div>
                    <div>
                      <div className="text-white/50 text-xs">Phone</div>
                      <div className="text-white font-medium text-sm group-hover:text-brand transition-colors">{COMPANY.phone}</div>
                    </div>
                  </a>
                  <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-3 group">
                    <div className="w-10 h-10 rounded-xl bg-brand/15 text-brand flex items-center justify-center group-hover:bg-brand group-hover:text-charcoal-950 transition-all">
                      <Mail size={16} />
                    </div>
                    <div>
                      <div className="text-white/50 text-xs">Email</div>
                      <div className="text-white font-medium text-sm group-hover:text-brand transition-colors">{COMPANY.email}</div>
                    </div>
                  </a>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-brand/15 text-brand flex items-center justify-center">
                      <MapPin size={16} />
                    </div>
                    <div>
                      <div className="text-white/50 text-xs">Service Area</div>
                      <div className="text-white font-medium text-sm">UK Nationwide</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="bg-[#F5F5F5] dark:bg-charcoal-900 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Clock size={18} className="text-brand" />
                  <h3 className="font-bold text-charcoal-950 dark:text-white">Business Hours</h3>
                </div>
                <ul className="space-y-2.5">
                  {COMPANY.businessHours.map((h) => (
                    <li key={h.day} className="flex justify-between text-sm">
                      <span className="text-charcoal-500 dark:text-white/50">{h.day}</span>
                      <span className="text-brand font-medium">{h.hours}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 pt-4 border-t border-charcoal-100 dark:border-white/8">
                  <p className="text-charcoal-400 dark:text-white/40 text-xs">
                    Emergency contact available outside these hours for existing clients.
                  </p>
                </div>
              </div>

              {/* WhatsApp */}
              <a
                href={`https://wa.me/${COMPANY.whatsapp}?text=Hi, I'd like a quote for a carpentry project.`}
                target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full py-4 bg-[#25D366] hover:bg-[#1db954] text-white font-bold rounded-xl transition-all hover:scale-[1.02] hover:shadow-luxury"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Chat on WhatsApp
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-[#F5F5F5] dark:bg-charcoal-900">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-center mb-10">
            <span className="text-brand text-sm font-semibold uppercase tracking-widest mb-3 block">FAQ</span>
            <h2 className="text-3xl font-display font-bold text-charcoal-950 dark:text-white">
              Frequently Asked Questions
            </h2>
          </motion.div>
          <div className="space-y-3">
            {FAQS.map((faq) => (
              <FAQItem key={faq.question} q={faq.question} a={faq.answer} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
