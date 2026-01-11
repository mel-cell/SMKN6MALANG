"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const words = ["Teknik", "Industri", "Teknologi"];

export function HeroSection() {
  const [index, setIndex] = useState(0);
  const heroRef = useRef(null);
  const wordRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      // Animate out
      gsap.to(wordRef.current, {
        opacity: 0,
        x: -20,
        duration: 0.3,
        onComplete: () => {
          setIndex((prev) => (prev + 1) % words.length);
          // Animate in
          gsap.fromTo(
            wordRef.current,
            { opacity: 0, x: 20 },
            { opacity: 1, x: 0, duration: 0.3 }
          );
        },
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-text-left", {
        x: -50,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
      });

      gsap.from(".hero-title", {
        y: 20,
        opacity: 0,
        duration: 0.6,
        delay: 0.2,
        ease: "power2.out",
      });

      gsap.from(".hero-buttons", {
        y: 20,
        opacity: 0,
        duration: 0.5,
        delay: 0.4,
        ease: "power2.out",
      });

      gsap.from(".hero-image-section", {
        x: 50,
        opacity: 0,
        duration: 0.8,
        delay: 0.2,
        ease: "power2.out",
      });

      gsap.to(".hero-blob", {
        scale: 1.05,
        repeat: -1,
        yoyo: true,
        duration: 5,
        ease: "sine.inOut",
      });

      gsap.to(".hero-image-float", {
        y: -20,
        repeat: -1,
        yoyo: true,
        duration: 6,
        ease: "sine.inOut",
      });

      gsap.fromTo(
        ".hero-deco",
        { scale: 0, rotation: -90 },
        {
          scale: 1,
          rotation: 0,
          delay: 0.8,
          duration: 1,
          ease: "elastic.out(1, 0.5)",
        }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative overflow-hidden pb-24 lg:pb-48">
      <div className="container mx-auto px-16">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="hero-text-left flex-1 text-center lg:text-left z-10">
            <p className="mb-3 font-bold text-muted-foreground py-1 text-xl">
              SMK NEGERI 6 MALANG
            </p>
            <h1 className="hero-title text-5xl lg:text-7xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
              Sekolah <br />
              Pelopor Di Bidang{" "}
              <span className="text-blue-600 max-w-24 inline-block min-w-[200px]">
                <span ref={wordRef} className="block">
                  {words[index]}
                </span>
              </span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
              Sekolah Menengah Kejuruan yang menghasilkan lulusan siap kerja
              dengan tingkat penyerapan industri tinggi dan kemitraan dengan
              perusahaan terkemuka.{" "}
            </p>
            <div className="hero-buttons flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/tentang-sekolah">
                <Button
                  size="lg"
                  className="bg-blue-600 cursor-pointer hover:bg-blue-700 shadow-lg shadow-blue-300 text-white rounded-sm px-8! h-12 text-base"
                >
                  Baca Selengkapnya <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/mitra-industri">
                <Button
                  size="lg"
                  variant="outline"
                  className="px-8! h-12 cursor-pointer text-base border border-slate-300"
                >
                  Lihat Industri
                </Button>
              </Link>
            </div>
          </div>
          <div className="hero-image-section flex-1 relative">
            {/* Yellow Abstract Blob Background */}
            <div className="hero-blob absolute -top-10 -right-10 lg:right-0 w-[120%] h-[120%] lg:w-[600px] lg:h-[600px] rounded-full blur-sm opacity-20 lg:opacity-100 -z-10 lg:translate-x-20"></div>
            <div className="hero-image-float relative z-10">
              <img
                src="/header.png"
                alt="Students"
                className="w-full object-cover aspect-4/3 lg:aspect-square"
              />
              {/* Decorative Elements */}
              <div className="hero-deco absolute top-6 -left-8 text-blue-500">
                <svg
                  width="80"
                  height="80"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 50L25 25L50 50L75 25L100 50"
                    stroke="currentColor"
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
