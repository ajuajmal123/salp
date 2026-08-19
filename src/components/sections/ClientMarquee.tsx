"use client";

import React from "react";
import Image from "next/image";
import InfiniteMarquee from "../ui/InfiniteMarquee";

const clients = [
  { name: "Aravind Eye Care System", path: "/Client Logos/Aravind.jpg" },
  { name: "ITC Limited", path: "/Client Logos/ITC.jpg" },
  { name: "Nivasan Homes", path: "/Client Logos/Nivasan.jpg" },
  { name: "Ramco Cements", path: "/Client Logos/Ramco.jpg" },
  { name: "Shoeline", path: "/Client Logos/Shoeline.jpg" },
  { name: "Velammal", path: "/Client Logos/Velammal.jpg" },
  { name: "Bannari Amman", path: "/Client Logos/Bannari Amman.jpg" },
  { name: "Decathlon", path: "/Client Logos/Decathlon.jpg" },
  { name: "Honeywell", path: "/Client Logos/Honeywell.jpg" },
  { name: "LGB", path: "/Client Logos/LGB.jpg" },
];

export default function ClientMarquee() {
  return (
    <section className="relative py-8 md:py-12 bg-white overflow-hidden border-b border-[#eae7e3]">
      {/* Structural layout to keep design simple, neat, and highly readable */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Modernist Centered Section Header */}
        <div className="text-center mb-6 md:mb-10 flex flex-col items-center gap-3">
          <h2 className="font-sans text-3xl sm:text-4xl tracking-tight uppercase" style={{ color: "#1c1a17" }}>
            Our Clients
          </h2>
          {/* Custom Teal/Cyan Underline Accent matching corporate identity */}
          <div className="w-16 h-[3px] bg-sapl-blue rounded-full" />
        </div>

        {/* Continuous Infinite Scrolling Loop */}
        <InfiniteMarquee>
          {clients.map((client, idx) => (
            <div
              key={idx}
              className="px-6 py-3 mx-4 bg-white rounded-md shrink-0 flex items-center justify-center transition-all duration-300 hover:scale-105"
            >
              <div className="relative h-12 w-32 flex items-center justify-center">
                <Image
                  src={client.path}
                  alt={`${client.name} Logo`}
                  fill
                  sizes="128px"
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </InfiniteMarquee>

      </div>
    </section>
  );
}

