"use client";

import {
  Terminal,
  Cpu,
  Server,
  Shield,
  Globe,
  Monitor,
  PenTool,
} from "lucide-react";
import Image from "next/image";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface FacilityItem {
  title: string;
  description: string;
  features: string[];
  image: string;
  icon: string; // "terminal", "cpu", etc.
}

interface FacilitiesSectionProps {
  facilities: FacilityItem[];
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

const iconMap: Record<string, React.ElementType> = {
  terminal: Terminal,
  cpu: Cpu,
  server: Server,
  shield: Shield,
  globe: Globe,
  monitor: Monitor,
  pen: PenTool,
};

const themeMap: Record<
  string,
  { bg: string; badge: string; text: string; bullet: string; overlay: string }
> = {
  sky: {
    bg: "bg-sky-50",
    badge: "bg-sky-100 text-sky-700",
    text: "text-sky-900",
    bullet: "bg-sky-500",
    overlay: "bg-sky-600",
  }, // RPL
  purple: {
    bg: "bg-purple-50/10",
    badge: "bg-purple-100 text-purple-700",
    text: "text-purple-900",
    bullet: "bg-purple-500",
    overlay: "bg-purple-600",
  }, // TKJ
  red: {
    bg: "bg-red-50/10",
    badge: "bg-red-100 text-red-700",
    text: "text-red-900",
    bullet: "bg-red-500",
    overlay: "bg-red-600",
  }, // DPIB
  silver: {
    bg: "bg-gray-100",
    badge: "bg-gray-200 text-gray-700",
    text: "text-gray-900",
    bullet: "bg-gray-500",
    overlay: "bg-gray-600",
  }, // SIJA
  graphite: {
    bg: "bg-slate-50",
    badge: "bg-slate-200 text-slate-800",
    text: "text-slate-900",
    bullet: "bg-slate-700",
    overlay: "bg-slate-800",
  }, // OTO
  darkblue: {
    bg: "bg-blue-50/30",
    badge: "bg-blue-100 text-blue-900",
    text: "text-blue-900",
    bullet: "bg-blue-800",
    overlay: "bg-blue-900",
  }, // TKR
  yellow: {
    bg: "bg-yellow-50/10",
    badge: "bg-yellow-100 text-yellow-700",
    text: "text-yellow-900",
    bullet: "bg-yellow-500",
    overlay: "bg-yellow-600",
  }, // TPM
  green: {
    bg: "bg-green-50/10",
    badge: "bg-green-100 text-green-700",
    text: "text-green-900",
    bullet: "bg-green-500",
    overlay: "bg-green-600",
  }, // TAB
  orange: {
    bg: "bg-orange-50/10",
    badge: "bg-orange-100 text-orange-700",
    text: "text-orange-900",
    bullet: "bg-orange-500",
    overlay: "bg-orange-600",
  }, // TITL
  teal: {
    bg: "bg-teal-50/10",
    badge: "bg-teal-100 text-teal-700",
    text: "text-teal-900",
    bullet: "bg-teal-500",
    overlay: "bg-teal-600",
  }, // KJIJ
};

export function FacilitiesSection({
  facilities,
  theme = "sky",
}: FacilitiesSectionProps) {
  const containerRef = useRef(null);
  const colors = themeMap[theme] || themeMap.sky;

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Loop through each facility item to create a scroll trigger for it
      const items = gsap.utils.toArray(".facility-item") as HTMLElement[];
      items.forEach((item) => {
        gsap.from(item, {
          y: 80,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
          },
        });
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className={`py-24 ${colors.bg}`}>
      <div className="container mx-auto px-6 md:px-16 space-y-24">
        {facilities.map((facility, index) => {
          const Icon = iconMap[facility.icon] || Terminal;
          const isEven = index % 2 === 0;

          return (
            <div
              key={index}
              className="facility-item grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center"
            >
              {/* Text Content */}
              <div className={isEven ? "order-2 lg:order-1" : "order-2"}>
                <div
                  className={`inline-block p-3 rounded-xl ${colors.badge} w-fit mb-6`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                  {facility.title}
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                  {facility.description}
                </p>
                <ul className="space-y-4">
                  {facility.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-3 text-slate-700 font-medium"
                    >
                      <div className={`w-2 h-2 rounded-sm ${colors.bullet}`} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Image */}
              <div
                className={`relative h-[400px] lg:h-[500px] ${
                  isEven ? "order-1 lg:order-2" : "order-1"
                }`}
              >
                <div
                  className={`absolute inset-0 ${colors.overlay} rounded-3xl ${
                    isEven ? "rotate-3" : "-rotate-3"
                  } opacity-10`}
                ></div>
                <Image
                  src={facility.image}
                  alt={facility.title}
                  fill
                  className="object-cover rounded-3xl shadow-xl"
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
