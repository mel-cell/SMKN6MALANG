"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface RoadmapStep {
  id: string | number;
  level: string; // e.g. "Kelas X" / "Level 1"
  title: string; // e.g. "Fundamentals"
  description: string;
  items: string[];
}

interface RoadmapSectionProps {
  steps: RoadmapStep[];
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
  title?: string;
  description?: string;
}

const themeMap: Record<
  string,
  {
    badgeBg: string;
    badgeText: string;
    title: string;
    bullet: string;
    border: string;
  }
> = {
  sky: {
    badgeBg: "bg-sky-100",
    badgeText: "text-sky-600",
    title: "text-sky-900",
    bullet: "bg-sky-600",
    border: "border-sky-100",
  }, // RPL
  purple: {
    badgeBg: "bg-purple-100",
    badgeText: "text-purple-600",
    title: "text-purple-900",
    bullet: "bg-purple-600",
    border: "border-purple-100",
  }, // TKJ
  red: {
    badgeBg: "bg-red-100",
    badgeText: "text-red-600",
    title: "text-red-900",
    bullet: "bg-red-600",
    border: "border-red-100",
  }, // DPIB
  silver: {
    badgeBg: "bg-gray-100",
    badgeText: "text-gray-600",
    title: "text-gray-900",
    bullet: "bg-gray-600",
    border: "border-gray-100",
  }, // SIJA
  graphite: {
    badgeBg: "bg-slate-100",
    badgeText: "text-slate-800",
    title: "text-slate-900",
    bullet: "bg-slate-800",
    border: "border-slate-200",
  }, // OTO
  darkblue: {
    badgeBg: "bg-blue-100",
    badgeText: "text-blue-900",
    title: "text-blue-900",
    bullet: "bg-blue-900",
    border: "border-blue-100",
  }, // TKR
  yellow: {
    badgeBg: "bg-yellow-100",
    badgeText: "text-yellow-600",
    title: "text-yellow-900",
    bullet: "bg-yellow-600",
    border: "border-yellow-100",
  }, // TPM
  green: {
    badgeBg: "bg-green-100",
    badgeText: "text-green-600",
    title: "text-green-900",
    bullet: "bg-green-600",
    border: "border-green-100",
  }, // TAB
  orange: {
    badgeBg: "bg-orange-100",
    badgeText: "text-orange-600",
    title: "text-orange-900",
    bullet: "bg-orange-600",
    border: "border-orange-100",
  }, // TITL
  teal: {
    badgeBg: "bg-teal-100",
    badgeText: "text-teal-600",
    title: "text-teal-900",
    bullet: "bg-teal-600",
    border: "border-teal-100",
  }, // KJIJ
};

export function RoadmapSection({
  steps,
  theme = "sky",
  title = "Peta Jalan Pembelajaran",
  description = "Kurikulum yang disusun bertahap untuk memastikan siswa menguasai dasar hingga mahir sebelum terjun ke industri.",
}: RoadmapSectionProps) {
  const containerRef = useRef(null);
  const colors = themeMap[theme] || themeMap.sky;

  const gridCols =
    steps.length === 4
      ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
      : "grid-cols-1 md:grid-cols-3";

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".roadmap-step", {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "back.out(1.2)",
        scrollTrigger: {
          trigger: ".roadmap-section",
          start: "top 75%",
        },
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="roadmap-section py-20 bg-slate-50">
      <div className="container mx-auto px-6 md:px-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">{title}</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">{description}</p>
        </div>

        <div className={`grid ${gridCols} gap-8`}>
          {steps.map((step, index) => (
            <div
              key={index}
              className={`roadmap-step bg-white p-8 rounded-2xl border ${colors.border} shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group`}
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <span
                  className={`text-9xl font-bold ${colors.title} leading-none`}
                >
                  {index + 1}
                </span>
              </div>
              <div className="relative z-10">
                <div
                  className={`w-12 h-12 ${colors.badgeBg} rounded-xl flex items-center justify-center mb-6 ${colors.badgeText} font-bold`}
                >
                  {step.level.replace("Kelas ", "").replace("Level ", "")}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                  {step.description}
                </p>
                <ul className="space-y-3">
                  {step.items.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-sm text-slate-700 font-medium"
                    >
                      <div
                        className={`w-1.5 h-1.5 rounded-sm ${colors.bullet}`}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
