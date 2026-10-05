import React from "react";
import dynamic from "next/dynamic";
import Hero from "@/components/sections/Hero";

const Stats = dynamic(() => import("@/components/sections/Stats"), {
  ssr: true,
});
const ProjectsSection = dynamic(() => import("@/components/sections/ProjectsSection"), {
  ssr: true,
});
const CoreValues = dynamic(() => import("@/components/sections/CoreValues"), {
  ssr: true,
});
const LegacySection = dynamic(() => import("@/components/sections/LegacySection/LegacySection"), {
  ssr: true,
});
const ClientMarquee = dynamic(() => import("@/components/sections/ClientMarquee"), {
  ssr: true,
});

export default function Home() {
  return (
    <>
      {/* 1. Fullscreen Hero Section */}
      <Hero />

      {/* 2. Scroll-Triggered Stats Milestone Counters */}
      <Stats />

      {/* 3. Recent Engineering Landmarks (6 Projects Showcase) */}
      <ProjectsSection />

      {/* 4. Core Corporate Values Grid */}
      <CoreValues />

      {/* NEW: 4.5 Scroll-driven SAPL Corporate Legacy Timeline */}
      <LegacySection />

      {/* 5. Moving Partner Infinite Marquee */}
      <ClientMarquee />
    </>
  );
}

