"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function StatsSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".stats-header", {
        y: 20,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".stats-header",
          start: "top 80%",
        },
      });

      gsap.from(".stats-item", {
        scale: 0.8,
        opacity: 0,
        duration: 0.4,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".stats-grid",
          start: "top 85%",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="bg-blue-600 py-20 text-white relative overflow-hidden"
    >
      {/* Geometric Background Lines */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 border-40 border-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] border-60 border-white rounded-full translate-x-1/3 translate-y-1/3"></div>
      </div>

      <div className="container mx-auto px-16 relative z-10">
        <div className="stats-header text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Bergabung dengan kami dan raih mimpimu
          </h2>
          <p className="text-blue-100 max-w-2xl mx-auto">
            SMK Negeri 6 Malang telah dipercayai oleh ribuan orang tua dan siswa
            sebagai tempat mengemban pendidikan pilihan mereka.
          </p>
        </div>
        <div className="stats-grid grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="stats-item p-6">
            <div className="text-5xl lg:text-6xl font-bold mb-2">+5.2k</div>
            <div className="text-xl font-medium text-blue-100">
              Siswa Aktif & Alumni
            </div>
          </div>
          <div className="stats-item p-6 border-t md:border-t-0 md:border-l border-blue-500">
            <div className="text-5xl lg:text-6xl font-bold mb-2">100%</div>
            <div className="text-xl font-medium text-blue-100">
              Lulusan Kompeten
            </div>
          </div>
          <div className="stats-item p-6 border-t md:border-t-0 md:border-l border-blue-500">
            <div className="text-5xl lg:text-6xl font-bold mb-2">+65</div>
            <div className="text-xl font-medium text-blue-100">
              Penghargaan Tahun Ini
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
