"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Calendar,
  User,
  Clock,
  Share2,
  ArrowLeft,
  Tag,
  ArrowRight,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Link from "next/link";
import { generatePosts } from "../page";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function BlogPostDetail() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header Animation
      gsap.from(".article-header", {
        y: 50,
        opacity: 0,
        duration: 1.3,
        ease: "power2.out",
      });

      // Featured Image Animation
      gsap.from(".featured-image", {
        scale: 0.95,
        opacity: 0,
        duration: 0.6,
        delay: 0.2,
        ease: "power2.out",
      });

      // Content Body Animation
      gsap.from(".article-content", {
        y: 20,
        opacity: 0,
        duration: 0.6,
        delay: 0.3,
        ease: "power2.out",
      });

      // Related Posts Animation
      gsap.from(".related-post-card", {
        y: 30,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".related-posts-section",
          start: "top 80%",
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
      {/* Breadcrumb / Back */}
      <div className="container mx-auto px-16 mt-12 mb-8">
        <Link
          href="/blog"
          className="inline-flex items-center text-muted-foreground hover:text-blue-600 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> Kembali ke Blog
        </Link>
      </div>

      {/* Article Header */}
      <section className="article-header container mx-auto px-16 max-w-4xl text-center mb-12">
        <div className="flex items-center justify-center gap-2 mb-6">
          <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 border-none px-3 py-1">
            Teknologi
          </Badge>
          <Badge
            variant="outline"
            className="text-muted-foreground border-slate-300 px-3 py-1"
          >
            Workshop
          </Badge>
        </div>
        <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
          Pelatihan Coding untuk Pemula: Membangun Web Dasar (Part 1)
        </h1>
        <div className="flex flex-wrap items-center justify-center gap-6 text-muted-foreground text-sm md:text-base">
          <div className="flex items-center gap-2">
            <User className="w-4 h-4" />
            <span>Tim IT SMKN 6</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>12 Mei 2025</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>5 Menit Baca</span>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="featured-image container mx-auto px-16 max-w-5xl mb-12">
        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl">
          <Image
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop"
            alt="Coding Workshop"
            className="object-cover w-full h-full"
          />
        </div>
      </section>

      {/* Content Body */}
      <section className="article-content container mx-auto px-16 max-w-3xl mb-20">
        <div className="prose prose-lg prose-slate max-w-none text-slate-700 leading-relaxed">
          <p className="lead text-xl text-slate-600 mb-8 font-medium">
            Dalam rangka mempersiapkan siswa menghadapi era digital 4.0, SMK
            Negeri 6 Malang menyelenggarakan workshop intensif pengenalan
            pemrograman web bagi siswa kelas X semua jurusan.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Mengapa Coding Itu Penting?
          </h2>
          <p>
            Di era modern ini, kemampuan <em>computational thinking</em> menjadi
            salah satu <em>soft skill</em> yang sangat dibutuhkan. Tidak hanya
            bagi mereka yang berada di jurusan Rekayasa Perangkat Lunak (RPL),
            pemahaman dasar tentang bagaimana sebuah website bekerja dapat
            membantu siswa dari jurusan lain dalam memecahkan masalah secara
            logis dan sistematis.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Materi yang Dipelajari
          </h2>
          <p>
            Pada sesi pertama ini, peserta diajak untuk mengenal struktur dasar
            pembentuk website:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>
              <strong>HTML5 (HyperText Markup Language)</strong>: Sebagai
              kerangka utama sebuah halaman web.
            </li>
            <li>
              <strong>CSS3 (Cascading Style Sheets)</strong>: Untuk mempercantik
              tampilan dan layout.
            </li>
            <li>
              <strong>Pengenalan VS Code</strong>: Editor teks yang powerful
              untuk menulis kode.
            </li>
          </ul>

          <div className="bg-slate-100 p-6 rounded-xl border-l-4 border-blue-600 my-8 italic text-slate-600">
            &quot;Coding bukan hanya tentang mengetik baris kode yang rumit,
            tapi tentang seni mengubah ide menjadi kenyataan digital.&quot;
            <br />
            <span className="font-bold not-italic mt-2 block text-slate-800">
              - Bpk. Haris, Pemateri Workshop
            </span>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Antusiasme Peserta
          </h2>
          <p>
            Acara yang digelar di Laboratorium RPL 1 ini diikuti oleh 50 siswa
            terpilih. Mereka tampak antusias saat berhasil memunculkan tulisan
            &quot;Hello World&quot; pertama mereka di browser. Beberapa siswa
            bahkan sudah mulai bereksperimen dengan mengubah warna latar
            belakang dan menambahkan gambar.
          </p>
          <p>
            Workshop ini akan berlanjut ke <strong>Part 2</strong> minggu depan,
            dimana siswa akan mulai belajar membuat website profil diri yang
            responsif agar bisa diakses melalui smartphone.
          </p>
        </div>

        {/* Tags & Share */}
        <div className="mt-12 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Tag className="w-4 h-4 text-muted-foreground" />
            <div className="flex gap-2">
              <Badge
                variant="secondary"
                className="cursor-pointer hover:bg-slate-200"
              >
                HTML
              </Badge>
              <Badge
                variant="secondary"
                className="cursor-pointer hover:bg-slate-200"
              >
                CSS
              </Badge>
              <Badge
                variant="secondary"
                className="cursor-pointer hover:bg-slate-200"
              >
                Pendidikan
              </Badge>
            </div>
          </div>
          <Button
            variant="outline"
            className="gap-2 cursor-pointer rounded-full"
          >
            <Share2 className="w-4 h-4" /> Bagikan Artikel
          </Button>
        </div>
      </section>

      {/* Related Posts */}
      <section className="related-posts-section bg-slate-50 py-16">
        <div className="container mx-auto px-16 max-w-5xl">
          <h3 className="text-2xl font-bold mb-8">Artikel Terkait</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {generatePosts(3).map((item) => (
              <div key={item.id} className="blog-post-card">
                <Card className="relative border-0 group shadow-none before:absolute before:inset-0 before:z-10 before:border before:border-gray-200 before:rounded-xl before:transition hover:before:border-2 hover:before:border-blue-600 focus:before:border-2 focus:before:border-blue-600 hover:before:shadow-lg h-full flex flex-col before:pointer-events-none pt-0 overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <Badge className="absolute top-4 left-4 bg-white/90 text-blue-700 hover:bg-white border-none shadow-sm backdrop-blur-sm z-20">
                      {item.category}
                    </Badge>
                  </div>
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{item.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="w-3.5 h-3.5" />
                        <span>{item.author}</span>
                      </div>
                    </div>
                    <Link
                      href="#"
                      className="hover:text-blue-600 transition-colors relative z-20"
                    >
                      <h3 className="text-xl font-bold line-clamp-2 leading-tight">
                        {item.title}
                      </h3>
                    </Link>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-muted-foreground text-sm line-clamp-3">
                      {item.excerpt}
                    </p>
                  </CardContent>
                  <CardFooter className="pt-0">
                    <Link
                      href="/blog/pelatihan-coding-pemula"
                      className="relative z-20"
                    >
                      <Button
                        variant="link"
                        className="p-0 text-blue-600 font-semibold h-auto group-hover:underline"
                      >
                        Baca Selengkapnya{" "}
                        <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
