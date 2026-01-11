"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

// Map for theme colors to ensure Tailwind JIT generates them
const themeMap: Record<
  string,
  { bg: string; text: string; light: string; border: string; from: string }
> = {
  sky: {
    bg: "bg-sky-500",
    text: "text-sky-600",
    light: "bg-sky-50/50",
    border: "border-sky-200",
    from: "from-sky-50",
  }, // RPL
  purple: {
    bg: "bg-purple-600",
    text: "text-purple-600",
    light: "bg-purple-50/50",
    border: "border-purple-200",
    from: "from-purple-50",
  }, // TKJ
  red: {
    bg: "bg-red-600",
    text: "text-red-600",
    light: "bg-red-50/50",
    border: "border-red-200",
    from: "from-red-50",
  }, // DPIB
  silver: {
    bg: "bg-gray-400",
    text: "text-gray-600",
    light: "bg-gray-50/50",
    border: "border-gray-200",
    from: "from-gray-50",
  }, // SIJA
  graphite: {
    bg: "bg-slate-800",
    text: "text-slate-800",
    light: "bg-slate-100",
    border: "border-slate-300",
    from: "from-slate-100",
  }, // OTO
  darkblue: {
    bg: "bg-blue-900",
    text: "text-blue-900",
    light: "bg-blue-100",
    border: "border-blue-300",
    from: "from-blue-100",
  }, // TKR
  yellow: {
    bg: "bg-yellow-500",
    text: "text-yellow-600",
    light: "bg-yellow-50/50",
    border: "border-yellow-200",
    from: "from-yellow-50",
  }, // TPM
  green: {
    bg: "bg-green-600",
    text: "text-green-600",
    light: "bg-green-50/50",
    border: "border-green-200",
    from: "from-green-50",
  }, // TAB
  orange: {
    bg: "bg-orange-500",
    text: "text-orange-600",
    light: "bg-orange-50/50",
    border: "border-orange-200",
    from: "from-orange-50",
  }, // TITL
  teal: {
    bg: "bg-teal-600",
    text: "text-teal-600",
    light: "bg-teal-50/50",
    border: "border-teal-200",
    from: "from-teal-50",
  }, // KJIJ
};

interface HeroSectionProps {
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
    | "teal"
    | "none";
  badge?: string;
  title: string;
  highlight: string;
  description: string;
  image: string;
}

export function HeroSection({
  theme = "sky",
  badge = "KOMPETENSI KEAHLIAN UTAMA",
  title,
  highlight,
  description,
  image,
}: HeroSectionProps) {
  const containerRef = useRef(null);
  const colors = themeMap[theme] || themeMap.sky;

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Text Content Animation
      tl.fromTo(
        ".hero-badge",
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
      )
        .fromTo(
          ".hero-title",
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, ease: "expo.out" },
          "-=0.5"
        )
        .fromTo(
          ".hero-desc",
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, ease: "power2.out" },
          "-=0.6"
        )
        .fromTo(
          ".hero-actions",
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "back.out(1.7)" },
          "-=0.6"
        );

      // Mobile Image Animation (if visible) or Desktop Image
      gsap.fromTo(
        ".hero-image-container",
        { scale: 0.95, opacity: 0, x: 20 },
        {
          scale: 1,
          opacity: 1,
          x: 0,
          duration: 1.2,
          ease: "power3.out",
          delay: 0.2,
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef}>
      <section className="bg-slate-50 pt-32 pb-24 text-slate-900 relative overflow-hidden">
        {/* Background Pattern/Glow */}
        <div
          className={`absolute top-0 right-0 w-1/2 h-full blur-[100px] rounded-sm translate-x-1/2 -translate-y-1/2 pointer-events-none ${colors.light.replace(
            "/50",
            ""
          )}`}
        />

        <div className="container mx-auto px-6 md:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="hero-content space-y-6">
            <Badge
              className={`hero-badge ${colors.light} ${colors.text} border-none px-4 py-1 text-sm rounded-sm`}
            >
              {badge}
            </Badge>
            <div className="hero-title">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight text-slate-900">
                {title} <span className={colors.text}>{highlight}</span>
              </h1>
            </div>
            <p className="hero-desc text-slate-600 text-lg md:text-xl max-w-lg leading-relaxed">
              {description}
            </p>
            <div className="hero-actions pt-4 flex gap-4">
              <button
                className={`${colors.bg} text-white font-semibold px-8 py-3 rounded-sm hover:opacity-90 transition-opacity shadow-lg`}
              >
                Daftar Sekarang
              </button>
              <button className="border border-slate-300 text-slate-600 px-8 py-3 rounded-sm hover:bg-slate-100 transition-colors">
                Lihat Kurikulum
              </button>
            </div>
          </div>

          <div className="hero-content hero-image-container relative hidden lg:block">
            <div
              className={`absolute inset-0 bg-linear-to-tr ${colors.from} to-transparent z-10 opacity-60`}
            ></div>
            <Image
              src={image}
              alt={title}
              width={800}
              height={600}
              className="rounded-lg shadow-2xl border border-slate-200 object-cover w-full h-[500px] hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
