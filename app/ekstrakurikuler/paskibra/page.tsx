"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

import { Button } from "@/components/ui/button";
import { Flag, Shield, Award, Users } from "lucide-react";
import Image from "next/image";

export default function PaskibraPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Text Animation
      gsap.from(".hero-text", {
        x: -30,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen pt-20 bg-background font-sans"
    >
      {/* Hero Section - Formal/Patriotic Theme */}
      <section className="relative h-[550px] overflow-hidden bg-red-900">
        <div className="absolute inset-0 opacity-40">
          <Image
            src="https://images.unsplash.com/photo-1566411084986-ce3d90cec36f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Paskibra SMKN 6"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-linear-to-r from-red-900 via-red-900/80 to-transparent"></div>

        <div className="container mx-auto px-16 relative z-10 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <div className="hero-text">
              <div className="flex items-center gap-3 mb-4">
                <Flag className="w-6 h-6 text-red-400" />
                <span className="uppercase tracking-[0.3em] text-sm font-bold">
                  Bela Negara
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                PASBHARAM
              </h1>
              <p className="text-xl text-red-100 mb-8 font-light border-l-4 border-white pl-6">
                Pasukan Pengibar Bendera SMK Negeri 6 Malang. <br />
                Disiplin, Tangguh, Berkarakter.
              </p>
              <Button className="bg-white text-red-900 hover:bg-red-50 font-bold px-8 py-6 text-lg rounded-none">
                Bergabung dengan Angkatan 22
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-16">
          {/* Values */}
          <div className="grid md:grid-cols-3 gap-8 -mt-32 relative z-20 mb-20">
            {[
              {
                title: "Kedisiplinan",
                icon: <Shield className="w-10 h-10 text-red-600" />,
                text: "Membentuk pribadi yang tepat waktu dan taat aturan.",
              },
              {
                title: "Kepemimpinan",
                icon: <Users className="w-10 h-10 text-red-600" />,
                text: "Melatih jiwa leadership dalam mengelola barisan dan tim.",
              },
              {
                title: "Prestasi",
                icon: <Award className="w-10 h-10 text-red-600" />,
                text: "Meraih berbagai piala LKBB tingkat provinsi dan nasional.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-8 shadow-xl border-t-4 border-red-600 group hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="mb-4 group-hover:scale-110 transition-transform origin-left">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>

          {/* Content */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-slate-900">
                Latihan & Kegiatan
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 font-bold text-red-600 text-xl">01</div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">
                      Latihan Rutin PBB
                    </h4>
                    <p className="text-muted-foreground">
                      Setiap Selasa dan Jumat, fokus pada PBB dasar dan variasi
                      formasi.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 font-bold text-red-600 text-xl">02</div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">Diklat & LDK</h4>
                    <p className="text-muted-foreground">
                      Pendidikan dan Latihan Dasar Kepemimpinan tahunan di alam
                      terbuka.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 font-bold text-red-600 text-xl">03</div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">Tugas Upacara</h4>
                    <p className="text-muted-foreground">
                      Bertugas sebagai petugas upacara bendera hari Senin dan
                      Hari Besar Nasional.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-64 w-full">
                <Image
                  src="https://images.unsplash.com/photo-1566411084986-ce3d90cec36f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  className="object-cover rounded-sm shadow-lg"
                  alt="Latihan"
                  fill
                />
              </div>
              <div className="relative h-64 w-full mt-8">
                <Image
                  src="https://images.unsplash.com/photo-1526976668912-1a811878dd37?q=80&w=800&auto=format&fit=crop"
                  className="object-cover rounded-sm shadow-lg"
                  alt="Lomba"
                  fill
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
