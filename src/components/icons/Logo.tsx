import React from "react";
import Image from "next/image";
import logoImg from "../../../public/Srinivasan-Logo-Final.png";

interface LogoProps {
  className?: string;
  light?: boolean;
  size?: "sm" | "md" | "lg";
}

export default function Logo({
  className = "",
  light = false,
  size = "md",
}: LogoProps) {
  const sizeClasses = {
    sm: "w-[130px] md:w-[150px]",
    md: "w-[180px] md:w-[220px]",
    lg: "w-[220px] md:w-[280px]",
  };

  return (
    <div className={`flex items-center select-none ${className}`}>
      <div className={`relative ${sizeClasses[size]} transition-all duration-500`}>
        <Image
          src={logoImg}
          alt="Srinivasan Associates Logo"
          width={593}
          height={213}
          priority
          className={`w-full h-auto object-contain transition-all duration-300 hover:scale-[1.03] ${light ? "filter-logo-light" : ""
            }`}
        />
      </div>
    </div>
  );
}

