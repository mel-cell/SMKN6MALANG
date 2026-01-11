"use client";

import { useEffect, useRef } from "react";

import Image from "next/image";
import gsap from "gsap";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Users, CalendarDays, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SeniMusikPage() {
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
            src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=2070&auto=format&fit=crop"
            alt="Seni Musik SMKN 6"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-t from-purple-900/90 via-black/50 to-transparent"></div>
        </div>
        <div className="container mx-auto px-16 relative z-10 h-full flex flex-col justify-end pb-16 text-white">
          <div className="hero-content">
            <Badge className="bg-purple-600 hover:bg-purple-700 text-white border-none mb-4 text-lg px-4 py-1">
              SENI & BUDAYA
            </Badge>
            <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-4">
              SENI <span className="text-purple-400">MUSIK</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl">
              Harmoni dalam nada, ekspresi dalam irama. Mengembangkan bakat
              musikalitas siswa.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-purple-950">
                  Tentang Ekstrakurikuler
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Ekstrakurikuler Seni Musik mewadahi siswa yang memiliki minat
                  di bidang vokal dan instrumen musik (band, paduan suara,
                  ansambel). Kami sering tampil mengisi acara sekolah maupun
                  kompetisi luar.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-6 text-purple-950 flex items-center gap-3">
                  <Trophy className="w-8 h-8 text-purple-600" /> Prestasi
                  Terbaru
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Juara Festival Band (Menyusul)",
                    "Juara Lomba Paduan Suara (Menyusul)",
                    "Penampil Terbaik Pensi (Menyusul)",
                    "Juara Solo Vokal (Menyusul)",
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="bg-purple-50 border border-purple-100 p-4 rounded-xl flex items-center gap-3"
                    >
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="font-semibold text-purple-900">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-6 text-purple-950">
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
              <Card className="border-purple-200 shadow-lg shadow-purple-100/50">
                <CardContent className="p-6 space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-purple-100 p-3 rounded-lg text-purple-600">
                      <CalendarDays className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Jadwal Latihan</h4>
                      <p className="text-muted-foreground">Rabu & Jumat</p>
                      <p className="text-sm text-purple-600 font-semibold">
                        14.30 - 16.30 WIB
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-purple-100 p-3 rounded-lg text-purple-600">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Lokasi</h4>
                      <p className="text-muted-foreground">Ruang Musik</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-purple-100 p-3 rounded-lg text-purple-600">
                      <Users className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Pembina</h4>
                      <p className="text-muted-foreground">Data Menyusul</p>
                    </div>
                  </div>

                  <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold">
                    Gabung Seni Musik
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
