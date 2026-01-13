"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Calendar,
  CheckCircle2,
  FileText,
  UserCheck,
  ClipboardList,
  GraduationCap,
  School,
  ArrowRight,
  HelpCircle,
  Clock,
  MapPin,
} from "lucide-react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

gsap.registerPlugin(ScrollTrigger);

const requirements = [
  "Scan Kartu Keluarga (KK) Asli",
  "Scan Akta Kelahiran Asli",
  "Scan Rapor SMP/MTs Semester 1-5",
  "Scan Ijazah / Surat Keterangan Lulus (SKL)",
  "Pas Foto Berwarna 3x4 (2 lembar)",
  "Surat Keterangan Sehat dari Dokter",
  "Kartu NISN (Nomor Induk Siswa Nasional)",
  "KTP Orang Tua / Wali",
  "KIP/KKS/PKH (Jika Memiliki)",
];

const timeline = [
  {
    stage: "Tahap 1",
    date: "19 – 31 Mei",
    title: "Pendaftaran Online",
    desc: "Pembukaan pendaftaran PPDB melalui website resmi sekolah.",
    icon: <FileText className="w-5 h-5 text-blue-600" />,
  },
  {
    stage: "Tahap 2",
    date: "2 – 13 Juni",
    title: "Verifikasi Berkas",
    desc: "Proses verifikasi dokumen pendaftaran oleh panitia.",
    icon: <UserCheck className="w-5 h-5 text-blue-600" />,
  },
  {
    stage: "Tahap 3",
    date: "2 – 14 Juni",
    title: "Seleksi Administrasi",
    desc: "Penilaian berkas dan persyaratan calon siswa.",
    icon: <ClipboardList className="w-5 h-5 text-blue-600" />,
  },
  {
    stage: "Tahap 4",
    date: "9 – 11 Juni",
    title: "Tes Akademik",
    desc: "Ujian tulis dan praktik sesuai jurusan yang dipilih.",
    icon: <FileText className="w-5 h-5 text-blue-600" />,
  },
  {
    stage: "Tahap 5",
    date: "16 – 17 Juni",
    title: "Pengumuman Hasil",
    desc: "Pengumuman kelulusan PPDB secara online dan offline.",
    icon: <GraduationCap className="w-5 h-5 text-blue-600" />,
  },
  {
    stage: "Tahap 6",
    date: "26 – 27 Juni",
    title: "Daftar Ulang",
    desc: "Proses pendaftaran ulang bagi siswa yang dinyatakan lulus.",
    icon: <UserCheck className="w-5 h-5 text-blue-600" />,
  },
  {
    stage: "Tahap 7",
    date: "2 – 3 Juli",
    title: "Awal Masuk Sekolah",
    desc: "Kegiatan orientasi siswa baru (MPLS).",
    icon: <School className="w-5 h-5 text-blue-600" />,
  },
];

const steps = [
  {
    number: "01",
    title: "Pendaftaran",
    desc: "Isi formulir online dan upload berkas persyaratan melalui website PPDB.",
    icon: <FileText className="w-6 h-6 text-white" />,
  },
  {
    number: "02",
    title: "Verifikasi",
    desc: "Admin memverifikasi kelengkapan berkas dan data diri calon siswa.",
    icon: <UserCheck className="w-6 h-6 text-white" />,
  },
  {
    number: "03",
    title: "Seleksi & Pengumuman",
    desc: "Proses seleksi administrasi/akademik, kemudian pengumuman hasil.",
    icon: <ClipboardList className="w-6 h-6 text-white" />,
  },
];

const faqs = [
  {
    question: "Apakah PPDB diadakan secara online?",
    answer:
      "Ya, seluruh proses pendaftaran awal dilakukan secara online melalui website resmi PPDB SMK Negeri 6 Malang. Namun, untuk verifikasi fisik dan daftar ulang mungkin memerlukan kehadiran di sekolah sesuai jadwal.",
  },
  {
    question: "Kapan pengumuman kelulusan PPDB?",
    answer:
      "Pengumuman hasil seleksi PPDB akan dilaksanakan pada tanggal 16-17 Juni 2025. Hasil dapat dilihat melalui website atau papan pengumuman di sekolah.",
  },
  {
    question: "Apakah ada biaya pendaftaran?",
    answer:
      "Pendaftaran PPDB di SMK Negeri 6 Malang tidak dipungut biaya (Gratis). Hati-hati terhadap penipuan yang mengatasnamakan panitia PPDB.",
  },
  {
    question: "Bagaimana jika saya lupa password akun pendaftaran?",
    answer:
      "Silakan gunakan fitur 'Lupa Password' pada halaman login, atau hubungi helpdesk PPDB melalui WhatsApp yang tersedia di website.",
  },
];

