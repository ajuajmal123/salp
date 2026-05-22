"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-navy-950">

      {/* Cinematic Background Image */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1920&q=80"
          alt="Modern Construction Site"
          className="w-full h-full object-cover opacity-35 transform scale-105 animate-[spin-slow_120s_linear_infinite]"
        />
        {/* Navy Deep Overlay Grid */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/80 via-navy-950/70 to-navy-950" />
        {/* Fine grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem]"
        />
      </div>

      {/* Hero Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-20">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-6">

          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center gap-3 justify-center"
          >
            <span className="w-8 h-[2px] bg-sapl-blue" />
            <span className="text-[10px] sm:text-xs font-bold tracking-[0.3em] text-sapl-blue uppercase">
              Established 1987 • Srinivasan Associates
            </span>
            <span className="w-8 h-[2px] bg-sapl-blue" />
          </motion.div>

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
            className="text-slate-300 text-sm sm:text-lg leading-relaxed max-w-2xl mx-auto text-center"
          >
            Delivering high-end industrial engineering, state-of-the-art healthcare complexes, IT business parks, and modern corporate spaces across South India for over 35 years.
          </motion.p>

          {/* CTA Group */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center gap-5 mt-4 w-full sm:w-auto"
          >
            <Link
              href="/projects"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-sapl-blue to-[#4fd1e1] hover:from-sapl-blue-hover hover:to-[#229fae] text-white font-extrabold text-xs tracking-widest uppercase rounded-full transition-all duration-300 shadow-lg shadow-sapl-blue/20 hover:shadow-sapl-blue/40 hover:scale-[1.03] active:scale-[0.97] select-none group w-full sm:w-auto"
            >
              Explore Projects
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-extrabold text-xs tracking-widest uppercase rounded-full border border-white/15 hover:border-sapl-blue/50 transition-all duration-300 backdrop-blur-sm select-none group shadow-lg hover:shadow-white/5 hover:scale-[1.03] active:scale-[0.97] w-full sm:w-auto"
            >
              Contact Engineering
            </Link>
          </motion.div>

        </div>
      </div>

      {/* Decorative vertical lines on sides (premium look) */}
      <div className="absolute inset-y-0 left-[8%] w-[1px] bg-white/[0.03] hidden lg:block" />
      <div className="absolute inset-y-0 right-[8%] w-[1px] bg-white/[0.03] hidden lg:block" />

    </section>
  );
}
