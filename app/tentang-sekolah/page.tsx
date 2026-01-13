"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, GraduationCap, Briefcase, Users, Info } from "lucide-react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function TentangSekolahPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header Animation
      gsap.from(".header-content", {
        y: 50,
        opacity: 0,
        duration: 1.3,
        ease: "power2.out",
      });

      // History Section
      gsap.from(".history-img", {
        x: -50,
        opacity: 0,
        duration: 0.6,
        scrollTrigger: {
          trigger: ".history-section",
          start: "top 80%",
        },
      });

      gsap.from(".history-text", {
        x: 50,
        opacity: 0,
        duration: 0.6,
        scrollTrigger: {
          trigger: ".history-section",
          start: "top 80%",
        },
      });

      // Features Grid
      gsap.from(".feature-card", {
        y: 30,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".features-grid",
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
      {/* Hero Section */}
      <section className="py-12 md:py-16 bg-slate-50">
        <div className="container mx-auto px-16 text-center">
          <div className="header-content">
            <Badge className="mb-6 inline-flex gap-x-2 items-center border-blue-200 font-semibold bg-blue-50 text-blue-700 px-4 py-1 text-sm rounded-sm">
              <Info className="w-4 h-4 text-blue-600" />
              TENTANG KAMI
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Profil Sekolah
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Mengenal lebih dekat SMK Negeri 6 Malang sebagai lembaga
              pendidikan vokasi unggulan.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-16">
          <div className="history-section grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="history-img relative h-[400px] w-full">
              <Image
                src="./smkn6.jpg" // Using existing asset as placeholder
                alt="Gedung SMK Negeri 6 Malang"
                fill
                className="rounded-2xl shadow-lg object-cover"
              />
            </div>
            <div className="history-text">
              <h2 className="text-3xl font-bold mb-6 text-slate-900">
                Sejarah & Tujuan
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  SMK Negeri 6 Malang didirikan pada tahun ajaran 2002/2003
                  melalui Surat Keputusan Direktur Dikmenjur Depdiknas No.
                  1502/C5/PS/2002 tertanggal 5 Agustus 2002, sebagai hasil alih
                  fungsi dari Balai Latihan Pendidikan.
                </p>
                <p>
                  Sekolah ini bertujuan menghasilkan lulusan yang{" "}
                  <strong>unggul</strong>: memiliki iman dan takwa, penguasaan
                  ilmu dan teknologi, karakter yang baik, kemampuan
                  berwirausaha, kepedulian terhadap lingkungan, dan siap
                  bersaing di tingkat lokal maupun global.
                </p>
                <p>
                  Sejak berdiri dengan dua program keahlian, SMKN 6 Malang terus
                  berkembang menambah kompetensi keahlian seperti Rekayasa
                  Perangkat Lunak, Teknik Ototronik, Teknik Alat Berat, hingga
                  Teknik Komputer dan Jaringan.
                </p>
              </div>
            </div>
          </div>

          <div className="features-grid grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Bekerja",
                icon: <Briefcase className="w-8 h-8 text-blue-600" />,
                desc: "Lulusan dibekali kompetensi teknis dan soft skill agar siap diserap langsung oleh dunia industri.",
              },
              {
                title: "Melanjutkan",
                icon: <GraduationCap className="w-8 h-8 text-blue-600" />,
                desc: "Membuka akses dan memberikan bekal akademik bagi siswa yang ingin melanjutkan ke Perguruan Tinggi.",
              },
              {
                title: "Wirausaha",
                icon: <Users className="w-8 h-8 text-blue-600" />,
                desc: "Menumbuhkan jiwa entrepreneurship untuk menciptakan peluang usaha mandiri dan kreatif.",
              },
            ].map((item, index) => (
              <div key={index} className="feature-card">
                <Card className="relative border-0 group shadow-none before:absolute before:inset-0 before:z-10 before:border before:border-gray-200 before:rounded-xl before:transition hover:before:border-2 hover:before:border-blue-600 focus:before:border-2 focus:before:border-blue-600 hover:before:shadow-lg h-full flex flex-col before:pointer-events-none">
                  <CardHeader>
                    <div className="mb-4 p-3 bg-blue-50 w-fit rounded-lg">
                      {item.icon}
                    </div>
                    <CardTitle className="text-xl font-bold">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <h3 className="text-2xl font-bold mb-8">Prestasi Sekolah</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "Akreditasi A",
                "ISO 9001:2008",
                "Sekolah Adiwiyata Nasional",
                "SMK Pusat Keunggulan",
              ].map((tag, idx) => (
                <Badge
                  key={idx}
                  variant="secondary"
                  className="text-lg px-6 py-2"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
