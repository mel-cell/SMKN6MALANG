"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Handshake,
  Briefcase,
  GraduationCap,
  Users,
  ExternalLink,
} from "lucide-react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const partners = [
  {
    name: "Sekawan Media",
    sector: "Teknologi Informasi & Media",
    description:
      "Perusahaan media terkemuka yang berkolaborasi dengan SMK untuk pengembangan konten digital dan teknologi informasi. Fokus pada pengembangan aplikasi web dan mobile yang inovatif.",
    logo: "https://smkn6malang.sch.id/logosekawan.webp",
    color: "bg-white border-blue-200",
    href: "https://www.sekawanmedia.co.id/en/",
  },
  {
    name: "Honda",
    sector: "Otomotif",
    description:
      "Produsen otomotif global yang bermitra dalam program magang teknik kendaraan ringan dan otomotif. Menyediakan standar kurikulum industri dan pelatihan teknisi profesional.",
    logo: "https://smkn6malang.sch.id/logohonda.webp",
    color: "bg-white border-red-200",
    href: "https://www.astra-honda.com/",
  },
  {
    name: "Konecranes",
    sector: "Peralatan Industri & Permesinan",
    description:
      "Spesialis global dalam solusi pengangkatan dan peralatan industri, berkolaborasi intensif untuk program teknik alat berat dan pemesinan modern.",
    logo: "https://smkn6malang.sch.id/konecranes.webp",
    color: "bg-white border-orange-200",
    href: "https://www.konecranes.com/id",
  },
  {
    name: "Venturo",
    sector: "Teknologi & Software",
    description:
      "Perusahaan teknologi yang mendukung pengembangan software dan sistem informasi di SMK. Menjadi mentor dalam inkubasi startup teknologi siswa.",
    logo: "https://smkn6malang.sch.id/venturo.webp",
    color: "bg-white border-indigo-200",
    href: "https://venturo.id/",
  },
];

const benefits = [
  {
    title: "Penyelarasan Kurikulum",
    icon: <Briefcase className="w-6 h-6 text-emerald-600" />,
    desc: "Materi ajar disesuaikan dengan kebutuhan industri terkini.",
  },
  {
    title: "Guru Tamu Industri",
    icon: <Users className="w-6 h-6 text-emerald-600" />,
    desc: "Praktisi ahli mengajar langsung di dalam kelas.",
  },
  {
    title: "Magang & Penyerapan",
    icon: <GraduationCap className="w-6 h-6 text-emerald-600" />,
    desc: "Jalur prioritas untuk PKL dan rekrutmen tenaga kerja.",
  },
];

export default function MitraIndustriPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Use useLayoutEffect to prevent FOUC and ensure GSAP initializes before paint
  const useIsomorphicLayoutEffect =
    typeof window !== "undefined" ? useLayoutEffect : useEffect;

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Animation - using fromTo to prevent React Strict Mode issues
      gsap.fromTo(
        ".mitra-header",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.3,
          ease: "power2.out",
        }
      );

      // Benefits Animation REMOVED as requested

      // Partners Animation
      const partnersSection =
        containerRef.current?.querySelector(".partners-section");
      if (partnersSection) {
        gsap.fromTo(
          ".partner-card",
          { scale: 0.95, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.5,
            stagger: 0.1,
            scrollTrigger: {
              trigger: partnersSection,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // CTA Animation
      const ctaSection = containerRef.current?.querySelector(".cta-section");
      if (ctaSection) {
        gsap.fromTo(
          ".cta-content",
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            scrollTrigger: {
              trigger: ctaSection,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen pt-20 bg-background font-sans"
    >
      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-slate-50 overflow-hidden relative">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
          <div className="absolute top-1/2 -left-24 w-72 h-72 bg-emerald-100 rounded-full blur-3xl opacity-50"></div>
        </div>

        <div className="container mx-auto px-16 text-center relative z-10">
          <div className="mitra-header opacity-0 translate-y-12">
            <Badge className="mb-2 inline-flex gap-x-2 items-center border-blue-200 font-semibold bg-blue-50 text-blue-700 px-4 py-1 text-sm rounded-sm">
              <Handshake className="w-4 h-4 text-blue-600" />
              PARTNER EKOSISTEM VOKASI
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              Kolaborasi SMK dan <br className="hidden md:block" />
              <span className="text-blue-600">Dunia Industri</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Sinergi strategis untuk meningkatkan kompetensi siswa,
              mempersiapkan mental dunia kerja, dan membuka kesempatan karir
              profesional.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="benefits-section py-12 border-b">
        <div className="container mx-auto px-16">
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((item, idx) => (
              <div
                key={idx}
                className="benefit-item flex items-center gap-4 p-4 rounded-xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all"
              >
                <div className="bg-emerald-50 p-3 rounded-lg shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners List */}
      <section className="partners-section py-20">
        <div className="container mx-auto px-16">
          <div className="mb-12 flex flex-col md:flex-row justify-between items-end gap-4">
            <div>
              <h2 className="text-3xl font-bold mb-2">Daftar Mitra Industri</h2>
              <p className="text-muted-foreground">
                Perusahaan terkemuka yang telah bekerjasama dengan kami.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="partner-card">
                <Card className="relative border-0 pb-0 group shadow-none before:absolute before:inset-0 before:z-10 before:border before:border-gray-200 before:rounded-xl before:transition hover:before:border-2 hover:before:border-blue-600 focus:before:border-2 focus:before:border-blue-600 hover:before:shadow-lg h-full flex flex-col before:pointer-events-none">
                  <CardHeader className="flex flex-row items-start gap-6 pb-4 relative z-20">
                    <div
                      className={`h-20 w-20 p-2 rounded-2xl border ${partner.color} shrink-0 group-hover:scale-105 transition-transform duration-300 flex items-center justify-center overflow-hidden`}
                    >
                      <Image
                        src={partner.logo}
                        alt={partner.name}
                        width={80}
                        height={80}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div>
                      <Badge variant="secondary" className="mb-2">
                        {partner.sector}
                      </Badge>
                      <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {partner.name}
                      </h3>
                    </div>
                  </CardHeader>
                  <CardContent className="relative z-20">
                    <p className="text-muted-foreground leading-relaxed">
                      {partner.description}
                    </p>
                  </CardContent>
                  <CardFooter className="pt-2 pb-6 border-t bg-slate-50/50 mx-[1.5px] mt-auto relative z-20">
                    <a className="w-full" target="_blank" href={partner.href}>
                      <Button
                        variant="ghost"
                        className="w-full cursor-pointer justify-between text-slate-600 hover:text-blue-600 group/btn"
                      >
                        Lihat Profil Industri
                        <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </a>
                  </CardFooter>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section py-20 bg-slate-900 text-white relative overflow-hidden">
        {/* Abstract shapes */}
        <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-blue-600/20 to-transparent skew-x-12 translate-x-20"></div>

        <div className="container mx-auto px-16 relative z-10 text-center">
          <div className="cta-content max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ingin Menjadi Bagian dari Mitra Kami?
            </h2>
            <p className="text-slate-300 text-lg mb-10 leading-relaxed">
              Kami membuka peluang kerjasama seluas-luasnya bagi dunia usaha dan
              dunia industri (DUDI) untuk bersama-sama memajukan pendidikan
              vokasi di Indonesia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-blue-600 cursor-pointer hover:bg-blue-700 text-white rounded-sm px-8! h-12 text-base"
              >
                Ajukan Kerjasama
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="px-8! h-12 cursor-pointer text-base border border-slate-300 text-black"
              >
                Lihat Program Magang <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
