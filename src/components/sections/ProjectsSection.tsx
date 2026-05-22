"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ProjectCard from "../ui/ProjectCard";

const featuredProjects = [
  {
    name: "SVB Tech Park",
    category: "Commercial / IT-Park",
    location: "Coimbatore",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    status: "Completed" as const,
    description: "State-of-the-art corporate IT center constructed with sustainable LEED materials and modern glazed facades.",
  },
  {
    name: "Aravind Eye Hospital",
    category: "Healthcare Infrastructure",
    location: "Salem",
    imageUrl: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80",
    status: "Ongoing" as const,
    description: "Multi-story specialized medical facility with custom infection-control HVAC layouts and surgical units.",
  },
  {
    name: "LGB Factory Building 2",
    category: "Industrial Project",
    location: "Vallam, Chennai",
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
    status: "Completed" as const,
    description: "Heavy manufacturing plant comprising large-span steel truss setups and high-tonnage concrete floors.",
  },
  {
    name: "Shriram 122",
    category: "Residential Complex",
    location: "Chennai",
    imageUrl: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80",
    status: "Ongoing" as const,
    description: "Premium high-density residential towers featuring advanced structural layouts and landscaping frameworks.",
  },
  {
    name: "ELGI Accessories Hub",
    category: "Industrial & Logistics",
    location: "Coimbatore",
    imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
    status: "Completed" as const,
    description: "Advanced automated warehousing facility featuring double-deep racking systems and precision flooring.",
  },
  {
    name: "KCT Science Tower",
    category: "Institutional Complex",
    location: "Coimbatore",
    imageUrl: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80",
    status: "Upcoming" as const,
    description: "Multi-discipline institutional laboratory and research center designed for high-density academic occupancy.",
  },
];

export default function ProjectsSection() {
  return (
    <section className="relative py-24 bg-white overflow-hidden border-b border-[#eae7e3]">

      {/* Subtle background grids */}
      <div className="absolute inset-0 opacity-[0.01] bg-[linear-gradient(to_right,#000000_1px,transparent_1px),linear-gradient(to_bottom,#000000_1px,transparent_1px)] bg-[size:5rem_5rem]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Modernist Section Header - Centered */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center gap-4">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-sapl-blue">
            Corporate Portfolio
          </span>
          <h2 className="font-sans font-extrabold text-3xl sm:text-4xl tracking-tight uppercase" style={{ color: "#1c1a17" }}>
            Recent Engineering Landmarks
          </h2>
          <p className="text-sm leading-relaxed !text-[#4F4C42] max-w-2xl">
            Explore our recent landmark projects executed to perfection. We build enduring high-performance infrastructure completed across South India.
          </p>
        </div>

        {/* Projects Grid (Responsive 3 Columns for 6 Projects) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {featuredProjects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: idx * 0.08, ease: "easeOut" }}
            >
              <ProjectCard
                name={project.name}
                category={project.category}
                location={project.location}
                imageUrl={project.imageUrl}
                status={project.status}
                description={project.description}
              />
            </motion.div>
          ))}
        </div>

        {/* Centered Gallery Button at the Bottom */}
        <div className="flex justify-center mt-16">
          <Link
            href="/projects"
            className="inline-flex items-center justify-center px-8 py-4 bg-sapl-blue hover:bg-sapl-blue-hover text-white font-extrabold text-xs tracking-widest uppercase rounded-full transition-all duration-300 shadow-lg shadow-sapl-blue/20 hover:shadow-sapl-blue/45 hover:scale-[1.03] active:scale-[0.97] select-none group"
          >
            Explore Full Gallery
          </Link>
        </div>

      </div>
    </section>
  );
}
