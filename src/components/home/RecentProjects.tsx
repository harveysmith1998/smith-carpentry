"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const recent = [
  { title: "Bespoke Shaker Kitchen",  category: "Kitchens",     image: "/images/kitchens/cover.jpg",     height: "440px", span: true },
  { title: "Oak Staircase",           category: "Staircases",   image: "/images/stairs/cover.jpg",       height: "210px" },
  { title: "Alcove Media Wall",       category: "Media Walls",  image: "/images/media-walls/cover.jpg",  height: "210px" },
  { title: "Fitted Wardrobes",        category: "Wardrobes",    image: "/images/wardrobes/cover.jpg",    height: "210px" },
  { title: "Insulated Garden Room",   category: "Garden Rooms", image: "/images/garden-rooms/cover.jpg", height: "210px" },
];

export default function RecentProjects() {
  return (
    <section className="section-padding bg-[#111111]">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-12"
        >
          <div>
            <span className="text-wood font-semibold text-sm uppercase tracking-widest mb-3 block">Recent Work</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white">
              Featured Projects
            </h2>
          </div>
          <Link href="/portfolio" className="flex items-center gap-2 text-wood font-semibold hover:gap-3 transition-all">
            View Full Gallery <ArrowRight size={16} />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {recent.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.07 }}
              className={`group relative rounded-2xl overflow-hidden border border-white/10 hover:border-wood/40 transition-all duration-300 ${p.span ? "md:row-span-2" : ""}`}
              style={{ height: p.height }}
            >
              <div className="img-zoom absolute inset-0">
                <Image src={p.image} alt={p.title} fill className="object-cover"
                  sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw,33vw" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/90 via-[#0a0a0a]/20 to-transparent opacity-70 group-hover:opacity-95 transition-opacity duration-300" />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full bg-wood text-[#0a0a0a] text-xs font-bold">
                  {p.category}
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="text-white font-display font-bold text-lg mb-1">{p.title}</h3>
                <Link href="/portfolio"
                  className="text-wood text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1">
                  View Gallery <ArrowRight size={13} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
