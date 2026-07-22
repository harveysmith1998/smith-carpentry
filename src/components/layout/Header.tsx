"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { COMPANY } from "@/lib/data";

const navLinks = [
  { href: "/",             label: "Home"     },
  { href: "/about",        label: "About"    },
  { href: "/services",     label: "Services" },
  { href: "/portfolio",    label: "Gallery"  },
  { href: "/testimonials", label: "Reviews"  },
  { href: "/contact",      label: "Contact"  },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a] transition-all duration-300 ${
        scrolled ? "shadow-luxury py-3 border-b border-white/10" : "py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0" aria-label="Smith Carpentry home">
          <div className="relative h-14 w-40">
            <Image
              src="/images/logo.jpg"
              alt="Smith Carpentry"
              fill
              className="object-contain"
              sizes="160px"
              priority
            />
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                isActive(link.href) ? "text-wood" : "text-white/80 hover:text-wood"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right actions */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href={`tel:${COMPANY.phone}`}
            className="flex items-center gap-2 text-white/70 hover:text-wood text-sm transition-colors"
          >
            <Phone size={14} />
            {COMPANY.phone}
          </a>
          <Link
            href="/contact"
            className="px-5 py-2.5 rounded-lg bg-wood text-[#0a0a0a] text-sm font-bold hover:bg-wood-light hover:shadow-glow-brand transition-all duration-200"
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile toggle */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28 }}
            className="lg:hidden bg-[#0a0a0a] border-t border-white/10 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-0.5">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`block px-4 py-3 font-medium transition-colors rounded-lg hover:bg-white/5 ${
                    isActive(link.href) ? "text-wood" : "text-white/80 hover:text-wood"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-3 mt-2 border-t border-white/10 flex flex-col gap-2">
                <a
                  href={`tel:${COMPANY.phone}`}
                  className="flex items-center gap-2 px-4 py-3 text-white/70 text-sm"
                >
                  <Phone size={15} className="text-wood" />
                  {COMPANY.phone}
                </a>
                <Link
                  href="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="mx-4 py-3 rounded-lg bg-wood text-[#0a0a0a] text-center font-bold text-sm"
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
