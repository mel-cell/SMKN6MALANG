"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Search, Calendar, User, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

gsap.registerPlugin(ScrollTrigger);

// Dummy Data Generator
export const generatePosts = (count: number) => {
  const categories = [
    "Teknologi",
    "Prestasi",
    "Kegiatan",
    "Pengumuman",
    "Artikel",
  ];
  const authors = ["Admin Sekolah", "Tim Jurnalistik", "Humas SMKN 6", "Osis"];
  const images = [
    "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070&auto=format&fit=crop",
  ];

  return Array.from({ length: count }).map((_, i) => ({
    id: i + 1,
    title:
      [
        "Pelatihan Coding untuk Pemula: Membangun Web Dasar",
        "Siswa SMKN 6 Malang Juarai LKS Tingkat Provinsi",
        "Kunjungan Industri ke PT Telkom Indonesia",
        "Penerimaan Peserta Didik Baru (PPDB) Tahun 2025",
        "Tips Menjaga Kesehatan Mental di Lingkungan Sekolah",
        "Workshop Internet of Things (IoT) Bersama Expert",
        "Perayaan Hari Guru Nasional Berlangsung Meriah",
        "Sosialisasi Bahaya Narkoba oleh BNN Kota Malang",
        "Prestasi Membanggakan Tim Robotika di Kancah Nasional",
        "Pentingnya Soft Skill di Dunia Kerja Industri 4.0",
        "Recruitment Day: Gandeng 20 Perusahaan Besar",
        "Kegiatan Jumat Bersih: Wujudkan Sekolah Adiwiyata",
        "Ujian Kompetensi Keahlian (UKK) Berjalan Lancar",
        "Alumni SMKN 6 Sukses Berkarir di Jerman",
        "Update Teknologi: Mengenal Cloud Computing",
        "Lomba Video Kreatif Profil Jurusan",
        "Bakti Sosial Osis di Panti Asuhan",
        "Seminar Kewirausahaan Digital untuk Gen Z",
        "Ekstrakurikuler Paskibra Raih Juara Umum",
        "Jadwal Ujian Tengah Semester Genap",
        "Tutorial Menggunakan Framework React JS",
        "Mengenal Jurusan Baru: Teknik Alat Berat",
        "Kerjasama Baru dengan Industri Manufaktur Jepang",
        "Gebyar Seni dan Budaya Siswa",
        "Pelantikan Pengurus OSIS Periode Baru",
      ][i % 25] + ` (Part ${Math.floor(i / 25) + 1})`,
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    date: new Date(2024, 0, 1 + i).toLocaleDateString("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }),
    category: categories[i % categories.length],
    author: authors[i % authors.length],
    image: images[i % images.length],
  }));
};

const allPosts = generatePosts(40); // Generate 40 posts

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const containerRef = useRef<HTMLDivElement>(null);

  // Filter Posts
  const filteredPosts = useMemo(() => {
    return allPosts.filter(
      (post) =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  // Pagination Logic
  const totalPages = Math.ceil(filteredPosts.length / itemsPerPage);
  const currentPosts = filteredPosts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1); // Reset to page 1 on search
  };

  // Header Animation (Runs once on mount)
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".blog-header", {
        y: 50,
        opacity: 0,
        duration: 1.3,
        ease: "power2.out",
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  // Posts Animation (Runs on mount and when currentPosts changes)
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Ensure elements are visible before animating if they were hidden by previous unmount logic
      gsap.set(".blog-post-card", { opacity: 1 });

      gsap.from(".blog-post-card", {
        y: 20,
        opacity: 0,
        duration: 0.4,
        stagger: 0.05,
        ease: "power2.out",
        clearProps: "all", // Cleans up inline styles after animation prevents conflict
      });
    }, containerRef);
    return () => ctx.revert();
  }, [currentPosts]);

  return (
    <div
      ref={containerRef}
      className="min-h-screen pt-20 bg-background font-sans"
    >
      {/* Header Section */}
      <section className="py-12 md:py-20 bg-slate-50">
        <div className="container mx-auto px-16 text-center">
          <div className="blog-header">
            <Badge className="mb-4 border-blue-200 font-semibold bg-blue-50 text-blue-700 px-4 py-1 text-sm rounded-sm">
              BLOG & BERITA
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Kabar Terbaru Sekolah
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Ikuti perkembangan terkini, prestasi siswa, dan artikel edukatif
              dari SMK Negeri 6 Malang.
            </p>

            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                type="text"
                placeholder="Cari berita atau artikel..."
                className="pl-10 h-12 rounded-md border-slate-300 focus-visible:ring-blue-600 bg-white shadow-sm"
                value={searchQuery}
                onChange={handleSearch}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16">
        <div className="container mx-auto px-16">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-muted-foreground">
                Tidak ada artikel yang ditemukan.
              </p>
              <Button
                variant="link"
                onClick={() => setSearchQuery("")}
                className="mt-2 text-blue-600"
              >
                Reset Pencarian
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {currentPosts.map((post, index) => (
                <div key={post.id} className="blog-post-card">
                  <Card className="relative border-0 group shadow-none before:absolute before:inset-0 before:z-10 before:border before:border-gray-200 before:rounded-xl before:transition hover:before:border-2 hover:before:border-blue-600 focus:before:border-2 focus:before:border-blue-600 hover:before:shadow-lg h-full flex flex-col before:pointer-events-none pt-0 overflow-hidden">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <Badge className="absolute top-4 left-4 bg-white/90 text-blue-700 hover:bg-white border-none shadow-sm backdrop-blur-sm z-20">
                        {post.category}
                      </Badge>
                    </div>
                    <CardHeader className="pb-3">
                      <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <User className="w-3.5 h-3.5" />
                          <span>{post.author}</span>
                        </div>
                      </div>
                      <Link
                        href="#"
                        className="hover:text-blue-600 transition-colors relative z-20"
                      >
                        <h3 className="text-xl font-bold line-clamp-2 leading-tight">
                          {post.title}
                        </h3>
                      </Link>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <p className="text-muted-foreground text-sm line-clamp-3">
                        {post.excerpt}
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
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <Pagination className="mt-8">
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      if (currentPage > 1) handlePageChange(currentPage - 1);
                    }}
                    className={
                      currentPage === 1 ? "pointer-events-none opacity-50" : ""
                    }
                  />
                </PaginationItem>

                {/* Logic for displaying page numbers with ellipsis */}
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => {
                    // Show first, last, current, and adjacent pages
                    if (
                      page === 1 ||
                      page === totalPages ||
                      (page >= currentPage - 1 && page <= currentPage + 1)
                    ) {
                      return (
                        <PaginationItem key={page}>
                          <PaginationLink
                            href="#"
                            isActive={page === currentPage}
                            onClick={(e) => {
                              e.preventDefault();
                              handlePageChange(page);
                            }}
                          >
                            {page}
                          </PaginationLink>
                        </PaginationItem>
                      );
                    }

                    // Show ellipsis
                    if (
                      (page === currentPage - 2 && currentPage > 3) ||
                      (page === currentPage + 2 && currentPage < totalPages - 2)
                    ) {
                      return (
                        <PaginationItem key={page}>
                          <PaginationEllipsis />
                        </PaginationItem>
                      );
                    }

                    return null;
                  }
                )}

                <PaginationItem>
                  <PaginationNext
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      if (currentPage < totalPages)
                        handlePageChange(currentPage + 1);
                    }}
                    className={
                      currentPage === totalPages
                        ? "pointer-events-none opacity-50"
                        : ""
                    }
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          )}
        </div>
      </section>
    </div>
  );
}
