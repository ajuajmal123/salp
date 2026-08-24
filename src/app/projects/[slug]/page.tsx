"use client";

import React, { use, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  MapPin,
  Calendar,
  Maximize2,
  Briefcase,
  User,
  CheckCircle,
  AlertTriangle,
  Send,
  Building2,
  X,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { projectsList, featuredProjectsList } from "@/data/projects";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function ProjectDetailsPage({ params }: PageProps) {
  const { slug } = use(params);

  // Find project by slug in both featured and normal lists
  const project = featuredProjectsList.find((p) => p.slug === slug) || projectsList.find((p) => p.slug === slug);
  const [activeImgIdx, setActiveImgIdx] = useState<number | null>(null);

  if (!project) {
    return (
      <div className="pt-20 pb-12 md:pt-32 md:pb-12 md:pb-24 bg-white min-h-screen flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl font-extrabold text-navy-950 uppercase tracking-tight">
          Project Not Found
        </h1>
        <p className="text-slate-500 mt-4 max-w-md">
          The project you are looking for does not exist or has been relocated.
        </p>
        <Link
          href="/projects"
          className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-sapl-blue hover:bg-sapl-blue-hover text-white font-extrabold text-xs tracking-wider uppercase rounded-full transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Projects
        </Link>
      </div>
    );
  }

  const details = project.details || {};
  const gallery = project.gallery || [];

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeImgIdx === null) return;
    setActiveImgIdx((prev) => (prev !== null && prev > 0 ? prev - 1 : gallery.length - 1));
  };

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeImgIdx === null) return;
    setActiveImgIdx((prev) => (prev !== null && prev < gallery.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className="pt-16 md:pt-20 bg-white min-h-screen">

      {/* 1. Dynamic Hero Header Section */}
      <section className="relative h-[55vh] min-h-[380px] bg-navy-950 text-white overflow-hidden">
        {/* Background Project Image */}
        <div className="absolute inset-0 select-none pointer-events-none">
          {project.imageUrl ? (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              src={project.imageUrl}
              alt={project.name}
              className="w-full h-full object-cover object-center scale-[1.02] filter brightness-[0.6] contrast-[1.05]"
            />
          ) : (
            <div className="w-full h-full bg-[#1c1a17] bg-[radial-gradient(circle_at_center,rgba(40,40,40,0.15)_0%,transparent_100%)] opacity-40" />
          )}
          {/* Premium dark architectural mask */}
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/60 to-transparent" />
        </div>

        {/* Back Link & Info Container */}
        <div className="absolute inset-0 z-10 flex flex-col justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

          {/* Back Navigation Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white/80 hover:text-white bg-navy-950/40 hover:bg-navy-950/70 px-4 py-2 rounded-full backdrop-blur-sm transition-all border border-white/10"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Back to Gallery
            </Link>
          </motion.div>

          {/* Project Primary Identifiers */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-4 text-left"
          >
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-[10px] font-black uppercase tracking-widest px-3.5 py-1.5 bg-[#10b981] text-white rounded-full border border-[#10b981]/20 shadow-md">
                {project.status}
              </span>
              <span className="text-[10px] font-black uppercase tracking-widest px-3.5 py-1.5 bg-sapl-blue text-white rounded-full shadow-md">
                {project.category}
              </span>
            </div>

            <h1 className="font-sans font-extrabold text-3xl sm:text-5xl lg:text-6xl tracking-tight uppercase leading-tight">
              {project.name}
            </h1>

            <div className="flex items-center gap-2 text-sm text-[#eae7e3] font-medium mt-1">
              <MapPin className="w-4 h-4 text-sapl-blue shrink-0" />
              <span>{project.location}</span>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 2. Project Specifications Grid (Banding: Pure White Canvas) */}
      <section className="py-10 md:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-[#eae7e3]">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 sm:gap-6">

          {/* Spec Card 1: Client */}
          {details.client ? (
            <Link
              href={`/projects?client=${encodeURIComponent(details.client)}`}
              className="p-5 bg-[#f7f6f4] border border-[#eae7e3] hover:border-sapl-blue/50 rounded-sm text-left flex flex-col justify-between min-h-[140px] hover:shadow-md transition-all duration-300 group cursor-pointer"
            >
              <div className="w-9 h-9 rounded-sm bg-white border border-[#eae7e3] flex items-center justify-center text-sapl-blue shadow-sm group-hover:bg-sapl-blue group-hover:text-white group-hover:border-sapl-blue transition-colors duration-300 shrink-0">
                <User className="w-5 h-5" />
              </div>
              <div className="mt-auto pt-3">
                <h4 className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">
                  Client / Sponsor
                </h4>
                <p className="text-xs sm:text-sm font-extrabold text-navy-950 mt-1 line-clamp-2 leading-tight group-hover:text-sapl-blue transition-colors duration-300">
                  {details.client}
                </p>
              </div>
            </Link>
          ) : (
            <div className="p-5 bg-[#f7f6f4] border border-[#eae7e3] rounded-sm text-left flex flex-col justify-between min-h-[140px] shadow-sm">
              <div className="w-9 h-9 rounded-sm bg-white border border-[#eae7e3] flex items-center justify-center text-sapl-blue shadow-sm shrink-0">
                <User className="w-5 h-5" />
              </div>
              <div className="mt-auto pt-3">
                <h4 className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">
                  Client / Sponsor
                </h4>
                <p className="text-xs sm:text-sm font-extrabold text-navy-950 mt-1 line-clamp-2 leading-tight">
                  Srinivasan Associates
                </p>
              </div>
            </div>
          )}

          {/* Spec Card 2: Consultant (Architect) */}
          {details.consultant ? (
            <Link
              href={`/projects?architect=${encodeURIComponent(details.consultant)}`}
              className="p-5 bg-[#f7f6f4] border border-[#eae7e3] hover:border-sapl-blue/50 rounded-sm text-left flex flex-col justify-between min-h-[140px] hover:shadow-md transition-all duration-300 group cursor-pointer"
            >
              <div className="w-9 h-9 rounded-sm bg-white border border-[#eae7e3] flex items-center justify-center text-sapl-blue shadow-sm group-hover:bg-sapl-blue group-hover:text-white group-hover:border-sapl-blue transition-colors duration-300 shrink-0">
                <Briefcase className="w-5 h-5" />
              </div>
              <div className="mt-auto pt-3">
                <h4 className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">
                  Architect / Consultant
                </h4>
                <p className="text-xs sm:text-sm font-extrabold text-navy-950 mt-1 line-clamp-2 leading-tight group-hover:text-sapl-blue transition-colors duration-300">
                  {details.consultant}
                </p>
              </div>
            </Link>
          ) : (
            <div className="p-5 bg-[#f7f6f4] border border-[#eae7e3] rounded-sm text-left flex flex-col justify-between min-h-[140px] shadow-sm">
              <div className="w-9 h-9 rounded-sm bg-white border border-[#eae7e3] flex items-center justify-center text-sapl-blue shadow-sm shrink-0">
                <Briefcase className="w-5 h-5" />
              </div>
              <div className="mt-auto pt-3">
                <h4 className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">
                  Architect / Consultant
                </h4>
                <p className="text-xs sm:text-sm font-extrabold text-navy-950 mt-1 line-clamp-2 leading-tight">
                  General Contracting
                </p>
              </div>
            </div>
          )}

          {/* Spec Card 3: Timeline */}
          <div className="p-5 bg-[#f7f6f4] border border-[#eae7e3] rounded-sm text-left flex flex-col justify-between min-h-[140px] hover:shadow-sm transition-shadow">
            <div className="w-9 h-9 rounded-sm bg-white border border-[#eae7e3] flex items-center justify-center text-sapl-blue shadow-sm shrink-0">
              <Calendar className="w-5 h-5" />
            </div>
            <div className="mt-auto pt-3">
              <h4 className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">
                Timeline Duration
              </h4>
              <p className="text-xs sm:text-sm font-extrabold text-navy-950 mt-1 line-clamp-2 leading-tight break-words">
                {details.startDate && details.completionDate
                  ? `${details.startDate} - ${details.completionDate}`
                  : project.status === "Ongoing" && details.startDate
                    ? `${details.startDate} - Present`
                    : project.status}
              </p>
            </div>
          </div>

          {/* Spec Card 4: Floors */}
          <div className="p-5 bg-[#f7f6f4] border border-[#eae7e3] rounded-sm text-left flex flex-col justify-between min-h-[140px] hover:shadow-sm transition-shadow">
            <div className="w-9 h-9 rounded-sm bg-white border border-[#eae7e3] flex items-center justify-center text-sapl-blue shadow-sm shrink-0">
              <Building2 className="w-5 h-5" />
            </div>
            <div className="mt-auto pt-3">
              <h4 className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">
                Height / Floors
              </h4>
              <p className="text-xs sm:text-sm font-extrabold text-navy-950 mt-1 line-clamp-2 leading-tight">
                {details.floors || "1 Block"}
              </p>
            </div>
          </div>

          {/* Spec Card 5: Built Area */}
          <div className="p-5 bg-[#f7f6f4] border border-[#eae7e3] rounded-sm text-left flex flex-col justify-between min-h-[140px] hover:shadow-sm transition-shadow">
            <div className="w-9 h-9 rounded-sm bg-white border border-[#eae7e3] flex items-center justify-center text-sapl-blue shadow-sm shrink-0">
              <Maximize2 className="w-5 h-5" />
            </div>
            <div className="mt-auto pt-3">
              <h4 className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">
                Built-up Area
              </h4>
              <p className="text-xs sm:text-sm font-extrabold text-navy-950 mt-1 line-clamp-2 leading-tight">
                {details.area || "Custom Layout"}
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Deep Analysis & Narrative (Banding: Clean & Spacious Layout) */}
      <section className="py-12 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-[#eae7e3]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          {/* Main Narrative Column (7 columns) */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-left">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-sapl-blue">
              Project Overview
            </span>
            <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-navy-950 tracking-tight uppercase">
              Engineering Legacy & Development Scope
            </h2>
            <div className="w-12 h-[2.5px] bg-sapl-blue rounded-full" />

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mt-2 font-medium">
              {project.description} We utilized high-grade building techniques to guarantee long-term structure integrity, prioritizing safety standard audits and zero-defect workmanship throughout the construction life-cycle.
            </p>

            {/* Highlights List if present */}
            {details.highlights && details.highlights.length > 0 && (
              <div className="flex flex-col gap-4 mt-4">
                <h3 className="text-xs font-black uppercase tracking-[0.2em] text-navy-950">
                  Key Technical Features
                </h3>
                <div className="space-y-3">
                  {details.highlights.map((highlight, index) => (
                    <div key={index} className="flex gap-3 items-start">
                      <CheckCircle className="w-5 h-5 text-[#10b981] shrink-0 mt-0.5" />
                      <p className="text-[#4F4C42] text-sm font-semibold">
                        {highlight}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Project Challenges Panel (5 columns) */}
          <div className="lg:col-span-5 bg-[#f7f6f4] border border-[#eae7e3] p-8 rounded-sm text-left shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-sm bg-white border border-[#eae7e3] flex items-center justify-center text-sapl-blue shrink-0">
                <AlertTriangle className="w-4.5 h-4.5" />
              </div>
              <h3 className="text-xs font-extrabold uppercase tracking-[0.2em] text-navy-950">
                Engineering Challenges Solved
              </h3>
            </div>

            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
              {details.challenges || "Managing complex design coordinates and logistics schedules on tight urban workspaces without interrupting surrounding utilities."}
            </p>

            <div className="mt-8 pt-6 border-t border-[#eae7e3] flex flex-col gap-4">
              <span className="text-[10px] font-black uppercase tracking-wider text-slate-400">
                Assurance Protocol
              </span>
              <p className="text-[11px] text-[#4F4C42] leading-relaxed italic">
                "Our strict adherence to safety standards and structural quality audits ensured zero delays during final building validation checks."
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 3.5 Photo Gallery Section */}
      {gallery.length > 0 && (
        <section className="py-12 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-[#eae7e3]">
          <div className="text-left mb-12 flex flex-col gap-2">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-sapl-blue">
              Visual Portfolio
            </span>
            <h2 className="font-sans font-extrabold text-3xl text-navy-950 tracking-tight uppercase">
              Project Photo Gallery
            </h2>
            <div className="w-12 h-[2.5px] bg-sapl-blue rounded-full mt-2" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {gallery.map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onClick={() => setActiveImgIdx(idx)}
                className="relative aspect-[4/3] rounded-sm overflow-hidden group cursor-pointer border border-[#eae7e3] shadow-sm hover:shadow-md transition-shadow"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img}
                  alt={`${project.name} gallery ${idx + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-navy-950/20 group-hover:bg-navy-950/40 transition-colors flex items-center justify-center">
                  <span className="text-white text-xs font-bold tracking-wider uppercase opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 transition-all bg-navy-950/60 px-4 py-2 rounded-sm backdrop-blur-sm">
                    View Photo
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* Lightbox Modal Overlay */}
      <AnimatePresence>
        {activeImgIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveImgIdx(null)}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 sm:p-12"
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveImgIdx(null)}
              className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2.5 rounded-full transition-colors z-50 cursor-pointer"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Prev Button */}
            <button
              onClick={handlePrevImage}
              className="absolute left-4 sm:left-8 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors z-50 cursor-pointer"
              aria-label="Previous Image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Button */}
            <button
              onClick={handleNextImage}
              className="absolute right-4 sm:right-8 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors z-50 cursor-pointer"
              aria-label="Next Image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image Wrapper */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl max-h-[80vh] w-full h-full flex items-center justify-center select-none"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={gallery[activeImgIdx]}
                alt={`${project.name} full view`}
                className="max-w-full max-h-full object-contain rounded-sm"
              />
              <div className="absolute -bottom-10 left-0 right-0 text-center">
                <p className="text-white/60 text-xs tracking-wider uppercase font-semibold">
                  Photo {activeImgIdx + 1} of {gallery.length} — {project.name}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 4. Dynamic CTA Block */}
      <section className="py-12 md:py-20 bg-sapl-blue text-white relative overflow-hidden">


        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 flex flex-col items-center gap-6">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-white/80">
            Request Consultation
          </span>
          <h2 className="font-sans font-extrabold text-2xl sm:text-4xl tracking-tight uppercase leading-tight max-w-2xl">
            Planning a High-Spec Engineering Project?
          </h2>
          <p className="text-navy-200 text-xs sm:text-sm max-w-xl -mt-2 leading-relaxed">
            Let us partner with you to turn complex designs into premium structural landmarks. Speak with our engineering estimation division today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-navy-950 hover:bg-navy-900 text-white font-extrabold text-xs tracking-widest uppercase rounded-full transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <Send className="w-3.5 h-3.5" />
              Connect With Us
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-white/10 hover:bg-white/15 text-white border border-white/10 hover:border-white/20 font-extrabold text-xs tracking-widest uppercase rounded-full transition-all"
            >
              Explore Gallery
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
