"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    quote: "Srinivasan Associates (SAPL) has demonstrated supreme technical competence in delivering our Shriram 122 project. Their self-reliant heavy machinery mobilization and absolute control over concrete engineering timelines are truly outstanding in the sector.",
    author: "M. K. Vasudevan",
    role: "VP of Project Planning",
    company: "Shriram Properties Ltd.",
  },
  {
    quote: "Building healthcare infrastructure demands rigorous layout specifications and safety protocols. SAPL executed our Salem hospital block to international standards, meeting all cleanroom HVAC tolerances and strict deadlines flawlessly.",
    author: "Dr. S. Aravind",
    role: "Executive Director",
    company: "Aravind Eye Care System",
  },
  {
    quote: "Our partnership with SAPL for the SVB Tech Park construction was characterized by engineering precision and radical cost transparency. Their turnkey design-and-build delivery saved us substantial schedule overhead.",
    author: "Ar. Raghavan Pillai",
    role: "Chief Consulting Architect",
    company: "Pillai & Partners Associates",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="relative py-24 bg-white dark:bg-navy-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-3">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-sapl-blue">
            Client Endorsements
          </span>
          <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-navy-950 dark:text-white tracking-tight uppercase">
            Trusted by the Leaders
          </h2>
          <p className="text-slate-500 dark:text-navy-300 text-sm leading-relaxed">
            See what leading institutional directors, real estate developers, and corporate architects say about our engineering integrity.
          </p>
        </div>

        {/* Testimonial Visual Slider */}
        <div className="max-w-4xl mx-auto relative bg-slate-50 dark:bg-navy-900 border border-slate-200 dark:border-navy-800 p-8 sm:p-12 rounded-sm shadow-xl shadow-navy-950/5 overflow-hidden">
          
          {/* Quote Icon */}
          <div className="absolute top-8 right-8 text-sapl-blue/10 dark:text-navy-800 pointer-events-none">
            <Quote className="w-24 h-24 stroke-[4px]" />
          </div>

          <div className="relative z-10 flex flex-col gap-6 items-start text-left">
            {/* Stars */}
            <div className="flex gap-1 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-500" />
              ))}
            </div>

            {/* Quote text with slide animation */}
            <div className="min-h-[140px] sm:min-h-[100px] w-full">
              <AnimatePresence mode="wait">
                <motion.p
                  key={current}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="text-navy-950 dark:text-white text-base sm:text-lg font-medium leading-relaxed italic"
                >
                  "{testimonials[current].quote}"
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Author Profile */}
            <div className="flex items-center justify-between w-full border-t border-slate-200 dark:border-navy-800 pt-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col"
                >
                  <span className="font-extrabold text-navy-950 dark:text-white text-sm uppercase tracking-wider">
                    {testimonials[current].author}
                  </span>
                  <span className="text-slate-500 dark:text-navy-400 text-xs mt-0.5 font-semibold">
                    {testimonials[current].role} — {testimonials[current].company}
                  </span>
                </motion.div>
              </AnimatePresence>

              {/* Slider Controls */}
              <div className="flex items-center gap-3">
                <button
                  onClick={handlePrev}
                  className="w-10 h-10 rounded-full border border-slate-200 dark:border-navy-800 hover:border-sapl-blue hover:text-sapl-blue flex items-center justify-center text-slate-500 dark:text-navy-300 transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  className="w-10 h-10 rounded-full border border-slate-200 dark:border-navy-800 hover:border-sapl-blue hover:text-sapl-blue flex items-center justify-center text-slate-500 dark:text-navy-300 transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
