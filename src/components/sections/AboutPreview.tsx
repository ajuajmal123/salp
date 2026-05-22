"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function AboutPreview() {
  return (
    <section className="relative py-24 bg-white dark:bg-navy-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Visual asymmetric layout (5 columns) */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative aspect-[4/5] sm:aspect-square lg:aspect-[4/5] w-full rounded-sm overflow-hidden shadow-2xl"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80"
                alt="Construction Planning & Architecture"
                className="w-full h-full object-cover"
              />
              {/* Subtle visual gradient */}
              <div className="absolute inset-0 bg-navy-950/20" />
            </motion.div>

            {/* Float Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -bottom-8 -right-4 md:-right-8 bg-sapl-blue text-white p-6 rounded-sm shadow-xl shadow-sapl-blue/30 max-w-[200px]"
            >
              <span className="block text-3xl font-extrabold tracking-tight">35+</span>
              <span className="block text-[10px] font-bold uppercase tracking-wider mt-1 text-blue-100">
                Years of Structural Legacy
              </span>
            </motion.div>
          </div>

          {/* Right Column: Narrative (7 columns) */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-left">
            <div className="flex flex-col gap-2">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-sapl-blue">
                Corporate Profile
              </span>
              <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-navy-950 dark:text-white tracking-tight uppercase">
                Transforming Spaces for a Better Tomorrow
              </h2>
            </div>

            <p className="text-slate-600 dark:text-navy-300 text-sm sm:text-base leading-relaxed">
              Established in 1987, **Srinivasan Associates Private Limited (SAPL)** has built an unrivaled reputation for executing complex, high-spec construction projects. Our commitment to self-reliance, engineering integrity, and strict adherence to timelines has established us as a leading construction partner in South India.
            </p>

            <p className="text-slate-500 dark:text-navy-450 text-sm leading-relaxed">
              By integrating advanced engineering techniques and rigid quality assurance systems throughout every stage of the lifecycle, we ensure that our client's vision is built perfectly to standard.
            </p>

            {/* Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
              {[
                { title: "Turnkey Project Execution", desc: "End-to-end design & engineering coordination." },
                { title: "Rigid Structural Safety", desc: "Observing high-level safety programs daily." },
                { title: "Self-Reliance & Machinery", desc: "Owning advanced equipment for rapid mobilization." },
                { title: "Diverse Sector Experience", desc: "Specializing in Industrial, Healthcare, and Commercial." },
              ].map((pillar, idx) => (
                <div key={idx} className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-sapl-blue shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-navy-950 dark:text-white">
                      {pillar.title}
                    </h4>
                    <p className="text-slate-500 dark:text-navy-400 text-xs mt-0.5">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Learn More Button */}
            <div className="mt-4">
              <Link
                href="/about"
                className="inline-flex items-center justify-center px-6 py-3.5 bg-navy-950 hover:bg-sapl-blue dark:bg-white dark:hover:bg-sapl-blue text-white dark:text-navy-950 dark:hover:text-white font-bold text-xs tracking-wider uppercase rounded-sm transition-all duration-300 select-none group"
              >
                Learn More About Us
                <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
