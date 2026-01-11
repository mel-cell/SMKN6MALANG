"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const ekskulData = [
  {
    category: "Kerohanian",
    items: [
      {
        name: "Rohis (Rohani Islam)",
        slug: "rohis",
        img: "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?q=80&w=2070&auto=format&fit=crop",
        jadwal: "Data Menyusul",
        pembimbing: "Data Menyusul",
      },
      {
        name: "BDI (Badan Dakwah Islam)",
        slug: "bdi",
        img: "https://images.unsplash.com/photo-1728293955057-a36dcf226bdd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        jadwal: "Data Menyusul",
        pembimbing: "Data Menyusul",
      },
    ],
  },
  {
    category: "Kepemimpinan & Organisasi",
    items: [
      {
        name: "OSIS",
        slug: "osis",
        img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop",
        jadwal: "Data Menyusul",
        pembimbing: "Data Menyusul",
      },
      {
        name: "Paskibra",
        slug: "paskibra",
        img: "https://images.unsplash.com/photo-1566411084986-ce3d90cec36f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        jadwal: "Data Menyusul",
        pembimbing: "Data Menyusul",
      },
      {
        name: "Pramuka",
        slug: "pramuka",
        img: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?q=80&w=2070&auto=format&fit=crop",
        jadwal: "Data Menyusul",
        pembimbing: "Data Menyusul",
      },
    ],
  },
  {
    category: "Olah Raga",
    items: [
      {
        name: "Futsal",
        slug: "futsal",
        img: "https://images.unsplash.com/photo-1552667466-07770ae110d0?q=80&w=2070&auto=format&fit=crop",
        jadwal: "Data Menyusul",
        pembimbing: "Data Menyusul",
      },
      {
        name: "Basket",
        slug: "basket",
        img: "https://images.unsplash.com/photo-1518063319789-7217e6706b04?q=80&w=2070&auto=format&fit=crop",
        jadwal: "Data Menyusul",
        pembimbing: "Data Menyusul",
      },
      {
        name: "Voli",
        slug: "voli",
        img: "https://images.unsplash.com/photo-1592656094267-764a45160876?q=80&w=2070&auto=format&fit=crop",
        jadwal: "Data Menyusul",
        pembimbing: "Data Menyusul",
      },
      {
        name: "Pencak Silat (Merpati Putih)",
        slug: "pencak-silat",
        img: "https://images.unsplash.com/photo-1738835934988-ed0d238e8299?q=80&w=1334&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        jadwal: "Data Menyusul",
        pembimbing: "Data Menyusul",
      },
      {
        name: "Karate",
        slug: "karate",
        img: "https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&w=2070&auto=format&fit=crop",
        jadwal: "Data Menyusul",
        pembimbing: "Data Menyusul",
      },
      {
        name: "Sepak Bola",
        slug: "sepak-bola",
        img: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?q=80&w=2070&auto=format&fit=crop",
        jadwal: "Data Menyusul",
        pembimbing: "Data Menyusul",
      },
      {
        name: "Badminton",
        slug: "badminton",
        img: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        jadwal: "Data Menyusul",
        pembimbing: "Data Menyusul",
      },
    ],
  },
  {
    category: "Seni & Budaya",
    items: [
      {
        name: "Seni Musik dan Vokal",
        slug: "seni-musik",
        img: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=2070&auto=format&fit=crop",
        jadwal: "Data Menyusul",
        pembimbing: "Data Menyusul",
      },
      {
        name: "Seni Tari",
        slug: "tari-tradisional",
        img: "https://images.unsplash.com/photo-1535525153412-5a42439a210d?q=80&w=2070&auto=format&fit=crop",
        jadwal: "Data Menyusul",
        pembimbing: "Data Menyusul",
      },
      {
        name: "Seni Lukis dan Patung",
        slug: "seni-lukis",
        img: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=2000&auto=format&fit=crop",
        jadwal: "Data Menyusul",
        pembimbing: "Data Menyusul",
      },
      {
        name: "Al Banjari",
        slug: "al-banjari",
        img: "https://images.unsplash.com/photo-1519730722595-a5ff788dea4d?q=80&w=2070&auto=format&fit=crop",
        jadwal: "Data Menyusul",
        pembimbing: "Data Menyusul",
      },
      {
        name: "Multimedia (Foto & Videografi)",
        slug: "multimedia-seni",
        img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=2000&auto=format&fit=crop",
        jadwal: "Data Menyusul",
        pembimbing: "Data Menyusul",
      },
    ],
  },
  {
    category: "Sains & Teknologi",
    items: [
      {
        name: "Karya Ilmiah Remaja (KIR)",
        slug: "kir",
        img: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format&fit=crop",
        jadwal: "Data Menyusul",
        pembimbing: "Data Menyusul",
      },
      {
        name: "Eco Smart",
        slug: "eco-smart",
        img: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2013&auto=format&fit=crop",
        jadwal: "Data Menyusul",
        pembimbing: "Data Menyusul",
      },
      {
        name: "IT Cos (Teknologi Informasi)",
        slug: "it-cos",
        img: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop",
        jadwal: "Data Menyusul",
        pembimbing: "Data Menyusul",
      },
      {
        name: "Multimedia",
        slug: "multimedia",
        img: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2070&auto=format&fit=crop",
        jadwal: "Data Menyusul",
        pembimbing: "Data Menyusul",
      },
      {
        name: "Klub Matematika",
        slug: "klub-matematika",
        img: "https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=2070&auto=format&fit=crop",
        jadwal: "Data Menyusul",
        pembimbing: "Data Menyusul",
      },
    ],
  },
  {
    category: "Bahasa",
    items: [
      {
        name: "Bahasa Inggris",
        slug: "bahasa-inggris",
        img: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop",
        jadwal: "Data Menyusul",
        pembimbing: "Data Menyusul",
      },
    ],
  },
  {
    category: "Kemanusiaan & Lainnya",
    items: [
      {
        name: "PMR (Palang Merah Remaja)",
        slug: "pmr",
        img: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=2000&auto=format&fit=crop",
        jadwal: "Data Menyusul",
        pembimbing: "Data Menyusul",
      },
      {
        name: "Pecinta Alam (Palasena)",
        slug: "palasena",
        img: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=2070&auto=format&fit=crop",
        jadwal: "Data Menyusul",
        pembimbing: "Data Menyusul",
      },
      {
        name: "Catur",
        slug: "catur",
        img: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?q=80&w=2070&auto=format&fit=crop",
        jadwal: "Data Menyusul",
        pembimbing: "Data Menyusul",
      },
      {
        name: "Jurnalistik",
        slug: "jurnalistik",
        img: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=2070&auto=format&fit=crop",
        jadwal: "Data Menyusul",
        pembimbing: "Data Menyusul",
      },
    ],
  },
];

