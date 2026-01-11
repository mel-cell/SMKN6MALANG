"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Map for theme colors
const themeMap: Record<
  string,
  { bg: string; divide: string; text: string; subtext: string }
> = {
  sky: {
    bg: "bg-sky-500",
    divide: "divide-sky-400/50",
    text: "text-white",
    subtext: "text-sky-100",
  }, // RPL
  purple: {
    bg: "bg-purple-600",
    divide: "divide-purple-500/50",
    text: "text-white",
    subtext: "text-purple-100",
  }, // TKJ
  red: {
    bg: "bg-red-600",
    divide: "divide-red-500/50",
    text: "text-white",
    subtext: "text-red-100",
  }, // DPIB
  silver: {
    bg: "bg-gray-400",
    divide: "divide-gray-300/50",
    text: "text-slate-900",
    subtext: "text-slate-700",
  }, // SIJA
  graphite: {
    bg: "bg-slate-800",
    divide: "divide-slate-700/50",
    text: "text-white",
    subtext: "text-slate-300",
  }, // OTO
  darkblue: {
    bg: "bg-blue-900",
    divide: "divide-blue-800/50",
    text: "text-white",
    subtext: "text-blue-200",
  }, // TKR
  yellow: {
    bg: "bg-yellow-500",
    divide: "divide-yellow-400/50",
    text: "text-white",
    subtext: "text-yellow-50",
  }, // TPM
  green: {
    bg: "bg-green-600",
    divide: "divide-green-500/50",
    text: "text-white",
    subtext: "text-green-100",
  }, // TAB
  orange: {
    bg: "bg-orange-500",
    divide: "divide-orange-400/50",
    text: "text-white",
    subtext: "text-orange-50",
  }, // TITL
  teal: {
    bg: "bg-teal-600",
    divide: "divide-teal-500/50",
    text: "text-white",
    subtext: "text-teal-100",
  }, // KJIJ
};

interface StatItem {
  value: string;
  label: string;
}

interface StatisticsSectionProps {
  stats: StatItem[];
  theme?:
    | "sky"
    | "purple"
    | "red"
    | "silver"
    | "graphite"
    | "darkblue"
    | "yellow"
    | "green"
    | "orange"
    | "teal";
}

export function StatisticsSection({
  stats,
  theme = "sky",
}: StatisticsSectionProps) {
  const containerRef = useRef(null);
  const colors = themeMap[theme] || themeMap.blue;

  const gridCols = stats.length === 4 ? "md:grid-cols-4" : "md:grid-cols-3";

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".stat-item",
        { y: 50, opacity: 0, scale: 0.8 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "back.out(1.7)",
          stagger: 0.2,
          scrollTrigger: {
            trigger: ".stats-section",
            start: "top 85%",
            once: true,
          },
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className={`stats-section ${colors.bg} py-16`}>
      <div className="container mx-auto px-6 md:px-16">
        <div
          className={`grid grid-cols-1 ${gridCols} gap-8 text-center divide-y md:divide-y-0 md:divide-x ${colors.divide}`}
        >
          {stats.map((stat, index) => (
            <div key={index} className="stat-item p-4">
              <div
                className={`text-4xl lg:text-5xl font-bold ${colors.text} mb-2`}
              >
                {stat.value}
              </div>
              <div
                className={`${colors.subtext} font-medium tracking-wide text-sm uppercase`}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
