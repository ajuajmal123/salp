"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Users2,
  Compass,
  ChevronRight,
  CheckCircle,
  Building2,
  Layers,
  Heart,
  Globe2,
  ChevronDown,
  FileText,
  BadgeAlert,
  ArrowUpRight,
  Search,
  GraduationCap,
  Briefcase
} from "lucide-react";
import {
  fullClientsList,
  fullArchitectsList
} from "./strengthData";
import ClientMarquee from "@/components/sections/ClientMarquee";

// Tab definition
const tabs = [
  { id: "clients", label: "Clients", icon: Users2 },
  { id: "architects", label: "Architects", icon: Compass },
];

const clientsList = [
  { name: "ITC Limited", desc: "Long-term partnership delivering industrial storage and premium hospitality infrastructure.", industry: "Conglomerate" },
  { name: "PSG Institutions", desc: "Executing state-of-the-art educational campuses and specialized scientific research blocks.", industry: "Education & Research" },
  { name: "The Ramco Cements Limited", desc: "Structural execution of massive industrial grinding, manufacturing, and warehouse structures.", industry: "Manufacturing" },
  { name: "Lakshmi Machine Works (LMW)", desc: "Delivering heavy structural machine fabrication yards and large warehouse floors.", industry: "Industrial Engineering" },
  { name: "Raj Park Hotel Group", desc: "Structural construction of premium hospitality wings and complex multistory buildings.", industry: "Hospitality" },
  { name: "Nivasan Homes", desc: "Collaborating on high-end residential apartment towers with premium aesthetic specifications.", industry: "Residential Real Estate" },
  { name: "S.M. Hospital & Surgicare", desc: "Executing high-tech cleanroom hospital structures, patient wings, and surgical zones.", industry: "Healthcare" },
  { name: "Akshaya", desc: "Partnering to build landmark commercial spaces with rigorous quality and structural standards.", industry: "Commercial Construction" },
  { name: "Stanes", desc: "Delivering durable retail, commercial, and administrative workspaces across the region.", industry: "Retail & Commerce" },
  { name: "Lancor", desc: "Building enduring premium housing and mixed-use commercial landmarks.", industry: "Mixed-Use Real Estate" },
];

const collaborations = [
  {
    title: "BIM & Revit Coordination",
    desc: "We utilize building information modeling (BIM) to sync perfectly with architectural files, eliminating site errors and planning clashes before structural pours.",
    metric: "100% Conflict Resolution"
  },
  {
    title: "Structural Feasibility Support",
    desc: "Our senior civil teams assist architects in evaluating structural layouts, ensuring material optimization and structural stability without altering the design vision.",
    metric: "Cost-Optimized Concrete Layouts"
  },
  {
    title: "Rigid MEP & HVAC Synchronization",
    desc: "Coordination of mechanical, electrical, and plumbing blueprints, which is critical in cleanrooms, heavy machinery setups, and high-altitude hospital towers.",
    metric: "Zero MEP Site Clashes"
  },
  {
    title: "Seismic & Safety Code Compliance",
    desc: "Rigorous alignment of architectural drawings to national safety and seismic guidelines, building safe and long-lasting community structures.",
    metric: "Strict National Safety Conformance"
  }
];

function StrengthPageContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const initialTab = searchParams.get("tab") || "clients";
  const [activeTab, setActiveTab] = useState(initialTab);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Interactive directories states
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [visibleCount, setVisibleCount] = useState(24);

  // Sync state with URL parameter changes and reset search filters on tab changes
  useEffect(() => {
    const tabFromUrl = searchParams.get("tab");
    if (tabFromUrl && tabs.some(t => t.id === tabFromUrl)) {
      setActiveTab(tabFromUrl);
    }
    setSearchQuery("");
    setSelectedCategory("all");
    setVisibleCount(24);
  }, [searchParams]);

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    router.push(`/strength?tab=${tabId}`);
  };

  const getFilterCategories = () => {
    if (activeTab === "clients") {
      return [
        { id: "all", label: "All Sectors" },
        { id: "industrial", label: "Industrial & Manufacturing" },
        { id: "realestate", label: "Real Estate & Infrastructure" },
        { id: "healthcare", label: "Healthcare & Medical" },
        { id: "education", label: "Education & Trust" },
        { id: "corporate", label: "Corporate, Retail & Hospitality" }
      ];
    } else {
      return [
        { id: "all", label: "All Disciplines" },
        { id: "design", label: "Architects & Design Studios" },
        { id: "engineering", label: "Structural & Engineering" },
        { id: "planning", label: "Project Management & Planning" },
        { id: "advisory", label: "General Consulting & Advisory" }
      ];
    }
  };

  const currentList = activeTab === "clients" ? fullClientsList : fullArchitectsList;

  const filteredItems = currentList.filter(item => {
    const query = searchQuery.toLowerCase().trim();
    const matchesSearch = item.name.toLowerCase().includes(query) ||
      item.category.toLowerCase().includes(query);
    const matchesCategory = selectedCategory === "all" || item.categoryId === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="pt-24 lg:pt-16 pb-8 md:pt-24 md:pb-8 md:pb-16 bg-white min-h-screen">
      {/* Interactive Switcher & Content Wrapper */}
      <section className="w-full px-3 sm:px-4 lg:px-8">
        <div className="flex flex-col gap-8">

          {/* =================================================
              STRENGTH NAVIGATION
          ================================================= */}
          <div className="w-full border-b border-[#eae7e3]">
            {/* Desktop */}
            <div className="hidden lg:flex items-center justify-between pb-3">
              <div className="flex items-center gap-3">
                <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-sapl-blue">
                  Corporate Strength
                </span>
                <span className="w-1 h-1 rounded-full bg-[#c9c4bc]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#8a857d]">
                  {tabs.find(t => t.id === activeTab)?.label}
                </span>
              </div>

              <nav className="flex items-center gap-1">
                {tabs.map((tab) => {
                  const isActive = activeTab === tab.id;
                  const IconComponent = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => handleTabChange(tab.id)}
                      className={`relative flex items-center gap-2 px-3.5 py-2.5 transition-all ${isActive
                        ? "text-sapl-blue"
                        : "text-[#6D675E] hover:text-[#1c1a17]"
                        }`}
                    >
                      <IconComponent className="w-3.5 h-3.5" />
                      <span className="text-[10px] font-extrabold uppercase tracking-wider">
                        {tab.label}
                      </span>
                      <span
                        className={`absolute bottom-0 left-3 right-3 h-[2px] bg-sapl-blue transition-transform duration-300 origin-center ${isActive
                          ? "scale-x-100"
                          : "scale-x-0"
                          }`}
                      />
                    </button>
                  );
                })}
              </nav>
            </div>

            {/* Mobile */}
            <div className="flex lg:hidden items-center justify-between pb-3">
              <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-sapl-blue">
                Corporate Strength
              </span>

              {/* Dropdown toggle for mobile/tablet instead of row tabs */}
              <div className="relative z-50">
                <button
                  type="button"
                  onClick={() => setIsDropdownOpen((prev) => !prev)}
                  className="flex items-center gap-2 bg-[#f7f6f4] border border-[#eae7e3] px-3.5 py-2 rounded-sm shadow-sm"
                >
                  {tabs.map(tab => {
                    const IconComponent = tab.icon;
                    return activeTab === tab.id ? <IconComponent key={tab.id} className="w-3.5 h-3.5 text-sapl-blue" /> : null;
                  })}
                  <span className="max-w-[180px] truncate text-[10px] font-extrabold uppercase tracking-wider text-[#1c1a17]">
                    {tabs.find(t => t.id === activeTab)?.label}
                  </span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`} />
                </button>

                <AnimatePresence>
                  {isDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      className="absolute right-0 top-full mt-2 w-64 bg-white border border-[#eae7e3] shadow-xl rounded-sm overflow-hidden"
                    >
                      {tabs.map((tab) => {
                        const IconComponent = tab.icon;
                        const isActive = activeTab === tab.id;
                        return (
                          <button
                            key={tab.id}
                            type="button"
                            onClick={() => {
                              handleTabChange(tab.id);
                              setIsDropdownOpen(false);
                            }}
                            className={`w-full flex items-center gap-3 px-3 py-3.5 text-left border-l-2 transition-colors ${isActive
                              ? "bg-sapl-blue/5 border-sapl-blue"
                              : "border-transparent hover:bg-[#f7f6f4]"
                              }`}
                          >
                            <IconComponent
                              className={`w-4 h-4 ${isActive ? "text-sapl-blue" : "text-[#6D675E]"}`}
                            />
                            <span className={`text-[10px] font-extrabold uppercase tracking-wider ${isActive ? "text-sapl-blue" : "text-[#1c1a17]"}`}>
                              {tab.label}
                            </span>
                          </button>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* =================================================
              CONTENT
          ================================================= */}
          <div className="w-full text-left">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="w-full"
              >

                {/* 1. Clients Content */}
                {activeTab === "clients" && (
                  <div className="space-y-12">
                    <div className="flex flex-col lg:items-center lg:text-center items-start gap-3 mb-4">
                      <span className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-sapl-blue">
                        01 / Partnerships
                      </span>
                      <h2 className="font-sans font-black text-2xl sm:text-3xl lg:text-4xl tracking-tight uppercase text-[#1c1a17]">
                        Our Clients
                      </h2>
                      <div className="w-16 h-[3px] bg-sapl-blue rounded-full" />
                      <p className="max-w-2xl text-sm text-[#6D675E] leading-6 mt-2">
                        The pillars of SAPL’s good reputation stem from our employees, client satisfaction, hands-on engineered project approach, quality, on-time delivery, and effective cost optimization for clients. The testament to these qualities is the fact that SAPL receives repeated business and has established long-term relationships with many clients.
                      </p>
                    </div>

                    {/* Infinite Client Logos Marquee */}
                    <div className="w-full border-y border-[#eae7e3]">
                      <ClientMarquee hideTitle={true} />
                    </div>

                    {/* High-Fidelity Client Showcase Grid (Shows only when not searching) */}
                    {searchQuery.trim() === "" && selectedCategory === "all" && (
                      <div className="border-t border-[#eae7e3] pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 animate-[fadeIn_0.5s_ease-out]">
                        {clientsList.map((client, idx) => (
                          <div key={idx} className="border border-[#eae7e3] p-4 rounded-sm relative overflow-hidden bg-[#f7f6f4] hover:bg-white hover:shadow-sm transition-all group">
                            <div className="absolute top-0 left-0 w-[3px] h-full bg-sapl-blue" />
                            <div className="flex justify-between items-start">
                              <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#1c1a17]">
                                {client.name}
                              </h4>
                              <span className="inline-flex items-center text-[9px] font-extrabold uppercase tracking-wider text-sapl-blue bg-white border border-[#eae7e3] px-2 py-0.5 rounded-full">
                                {client.industry}
                              </span>
                            </div>
                            <p className="text-[10px] !text-[#6D675E] leading-relaxed mt-2">
                              {client.desc}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Interactive Directory Section for Clients */}
                    <div className="border-t border-[#eae7e3] pt-8 mt-6 space-y-6">
                      <div className="flex flex-col gap-2">
                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-sapl-blue">
                          Searchable Directory
                        </span>
                        <h3 className="font-sans font-extrabold text-lg sm:text-xl tracking-tight uppercase" style={{ color: "#1c1a17" }}>
                          Full Client Directory
                        </h3>
                        <p className="text-[11px] !text-[#6D675E] leading-relaxed">
                          Browse our extensive client network. Use the search bar and category filters to find specific partners.
                        </p>
                      </div>

                      {/* Controls: Search and Filters */}
                      <div className="flex flex-col md:flex-row gap-4 justify-between items-stretch md:items-center">
                        {/* Search Input */}
                        <div className="relative flex-1 max-w-md">
                          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#afa99e]" />
                          <input
                            type="text"
                            placeholder="Search clients or industries..."
                            value={searchQuery}
                            onChange={(e) => {
                              setSearchQuery(e.target.value);
                              setVisibleCount(24); // Reset pagination on search
                            }}
                            className="w-full pl-8 pr-3 py-2.5 text-xs border border-[#eae7e3] rounded-sm focus:outline-none focus:border-sapl-blue/50 focus:ring-1 focus:ring-sapl-blue/20 transition-all text-[#1c1a17] placeholder:text-[#afa99e]"
                          />
                        </div>

                        {/* Results Count indicator */}
                        <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#6D675E] self-center">
                          {filteredItems.length} {filteredItems.length === 1 ? "Client" : "Clients"} found
                        </span>
                      </div>

                      {/* Category Filters */}
                      <div className="flex gap-2 overflow-x-auto pb-2 -mx-2 px-2 scrollbar-none">
                        {getFilterCategories().map((cat) => (
                          <button
                            key={cat.id}
                            onClick={() => {
                              setSelectedCategory(cat.id);
                              setVisibleCount(24); // Reset pagination
                            }}
                            className={`px-3 py-1.5 rounded-full border text-[10px] font-extrabold uppercase tracking-wider shrink-0 transition-all cursor-pointer ${selectedCategory === cat.id
                              ? "bg-sapl-blue border-sapl-blue text-white shadow-xs"
                              : "bg-[#f7f6f4] border-[#eae7e3] hover:border-sapl-blue/50 text-[#4F4C42] hover:bg-white"
                              }`}
                          >
                            {cat.label}
                          </button>
                        ))}
                      </div>

                      {/* Directory Grid */}
                      {filteredItems.length === 0 ? (
                        <div className="text-center py-8 border border-dashed border-[#eae7e3] rounded-sm">
                          <p className="text-xs text-[#6D675E]">No clients found matching your search.</p>
                        </div>
                      ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                          {filteredItems.slice(0, visibleCount).map((client) => {
                            let IconComponent = Users2;
                            if (client.categoryId === "industrial") IconComponent = Layers;
                            else if (client.categoryId === "realestate") IconComponent = Building2;
                            else if (client.categoryId === "healthcare") IconComponent = Heart;
                            else if (client.categoryId === "education") IconComponent = GraduationCap;
                            else if (client.categoryId === "corporate") IconComponent = Briefcase;

                            return (
                              <div
                                key={client.id}
                                className="flex items-center gap-3 bg-[#f7f6f4] hover:bg-white border border-[#eae7e3] hover:border-sapl-blue/40 p-3.5 rounded-sm hover:shadow-xs transition-all duration-300 group"
                              >
                                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center border border-[#eae7e3] text-[#6D675E] group-hover:text-sapl-blue group-hover:border-sapl-blue/20 transition-all shrink-0">
                                  <IconComponent className="w-3.5 h-3.5" />
                                </div>
                                <div className="min-w-0">
                                  <h4 className="text-[11px] font-extrabold uppercase tracking-wide text-[#1c1a17] truncate" title={client.name}>
                                    {client.name}
                                  </h4>
                                  <span className="text-[8px] font-bold uppercase tracking-wider text-[#afa99e] group-hover:text-sapl-blue/70 transition-colors">
                                    {client.category}
                                  </span>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      )}

                      {/* Show More Button */}
                      {filteredItems.length > visibleCount && (
                        <div className="flex justify-center pt-3">
                          <button
                            onClick={() => setVisibleCount(prev => prev + 24)}
                            className="flex items-center gap-2 px-4 py-2.5 bg-navy-950 text-white border border-navy-950 text-[10px] font-extrabold uppercase tracking-wider rounded-sm hover:bg-sapl-blue hover:border-sapl-blue transition-all cursor-pointer shadow-sm hover:-translate-y-[1px]"
                          >
                            Load More Clients
                            <ChevronRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* 2. Architects Content */}
                {activeTab === "architects" && (
                  <div className="space-y-12">
                    <div className="flex flex-col lg:items-center lg:text-center items-start gap-3 mb-4">
                      <span className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-sapl-blue">
                        02 / Design & Engineering Integration
                      </span>
                      <h2 className="font-sans font-black text-2xl sm:text-3xl lg:text-4xl tracking-tight uppercase text-[#1c1a17]">
                        Our Architectural Partners
                      </h2>
                      <div className="w-16 h-[3px] bg-sapl-blue rounded-full" />
                      <p className="max-w-2xl text-sm text-[#6D675E] leading-6 mt-2">
                        We collaborate seamlessly with leading architectural firms, coordinating drawings and structural details perfectly to translate complex spatial designs into safe, durable engineering realities.
                      </p>
                    </div>

                    {/* Collaboration Parameters Grid (Shows only when not searching) */}
                    {searchQuery.trim() === "" && selectedCategory === "all" && (
                      <div className="border-t border-[#eae7e3] pt-6 grid grid-cols-1 gap-6 animate-[fadeIn_0.5s_ease-out]">
                        {collaborations.map((collab, idx) => (
                          <div key={idx} className="flex gap-4 items-start bg-[#f7f6f4] p-4 border border-[#eae7e3] rounded-sm">
                            <div className="w-10 h-10 rounded-full bg-sapl-blue/15 flex items-center justify-center text-sapl-blue shrink-0">
                              <CheckCircle className="w-5 h-5" />
                            </div>
                            <div className="w-full">
                              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                                <h3 className="text-xs font-extrabold uppercase tracking-wider text-[#1c1a17]">
                                  {collab.title}
                                </h3>
                                <span className="inline-flex items-center gap-1 text-[9px] font-extrabold uppercase tracking-wider text-sapl-blue shrink-0">
                                  {collab.metric}
                                </span>
                              </div>
                              <p className="text-[10px] !text-[#6D675E] leading-relaxed mt-2">
                                {collab.desc}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Interactive Directory Section for Architects */}
                    <div className="border-t border-[#eae7e3] pt-8 mt-6 space-y-6">
                      <div className="flex flex-col gap-2">
                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-sapl-blue">
                          Searchable Directory
                        </span>
                        <h3 className="font-sans font-extrabold text-lg sm:text-xl tracking-tight uppercase" style={{ color: "#1c1a17" }}>
                          Full Architect & Consultant Directory
                        </h3>
                        <p className="text-[11px] !text-[#6D675E] leading-relaxed">
                          Browse our extensive partner network of architects, structural designers, and project managers.
                        </p>
                      </div>

                      {/* Controls: Search and Filters */}
                      <div className="flex flex-col md:flex-row gap-4 justify-between items-stretch md:items-center">
                        {/* Search Input */}
                        <div className="relative flex-1 max-w-md">
                          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#afa99e]" />
                          <input
                            type="text"
                            placeholder="Search architects or disciplines..."
                            value={searchQuery}
                            onChange={(e) => {
                              setSearchQuery(e.target.value);
                              setVisibleCount(24); // Reset pagination on search
                            }}
                            className="w-full pl-8 pr-3 py-2.5 text-xs border border-[#eae7e3] rounded-sm focus:outline-none focus:border-sapl-blue/50 focus:ring-1 focus:ring-sapl-blue/20 transition-all text-[#1c1a17] placeholder:text-[#afa99e]"
                          />
                        </div>

                        {/* Results Count indicator */}
                        <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#6D675E] self-center">
                          {filteredItems.length} {filteredItems.length === 1 ? "Partner" : "Partners"} found
                        </span>
                      </div>

                      {/* Category Filters */}
                      <div className="flex gap-2 overflow-x-auto pb-2 -mx-2 px-2 scrollbar-none">
                        {getFilterCategories().map((cat) => (
                          <button
                            key={cat.id}
                            onClick={() => {
                              setSelectedCategory(cat.id);
                              setVisibleCount(24); // Reset pagination
                            }}
                            className={`px-3 py-1.5 rounded-full border text-[10px] font-extrabold uppercase tracking-wider shrink-0 transition-all cursor-pointer ${selectedCategory === cat.id
                              ? "bg-sapl-blue border-sapl-blue text-white shadow-xs"
                              : "bg-[#f7f6f4] border-[#eae7e3] hover:border-sapl-blue/50 text-[#4F4C42] hover:bg-white"
                              }`}
                          >
                            {cat.label}
                          </button>
                        ))}
                      </div>

                      {/* Directory Grid */}
                      {filteredItems.length === 0 ? (
                        <div className="text-center py-8 border border-dashed border-[#eae7e3] rounded-sm">
                          <p className="text-xs text-[#6D675E]">No partners found matching your search.</p>
                        </div>
                      ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                          {filteredItems.slice(0, visibleCount).map((item) => {
                            let IconComponent = Users2;
                            if (item.categoryId === "design") IconComponent = Compass;
                            else if (item.categoryId === "engineering") IconComponent = Layers;
                            else if (item.categoryId === "planning") IconComponent = FileText;
                            else if (item.categoryId === "advisory") IconComponent = Users2;

                            return (
                              <div
                                key={item.id}
                                className="flex items-center gap-3 bg-[#f7f6f4] hover:bg-white border border-[#eae7e3] hover:border-sapl-blue/40 p-3.5 rounded-sm hover:shadow-xs transition-all duration-300 group"
                              >
                                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center border border-[#eae7e3] text-[#6D675E] group-hover:text-sapl-blue group-hover:border-sapl-blue/20 transition-all shrink-0">
                                  <IconComponent className="w-3.5 h-3.5" />
                                </div>
                                <div className="min-w-0">
                                  <h4 className="text-[11px] font-extrabold uppercase tracking-wide text-[#1c1a17] truncate" title={item.name}>
                                    {item.name}
                                  </h4>
                                  <span className="text-[8px] font-bold uppercase tracking-wider text-[#afa99e] group-hover:text-sapl-blue/70 transition-colors">
                                    {item.category}
                                  </span>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      )}

                      {/* Show More Button */}
                      {filteredItems.length > visibleCount && (
                        <div className="flex justify-center pt-3">
                          <button
                            onClick={() => setVisibleCount(prev => prev + 24)}
                            className="flex items-center gap-2 px-4 py-2.5 bg-navy-950 text-white border border-navy-950 text-[10px] font-extrabold uppercase tracking-wider rounded-sm hover:bg-sapl-blue hover:border-sapl-blue transition-all cursor-pointer shadow-sm hover:-translate-y-[1px]"
                          >
                            Load More Partners
                            <ChevronRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function StrengthPage() {
  return (
    <Suspense fallback={
      <div className="pt-20 pb-8 md:pt-24 md:pb-16 text-center text-navy-500 font-bold uppercase tracking-widest">
        Loading Strength Section...
      </div>
    }>
      <StrengthPageContent />
    </Suspense>
  );
}
