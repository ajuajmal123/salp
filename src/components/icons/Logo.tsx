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
      {/* Container with overflow-hidden and scaled image to crop excessive transparent padding */}
      <div className="relative overflow-hidden h-14 w-52 flex items-center justify-center">
        <Image
          src={logoImg}
          alt="Srinivasan Associates Logo"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 208px"
          className={`object-contain transition-all duration-500 scale-[1.35] hover:scale-[1.40] ${
            light ? "filter-logo-light" : ""
          }`}
        />
      </div>
    </div>
  );
}

