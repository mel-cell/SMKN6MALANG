"use client";

import { useEffect, useRef } from "react";

import Image from "next/image";
import gsap from "gsap";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Users, CalendarDays, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CaturPage() {
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
            src="https://images.unsplash.com/photo-1529699211952-734e80c4d42b?q=80&w=2070&auto=format&fit=crop"
            alt="Catur SMKN 6"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-t from-slate-900/90 via-black/50 to-transparent"></div>
        </div>
        <div className="container mx-auto px-16 relative z-10 h-full flex flex-col justify-end pb-16 text-white">
          <div className="hero-content">
            <Badge className="bg-slate-600 hover:bg-slate-700 text-white border-none mb-4 text-lg px-4 py-1">
              OLAHRAGA PIKIR
            </Badge>
            <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-4">
              KOPI <span className="text-slate-400">CATUR</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl">
              Strategi, konsentrasi, dan ketajaman pikiran. Checkmate!
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-slate-950">
                  Tentang Ekstrakurikuler
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Ekstrakurikuler Catur melatih siswa dalam berpikir strategis,
                  analitis, dan kesabaran. Kami rutin mengadakan sparring
                  partner dan mengikuti turnamen catur antar pelajar.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-6 text-slate-950 flex items-center gap-3">
                  <Trophy className="w-8 h-8 text-slate-600" /> Prestasi Terbaru
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Juara Catur Cepat (Menyusul)",
                    "Juara Catur Klasik (Menyusul)",
                    "Master Junior (Menyusul)",
                    "Tim Terbaik (Menyusul)",
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="bg-slate-50 border border-slate-100 p-4 rounded-xl flex items-center gap-3"
                    >
                      <div className="w-2 h-2 bg-slate-500 rounded-full"></div>
                      <span className="font-semibold text-slate-900">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-6 text-slate-950">
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
              <Card className="border-slate-200 shadow-lg shadow-slate-100/50">
                <CardContent className="p-6 space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-slate-100 p-3 rounded-lg text-slate-600">
                      <CalendarDays className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Jadwal Latihan</h4>
                      <p className="text-muted-foreground">Sabtu</p>
                      <p className="text-sm text-slate-600 font-semibold">
                        09.00 - 12.00 WIB
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-slate-100 p-3 rounded-lg text-slate-600">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Lokasi</h4>
                      <p className="text-muted-foreground">Kelas B1</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-slate-100 p-3 rounded-lg text-slate-600">
                      <Users className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Pembina</h4>
                      <p className="text-muted-foreground">Data Menyusul</p>
                    </div>
                  </div>

                  <Button className="w-full bg-slate-600 hover:bg-slate-700 text-white font-bold">
                    Gabung Catur
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
