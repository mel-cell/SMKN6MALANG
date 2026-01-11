"use client";

import { useEffect, useRef } from "react";

import Image from "next/image";
import gsap from "gsap";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Users, CalendarDays, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

import bgImage from "@/public/smkn6.jpg";

export default function PramukaPage() {
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
            src={bgImage}
            alt="Pramuka SMKN 6"
            fill
            className="object-cover"
            priority
            placeholder="blur"
          />
          <div className="absolute inset-0 bg-linear-to-t from-orange-900/90 via-black/50 to-transparent"></div>
        </div>
        <div className="container mx-auto px-16 relative z-10 h-full flex flex-col justify-end pb-16 text-white">
          <div className="hero-content">
            <Badge className="bg-orange-600 hover:bg-orange-700 text-white border-none mb-4 text-lg px-4 py-1">
              KEPEMIMPINAN
            </Badge>
            <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-4">
              PRAMUKA <span className="text-orange-400">AMBALAN</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl">
              Satyaku Kudarmakan, Darmaku Kubaktikan. Membentuk karakter mandiri
              dan cinta tanah air.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-orange-950">
                  Tentang Ekstrakurikuler
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Gerakan Pramuka di SMKN 6 Malang mendidik siswa dalam
                  kedisiplinan, keterampilan kepramukaan (scouting skills),
                  serta kepedulian sosial melalui kegiatan perkemahan,
                  penjelajahan, dan bakti masyarakat.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-6 text-orange-950 flex items-center gap-3">
                  <Trophy className="w-8 h-8 text-orange-600" /> Kegiatan &
                  Prestasi
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Persami (Perkemahan Sabtu Minggu)",
                    "Lomba Tingkat Penegak",
                    "Raimuna Cabang/Daerah",
                    "Jelajah Alam",
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="bg-orange-50 border border-orange-100 p-4 rounded-xl flex items-center gap-3"
                    >
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span className="font-semibold text-orange-900">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-6 text-orange-950">
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
              <Card className="border-orange-200 shadow-lg shadow-orange-100/50">
                <CardContent className="p-6 space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-orange-100 p-3 rounded-lg text-orange-600">
                      <CalendarDays className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Jadwal Latihan</h4>
                      <p className="text-muted-foreground">Jumat</p>
                      <p className="text-sm text-orange-600 font-semibold">
                        13.00 - 15.00 WIB
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-orange-100 p-3 rounded-lg text-orange-600">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Lokasi</h4>
                      <p className="text-muted-foreground">Lapangan Sekolah</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-orange-100 p-3 rounded-lg text-orange-600">
                      <Users className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Pembina</h4>
                      <p className="text-muted-foreground">Data Menyusul</p>
                    </div>
                  </div>

                  <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold">
                    Gabung Pramuka
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
