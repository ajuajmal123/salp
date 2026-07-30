"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-navy-100">

      {/* Cinematic Background Video */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-85 blur-[3px]"
          poster="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0"
        >
          {/* Stable high-quality construction site stock video sources */}
          <source
            src="https://player.vimeo.com/external/383097790.hd.mp4?s=c5a93378921fbbeb25dd71e49033afdd915466eb&profile_id=175"
            type="video/mp4"
          />
          <source
            src="https://player.vimeo.com/external/589168763.hd.mp4?s=af0acaac175542bea252fe3b601b118441db71a1&profile_id=174"
            type="video/mp4"
          />
          <source
            src="https://player.vimeo.com/external/306404345.hd.mp4?s=2de3233cde8f83426711f3241c775c963798e845&profile_id=169"
            type="video/mp4"
          />
        </video>

        {/* Soft Shaded Deep Overlay Grid */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy-100/15 via-navy-100/35 to-navy-100 z-10 pointer-events-none" />
      </div>

      {/* Hero Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full pt-16">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-6 sm:gap-7">

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="font-sans font-extrabold text-4xl sm:text-6xl text-black tracking-tight leading-[1.1] uppercase text-center text-shadow-light"
          >
            Engineering <br />
            <span className="text-[#12828f] font-black">
              Excellence
            </span>{" "}
            for Modern Infrastructure
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-black text-sm sm:text-lg leading-relaxed max-w-2xl mx-auto text-center font-bold text-shadow-light"
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
              className="inline-flex items-center justify-center px-8 py-4 bg-navy-50 hover:bg-navy-100 text-navy-800 font-extrabold text-xs tracking-widest uppercase rounded-full border border-navy-200 hover:border-sapl-blue/50 transition-all duration-300 select-none cursor-pointer hover:scale-[1.03] active:scale-[0.97] w-full sm:w-auto text-center"
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

      {/* Decorative vertical lines on sides (premium look) */}
      <div className="absolute inset-y-0 left-[8%] w-[1px] bg-navy-950/[0.05] hidden lg:block pointer-events-none" />
      <div className="absolute inset-y-0 right-[8%] w-[1px] bg-navy-950/[0.05] hidden lg:block pointer-events-none" />

    </section>
  );
}
