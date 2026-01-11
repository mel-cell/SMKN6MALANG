"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Users, CalendarDays, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function BasketPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Animations
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
      {/* Hero Section - Sports Theme (Orange/Dark) */}
      <section className="relative h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1518063319789-7217e6706b04?q=80&w=2070&auto=format&fit=crop"
            alt="Basket SMKN 6"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-t from-orange-900/90 via-black/50 to-transparent"></div>
        </div>
        <div className="container mx-auto px-16 relative z-10 h-full flex flex-col justify-end pb-16 text-white">
          <div className="hero-content">
            <Badge className="bg-orange-600 hover:bg-orange-700 text-white border-none mb-4 text-lg px-4 py-1">
              SPORTS CLUB
            </Badge>
            <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-4">
              SATRIA SIX <span className="text-orange-500">BASKETBALL</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl">
              Menjunjung tinggi sportivitas, kerja sama tim, dan mental juara di
              setiap pertandingan.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Info */}
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-orange-950">
                  Tentang Ekstrakurikuler
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Ekstrakurikuler Basket SMK Negeri 6 Malang (Satria Six) adalah
                  wadah bagi siswa untuk menyalurkan bakat di bidang olahraga
                  bola basket. Kami tidak hanya melatih fisik dan teknik, tetapi
                  juga membentuk karakter disiplin, kepemimpinan, dan kerjasama
                  tim yang solid.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-6 text-orange-950 flex items-center gap-3">
                  <Trophy className="w-8 h-8 text-orange-600" /> Prestasi
                  Terbaru
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Juara 2 DBL East Java Series 2024",
                    "Juara 1 Walikota Cup Malang 2023",
                    "MVP Player MKKS Cup 2023",
                    "Juara 3 Invitasi Bola Basket Pelajar",
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
                      className="relative h-48 w-full rounded-xl overflow-hidden"
                    >
                      <Image
                        src={`https://images.unsplash.com/photo-${
                          i === 1
                            ? "1519861531473-920026393112"
                            : i === 2
                            ? "1518063319702-e74ec11c8b5f"
                            : "1574629810360-7efbbe195018"
                        }?q=80&w=800&auto=format&fit=crop`}
                        fill
                        className="object-cover hover:opacity-90 transition-opacity cursor-pointer"
                        alt="Gallery"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar Info */}
            <div className="space-y-6">
              <Card className="border-orange-200 shadow-lg shadow-orange-100/50">
                <CardContent className="p-6 space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-orange-100 p-3 rounded-lg text-orange-600">
                      <CalendarDays className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Jadwal Latihan</h4>
                      <p className="text-muted-foreground">Selasa & Kamis</p>
                      <p className="text-sm text-orange-600 font-semibold">
                        15.30 - 17.30 WIB
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-orange-100 p-3 rounded-lg text-orange-600">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Lokasi</h4>
                      <p className="text-muted-foreground">
                        Lapangan Basket Indoor SMKN 6
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-orange-100 p-3 rounded-lg text-orange-600">
                      <Users className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Pembina</h4>
                      <p className="text-muted-foreground">Bpk. Coach Dandy</p>
                    </div>
                  </div>

                  <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold">
                    Daftar Anggota Baru
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
