"use client";

import React, { useState, useEffect, Suspense } from "react";
import Image from "next/image";
import { useSearchParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Users2,
  Wrench,
  Compass,
  Award,
  ShieldCheck,
  Building2,
  Layers,
  ChevronRight,
  ChevronDown,
  Activity,
  Truck,
  Heart,
  Globe2,
  GraduationCap,
  Package,
  Mountain,
  Zap,
  Sparkles,
  Container,
  CheckCircle2,
  Hammer
} from "lucide-react";
import { equipmentData } from "@/data/equipment";

// Tab definition
const tabs = [
  { id: "organization-structure", label: "Organization Structure", icon: Users2 },
  { id: "infrastructure", label: "Infrastructure", icon: Wrench },
  { id: "our-approach", label: "Our Approach", icon: Compass },
  { id: "awards", label: "Awards & Accomplishments", icon: Award },
  { id: "csr", label: "Corporate Social Responsibility", icon: ShieldCheck },
];

const awardsImages = [
  "/Awards/Achievement Award ICI.jpg",
  "/Awards/Conferred Achievement Award 2008.jpg",
  "/Awards/Distinguished Well Wisher Award.jpg",
  "/Awards/Distinguished Well-Wisher Award.jpg",
  "/Awards/Exemplary Performance Awarded.jpeg",
  "/Awards/Honoured by Dr. APJ. Abdul Kalam.jpg",
  "/Awards/Lifetime Achiever Award.jpg",
  "/Awards/MDsir EXCEL group.jpeg",
  "/Awards/MDsir1.jpeg",
  "/Awards/MDsir2.jpeg",
  "/Awards/MDsir3.jpeg",
  "/Awards/Vishwakarma Award 2010.jpg"
];

function ProfilePageContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const initialTab = searchParams.get("tab") || "organization-structure";
  const [activeTab, setActiveTab] = useState(initialTab);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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

  // Group equipment data by category
  const equipmentByCategory = equipmentData.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, typeof equipmentData>);

  const getCategoryIcon = (cat: string) => {
    if (cat.includes("Concrete")) return <Truck className="w-5 h-5" />;
    if (cat.includes("Cranes")) return <Layers className="w-5 h-5" />;
    if (cat.includes("Material Handling")) return <Package className="w-5 h-5" />;
    if (cat.includes("Earth Moving")) return <Mountain className="w-5 h-5" />;
    if (cat.includes("Power")) return <Zap className="w-5 h-5" />;
    if (cat.includes("Steel")) return <Hammer className="w-5 h-5" />;
    if (cat.includes("Housekeeping")) return <Sparkles className="w-5 h-5" />;
    if (cat.includes("Precast")) return <Container className="w-5 h-5" />;
    return <Wrench className="w-5 h-5" />;
  };

  return (
    <div className="pt-28 lg:pt-32 pb-24 bg-white min-h-screen w-full">
      {/* Interactive Switcher & Content Wrapper */}
      <section className="w-full px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col gap-10 items-center">

          {/* Top Row: Tab Selectors (Right Aligned Dropdown) */}
          <div className="w-full flex justify-between items-center border-b border-[#eae7e3] pb-4">

            <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-sapl-blue sm:hidden">
              Profile
            </span>

            <div className="relative z-50">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-2 bg-[#f7f6f4] border border-[#eae7e3] px-3.5 py-2 md:px-5 md:py-2.5 rounded-sm hover:bg-white transition-colors group shadow-sm"
              >
                {(() => {
                  const CurrIcon = tabs.find(t => t.id === activeTab)?.icon || Users2;
                  return <CurrIcon className="w-3.5 h-3.5 text-sapl-blue" />;
                })()}
                <span className="text-[10px] md:text-xs font-extrabold text-[#1c1a17] uppercase tracking-wider">
                  {tabs.find(t => t.id === activeTab)?.label}
                </span>
                <ChevronDown className={`w-3.5 h-3.5 text-[#1c1a17] transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full mt-2 right-0 w-64 bg-white border border-[#eae7e3] shadow-xl rounded-sm py-1"
                  >
                    {tabs.map((tab) => {
                      const IconComponent = tab.icon;
                      const isActive = activeTab === tab.id;
                      return (
                        <button
                          key={tab.id}
                          onClick={() => {
                            handleTabChange(tab.id);
                            setIsDropdownOpen(false);
                          }}
                          className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors border-l-2 ${isActive
                            ? "bg-sapl-blue/5 border-sapl-blue"
                            : "border-transparent hover:bg-[#f7f6f4]"
                            }`}
                        >
                          <IconComponent className={`w-4 h-4 ${isActive ? "text-sapl-blue" : "text-[#6D675E]"}`} />
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

          {/* Bottom Row: Dynamic Section Content Rendering (No Big Card) */}
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

                {/* 1. Organization Structure Content */}
                {activeTab === "organization-structure" && (
                  <div className="flex flex-col gap-10 w-full animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <div className="flex flex-col items-center text-center gap-4">
                      <h2 className="font-sans font-black text-2xl sm:text-3xl lg:text-4xl tracking-tight uppercase text-[#1c1a17]">
                        Organization Structure
                      </h2>
                      <div className="w-16 h-[3px] bg-sapl-blue rounded-full mx-auto" />
                    </div>

                    {/* Interactive Organizational Tree */}
                    <div className="w-full space-y-6">

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
                  <div className="flex flex-col gap-10 w-full animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <div className="flex flex-col items-center text-center gap-4">
                      <h2 className="font-sans font-black text-2xl sm:text-3xl lg:text-4xl tracking-tight uppercase text-[#1c1a17]">
                        Corporate Infrastructure
                      </h2>
                      <div className="w-16 h-[3px] bg-sapl-blue rounded-full mx-auto" />
                    </div>

                    {/* Infrastructure Highlights Cards */}
                    <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 w-full space-y-6">

                      {Object.entries(equipmentByCategory).map(([category, items]) => (
                        <div key={category} className="bg-[#f7f6f4] p-6 border border-[#eae7e3] rounded-sm text-left shadow-sm hover:shadow-md transition-all duration-300 break-inside-avoid relative">
                          <div className="flex items-center gap-3 mb-5 pb-5 border-b border-[#eae7e3]/60">
                            <div className="w-10 h-10 rounded-full bg-sapl-blue/10 flex items-center justify-center text-sapl-blue shrink-0">
                              {getCategoryIcon(category)}
                            </div>
                            <h3 className="text-sm font-extrabold tracking-wider uppercase text-black line-clamp-2">
                              {category}
                            </h3>
                            <div className="ml-auto">
                              <span className="bg-white text-sapl-blue text-[10px] font-extrabold px-2.5 py-1.5 rounded-sm border border-[#eae7e3] shadow-sm whitespace-nowrap">
                                {items.reduce((sum, eq) => sum + eq.quantity, 0)} Total
                              </span>
                            </div>
                          </div>

                          <div className="flex flex-wrap gap-2.5 mt-auto">
                            {items.map((eq, idx) => (
                              <div key={idx} className="flex items-center gap-2 px-3 py-1.5 bg-white border border-[#eae7e3] rounded-full shadow-sm hover:border-sapl-blue/40 transition-colors group">
                                <span className="text-[10.5px] font-bold text-[#1c1a17] group-hover:text-sapl-blue transition-colors">
                                  {eq.equipment}
                                </span>
                                <div className="w-[1.5px] h-3 bg-[#eae7e3] group-hover:bg-sapl-blue/30 transition-colors" />
                                <span className="text-[10px] font-extrabold text-sapl-blue">
                                  {String(eq.quantity).padStart(2, '0')}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}

                    </div>
                  </div>
                )}

                {/* 3. Our Approach Content */}
                {activeTab === "our-approach" && (
                  <div className="flex flex-col gap-10 w-full animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <div className="flex flex-col items-center text-center gap-4">
                      <h2 className="font-sans font-black text-2xl sm:text-3xl lg:text-4xl tracking-tight uppercase text-[#1c1a17]">
                        Our Strategic Approach
                      </h2>
                      <div className="w-16 h-[3px] bg-sapl-blue rounded-full mx-auto" />
                    </div>

                    {/* Content Implementation */}
                    <div className="space-y-8">

                      {/* 1. Quality Management */}
                      <div className="bg-[#f7f6f4] border border-[#eae7e3] p-6 sm:p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-center gap-4 mb-6">
                          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-sapl-blue shadow-sm border border-[#eae7e3] shrink-0">
                            <Award className="w-6 h-6" />
                          </div>
                          <h3 className="text-base sm:text-lg font-extrabold uppercase tracking-wider text-black">
                            Quality Management
                          </h3>
                        </div>
                        <div className="text-sm text-[#4F4C42] leading-relaxed space-y-6">
                          <p>
                            Quality is of paramount importance to all the members at SAPL. Our reputation for both the quality of our project management and finished projects is achieved through our proven Quality Management System. Our Quality Management System is implemented through a comprehensive set of procedures and controls which are documented in accordance with ISO 9001:2015.
                          </p>
                          <div className="bg-white p-5 sm:p-6 border border-[#eae7e3] rounded-sm">
                            <span className="font-extrabold text-black uppercase tracking-wider text-xs">Six basic Principles of Quality:</span>
                            <ul className="mt-4 space-y-3">
                              <li className="flex gap-3 items-start"><CheckCircle2 className="w-4 h-4 text-sapl-blue shrink-0 mt-0.5" /> <span className="text-[13px]">Provides for long-term quality control through established processes and systems.</span></li>
                              <li className="flex gap-3 items-start"><CheckCircle2 className="w-4 h-4 text-sapl-blue shrink-0 mt-0.5" /> <span className="text-[13px]">Nurtures and guides our Quality Culture through its proven policies and procedures.</span></li>
                              <li className="flex gap-3 items-start"><CheckCircle2 className="w-4 h-4 text-sapl-blue shrink-0 mt-0.5" /> <span className="text-[13px]">Successfully identifies and controls the quality standard and quality of design as defined by our clients.</span></li>
                              <li className="flex gap-3 items-start"><CheckCircle2 className="w-4 h-4 text-sapl-blue shrink-0 mt-0.5" /> <span className="text-[13px]">Plans for Quality: Identifying measures of achieving the required quality, including construction methods, equipment, materials and personnel.</span></li>
                              <li className="flex gap-3 items-start"><CheckCircle2 className="w-4 h-4 text-sapl-blue shrink-0 mt-0.5" /> <span className="text-[13px]">Insures for Quality: Encouraging all parties to “Work Together to Deliver the Best – First Time”.</span></li>
                              <li className="flex gap-3 items-start"><CheckCircle2 className="w-4 h-4 text-sapl-blue shrink-0 mt-0.5" /> <span className="text-[13px]">Provides for a process of continuous improvement correcting any potential quality deficiencies that may arise.</span></li>
                            </ul>
                          </div>
                          <p className="font-semibold italic !text-[#1c1a17] border-l-2 border-sapl-blue pl-4 py-1">
                            Our Top Management and staff are committed to providing our clients the satisfaction of knowing that we will deliver exactly what we promise.
                          </p>
                        </div>
                      </div>

                      {/* Grid for Health Safety & Environmental */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                        {/* 2. Health Safety */}
                        <div className="bg-[#f7f6f4] border border-[#eae7e3] p-6 sm:p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow relative overflow-hidden flex flex-col">
                          <div className="absolute top-0 left-0 w-[3px] h-full bg-sapl-blue" />
                          <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-sapl-blue shadow-sm border border-[#eae7e3] shrink-0">
                              <ShieldCheck className="w-6 h-6" />
                            </div>
                            <h3 className="text-base sm:text-lg font-extrabold uppercase tracking-wider text-black">
                              Health & Safety
                            </h3>
                          </div>
                          <p className="text-sm text-[#4F4C42] leading-relaxed mt-auto">
                            We committed maintain high standards of the Integrated Management Systems governing our Health, Safety, Environmental and Quality Codes of Practice. These systems are living documents that are continually reviewed and improved in line with industry best practice. We have developed our systems and procedures over many years based on these ethics. They are an integral part of our management activity and are implemented through a comprehensive set of procedures and controls which are documented in accordance with ISO 9001:2008.
                          </p>
                        </div>

                        {/* 3. Environmental Management */}
                        <div className="bg-[#f7f6f4] border border-[#eae7e3] p-6 sm:p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow relative overflow-hidden flex flex-col">
                          <div className="absolute top-0 left-0 w-[3px] h-full bg-sapl-blue" />
                          <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-sapl-blue shadow-sm border border-[#eae7e3] shrink-0">
                              <Globe2 className="w-6 h-6" />
                            </div>
                            <h3 className="text-base sm:text-lg font-extrabold uppercase tracking-wider text-black">
                              Environmental Management
                            </h3>
                          </div>
                          <div className="text-sm text-[#4F4C42] leading-relaxed space-y-4">
                            <p>
                              We recognise the importance of utilising the most modern and most sustainable materials within the construction process. We are proud to have built quite a number of iconic projects which have broken new grounds in terms of sustainable materials and innovative construction techniques.
                            </p>
                            <p>
                              SAPL continuously strives to perform to sustainable best practice in construction in our mission to lesson our impact on our environment, and every new project for us is a challenge in search of a zero-carbon footprint. The area of the provision of more and more sustainable and renewable buildings is constantly evolving and changing and we are operating in a very exciting and dynamic times. SAPL continues to innovate with every project every day, continues to lead the way in terms of our approach to sustainability. We source our materials responsibly, we audit our supply chain to ensure compliance with our systems and procedures.
                            </p>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                )}

                {/* 4. Awards & Accomplishments Content */}
                {activeTab === "awards" && (
                  <div className="flex flex-col gap-10 w-full animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <div className="flex flex-col items-center text-center gap-4">
                      <h2 className="font-sans font-black text-2xl sm:text-3xl lg:text-4xl tracking-tight uppercase text-[#1c1a17]">
                        Awards & Accomplishments
                      </h2>
                      <div className="w-16 h-[3px] bg-sapl-blue rounded-full mx-auto" />
                    </div>

                    {/* Milestones Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
                      {awardsImages.map((src, idx) => {
                        const filename = src.split('/').pop()?.split('.')[0] || `Award ${idx + 1}`;

                        return (
                          <div key={idx} className="bg-[#f7f6f4] p-3 border border-[#eae7e3] rounded-sm flex flex-col items-center gap-3 shadow-sm hover:shadow-md transition-all group">
                            <div className="relative aspect-square w-full bg-white rounded-sm overflow-hidden border border-[#eae7e3]/50">
                              <Image
                                src={src}
                                alt={filename}
                                fill
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                className="object-contain transition-transform duration-700 group-hover:scale-[1.03]"
                              />
                            </div>
                            <span className="text-[10px] font-extrabold tracking-wider uppercase text-center text-black px-2 mt-auto">
                              {filename.replace(/-/g, ' ')}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* 5. Corporate Social Responsibility Content */}
                {activeTab === "csr" && (
                  <div className="flex flex-col gap-10 w-full animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <div className="flex flex-col items-center text-center gap-4">
                      <h2 className="font-sans font-black text-2xl sm:text-3xl lg:text-4xl tracking-tight uppercase text-[#1c1a17]">
                        Corporate Social Responsibility
                      </h2>
                      <div className="w-16 h-[3px] bg-sapl-blue rounded-full mx-auto" />
                    </div>

                    {/* CSR Grid */}
                    <div className="space-y-8">

                      {/* Card 1: Core CSR Philosophy & CDBACA */}
                      <div className="bg-[#f7f6f4] border border-[#eae7e3] p-6 sm:p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-center gap-4 mb-6">
                          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-sapl-blue shadow-sm border border-[#eae7e3] shrink-0">
                            <Globe2 className="w-6 h-6" />
                          </div>
                          <h3 className="text-base sm:text-lg font-extrabold uppercase tracking-wider text-black">
                            Core Philosophy & Community Integration
                          </h3>
                        </div>
                        <div className="text-sm text-[#4F4C42] leading-relaxed space-y-4">
                          <p>
                            The company is guided by the well defined CSR on the simple bottom line approach, viz Social justice, Environmental quality & Economic prosperity.
                          </p>
                          <p>
                            To be more specific, the company ensures the success of business by inclusion of Social and environmental considerations into company’s operations. It means satisfying the customer’s demands whilst also managing the expectations of other stakeholders such as employees, suppliers and the community around.
                          </p>
                          <p className="font-semibold !text-[#1c1a17] border-l-2 border-sapl-blue pl-4">
                            The Company has participated in all the developmental activities organized under the plank of CDBACA (Coimbatore Builders & Contractors Association) of which the Managing Director is an Advisor.
                          </p>
                        </div>
                      </div>

                      {/* Split Grid row */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                        {/* Card 2: School of Artisans */}
                        <div className="bg-[#f7f6f4] border border-[#eae7e3] p-6 sm:p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow relative overflow-hidden flex flex-col">
                          <div className="absolute top-0 left-0 w-[3px] h-full bg-sapl-blue" />
                          <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-sapl-blue shadow-sm border border-[#eae7e3] shrink-0">
                              <GraduationCap className="w-6 h-6" />
                            </div>
                            <h3 className="text-base sm:text-lg font-extrabold uppercase tracking-wider text-black">
                              School of Construction Artisans
                            </h3>
                          </div>
                          <div className="text-sm text-[#4F4C42] leading-relaxed mt-auto space-y-4">
                            <p>
                              A notable and challenging achievement is the starting of School of Construction Artisans under Builders’ Association of India Coimbatore Centre. The birth of School of Construction Artisans was made possible to serve the twin objectives of promoting trained artisans in construction trade and uplifting the Below Poverty Line / rural poor youth earning his bread through work.
                            </p>
                            <p className="font-semibold italic text-sapl-blue">
                              As a Convenor, our Managing Director still pursues for the cause of the institution, in successfully running it and achieving the results.
                            </p>
                          </div>
                        </div>

                        {/* Card 3: Internal Policies & Active Contributions */}
                        <div className="bg-[#f7f6f4] border border-[#eae7e3] p-6 sm:p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow relative overflow-hidden flex flex-col">
                          <div className="absolute top-0 left-0 w-[3px] h-full bg-sapl-blue" />
                          <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-sapl-blue shadow-sm border border-[#eae7e3] shrink-0">
                              <Heart className="w-6 h-6" />
                            </div>
                            <h3 className="text-base sm:text-lg font-extrabold uppercase tracking-wider text-black">
                              Internal Policies & Contributions
                            </h3>
                          </div>
                          <div className="text-sm text-[#4F4C42] leading-relaxed space-y-4">
                            <p>
                              Within the company, well laid policies for <strong>Human Resource Management</strong>, <strong>Health and safety at work</strong>, and <strong>Adaptation to change</strong>, are in place and followed, as an internal dimension of CSR.
                            </p>

                            <div className="bg-white p-5 border border-[#eae7e3] rounded-sm mt-4">
                              <span className="font-extrabold text-black uppercase tracking-wider text-[11px]">Significant contributions to CSR</span>
                              <ul className="mt-3 space-y-3">
                                <li className="flex gap-3 items-start"><CheckCircle2 className="w-4 h-4 text-sapl-blue shrink-0 mt-0.5" /> <span className="text-[13px]">Organize regularly free medical camps to the workers engaged in the construction activities.</span></li>
                                <li className="flex gap-3 items-start"><CheckCircle2 className="w-4 h-4 text-sapl-blue shrink-0 mt-0.5" /> <span className="text-[13px]">Sponsoring the QUIZ program conducted by the engineering colleges for the civil engineering students to hone their skill.</span></li>
                              </ul>
                            </div>

                            <p className="text-[13px] italic pt-2">
                              All these activities are carried out as a policy of the company, having concern for the beneficiaries, though not statutorily obligated.
                            </p>
                          </div>
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
