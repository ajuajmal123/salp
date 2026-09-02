"use client";

import React, { useRef, useState, useLayoutEffect } from "react";
import Image from "next/image";
import { legacyMilestones } from "./legacyData";
import { gsap } from "gsap";
import { ChevronUp, ChevronDown } from "lucide-react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function LegacySection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const scrollWrapperRef = useRef<HTMLDivElement>(null);
    const timelineRef = useRef<HTMLDivElement>(null);
    const isFirstRender = useRef(true);

    const GOLD = "#D4AF37";
    const NAVY = "#1B3A5A";
    const ITEM_HEIGHT = 380;

    // React state controls the exact timeline frame for desktop
    const [activeIndex, setActiveIndex] = useState(0);

    // Initial mobile setup
    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            ScrollTrigger.matchMedia({
                "(max-width: 1023px)": function () {
                    gsap.utils.toArray<HTMLElement>(".mobile-legacy-item").forEach((el) => {
                        gsap.fromTo(el,
                            { opacity: 0, y: 30 },
                            {
                                opacity: 1, y: 0, duration: 0.8, ease: "power2.out",
                                scrollTrigger: {
                                    trigger: el,
                                    start: "top 85%",
                                }
                            }
                        );
                    });
                }
            });
        }, scrollWrapperRef);

        return () => ctx.revert();
    }, []);

    // Desktop slider animation linked natively to `activeIndex`
    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const immediate = isFirstRender.current;

            // Animate items natively within their stationary wrappers to simulate 3D vanishing perspective
            legacyMilestones.forEach((_, i) => {
                const rel = i - activeIndex;
                let y = 0, scale = 1, opacity = 1, zIndex = 50;

                // Optical Perspective Mapping Reversed (Camera travels forwards)
                if (rel === 0) { // ACTIVE FOREGROUND
                    y = 0; scale = 1; opacity = 1; zIndex = 50;
                } else if (rel > 0) { // FUTURE (waiting ahead at the vanishing point)
                    const abs = Math.abs(rel);
                    // Compress scale heavily towards the horizon
                    scale = Math.pow(0.72, abs);
                    // Fade into the distance fog
                    opacity = Math.pow(0.4, abs);
                    // Move upwards logarithmically towards vanishing point
                    if (abs === 1) y = -140;
                    else if (abs === 2) y = -230;
                    else if (abs === 3) y = -290;
                    else {
                        y = -320 - (abs * 10);
                        opacity = 0;
                    }
                    zIndex = 50 - abs;
                } else { // PAST (dropped behind the camera abruptly)
                    y = -120 * rel; // Pushes visually downwards offscreen (double negative)
                    scale = 1 + (0.15 * Math.abs(rel)); // Enlarges significantly before disappearing
                    opacity = 0; // Instantly hides
                    zIndex = 10;
                }

                gsap.to(`.legacy-wrapper-${i}`, {
                    y,
                    scale,
                    opacity: opacity,
                    display: opacity > 0 ? "flex" : "none",
                    zIndex,
                    duration: immediate ? 0 : 0.8,
                    ease: "power3.inOut"
                });

                // Toggling the center nodes and branches dynamically
                const isCentered = rel === 0;

                gsap.to(`.legacy-branch-${i}`, {
                    opacity: isCentered ? 1 : (rel > 0 && Math.abs(rel) <= 3 ? 0.6 : 0),
                    display: isCentered || (rel > 0 && Math.abs(rel) <= 3) ? "block" : "none",
                    duration: immediate ? 0 : 0.8,
                    ease: "power3.inOut"
                });

                gsap.to(`.legacy-node-${i}`, {
                    backgroundColor: isCentered ? GOLD : NAVY,
                    borderColor: GOLD,
                    color: isCentered ? NAVY : "#fff",
                    duration: 0.8,
                    ease: "power3.inOut"
                });
            });

            if (immediate) isFirstRender.current = false;

        }, containerRef);

        return () => ctx.revert();
    }, [activeIndex]);

    const scrollMilestoneDown = () => {
        setActiveIndex(prev => Math.min(prev + 1, legacyMilestones.length - 1));
    };

    const scrollMilestoneUp = () => {
        setActiveIndex(prev => Math.max(prev - 1, 0));
    };

    return (
        <div ref={scrollWrapperRef} className="bg-[#f7f6f4] relative z-0">
            {/* ----------------- UNIVERSAL 3D COMPONENT ----------------- */}
            <div ref={containerRef} className="h-[480px] lg:h-[610px] w-full relative overflow-hidden bg-[#f7f6f4]">

                {/* Top Gradient Mask */}
                <div className="absolute top-0 left-0 w-full h-[250px] bg-gradient-to-b from-[#f7f6f4] via-[#f7f6f4]/95 to-transparent z-40 pointer-events-none" />

                {/* Top Header Information */}
                <div className="absolute top-[12px] lg:top-10 left-0 w-full text-center z-50 pointer-events-none px-4">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-950 uppercase tracking-tight">Our Rich Legacy</h2>
                    <p className="text-xs sm:text-sm font-semibold text-[#6D675E] mt-1 sm:mt-2 tracking-wider max-w-[280px] sm:max-w-full mx-auto">
                        Take a Walk Through Our Legacy that has Transformed Construction
                    </p>
                </div>

                {/* 3D Horizon Road Base Triangle */}
                <div
                    className="absolute bottom-0 left-0 w-full h-[400px] bg-sapl-blue z-0 pointer-events-none"
                    style={{ clipPath: "polygon(0 100%, 50% 10%, 100% 100%)" }}
                />

                {/* Interactive Navigation Controls */}
                <div
                    className="absolute left-1/2 -translate-x-1/2 w-[80px] z-[60] flex flex-col justify-between items-center top-[75px] lg:top-[100px] h-[405px] lg:h-[520px]"
                >
                    <button
                        onClick={scrollMilestoneUp}
                        className={`p-2 hover:scale-125 transition-transform duration-300 ${activeIndex === 0 ? "opacity-30 cursor-not-allowed" : "opacity-100 cursor-pointer text-[#D4AF37]"}`}
                        aria-label="Scroll Up Timeline"
                        disabled={activeIndex === 0}
                    >
                        <ChevronUp className="w-10 h-10 stroke-[2.5]" />
                    </button>

                    <button
                        onClick={scrollMilestoneDown}
                        className={`mt-auto p-2 hover:scale-125 transition-transform duration-300 ${activeIndex === legacyMilestones.length - 1 ? "opacity-30 cursor-not-allowed" : "opacity-100 cursor-pointer text-navy-950"}`}
                        aria-label="Scroll Down Timeline"
                        disabled={activeIndex === legacyMilestones.length - 1}
                    >
                        <ChevronDown className="w-10 h-10 stroke-[2.5]" />
                    </button>
                </div>

                {/* Scroll Wrapping Perspective Platform */}
                <div className="absolute top-[410px] lg:top-[550px] left-0 w-full h-0 z-10 perspective-track">

                    {/* Main Vertical Timeline Axis Base */}
                    <div
                        className="absolute left-1/2 -translate-x-1/2 w-[2px] bg-[#D4AF37] top-[-400px] bottom-[-200px] h-[700px] opacity-60 z-0 shadow-lg"
                    />

                    {legacyMilestones.map((milestone, i) => {
                        const isLeft = i % 2 === 0;

                        return (
                            <div
                                key={i}
                                className={`legacy-wrapper-${i} absolute w-full flex justify-center items-center`}
                                style={{ top: 0, transformOrigin: "50% 50%" }}
                            >
                                {/* Year Node */}
                                <div className={`legacy-node legacy-node-${i} absolute left-1/2 -translate-x-1/2 w-10 h-10 lg:w-12 lg:h-12 rounded-full border-4 shadow-md z-30 flex items-center justify-center font-extrabold text-[#f7f6f4] transition-colors duration-300`}>
                                    <span className="text-[10px] lg:text-xs">{milestone.year}</span>
                                </div>

                                {/* Horizontal Connecting Branch */}
                                <div
                                    className={`legacy-branch-${i} absolute top-1/2 -translate-y-1/2 h-[3px] bg-[#D4AF37] z-10 
                                    w-[90px] sm:w-[120px] lg:w-[220px] 
                                    ${isLeft ? 'right-1/2 origin-right' : 'left-1/2 origin-left'}`}
                                />

                                {/* The Card Container */}
                                <div
                                    className={`legacy-card-${i} absolute bottom-[10px] lg:bottom-5 z-40 
                                    ${isLeft
                                            ? 'right-[calc(50%+90px)] sm:right-[calc(50%+120px)] lg:right-[calc(50%+220px)] translate-x-1/2'
                                            : 'left-[calc(50%+90px)] sm:left-[calc(50%+120px)] lg:left-[calc(50%+220px)] -translate-x-1/2'}`}
                                >
                                    <div className="w-[140px] sm:w-[220px] lg:w-[280px] xl:w-[350px] shadow-2xl relative flex flex-col group border border-white/5">
                                        <div className="relative w-full h-[75px] sm:h-[120px] lg:h-[155px] xl:h-[195px] bg-slate-200 overflow-hidden border-t-[3px] border-l-[3px] border-r-[3px] border-white/20">
                                            <Image
                                                src={milestone.image}
                                                alt={milestone.title}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div className="bg-[#D4AF37] p-1.5 sm:p-2 lg:p-3 xl:p-4 text-center border-b-[3px] border-x-[3px] border-white/20 min-h-[40px] sm:min-h-[50px] lg:min-h-[60px] flex items-center justify-center">
                                            <h4 className="text-[9px] sm:text-[11px] lg:text-[12px] xl:text-[14px] font-bold text-navy-950 uppercase leading-[1.1] drop-shadow-sm">
                                                {milestone.title}
                                            </h4>
                                        </div>
                                        <div className="absolute top-1 left-1 sm:top-2 sm:left-2 bg-navy-950/90 backdrop-blur-md text-white px-1.5 sm:px-3 py-0.5 sm:py-1 text-[8px] sm:text-[10px] lg:text-xs font-bold uppercase rounded-sm border border-white/10 shadow-lg">
                                            {milestone.area ? milestone.area : "Milestone"}
                                        </div>

                                        {/* Downward pointing triangle securely linking the body title to the floor */}
                                        <div className="absolute -bottom-[8px] sm:-bottom-[12px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[8px] sm:border-l-[12px] border-l-transparent border-t-[8px] sm:border-t-[12px] border-t-[#D4AF37] border-r-[8px] sm:border-r-[12px] border-r-transparent drop-shadow-lg"></div>
                                    </div>
                                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-[10px] h-[10px] sm:w-[14px] sm:h-[14px] bg-navy-950 border-[2.5px] sm:border-[3.5px] border-[#D4AF37] rounded-full z-10 shadow-[0_0_8px_rgba(212,175,55,0.8)]"></div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
