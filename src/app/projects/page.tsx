"use client";

import React, { useState, useEffect, Suspense, useRef } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "@/components/ui/ProjectCard";
import { ChevronDown, Search } from "lucide-react";
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

type Option = { label: string; value: string; group?: string };

function SearchableCombo({
  options,
  value,
  onChange,
  placeholder,
}: {
  options: Option[];
  value: string;
  onChange: (val: string) => void;
  placeholder: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredOptions = options.filter(opt =>
    opt.label.toLowerCase().includes(search.toLowerCase()) ||
    (opt.group && opt.group.toLowerCase().includes(search.toLowerCase()))
  );

  const selectedOpt = options.find((o) => o.value === value);

  // Grouping logic for rendering
  const grouped = filteredOptions.reduce((acc, opt) => {
    const key = opt.group || "ungrouped";
    if (!acc[key]) acc[key] = [];
    acc[key].push(opt);
    return acc;
  }, {} as Record<string, Option[]>);

  return (
    <div className="relative w-full z-50 text-[9px] uppercase tracking-wider text-[#1c1a17]" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-white border border-[#eae7e3] hover:border-sapl-blue/50 font-extrabold py-2 px-3 rounded-sm flex items-center justify-between transition-all cursor-pointer shadow-sm text-left relative z-20"
      >
        <span className="truncate">{selectedOpt?.label || placeholder}</span>
        <ChevronDown className={`w-3 h-3 text-[#afa99e] transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full left-0 right-0 mt-1 bg-white border border-[#eae7e3] shadow-lg rounded-sm overflow-hidden z-50 flex flex-col max-h-64"
          >
            <div className="p-2 border-b border-[#eae7e3] shrink-0 sticky top-0 bg-white z-10 flex flex-row items-center gap-2">
              <Search className="w-3 h-3 text-[#afa99e]" />
              <input
                type="text"
                autoFocus
                placeholder="search clients, architects..."
                className="w-full text-[9px] font-bold p-1 bg-transparent focus:outline-none placeholder:text-[#afa99e]"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            <div className="overflow-y-auto w-full py-1">
              {Object.keys(grouped).map((groupKey) => (
                <div key={groupKey}>
                  {groupKey !== "ungrouped" && (
                    <div className="px-3 py-1.5 font-black text-navy-300 bg-[#f7f6f4]/50 border-y border-[#eae7e3]/50">
                      {groupKey}
                    </div>
                  )}
                  {grouped[groupKey].map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => {
                        onChange(opt.value);
                        setIsOpen(false);
                      }}
                      className={`w-full text-left px-3 py-2 font-bold hover:bg-sapl-blue/10 hover:text-sapl-blue transition-colors cursor-pointer ${value === opt.value ? 'bg-sapl-blue text-white' : ''}`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              ))}
              {filteredOptions.length === 0 && (
                <div className="px-3 py-4 text-center text-[#afa99e] font-bold">
                  No results found
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

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
  const [searchQuery, setSearchQuery] = useState("");
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
  }, [selectedCategory, selectedStatus, searchQuery]);

  const isFilterActive =
    selectedCategory !== "All" ||
    selectedStatus !== "All" ||
    searchQuery.trim() !== "" ||
    !!clientQuery ||
    !!architectQuery;

  // Filter helper
  const filterList = (list: typeof projectsList) => {
    return list.filter((project) => {
      let categoryMatch = false;

      // ... existing category check logic ...
      if (selectedCategory === "All") {
        categoryMatch = true;
      } else if (selectedCategory.startsWith("client:")) {
        categoryMatch = project.details?.client === selectedCategory.split(":")[1];
      } else if (selectedCategory.startsWith("architect:")) {
        categoryMatch = project.details?.consultant === selectedCategory.split(":")[1];
      } else {
        categoryMatch = project.category === selectedCategory;
      }

      let statusMatch = true;
      if (selectedStatus !== "All") {
        statusMatch = project.status === selectedStatus;
      }

      let queryMatch = true;
      if (searchQuery.trim() !== "") {
        const query = searchQuery.toLowerCase();
        queryMatch =
          project.name.toLowerCase().includes(query) ||
          project.location.toLowerCase().includes(query) ||
          project.description.toLowerCase().includes(query);
      }

      return categoryMatch && statusMatch && queryMatch;
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

  const categoryOptions = [
    { label: "All Categories / Clients / Architects", value: "All" },
    ...sectors.map(cat => ({ label: cat, value: cat, group: "Sectors" })),
    ...clientsList.map(c => ({ label: `Client: ${c}`, value: `client:${c}`, group: "Clients" })),
    ...architectsList.map(a => ({ label: `Architect: ${a}`, value: `architect:${a}`, group: "Architects" }))
  ];

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
        <div className="flex flex-col sm:flex-row items-center justify-end gap-2 w-full">

          {/* Search Input for Project Matches */}
          <div className="relative w-full sm:w-[220px]">
            <Search className="absolute left-2 top-1/2 -translate-y-1/2 w-3 h-3 text-[#afa99e]" />
            <input
              type="text"
              placeholder="Search Projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-[#eae7e3] hover:border-sapl-blue/50 text-[9px] font-extrabold uppercase tracking-wider text-[#1c1a17] py-2 pl-6 pr-2 rounded-sm focus:outline-none focus:border-sapl-blue transition-all shadow-sm placeholder:text-[#afa99e]"
            />
          </div>

          {/* Dropdown 1: Category, Client & Architect Filter */}
          <div className="relative w-full sm:w-[220px]">
            <SearchableCombo
              options={categoryOptions}
              value={selectedCategory}
              onChange={(val) => setSelectedCategory(val)}
              placeholder="Select Category / Client"
            />
          </div>

          {/* Dropdown 2: Status Filter */}
          <div className="relative w-full sm:w-[220px]">
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="w-full bg-white border border-[#eae7e3] hover:border-sapl-blue/50 text-[9px] font-extrabold uppercase tracking-wider text-[#1c1a17] py-2 pl-2 pr-6 rounded-sm appearance-none focus:outline-none focus:border-sapl-blue transition-all cursor-pointer shadow-sm"
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
                    imageAlt={project.imageAlt}
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
