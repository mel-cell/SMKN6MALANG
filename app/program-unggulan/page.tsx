"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Globe,
  HardHat,
  Cpu,
  Heart,
  Check,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function ProgramUnggulanPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header Animation
      gsap.from(".program-header", {
        y: 50,
        opacity: 0,
        duration: 1.3,
        ease: "power2.out",
      });

      // Ausbildung Section
      gsap.from(".ausbildung-card", {
        y: 30,
        opacity: 0,
        duration: 0.6,
        delay: 0.2,
        ease: "power2.out",
      });

      // 4 Years Program Cards
      gsap.from(".program-card-1", {
        x: -30,
        opacity: 0,
        duration: 0.5,
        scrollTrigger: {
          trigger: ".program-grid",
          start: "top 80%",
        },
      });

      gsap.from(".program-card-2", {
        x: 30,
        opacity: 0,
        duration: 0.5,
        scrollTrigger: {
          trigger: ".program-grid",
          start: "top 80%",
        },
      });

      // GSS Section
      gsap.from(".gss-section", {
        y: 30,
        opacity: 0,
        duration: 0.6,
        scrollTrigger: {
          trigger: ".gss-section",
          start: "top 80%",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen pt-20 bg-background font-sans relative overflow-hidden"
    >
      {/* Gradient Background */}
      <div className="absolute top-0 left-0 w-full h-[600px] bg-linear-to-b from-slate-50 via-white to-white -z-10"></div>
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/30 rounded-full blur-3xl opacity-50 -z-10 translate-x-1/3 -translate-y-1/4"></div>

      <section className="py-12 md:py-20">
        <div className="container mx-auto px-16 text-center">
          <div className="program-header">
            <Badge className="mb-6 inline-flex gap-x-2 items-center border-blue-200 font-semibold bg-blue-50 text-blue-700 px-4 py-1 text-sm rounded-sm">
              <Sparkles className="w-4 h-4 text-blue-600" />
              KEUNGGULAN KAMI
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Program Unggulan
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Inovasi pendidikan untuk mencetak lulusan berdaya saing global
              dengan kurikulum adaptif.
            </p>
          </div>
        </div>
      </section>

      {/* Ausbildung Section */}
      <section className="py-10 relative">
        <div className="container mx-auto px-16">
          <div className="ausbildung-card bg-linear-to-r from-blue-900 to-blue-800 rounded-3xl p-8 md:p-16 text-white overflow-hidden relative mb-20 shadow-2xl border border-blue-700/50">
            {/* Background Image with Fade */}
            <div className="absolute inset-0 z-0">
              <Image
                src="https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=2070&auto=format&fit=crop"
                alt="German City Landscape"
                fill
                className="object-cover opacity-80"
              />
              {/* Gradient Overlay: Rich Blue to transparent */}
              <div className="absolute inset-0 bg-linear-to-r from-blue-900 via-blue-900/90 to-blue-900/10"></div>
            </div>

            {/* Background Elements - Reduced opacity for cleaner look */}
            <div className="absolute top-0 right-0 p-12 opacity-5 z-0">
              <Globe className="w-96 h-96 animate-spin-slow" />
            </div>

            <div className="relative z-10 max-w-3xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-sm font-semibold text-yellow-300 border border-white/10">
                  <Globe className="w-4 h-4" /> INTERNATIONAL CLASS
                </div>
                {/* Flags Section */}
                <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/5">
                  <div className="relative w-6 h-6 rounded-full overflow-hidden border border-white/20 shadow-sm">
                    <Image
                      src="https://flagcdn.com/w40/de.png"
                      alt="Germany"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span className="text-xs font-medium text-blue-100">
                    Jerman
                  </span>
                </div>
              </div>

              <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight tracking-tight">
                Ausbildung <br />
                <span className="text-blue-200">Program Vokasi Jerman</span>
              </h2>
              <p className="text-blue-50 text-lg leading-relaxed mb-10 max-w-2xl">
                SMK Negeri 6 Malang menyelenggarakan program kerjasama
                internasional untuk menyalurkan tenaga kerja profesional ke{" "}
                <strong className="text-white">Jerman</strong>. Program ini
                membuka peluang karir global dengan standar gaji Eropa.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mb-10">
                {[
                  "Pendidikan Vokasi Standar Eropa",
                  "Pengalaman Kerja Internasional",
                  "Pendapatan Kompetitif",
                  "Sertifikasi Diakui Global",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 font-medium">
                    <span className="bg-green-400/20 text-green-300 p-1 rounded-full">
                      <Check className="w-4 h-4" />
                    </span>
                    {item}
                  </div>
                ))}
              </div>
              <button className="bg-white text-blue-600 hover:bg-blue-50 font-bold py-3 px-8 rounded-lg transition-colors shadow-lg flex items-center gap-2 group">
                Pelajari Lebih Lanjut
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* 4 Years Program */}
          <div className="mb-24">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Program Pendidikan 4 Tahun
              </h2>
              <p className="text-muted-foreground">
                Setara Diploma 1 (D1) dengan kualifikasi level 3 KKNI
              </p>
            </div>

            <div className="program-grid grid md:grid-cols-2 gap-8">
              <div className="program-card-1">
                <Card className="h-full border hover:border-blue-400 transition-all duration-300 group hover:shadow-lg bg-white">
                  <CardHeader>
                    <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-orange-600 transition-colors duration-300">
                      <HardHat className="w-8 h-8 text-orange-600 group-hover:text-white transition-colors" />
                    </div>
                    <CardTitle className="text-2xl group-hover:text-orange-600 transition-colors">
                      Konstruksi Jalan, Irigasi, dan Jembatan (KJIJ)
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Kompetensi keahlian ini membekali siswa dalam perencanaan,
                      pelaksanaan, serta pengawasan pembangunan{" "}
                      <strong className="text-slate-700">
                        infrastruktur sipil
                      </strong>
                      . Lulusan dipersiapkan menjadi tenaga ahli madya yang siap
                      terjun ke proyek konstruksi nasional.
                    </p>
                    <Badge
                      variant="outline"
                      className="bg-orange-50 text-orange-700 border-orange-200"
                    >
                      Setara D1 / D3 Terapan
                    </Badge>
                  </CardContent>
                </Card>
              </div>

              <div className="program-card-2">
                <Card className="h-full border hover:border-indigo-400 transition-all duration-300 group hover:shadow-lg bg-white">
                  <CardHeader>
                    <div className="w-14 h-14 bg-indigo-100 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-indigo-600 transition-colors duration-300">
                      <Cpu className="w-8 h-8 text-indigo-600 group-hover:text-white transition-colors" />
                    </div>
                    <CardTitle className="text-2xl group-hover:text-indigo-600 transition-colors">
                      Sistem Informasi, Jaringan, dan Aplikasi (SIJA)
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Fokus pada pengembangan IT modern (Jaringan & Coding).
                      Siswa dibekali keterampilan IT mulai dari{" "}
                      <em className="text-slate-700">network engineering</em>,{" "}
                      <em className="text-slate-700">cloud computing</em>,
                      hingga pengembangan aplikasi sesuai kebutuhan industri
                      digital 4.0.
                    </p>
                    <Badge
                      variant="outline"
                      className="bg-indigo-50 text-indigo-700 border-indigo-200"
                    >
                      Setara D1 / D3 Terapan
                    </Badge>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* GSS */}
        </div>
      </section>

      {/* GSS Section (Full Width Background) */}
      <section className="py-24 bg-slate-50 gss-section border-t border-slate-200">
        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row-reverse items-center gap-12 lg:gap-20">
          <div className="w-full md:w-1/2 gss-img relative group">
            <div className="absolute inset-x-4 -bottom-4 h-full bg-green-200/50 rounded-2xl -z-10 transform translate-y-2 group-hover:translate-y-4 transition-transform duration-500"></div>
            <Image
              src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=2070&auto=format&fit=crop"
              alt="Lingkungan Sekolah Sehat"
              width={1200}
              height={800}
              className="rounded-2xl shadow-2xl w-full h-[400px] lg:h-[500px] object-cover group-hover:scale-[1.02] transition-transform duration-500"
            />
            <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-slate-100">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-100 rounded-lg text-green-600">
                  <Heart className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">
                    Focus Area
                  </p>
                  <p className="text-slate-900 font-bold">Wellness</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 gss-content">
            <span className="text-green-600 font-bold tracking-widest text-sm uppercase mb-2 block">
              Wellness Program
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 leading-tight">
              Gerakan <br />
              <span className="text-slate-400 font-normal">Sekolah Sehat</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              Kami percaya bahwa prestasi akademik berawal dari tubuh dan jiwa
              yang sehat. GSS menciptakan ekosistem sekolah yang mendukung
              kesejahteraan fisik dan mental setiap siswa.
            </p>

            <div className="space-y-6 mb-10">
              {[
                {
                  title: "Sehat Mental",
                  desc: "Layanan konseling proaktif & zona anti-bullying.",
                  icon: Heart,
                },
                {
                  title: "Sehat Fisik & Gizi",
                  desc: "Kantin sehat bersertifikasi & program olahraga rutin.",
                  icon: Sparkles, // Using Sparkles as generic 'active' icon
                },
                {
                  title: "Sehat Lingkungan",
                  desc: "Green campus dengan pengelolaan sampah terpadu.",
                  icon: Globe,
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex gap-4 p-4 md:p-5 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 group items-start"
                >
                  <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-green-600 shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg mb-1 group-hover:text-green-700 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <button className="text-slate-600 font-semibold hover:text-green-600 flex items-center gap-2 group transition-colors">
              Lihat Dokumentasi Kegiatan
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
