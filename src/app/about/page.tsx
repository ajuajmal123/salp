"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Building2,
  Target,
  Award,
  Wrench,
  Users2,
  MapPin,
  Calendar,
  Layers,
  Compass,
  CheckCircle2,
  FileText
} from "lucide-react";

export default function AboutPage() {
  return (
    <div className="pt-20 bg-white">

      {/* 1. Sub-page Header Hero Section */}
      <section className="relative py-24 bg-navy-950 text-white overflow-hidden">


        {/* Widescreen background image banner */}
        <div className="absolute inset-0 opacity-20 pointer-events-none select-none">
          <img
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1920&q=80"
            alt="SAPL Construction Legacy"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/80 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-4 items-center justify-center"
          >

            <h1 className="font-sans font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight uppercase" style={{ color: "#ffffff" }}>
              About Us
            </h1>
            <div className="w-20 h-[3px] bg-sapl-blue rounded-full mt-2" />
            <p className="text-navy-200 max-w-3xl text-sm sm:text-base leading-relaxed mt-4 !text-[#eae7e3] font-medium">
              Established in 1987, Srinivasan Associates Private Limited has grown into one of South India's premier civil engineering and construction organizations, built on quality, on-time delivery, and engineering excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Core Profile & Corporate Legacy (Banding: Pure White Canvas) */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-[#eae7e3]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          {/* Narrative Text Column */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-left">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-sapl-blue">
              Our Journey & Reach
            </span>
            <h2 className="font-sans font-extrabold text-3xl sm:text-4xl tracking-tight uppercase" style={{ color: "#1c1a17" }}>
              Over Three Decades of Civil Excellence
            </h2>
            <div className="w-12 h-[2.5px] bg-sapl-blue rounded-full" />

            <div className="space-y-6 text-[#4F4C42] text-sm sm:text-base leading-relaxed mt-4">
              <p className="font-semibold !text-[#2a2823] text-base border-l-2 border-sapl-blue pl-4">
                Founded in 1987 by Er. G. Srinivasan, Srinivasan Associates Private Limited (referred as SAPL) is headquartered in Coimbatore, Tamilnadu. From humble beginnings, SAPL has experienced an exponential growth in size and reputation over the last decades and is now a renowned civil engineering and construction organization.
              </p>
              <p>
                SAPL has a strong presence in the Tamilnadu, Karnataka, Pondicherry and Andhra regions based on a strong portfolio of successfully executed projects.
              </p>
              <p>
                SAPL’s core project teams have over 30 years of experience in designing, executing and delivering projects across various sectors ranging from residential, industrial, commercial, institutional and healthcare.
              </p>
              <p>
                The pillars of SAPL’s good reputation stem from our employees, client satisfaction, hands-on engineered project approach, quality, on-time delivery and effective cost optimization for clients. The testament to the above-mentioned qualities is the fact that SAPL receives repeated business and has established long-term relationships with many clients.
              </p>
            </div>
          </div>

          {/* Quick Metrics Visual Panel */}
          <div className="lg:col-span-5 bg-[#f7f6f4] border border-[#eae7e3] p-8 rounded-sm text-left shadow-sm">
            <h3 className="text-xs font-extrabold uppercase tracking-[0.2em] text-sapl-blue mb-8">
              Corporate Snapshot
            </h3>
            <div className="space-y-8">

              {/* Metric 1 */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-sm bg-white border border-[#eae7e3] flex items-center justify-center text-sapl-blue shrink-0">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-extrabold text-navy-500 uppercase tracking-wider">Established</h4>
                  <p className="text-lg font-bold !text-[#1c1a17]">1987</p>
                </div>
              </div>

              {/* Metric 2 */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-sm bg-white border border-[#eae7e3] flex items-center justify-center text-sapl-blue shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-extrabold text-navy-500 uppercase tracking-wider">Headquarters</h4>
                  <p className="text-base font-bold !text-[#1c1a17]">Coimbatore, Tamilnadu</p>
                </div>
              </div>

              {/* Metric 3 */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-sm bg-white border border-[#eae7e3] flex items-center justify-center text-sapl-blue shrink-0">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-extrabold text-navy-500 uppercase tracking-wider">Geographic Footprint</h4>
                  <p className="text-sm font-bold !text-[#1c1a17] leading-tight">Tamilnadu, Karnataka, Pondicherry & Andhra Regions</p>
                </div>
              </div>

              {/* Metric 4 */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-sm bg-white border border-[#eae7e3] flex items-center justify-center text-sapl-blue shrink-0">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-extrabold text-navy-500 uppercase tracking-wider">Expertise Sectors</h4>
                  <p className="text-sm font-bold !text-[#1c1a17] leading-tight">Residential, Industrial, Commercial, Institutional & Healthcare</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 2.5 Founder & Chairman Section (Banding: Pure White Canvas) */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-[#eae7e3]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Founder Image (5 columns) */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] w-full max-w-sm mx-auto rounded-sm overflow-hidden shadow-xl border border-[#eae7e3]">
              <img
                src="/Srinivasan.jpg.jpeg"
                alt="Er. G. Srinivasan, Founder & Chairman"
                className="w-full h-full object-cover object-center animate-[fadeIn_1s_ease-out]"
              />
            </div>
            {/* Soft decorative shadow block behind image */}
            <div className="absolute -inset-2 bg-sapl-blue/5 -z-10 rounded-sm blur-md" />
          </div>

          {/* Founder Narrative (7 columns) */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-left">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-sapl-blue animate-[fadeIn_1s_ease-out_0.2s]">
              Founder & Chairman
            </span>
            <h2 className="font-sans font-extrabold text-3xl sm:text-4xl tracking-tight uppercase" style={{ color: "#1c1a17" }}>
              Er. G. Srinivasan
            </h2>
            <p className="text-sm font-bold text-sapl-blue uppercase tracking-wider -mt-3">
              Founder & Chairman, Srinivasan Associates
            </p>
            <div className="w-12 h-[2.5px] bg-sapl-blue rounded-full" />

            <div className="space-y-4 text-[#4F4C42] text-sm sm:text-base leading-relaxed mt-2">
              <p className="font-semibold !text-[#2a2823] italic border-l-2 border-sapl-blue pl-4">
                "Our journey since 1987 has been defined by a commitment to quality, integrity, and client satisfaction. We believe in engineering structures that stand the test of time, built on a foundation of trust and technical excellence."
              </p>
              <p>
                Under the visionary guidance of Er. G. Srinivasan, SAPL has grown from a local contractor to a leading multi-disciplinary civil engineering firm. His hands-on engineering focus and emphasis on cost-effectiveness, timely delivery, and self-reliance have paved the way for more than three decades of solid construction legacy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Leadership & Operational Strengths (Banding: Warm Light Stone Canvas) */}
      <section className="py-24 bg-[#f7f6f4] border-b border-[#eae7e3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

            {/* Leadership Overview */}
            <div className="lg:col-span-6 flex flex-col gap-6">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-sapl-blue">
                Leadership Core
              </span>
              <h2 className="font-sans font-extrabold text-3xl sm:text-4xl tracking-tight uppercase" style={{ color: "#1c1a17" }}>
                Relentless Attention To Details
              </h2>
              <div className="w-12 h-[2.5px] bg-sapl-blue rounded-full" />

              <div className="space-y-6 text-[#4F4C42] text-sm sm:text-base leading-relaxed mt-4">
                <p>
                  SAPL’s senior leadership and project teams give relentless attention to details and to understand customer requirements across various segments while consistently adapting to industrial advancements and technological upgradation in the civil field.
                </p>
                <p>
                  Our management is focused on life-long learning and adopting new business practices to ensure SAPL has a competitive edge in the construction industry.
                </p>
                <p>
                  Our experience in handling niche projects coupled with a vast knowledge bank has allowed us to earn our client’s confidence and trust over the years.
                </p>
              </div>
            </div>

            {/* Strategic Pillars Cards */}
            <div className="lg:col-span-6 flex flex-col gap-8">

              {/* Pillar 1: Top-Down Focus */}
              <div className="bg-white border border-[#eae7e3] p-8 rounded-sm shadow-sm relative overflow-hidden group hover:shadow-md transition-shadow">
                <div className="absolute top-0 left-0 w-full h-[3px] bg-sapl-blue" />
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-sapl-blue/10 flex items-center justify-center text-sapl-blue">
                    <Users2 className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-extrabold tracking-wider uppercase" style={{ color: "#1c1a17" }}>
                    Exemplary Top-Down Focus
                  </h3>
                </div>
                <p className="text-xs !text-[#6D675E] leading-relaxed">
                  SAPL is an organization with exemplary top-down focused approach. Our top management is extremely involved in all our projects from initiation phase to delivery phase. This ensures critical issues are dealt with swiftly to ensure smooth project operations.
                </p>
              </div>

              {/* Pillar 2: Robust Fleet of Plant & Machinery */}
              <div className="bg-white border border-[#eae7e3] p-8 rounded-sm shadow-sm relative overflow-hidden group hover:shadow-md transition-shadow">
                <div className="absolute top-0 left-0 w-full h-[3px] bg-sapl-blue" />
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-sapl-blue/10 flex items-center justify-center text-sapl-blue">
                      <Wrench className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-extrabold tracking-wider uppercase" style={{ color: "#1c1a17" }}>
                      Robust Machinery Fleet
                    </h3>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-extrabold tracking-wider bg-sapl-light text-sapl-blue uppercase border border-sapl-blue/10">
                    <FileText className="w-3 h-3" />
                    pg. 17-19
                  </span>
                </div>
                <p className="text-xs !text-[#6D675E] leading-relaxed">
                  SAPL boasts a very strong fleet of plant and machinery equipment (pg. 17-19). Our asset base allows us to quote competitive item rate tenders to our clients and execute projects in a very timely manner.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 4. Full Width Sincere Assurance Banner (Deep Slate/Stone Accent) */}
      <section className="py-20 bg-navy-950 text-white relative overflow-hidden">


        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center gap-6"
          >
            <div className="w-12 h-12 rounded-full bg-sapl-blue/20 flex items-center justify-center text-sapl-blue">
              <CheckCircle2 className="w-6 h-6" />
            </div>

            <p className="font-sans text-xl sm:text-2xl font-normal leading-relaxed text-[#f7f6f4] italic max-w-4xl">
              "SAPL’s staff strive tirelessly for our client’s satisfaction. Our people are our biggest assets. SAPL sincerely assures our existing and potential clients extremely professional construction services with utmost quality and cost optimization. We hope to be your preferred construction partner till the very end."
            </p>

            <div className="w-12 h-[2px] bg-sapl-blue rounded-full mt-2" />
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-sapl-blue">
              Our Promise of Partnership
            </span>
          </motion.div>
        </div>
      </section>

      {/* 5. Strategic Vision & Mission Grid (Banding: Pure White Canvas) */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20 flex flex-col items-center gap-4">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-sapl-blue">
            Our Foundation
          </span>
          <h2 className="font-sans font-extrabold text-3xl sm:text-4xl tracking-tight uppercase" style={{ color: "#1c1a17" }}>
            Vision & Mission
          </h2>
          <div className="w-16 h-[3px] bg-sapl-blue rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Vision Column */}
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-4 border-b border-[#eae7e3] pb-4">
              <div className="w-10 h-10 rounded-full bg-sapl-blue/10 flex items-center justify-center text-sapl-blue">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="font-sans text-lg font-extrabold uppercase tracking-wider" style={{ color: "#1c1a17" }}>
                Our Vision
              </h3>
            </div>

            <div className="space-y-6">
              {/* Vision Card 1 */}
              <div className="p-6 bg-[#f7f6f4] border border-[#eae7e3] rounded-sm text-left relative overflow-hidden group hover:border-sapl-blue/40 transition-colors min-h-[160px] flex flex-col justify-center">
                <div className="absolute top-0 left-0 w-[3px] h-full bg-sapl-blue" />
                <h4 className="text-xs font-bold uppercase tracking-wider text-sapl-blue mb-2">Delighting Customers</h4>
                <p className="text-sm font-extrabold text-navy-950 !text-[#1c1a17] leading-relaxed">
                  "To create a culture within our company that will in turn create quality-minded employees and then top-quality performance. We will seek to DELIGHT our customers!"
                </p>
              </div>

              {/* Vision Card 2 */}
              <div className="p-6 bg-[#f7f6f4] border border-[#eae7e3] rounded-sm text-left relative overflow-hidden group hover:border-sapl-blue/40 transition-colors min-h-[160px] flex flex-col justify-center">
                <div className="absolute top-0 left-0 w-[3px] h-full bg-sapl-blue" />
                <h4 className="text-xs font-bold uppercase tracking-wider text-sapl-blue mb-2">Premier Construction Provider</h4>
                <p className="text-sm font-extrabold text-navy-950 !text-[#1c1a17] leading-relaxed">
                  "By integrating our total quality process throughout our firm, we will become the premier provider of construction services, and our customers will be astounded."
                </p>
              </div>
            </div>
          </div>

          {/* Mission Column */}
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-4 border-b border-[#eae7e3] pb-4">
              <div className="w-10 h-10 rounded-full bg-sapl-blue/10 flex items-center justify-center text-sapl-blue">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="font-sans text-lg font-extrabold uppercase tracking-wider" style={{ color: "#1c1a17" }}>
                Our Mission
              </h3>
            </div>

            <div className="space-y-6">
              {/* Mission Card 1 */}
              <div className="p-6 bg-[#f7f6f4] border border-[#eae7e3] rounded-sm text-left relative overflow-hidden group hover:border-sapl-blue/40 transition-colors min-h-[160px] flex flex-col justify-center">
                <div className="absolute top-0 left-0 w-[3px] h-full bg-sapl-blue" />
                <h4 className="text-xs font-bold uppercase tracking-wider text-sapl-blue mb-2">Total Business Solutions</h4>
                <p className="text-sm font-extrabold text-navy-950 !text-[#1c1a17] leading-relaxed">
                  "To excel as a global-standard CONSTRUCTION ENGINEERING COMPANY providing Total Business Solutions through Quality Products, Systems and Services in the Construction industry,"
                </p>
              </div>

              {/* Mission Card 2 */}
              <div className="p-6 bg-[#f7f6f4] border border-[#eae7e3] rounded-sm text-left relative overflow-hidden group hover:border-sapl-blue/40 transition-colors min-h-[160px] flex flex-col justify-center">
                <div className="absolute top-0 left-0 w-[3px] h-full bg-sapl-blue" />
                <h4 className="text-xs font-bold uppercase tracking-wider text-sapl-blue mb-2">Self-Reliance in Infrastructure</h4>
                <p className="text-sm font-extrabold text-navy-950 !text-[#1c1a17] leading-relaxed">
                  "by achieving self-reliance in Construction of Residential, Commercial, Industrial and Institutional buildings."
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
