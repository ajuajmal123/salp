import React from "react";

interface LogoProps {
  className?: string;
  light?: boolean;
}

export default function Logo({ className = "", light = false }: LogoProps) {
  return (
    <div className={`flex items-center gap-4 select-none ${className}`}>
      {/* 3D Isometric Logo Icon matching the provided image */}
      <svg
        width="56"
        height="50"
        viewBox="0 0 92 82"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-14 h-12 transition-transform duration-500 hover:scale-105"
      >
        {/* Cutout ceiling (Dark Shadow) */}
        <path
          d="M28 58 L46 48 L38 53 L20 63 Z"
          fill={light ? "#3d3a33" : "#4F4C42"}
          className="transition-colors duration-300"
        />
        {/* Cutout inner left wall (Deep Shadow) */}
        <path
          d="M28 58 L20 63 L20 72 L28 72 Z"
          fill={light ? "#2a2823" : "#3d3a33"}
          className="transition-colors duration-300"
        />
        {/* Cutout inner back wall (Medium Shadow) */}
        <path
          d="M20 63 L38 53 L38 72 L20 72 Z"
          fill={light ? "#4F4C42" : "#6D675E"}
          className="transition-colors duration-300"
        />
        {/* Cutout inner right teal wall (Teal shadow) */}
        <path
          d="M46 48 L38 53 L38 72 L46 72 Z"
          fill={light ? "#1e8995" : "#229fae"}
          className="transition-colors duration-300"
        />
        {/* Left block (Grey face) */}
        <path
          d="M46 12 L14 30 L14 72 L28 72 L28 58 L46 48 Z"
          fill={light ? "#eae7e3" : "#6D675E"}
          className="transition-colors duration-300"
        />
        {/* Right block (Teal face) */}
        <path
          d="M46 12 L78 22 L78 72 L46 72 Z"
          fill="#2AB5C4"
        />
      </svg>

      {/* Brand Text aligned exactly with the new logo style */}
      <div className="flex flex-col leading-none">
        <span
          className={`font-sans font-black tracking-wide text-xl leading-tight uppercase ${
            light ? "text-white" : "text-[#4F4C42]"
          }`}
        >
          SRINIVASAN
        </span>
        <span
          className={`font-sans font-bold tracking-[0.23em] text-[12px] leading-tight uppercase mt-0.5 ${
            light ? "text-slate-350" : "text-[#6D675E]"
          }`}
        >
          ASSOCIATES
        </span>
        <span
          className={`font-sans font-bold tracking-[0.13em] text-[8px] leading-normal uppercase mt-1 ${
            light ? "text-[#2AB5C4]" : "text-[#2AB5C4]"
          }`}
        >
          ENGINEERS & BUILDERS
        </span>
      </div>
    </div>
  );
}

