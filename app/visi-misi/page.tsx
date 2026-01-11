"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Badge } from "@/components/ui/badge";
import {
  Heart,
  Cpu,
  Palette,
  TrendingUp,
  Leaf,
  ShieldCheck,
  Quote,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function VisiMisiPage() {
  const containerRef = useRef(null);

  const missions = [
    {
      icon: Heart,
      title: "Karakter Mulia",
      text: "Menanamkan sikap religius, moral, dan kebangsaan sebagai dasar pembentukan karakter siswa.",
      color: "text-rose-500",
      bg: "bg-rose-50",
      border: "border-rose-100",
    },
    {
      icon: Cpu,
      title: "IPTEK & Industri",
      text: "Melaksanakan pembelajaran berbasis ilmu pengetahuan, teknologi, dan industri sesuai dengan kompetensi keahlian.",
      color: "text-blue-500",
      bg: "bg-blue-50",
      border: "border-blue-100",
    },
    {
      icon: Palette,
      title: "Pengembangan Diri",
      text: "Mengembangkan minat, bakat, dan kepribadian siswa melalui kegiatan pengembangan diri yang berkesinambungan.",
      color: "text-purple-500",
      bg: "bg-purple-50",
      border: "border-purple-100",
    },
    {
      icon: TrendingUp,
      title: "Jiwa Kewirausahaan",
      text: "Menumbuhkan jiwa kewirausahaan melalui pembelajaran dan praktik kerja industri.",
      color: "text-emerald-500",
      bg: "bg-emerald-50",
      border: "border-emerald-100",
    },
    {
      icon: Leaf,
      title: "Peduli Lingkungan",
      text: "Meningkatkan kesadaran menjaga kelestarian lingkungan sejak dini.",
      color: "text-green-600",
      bg: "bg-green-50",
      border: "border-green-100",
    },
    {
      icon: ShieldCheck,
      title: "Mutu Berkelanjutan",
      text: "Melaksanakan Sistem Penjaminan Mutu Internal (SPMI) secara konsisten.",
      color: "text-orange-500",
      bg: "bg-orange-50",
      border: "border-orange-100",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header Animation
      const tlHeader = gsap.timeline();
      tlHeader
        .fromTo(
          ".header-badge",
          { y: -20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
        )
        .fromTo(
          ".header-title",
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, ease: "expo.out" },
          "-=0.4"
        )
        .fromTo(
          ".header-desc",
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, ease: "power2.out" },
          "-=0.6"
        );

      // Visi Animation
      gsap.fromTo(
        ".visi-section .visi-icon",
        { scale: 0, rotation: -180, opacity: 0 },
        {
          scale: 1,
          rotation: 0,
          opacity: 1,
          duration: 1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: ".visi-section",
            start: "top 80%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        ".visi-section .visi-text",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          delay: 0.2,
          scrollTrigger: {
            trigger: ".visi-section",
            start: "top 80%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        ".visi-section .visi-label",
        { y: 10, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          delay: 0.4,
          scrollTrigger: {
            trigger: ".visi-section",
            start: "top 80%",
            once: true,
          },
        }
      );

      // Misi Stagger - Robust Implementation
      gsap.fromTo(
        ".misi-card",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "back.out(1)",
          scrollTrigger: {
            trigger: ".misi-grid",
            start: "top 85%", // Triggers slightly earlier
            toggleActions: "play none none reverse",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen pt-20 bg-background font-sans selection:bg-blue-100 selection:text-blue-900"
    >
      <section className="py-12 md:py-20 bg-slate-50">
        <div className="container mx-auto px-16 text-center">
          <div className="header-content">
            <Badge className="header-badge mb-4 border-blue-200 font-semibold bg-blue-50 text-blue-700 px-4 py-1 text-sm rounded-sm">
              ARAH & TUJUAN
            </Badge>
            <h1 className="header-title text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Visi & Misi
            </h1>
            <p className="header-desc text-lg text-muted-foreground max-w-2xl mx-auto">
              Komitmen kami dalam mewujudkan pendidikan berkualitas dan
              berkarakter.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 visi-section">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl">
          <div className="text-center mb-20 border-b border-slate-100 pb-16">
            <div className="visi-icon inline-block">
              <Quote className="w-12 h-12 text-blue-200 mx-auto mb-8 opacity-50 rotate-180" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight mb-8 visi-text">
              &quot;Terwujudnya lulusan yang{" "}
              <span className="text-blue-600 bg-blue-50 px-2 rounded-md">
                unggul
              </span>{" "}
              dalam iman dan takwa, menguasai IPTEK, berkarakter, serta memiliki
              jiwa{" "}
              <span className="text-blue-600 bg-blue-50 px-2 rounded-md">
                wirausaha
              </span>
              .&quot;
            </h2>
            <p className="visi-label text-base text-slate-400 tracking-wider uppercase font-semibold">
              Visi Utama Sekolah
            </p>
          </div>

          <div className="misi-container">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                Misi Sekolah
              </h3>
              <p className="text-slate-500 text-sm">
                Langkah konkret untuk mencapai visi.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 misi-grid">
              {missions.map((item, index) => (
                <div
                  key={index}
                  className={`misi-card p-6 rounded-2xl bg-white border ${item.border} hover:shadow-lg transition-all duration-300 group`}
                >
                  <div
                    className={`w-12 h-12 rounded-xl ${item.bg} ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
