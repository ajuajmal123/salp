import React from "react";
import Image from "next/image";
import logoImg from "../../../public/SRINIVASAN-LOGO-02.png";

interface LogoProps {
  className?: string;
  light?: boolean;
}

export default function Logo({ className = "", light = false }: LogoProps) {
  return (
    <div className={`flex items-center select-none ${className}`}>
      <div className="relative w-[180px] md:w-[220px] transition-all duration-500">
        <Image
          src={logoImg}
          alt="Srinivasan Associates Logo"
          width={593}
          height={213}
          priority
          className={`w-full h-auto object-contain transition-all duration-300 hover:scale-[1.03] ${
            light ? "filter-logo-light" : ""
          }`}
        />
      </div>
    </div>
  );
}

