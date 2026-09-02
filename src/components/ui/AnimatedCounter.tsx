"use client";

import React, { useEffect, useRef } from "react";
import { useInView, useMotionValue, useTransform, animate } from "framer-motion";

interface AnimatedCounterProps {
  value: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

export default function AnimatedCounter({
  value,
  duration = 2,
  suffix = "",
  prefix = "",
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const roundedValue = useTransform(motionValue, (latest) => Math.round(latest));
  const isInView = useInView(ref, { once: true, margin: "0px" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(motionValue, value, {
        duration: duration,
        ease: "easeOut",
      });
      return () => controls.stop();
    }
  }, [isInView, motionValue, value, duration]);

  useEffect(() => {
    return roundedValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = latest.toLocaleString("en-US");
      }
    });
  }, [roundedValue]);

  return (
    <span className="tabular-nums font-bold">
      {prefix}
      <span ref={ref}>0</span>
      {suffix}
    </span>
  );
}
