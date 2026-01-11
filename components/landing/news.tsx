"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

gsap.registerPlugin(ScrollTrigger);

const news = [
  {
    id: 1,
    title: "Juara 1 LKS Tingkat Provinsi Bidang IT Network",
    date: "12 Mei 2024",
    category: "Prestasi",
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop",
    excerpt:
      "Siswa SMK Negeri 6 Malang kembali memperoleh prestasi gemilang di ajang Lomba Kompetensi Siswa tingkat provinsi.",
  },
  {
    id: 2,
    title: "Kunjungan Industri ke PT. Telekomunikasi Indonesia",
    date: "20 April 2024",
    category: "Kegiatan",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
    excerpt:
      "Untuk memperluas wawasan dunia kerja, siswa jurusan TKJ melakukan kunjungan industri ke kantor pusat Telkom.",
  },
  {
    id: 3,
    title: "Workshop Kewirausahaan Digital untuk Gen-Z",
    date: "05 April 2024",
    category: "Workshop",
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2032&auto=format&fit=crop",
    excerpt:
      "Membangun mental entrepreneurship sejak dini melalui workshop digital marketing dan startup.",
  },
];

export function NewsSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".news-header", {
        y: 20,
        opacity: 0,
        duration: 0.6,
        scrollTrigger: {
          trigger: ".news-header",
          start: "top 80%",
        },
      });

      gsap.from(".news-item", {
        y: 30,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".news-grid",
          start: "top 80%",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="blog" className="py-24 bg-slate-50">
      <div className="container mx-auto px-16">
        <div className="news-header flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-2">Berita & Agenda Terbaru</h2>
            <p className="text-muted-foreground">
              Ikuti perkembangan terkini dari kampus SMK Negeri 6 Malang
            </p>
          </div>
          <Link href="/blog">
            <Button variant="outline" className="hidden cursor-pointer md:flex">
              Lihat Semua Berita
            </Button>
          </Link>
        </div>

        <div className="news-grid grid grid-cols-1 md:grid-cols-3 gap-8 news-block-selector">
          {news.map((item, index) => (
            <div key={item.id} className="news-item">
              <div className="relative border-0 group shadow-none before:absolute before:inset-0 before:z-10 before:border before:border-gray-200 before:rounded-xl before:transition hover:before:border-2 hover:before:border-blue-600 focus:before:border-2 focus:before:border-blue-600 hover:before:shadow-lg h-full flex flex-col before:pointer-events-none overflow-hidden rounded-xl bg-white">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-blue-600 shadow-sm z-20">
                    {item.category}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1 relative z-20">
                  <div className="text-xs text-muted-foreground mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
                    {item.date}
                  </div>
                  <h3 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-6 line-clamp-3 flex-1">
                    {item.excerpt}
                  </p>
                  <Link
                    href="#"
                    className="inline-flex items-center text-sm font-bold text-blue-600 hover:underline"
                  >
                    Baca Selengkapnya <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center md:hidden">
          <Button variant="outline" className="w-full">
            Lihat Semua Berita
          </Button>
        </div>
      </div>
    </section>
  );
}
