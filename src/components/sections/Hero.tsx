
"use client";


import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-navy-100">

      {/* =========================================================
          CINEMATIC BACKGROUND VIDEO
      ========================================================== */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-75 blur-[1px]"
          poster="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0"
        >
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

        {/* Soft white overlay */}
        {/* <div className="absolute inset-0 bg-white/20" />
 */}

        {/* Premium radial focus overlay: soft white center for perfect text legibility, fading to brand cyan */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.80)_0%,rgba(255,255,255,0.50)_55%,rgba(42,181,196,0.15)_100%)]" />

        {/* Subtle bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white/50 to-transparent" />
      </div>

      {/* =========================================================
          HERO CONTENT
      ========================================================== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full pt-16">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-6 sm:gap-7">

          {/* =====================================================
              HEADING
          ====================================================== */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: "easeOut",
            }}
            className="font-sans font-extrabold text-4xl sm:text-6xl text-black tracking-tight leading-[1.1] uppercase text-center drop-shadow-[0_1px_2px_rgba(27,11,117,0.8)]"
          >
            Engineering <br />

            <span className="text-sapl-blue font-black">
              Excellence
            </span>{" "}

            for Modern Infrastructure
          </motion.h1>

          {/* =====================================================
              SUBHEADING
          ====================================================== */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: "easeOut",
            }}
            className="text-black text-sm sm:text-xl leading-relaxed max-w-2xl mx-auto text-center font-extrabold"
          >
            Delivering high-end industrial engineering, state-of-the-art
            healthcare complexes, IT business parks, and modern corporate
            spaces across South India for over 39 years.
          </motion.p>

          {/* =====================================================
              CTA GROUP
          ====================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: "easeOut",
            }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 mt-4 w-full sm:w-auto z-30"
          >
            {/* Explore Projects */}
            <Link
              href="/projects"
              className="inline-flex items-center justify-center px-8 py-4 bg-sapl-blue hover:bg-sapl-blue-hover text-white font-extrabold text-xs tracking-widest uppercase rounded-full transition-all duration-300 shadow-lg shadow-sapl-blue/20 hover:shadow-sapl-blue/40 hover:scale-[1.03] active:scale-[0.97] select-none w-full sm:w-auto text-center cursor-pointer"
            >
              Explore Projects
            </Link>

            {/* Download Brochure */}
            <button
              onClick={() =>
                window.dispatchEvent(new Event("open-brochure-modal"))
              }
              className="inline-flex items-center justify-center px-8 py-4 bg-white/80 hover:bg-white text-navy-800 font-extrabold text-xs tracking-widest uppercase rounded-full border border-white/80 hover:border-sapl-blue/50 transition-all duration-300 select-none cursor-pointer hover:scale-[1.03] active:scale-[0.97] w-full sm:w-auto text-center shadow-sm backdrop-blur-sm"
            >
              Download Brochure
            </button>

            {/* Contact Us */}
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-sapl-blue hover:bg-sapl-blue-hover text-white font-extrabold text-xs tracking-widest uppercase rounded-full transition-all duration-300 shadow-lg shadow-sapl-blue/20 hover:shadow-sapl-blue/40 hover:scale-[1.03] active:scale-[0.97] select-none w-full sm:w-auto text-center cursor-pointer"
            >
              Contact Us
            </Link>
          </motion.div>

        </div>
      </div>

    </section>
  );
}

