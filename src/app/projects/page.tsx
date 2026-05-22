"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "@/components/ui/ProjectCard";
import { ChevronDown } from "lucide-react";

const projectsList = [
  {
    name: "Shriram 122",
    category: "Residential",
    location: "Chennai",
    imageUrl: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80",
    status: "Ongoing" as const,
    description: "Premium high-density residential towers featuring advanced structural layouts and landscaping frameworks.",
  },
  {
    name: "Aravind Eye Hospital",
    category: "Healthcare",
    location: "Salem",
    imageUrl: "https://images.unsplash.com/photo-1586773860418-d37222d8fce2?auto=format&fit=crop&w=800&q=80",
    status: "Ongoing" as const,
    description: "Multi-story specialized medical facility with custom infection-control HVAC layouts and surgical units.",
  },
  {
    name: "LGB Factory Building 2",
    category: "Industrial",
    location: "Vallam, Chennai",
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
    status: "Completed" as const,
    description: "Heavy manufacturing plant comprising large-span steel truss setups and high-tonnage concrete floors.",
  },
  {
    name: "SVB Tech Park",
    category: "Commercial / IT-Park",
    location: "Coimbatore",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    status: "Completed" as const,
    description: "State-of-the-art corporate IT center constructed with sustainable LEED materials and modern glazed facades.",
  },
  {
    name: "Sankara Eye Hospital",
    category: "Healthcare",
    location: "Guntur, AP",
    imageUrl: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80",
    status: "Completed" as const,
    description: "Large specialized tertiary healthcare hospital featuring standard structural design and diagnostics setups.",
  },
  {
    name: "PSG IMS&R Oncology Block",
    category: "Healthcare",
    location: "Coimbatore",
    imageUrl: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80",
    status: "Completed" as const,
    description: "Advanced specialized oncology therapy unit built to strict medical and nuclear shielding codes.",
  },
  {
    name: "Global Tech Park",
    category: "Commercial / IT-Park",
    location: "Bangalore",
    imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
    status: "Completed" as const,
    description: "Massive modern technological office park featuring steel glass frames and sustainable engineering.",
  },
  {
    name: "Cheyyar - SIPCOT Complex",
    category: "Industrial",
    location: "Tiruvannamalai",
    imageUrl: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80",
    status: "Completed" as const,
    description: "Heavy manufacturing and chemical processing industrial shed built to custom structural spans.",
  },
  {
    name: "NGP School Academic Block",
    category: "Institutional",
    location: "Coimbatore",
    imageUrl: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80",
    status: "Completed" as const,
    description: "Multi-story contemporary academic institution featuring large libraries, labs, and modern auditoriums.",
  },
];

const categories = ["All", "Commercial / IT-Park", "Industrial", "Healthcare", "Institutional", "Residential"];
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
