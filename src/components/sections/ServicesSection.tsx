"use client";

import React from "react";
import { motion } from "framer-motion";
import ServiceCard from "../ui/ServiceCard";
import * as Icons from "lucide-react";

const servicesList: {
  title: string;
  description: string;
  iconName: keyof typeof Icons;
  features: string[];
}[] = [
  {
    title: "Civil Construction",
    description: "Multi-story commercial structures, institutional blocks, and high-density residential developments built with grade-A structural safety.",
    iconName: "Building",
    features: ["Seismic compliant standards", "Premium materials sourcing", "Skilled structural masonry"],
  },
  {
    title: "Infrastructure Works",
    description: "Comprehensive layout designs, drainage systems, steel structure fabrications, and sub-base roadway foundations engineered to last.",
    iconName: "Milestone",
    features: ["Heavy land clearing & leveling", "High-capacity road systems", "Rigid environmental compliance"],
  },
  {
    title: "Industrial Projects",
    description: "Specialized factories, warehousing spaces, manufacturing sheds, and pharmaceutical processing centers with heavy machinery planning.",
    iconName: "Factory",
    features: ["Heavy load foundation design", "Span-roof truss installations", "Specialty floor coatings"],
  },
  {
    title: "Turnkey Solutions",
    description: "End-to-end design coordination, structural drafting, government sanction approvals, architectural engineering, and final handovers.",
    iconName: "Hammer",
    features: ["Single point contact liaison", "Cost estimation accuracy", "Complete material procurement"],
  },
  {
    title: "Project Management",
    description: "Supervising site logistics, scheduling workflows, managing cost reports, and coordinating contractors to optimize timeline and quality.",
    iconName: "LineChart",
    features: ["ERP-backed progress updates", "Daily QC check routines", "Resource planning systems"],
  },
  {
    title: "Design & Build",
    description: "Seamlessly uniting architectural conceptualization and physical engineering under one contract to minimize cost and time overhead.",
    iconName: "Layers",
    features: ["Pre-construction 3D visual review", "Adaptive engineering revisions", "Optimized execution plans"],
  },
];

export default function ServicesSection() {
  return (
    <section className="relative py-24 bg-slate-50 dark:bg-navy-950/60 border-t border-slate-100 dark:border-navy-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-3">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-sapl-blue">
            Core Competencies
          </span>
          <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-navy-950 dark:text-white tracking-tight uppercase">
            Engineering Specializations
          </h2>
          <p className="text-slate-500 dark:text-navy-300 text-sm leading-relaxed">
            From specialized healthcare facilities and complex tech park projects to high-tonnage industrial warehouses, we provide complete, self-reliant construction services.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.08, ease: "easeOut" }}
            >
              <ServiceCard
                title={service.title}
                description={service.description}
                iconName={service.iconName}
                features={service.features}
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
