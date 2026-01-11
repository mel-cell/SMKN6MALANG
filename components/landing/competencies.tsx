"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowRight,
  ChevronDown,
  Cog,
  Monitor,
  Palette,
  Wifi,
  Wrench,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";
import { Badge } from "../ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "../ui/card";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "../ui/button";

gsap.registerPlugin(ScrollTrigger);

const competencies = [
  {
    id: 1,
    icon: <Monitor className="h-8 w-8" />,
    title: "Rekayasa Perangkat Lunak",
    subtitle: "Software Engineering",
    description:
      "Mempelajari pengembangan perangkat lunak, pemrograman web, aplikasi mobile, dan basis data untuk menghasilkan solusi teknologi yang efisien.",
    image: "programming-home.jpg",
    color: "from-blue-500 to-blue-600",
    hoverColor: "group-hover:bg-blue-500",
    bgColor: "bg-blue-50",
    accentColor: "text-blue-600",
    href: "/kompetensi/rpl",
  },
  {
    id: 2,
    icon: <Wifi className="h-8 w-8" />,
    title: "Teknik Kendaraan Ringan",
    subtitle: "Light Vehicle Engineering",
    description:
      "Fokus pada kompetensi perawatan dan perbaikan kendaraan ringan, diagnosa kerusakan mesin, serta pemeliharaan sistem otomotif standar industri.",
    image: "mechanic-home.jpg",
    color: "from-red-500 to-red-600",
    hoverColor: "group-hover:bg-red-500",
    bgColor: "bg-red-50",
    accentColor: "text-red-600",
    href: "/kompetensi/tkr",
  },
  {
    id: 3,
    icon: <Palette className="h-8 w-8" />,
    title: "Desain Pemodelan Info Bangunan",
    subtitle: "BIM Design",
    description:
      "Mendalami teknik perencanaan, penggambaran konstruksi, dan pemodelan bangunan 2D/3D menggunakan perangkat lunak arsitektur modern.",
    image: "architect-home.jpg",
    color: "from-amber-500 to-amber-600",
    hoverColor: "group-hover:bg-amber-500",
    bgColor: "bg-amber-50",
    accentColor: "text-amber-600",
    href: "/kompetensi/dpib",
  },
  {
    id: 4,
    icon: <Cog className="h-8 w-8" />,
    title: "Teknik Instalasi Tenaga Listrik",
    subtitle: "Electrical Installation",
    description:
      "Mempelajari instalasi penerangan, distribusi tenaga listrik, dan sistem otomatisasi industri sesuai dengan standar keamanan kelistrikan.",
    image: "electrician-home.jpg",
    color: "from-yellow-500 to-yellow-600",
    hoverColor: "group-hover:bg-yellow-500",
    bgColor: "bg-yellow-50",
    accentColor: "text-yellow-600",
    href: "/kompetensi/titl",
  },
  {
    id: 5,
    icon: <Wrench className="h-8 w-8" />,
    title: "Teknik Permesinan",
    subtitle: "Machining",
    description:
      "Menguasai proses manufaktur, pengoperasian mesin perkakas konvensional, dan pemrograman mesin CNC untuk pembuatan komponen presisi.",
    image: "machinery-home.jpg",
    color: "from-slate-600 to-slate-700",
    hoverColor: "group-hover:bg-slate-600",
    bgColor: "bg-slate-50",
    accentColor: "text-slate-600",
    href: "/kompetensi/tpm",
  },
  {
    id: 6,
    icon: <Zap className="h-8 w-8" />,
    title: "Otomotif Elektronik",
    subtitle: "Kendaraan",
    description:
      "Spesialisasi dalam analisis sistem kelistrikan bodi, manajemen mesin elektronik (ECU), dan teknologi kendaraan modern.",
    image:
      "https://images.unsplash.com/photo-1632405862117-236585cfb757?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    color: "from-red-600 to-red-700",
    hoverColor: "group-hover:bg-red-600",
    bgColor: "bg-red-50",
    accentColor: "text-red-600",
    href: "/kompetensi/oto",
  },
];

export function CompetenciesSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate grid items
      gsap.from(".masonry-item", {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="kompetensi" className="py-24 bg-slate-50">
      <div className="container mx-auto px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <Badge className="mb-6 border-blue-200 font-semibold bg-blue-50 text-blue-700 px-4 py-1 text-sm rounded-sm">
            JURUSAN KAMI
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Kompetensi Keahlian
          </h2>
          <p className="text-muted-foreground text-lg">
            Pilihan program keahlian yang relevan dengan kebutuhan industri masa
            kini dan masa depan.
          </p>
        </motion.div>

        {/* Masonry Layout: Uses CSS columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {competencies.map((item, index) => (
            <div key={index} className="facility-card">
              <Card className="relative border-0 group shadow-none before:absolute before:inset-0 before:z-10 before:border before:border-gray-200 before:rounded-xl before:transition hover:before:border-2 hover:before:border-blue-600 focus:before:border-2 focus:before:border-blue-600 hover:before:shadow-lg h-full flex flex-col before:pointer-events-none pt-0 overflow-hidden">
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-x-3">
                    <div
                      className={cn(
                        `size-16 rounded-2xl flex items-center justify-center group-hover:text-white transition-colors duration-300`,
                        item.hoverColor,
                        item.bgColor
                      )}
                    >
                      <div
                        className={cn(
                          "group-hover:text-white transition-colors duration-300",
                          item.accentColor
                        )}
                      >
                        {item.icon}
                      </div>
                    </div>{" "}
                    <CardTitle className="text-lg font-bold">
                      {item.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href={item.href}>
                    <Button
                      variant="link"
                      className="p-0 text-blue-600 cursor-pointer font-semibold group-hover:underline"
                    >
                      Pelajari Selengkapnya{" "}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          ))}{" "}
        </div>
        <div className="flex justify-center w-full">
          {/* <Link href="/tentang-sekolah">
            <Button
              size="lg"
              className="bg-red-600 cursor-pointer hover:bg-red-700 shadow-lg shadow-red-300 text-white rounded-sm px-8! h-12 text-base"
            >
              Lihat Semua Jurusan <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link> */}
        </div>
      </div>
    </section>
  );
}
