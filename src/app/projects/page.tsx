"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "@/components/ui/ProjectCard";
import { ChevronDown } from "lucide-react";
import { projectsList, featuredProjectsList } from "@/data/projects";

const sectors = ["IT Park", "Industrial", "Healthcare", "Institutional", "Residential"];
const statuses = ["All", "Completed", "Ongoing"];

// Extract unique clients and architects dynamically from all projects
const clientsList = Array.from(
  new Set(projectsList.map((p) => p.details?.client).filter(Boolean))
).sort() as string[];

const architectsList = Array.from(
  new Set(projectsList.map((p) => p.details?.consultant).filter(Boolean))
).sort() as string[];

export default function ProjectsPage() {
  return (
    <Suspense fallback={<div className="text-center py-20 text-slate-400 font-semibold uppercase tracking-wider">Loading Projects...</div>}>
      <ProjectsContent />
    </Suspense>
  );
}

function ProjectsContent() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [sortBy, setSortBy] = useState("default");
  const [showAll, setShowAll] = useState(false);

  const searchParams = useSearchParams();
  const clientQuery = searchParams.get("client");
  const architectQuery = searchParams.get("architect");

  useEffect(() => {
    if (clientQuery) {
      setSelectedCategory(`client:${clientQuery}`);
    } else if (architectQuery) {
      setSelectedCategory(`architect:${architectQuery}`);
    }
  }, [clientQuery, architectQuery]);

  // Reset showAll when filters change
  useEffect(() => {
    setShowAll(false);
  }, [selectedCategory, selectedStatus]);

  const isFilterActive =
    selectedCategory !== "All" ||
    selectedStatus !== "All" ||
    !!clientQuery ||
    !!architectQuery;

  // Filter helper
  const filterList = (list: typeof projectsList) => {
    return list.filter((project) => {
      let categoryMatch = false;
      if (selectedCategory === "All") {
        categoryMatch = true;
      } else if (selectedCategory.startsWith("client:")) {
        const targetClient = selectedCategory.replace("client:", "");
        categoryMatch = project.details?.client === targetClient;
      } else if (selectedCategory.startsWith("architect:")) {
        const targetArchitect = selectedCategory.replace("architect:", "");
        categoryMatch = project.details?.consultant === targetArchitect;
      } else {
        categoryMatch = project.category === selectedCategory;
      }

      const statusMatch =
        selectedStatus === "All" || project.status === selectedStatus;
      return categoryMatch && statusMatch;
    });
  };

  const filteredFeatured = filterList(featuredProjectsList);
  const filteredAll = filterList(projectsList);

  // Combine lists with featured projects always guaranteed to be on top and no duplicates
  const combinedProjects: typeof projectsList = [];
  const seenSlugs = new Set<string>();

  filteredFeatured.forEach((p) => {
    combinedProjects.push(p);
    seenSlugs.add(p.slug);
  });

  filteredAll.forEach((p) => {
    if (!seenSlugs.has(p.slug)) {
      combinedProjects.push(p);
      seenSlugs.add(p.slug);
    }
  });

  // If a filter is applied, we automatically display all matched projects (with featured ones on top)
  // If no filter is applied, we show featured list or combine based on showAll
  const displayProjects = isFilterActive || showAll ? combinedProjects : filteredFeatured;

  const sortedProjects = [...displayProjects].sort((a, b) => {
    if (sortBy === "alphabetical-asc") {
      return a.name.localeCompare(b.name);
    }
    if (sortBy === "alphabetical-desc") {
      return b.name.localeCompare(a.name);
    }
    // Default sorting maintains insertion order (featured on top)
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

          {/* Dropdown 1: Category, Client & Architect Filter */}
          <div className="relative w-[170px] sm:w-[260px]">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full bg-white border border-[#eae7e3] hover:border-sapl-blue/50 text-[9px] font-extrabold uppercase tracking-wider text-[#1c1a17] py-1 pl-2 pr-6 rounded-sm appearance-none focus:outline-none focus:border-sapl-blue transition-all cursor-pointer shadow-sm"
            >
              <option value="All">All Categories / Clients / Architects</option>
              
              <optgroup label="Sectors" className="font-bold text-navy-400">
                {sectors.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </optgroup>

              <optgroup label="Clients" className="font-bold text-navy-400">
                {clientsList.map((client) => (
                  <option key={client} value={`client:${client}`}>
                    Client: {client}
                  </option>
                ))}
              </optgroup>

              <optgroup label="Architects" className="font-bold text-navy-400">
                {architectsList.map((arc) => (
                  <option key={arc} value={`architect:${arc}`}>
                    Architect: {arc}
                  </option>
                ))}
              </optgroup>
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
                  key={project.slug}
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

        {/* Modernist minimalist Show All Projects trigger */}
        {!isFilterActive && !showAll && sortedProjects.length > 0 && (
          <div className="text-center mt-16 flex justify-center animate-[fadeIn_0.6s_ease-out_0.3s_both]">
            <button
              onClick={() => setShowAll(true)}
              className="group relative px-10 py-4 bg-sapl-blue hover:bg-[#0c8099] text-white text-[10px] font-black uppercase tracking-widest overflow-hidden transition-all duration-300 hover:shadow-lg rounded-sm cursor-pointer"
            >
              <span className="relative z-10">Show All Projects</span>
              <div className="absolute inset-0 bg-[#0d8ca6] transition-transform duration-300 translate-y-full group-hover:translate-y-0" />
            </button>
          </div>
        )}
      </section>

    </div>
  );
}
