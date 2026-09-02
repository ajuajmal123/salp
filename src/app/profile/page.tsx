"use client";

import React, { useEffect, useMemo, useState, Suspense } from "react";
import Image from "next/image";
import { useSearchParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Users2,
  Wrench,
  Compass,
  Award,
  ShieldCheck,
  Layers,
  ChevronRight,
  ChevronDown,
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
  Hammer,
} from "lucide-react";

import { equipmentData } from "@/data/equipment";

/* =========================================================
   TAB CONFIGURATION
========================================================= */

const tabs = [
  {
    id: "organization-structure",
    label: "Organization Structure",
    shortLabel: "Organization",
    icon: Users2,
  },
  {
    id: "infrastructure",
    label: "Infrastructure",
    shortLabel: "Infrastructure",
    icon: Wrench,
  },
  {
    id: "our-approach",
    label: "Our Approach",
    shortLabel: "Our Approach",
    icon: Compass,
  },
  {
    id: "awards",
    label: "Awards & Accomplishments",
    shortLabel: "Awards",
    icon: Award,
  },
  {
    id: "csr",
    label: "Corporate Social Responsibility",
    shortLabel: "CSR",
    icon: ShieldCheck,
  },
];

/* =========================================================
   AWARDS
========================================================= */

const awardsData = [
  { src: "/Awards/mdsirimg1.jpeg", title: "Leadership Address by Our Managing Director" },
  { src: "/Awards/mdsirimg2.jpeg", title: "SEYAL – EXCEL Award Presented by Excel Group" },
  { src: "/Awards/mdsirimg3.jpeg", title: "Felicitated by Dr. APJ Abdul Kalam For Early Completion of 1 Lakh Sq. Ft. Project" },
  { src: "/Awards/mdsirimg4.jpeg", title: "Conferred Achievement Award 2008 by Coimbatore Civil Engineers Association (COCENA)" },
  { src: "/Awards/mdsirimg5.jpeg", title: "Long Span Portico Slab Using Self Compacting Concrete Indian Concrete Institute & UltraTech" },
  { src: "/Awards/mdsirimg6_updated.jpeg", title: "Lifetime Achiever Award – Institution of Engineers, Coimbatore" },
  { src: "/Awards/mdsirimg7.jpeg", title: "Distinguished Well-Wisher Award from Ramakrishna Mission Vidyalaya, Coimbatore" },
];

/* =========================================================
   APPROACH DATA
========================================================= */

const approachSections = [
  {
    id: "quality",
    number: "01",
    title: "Quality Management",
    icon: Award,
  },
  {
    id: "safety",
    number: "02",
    title: "Health & Safety",
    icon: ShieldCheck,
  },
  {
    id: "environment",
    number: "03",
    title: "Environmental Management",
    icon: Globe2,
  },
];

/* =========================================================
   ICON HELPER
========================================================= */

function getCategoryIcon(category: string) {
  if (category.includes("Concrete")) {
    return <Truck className="w-5 h-5" />;
  }

  if (category.includes("Cranes")) {
    return <Layers className="w-5 h-5" />;
  }

  if (category.includes("Material Handling")) {
    return <Package className="w-5 h-5" />;
  }

  if (category.includes("Earth Moving")) {
    return <Mountain className="w-5 h-5" />;
  }

  if (category.includes("Power")) {
    return <Zap className="w-5 h-5" />;
  }

  if (category.includes("Steel")) {
    return <Hammer className="w-5 h-5" />;
  }

  if (category.includes("Housekeeping")) {
    return <Sparkles className="w-5 h-5" />;
  }

  if (category.includes("Precast")) {
    return <Container className="w-5 h-5" />;
  }

  return <Wrench className="w-5 h-5" />;
}

/* =========================================================
   PROFILE PAGE
========================================================= */

function ProfilePageContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const initialTab =
    searchParams.get("tab") || "organization-structure";

  const [activeTab, setActiveTab] = useState(initialTab);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  /* Approach state */
  const [activeApproach, setActiveApproach] = useState("quality");

  /* Award state */
  const [selectedAward, setSelectedAward] = useState<string | null>(null);

  /* ---------------------------------------------------------
     Sync URL
  --------------------------------------------------------- */

  useEffect(() => {
    const tabFromUrl = searchParams.get("tab");

    if (
      tabFromUrl &&
      tabs.some((tab) => tab.id === tabFromUrl)
    ) {
      setActiveTab(tabFromUrl);
    }
  }, [searchParams]);

  /* ---------------------------------------------------------
     Change tab
  --------------------------------------------------------- */

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);

    router.push(`/profile?tab=${tabId}`, {
      scroll: false,
    });

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  /* ---------------------------------------------------------
     Equipment grouping
  --------------------------------------------------------- */

  const equipmentByCategory = useMemo(() => {
    return equipmentData.reduce(
      (acc, item) => {
        if (!acc[item.category]) {
          acc[item.category] = [];
        }

        acc[item.category].push(item);

        return acc;
      },
      {} as Record<string, typeof equipmentData>
    );
  }, []);

  /* ---------------------------------------------------------
     Active approach
  --------------------------------------------------------- */

  const activeApproachData = approachSections.find(
    (section) => section.id === activeApproach
  );

  /* ---------------------------------------------------------
     Current tab
  --------------------------------------------------------- */

  const currentTab =
    tabs.find((tab) => tab.id === activeTab) || tabs[0];

  const CurrentIcon = currentTab.icon;

  /* =========================================================
     RENDER
  ========================================================= */

  return (
    <div className="pt-24 lg:pt-24 pb-8 md:pb-16 bg-white min-h-screen w-full">
      <section className="w-full px-3 sm:px-4 lg:px-8">
        <div className="flex flex-col gap-8">

          {/* =================================================
              PROFILE NAVIGATION
          ================================================= */}

          <div className="w-full border-b border-[#eae7e3]">

            {/* Desktop */}
            <div className="hidden lg:flex items-center justify-between pb-3">

              <div className="flex items-center gap-3">
                <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-sapl-blue">
                  Profile
                </span>

                <span className="w-1 h-1 rounded-full bg-[#c9c4bc]" />

                <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#8a857d]">
                  {currentTab.label}
                </span>
              </div>

              <nav className="flex items-center gap-1">
                {tabs.map((tab) => {
                  const isActive = activeTab === tab.id;
                  const Icon = tab.icon;

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
                      <Icon className="w-3.5 h-3.5" />

                      <span className="text-[10px] font-extrabold uppercase tracking-wider">
                        {tab.shortLabel}
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
                Profile
              </span>

              <div className="relative z-50">
                <button
                  type="button"
                  onClick={() =>
                    setIsDropdownOpen((prev) => !prev)
                  }
                  className="flex items-center gap-2 bg-[#f7f6f4] border border-[#eae7e3] px-3.5 py-2 rounded-sm shadow-sm"
                >
                  <CurrentIcon className="w-3.5 h-3.5 text-sapl-blue" />

                  <span className="max-w-[180px] truncate text-[10px] font-extrabold uppercase tracking-wider text-[#1c1a17]">
                    {currentTab.shortLabel}
                  </span>

                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform ${isDropdownOpen
                      ? "rotate-180"
                      : ""
                      }`}
                  />
                </button>

                <AnimatePresence>
                  {isDropdownOpen && (
                    <motion.div
                      initial={{
                        opacity: 0,
                        y: -8,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      exit={{
                        opacity: 0,
                        y: -8,
                      }}
                      className="absolute right-0 top-full mt-2 w-64 bg-white border border-[#eae7e3] shadow-xl rounded-sm overflow-hidden"
                    >
                      {tabs.map((tab) => {
                        const Icon = tab.icon;
                        const isActive =
                          activeTab === tab.id;

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
                            <Icon
                              className={`w-4 h-4 ${isActive
                                ? "text-sapl-blue"
                                : "text-[#6D675E]"
                                }`}
                            />

                            <span
                              className={`text-[10px] font-extrabold uppercase tracking-wider ${isActive
                                ? "text-sapl-blue"
                                : "text-[#1c1a17]"
                                }`}
                            >
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

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{
                opacity: 0,
                y: 12,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -12,
              }}
              transition={{
                duration: 0.35,
              }}
              className="w-full"
            >

              {/* =================================================
                  1. ORGANIZATION
              ================================================= */}

              {activeTab === "organization-structure" && (
                <section className="w-full">

                  {/* Heading */}
                  <div className="flex flex-col items-center text-center gap-3 mb-8">
                    <span className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-sapl-blue">
                      01 / Organization
                    </span>

                    <h2 className="font-sans font-black text-2xl sm:text-3xl lg:text-4xl tracking-tight uppercase text-[#1c1a17]">
                      Organization Structure
                    </h2>

                    <div className="w-16 h-[3px] bg-sapl-blue rounded-full" />

                    <p className="max-w-2xl text-sm text-[#6D675E] leading-6 mt-2">
                      A structured leadership and departmental framework
                      supports effective planning, execution, quality and
                      operational control.
                    </p>
                  </div>

                  {/* Organization Tree */}
                  <div className="max-w-6xl mx-auto">

                    {/* Chairman */}
                    <div className="flex justify-center">
                      <div className="relative bg-navy-950 border border-sapl-blue p-4 rounded-sm w-full max-w-sm text-center overflow-hidden shadow-sm">
                        <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-sapl-blue" />

                        <span className="text-[9px] font-extrabold uppercase tracking-[0.2em] text-sapl-blue">
                          Leadership
                        </span>

                        <h3 className="mt-2 text-sm font-extrabold uppercase tracking-wider text-white">
                          Er. G. Srinivasan
                        </h3>

                        <p className="text-[10px] font-extrabold uppercase tracking-widest text-sapl-blue mt-1">
                          Founder & Chairman
                        </p>

                        <p className="text-[10px] text-[#d5d1c8] mt-2 leading-relaxed">
                          Established SAPL in 1987. Guides long-term
                          strategy, client relationships, and core standards.
                        </p>
                      </div>
                    </div>

                    {/* Line */}
                    <div className="flex justify-center">
                      <div className="w-px h-8 bg-sapl-blue/40" />
                    </div>

                    {/* Board */}
                    <div className="flex justify-center">
                      <div className="relative bg-[#f7f6f4] border border-[#eae7e3] p-4 rounded-sm w-full max-w-sm text-center overflow-hidden">
                        <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-sapl-blue" />

                        <span className="text-[9px] font-extrabold uppercase tracking-[0.2em] text-sapl-blue">
                          Governance
                        </span>

                        <h3 className="mt-2 text-sm font-extrabold uppercase tracking-wider text-[#1c1a17]">
                          Board of Directors
                        </h3>

                        <p className="text-[10px] font-extrabold uppercase tracking-widest text-sapl-blue mt-1">
                          Managing Director & Board Control
                        </p>

                        <p className="text-[10px] text-[#6D675E] mt-2 leading-relaxed">
                          Oversees regional projects, day-to-day
                          administration, cost optimization, and procurement
                          cycles.
                        </p>
                      </div>
                    </div>

                    {/* Main connector */}
                    <div className="hidden md:flex justify-center">
                      <div className="w-px h-10 bg-sapl-blue/40" />
                    </div>

                    {/* Departments */}
                    <div className="relative">

                      {/* Horizontal connector */}
                      <div className="hidden md:block absolute top-0 left-[12.5%] right-[12.5%] h-px bg-sapl-blue/25" />

                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-0 md:pt-0">

                        {[
                          {
                            title: "Engineering & Estimation",
                            text:
                              "Handles initial tenders, structural layouts, BIM modeling, and value-engineering optimization.",
                          },
                          {
                            title: "QA & Safety Control",
                            text:
                              "Operates strict pre-pour checklists, on-site laboratories, and safety guidelines.",
                          },
                          {
                            title: "Project Operations & Fleet",
                            text:
                              "Coordinates plant machinery allocations, scheduling, and core technical project teams.",
                          },
                          {
                            title: "Procurement & Logistics",
                            text:
                              "Manages steel/cement supply contracts and coordinates timely machinery movement.",
                          },
                        ].map((department, index) => (
                          <motion.div
                            key={department.title}
                            initial={{
                              opacity: 0,
                              y: 12,
                            }}
                            animate={{
                              opacity: 1,
                              y: 0,
                            }}
                            transition={{
                              delay: index * 0.07,
                            }}
                            className="relative bg-white border border-[#eae7e3] p-4 rounded-sm hover:border-sapl-blue/40 hover:shadow-md transition-all duration-300"
                          >
                            {/* Vertical connector */}
                            <div className="hidden md:block absolute -top-[1px] left-1/2 -translate-x-1/2 w-px h-4 bg-sapl-blue/25" />

                            <span className="text-[10px] font-extrabold text-sapl-blue tracking-widest">
                              0{index + 1}
                            </span>

                            <h4 className="mt-3 text-xs font-extrabold uppercase tracking-wider text-[#1c1a17]">
                              {department.title}
                            </h4>

                            <p className="text-[11px] text-[#6D675E] leading-relaxed mt-2">
                              {department.text}
                            </p>
                          </motion.div>
                        ))}

                      </div>
                    </div>
                  </div>
                </section>
              )}

              {/* =================================================
                  2. INFRASTRUCTURE
              ================================================= */}

              {activeTab === "infrastructure" && (
                <section className="w-full">

                  {/* Left aligned heading */}
                  <div className="max-w-3xl mb-8">
                    <span className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-sapl-blue">
                      02 / Infrastructure
                    </span>

                    <h2 className="mt-3 font-sans font-black text-2xl sm:text-3xl lg:text-4xl tracking-tight uppercase text-[#1c1a17]">
                      Corporate Infrastructure
                    </h2>

                    <div className="w-16 h-[3px] bg-sapl-blue rounded-full mt-3" />

                    <p className="mt-4 text-sm text-[#6D675E] leading-6 max-w-2xl">
                      Our equipment and operational infrastructure provide the
                      resources required for efficient project execution.
                    </p>
                  </div>

                  {/* Equipment list */}
                  <div className="w-full space-y-5">

                    {Object.entries(equipmentByCategory).map(
                      ([category, items], categoryIndex) => {

                        const total = items.reduce(
                          (sum, item) =>
                            sum + Number(item.quantity || 0),
                          0
                        );

                        return (
                          <motion.div
                            key={category}
                            initial={{
                              opacity: 0,
                              y: 10,
                            }}
                            animate={{
                              opacity: 1,
                              y: 0,
                            }}
                            transition={{
                              delay: categoryIndex * 0.05,
                            }}
                            className="border border-[#eae7e3] bg-[#f7f6f4] rounded-sm overflow-hidden"
                          >

                            {/* Category Header */}
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 px-4 py-3 border-b border-[#eae7e3] bg-white">

                              <div className="flex items-center gap-3">

                                <div className="w-10 h-10 rounded-sm bg-sapl-blue/10 flex items-center justify-center text-sapl-blue shrink-0">
                                  {getCategoryIcon(category)}
                                </div>

                                <div>
                                  <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#1c1a17]">
                                    {category}
                                  </h3>

                                  <span className="text-[10px] text-[#8a857d] uppercase tracking-wider">
                                    Equipment category
                                  </span>
                                </div>
                              </div>

                              <div className="flex items-center gap-2">
                                <span className="text-[9px] font-extrabold uppercase tracking-widest text-[#8a857d]">
                                  Total
                                </span>

                                <span className="bg-sapl-blue/10 border border-sapl-blue/20 text-sapl-blue text-xs font-extrabold px-2 py-1.5 rounded-sm">
                                  {String(total).padStart(2, "0")}
                                </span>
                              </div>

                            </div>

                            {/* Equipment rows */}
                            <div className="p-4 sm:p-4">

                              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">

                                {items.map((eq, idx) => (
                                  <div
                                    key={`${eq.equipment}-${idx}`}
                                    className="flex items-center justify-between gap-3 bg-white border border-[#eae7e3] px-3.5 py-2 rounded-sm hover:border-sapl-blue/40 transition-colors"
                                  >
                                    <span className="text-[10.5px] font-bold text-[#1c1a17]">
                                      {eq.equipment}
                                    </span>

                                    <span className="text-[10px] font-extrabold text-sapl-blue shrink-0">
                                      {String(eq.quantity).padStart(
                                        2,
                                        "0"
                                      )}
                                    </span>
                                  </div>
                                ))}

                              </div>

                            </div>
                          </motion.div>
                        );
                      }
                    )}

                  </div>
                </section>
              )}

              {/* =================================================
                  3. OUR APPROACH
              ================================================= */}

              {activeTab === "our-approach" && (
                <section className="w-full">

                  {/* Split heading */}
                  <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-8 lg:gap-16 mb-8">

                    <div>
                      <span className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-sapl-blue">
                        03 / Our Approach
                      </span>

                      <h2 className="mt-3 font-sans font-black text-2xl sm:text-3xl lg:text-4xl tracking-tight uppercase text-[#1c1a17]">
                        Our Strategic Approach
                      </h2>

                      <div className="w-16 h-[3px] bg-sapl-blue rounded-full mt-3" />
                    </div>

                    <div className="lg:pt-5">
                      <p className="text-sm sm:text-base text-[#6D675E] leading-7 max-w-2xl">
                        Quality, safety and environmental responsibility are
                        integrated into the way we manage and execute our
                        projects.
                      </p>
                    </div>

                  </div>

                  {/* Main approach */}
                  <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] border border-[#eae7e3] rounded-sm overflow-hidden">

                    {/* Sidebar */}
                    <div className="bg-[#f7f6f4] border-b lg:border-b-0 lg:border-r border-[#eae7e3]">

                      {approachSections.map((section) => {
                        const Icon = section.icon;
                        const active =
                          activeApproach === section.id;

                        return (
                          <button
                            key={section.id}
                            type="button"
                            onClick={() =>
                              setActiveApproach(section.id)
                            }
                            className={`w-full flex items-center gap-3 px-4 py-3 text-left border-b last:border-b-0 border-[#eae7e3] transition-colors ${active
                              ? "bg-white text-sapl-blue"
                              : "text-[#6D675E] hover:bg-white"
                              }`}
                          >
                            <span
                              className={`text-[10px] font-extrabold ${active
                                ? "text-sapl-blue"
                                : "text-[#aaa49a]"
                                }`}
                            >
                              {section.number}
                            </span>

                            <Icon className="w-4 h-4 shrink-0" />

                            <span className="text-[10px] font-extrabold uppercase tracking-wider">
                              {section.title}
                            </span>
                          </button>
                        );
                      })}

                    </div>

                    {/* Content */}
                    <div className="p-6 sm:p-6 lg:p-8 bg-white">

                      <AnimatePresence mode="wait">
                        <motion.div
                          key={activeApproach}
                          initial={{
                            opacity: 0,
                            x: 10,
                          }}
                          animate={{
                            opacity: 1,
                            x: 0,
                          }}
                          exit={{
                            opacity: 0,
                            x: -10,
                          }}
                          transition={{
                            duration: 0.25,
                          }}
                        >

                          {activeApproach === "quality" && (
                            <>
                              <div className="flex items-start justify-between gap-5">

                                <div>
                                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-sapl-blue">
                                    01 / Quality
                                  </span>

                                  <h3 className="mt-2 text-xl sm:text-2xl font-extrabold uppercase tracking-wide text-[#1c1a17]">
                                    Quality Management
                                  </h3>
                                </div>

                                <Award className="w-7 h-7 text-sapl-blue shrink-0" />

                              </div>

                              <p className="mt-6 text-sm text-[#4F4C42] leading-7">
                                Quality is of paramount importance to all
                                the members at SAPL. Our reputation for both
                                the quality of our project management and
                                finished projects is achieved through our
                                proven Quality Management System.
                              </p>

                              <div className="mt-7">

                                <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#6D675E]">
                                  Six basic principles of quality
                                </span>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">

                                  {[
                                    "Provides for long-term quality control through established processes and systems.",
                                    "Nurtures and guides our Quality Culture through its proven policies and procedures.",
                                    "Successfully identifies and controls the quality standard and quality of design as defined by our clients.",
                                    "Plans for Quality: Identifying measures of achieving the required quality, including construction methods, equipment, materials and personnel.",
                                    "Insures for Quality: Encouraging all parties to work together to deliver the best – first time.",
                                    "Provides for a process of continuous improvement correcting any potential quality deficiencies that may arise.",
                                  ].map((item, index) => (
                                    <div
                                      key={index}
                                      className="flex gap-3 p-3 bg-[#f7f6f4] border border-[#eae7e3] rounded-sm"
                                    >
                                      <span className="text-[10px] font-extrabold text-sapl-blue mt-0.5">
                                        0{index + 1}
                                      </span>

                                      <p className="text-[11px] text-[#4F4C42] leading-5">
                                        {item}
                                      </p>
                                    </div>
                                  ))}

                                </div>

                              </div>

                              <p className="mt-7 text-sm font-semibold italic text-[#1c1a17] border-l-2 border-sapl-blue pl-3 py-1">
                                Our Top Management and staff are committed
                                to providing our clients the satisfaction
                                of knowing that we will deliver exactly what
                                we promise.
                              </p>
                            </>
                          )}

                          {activeApproach === "safety" && (
                            <>
                              <div className="flex items-start justify-between gap-5">

                                <div>
                                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-sapl-blue">
                                    02 / Safety
                                  </span>

                                  <h3 className="mt-2 text-xl sm:text-2xl font-extrabold uppercase tracking-wide text-[#1c1a17]">
                                    Health & Safety
                                  </h3>
                                </div>

                                <ShieldCheck className="w-7 h-7 text-sapl-blue shrink-0" />

                              </div>

                              <p className="mt-6 text-sm text-[#4F4C42] leading-7">
                                We are committed to maintaining high standards
                                of the Integrated Management Systems governing
                                our Health, Safety, Environmental and Quality
                                Codes of Practice.
                              </p>

                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-7">

                                {[
                                  "Integrated management systems.",
                                  "Continual review and improvement.",
                                  "Industry best-practice procedures.",
                                  "Health and safety as an integral management activity.",
                                ].map((item, index) => (
                                  <div
                                    key={index}
                                    className="flex gap-3 p-3 bg-[#f7f6f4] border border-[#eae7e3] rounded-sm"
                                  >
                                    <CheckCircle2 className="w-4 h-4 text-sapl-blue shrink-0 mt-0.5" />

                                    <p className="text-[11px] text-[#4F4C42] leading-5">
                                      {item}
                                    </p>
                                  </div>
                                ))}

                              </div>
                            </>
                          )}

                          {activeApproach === "environment" && (
                            <>
                              <div className="flex items-start justify-between gap-5">

                                <div>
                                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-sapl-blue">
                                    03 / Environment
                                  </span>

                                  <h3 className="mt-2 text-xl sm:text-2xl font-extrabold uppercase tracking-wide text-[#1c1a17]">
                                    Environmental Management
                                  </h3>
                                </div>

                                <Globe2 className="w-7 h-7 text-sapl-blue shrink-0" />

                              </div>

                              <div className="mt-6 space-y-5 text-sm text-[#4F4C42] leading-7">

                                <p>
                                  We recognise the importance of utilising
                                  the most modern and most sustainable
                                  materials within the construction process.
                                  We are proud to have built iconic projects
                                  which have broken new grounds in terms of
                                  sustainable materials and innovative
                                  construction techniques.
                                </p>

                                <p>
                                  SAPL continuously strives to perform to
                                  sustainable best practice in construction
                                  in our mission to lessen our impact on our
                                  environment.
                                </p>

                              </div>

                              <div className="mt-7 grid grid-cols-1 sm:grid-cols-3 gap-3">

                                {[
                                  "Sustainable Materials",
                                  "Responsible Sourcing",
                                  "Supply Chain Compliance",
                                ].map((item) => (
                                  <div
                                    key={item}
                                    className="p-4 bg-[#f7f6f4] border border-[#eae7e3] rounded-sm"
                                  >
                                    <CheckCircle2 className="w-4 h-4 text-sapl-blue mb-2" />

                                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#1c1a17]">
                                      {item}
                                    </span>
                                  </div>
                                ))}

                              </div>
                            </>
                          )}

                        </motion.div>
                      </AnimatePresence>

                    </div>
                  </div>
                </section>
              )}

              {/* =================================================
                  4. AWARDS
              ================================================= */}

              {activeTab === "awards" && (
                <section className="w-full">

                  {/* Left aligned heading */}
                  <div className="max-w-3xl mb-8">
                    <span className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-sapl-blue">
                      04 / Recognition
                    </span>

                    <h2 className="mt-3 font-sans font-black text-2xl sm:text-3xl lg:text-4xl tracking-tight uppercase text-[#1c1a17]">
                      Awards & Accomplishments
                    </h2>

                    <div className="w-16 h-[3px] bg-sapl-blue rounded-full mt-3" />

                    <p className="mt-4 text-sm text-[#6D675E] leading-6">
                      Recognition received for achievement, performance and
                      contribution over the years.
                    </p>
                  </div>

                  {/* Featured first award */}
                  <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr] gap-4 lg:gap-6 mb-8 mt-4">

                    <button
                      type="button"
                      onClick={() =>
                        setSelectedAward(awardsData[0].src)
                      }
                      className="group relative bg-[#f7f6f4] border border-[#eae7e3] rounded-sm p-3 text-left overflow-hidden"
                    >
                      <div className="relative aspect-[3/4] sm:aspect-[4/5] lg:aspect-[3/4] bg-white border border-[#eae7e3] overflow-hidden">

                        <Image
                          src={awardsData[0].src}
                          alt="Featured award"
                          fill
                          priority
                          sizes="(max-width: 1024px) 100vw, 65vw"
                          className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.025]"
                        />

                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/45 to-transparent h-1/2 opacity-0 group-hover:opacity-100 transition-opacity" />

                        <div className="absolute bottom-4 left-4 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
                          <span className="bg-white px-2 py-2 text-[9px] font-extrabold uppercase tracking-wider text-[#1c1a17]">
                            View Award
                          </span>
                        </div>

                      </div>

                      <div className="mt-4">
                        <span className="text-[9px] font-extrabold uppercase tracking-widest text-sapl-blue">
                          Featured Recognition
                        </span>

                        <h3 className="mt-1 text-base font-extrabold uppercase tracking-wider text-[#1c1a17]">
                          {awardsData[0].title}
                        </h3>
                      </div>
                    </button>

                    <div className="bg-[#f7f6f4] border border-[#eae7e3] rounded-sm p-6 lg:p-10 flex flex-col justify-center">

                      <Award className="w-8 h-8 text-sapl-blue mb-4" />

                      <h3 className="text-xl lg:text-2xl font-extrabold uppercase tracking-wide text-[#1c1a17]">
                        Recognition through performance
                      </h3>

                      <p className="text-sm lg:text-base text-[#6D675E] leading-7 mt-4">
                        A collection of awards and accomplishments reflecting
                        SAPL's history and professional contribution. Over the last
                        three decades, our pursuit of engineering excellence, rapid execution
                        capabilities, and unwavering commitment to structural quality have been
                        consistently recognized by esteemed institutions, visionary leaders, and
                        industry governing bodies across the nation.
                      </p>

                      <div className="mt-6 pt-4 border-t border-[#eae7e3]">
                        <span className="text-3xl font-black text-sapl-blue">
                          {awardsData.length}
                        </span>

                        <span className="ml-2 text-[10px] font-extrabold uppercase tracking-widest text-[#6D675E]">
                          Recognition Records
                        </span>
                      </div>

                    </div>

                  </div>

                  {/* Remaining gallery */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 lg:gap-6">

                    {awardsData.slice(1).map((award, idx) => {
                      const { src, title } = award;

                      return (
                        <button
                          key={src}
                          type="button"
                          onClick={() =>
                            setSelectedAward(src)
                          }
                          className="group bg-[#f7f6f4] border border-[#eae7e3] rounded-sm p-2 text-left hover:shadow-md transition-all"
                        >

                          <div className="relative aspect-[3/4] bg-white border border-[#eae7e3] overflow-hidden">

                            <Image
                              src={src}
                              alt={title}
                              fill
                              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                              className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                            />

                          </div>

                          <div className="mt-3 flex gap-2">

                            <span className="text-[9px] font-extrabold text-sapl-blue shrink-0">
                              {String(idx + 2).padStart(2, "0")}
                            </span>

                            <span className="text-[12px] font-extrabold uppercase leading-[1.1rem] tracking-wider text-[#1c1a17] line-clamp-2 title-tooltip" title={title}>
                              {title}
                            </span>

                          </div>

                        </button>
                      );
                    })}

                  </div>

                </section>
              )}

              {/* =================================================
                  5. CSR
              ================================================= */}

              {activeTab === "csr" && (
                <section className="w-full">

                  {/* Split header */}
                  <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-8 lg:gap-16 mb-8">

                    <div>
                      <span className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-sapl-blue">
                        05 / Responsibility
                      </span>

                      <h2 className="mt-3 font-sans font-black text-2xl sm:text-3xl lg:text-4xl tracking-tight uppercase text-[#1c1a17]">
                        Corporate Social Responsibility
                      </h2>

                      <div className="w-16 h-[3px] bg-sapl-blue rounded-full mt-3" />
                    </div>

                    <div className="lg:pt-5">
                      <p className="text-sm sm:text-base text-[#6D675E] leading-7">
                        The company is guided by a CSR approach based on
                        social justice, environmental quality and economic
                        prosperity.
                      </p>
                    </div>

                  </div>

                  {/* Philosophy */}
                  <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-5 mb-4">

                    <div className="bg-[#f7f6f4] border border-[#eae7e3] rounded-sm p-4 sm:p-6">

                      <div className="flex items-center gap-4 mb-4">

                        <div className="w-11 h-11 bg-white border border-[#eae7e3] rounded-full flex items-center justify-center text-sapl-blue shrink-0">
                          <Globe2 className="w-5 h-5" />
                        </div>

                        <div>
                          <span className="text-[9px] font-extrabold uppercase tracking-widest text-sapl-blue">
                            Core Philosophy
                          </span>

                          <h3 className="mt-1 text-base sm:text-lg font-extrabold uppercase tracking-wider text-[#1c1a17]">
                            Community Integration
                          </h3>
                        </div>

                      </div>

                      <div className="space-y-4 text-sm text-[#4F4C42] leading-7">

                        <p>
                          The company is guided by a well-defined CSR
                          approach based on social justice, environmental
                          quality and economic prosperity.
                        </p>

                        <p>
                          Social and environmental considerations are
                          included within company operations while managing
                          the expectations of employees, suppliers and the
                          surrounding community.
                        </p>

                        <p className="font-semibold text-[#1c1a17] border-l-2 border-sapl-blue pl-3">
                          The Company has participated in developmental
                          activities organized under the plank of CDBACA
                          (Coimbatore Builders & Contractors Association).
                        </p>

                      </div>

                    </div>

                    {/* Principles */}
                    <div className="border border-[#eae7e3] rounded-sm p-4 sm:p-6 bg-white">

                      <span className="text-[9px] font-extrabold uppercase tracking-widest text-sapl-blue">
                        Three Dimensions
                      </span>

                      <div className="mt-6 space-y-3">

                        {[
                          "Social Justice",
                          "Environmental Quality",
                          "Economic Prosperity",
                        ].map((item, index) => (
                          <div
                            key={item}
                            className="flex items-center gap-4 p-3 bg-[#f7f6f4] border border-[#eae7e3] rounded-sm"
                          >
                            <span className="text-[10px] font-extrabold text-sapl-blue">
                              0{index + 1}
                            </span>

                            <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#1c1a17]">
                              {item}
                            </span>
                          </div>
                        ))}

                      </div>

                    </div>

                  </div>

                  {/* Initiatives */}
                  <div className="mb-6">

                    <div className="flex items-center gap-3 mb-4">

                      <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-sapl-blue">
                        Community Initiatives
                      </span>

                      <div className="h-px bg-[#eae7e3] flex-1" />

                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                      {/* School */}
                      <div className="bg-[#f7f6f4] border border-[#eae7e3] p-4 rounded-sm relative overflow-hidden">

                        <div className="absolute top-0 left-0 w-[3px] h-full bg-sapl-blue" />

                        <GraduationCap className="w-6 h-6 text-sapl-blue mb-4" />

                        <span className="text-[9px] font-extrabold uppercase tracking-widest text-[#8a857d]">
                          01
                        </span>

                        <h3 className="mt-2 text-sm font-extrabold uppercase tracking-wider text-[#1c1a17]">
                          School of Construction Artisans
                        </h3>

                        <p className="text-[11px] text-[#6D675E] leading-6 mt-3">
                          A notable initiative promoting trained artisans in
                          construction trades and uplifting rural youth.
                        </p>

                      </div>

                      {/* Medical */}
                      <div className="bg-[#f7f6f4] border border-[#eae7e3] p-4 rounded-sm relative overflow-hidden">

                        <div className="absolute top-0 left-0 w-[3px] h-full bg-sapl-blue" />

                        <Heart className="w-6 h-6 text-sapl-blue mb-4" />

                        <span className="text-[9px] font-extrabold uppercase tracking-widest text-[#8a857d]">
                          02
                        </span>

                        <h3 className="mt-2 text-sm font-extrabold uppercase tracking-wider text-[#1c1a17]">
                          Worker Welfare
                        </h3>

                        <p className="text-[11px] text-[#6D675E] leading-6 mt-3">
                          Regular free medical camps are organized for workers
                          engaged in construction activities.
                        </p>

                      </div>

                      {/* Education */}
                      <div className="bg-[#f7f6f4] border border-[#eae7e3] p-4 rounded-sm relative overflow-hidden">

                        <div className="absolute top-0 left-0 w-[3px] h-full bg-sapl-blue" />

                        <GraduationCap className="w-6 h-6 text-sapl-blue mb-4" />

                        <span className="text-[9px] font-extrabold uppercase tracking-widest text-[#8a857d]">
                          03
                        </span>

                        <h3 className="mt-2 text-sm font-extrabold uppercase tracking-wider text-[#1c1a17]">
                          Engineering Education
                        </h3>

                        <p className="text-[11px] text-[#6D675E] leading-6 mt-3">
                          Sponsoring quiz programmes conducted by engineering
                          colleges for civil engineering students.
                        </p>

                      </div>

                    </div>

                  </div>

                  {/* Internal policies */}
                  <div className="border border-[#eae7e3] bg-white rounded-sm p-4 sm:p-6">

                    <div className="flex items-center gap-4 mb-4">

                      <div className="w-11 h-11 bg-[#f7f6f4] border border-[#eae7e3] rounded-full flex items-center justify-center text-sapl-blue">
                        <ShieldCheck className="w-5 h-5" />
                      </div>

                      <div>
                        <span className="text-[9px] font-extrabold uppercase tracking-widest text-sapl-blue">
                          Internal Dimension
                        </span>

                        <h3 className="mt-1 text-base sm:text-lg font-extrabold uppercase tracking-wider text-[#1c1a17]">
                          Internal Policies & Contributions
                        </h3>
                      </div>

                    </div>

                    <p className="text-sm text-[#4F4C42] leading-7">
                      Within the company, well-laid policies for{" "}
                      <strong>Human Resource Management</strong>,{" "}
                      <strong>Health and safety at work</strong>, and{" "}
                      <strong>Adaptation to change</strong> are in place and
                      followed as an internal dimension of CSR.
                    </p>

                  </div>

                </section>
              )}

            </motion.div>
          </AnimatePresence>

          {/* =================================================
              PREVIOUS / NEXT
          ================================================= */}

          <div className="border-t border-[#eae7e3] pt-4">

            <div className="flex items-center justify-between">

              {tabs.findIndex(
                (tab) => tab.id === activeTab
              ) > 0 ? (
                <button
                  type="button"
                  onClick={() => {
                    const index = tabs.findIndex(
                      (tab) => tab.id === activeTab
                    );

                    handleTabChange(
                      tabs[index - 1].id
                    );
                  }}
                  className="group flex items-center gap-2 text-left"
                >
                  <ChevronRight className="w-4 h-4 rotate-180 text-sapl-blue transition-transform group-hover:-translate-x-1" />

                  <div>
                    <span className="block text-[9px] font-extrabold uppercase tracking-widest text-[#999188]">
                      Previous
                    </span>

                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#1c1a17]">
                      {
                        tabs[
                          tabs.findIndex(
                            (tab) =>
                              tab.id === activeTab
                          ) - 1
                        ].shortLabel
                      }
                    </span>
                  </div>
                </button>
              ) : (
                <div />
              )}

              {tabs.findIndex(
                (tab) => tab.id === activeTab
              ) <
                tabs.length - 1 ? (
                <button
                  type="button"
                  onClick={() => {
                    const index = tabs.findIndex(
                      (tab) => tab.id === activeTab
                    );

                    handleTabChange(
                      tabs[index + 1].id
                    );
                  }}
                  className="group flex items-center gap-2 text-right"
                >
                  <div>
                    <span className="block text-[9px] font-extrabold uppercase tracking-widest text-[#999188]">
                      Next
                    </span>

                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#1c1a17]">
                      {
                        tabs[
                          tabs.findIndex(
                            (tab) =>
                              tab.id === activeTab
                          ) + 1
                        ].shortLabel
                      }
                    </span>
                  </div>

                  <ChevronRight className="w-4 h-4 text-sapl-blue transition-transform group-hover:translate-x-1" />
                </button>
              ) : (
                <div />
              )}

            </div>
          </div>

        </div>
      </section>

      {/* =====================================================
          AWARD LIGHTBOX
      ===================================================== */}

      <AnimatePresence>
        {selectedAward && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-3"
            onClick={() => setSelectedAward(null)}
          >
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.96,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                scale: 0.96,
              }}
              className="relative w-full max-w-5xl h-[85vh] bg-white p-2 rounded-sm"
              onClick={(event) =>
                event.stopPropagation()
              }
            >
              <Image
                src={selectedAward}
                alt="Award"
                fill
                sizes="90vw"
                className="object-contain"
              />

              <button
                type="button"
                onClick={() =>
                  setSelectedAward(null)
                }
                className="absolute right-4 top-4 w-9 h-9 bg-[#1c1a17] text-white flex items-center justify-center rounded-sm hover:bg-sapl-blue transition-colors"
                aria-label="Close award"
              >
                ×
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* =========================================================
   PAGE
========================================================= */

export default function ProfilePage() {
  return (
    <Suspense
      fallback={
        <div className="pt-20 pb-8 md:pt-24 md:pb-16 text-center text-navy-500 font-bold uppercase tracking-widest">
          Loading Profile...
        </div>
      }
    >
      <ProfilePageContent />
    </Suspense>
  );
}