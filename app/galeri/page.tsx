"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Badge } from "@/components/ui/badge";
import { Camera, Image as ImageIcon } from "lucide-react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export const images = [
  {
    src: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2070&auto=format&fit=crop",
    caption: "Kegiatan Belajar Mengajar",
  },
  {
    src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2132&auto=format&fit=crop",
    caption: "Praktik Laboratorium",
  },
  {
    src: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070&auto=format&fit=crop",
    caption: "Upacara Bendera",
  },
  {
    src: "https://images.unsplash.com/photo-1427504746696-ea5abd7dfe5d?q=80&w=2070&auto=format&fit=crop",
    caption: "Kunjungan Industri",
  },
  {
    src: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?q=80&w=1974&auto=format&fit=crop",
    caption: "Pentas Seni",
  },
  {
    src: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=2070&auto=format&fit=crop",
    caption: "Olahraga Pagi",
  },
  {
    src: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop",
    caption: "Diskusi Kelompok",
  },
  {
    src: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?q=80&w=1974&auto=format&fit=crop",
    caption: "Graduation",
  },
];

export default function GaleriPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".galeri-header", {
        y: 50,
        opacity: 0,
        duration: 1.3,
        ease: "power2.out",
      });

      gsap.from(".galeri-item", {
        y: 20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".galeri-grid",
          start: "top 80%",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen pt-20 bg-background font-sans relative"
    >
      {/* Soft Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-40 left-20 w-72 h-72 bg-purple-100/40 rounded-full blur-3xl mix-blend-multiply"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-blue-100/40 rounded-full blur-3xl mix-blend-multiply"></div>
        <div className="absolute bottom-40 left-1/2 w-96 h-96 bg-pink-100/40 rounded-full blur-3xl mix-blend-multiply -translate-x-1/2"></div>
      </div>

      <section className="py-12 md:py-20">
        <div className="container mx-auto px-16 text-center">
          <div className="galeri-header">
            <Badge className="mb-6 inline-flex gap-x-2 items-center border-blue-200 font-semibold bg-blue-50 text-blue-700 px-4 py-1 text-sm rounded-sm">
              <Camera className="w-4 h-4 text-blue-600" />
              DOKUMENTASI
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Galeri Siswa
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Momen-momen berharga, karya kreatif, dan kegiatan seru di
              lingkungan SMK Negeri 6 Malang.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 pb-32">
        <div className="container mx-auto px-16">
          <div className="galeri-grid columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {images.map((img, idx) => (
              <div
                key={idx}
                className="galeri-item break-inside-avoid relative group rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 cursor-pointer"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={img.src}
                    alt={img.caption}
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-white font-bold text-lg mb-1">
                        {img.caption}
                      </p>
                      <div className="h-1 w-12 bg-blue-500 rounded-full"></div>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-black/30 backdrop-blur-md p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    <ImageIcon className="w-5 h-5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
