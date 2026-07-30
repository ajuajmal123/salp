"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "@/components/ui/ProjectCard";
import { ChevronDown } from "lucide-react";

import { projectsList } from "@/data/projects";

const categories = ["All", "IT Park", "Industrial", "Healthcare", "Institutional", "Residential"];
const statuses = ["All", "Completed", "Ongoing"];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [sortBy, setSortBy] = useState("default");

  const filteredProjects = projectsList.filter((project) => {
    const categoryMatch =
      selectedCategory === "All" || project.category === selectedCategory;
    const statusMatch =
      selectedStatus === "All" || project.status === selectedStatus;
    return categoryMatch && statusMatch;
  });

  const sortedProjects = [...filteredProjects].sort((a, b) => {
    if (sortBy === "alphabetical-asc") {
      return a.name.localeCompare(b.name);
    }
    if (sortBy === "alphabetical-desc") {
      return b.name.localeCompare(a.name);
    }
    return 0;
  });

  return (
    <div className="pt-28 lg:pt-32 pb-24 bg-white min-h-screen">

      {/* Page Heading */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-5 text-center flex flex-col items-center justify-center">
        <h1 className="font-sans font-extrabold text-2xl sm:text-3xl tracking-tight uppercase mt-2 text-[#1c1a17]">
          Our Projects Gallery
        </h1>
        <div className="w-12 h-[2px] bg-sapl-blue rounded-full mt-2" />
      </section>

      {/* Filter Row - Extremely Compact Dropdowns Aligned to the Right */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-3">
        <div className="flex flex-row items-center justify-end gap-2">

          {/* Dropdown 1: Category Filter */}
          <div className="relative w-[135px] sm:w-[170px]">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full bg-white border border-[#eae7e3] hover:border-sapl-blue/50 text-[9px] font-extrabold uppercase tracking-wider text-[#1c1a17] py-1 pl-2 pr-6 rounded-sm appearance-none focus:outline-none focus:border-sapl-blue transition-all cursor-pointer shadow-sm"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat === "All" ? "All Categories" : cat}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-1.5 pointer-events-none text-[#afa99e]">
              <ChevronDown className="w-3 h-3" />
            </div>
          </div>

          {/* Dropdown 2: Status Filter */}
          <div className="relative w-[105px] sm:w-[130px]">
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="w-full bg-white border border-[#eae7e3] hover:border-sapl-blue/50 text-[9px] font-extrabold uppercase tracking-wider text-[#1c1a17] py-1 pl-2 pr-6 rounded-sm appearance-none focus:outline-none focus:border-sapl-blue transition-all cursor-pointer shadow-sm"
            >
              {statuses.map((stat) => (
                <option key={stat} value={stat}>
                  {stat === "All" ? "All Statuses" : stat}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-1.5 pointer-events-none text-[#afa99e]">
              <ChevronDown className="w-3 h-3" />
            </div>
          </div>

        </div>
      </section>

      {/* Projects Grid */}
      <section className="pt-2 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {sortedProjects.length > 0 ? (
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {sortedProjects.map((project) => (
                <motion.div
                  key={project.name}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
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
            </AnimatePresence>
          </motion.div>
        ) : (
          <div className="text-center py-20">
            <p className="text-slate-400 dark:text-navy-500 text-lg font-semibold uppercase tracking-wider">
              No projects found matching the selected filters.
            </p>
          </div>
        )}
      </section>

    </div>
  );
}
