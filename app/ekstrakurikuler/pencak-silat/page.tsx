"use client";

import { useEffect, useRef } from "react";

import Image from "next/image";
import gsap from "gsap";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Users, CalendarDays, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PencakSilatPage() {
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
            src="https://images.unsplash.com/photo-1738835934988-ed0d238e8299?q=80&w=1334&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Pencak Silat SMKN 6"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-t from-stone-900/90 via-black/50 to-transparent"></div>
        </div>
        <div className="container mx-auto px-16 relative z-10 h-full flex flex-col justify-end pb-16 text-white">
          <div className="hero-content">
            <Badge className="bg-stone-600 hover:bg-stone-700 text-white border-none mb-4 text-lg px-4 py-1">
              BELA DIRI
            </Badge>
            <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-4">
              PENCAK <span className="text-white">SILAT</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl">
              Melestarikan budaya bangsa, membentuk mental baja dan fisik yang
              tangguh.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-stone-950">
                  Tentang Ekstrakurikuler
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Pencak Silat (Merpati Putih) di SMKN 6 Malang mengajarkan seni
                  bela diri asli Indonesia, olah pernafasan, dan kedisiplinan.
                  Kami tidak hanya berlatih jurus, tetapi juga membangun
                  karakter luhur seorang pesilat.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-6 text-stone-950 flex items-center gap-3">
                  <Trophy className="w-8 h-8 text-stone-600" /> Prestasi Terbaru
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Juara Kejurda (Menyusul)",
                    "Juara Seni Tunggal (Menyusul)",
                    "Juara Tanding Kelas B (Menyusul)",
                    "Penampil Terbaik (Menyusul)",
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="bg-stone-50 border border-stone-100 p-4 rounded-xl flex items-center gap-3"
                    >
                      <div className="w-2 h-2 bg-stone-500 rounded-full"></div>
                      <span className="font-semibold text-stone-900">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-6 text-stone-950">
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
              <Card className="border-stone-200 shadow-lg shadow-stone-100/50">
                <CardContent className="p-6 space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-stone-100 p-3 rounded-lg text-stone-600">
                      <CalendarDays className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Jadwal Latihan</h4>
                      <p className="text-muted-foreground">Kamis Sore</p>
                      <p className="text-sm text-stone-600 font-semibold">
                        15.30 - 17.30 WIB
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-stone-100 p-3 rounded-lg text-stone-600">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Lokasi</h4>
                      <p className="text-muted-foreground">Aula / Lapangan</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-stone-100 p-3 rounded-lg text-stone-600">
                      <Users className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Pembina</h4>
                      <p className="text-muted-foreground">Data Menyusul</p>
                    </div>
                  </div>

                  <Button className="w-full bg-stone-600 hover:bg-stone-700 text-white font-bold">
                    Gabung Pencak Silat
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
