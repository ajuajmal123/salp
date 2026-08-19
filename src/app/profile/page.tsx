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
  Calendar,
  Layers,
  ChevronRight,
  Activity,
  Truck,
  Heart,
  Globe2,
  GraduationCap,
  Package,
  Mountain,
  Zap,
  Hammer,
  Sparkles,
  Container
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

          {/* Top Row: Tab Selectors */}
          <div className="w-full flex flex-col items-center gap-6">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-sapl-blue hidden lg:block">
              Corporate Profile
            </span>

            <div className="flex flex-nowrap lg:justify-center gap-3 overflow-x-auto w-full pb-4 scrollbar-none snap-x px-2">
              {tabs.map((tab) => {
                const IconComponent = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => handleTabChange(tab.id)}
                    className={`flex items-center gap-2 px-4 py-2.5 sm:gap-2.5 sm:px-6 sm:py-3.5 rounded-full border text-[10px] sm:text-xs font-extrabold uppercase tracking-wider shrink-0 transition-all duration-300 snap-start ${isActive
                      ? "bg-sapl-blue border-sapl-blue text-white shadow-md scale-[1.02]"
                      : "bg-[#f7f6f4] border-[#eae7e3] hover:bg-white hover:border-sapl-blue/50"
                      }`}
                  >
                    <IconComponent className={`w-4 h-4 transition-colors ${isActive ? "text-white" : "text-[#1c1a17] group-hover:text-sapl-blue"
                      }`} />
                    <span className={`transition-colors ${isActive ? "text-white" : "text-[#1c1a17] group-hover:text-sapl-blue"
                      }`}>
                      {tab.label}
                    </span>
                  </button>
                );
              })}
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
                  <div className="space-y-8 w-full">
                    <div className="flex flex-col items-center text-center gap-2">
                      <span className="text-xs font-bold uppercase tracking-[0.2em] text-sapl-blue">
                        Governance
                      </span>
                      <h2 className="font-sans font-extrabold text-2xl sm:text-3xl tracking-tight uppercase text-black">
                        Organization Structure
                      </h2>
                      <div className="w-12 h-[2px] bg-sapl-blue rounded-full mx-auto" />
                      <p className="text-xs !text-black leading-relaxed mt-2 max-w-3xl mx-auto">
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
                  <div className="space-y-8 w-full">
                    <div className="flex flex-col items-center text-center gap-2">
                      <span className="text-xs font-bold uppercase tracking-[0.2em] text-sapl-blue">
                        Physical & Capital Assets
                      </span>
                      <h2 className="font-sans font-extrabold text-2xl sm:text-3xl tracking-tight uppercase text-black">
                        Corporate Infrastructure
                      </h2>
                      <div className="w-12 h-[2px] bg-sapl-blue rounded-full mx-auto" />
                      <p className="text-xs !text-black leading-relaxed mt-2 max-w-3xl mx-auto">
                        SAPL boasts a highly robust, wholly-owned fleet of plant machinery and key material structures. Having physical control of assets keeps our bidding competitive and schedules strictly on-time.
                      </p>
                    </div>

                    {/* Infrastructure Highlights Cards */}
                    <div className="border-t border-[#eae7e3] pt-8 columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 w-full space-y-6">

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
                  <div className="space-y-8">
                    <div className="flex flex-col items-center text-center gap-2">
                      <span className="text-xs font-bold uppercase tracking-[0.2em] text-sapl-blue">
                        Operating Philosophy
                      </span>
                      <h2 className="font-sans font-extrabold text-2xl sm:text-3xl tracking-tight uppercase text-black">
                        Our Strategic Approach
                      </h2>
                      <div className="w-12 h-[2px] bg-sapl-blue rounded-full mx-auto" />
                      <p className="text-xs !text-black leading-relaxed mt-2 max-w-3xl mx-auto">
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
                    <div className="flex flex-col items-center text-center gap-2">
                      <span className="text-xs font-bold uppercase tracking-[0.2em] text-sapl-blue">
                        Milestones & Recognition
                      </span>
                      <h2 className="font-sans font-extrabold text-2xl sm:text-3xl tracking-tight uppercase text-black">
                        Awards & Accomplishments
                      </h2>
                      <div className="w-12 h-[2px] bg-sapl-blue rounded-full mx-auto" />
                      <p className="text-xs !text-black leading-relaxed mt-2 max-w-3xl mx-auto">
                        Over the past decades, SAPL has established a strong reputation, backed by certifications, safe project timelines, and long-standing client relationships.
                      </p>
                    </div>

                    {/* Milestones Grid */}
                    <div className="border-t border-[#eae7e3] pt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
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
                  <div className="space-y-8">
                    <div className="flex flex-col items-center text-center gap-2">
                      <span className="text-xs font-bold uppercase tracking-[0.2em] text-sapl-blue">
                        Giving Back
                      </span>
                      <h2 className="font-sans font-extrabold text-2xl sm:text-3xl tracking-tight uppercase text-black">
                        Corporate Social Responsibility
                      </h2>
                      <div className="w-12 h-[2px] bg-sapl-blue rounded-full mx-auto" />
                      <p className="text-xs !text-black leading-relaxed mt-2 max-w-3xl mx-auto">
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
