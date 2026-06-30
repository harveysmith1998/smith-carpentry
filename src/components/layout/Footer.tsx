import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { COMPANY, SERVICES } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-charcoal-950 text-white">
      {/* CTA band */}
      <div className="bg-gradient-to-r from-charcoal-900 to-charcoal-800 border-t border-brand/20">
        <div className="container mx-auto px-4 md:px-8 py-14 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-2">
              Ready to Start Your Project?
            </h3>
            <p className="text-white/60">Free, no-obligation quote within 48 hours.</p>
          </div>
          <div className="flex gap-3 shrink-0">
            <Link
              href="/contact"
              className="px-6 py-3 bg-brand text-charcoal-950 font-bold rounded-xl hover:bg-brand-400 hover:shadow-glow-brand transition-all duration-200 flex items-center gap-2"
            >
              Get a Free Quote <ArrowRight size={16} />
            </Link>
            <a
              href={`tel:${COMPANY.phone}`}
              className="px-6 py-3 border border-white/20 text-white font-semibold rounded-xl hover:border-brand hover:text-brand transition-all duration-200"
            >
              Call Us
            </a>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="py-16 border-t border-white/5">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

            {/* Brand */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-5">
                <div className="relative w-10 h-10">
                  <Image src="/images/logo.png" alt="Smith Carpentry" fill className="object-contain" sizes="40px" />
                </div>
                <div>
                  <span className="text-white font-display font-bold text-xl leading-none block">Smith</span>
                  <span className="text-brand text-[10px] tracking-[0.25em] uppercase leading-none">Carpentry</span>
                </div>
              </div>
              <p className="text-white/50 text-sm leading-relaxed mb-5">
                Premium carpentry and joinery across the UK. 15+ years delivering exceptional
                craftsmanship for residential and commercial clients.
              </p>
              <div className="flex gap-3">
                <a href={COMPANY.instagram} aria-label="Instagram"
                  className="w-9 h-9 rounded-lg bg-white/8 hover:bg-brand hover:text-charcoal-950 text-white/60 flex items-center justify-center transition-all duration-200 text-xs font-bold">
                  IG
                </a>
                <a href={COMPANY.facebook} aria-label="Facebook"
                  className="w-9 h-9 rounded-lg bg-white/8 hover:bg-brand hover:text-charcoal-950 text-white/60 flex items-center justify-center transition-all duration-200 text-xs font-bold">
                  FB
                </a>
              </div>
            </div>

            {/* Quick links */}
            <div>
              <h4 className="text-white/90 font-semibold mb-5 text-xs uppercase tracking-widest">Quick Links</h4>
              <ul className="space-y-2.5">
                {[
                  { href: "/",             label: "Home"         },
                  { href: "/about",        label: "About Us"     },
                  { href: "/services",     label: "Services"     },
                  { href: "/portfolio",    label: "Portfolio"    },
                  { href: "/testimonials", label: "Testimonials" },
                  { href: "/contact",      label: "Contact"      },
                ].map((l) => (
                  <li key={l.href}>
                    <Link href={l.href}
                      className="text-white/50 hover:text-brand text-sm transition-colors flex items-center gap-2 group">
                      <ArrowRight size={11} className="group-hover:translate-x-0.5 transition-transform" />
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white/90 font-semibold mb-5 text-xs uppercase tracking-widest">Services</h4>
              <ul className="space-y-2.5">
                {SERVICES.slice(0, 8).map((s) => (
                  <li key={s.slug}>
                    <Link href={`/services/${s.slug}`}
                      className="text-white/50 hover:text-brand text-sm transition-colors flex items-center gap-2 group">
                      <ArrowRight size={11} className="group-hover:translate-x-0.5 transition-transform" />
                      {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white/90 font-semibold mb-5 text-xs uppercase tracking-widest">Get In Touch</h4>
              <ul className="space-y-3 mb-6">
                <li>
                  <a href={`tel:${COMPANY.phone}`}
                    className="flex items-start gap-3 text-white/50 hover:text-brand text-sm transition-colors">
                    <Phone size={14} className="mt-0.5 text-brand shrink-0" />
                    {COMPANY.phone}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${COMPANY.email}`}
                    className="flex items-start gap-3 text-white/50 hover:text-brand text-sm transition-colors">
                    <Mail size={14} className="mt-0.5 text-brand shrink-0" />
                    {COMPANY.email}
                  </a>
                </li>
                <li>
                  <div className="flex items-start gap-3 text-white/50 text-sm">
                    <MapPin size={14} className="mt-0.5 text-brand shrink-0" />
                    United Kingdom — Nationwide
                  </div>
                </li>
              </ul>
              <h5 className="text-white/50 text-xs uppercase tracking-widest mb-3">Business Hours</h5>
              <ul className="space-y-1.5">
                {COMPANY.businessHours.map((h) => (
                  <li key={h.day} className="flex justify-between text-xs">
                    <span className="text-white/40">{h.day}</span>
                    <span className="text-brand">{h.hours}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5 py-5">
        <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-sm">© {year} Smith Carpentry. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="/privacy-policy" className="text-white/30 hover:text-brand text-sm transition-colors">Privacy Policy</Link>
            <Link href="/terms"          className="text-white/30 hover:text-brand text-sm transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
