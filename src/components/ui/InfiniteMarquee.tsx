import React from "react";

interface InfiniteMarqueeProps {
  children: React.ReactNode;
  speedClass?: string; // e.g. "animate-marquee-infinite"
}

export default function InfiniteMarquee({
  children,
  speedClass = "animate-marquee-infinite",
}: InfiniteMarqueeProps) {
  return (
    <div className="w-full overflow-hidden relative py-3">
      {/* Absolute fades on edges for premium gradient blending */}
      <div className="hidden md:block absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none dark:from-navy-950" />
      <div className="hidden md:block absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none dark:from-navy-950" />

      {/* Marquee Wrapper */}
      <div className="flex w-full">
        <div className={`${speedClass} flex gap-12 items-center`}>
          {/* Primary items */}
          <div className="flex gap-12 items-center shrink-0">{children}</div>
          {/* Secondary duplicate items for seamless loop */}
          <div className="flex gap-12 items-center shrink-0" aria-hidden="true">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
