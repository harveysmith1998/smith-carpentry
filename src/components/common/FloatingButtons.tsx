"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp, MessageCircle, Phone } from "lucide-react";
import { COMPANY } from "@/lib/data";

export default function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const fn = () => setShowTop(window.scrollY > 500);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <div className="fixed bottom-6 right-5 z-40 flex flex-col gap-3 items-center">
      {/* WhatsApp */}
      <motion.a
        href={`https://wa.me/${COMPANY.whatsapp}?text=Hi, I'd like to request a carpentry quote.`}
        target="_blank" rel="noopener noreferrer"
        initial={{ scale: 0 }} animate={{ scale: 1 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 220 }}
        className="w-12 h-12 rounded-full bg-[#25D366] hover:bg-[#1db954] text-white flex items-center justify-center shadow-luxury transition-all hover:scale-110"
        aria-label="WhatsApp"
      >
        <MessageCircle size={22} />
      </motion.a>

      {/* Call */}
      <motion.a
        href={`tel:${COMPANY.phone}`}
        initial={{ scale: 0 }} animate={{ scale: 1 }}
        transition={{ delay: 0.65, type: "spring", stiffness: 220 }}
        className="w-12 h-12 rounded-full bg-wood text-[#0a0a0a] flex items-center justify-center shadow-luxury hover:scale-110 hover:shadow-glow-brand transition-all"
        aria-label="Call us"
      >
        <Phone size={20} />
      </motion.a>

      {/* Back to top */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0, opacity: 0 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="w-12 h-12 rounded-full bg-[#1a1a1a] border border-white/15 text-white flex items-center justify-center shadow-luxury hover:border-wood hover:text-wood transition-all hover:scale-110"
            aria-label="Back to top"
          >
            <ArrowUp size={18} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
