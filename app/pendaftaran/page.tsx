"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  CheckCircle2,
  FileText,
  HelpCircle,
  Laptop,
  Users,
  ClipboardCheck,
  Award,
  ArrowRight,
  Download,
} from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

gsap.registerPlugin(ScrollTrigger);

export default function PendaftaranPage() {
  const containerRef = useRef(null);

  const requirements = [
    "Scan Kartu Keluarga (KK) Asli",
    "Scan Akta Kelahiran Asli",
    "Scan Raport SMP Semester 1-5",
    "Scan Ijazah / Surat Keterangan Lulus (SKL)",
    "Pas Foto Berwarna 3x4 (Background Merah/Biru)",
    "Surat Keterangan Sehat dari Dokter",
    "Kartu NISN (Nomor Induk Siswa Nasional)",
    "Scan KTP Orang Tua / Wali",
    "Kartu Indonesia Pintar (KIP/KKS/PKH) *Jika ada",
  ];

  const timeline = [
    {
      date: "19 – 31 Mei",
      title: "Pendaftaran Online",
      desc: "Pembukaan pendaftaran PPDB melalui website resmi.",
      icon: <Laptop className="w-5 h-5" />,
    },
    {
      date: "02 – 13 Juni",
      title: "Verifikasi Berkas",
      desc: "Proses verifikasi dokumen pendaftaran oleh panitia.",
      icon: <ClipboardCheck className="w-5 h-5" />,
    },
    {
      date: "02 – 14 Juni",
      title: "Seleksi Administrasi",
      desc: "Penilaian kelengkapan berkas dan persyaratan.",
      icon: <FileText className="w-5 h-5" />,
    },
    {
      date: "09 – 11 Juni",
      title: "Tes Akademik",
      desc: "Ujian tulis dan praktik sesuai jurusan yang dipilih.",
      icon: <FileText className="w-5 h-5" />,
    },
    {
      date: "16 – 17 Juni",
      title: "Pengumuman Hasil",
      desc: "Pengumuman kelulusan seleksi PPDB.",
      icon: <Award className="w-5 h-5" />,
    },
    {
      date: "26 – 27 Juni",
      title: "Daftar Ulang",
      desc: "Proses pendaftaran ulang bagi calon siswa yang lulus.",
      icon: <CheckCircle2 className="w-5 h-5" />,
    },
    {
      date: "02 – 03 Juli",
      title: "Awal Masuk Sekolah",
      desc: "Kegiatan Masa Pengenalan Lingkungan Sekolah (MPLS).",
      icon: <Users className="w-5 h-5" />,
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Animation
      gsap.from(".hero-text", {
        x: -30,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
      });

      gsap.from(".hero-poster", {
        x: 30,
        opacity: 0,
        duration: 0.8,
        delay: 0.2,
        rotation: 5,
        ease: "power2.out",
      });

      // Requirements Animation
      gsap.from(".requirements-section", {
        x: -30,
        opacity: 0,
        duration: 0.6,
        scrollTrigger: {
          trigger: ".requirements-section",
          start: "top 80%",
        },
      });

      gsap.from(".notes-card", {
        x: 30,
        opacity: 0,
        duration: 0.6,
        scrollTrigger: {
          trigger: ".notes-card",
          start: "top 80%",
        },
      });

      // Timeline Animation
      gsap.from(".timeline-item", {
        y: 20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".timeline-container",
          start: "top 80%",
        },
      });

      // Alur Animation
      gsap.from(".alur-card", {
        y: 30,
        opacity: 0,
        duration: 0.5,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".alur-section",
          start: "top 80%",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen relative overflow-hidden pb-24 lg:pb-48 font-sans"
    >
      {/* Hero Section */}
      <section className="py-12 md:py-24 bg-slate-50 relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-yellow-100 rounded-full blur-3xl opacity-50"></div>

        <div className="container mx-auto px-16 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Left Content */}
            <div className="hero-text flex-1 text-center lg:text-left">
              <Badge className="mb-4 border-blue-200 font-semibold bg-blue-50 text-blue-700 px-4 py-1 text-sm rounded-sm">
                TAHUN AJARAN 2025-2026
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                Informasi PPDB <br />
                <span className="text-blue-600">SMK Negeri 6 Malang</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed">
                Bergabunglah bersama kami mencetak generasi unggul, kompeten,
                dan siap kerja di era industri 4.0. Simak alur dan persyaratan
                di bawah ini.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="bg-blue-600 cursor-pointer shadow-lg shadow-blue-400/75 hover:bg-blue-700 text-white rounded-sm px-8! h-12 text-base"
                >
                  Daftar Sekarang <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="px-8! h-12 cursor-pointer text-base border-slate-300"
                >
                  <Download className="mr-2 h-4 w-4" /> Unduh Brosur
                </Button>
              </div>
            </div>

            {/* Right Content - Poster */}
            <div className="hero-poster flex-1 relative w-full max-w-md lg:max-w-full flex justify-center lg:justify-end">
              <div className="relative group">
                {/* Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                  <Image
                    src="./ppdb-poster.webp"
                    alt="Poster PPDB SMKN 6 Malang"
                    width={600}
                    height={800}
                    className="w-full h-auto object-cover max-h-[600px]"
                  />
                </div>
                {/* Decorative Tape Effect */}
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-32 h-8 bg-yellow-200/80 backdrop-blur-sm rotate-2 shadow-sm z-20"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-16 py-16 space-y-24">
        {/* Syarat Pendaftaran */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div className="requirements-section">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <span className="bg-blue-100 p-2 rounded-lg text-blue-600">
                <FileText className="w-6 h-6" />
              </span>
              Dokumen Persyaratan
            </h2>
            <p className="text-muted-foreground mb-8">
              Persiapkan dokumen-dokumen berikut dalam format digital (PDF/JPG)
              sebelum melakukan pendaftaran online. Pastikan hasil scan terlihat
              jelas dan terbaca.
            </p>
            <div className="grid gap-4">
              {requirements.map((req, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100"
                >
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-slate-700 font-medium">{req}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="notes-card relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl rotate-3 opacity-10"></div>
            <Card className="relative border-slate-200 shadow-xl">
              <CardHeader>
                <CardTitle>Catatan Penting</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm text-muted-foreground">
                <p>
                  • Ukuran maksimal setiap file adalah <strong>2 MB</strong>.
                </p>
                <p>
                  • Pas foto wajib menggunakan seragam sekolah asal atau kemeja
                  rapi.
                </p>
                <p>
                  • Dokumen yang tidak asli (fotokopi) wajib dilegalisir oleh
                  pihak berwenang.
                </p>
                <div className="bg-yellow-50 border border-yellow-100 p-4 rounded-lg text-yellow-800 mt-6">
                  <p className="font-semibold mb-1 flex items-center gap-2">
                    <HelpCircle className="w-4 h-4" /> Bantuan
                  </p>
                  Jika mengalami kendala upload, silakan hubungi helpdesk kami
                  di <strong>(0341) 712500</strong> atau via WhatsApp.
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Timeline */}
        <section className="timeline-container">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-3">
              JADWAL KEGIATAN
            </Badge>
            <h2 className="text-3xl font-bold">Timeline PPDB 2025</h2>
          </div>
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 -translate-x-1/2 hidden md:block"></div>

            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`timeline-item flex flex-col md:flex-row gap-8 items-center ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className="flex-1 w-full md:text-right">
                    {index % 2 === 0 && (
                      <div className="hidden md:block">
                        <h3 className="text-xl font-bold text-slate-900">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground">{item.desc}</p>
                      </div>
                    )}
                    {/* Mobile View Content (Left aligned) */}
                    <div className="md:hidden pl-12 relative">
                      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-slate-200"></div>
                      <div className="absolute left-[-5px] top-1 w-3 h-3 rounded-full bg-blue-600 ring-4 ring-white"></div>
                      <span className="text-sm font-bold text-blue-600 block mb-1">
                        {item.date}
                      </span>
                      <h3 className="text-lg font-bold text-slate-900">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white shadow-lg shrink-0 hidden md:flex">
                    {item.icon}
                  </div>

                  <div className="flex-1 w-full">
                    {index % 2 !== 0 && (
                      <div className="hidden md:block">
                        <h3 className="text-xl font-bold text-slate-900">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground">{item.desc}</p>
                      </div>
                    )}
                    {/* Desktop Date Badge */}
                    <div
                      className={`hidden md:flex ${
                        index % 2 === 0 ? "justify-end" : "justify-start"
                      }`}
                    >
                      {index % 2 === 0 ? (
                        <div className="hidden md:block mt-2">
                          <Badge
                            variant="outline"
                            className="text-blue-600 border-blue-200 text-base py-1 px-3"
                          >
                            {item.date}
                          </Badge>
                        </div>
                      ) : (
                        <div className="hidden md:block mt-2">
                          <Badge
                            variant="outline"
                            className="text-blue-600 border-blue-200 text-base py-1 px-3"
                          >
                            {item.date}
                          </Badge>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Alur Pendaftaran */}
        <section className="alur-section bg-slate-900 text-white rounded-3xl p-8 md:p-16 overflow-hidden relative">
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Alur Pendaftaran Online
            </h2>
            <div className="alur-grid grid md:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  title: "Pendaftaran Akun",
                  desc: "Buat akun peserta di website PPDB, isi formulir biodata, dan upload berkas persyaratan.",
                },
                {
                  step: "02",
                  title: "Verifikasi Data",
                  desc: "Panitia memverifikasi kelengkapan data. Pantau status verifikasi secara berkala di dashboard.",
                },
                {
                  step: "03",
                  title: "Seleksi & Hasil",
                  desc: "Ikuti rangkaian tes (jika ada), tunggu proses perangkingan, dan cek pengumuman kelulusan.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="alur-card relative p-6 border border-slate-700 rounded-2xl bg-slate-800/50 backdrop-blur-sm hover:bg-slate-800 transition-colors"
                >
                  <div className="text-5xl font-black text-slate-700 mb-4 absolute top-4 right-6 opacity-50">
                    {item.step}
                  </div>
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-blue-900/50">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Pertanyaan Umum (FAQ)
          </h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left text-lg font-medium">
                Apakah PPDB diadakan secara online sepenuhnya?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                Ya, seluruh proses pendaftaran mulai dari pengisian formulir
                hingga upload berkas dilakukan secara online melalui website
                resmi PPDB SMK Negeri 6 Malang. Namun, untuk proses{" "}
                <strong>Daftar Ulang</strong> bagi siswa yang dinyatakan
                diterima, wajib datang ke sekolah dengan membawa berkas fisik
                asli.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left text-lg font-medium">
                Kapan pengumuman kelulusan PPDB?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                Pengumuman kelulusan dijadwalkan pada tanggal{" "}
                <strong>16 - 17 Juni 2025</strong>. Pengumuman dapat dilihat
                secara online melalui website ini dengan login menggunakan akun
                pendaftaran masing-masing.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left text-lg font-medium">
                Apakah ada biaya pendaftaran?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                Sesuai dengan peraturan pemerintah (Permendikbud), proses
                pendaftaran PPDB di sekolah negeri{" "}
                <strong>tidak dipungut biaya (GRATIS)</strong>. Hati-hati
                terhadap oknum yang meminta pungutan liar.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left text-lg font-medium">
                Bagaimana jika saya salah upload berkas?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                Selama masa pendaftaran belum ditutup dan data belum
                diverifikasi final oleh panitia, Anda masih dapat mengubah data
                atau berkas melalui dashboard pendaftaran. Jika sudah
                diverifikasi, silakan hubungi panitia melalui kontak bantuan.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>
      </div>
    </div>
  );
}
