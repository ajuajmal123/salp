"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Users2,
  Wrench,
  Compass,
  Award,
  ShieldCheck,
  Building2,
  Calendar,
  Layers,
  ChevronRight,
  Activity,
  Truck,
  Heart,
  Globe2,
  GraduationCap
} from "lucide-react";

// Tab definition
const tabs = [
  { id: "organization-structure", label: "Organization Structure", icon: Users2 },
  { id: "infrastructure", label: "Infrastructure", icon: Wrench },
  { id: "our-approach", label: "Our Approach", icon: Compass },
  { id: "awards", label: "Awards & Accomplishments", icon: Award },
  { id: "csr", label: "Corporate Social Responsibility", icon: ShieldCheck },
];

function ProfilePageContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const initialTab = searchParams.get("tab") || "organization-structure";
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
    router.push(`/profile?tab=${tabId}`);
  };

  return (
    <div className="pt-28 lg:pt-32 pb-24 bg-white min-h-screen">
      {/* Interactive Switcher & Content Wrapper */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Tab Selectors (Desktop Sidebar / Mobile Row) */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-sapl-blue mb-2 hidden lg:block text-left">
              Corporate Profile
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
          <div className="lg:col-span-8 bg-white border border-[#eae7e3] p-6 sm:p-10 rounded-sm shadow-sm text-left">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
              >
                
                {/* 1. Organization Structure Content */}
                {activeTab === "organization-structure" && (
                  <div className="space-y-8">
                    <div className="flex flex-col gap-2">
                      <span className="text-xs font-bold uppercase tracking-[0.2em] text-sapl-blue">
                        Governance
                      </span>
                      <h2 className="font-sans font-extrabold text-2xl sm:text-3xl tracking-tight uppercase" style={{ color: "#1c1a17" }}>
                        Organization Structure
                      </h2>
                      <div className="w-12 h-[2px] bg-sapl-blue rounded-full" />
                      <p className="text-xs !text-[#6D675E] leading-relaxed mt-2">
                        SAPL is built on a highly professional, top-down collaborative framework. Our top management remains actively involved in every project from initiation through final delivery.
                      </p>
                    </div>

                    {/* Interactive Organizational Tree */}
                    <div className="border-t border-[#eae7e3] pt-8 space-y-6">
                      
                      {/* Node: Chairman */}
                      <div className="flex flex-col items-center">
                        <div className="bg-navy-950 border border-sapl-blue p-5 rounded-sm max-w-sm w-full text-center relative overflow-hidden">
                          <div className="absolute top-0 left-0 w-[4px] h-full bg-sapl-blue" />
                          <h3 className="text-sm font-extrabold tracking-wider uppercase" style={{ color: "#ffffff" }}>
                            Er. G. Srinivasan
                          </h3>
                          <p className="text-[10px] font-extrabold tracking-widest uppercase text-sapl-blue mt-1">
                            Founder & Chairman
                          </p>
                          <p className="text-[10px] !text-[#d5d1c8] mt-2 leading-relaxed">
                            Established SAPL in 1987. Guides long-term strategy, client relationships, and core standards.
                          </p>
                        </div>
                      </div>

                      {/* Connection Line */}
                      <div className="w-full flex justify-center">
                        <div className="w-[2px] h-8 bg-sapl-blue/30" />
                      </div>

                      {/* Node: Managing Director */}
                      <div className="flex flex-col items-center">
                        <div className="bg-[#f7f6f4] border border-[#eae7e3] p-5 rounded-sm max-w-sm w-full text-center relative overflow-hidden">
                          <div className="absolute top-0 left-0 w-[4px] h-full bg-sapl-blue" />
                          <h3 className="text-sm font-extrabold tracking-wider uppercase" style={{ color: "#1c1a17" }}>
                            Board of Directors
                          </h3>
                          <p className="text-[10px] font-extrabold tracking-widest uppercase text-sapl-blue mt-1">
                            Managing Director & Board Control
                          </p>
                          <p className="text-[10px] !text-[#6D675E] mt-2 leading-relaxed">
                            Oversees regional projects, day-to-day administration, cost optimization, and procurement cycles.
                          </p>
                        </div>
                      </div>

                      {/* Connection Line */}
                      <div className="w-full flex justify-center">
                        <div className="w-[2px] h-8 bg-sapl-blue/30" />
                      </div>

                      {/* Nodes: Department Heads */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        
                        {/* Dept 1 */}
                        <div className="bg-white border border-[#eae7e3] p-4 rounded-sm relative hover:shadow-sm transition-shadow">
                          <h4 className="text-xs font-extrabold uppercase tracking-wider" style={{ color: "#1c1a17" }}>
                            Engineering & Estimation
                          </h4>
                          <p className="text-[10px] !text-[#6D675E] leading-relaxed mt-2">
                            Handles initial tenders, structural layouts, BIM modeling, and value-engineering optimization.
                          </p>
                        </div>

                        {/* Dept 2 */}
                        <div className="bg-white border border-[#eae7e3] p-4 rounded-sm relative hover:shadow-sm transition-shadow">
                          <h4 className="text-xs font-extrabold uppercase tracking-wider" style={{ color: "#1c1a17" }}>
                            QA & Safety Control
                          </h4>
                          <p className="text-[10px] !text-[#6D675E] leading-relaxed mt-2">
                            Operates strict pre-pour checklists, on-site laboratories, and zero-accident labor guidelines.
                          </p>
                        </div>

                        {/* Dept 3 */}
                        <div className="bg-white border border-[#eae7e3] p-4 rounded-sm relative hover:shadow-sm transition-shadow">
                          <h4 className="text-xs font-extrabold uppercase tracking-wider" style={{ color: "#1c1a17" }}>
                            Project Operations & Fleet
                          </h4>
                          <p className="text-[10px] !text-[#6D675E] leading-relaxed mt-2">
                            Coordinates plant machinery allocations, scheduling, and core technical project teams.
                          </p>
                        </div>

                        {/* Dept 4 */}
                        <div className="bg-white border border-[#eae7e3] p-4 rounded-sm relative hover:shadow-sm transition-shadow">
                          <h4 className="text-xs font-extrabold uppercase tracking-wider" style={{ color: "#1c1a17" }}>
                            Procurement & Logistics
                          </h4>
                          <p className="text-[10px] !text-[#6D675E] leading-relaxed mt-2">
                            Manages steel/cement supply contracts and coordinates timely machinery movement.
                          </p>
                        </div>

                      </div>

                    </div>
                  </div>
                )}

                {/* 2. Infrastructure Content */}
                {activeTab === "infrastructure" && (
                  <div className="space-y-8">
                    <div className="flex flex-col gap-2">
                      <span className="text-xs font-bold uppercase tracking-[0.2em] text-sapl-blue">
                        Physical & Capital Assets
                      </span>
                      <h2 className="font-sans font-extrabold text-2xl sm:text-3xl tracking-tight uppercase" style={{ color: "#1c1a17" }}>
                        Corporate Infrastructure
                      </h2>
                      <div className="w-12 h-[2px] bg-sapl-blue rounded-full" />
                      <p className="text-xs !text-[#6D675E] leading-relaxed mt-2">
                        SAPL boasts a highly robust, wholly-owned fleet of plant machinery and key material structures. Having physical control of assets keeps our bidding competitive and schedules strictly on-time.
                      </p>
                    </div>

                    {/* Infrastructure Highlights Grid */}
                    <div className="border-t border-[#eae7e3] pt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                      
                      {/* Box 1: Heavy Equipment Fleet */}
                      <div className="bg-[#f7f6f4] p-6 border border-[#eae7e3] rounded-sm text-left">
                        <div className="w-10 h-10 rounded-full bg-sapl-blue/10 flex items-center justify-center text-sapl-blue mb-4">
                          <Truck className="w-5 h-5" />
                        </div>
                        <h3 className="text-sm font-extrabold tracking-wider uppercase" style={{ color: "#1c1a17" }}>
                          Plant & Machinery Fleet
                        </h3>
                        <p className="text-[10px] !text-[#6D675E] leading-relaxed mt-2">
                          Extensive physical fleet including automatic high-volume concrete batching plants, transit mixers, concrete boom placers, high-capacity tower cranes, heavy excavations rigs, and backup silent generator systems.
                        </p>
                      </div>

                      {/* Box 2: Quality Testing Labs */}
                      <div className="bg-[#f7f6f4] p-6 border border-[#eae7e3] rounded-sm text-left">
                        <div className="w-10 h-10 rounded-full bg-sapl-blue/10 flex items-center justify-center text-sapl-blue mb-4">
                          <Activity className="w-5 h-5" />
                        </div>
                        <h3 className="text-sm font-extrabold tracking-wider uppercase" style={{ color: "#1c1a17" }}>
                          In-House QC Laboratories
                        </h3>
                        <p className="text-[10px] !text-[#6D675E] leading-relaxed mt-2">
                          Fully-equipped laboratories on active sites with compression testing machines, concrete test cube curing tanks, and sieve analysis equipment to guarantee that all structures conform exactly to structural requirements.
                        </p>
                      </div>

                      {/* Box 3: Yards & Precast Hubs */}
                      <div className="bg-[#f7f6f4] p-6 border border-[#eae7e3] rounded-sm text-left">
                        <div className="w-10 h-10 rounded-full bg-sapl-blue/10 flex items-center justify-center text-sapl-blue mb-4">
                          <Building2 className="w-5 h-5" />
                        </div>
                        <h3 className="text-sm font-extrabold tracking-wider uppercase" style={{ color: "#1c1a17" }}>
                          Fabrication & Storage Yards
                        </h3>
                        <p className="text-[10px] !text-[#6D675E] leading-relaxed mt-2">
                          Centrally managed storage hubs in Coimbatore and Chennai for scaffolding materials, structural steel shuttering, and casting equipment, ensuring fast mobilization.
                        </p>
                      </div>

                      {/* Box 4: Design Office Centers */}
                      <div className="bg-[#f7f6f4] p-6 border border-[#eae7e3] rounded-sm text-left">
                        <div className="w-10 h-10 rounded-full bg-sapl-blue/10 flex items-center justify-center text-sapl-blue mb-4">
                          <Layers className="w-5 h-5" />
                        </div>
                        <h3 className="text-sm font-extrabold tracking-wider uppercase" style={{ color: "#1c1a17" }}>
                          Corporate Offices & IT Systems
                        </h3>
                        <p className="text-[10px] !text-[#6D675E] leading-relaxed mt-2">
                          Modern project offices equipped with advanced BIM modeling, engineering software, and secure ERP platforms to keep our scheduling and reporting synchronized.
                        </p>
                      </div>

                    </div>
                  </div>
                )}

                {/* 3. Our Approach Content */}
                {activeTab === "our-approach" && (
                  <div className="space-y-8">
                    <div className="flex flex-col gap-2">
                      <span className="text-xs font-bold uppercase tracking-[0.2em] text-sapl-blue">
                        Operating Philosophy
                      </span>
                      <h2 className="font-sans font-extrabold text-2xl sm:text-3xl tracking-tight uppercase" style={{ color: "#1c1a17" }}>
                        Our Strategic Approach
                      </h2>
                      <div className="w-12 h-[2px] bg-sapl-blue rounded-full" />
                      <p className="text-xs !text-[#6D675E] leading-relaxed mt-2">
                        We blend traditional engineering values with modern technologies to deliver client satisfaction, quality results, and long-term cost optimization.
                      </p>
                    </div>

                    {/* Operational Flow Pathway */}
                    <div className="border-t border-[#eae7e3] pt-8 space-y-6">
                      
                      {/* Step 1 */}
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-navy-950 border border-sapl-blue text-sapl-blue flex items-center justify-center text-xs font-bold shrink-0">
                          1
                        </div>
                        <div>
                          <h3 className="text-xs font-extrabold uppercase tracking-wider" style={{ color: "#1c1a17" }}>
                            Customer Need Analysis
                          </h3>
                          <p className="text-[10px] !text-[#6D675E] leading-relaxed mt-1">
                            We work closely with clients to understand specific structural constraints, layout requirements, and aesthetic preferences, matching them with optimized civil planning solutions.
                          </p>
                        </div>
                      </div>

                      {/* Step 2 */}
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-navy-950 border border-sapl-blue text-sapl-blue flex items-center justify-center text-xs font-bold shrink-0">
                          2
                        </div>
                        <div>
                          <h3 className="text-xs font-extrabold uppercase tracking-wider" style={{ color: "#1c1a17" }}>
                            Value-Engineered Design & Tendering
                          </h3>
                          <p className="text-[10px] !text-[#6D675E] leading-relaxed mt-1">
                            Leveraging three decades of knowledge, we eliminate operational waste and optimize steel/concrete layouts, passing cost-efficiencies directly to our clients.
                          </p>
                        </div>
                      </div>

                      {/* Step 3 */}
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-navy-950 border border-sapl-blue text-sapl-blue flex items-center justify-center text-xs font-bold shrink-0">
                          3
                        </div>
                        <div>
                          <h3 className="text-xs font-extrabold uppercase tracking-wider" style={{ color: "#1c1a17" }}>
                            Rigorous Safety & Quality Control
                          </h3>
                          <p className="text-[10px] !text-[#6D675E] leading-relaxed mt-1">
                            Deploying strict site safety guidelines and performing checks at every concrete pour ensures compliance with high international structural parameters.
                          </p>
                        </div>
                      </div>

                      {/* Step 4 */}
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-navy-950 border border-sapl-blue text-sapl-blue flex items-center justify-center text-xs font-bold shrink-0">
                          4
                        </div>
                        <div>
                          <h3 className="text-xs font-extrabold uppercase tracking-wider" style={{ color: "#1c1a17" }}>
                            Self-Owned Machinery Deployment
                          </h3>
                          <p className="text-[10px] !text-[#6D675E] leading-relaxed mt-1">
                            By utilizing our in-house assets rather than relying on third-party hires, we maintain maximum schedule control and swift project completion.
                          </p>
                        </div>
                      </div>

                      {/* Step 5 */}
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-navy-950 border border-sapl-blue text-sapl-blue flex items-center justify-center text-xs font-bold shrink-0">
                          5
                        </div>
                        <div>
                          <h3 className="text-xs font-extrabold uppercase tracking-wider" style={{ color: "#1c1a17" }}>
                            Seamless Handover & Lifelong Partnership
                          </h3>
                          <p className="text-[10px] !text-[#6D675E] leading-relaxed mt-1">
                            We stand firmly behind our structures, ensuring clean handovers and maintaining robust communication, which has earned us repeated engagements from major clients.
                          </p>
                        </div>
                      </div>

                    </div>
                  </div>
                )}

                {/* 4. Awards & Accomplishments Content */}
                {activeTab === "awards" && (
                  <div className="space-y-8">
                    <div className="flex flex-col gap-2">
                      <span className="text-xs font-bold uppercase tracking-[0.2em] text-sapl-blue">
                        Milestones & Recognition
                      </span>
                      <h2 className="font-sans font-extrabold text-2xl sm:text-3xl tracking-tight uppercase" style={{ color: "#1c1a17" }}>
                        Awards & Accomplishments
                      </h2>
                      <div className="w-12 h-[2px] bg-sapl-blue rounded-full" />
                      <p className="text-xs !text-[#6D675E] leading-relaxed mt-2">
                        Over the past decades, SAPL has established a strong reputation, backed by certifications, safe project timelines, and long-standing client relationships.
                      </p>
                    </div>

                    {/* Milestones Grid */}
                    <div className="border-t border-[#eae7e3] pt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                      
                      {/* Block 1 */}
                      <div className="border border-[#eae7e3] p-5 rounded-sm relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-[3px] h-full bg-sapl-blue" />
                        <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#1c1a17]">
                          ISO 9001:2015 Certification
                        </h4>
                        <p className="text-[10px] !text-[#6D675E] leading-relaxed mt-1">
                          Formally certified under international standards for our consistent focus on quality civil design, estimation, and execution services.
                        </p>
                      </div>

                      {/* Block 2 */}
                      <div className="border border-[#eae7e3] p-5 rounded-sm relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-[3px] h-full bg-sapl-blue" />
                        <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#1c1a17]">
                          Decades of Safe Hours
                        </h4>
                        <p className="text-[10px] !text-[#6D675E] leading-relaxed mt-1">
                          Proud accomplishment of maintaining clean site operations with zero serious injuries or major asset damages across high-elevation constructions.
                        </p>
                      </div>

                      {/* Block 3 */}
                      <div className="border border-[#eae7e3] p-5 rounded-sm relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-[3px] h-full bg-sapl-blue" />
                        <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#1c1a17]">
                          Industrial Landmark Executions
                        </h4>
                        <p className="text-[10px] !text-[#6D675E] leading-relaxed mt-1">
                          Successfully completed massive manufacturing, corporate, and educational infrastructure landmarks across Coimbatore, Salem, and Chennai.
                        </p>
                      </div>

                      {/* Block 4 */}
                      <div className="border border-[#eae7e3] p-5 rounded-sm relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-[3px] h-full bg-sapl-blue" />
                        <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#1c1a17]">
                          Repeat Business Record
                        </h4>
                        <p className="text-[10px] !text-[#6D675E] leading-relaxed mt-1">
                          More than 75% of our portfolio consists of repeated contracts from satisfied institutional clients who trust our hands-on engineering approach.
                        </p>
                      </div>

                    </div>
                  </div>
                )}

                {/* 5. Corporate Social Responsibility Content */}
                {activeTab === "csr" && (
                  <div className="space-y-8">
                    <div className="flex flex-col gap-2">
                      <span className="text-xs font-bold uppercase tracking-[0.2em] text-sapl-blue">
                        Giving Back
                      </span>
                      <h2 className="font-sans font-extrabold text-2xl sm:text-3xl tracking-tight uppercase" style={{ color: "#1c1a17" }}>
                        Corporate Social Responsibility
                      </h2>
                      <div className="w-12 h-[2px] bg-sapl-blue rounded-full" />
                      <p className="text-xs !text-[#6D675E] leading-relaxed mt-2">
                        At SAPL, we are devoted to contributing back to our communities. Our responsibility programs focus on environmental greening, labor welfare, and education.
                      </p>
                    </div>

                    {/* CSR Grid */}
                    <div className="border-t border-[#eae7e3] pt-8 grid grid-cols-1 gap-6">
                      
                      {/* Segment 1 */}
                      <div className="flex gap-4 items-start bg-[#f7f6f4] p-5 border border-[#eae7e3] rounded-sm">
                        <div className="w-10 h-10 rounded-full bg-sapl-blue/15 flex items-center justify-center text-sapl-blue shrink-0">
                          <Globe2 className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="text-xs font-extrabold uppercase tracking-wider text-[#1c1a17]">
                            Eco-Conscious Green Construction
                          </h3>
                          <p className="text-[10px] !text-[#6D675E] leading-relaxed mt-1">
                            We minimize the carbon footprint of our operations by adopting energy-efficient site management, sourcing materials locally to reduce transit emissions, and recycling structural waste.
                          </p>
                        </div>
                      </div>

                      {/* Segment 2 */}
                      <div className="flex gap-4 items-start bg-[#f7f6f4] p-5 border border-[#eae7e3] rounded-sm">
                        <div className="w-10 h-10 rounded-full bg-sapl-blue/15 flex items-center justify-center text-sapl-blue shrink-0">
                          <Heart className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="text-xs font-extrabold uppercase tracking-wider text-[#1c1a17]">
                            Worker Welfare & Community Support
                          </h3>
                          <p className="text-[10px] !text-[#6D675E] leading-relaxed mt-1">
                            We prioritize the welfare of our structural builders. We establish safe labor accommodation, provide routine health camps, and offer safety equipment training for all crew members.
                          </p>
                        </div>
                      </div>

                      {/* Segment 3 */}
                      <div className="flex gap-4 items-start bg-[#f7f6f4] p-5 border border-[#eae7e3] rounded-sm">
                        <div className="w-10 h-10 rounded-full bg-sapl-blue/15 flex items-center justify-center text-sapl-blue shrink-0">
                          <GraduationCap className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="text-xs font-extrabold uppercase tracking-wider text-[#1c1a17]">
                            Technical Talent Incubation
                          </h3>
                          <p className="text-[10px] !text-[#6D675E] leading-relaxed mt-1">
                            We partner with local engineering universities to offer practical internships. Aspiring civil graduates gain valuable experience, helping build robust talent pathways.
                          </p>
                        </div>
                      </div>

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

export default function ProfilePage() {
  return (
    <Suspense fallback={
      <div className="pt-32 pb-24 text-center text-navy-500 font-bold uppercase tracking-widest">
        Loading Profile...
      </div>
    }>
      <ProfilePageContent />
    </Suspense>
  );
}
