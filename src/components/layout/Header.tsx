"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ChevronDown, Moon, Sun } from "lucide-react";
import { COMPANY } from "@/lib/data";

const navLinks = [
  { href: "/", label: "Home" },
  {
    href: "/services",
    label: "Services",
    children: [
      { href: "/services/shopfitting",         label: "Shopfitting" },
      { href: "/services/bespoke-carpentry",   label: "Bespoke Carpentry" },
      { href: "/services/garden-rooms",        label: "Garden Rooms" },
      { href: "/services/kitchens",            label: "Kitchens" },
      { href: "/services/wardrobes",           label: "Wardrobes" },
      { href: "/services/first-fix-carpentry", label: "First Fix" },
      { href: "/services/second-fix-carpentry",label: "Second Fix" },
      { href: "/services/staircases",          label: "Staircases" },
      { href: "/services/pvc-windows-doors",   label: "PVC Windows & Doors" },
      { href: "/services/plasterboarding",     label: "Plasterboarding" },
    ],
  },
  { href: "/portfolio",     label: "Portfolio"     },
  { href: "/about",         label: "About"         },
  { href: "/testimonials",  label: "Testimonials"  },
  { href: "/contact",       label: "Contact"       },
];

export default function Header() {
  const [scrolled,         setScrolled]         = useState(false);
  const [menuOpen,         setMenuOpen]         = useState(false);
  const [activeDropdown,   setActiveDropdown]   = useState<string | null>(null);
  const [dark,             setDark]             = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-charcoal-900/95 backdrop-blur-xl shadow-luxury py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <div className="relative w-10 h-10">
            <Image
              src="/images/logo.png"
              alt="Smith Carpentry Logo"
              fill
              className="object-contain"
              sizes="40px"
              priority
            />
          </div>
          <div className="hidden sm:block">
            <span className="text-white font-display font-bold text-xl tracking-tight leading-none block">
              Smith
            </span>
            <span className="text-brand text-[10px] tracking-[0.25em] uppercase leading-none">
              Carpentry
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-0.5">
          {navLinks.map((link) => (
            <div
              key={link.href}
              className="relative"
              onMouseEnter={() => link.children && setActiveDropdown(link.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href={link.href}
                className="flex items-center gap-1 px-4 py-2 text-white/80 hover:text-brand text-sm font-medium transition-colors duration-200"
              >
                {link.label}
                {link.children && (
                  <ChevronDown
                    size={13}
                    className={`transition-transform duration-200 ${activeDropdown === link.label ? "rotate-180 text-brand" : ""}`}
                  />
                )}
              </Link>

              {link.children && (
                <AnimatePresence>
                  {activeDropdown === link.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.18 }}
                      className="absolute top-full left-0 mt-1 w-56 bg-charcoal-900/98 backdrop-blur-xl rounded-xl shadow-luxury-lg py-2 border border-white/10"
                    >
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm text-white/70 hover:text-brand hover:bg-white/5 transition-colors duration-150"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </nav>

        {/* Right actions */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={() => setDark(!dark)}
            className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-brand hover:border-brand transition-colors"
            aria-label="Toggle dark mode"
          >
            {dark ? <Sun size={15} /> : <Moon size={15} />}
          </button>
          <a
            href={`tel:${COMPANY.phone}`}
            className="flex items-center gap-2 text-white/70 hover:text-brand text-sm transition-colors"
          >
            <Phone size={14} />
            {COMPANY.phone}
          </a>
          <Link
            href="/contact"
            className="px-5 py-2.5 rounded-lg bg-brand text-charcoal-950 text-sm font-bold hover:bg-brand-400 hover:shadow-glow-brand transition-all duration-200"
          >
            Request a Quote
          </Link>
        </div>

        {/* Mobile toggle */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            onClick={() => setDark(!dark)}
            className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60"
            aria-label="Toggle dark mode"
          >
            {dark ? <Sun size={15} /> : <Moon size={15} />}
          </button>
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
            className="lg:hidden bg-charcoal-900/98 backdrop-blur-xl border-t border-white/10 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-0.5">
              {navLinks.map((link) => (
                <div key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block px-4 py-3 text-white/80 hover:text-brand font-medium transition-colors rounded-lg hover:bg-white/5"
                  >
                    {link.label}
                  </Link>
                  {link.children && (
                    <div className="ml-4 flex flex-col">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setMenuOpen(false)}
                          className="block px-4 py-2 text-sm text-white/50 hover:text-brand transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-3 mt-2 border-t border-white/10 flex flex-col gap-2">
                <a
                  href={`tel:${COMPANY.phone}`}
                  className="flex items-center gap-2 px-4 py-3 text-white/70 text-sm"
                >
                  <Phone size={15} className="text-brand" />
                  {COMPANY.phone}
                </a>
                <Link
                  href="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="mx-4 py-3 rounded-lg bg-brand text-charcoal-950 text-center font-bold text-sm"
                >
                  Request a Free Quote
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
