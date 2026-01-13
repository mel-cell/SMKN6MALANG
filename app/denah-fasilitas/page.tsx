"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Wrench,
  Monitor,
  BookOpen,
  Armchair,
  Trees,
  Wifi,
  MapPin,
} from "lucide-react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function DenahFasilitasPage() {
  const containerRef = useRef(null);

  const facilities = [
    {
      title: "Bengkel Praktik",
      icon: <Wrench className="w-8 h-8 text-blue-600" />,
      desc: "Tempat praktik siswa jurusan teknik otomotif dan industri dengan peralatan lengkap berstandar DUDI.",
      image:
        "https://images.unsplash.com/photo-1632405862117-236585cfb757?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Laboratorium",
      icon: <Monitor className="w-8 h-8 text-blue-600" />,
      desc: "Lab modern untuk praktik TIK, pemrograman, multimedia, dan pengembangan kemampuan bahasa asing.",
      image:
        "https://images.unsplash.com/photo-1629904853716-f0bc54eea481?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Perpustakaan Digital",
      icon: <BookOpen className="w-8 h-8 text-blue-600" />,
      desc: "Koleksi buku cetak dan referensi digital dengan area baca yang nyaman.",
      image:
        "https://images.unsplash.com/photo-1724148227159-478ada22d1b0?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Ruang Kelas Modern",
      icon: <Armchair className="w-8 h-8 text-blue-600" />,
      desc: "Ruang kelas ber-AC, dilengkapi LCD proyektor dan kursi ergonomis untuk pembelajaran hybrid.",
      image:
        "https://images.unsplash.com/photo-1746862932765-c450b9d2f3c5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Area Hijau & Kantin",
      icon: <Trees className="w-8 h-8 text-blue-600" />,
      desc: "Lingkungan asri dan kantin sehat untuk kenyamanan istirahat siswa.",
      image:
        "https://images.unsplash.com/photo-1723532623416-89c7bdcce044?q=80&w=1175&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Akses Internet & Wi-Fi",
      icon: <Wifi className="w-8 h-8 text-blue-600" />,
      desc: "Koneksi internet kecepatan tinggi di seluruh area sekolah.",
      image:
        "https://images.unsplash.com/photo-1516044734145-07ca8eef8731?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header Animation
      gsap.from(".fasilitas-header", {
        y: 50,
        opacity: 0,
        duration: 1.3,
        ease: "power2.out",
      });

      // Grid Items Animation
      gsap.from(".facility-card", {
        y: 30,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".facility-grid",
          start: "top 85%",
        },
      });

      // Map Section Animation
      gsap.from(".map-section", {
        scale: 0.95,
        opacity: 0,
        duration: 0.6,
        scrollTrigger: {
          trigger: ".map-section",
          start: "top 85%",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen pt-20 bg-background font-sans"
    >
      <section className="py-12 md:py-20 bg-slate-50">
        <div className="container mx-auto px-16 text-center">
          <div className="fasilitas-header">
            <Badge className="mb-4 border-blue-200 font-semibold bg-blue-50 text-blue-700 px-4 py-1 text-sm rounded-sm">
              SARANA & PRASARANA
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Denah & Fasilitas
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Fasilitas lengkap mendukung pembelajaran berbasis kompetensi
              keahlian dan kenyamanan siswa.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-16">
          <div className="facility-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {facilities.map((item, index) => (
              <div key={index} className="facility-card">
                <Card className="relative border-0 group shadow-none before:absolute before:inset-0 before:z-10 before:border before:border-gray-200 before:rounded-xl before:transition hover:before:border-2 hover:before:border-blue-600 focus:before:border-2 focus:before:border-blue-600 hover:before:shadow-lg h-full flex flex-col before:pointer-events-none pt-0 overflow-hidden">
                  <div className="h-48 overflow-hidden relative">
                    <Image
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-blue-50 rounded-lg">
                        {item.icon}
                      </div>
                      <CardTitle className="text-lg font-bold">
                        {item.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          <div className="map-section bg-white border rounded-2xl p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="w-8 h-8 text-blue-600" />
              <h2 className="text-2xl font-bold">Denah Lokasi Sekolah</h2>
            </div>
            <div className="aspect-video bg-slate-100 rounded-xl flex items-center justify-center border-2 border-dashed border-slate-300">
              <p className="text-muted-foreground font-medium flex flex-col items-center">
                <span className="text-4xl mb-2">🗺️</span>
                Peta Denah Sekolah (dalam perbaikan)
              </p>
            </div>
            <p className="mt-4 text-center text-muted-foreground">
              Jl. Ki Ageng Gribig No. 28, Kedungkandang, Kota Malang
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