export default function PPDBPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Animations
      gsap.from(".ppdb-hero-text", {
        x: -50,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
      });

      gsap.from(".ppdb-hero-image", {
        x: 50,
        opacity: 0,
        duration: 0.8,
        delay: 0.2,
        ease: "power2.out",
      });

      gsap.to(".floating-blob", {
        scale: 1.05,
        rotation: 5,
        repeat: -1,
        yoyo: true,
        duration: 8,
        ease: "sine.inOut",
      });

      // Syarat Animations
      gsap.from(".syarat-text", {
        x: -30,
        opacity: 0,
        duration: 0.6,
        scrollTrigger: {
          trigger: ".syarat-section",
          start: "top 80%",
        },
      });

      gsap.from(".syarat-item", {
        y: 10,
        opacity: 0,
        duration: 0.4,
        stagger: 0.05,
        scrollTrigger: {
          trigger: ".syarat-list",
          start: "top 80%",
        },
      });

      gsap.from(".syarat-image", {
        scale: 0.9,
        opacity: 0,
        duration: 0.6,
        scrollTrigger: {
          trigger: ".syarat-image",
          start: "top 80%",
        },
      });

      // Alur Animations
      gsap.from(".alur-card", {
        y: 30,
        opacity: 0,
        duration: 0.5,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".alur-grid",
          start: "top 80%",
        },
      });

      // Timeline Animations
      gsap.from(".timeline-item", {
        y: 20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".timeline-list",
          start: "top 80%",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen pt-20 bg-background font-sans overflow-hidden"
    >
      {/* Hero Section */}
      <section className="relative py-12 md:py-24 lg:py-32 bg-slate-50 overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-yellow-100 rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2"></div>

        <div className="container mx-auto px-16 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="ppdb-hero-text flex-1 text-center lg:text-left">
              <Badge className="mb-6 border-blue-200 font-bold bg-blue-50 text-blue-700 px-4 py-1.5 text-sm rounded-full tracking-wide">
                PENERIMAAN PESERTA DIDIK BARU
              </Badge>
              <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 mb-6 leading-tight tracking-tight">
                Bergabunglah <br />
                Menjadi Bagian <br />
                <span className="text-blue-600">Masa Depan.</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Siapkan dirimu untuk menjadi tenaga ahli profesional.
                Pendaftaran Tahun Ajaran 2025/2026 telah dibuka.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 h-12 text-base font-semibold shadow-lg shadow-blue-600/20"
                >
                  Daftar Sekarang <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full px-8 h-12 text-base font-semibold border-2 hover:bg-slate-50"
                >
                  Unduh Panduan
                </Button>
              </div>
            </div>

            <div className="ppdb-hero-image flex-1 relative">
              {/* Floating Blob Behind Image */}
              <div className="floating-blob absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-yellow-400/20 rounded-full blur-2xl -z-10"></div>

              <div className="relative z-10 bg-white p-3 rounded-3xl shadow-2xl border border-slate-100 rotate-2 hover:rotate-0 transition-transform duration-500">
                <Image
                  src="./ppdbimage.png"
                  alt="Poster PPDB"
                  width={600}
                  height={800}
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Syarat Pendaftaran Section */}
      <section className="syarat-section py-20 bg-white">
        <div className="container mx-auto px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="syarat-text order-2 lg:order-1">
              <div className="relative">
                <div className="absolute -top-10 -left-10 w-20 h-20 bg-blue-100 rounded-full blur-xl"></div>
                <h2 className="text-4xl font-bold text-slate-900 mb-6 relative z-10">
                  Persyaratan <span className="text-blue-600">Pendaftaran</span>
                </h2>
              </div>
              <p className="text-muted-foreground mb-10 text-lg">
                Pastikan Anda telah menyiapkan dokumen-dokumen berikut dalam
                format digital sebelum memulai proses pendaftaran.
              </p>

              <div className="syarat-list grid gap-4">
                {requirements.map((req, index) => (
                  <div
                    key={index}
                    className="syarat-item flex items-center gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-all group"
                  >
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center shrink-0 group-hover:bg-blue-600 transition-colors">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-slate-700 font-medium group-hover:text-slate-900">
                      {req}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="syarat-image order-1 lg:order-2 flex justify-center">
              <div className="relative w-full max-w-md aspect-square bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-10 flex items-center justify-center shadow-2xl rotate-3 hover:rotate-0 transition-all duration-500">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-black/10 rounded-full blur-2xl"></div>
                <ClipboardList className="w-48 h-48 text-white/90 drop-shadow-lg" />

                {/* Floating Elements */}
                <div className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-lg animate-bounce duration-[3000ms]">
                  <Clock className="w-8 h-8 text-yellow-500" />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg animate-bounce duration-[4000ms]">
                  <MapPin className="w-8 h-8 text-red-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alur Pendaftaran Section (Modern Cards) */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-16">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-200 border-none px-4 py-1">
              LANGKAH MUDAH
            </Badge>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Alur Pendaftaran Online
            </h2>
            <p className="text-muted-foreground text-lg">
              Ikuti 3 langkah sederhana ini untuk menjadi bagian dari keluarga
              besar SMK Negeri 6 Malang.
            </p>
          </div>

          <div className="alur-grid grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="alur-card relative group">
                <div className="absolute inset-0 bg-blue-600 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform opacity-0 group-hover:opacity-100 -z-10"></div>
                <Card className="h-full border-none shadow-xl bg-white rounded-3xl overflow-hidden relative z-10 transition-transform group-hover:-translate-y-2">
                  <CardContent className="p-8 flex flex-col items-center text-center h-full">
                    <div className="w-16 h-16 rounded-2xl bg-blue-600 text-white flex items-center justify-center mb-6 shadow-lg shadow-blue-600/30">
                      {step.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">
                      {step.title}
                    </h3>
                    <div className="w-12 h-1 bg-yellow-400 rounded-full mb-4"></div>
                    <p className="text-slate-600 leading-relaxed mb-8">
                      {step.desc}
                    </p>
                    <div className="mt-auto text-6xl font-black text-slate-100 absolute bottom-[-20px] right-[-20px] select-none">
                      {step.number}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section (Vertical Modern) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-16 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Timeline Kegiatan
            </h2>
            <p className="text-muted-foreground text-lg">
              Jadwal lengkap rangkaian kegiatan PPDB Tahun 2025.
            </p>
          </div>

          <div className="timeline-list relative">
            {/* Vertical Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 -translate-x-1/2 hidden md:block"></div>

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`timeline-item flex flex-col md:flex-row gap-8 items-center ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className="flex-1 w-full md:w-auto">
                    <Card className="border-none shadow-lg hover:shadow-xl transition-shadow bg-slate-50 hover:bg-white border border-slate-100">
                      <div className="p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                            {item.icon}
                          </div>
                          <Badge
                            variant="outline"
                            className="border-blue-200 text-blue-700 bg-blue-50"
                          >
                            {item.stage}
                          </Badge>
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">
                          {item.title}
                        </h3>
                        <p className="text-slate-600 text-sm">{item.desc}</p>
                      </div>
                    </Card>
                  </div>

                  {/* Date Circle (Center) */}
                  <div className="relative z-10 flex items-center justify-center w-32 h-12 bg-blue-600 text-white rounded-full shadow-lg shadow-blue-600/30 font-bold text-sm shrink-0">
                    {item.date}
                  </div>

                  <div className="flex-1 hidden md:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        {/* Background Accents */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-16 max-w-3xl relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Pertanyaan Umum</h2>
            <p className="text-slate-400">
              Temukan jawaban untuk pertanyaan yang sering diajukan.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-none bg-white/5 rounded-xl px-6"
              >
                <AccordionTrigger className="text-left font-semibold hover:text-blue-400 hover:no-underline py-4 text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-300 leading-relaxed pb-4 text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-16 text-center">
            <p className="text-slate-400 mb-6">
              Butuh bantuan lebih lanjut? Tim kami siap membantu.
            </p>
            <Button
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white rounded-full px-8 font-semibold shadow-lg shadow-green-600/20"
            >
              Chat WhatsApp Panitia
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
