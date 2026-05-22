"use client";

import React from "react";
import InfiniteMarquee from "../ui/InfiniteMarquee";

// 1. Raj Park Hotel Group Logo (Red circle monogram + serif naming)
const RajParkLogo = () => (
  <div className="flex items-center justify-center w-[160px] h-16 bg-white select-none">
    <svg viewBox="0 0 120 45" className="h-12 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="60" cy="11" r="9" fill="#991b1b" />
      <text x="60" y="14" fill="#facc15" fontSize="8" fontWeight="bold" fontFamily="serif" textAnchor="middle">RP</text>
      <text x="60" y="30" fill="#1e293b" fontSize="9.5" fontWeight="900" letterSpacing="0.04em" textAnchor="middle" fontFamily="sans-serif">RAJ PARK</text>
      <text x="60" y="39" fill="#64748b" fontSize="5.5" fontWeight="bold" letterSpacing="0.08em" textAnchor="middle" fontFamily="sans-serif">HOTEL GROUP</text>
    </svg>
  </div>
);

// 2. Nivasan Homes Logo (Green interlocking N brandmark + green layout)
const NivasanHomesLogo = () => (
  <div className="flex items-center justify-center w-[180px] h-16 bg-white select-none">
    <div className="flex items-center gap-2">
      <svg viewBox="0 0 32 32" className="h-8 w-8 shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="32" height="32" rx="3" fill="#15803d" />
        <path d="M7 24V8H11L21 20V8H25V24H21L11 12V24H7Z" fill="white" />
      </svg>
      <div className="flex flex-col text-left">
        <span className="text-sm font-black tracking-wider text-[#15803d] leading-none uppercase" style={{ color: "#15803d" }}>NIVASAN</span>
        <span className="text-[10px] font-bold tracking-[0.2em] text-[#15803d] leading-none mt-0.5 uppercase" style={{ color: "#15803d" }}>HOMES</span>
      </div>
    </div>
  </div>
);

// 3. S.M. Hospital & Surgicare Logo (Medical caduceus staff emblem in blue crescent)
const SMHospitalLogo = () => (
  <div className="flex items-center justify-center w-[190px] h-16 bg-white select-none">
    <div className="flex items-center gap-2">
      <svg viewBox="0 0 40 40" className="h-10 w-10 shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="20" cy="20" rx="17" ry="7" stroke="#1d4ed8" strokeWidth="1.5" transform="rotate(-15 20 20)" fill="none" />
        <path d="M20 7V33M17 12C15 14 15 18 20 20C25 22 25 26 23 28M23 12C25 14 25 18 20 20C15 22 15 26 17 28" stroke="#1d4ed8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="20" cy="6" r="1.5" fill="#1d4ed8" />
      </svg>
      <div className="flex flex-col text-left">
        <span className="text-xs font-black tracking-wide text-[#1d4ed8] leading-none uppercase" style={{ color: "#1d4ed8" }}>S.M. HOSPITAL</span>
        <span className="text-[8px] font-bold tracking-widest text-slate-500 leading-none mt-1 uppercase" style={{ color: "#64748b" }}>& SURGICARE</span>
      </div>
    </div>
  </div>
);

// 4. Akshaya Logo (Typographic with orange & yellow accents + tagline)
const AkshayaLogo = () => (
  <div className="flex items-center justify-center w-[160px] h-16 bg-white select-none">
    <svg viewBox="0 0 110 32" className="h-9 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
      <text x="5" y="19" fill="#1e293b" fontSize="16" fontWeight="900" fontFamily="sans-serif">a</text>
      <text x="15" y="19" fill="#ea580c" fontSize="16" fontWeight="900" fontFamily="sans-serif">k</text>
      <text x="24" y="19" fill="#1e293b" fontSize="16" fontWeight="900" fontFamily="sans-serif">sh</text>
      <text x="43" y="19" fill="#eab308" fontSize="16" fontWeight="900" fontFamily="sans-serif">a</text>
      <text x="53" y="19" fill="#1e293b" fontSize="16" fontWeight="900" fontFamily="sans-serif">ya</text>
      <text x="5" y="27" fill="#475569" fontSize="6" fontWeight="bold" letterSpacing="0.04em" fontFamily="sans-serif">uncompromise.</text>
    </svg>
  </div>
);

// 5. PSG Logo (Traditional blue diamond frame + bold white name)
const PSGLogo = () => (
  <div className="flex items-center justify-center w-[140px] h-16 bg-white select-none">
    <svg viewBox="0 0 80 40" className="h-10 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M40 2 L78 20 L40 38 L2 20 Z" fill="#1e3a8a" stroke="#1d4ed8" strokeWidth="1.5" />
      <path d="M40 5 L73 20 L40 35 L7 20 Z" stroke="white" strokeWidth="0.75" />
      <text x="40" y="25" fill="white" fontSize="11" fontWeight="900" letterSpacing="0.04em" textAnchor="middle" fontFamily="sans-serif">PSG</text>
    </svg>
  </div>
);

// 6. ITC Limited Logo (Triangular geometry with serif title)
const ITCLogo = () => (
  <div className="flex items-center justify-center w-[140px] h-16 bg-white select-none">
    <svg viewBox="0 0 60 45" className="h-11 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M30 2 L52 30 H8 Z" fill="#0f172a" />
      <path d="M30 6 L46 27 H14 Z" fill="#1d4ed8" />
      <text x="30" y="22" fill="white" fontSize="9" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">ITC</text>
      <text x="30" y="38" fill="#1e293b" fontSize="6.5" fontWeight="bold" letterSpacing="0.04em" textAnchor="middle" fontFamily="serif">ITC Limited</text>
    </svg>
  </div>
);

