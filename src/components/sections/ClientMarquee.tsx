"use client";

import React from "react";
import Image from "next/image";
import InfiniteMarquee from "../ui/InfiniteMarquee";

import logosData from "@/app/strength/logosData.json";

// Map over all logos to create a dynamic marquee list
const clients = logosData.map((filename: string) => ({
  name: filename.replace(/\.(jpg|jpeg|png|avif|webp|gif)$/, '').replace(/[_-]/g, ' '),
  path: `/Client Logos/${encodeURIComponent(filename)}`
}));

export default function ClientMarquee({ hideTitle = false }: { hideTitle?: boolean }) {
  return (
    <section className={`relative bg-white overflow-hidden ${hideTitle ? 'py-4' : 'py-8 md:py-8 border-b border-[#eae7e3]'}`}>
      {/* Structural layout to keep design simple, neat, and highly readable */}
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">

        {/* Modernist Centered Section Header */}
        {!hideTitle && (
          <div className="text-center mb-4 md:mb-8 flex flex-col items-center gap-3">
            <h2 className="font-sans text-3xl sm:text-4xl tracking-tight uppercase" style={{ color: "#1c1a17" }}>
              Our Clients
            </h2>
            {/* Custom Teal/Cyan Underline Accent matching corporate identity */}
            <div className="w-16 h-[3px] bg-sapl-blue rounded-full" />
          </div>
        )}

        {/* Continuous Infinite Scrolling Loop */}
        <InfiniteMarquee>
          {clients.map((client, idx) => (
            <div
              key={idx}
              className="px-6 py-2 mx-3 bg-white rounded-md shrink-0 flex items-center justify-center transition-all duration-300 hover:scale-105"
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

