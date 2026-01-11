"use client";

import { useEffect, useRef } from "react";

import Image from "next/image";
import gsap from "gsap";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Users, CalendarDays, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PalasenaPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-content", {
        y: 30,
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
      <section className="relative h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=2069&auto=format&fit=crop"
            alt="Palasena SMKN 6"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-t from-green-900/90 via-black/50 to-transparent"></div>
        </div>
        <div className="container mx-auto px-16 relative z-10 h-full flex flex-col justify-end pb-16 text-white">
          <div className="hero-content">
            <Badge className="bg-green-600 hover:bg-green-700 text-white border-none mb-4 text-lg px-4 py-1">
              PECINTA ALAM
            </Badge>
            <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-4">
              PALASENA <span className="text-green-400">SMK6</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl">
              Lestari Alamku, Lestari Desaku. Menjelajah alam, mencintai
              lingkungan.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-green-950">
                  Tentang Ekstrakurikuler
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Pecinta Alam (Palasena) mendidik siswa untuk tangguh di alam
                  bebas, memiliki kemampuan survival, navigasi darat, dan yang
                  terpenting, menjaga kelestarian lingkungan hidup.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-6 text-green-950 flex items-center gap-3">
                  <Trophy className="w-8 h-8 text-green-600" /> Kegiatan &
                  Prestasi
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Pendakian Masal",
                    "Lomba Lintas Alam (Menyusul)",
                    "Penanaman Pohon",
                    "Konservasi Lingkungan",
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="bg-green-50 border border-green-100 p-4 rounded-xl flex items-center gap-3"
                    >
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="font-semibold text-green-900">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-6 text-green-950">
                  Galeri Kegiatan
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="rounded-xl h-48 w-full bg-slate-200 animate-pulse flex items-center justify-center text-slate-400"
                    >
                      Foto Kegiatan {i}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="border-green-200 shadow-lg shadow-green-100/50">
                <CardContent className="p-6 space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-green-100 p-3 rounded-lg text-green-600">
                      <CalendarDays className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Jadwal Diklat</h4>
                      <p className="text-muted-foreground">Sabtu & Minggu</p>
                      <p className="text-sm text-green-600 font-semibold">
                        Sesuai Agenda
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-green-100 p-3 rounded-lg text-green-600">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Basecamp</h4>
                      <p className="text-muted-foreground">
                        Sekretariat Palasena
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-green-100 p-3 rounded-lg text-green-600">
                      <Users className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Pembina</h4>
                      <p className="text-muted-foreground">Data Menyusul</p>
                    </div>
                  </div>

                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold">
                    Gabung Palasena
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
