"use client";

import React from "react";
import { motion } from "framer-motion";
import { Factory, Hospital, Landmark, Building2, Server, Home } from "lucide-react";
import AnimatedCounter from "../ui/AnimatedCounter";
import { projectsList, featuredProjectsList } from "@/data/projects";

// Base stats representing historical volume NOT explicitly detailed in projectsList
const BASE_STATS = {
  Industrial: 0,
  Healthcare: 0,
  Institutional: 0,
  Commercial: 0,
  "IT & ITeS": 0,
  Residential: 0,
};

function parseArea(areaStr?: string): number {
  if (!areaStr) return 0;
  const clean = areaStr.replace(/,/g, "").toLowerCase().trim();
  const match = clean.match(/([\d.]+)/);
  if (!match) return 0;
  let val = parseFloat(match[1]);
  if (clean.includes("million")) {
    val *= 1000000;
  } else if (clean.includes("lakh")) {
    val *= 100000;
  }
  return val;
}

function getStatCategoryKey(projectCategory: string): string | null {
  const norm = projectCategory.toLowerCase().trim();
  if (norm === "industrial") return "Industrial";
  if (norm === "healthcare") return "Healthcare";
  if (norm === "institutional") return "Institutional";
  if (norm === "commercial") return "Commercial";
  if (norm === "it park" || norm === "it & ites" || norm === "it") return "IT & ITeS";
  if (norm === "residential") return "Residential";
  return null;
}

const statsList = [
  {
    icon: Factory,
    title: "Industrial",
    baseValue: BASE_STATS.Industrial,
    suffix: " Sft",
    description: "Automotive plants, high-spec factories, heavy machinery complexes, and logistics centers.",
  },
  {
    icon: Hospital,
    title: "Healthcare",
    baseValue: BASE_STATS.Healthcare,
    suffix: " Sft",
    description: "Advanced super-specialty hospital complexes, research wings, and clinical facilities.",
  },
  {
    icon: Landmark,
    title: "Institutional",
    baseValue: BASE_STATS.Institutional,
    suffix: " Sft",
    description: "High-density educational campuses, institutional centers, and administrative offices.",
  },
  {
    icon: Building2,
    title: "Commercial",
    baseValue: BASE_STATS.Commercial,
    suffix: " Sft",
    description: "Sleek commercial blocks, high-end retail hubs, and premium corporate towers.",
  },
  {
    icon: Server,
    title: "IT & ITeS",
    baseValue: BASE_STATS["IT & ITeS"],
    suffix: " Sft",
    description: "State-of-the-art software technology parks, grade-A hubs, and corporate workspaces.",
  },
  {
    icon: Home,
    title: "Residential",
    baseValue: BASE_STATS.Residential,
    suffix: " Sft",
    description: "Premium high-rise apartments, residential complexes, and modern townships.",
  },
];

export default function Stats() {
  const allProjects = [...featuredProjectsList, ...projectsList];

  const dynamicStatsList = statsList.map((stat) => {
    const projectSum = allProjects.reduce((sum, project) => {
      const mappedKey = getStatCategoryKey(project.category);
      if (mappedKey === stat.title) {
        return sum + parseArea(project.details?.area);
      }
      return sum;
    }, 0);
    return {
      ...stat,
      value: stat.baseValue + projectSum,
    };
  });

  const totalVolume = dynamicStatsList.reduce((acc, stat) => acc + stat.value, 0);

  return (
    <section className="relative py-24 bg-[#f7f6f4] text-[#1c1a17] overflow-hidden border-t border-[#eae7e3] border-b border-[#eae7e3]">
      
      {/* Delicate Cyan Gradient Glows for Premium Architectural Contrast */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sapl-blue/[0.04] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[600px] h-[600px] bg-sapl-blue/[0.04] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Modernist Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center gap-4">
          
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#eae7e3] text-[10px] font-bold tracking-widest text-sapl-blue uppercase shadow-[0_2px_10px_rgba(0,0,0,0.02)]"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-sapl-blue animate-pulse" />
            Total Structural Volume: {totalVolume.toLocaleString("en-US")} Sft
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-sans font-extrabold text-3xl sm:text-5xl tracking-tight uppercase"
            style={{ color: "#1c1a17" }}
          >
            Engineered Spaces
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base leading-relaxed !text-[#4F4C42]"
          >
            A high-performance portfolio of precision construction and engineering landmarks completed across major sectors over three and a half decades.
          </motion.p>
        </div>

        {/* 6-Column Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {dynamicStatsList.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: idx * 0.08, ease: "easeOut" }}
                className="relative bg-white border border-[#eae7e3] p-8 rounded-xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.02),0_2px_4px_rgba(0,0,0,0.01)] hover:shadow-xl hover:border-sapl-blue/40 transition-all duration-500 flex flex-col items-start text-left group overflow-hidden"
              >
                {/* Glow Backdrop Spot */}
                <div className="absolute -right-12 -bottom-12 w-32 h-32 rounded-full bg-sapl-blue/0 blur-2xl group-hover:bg-sapl-blue/[0.04] transition-all duration-500 pointer-events-none" />

                {/* Header Icon Row */}
                <div className="flex items-center justify-between w-full mb-6">
                  <div className="w-14 h-14 rounded-xl bg-[#f7f6f4] flex items-center justify-center border border-[#eae7e3] text-sapl-blue group-hover:bg-sapl-blue group-hover:text-white group-hover:border-sapl-blue group-hover:shadow-lg group-hover:shadow-sapl-blue/20 transition-all duration-500">
                    <Icon className="w-6 h-6 transition-transform duration-500 group-hover:scale-110" />
                  </div>
                  
                  {/* Subtle index line indicator */}
                  <span className="text-[10px] font-black text-[#afa99e]/40 group-hover:text-sapl-blue/30 transition-colors tracking-widest font-mono">
                    0{idx + 1}
                  </span>
                </div>

                {/* Sft Number Counter */}
                <div className="text-3xl font-extrabold tracking-tight leading-none mb-1 tabular-nums" style={{ color: "#1c1a17" }}>
                  <AnimatedCounter value={stat.value} suffix="" />
                </div>
                
                <div className="text-[9px] font-bold text-sapl-blue uppercase tracking-[0.2em] mb-4">
                  Square Feet Delivered
                </div>

                {/* Sector Title */}
                <h3 className="text-sm font-extrabold uppercase tracking-wider mb-2" style={{ color: "#2a2823" }}>
                  {stat.title}
                </h3>

                {/* Description */}
                <p className="text-xs leading-relaxed transition-colors !text-[#6D675E] group-hover:!text-[#2a2823]">
                  {stat.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>

    </section>
  );
}
