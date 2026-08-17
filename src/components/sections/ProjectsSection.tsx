"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import ProjectCard from "../ui/ProjectCard";
import { featuredProjectsList } from "@/data/projects";

const featuredProjects = featuredProjectsList;

export default function ProjectsSection() {
  return (
    <section className="relative py-10 md:py-14 bg-white overflow-hidden border-b border-[#eae7e3]">



      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Modernist Section Header - Centered */}
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-10 flex flex-col items-center gap-4">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {featuredProjects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: idx * 0.08, ease: "easeOut" }}
            >
              <ProjectCard
                slug={project.slug}
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
        <div className="flex justify-center mt-10">
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
