import React from "react";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import ProjectsSection from "@/components/sections/ProjectsSection";
import CoreValues from "@/components/sections/CoreValues";
import ClientMarquee from "@/components/sections/ClientMarquee";

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

      {/* 5. Moving Partner Infinite Marquee */}
      <ClientMarquee />
    </>
  );
}