export default function EkstrakurikulerPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header Animation
      gsap.from(".ekskul-header", {
        y: 50,
        opacity: 0,
        duration: 1.3,
        ease: "power2.out",
      });

      // Stagger animations for each category section
      ekskulData.forEach((_, idx) => {
        gsap.from(`.ekskul-category-${idx} .ekskul-item`, {
          scale: 0.9,
          opacity: 0,
          duration: 0.4,
          stagger: 0.1,
          scrollTrigger: {
            trigger: `.ekskul-category-${idx}`,
            start: "top 85%",
          },
        });
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
          <div className="ekskul-header">
            <Badge className="mb-4 border-blue-200 font-semibold bg-blue-50 text-blue-700 px-4 py-1 text-sm rounded-sm">
              PENGEMBANGAN DIRI
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Ekstrakurikuler
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Wadah pengembangan minat dan bakat siswa di luar kegiatan
              akademik.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-16">
          {ekskulData.map((category, catIdx) => (
            <div
              key={catIdx}
              className={`ekskul-category-${catIdx} mb-16 last:mb-0`}
            >
              <h2 className="text-2xl font-bold mb-8 pl-4 border-l-4 border-blue-600">
                {category.category}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((item, idx) => (
                  <div key={idx} className="ekskul-item">
                    <Link href={`/ekstrakurikuler/${item.slug}`}>
                      <Card className="relative group shadow-none p-0 cursor-pointer">
                        <div className="h-56 overflow-hidden relative rounded-xl">
                          <Image
                            src={item.img}
                            alt={item.name}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-6">
                            <h3 className="text-white text-xl font-bold mb-1">
                              {item.name}
                            </h3>
                            <div className="flex flex-col gap-1 text-white/80 text-xs mt-2">
                              <div className="flex items-center gap-2">
                                <span className="font-semibold text-white/90">
                                  Jadwal:
                                </span>
                                {item.jadwal}
                              </div>
                              <div className="flex items-center gap-2">
                                <span className="font-semibold text-white/90">
                                  Pembimbing:
                                </span>
                                {item.pembimbing}
                              </div>
                            </div>
                          </div>
                        </div>
                      </Card>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
