"use client";

import { useEffect, useRef } from "react";

import Image from "next/image";
import gsap from "gsap";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Users, CalendarDays, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function KIRPage() {
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
            src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format&fit=crop"
            alt="KIR SMKN 6"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-t from-cyan-900/90 via-black/50 to-transparent"></div>
        </div>
        <div className="container mx-auto px-16 relative z-10 h-full flex flex-col justify-end pb-16 text-white">
          <div className="hero-content">
            <Badge className="bg-cyan-600 hover:bg-cyan-700 text-white border-none mb-4 text-lg px-4 py-1">
              SAINS & TEKNOLOGI
            </Badge>
            <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-4">
              KARYA <span className="text-cyan-400">ILMIAH</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl">
              Berpikir kritis, meneliti, dan berinovasi untuk masa depan.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-cyan-950">
                  Tentang Ekstrakurikuler
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Kelompok Ilmiah Remaja (KIR) adalah wadah bagi siswa yang
                  gemar meneliti dan bereksperimen. Kami mengembangkan proyek
                  ilmiah, teknologi tepat guna, dan inovasi ramah lingkungan.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-6 text-cyan-950 flex items-center gap-3">
                  <Trophy className="w-8 h-8 text-cyan-600" /> Prestasi Terbaru
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Juara Lomba KTI Nasional (Menyusul)",
                    "Medali Perak Olimpiade Penelitian (Menyusul)",
                    "Finalis NYIA (Menyusul)",
                    "Best Presentation (Menyusul)",
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="bg-cyan-50 border border-cyan-100 p-4 rounded-xl flex items-center gap-3"
                    >
                      <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                      <span className="font-semibold text-cyan-900">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-6 text-cyan-950">
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
              <Card className="border-cyan-200 shadow-lg shadow-cyan-100/50">
                <CardContent className="p-6 space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-cyan-100 p-3 rounded-lg text-cyan-600">
                      <CalendarDays className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Jadwal Pertemuan</h4>
                      <p className="text-muted-foreground">Rabu</p>
                      <p className="text-sm text-cyan-600 font-semibold">
                        14.00 - 16.00 WIB
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-cyan-100 p-3 rounded-lg text-cyan-600">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Lokasi</h4>
                      <p className="text-muted-foreground">Lab IPA / Sains</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-cyan-100 p-3 rounded-lg text-cyan-600">
                      <Users className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Pembina</h4>
                      <p className="text-muted-foreground">Data Menyusul</p>
                    </div>
                  </div>

                  <Button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-bold">
                    Gabung KIR
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
