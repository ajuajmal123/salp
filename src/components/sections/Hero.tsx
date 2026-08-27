"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-[650px] h-[90vh] lg:h-screen flex items-center justify-center overflow-hidden bg-navy-100">

      {/* =========================================================
          CINEMATIC BACKGROUND VIDEO (FULL OPACITY, UNBLURRED, NO OVERLAYS)
      ========================================================== */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-100"
        >
          <source
            src="/Vesta Work new.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      {/* =========================================================
          HERO CONTENT (WHITE TEXT WITH DEEP SHADOWS, OVERLAY-FREE)
      ========================================================== */}
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 relative z-20 w-full pt-12">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-6 sm:gap-7">

          {/* HEADING */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: "easeOut",
            }}
            className="font-sans font-extrabold text-4xl sm:text-6xl text-white tracking-tight leading-[1.1] uppercase text-center drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]"
          >
            Engineering <br />
            <span className="text-sapl-blue font-black drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
              Excellence
            </span>{" "}
            for Modern Infrastructure
          </motion.h1>

          {/* SUBHEADING */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: "easeOut",
            }}
            className="text-white text-sm sm:text-xl leading-relaxed max-w-2xl mx-auto text-center font-extrabold drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]"
          >
            Delivering high-end industrial engineering, state-of-the-art
            healthcare complexes, IT business parks, and modern corporate
            spaces across South India for over 39 years.
          </motion.p>

          {/* CTA GROUP */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: "easeOut",
            }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 mt-3 w-full sm:w-auto z-30"
          >
            {/* Explore Projects */}
            <Link
              href="/projects"
              className="inline-flex items-center justify-center px-6 py-3 bg-sapl-blue hover:bg-sapl-blue-hover text-white font-extrabold text-xs tracking-widest uppercase rounded-full transition-all duration-300 shadow-lg shadow-sapl-blue/20 hover:shadow-sapl-blue/40 hover:scale-[1.03] active:scale-[0.97] select-none w-full sm:w-auto text-center cursor-pointer"
            >
              Explore Projects
            </Link>

            {/* Download Brochure */}
            <button
              onClick={() =>
                window.dispatchEvent(new Event("open-brochure-modal"))
              }
              className="inline-flex items-center justify-center px-6 py-3 bg-white/80 hover:bg-white text-navy-800 font-extrabold text-xs tracking-widest uppercase rounded-full border border-white/80 hover:border-sapl-blue/50 transition-all duration-300 select-none cursor-pointer hover:scale-[1.03] active:scale-[0.97] w-full sm:w-auto text-center shadow-sm backdrop-blur-sm"
            >
              Download Brochure
            </button>

            {/* Contact Us */}
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-sapl-blue hover:bg-sapl-blue-hover text-white font-extrabold text-xs tracking-widest uppercase rounded-full transition-all duration-300 shadow-lg shadow-sapl-blue/20 hover:shadow-sapl-blue/40 hover:scale-[1.03] active:scale-[0.97] select-none w-full sm:w-auto text-center cursor-pointer"
            >
              Contact Us
            </Link>
          </motion.div>

        </div>
      </div>

    </section>
  );
}
