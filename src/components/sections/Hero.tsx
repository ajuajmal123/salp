"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    id: 0,
    src: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    label: "Landmark Construction Site",
  },
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1535732759880-bbd5c7265e3f?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    label: "Structural Infrastructure Framing",
  },
];

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  // Auto transition slides
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 7000); // Change slide every 7 seconds
    return () => clearInterval(timer);
  }, []);

  const currentSlide = slides[activeSlide % slides.length] || slides[0];

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-navy-950">

      {/* Cinematic Slideshow Background (Ken Burns Animated Image Banner) */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSlide}
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ 
              opacity: 1, 
              scale: [1.02, 1.08, 1.02],
              x: [0, 8, -4, 0],
              y: [0, -4, 4, 0]
            }}
            exit={{ opacity: 0 }}
            transition={{ 
              duration: 8.5, 
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "mirror"
            }}
            className="absolute inset-0 w-full h-full"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={currentSlide.src}
              alt={currentSlide.label}
              className="w-full h-full object-cover opacity-35"
            />
          </motion.div>
        </AnimatePresence>

        {/* Navy Deep Overlay Grid */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/80 via-navy-950/60 to-navy-950 z-10 pointer-events-none" />
        
        {/* Fine grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem] z-10 pointer-events-none"
        />
      </div>

      {/* Hero Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full pt-16">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-6 sm:gap-7">

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="font-sans font-extrabold text-4xl sm:text-6xl text-white tracking-tight leading-[1.1] uppercase text-center"
          >
            Engineering <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sapl-blue via-blue-400 to-white">
              Excellence
            </span>{" "}
            for Modern Infrastructure
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-slate-200 text-sm sm:text-lg leading-relaxed max-w-2xl mx-auto text-center font-medium"
          >
            Delivering high-end industrial engineering, state-of-the-art healthcare complexes, IT business parks, and modern corporate spaces across South India for over 35 years.
          </motion.p>

          {/* CTA Group */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 mt-4 w-full sm:w-auto z-30"
          >
            <Link
              href="/projects"
              className="inline-flex items-center justify-center px-8 py-4 bg-sapl-blue hover:bg-sapl-blue-hover text-white font-extrabold text-xs tracking-widest uppercase rounded-full transition-all duration-300 shadow-lg shadow-sapl-blue/20 hover:shadow-sapl-blue/40 hover:scale-[1.03] active:scale-[0.97] select-none w-full sm:w-auto text-center cursor-pointer"
            >
              Explore Projects
            </Link>

            <button
              onClick={() => window.dispatchEvent(new Event("open-brochure-modal"))}
              className="inline-flex items-center justify-center px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-extrabold text-xs tracking-widest uppercase rounded-full border border-white/15 hover:border-sapl-blue/50 transition-all duration-300 backdrop-blur-sm select-none cursor-pointer hover:scale-[1.03] active:scale-[0.97] w-full sm:w-auto text-center"
            >
              Download Brochure
            </button>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-sapl-blue hover:bg-sapl-blue-hover text-white font-extrabold text-xs tracking-widest uppercase rounded-full transition-all duration-300 shadow-lg shadow-sapl-blue/20 hover:shadow-sapl-blue/40 hover:scale-[1.03] active:scale-[0.97] select-none w-full sm:w-auto text-center cursor-pointer"
            >
              Contact Us
            </Link>
          </motion.div>

        </div>
      </div>

      {/* Carousel Navigation Indicators (Line / Dots at bottom) */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-3 z-30">
        {slides.map((slide, idx) => (
          <button
            key={slide.id}
            onClick={() => setActiveSlide(idx)}
            className="group flex flex-col items-center gap-1.5 focus:outline-none cursor-pointer py-2"
            aria-label={`Go to slide ${idx + 1}`}
          >
            <span
              className={`h-[3px] rounded-full transition-all duration-500 ${
                activeSlide === idx
                  ? "w-10 bg-sapl-blue shadow-lg shadow-sapl-blue/50"
                  : "w-4 bg-white/30 group-hover:bg-white/60"
              }`}
            />
          </button>
        ))}
      </div>

      {/* Decorative vertical lines on sides (premium look) */}
      <div className="absolute inset-y-0 left-[8%] w-[1px] bg-white/[0.02] hidden lg:block pointer-events-none" />
      <div className="absolute inset-y-0 right-[8%] w-[1px] bg-white/[0.02] hidden lg:block pointer-events-none" />

    </section>
  );
}
