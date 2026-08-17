"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Handshake,
  Award,
  Clock,
  Lightbulb,
  Users,
  ShieldCheck
} from "lucide-react";

const valuesList = [
  {
    icon: Handshake,
    title: "Customer Satisfaction",
    description: "We strive to understand our customers' needs and to deliver products and services that fulfil and exceed all their requirements. In doing so, we become partners in fulfilling their mission.",
    colorClass: "bg-teal-500 shadow-teal-500/20 text-white",
    dividerClass: "bg-teal-500",
  },
  {
    icon: Award,
    title: "Reliability and High Quality",
    description: "We are committed to delivering products and services that conform to highest standards of design, manufacture, reliability, maintainability and fitness for use as desired by our customers.",
    colorClass: "bg-blue-600 shadow-blue-600/20 text-white",
    dividerClass: "bg-blue-600",
  },
  {
    icon: Clock,
    title: "Cost and Time Consciousness",
    description: "We believe in reducing cost and shortening the delivery period of our products and services. High quality and cost-effectiveness are achieved by eliminating waste in all activities.",
    colorClass: "bg-orange-500 shadow-orange-500/20 text-white",
    dividerClass: "bg-orange-500",
  },
  {
    icon: Lightbulb,
    title: "Sustainability and Innovation",
    description: "Innovation and sustainability are at the heart of our business activities to achieve engineering excellence and long-term competitiveness.",
    colorClass: "bg-[#84cc16] shadow-lime-500/20 text-white",
    dividerClass: "bg-[#84cc16]",
  },
  {
    icon: Users,
    title: "Democracy and Team Spirit",
    description: "We count on democratic leadership and team spirit for achieving operational harmony and high performance in our organization.",
    colorClass: "bg-amber-500 shadow-amber-500/20 text-[#1c1a17]",
    dividerClass: "bg-amber-500",
  },
  {
    icon: ShieldCheck,
    title: "Integrity",
    description: "As an organization we place high importance to honest, trustworthy, and fair commitment in all our dealings. We are committed to being loyal and devoted to our organization.",
    colorClass: "bg-rose-500 shadow-rose-500/20 text-white",
    dividerClass: "bg-rose-500",
  },
];

export default function CoreValues() {
  return (
    <section className="relative py-12 md:py-16 bg-[#f7f6f4] text-[#1c1a17] overflow-hidden border-b border-[#eae7e3]">



      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Modernist Section Header - Centered */}
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12 flex flex-col items-center gap-4">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-sapl-blue">
            Core Beliefs
          </span>
          <h2 className="font-sans font-extrabold text-3xl sm:text-4xl tracking-tight uppercase" style={{ color: "#1c1a17" }}>
            Our Corporate Values
          </h2>
          <p className="text-sm leading-relaxed !text-[#4F4C42] max-w-xl">
            The foundation of our business execution, engineering ethics, and long-standing partnership legacy completed since 1987.
          </p>
        </div>

        {/* Values Grid (3 Columns on Desktop, 2 on Tablet, 1 on Mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8 md:gap-y-12">
          {valuesList.map((val, idx) => {
            const Icon = val.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.08, ease: "easeOut" }}
                className="bg-white rounded-xl p-6 md:p-8 border border-[#eae7e3] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center group w-full relative overflow-hidden"
              >
                {/* Subtle border top accent corresponding to card color */}
                <div className={`absolute top-0 left-0 w-full h-[4px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${val.dividerClass}`} />

                {/* Circular Icon (Exactly matches image format, updated for premium feel) */}
                <div className={`w-20 h-20 rounded-full flex items-center justify-center ${val.colorClass} shadow-lg transition-transform duration-300 group-hover:scale-110 mb-6 shrink-0`}>
                  <Icon className="w-8 h-8" />
                </div>

                {/* Value Title */}
                <h3 className="font-sans text-base font-extrabold tracking-wider uppercase mb-3 text-[#1c1a17]" style={{ color: "#1c1a17" }}>
                  {val.title}
                </h3>

                {/* Subtle Divider (Expands on hover) */}
                <div className={`w-8 h-[2px] ${val.dividerClass} opacity-60 my-1 transition-all duration-300 group-hover:w-16 rounded-full`} />

                {/* Description (Maximum contrast and legibility) */}
                <p className="text-[#6D675E] text-sm leading-relaxed mt-4 !text-[#6D675E] group-hover:!text-[#2a2823] transition-colors">
                  {val.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
