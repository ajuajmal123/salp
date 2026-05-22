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
  FileText,
  BadgeAlert,
  ArrowUpRight
} from "lucide-react";

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

  // Sync state with URL parameter changes
  useEffect(() => {
    const tabFromUrl = searchParams.get("tab");
    if (tabFromUrl && tabs.some(t => t.id === tabFromUrl)) {
      setActiveTab(tabFromUrl);
    }
  }, [searchParams]);

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    router.push(`/strength?tab=${tabId}`);
  };

  return (
    <div className="pt-28 lg:pt-32 pb-24 bg-white min-h-screen">
      {/* Interactive Switcher & Content Wrapper */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Tab Selectors (Desktop Sidebar / Mobile Row) */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-sapl-blue mb-2 hidden lg:block text-left">
              Corporate Strength
            </span>
            
            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex flex-col gap-2">
              {tabs.map((tab) => {
                const IconComponent = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => handleTabChange(tab.id)}
                    className={`flex items-center justify-between p-4 rounded-sm border text-left transition-all duration-300 group ${
                      isActive
                        ? "bg-navy-950 border-navy-950 shadow-md text-white scale-[1.02]"
                        : "bg-[#f7f6f4] border-[#eae7e3] hover:border-sapl-blue/50 text-[#4F4C42] hover:bg-white"
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                        isActive ? "bg-sapl-blue text-white" : "bg-white text-[#6D675E] group-hover:text-sapl-blue"
                      }`}>
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <span className={`text-xs font-extrabold uppercase tracking-wider transition-colors ${
                        isActive ? "text-white" : "text-[#1c1a17] group-hover:text-sapl-blue"
                      }`}>
                        {tab.label}
                      </span>
                    </div>
                    <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${
                      isActive ? "text-sapl-blue translate-x-1" : "text-[#afa99e] group-hover:translate-x-1"
                    }`} />
                  </button>
                );
              })}
            </div>

            {/* Mobile Scrollable Tabs */}
            <div className="lg:hidden flex gap-2 overflow-x-auto pb-4 -mx-4 px-4 scrollbar-none">
              {tabs.map((tab) => {
                const IconComponent = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => handleTabChange(tab.id)}
                    className={`flex items-center gap-2 px-5 py-3 rounded-full border text-xs font-extrabold uppercase tracking-wider shrink-0 transition-all ${
                      isActive
                        ? "bg-navy-950 border-navy-950 text-white shadow-sm"
                        : "bg-[#f7f6f4] border-[#eae7e3] text-[#4F4C42]"
                    }`}
                  >
                    <IconComponent className="w-4 h-4" />
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Dynamic Section Content Rendering */}
          <div className="lg:col-span-9 bg-white border border-[#eae7e3] p-6 sm:p-10 rounded-sm shadow-sm text-left">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
              >
                
                {/* 1. Clients Content */}
                {activeTab === "clients" && (
                  <div className="space-y-8">
                    <div className="flex flex-col gap-2">
                      <span className="text-xs font-bold uppercase tracking-[0.2em] text-sapl-blue">
                        Partnerships
                      </span>
                      <h2 className="font-sans font-extrabold text-2xl sm:text-3xl tracking-tight uppercase" style={{ color: "#1c1a17" }}>
                        Clients
                      </h2>
                      <div className="w-12 h-[2px] bg-sapl-blue rounded-full" />
                      <p className="text-xs !text-[#6D675E] leading-relaxed mt-2">
                        The pillars of SAPL’s good reputation stem from our employees, client satisfaction, hands-on engineered project approach, quality, on-time delivery, and effective cost optimization for clients. The testament to these qualities is the fact that SAPL receives repeated business and has established long-term relationships with many clients.
                      </p>
                    </div>

                    {/* High-Fidelity Client Showcase Grid */}
                    <div className="border-t border-[#eae7e3] pt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {clientsList.map((client, idx) => (
                        <div key={idx} className="border border-[#eae7e3] p-5 rounded-sm relative overflow-hidden bg-[#f7f6f4] hover:bg-white hover:shadow-sm transition-all group">
                          <div className="absolute top-0 left-0 w-[3px] h-full bg-sapl-blue" />
                          <div className="flex justify-between items-start">
                            <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#1c1a17]">
                              {client.name}
                            </h4>
                            <span className="inline-flex items-center text-[9px] font-extrabold uppercase tracking-wider text-sapl-blue bg-white border border-[#eae7e3] px-2 py-0.5 rounded-full">
                              {client.industry}
                            </span>
                          </div>
                          <p className="text-[10px] !text-[#6D675E] leading-relaxed mt-3">
                            {client.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 2. Architects Content */}
                {activeTab === "architects" && (
                  <div className="space-y-8">
                    <div className="flex flex-col gap-2">
                      <span className="text-xs font-bold uppercase tracking-[0.2em] text-sapl-blue">
                        Design & Engineering Integration
                      </span>
                      <h2 className="font-sans font-extrabold text-2xl sm:text-3xl tracking-tight uppercase" style={{ color: "#1c1a17" }}>
                        Architects
                      </h2>
                      <div className="w-12 h-[2px] bg-sapl-blue rounded-full" />
                      <p className="text-xs !text-[#6D675E] leading-relaxed mt-2">
                        We collaborate seamlessly with leading architectural firms, coordinating drawings and structural details perfectly to translate complex spatial designs into safe, durable engineering realities.
                      </p>
                    </div>

                    {/* Collaboration Parameters Grid */}
                    <div className="border-t border-[#eae7e3] pt-8 grid grid-cols-1 gap-6">
                      {collaborations.map((collab, idx) => (
                        <div key={idx} className="flex gap-4 items-start bg-[#f7f6f4] p-5 border border-[#eae7e3] rounded-sm">
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
      <div className="pt-32 pb-24 text-center text-navy-500 font-bold uppercase tracking-widest">
        Loading Strength Section...
      </div>
    }>
      <StrengthPageContent />
    </Suspense>
  );
}
