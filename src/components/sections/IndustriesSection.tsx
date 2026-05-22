"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  Factory,
  HeartPulse,
  GraduationCap,
  Home,
  Hotel,
} from "lucide-react";

const industries = [
  {
    name: "Commercial & Corporate Office Parks",
    icon: Briefcase,
    description: "LEED-compliant corporate high-rises, IT complexes, and headquarter buildings.",
    bgUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Industrial & Manufacturing",
    icon: Factory,
    description: "Heavy manufacturing plants, logistics warehouses, and assembly units.",
    bgUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Healthcare & Biotech",
    icon: HeartPulse,
    description: "Specialty hospital towers, oncology clinics, and sterile laboratory facilities.",
    bgUrl: "https://images.unsplash.com/photo-1586773860418-d37222d8fce2?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Education & Academics",
    icon: GraduationCap,
    description: "Academic administration offices, multi-story schools, and university campuses.",
    bgUrl: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Premium Residential",
    icon: Home,
    description: "Luxury apartment high-rises, layout developments, and elite private estates.",
    bgUrl: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Hospitality & Wellness",
    icon: Hotel,
    description: "Premium hotel blocks, meditation complexes, and recreational infrastructure.",
    bgUrl: "https://images.unsplash.com/photo-1455587734955-081b22074882?auto=format&fit=crop&w=600&q=80",
  },
];

export default function IndustriesSection() {
  return (
    <section className="relative py-24 bg-slate-50 dark:bg-navy-950/40 border-y border-slate-100 dark:border-navy-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-3">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-sapl-blue">
            Sectors Covered
          </span>
          <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-navy-950 dark:text-white tracking-tight uppercase">
            Industries Served
          </h2>
          <p className="text-slate-500 dark:text-navy-300 text-sm leading-relaxed">
            Delivering tailor-made engineering systems and robust construction solutions across multi-disciplinary commercial, public, and private industries.
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((ind, idx) => {
            const Icon = ind.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.08, ease: "easeOut" }}
                className="group relative h-[240px] rounded-sm overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 cursor-default"
              >
                {/* Background Image Container */}
                <div className="absolute inset-0 z-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={ind.bgUrl}
                    alt={ind.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  {/* Dark Blue Overlay */}
                  <div className="absolute inset-0 bg-navy-950/85 group-hover:bg-navy-950/75 transition-colors duration-500" />
                </div>

                {/* Industry Card Content */}
                <div className="relative z-10 p-8 h-full flex flex-col justify-between items-start text-left">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-full bg-sapl-blue/10 border border-sapl-blue/20 flex items-center justify-center text-sapl-blue group-hover:bg-sapl-blue group-hover:text-white transition-colors duration-500">
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Title & Desc */}
                  <div>
                    <h3 className="font-sans text-lg font-bold tracking-tight text-white mb-2 uppercase">
                      {ind.name}
                    </h3>
                    <p className="text-navy-300 text-xs leading-relaxed max-h-0 overflow-hidden opacity-0 group-hover:max-h-12 group-hover:opacity-100 transition-all duration-500">
                      {ind.description}
                    </p>
                  </div>
                </div>

                {/* Glow overlay border */}
                <div className="absolute inset-0 border border-transparent group-hover:border-sapl-blue/30 transition-colors duration-500 rounded-sm" />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