// 7. The Ramco Cements Limited Logo (Gopuram tower seal + blue rectangle)
const RamcoLogo = () => (
  <div className="flex items-center justify-center w-[160px] h-16 bg-white select-none">
    <svg viewBox="0 0 80 50" className="h-14 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="40" cy="17" r="13" stroke="#1d4ed8" strokeWidth="1" fill="none" />
      <circle cx="40" cy="17" r="11" stroke="#1e293b" strokeWidth="0.5" fill="none" />
      <path d="M36 24 L38 11 H42 L44 24 Z M37 20 H43 M38 16 H42 M39 12 H41" stroke="#1d4ed8" strokeWidth="0.75" strokeLinecap="round" />
      <path d="M35 24 H45" stroke="#1d4ed8" strokeWidth="0.75" />
      <text x="40" y="8" fill="#1e293b" fontSize="3" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">THE RAMCO CEMENTS</text>
      <rect x="20" y="32" width="40" height="11" rx="0.5" fill="#1d4ed8" />
      <text x="40" y="40" fill="white" fontSize="7.5" fontWeight="900" letterSpacing="0.06em" textAnchor="middle" fontFamily="sans-serif">RAMCO</text>
    </svg>
  </div>
);

// 8. LMW Logo (Sculpture silhouette + bold blue brand text)
const LMWLogo = () => (
  <div className="flex items-center justify-center w-[150px] h-16 bg-white select-none">
    <div className="flex items-center gap-2">
      <svg viewBox="0 0 30 40" className="h-10 w-auto shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 10 C17 10 18 8 18 6 C18 4 17 2 15 2 C13 2 12 4 12 6 C12 8 13 10 15 10 Z" fill="#1d4ed8" />
        <path d="M6 14 C10 14 11 11 15 11 C19 11 20 14 24 14 L20 34 H10 L6 14 Z" fill="#1d4ed8" />
        <path d="M15 11 V34" stroke="white" strokeWidth="1.25" />
        <path d="M8 12 Q15 6 22 12" stroke="#1d4ed8" strokeWidth="1.25" fill="none" />
      </svg>
      <span className="text-xl font-black tracking-tighter text-[#1d4ed8] italic" style={{ color: "#1d4ed8" }}>
        LMW<span className="text-xs font-bold not-italic align-super">®</span>
      </span>
    </div>
  </div>
);

// 9. Stanes Logo (Red capsule + stylized cursive name)
const StanesLogo = () => (
  <div className="flex items-center justify-center w-[150px] h-16 bg-white select-none">
    <svg viewBox="0 0 90 40" className="h-10 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="4" width="82" height="32" rx="16" stroke="#dc2626" strokeWidth="2" fill="none" />
      <text x="45" y="24" fill="#dc2626" fontSize="15" fontWeight="bold" fontStyle="italic" fontFamily="Georgia, serif" textAnchor="middle">Stanes</text>
    </svg>
  </div>
);

// 10. Lancor Logo (Red crescent curve + tagline)
const LancorLogo = () => (
  <div className="flex items-center justify-center w-[170px] h-16 bg-white select-none">
    <svg viewBox="0 0 100 40" className="h-11 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M25 11 C45 2 75 7 85 13 C70 7 40 5 20 15 Z" fill="#dc2626" />
      <text x="50" y="24" fill="#0f172a" fontSize="12.5" fontWeight="900" letterSpacing="0.04em" textAnchor="middle" fontFamily="sans-serif">LANCOR</text>
      <text x="78" y="16" fill="#0f172a" fontSize="4.5" fontWeight="bold" fontFamily="sans-serif">®</text>
      <text x="50" y="33" fill="#1d4ed8" fontSize="4" fontWeight="bold" letterSpacing="0.06em" textAnchor="middle" fontFamily="sans-serif">CREATING ENDURING VALUE</text>
    </svg>
  </div>
);

const clientLogos = [
  <RajParkLogo key="rajpark" />,
  <NivasanHomesLogo key="nivasan" />,
  <SMHospitalLogo key="smhospital" />,
  <AkshayaLogo key="akshaya" />,
  <PSGLogo key="psg" />,
  <ITCLogo key="itc" />,
  <RamcoLogo key="ramco" />,
  <LMWLogo key="lmw" />,
  <StanesLogo key="stanes" />,
  <LancorLogo key="lancor" />,
];

export default function ClientMarquee() {
  return (
    <section className="relative py-20 bg-white overflow-hidden border-b border-[#eae7e3]">
      {/* Structural layout to keep design simple, neat, and highly readable */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Modernist Centered Section Header */}
        <div className="text-center mb-16 flex flex-col items-center gap-3">
          <h2 className="font-sans text-3xl sm:text-4xl tracking-tight uppercase" style={{ color: "#1c1a17" }}>
            Our Clients
          </h2>
          {/* Custom Teal/Cyan Underline Accent matching user old web design layout */}
          <div className="w-16 h-[3px] bg-sapl-blue rounded-full" />
        </div>

        {/* Continuous Infinite Scrolling Loop */}
        <InfiniteMarquee>
          {clientLogos.map((logo, idx) => (
            <div
              key={idx}
              className="px-4 py-2 mx-2 bg-white rounded-md shrink-0 flex items-center justify-center transition-all duration-300 hover:scale-105"
            >
              {logo}
            </div>
          ))}
        </InfiniteMarquee>

      </div>
    </section>
  );
}

