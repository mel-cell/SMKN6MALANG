"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Badge } from "@/components/ui/badge";

gsap.registerPlugin(ScrollTrigger);

interface IntroSectionProps {
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
  programName: string;
  aboutText: React.ReactNode;
}

// Map for theme colors
const themeMap: Record<
  string,
  {
    badgeBg: string;
    badgeText: string;
    badgeBorder: string;
    titleAccent: string;
  }
> = {
  sky: {
    badgeBg: "bg-sky-50",
    badgeText: "text-sky-600",
    badgeBorder: "border-sky-100",
    titleAccent: "text-sky-600",
  }, // RPL
  purple: {
    badgeBg: "bg-purple-50",
    badgeText: "text-purple-600",
    badgeBorder: "border-purple-100",
    titleAccent: "text-purple-600",
  }, // TKJ
  red: {
    badgeBg: "bg-red-50",
    badgeText: "text-red-600",
    badgeBorder: "border-red-100",
    titleAccent: "text-red-600",
  }, // DPIB
  silver: {
    badgeBg: "bg-gray-100",
    badgeText: "text-gray-600",
    badgeBorder: "border-gray-200",
    titleAccent: "text-gray-600",
  }, // SIJA
  graphite: {
    badgeBg: "bg-slate-100",
    badgeText: "text-slate-800",
    badgeBorder: "border-slate-300",
    titleAccent: "text-slate-800",
  }, // OTO
  darkblue: {
    badgeBg: "bg-blue-100",
    badgeText: "text-blue-900",
    badgeBorder: "border-blue-200",
    titleAccent: "text-blue-900",
  }, // TKR
  yellow: {
    badgeBg: "bg-yellow-50",
    badgeText: "text-yellow-600",
    badgeBorder: "border-yellow-100",
    titleAccent: "text-yellow-600",
  }, // TPM
  green: {
    badgeBg: "bg-green-50",
    badgeText: "text-green-600",
    badgeBorder: "border-green-100",
    titleAccent: "text-green-600",
  }, // TAB
  orange: {
    badgeBg: "bg-orange-50",
    badgeText: "text-orange-600",
    badgeBorder: "border-orange-100",
    titleAccent: "text-orange-600",
  }, // TITL
  teal: {
    badgeBg: "bg-teal-50",
    badgeText: "text-teal-600",
    badgeBorder: "border-teal-100",
    titleAccent: "text-teal-600",
  }, // KJIJ
};

export function IntroSection({
  theme = "sky",
  programName,
  aboutText,
}: IntroSectionProps) {
  const containerRef = useRef(null);
  const colors = themeMap[theme] || themeMap.sky;

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".intro-section",
          start: "top 80%",
        },
      });

      tl.from(".intro-badge", {
        opacity: 0,
        x: -20,
        duration: 0.8,
        ease: "power3.out",
      })
        .from(
          ".intro-title",
          {
            opacity: 0,
            y: 20,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.6"
        )
        .from(
          ".intro-text",
          {
            opacity: 0,
            x: 20,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.6"
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="intro-section py-24 bg-slate-50 border-b border-slate-100"
    >
      <div className="container mx-auto px-6 md:px-16">
        {/* Definition: Split Layout for better readability */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-10">
          <div>
            <Badge
              className={`intro-badge ${colors.badgeBg} ${colors.badgeText} mb-6 ${colors.badgeBorder} px-4 py-1 rounded-sm text-xs tracking-widest`}
            >
              TENTANG PROGRAM
            </Badge>
            <h2 className="intro-title text-3xl md:text-5xl font-bold text-slate-900 leading-tight">
              Apa itu <br />
              <span className={colors.titleAccent}>{programName}?</span>
            </h2>
          </div>
          <div className="intro-text space-y-6 pt-2">{aboutText}</div>
        </div>
      </div>
    </section>
  );
}
