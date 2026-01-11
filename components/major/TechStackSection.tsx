"use client";

import {
  Code2,
  Database,
  Smartphone,
  Globe,
  Layers,
  Cpu,
  Server,
  Cloud,
  Terminal,
  Zap,
  Wrench,
  Cog,
  PenTool,
  Map,
  Shield,
  Wifi,
  HardHat,
  Truck,
  Home,
} from "lucide-react";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface TechItem {
  icon: string; // Dynamic strings like "globe", "code", etc.
  label: string;
}

interface TechStackSectionProps {
  techs: TechItem[];
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
}

const iconMap: Record<string, React.ElementType> = {
  globe: Globe,
  code: Code2,
  layers: Layers,
  database: Database,
  smartphone: Smartphone,
  cpu: Cpu,
  server: Server,
  cloud: Cloud,
  terminal: Terminal,
  zap: Zap,
  wrench: Wrench,
  cog: Cog,
  pen: PenTool,
  map: Map,
  shield: Shield,
  wifi: Wifi,
  hardhat: HardHat,
  truck: Truck,
  home: Home,
};

const themeMap: Record<string, string> = {
  sky: "text-sky-600", // RPL
  purple: "text-purple-600", // TKJ
  red: "text-red-600", // DPIB
  silver: "text-gray-600", // SIJA
  graphite: "text-slate-800", // OTO
  darkblue: "text-blue-900", // TKR
  yellow: "text-yellow-600", // TPM
  green: "text-green-600", // TAB
  orange: "text-orange-600", // TITL
  teal: "text-teal-600", // KJIJ
};

export function TechStackSection({
  techs,
  theme = "sky",
  title = "Teknologi yang Kami Pelajari",
}: TechStackSectionProps) {
  const containerRef = useRef(null);
  const accentColor = themeMap[theme] || themeMap.sky;

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".tech-item", {
        scale: 0.5,
        opacity: 0,
        duration: 0.5,
        stagger: 0.05,
        ease: "back.out(1.5)",
        scrollTrigger: {
          trigger: ".tech-section",
          start: "top 85%",
        },
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="tech-section py-24 bg-white border-b border-slate-100"
    >
      <div className="container mx-auto px-6 md:px-16 text-center">
        <p className="text-sm font-semibold text-slate-500 uppercase tracking-widest mb-12">
          {title}
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
          {techs.map((tech, index) => {
            const IconComponent = iconMap[tech.icon] || Code2;
            return (
              <div
                key={index}
                className="tech-item flex items-center gap-2 text-2xl font-bold text-slate-800"
              >
                <IconComponent className={`w-8 h-8 ${accentColor}`} />{" "}
                {tech.label}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
