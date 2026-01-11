"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Button } from "@/components/ui/button";
import { Camera, Film, Laptop, Aperture, Play } from "lucide-react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function MultimediaPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Animation
      gsap.from(".hero-content", {
        scale: 0.9,
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
      });

      // Division Cards Animation
      gsap.from(".division-card", {
        y: 30,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".divisions-section",
          start: "top 80%",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen pt-20 bg-background font-sans text-foreground"
    >
      {/* Hero Section - Tech/Cyber Theme (Light Mode) */}
      <section className="relative h-[600px] overflow-hidden flex items-center bg-slate-50">
        {/* Video Background Placeholder */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2070&auto=format&fit=crop"
            alt="Multimedia Background"
            fill
            className="object-cover opacity-20 mix-blend-multiply"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-background/50"></div>
        </div>

        <div className="container mx-auto px-16 relative z-10">
          <div className="hero-content max-w-3xl">
            <div className="flex items-center gap-2 mb-4 text-cyan-600 font-mono font-bold">
              <Aperture className="w-5 h-5 animate-spin-slow" />
              <span>CREATIVE & TECH</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold text-slate-900 mb-6 tracking-tighter">
              SIX
              <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-500 to-blue-600">
                MEDIA
              </span>
            </h1>
            <p className="text-2xl text-slate-600 mb-8 font-light">
              Capture Moments. Create Stories. Inspire World.
            </p>
            <div className="flex gap-4">
              <Button className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold px-8 h-12 rounded-sm shadow-lg shadow-cyan-200/50">
                Lihat Portfolio
              </Button>
              <Button
                variant="outline"
                className="border-slate-300 text-slate-700 hover:bg-slate-100 h-12 px-8 rounded-sm"
              >
                Join Team
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Divisions */}
      <section className="divisions-section py-20 bg-background">
        <div className="container mx-auto px-16">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Photography",
                icon: <Camera className="w-8 h-8 text-cyan-600" />,
                desc: "Teknik fotografi, lighting, dan editing foto digital (Lightroom/Photoshop).",
              },
              {
                title: "Videography",
                icon: <Film className="w-8 h-8 text-purple-600" />,
                desc: "Cinematography, short movie production, dan video jurnalisme.",
              },
              {
                title: "Graphic Design",
                icon: <Laptop className="w-8 h-8 text-emerald-600" />,
                desc: "Desain poster, layout majalah sekolah, dan konten media sosial.",
              },
            ].map((div, idx) => (
              <div
                key={idx}
                className="division-card bg-white border border-slate-200 p-8 rounded-2xl hover:border-cyan-200 hover:shadow-xl transition-all hover:-translate-y-2 duration-300"
              >
                <div className="mb-6 bg-slate-50 w-fit p-4 rounded-xl border border-slate-100">
                  {div.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  {div.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">{div.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Showcase */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-16">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-3xl font-bold text-slate-900">
              Recent Projects
            </h2>
            <div className="text-cyan-600 text-sm font-mono cursor-pointer hover:underline font-bold">
              VIEW ALL WORK -&gt;
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="lg:col-span-2 row-span-2 relative group overflow-hidden rounded-xl aspect-video shadow-md">
              <Image
                src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2070&auto=format&fit=crop"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                alt="Project 1"
                fill
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Play className="w-16 h-16 text-white fill-white opacity-80" />
              </div>
              <div className="absolute bottom-0 left-0 p-6 w-full bg-linear-to-t from-black/80 to-transparent">
                <h4 className="text-white font-bold text-lg">
                  Aftermovie HUT SMKN 6
                </h4>
                <p className="text-slate-200 text-sm">Videography</p>
              </div>
            </div>
            {[2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="relative group overflow-hidden rounded-xl aspect-square bg-slate-200 shadow-md"
              >
                <Image
                  src={`https://images.unsplash.com/photo-${
                    i === 2
                      ? "1542038784456-1ea8888176f3"
                      : "1550745165-9bc0b252726f"
                  }?q=80&w=800&auto=format&fit=crop`}
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  alt={`Project ${i}`}
                  fill
                />
                <div className="absolute bottom-0 left-0 p-4 w-full bg-linear-to-t from-black/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform">
                  <p className="text-white text-sm font-bold">
                    Project Title {i}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
