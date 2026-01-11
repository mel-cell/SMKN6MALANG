"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Medal, Award, Star, Crown } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function PrestasiPage() {
  const containerRef = useRef(null);

  const achievements = [
    {
      name: "Zahran Zaidan Nasution",
      title: "Juara 4 LKS Web Technology",
      year: "2025",
      desc: "Meraih juara dalam Lomba Kompetensi Siswa (LKS) bidang pengembangan website.",
      icon: <Trophy className="text-yellow-500 w-6 h-6" />,
      bgIcon: "bg-yellow-50",
    },
    {
      name: "Ahmad Rifai'i",
      title: "Juara 5 LKS Web Technology",
      year: "2024",
      desc: "Meraih juara dalam Lomba Kompetensi Siswa (LKS) bidang pengembangan website.",
      icon: <Trophy className="text-yellow-500 w-6 h-6" />,
      bgIcon: "bg-yellow-50",
    },
    {
      name: "Vanya Namira Aisyah",
      title: "Juara 4 LKS I.T Software Solution",
      year: "2024",
      desc: "Kompetisi solusi perangkat lunak bisnis tingkat daerah.",
      icon: <Trophy className="text-yellow-500 w-6 h-6" />,
      bgIcon: "bg-yellow-50",
    },
    {
      name: "Abdullah Taqiuddin Nashir",
      title: "Juara 1 Asia Layouting Competition",
      year: "2024",
      desc: "Meraih juara dalam Asia Layouting Competition dalam bidang desain aplikasi.",
      icon: <Trophy className="text-yellow-500 w-6 h-6" />,
      bgIcon: "bg-yellow-50",
    },
    {
      name: "Fadhil Sabri Irawan",
      title: "Juara 1 Asia Layouting Competition",
      year: "2024",
      desc: "Meraih juara dalam Asia Layouting Competition dalam bidang desain aplikasi.",
      icon: <Trophy className="text-yellow-500 w-6 h-6" />,
      bgIcon: "bg-yellow-50",
    },
    {
      name: "Wulan Febi Arianti",
      title: "Juara 1 Asia Layouting Competition",
      year: "2024",
      desc: "Meraih juara dalam Asia Layouting Competition dalam bidang desain aplikasi.",
      icon: <Trophy className="text-yellow-500 w-6 h-6" />,
      bgIcon: "bg-yellow-50",
    },
    // {
    //   name: "Bunga Melati",
    //   title: "Medali Emas Olimpiade Sains Nasional (OSN)",
    //   year: "2023",
    //   desc: "Memenangkan medali emas untuk mata pelajaran Fisika Terapan.",
    //   icon: <Medal className="text-amber-500 w-6 h-6" />,
    //   bgIcon: "bg-amber-50",
    // },
    // {
    //   name: "Candra Kirana",
    //   title: "Juara 3 Kompetisi IoT Nasional",
    //   year: "2024",
    //   desc: "Inovasi Internet of Things (IoT) yang diadakan oleh Kementerian Industri.",
    //   icon: <Award className="text-blue-500 w-6 h-6" />,
    //   bgIcon: "bg-blue-50",
    // },
    // {
    //   name: "Daffa Ramadhan",
    //   title: "Finalis FLS2N Desain Grafis",
    //   year: "2023",
    //   desc: "Festival dan Lomba Seni Siswa Nasional kategori Desain Grafis.",
    //   icon: <Star className="text-purple-500 w-6 h-6" />,
    //   bgIcon: "bg-purple-50",
    // },
    // {
    //   name: "Erika Putri",
    //   title: "Juara Harapan 1 Debate Bahasa Inggris",
    //   year: "2022",
    //   desc: "Lomba debat Bahasa Inggris tingkat kota/kabupaten.",
    //   icon: <Award className="text-blue-500 w-6 h-6" />,
    //   bgIcon: "bg-blue-50",
    // },
    // {
    //   name: "Fajar Wicaksono",
    //   title: "Lolos Seleksi Duta Lingkungan Provinsi",
    //   year: "2024",
    //   desc: "Terpilih sebagai Duta Lingkungan berkat proyek pengelolaan sampah.",
    //   icon: <Crown className="text-green-500 w-6 h-6" />,
    //   bgIcon: "bg-green-50",
    // },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header Animation
      gsap.from(".prestasi-header", {
        y: 50,
        opacity: 0,
        duration: 1.3,
        ease: "power2.out",
      });

      // Floating Trophy
      gsap.to(".floating-trophy", {
        y: -20,
        rotation: 10,
        repeat: -1,
        yoyo: true,
        duration: 5,
        ease: "sine.inOut",
      });

      // Achievements List Animation
      gsap.from(".achievement-card", {
        x: -20,
        opacity: 0,
        duration: 0.4,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".achievements-grid",
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
      {/* Abstract Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-20 right-20 w-64 h-64 bg-yellow-100 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-40"></div>
      </div>

      <section className="py-12 md:py-20">
        <div className="container mx-auto px-16 text-center relative">
          {/* Floating Trophy Animation */}
          <div className="floating-trophy absolute top-0 left-1/4 text-yellow-400 opacity-20 hidden md:block">
            <Trophy className="w-32 h-32" />
          </div>

          <div className="prestasi-header">
            <Badge className="mb-6 inline-flex gap-x-2 items-center border-blue-200 font-semibold bg-blue-50 text-blue-700 px-4 py-1 text-sm rounded-sm">
              <Trophy className="w-4 h-4 text-blue-600" />
              HALL OF FAME
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Prestasi Siswa
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Bukti nyata kualitas pendidikan dan dedikasi siswa SMK Negeri 6
              Malang dalam berbagai kompetisi.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-16 max-w-5xl relative">
          {/* Confetti decoration */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10 opacity-30">
            {/* Use simple SVGs for decorations to avoid extra deps */}
            <svg
              className="absolute top-10 left-10 w-10 h-10 text-blue-400 animate-bounce"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <svg
              className="absolute bottom-10 right-10 w-8 h-8 text-yellow-400 animate-spin-slow"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          </div>

          <div className="achievements-grid grid gap-6">
            {achievements.map((item, index) => (
              <div key={index} className="achievement-card">
                <Card className="relative border-0 group shadow-sm hover:shadow-lg transition-all duration-300 before:absolute before:inset-0 before:z-10 before:border before:border-gray-200 before:rounded-xl hover:before:border-blue-400 bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-6 flex flex-col md:flex-row items-start md:items-center gap-6 relative z-20">
                    <div
                      className={`${item.bgIcon} p-4 rounded-full shrink-0 border border-slate-100 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <div className="flex items-center justify-center">
                        {item.icon}
                      </div>
                    </div>
                    <div className="flex-1 w-full">
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                        <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                          {item.title}
                        </h3>
                        <Badge
                          variant="secondary"
                          className="w-fit mt-2 md:mt-0 bg-slate-100 text-slate-600 border-slate-200"
                        >
                          {item.year}
                        </Badge>
                      </div>
                      <p className="font-semibold text-blue-600 mb-2 flex items-center gap-2">
                        <span className="w-1 h-1 bg-blue-600 rounded-full"></span>
                        {item.name}
                      </p>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
