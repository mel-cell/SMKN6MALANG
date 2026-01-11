"use client";

import { HeroSection } from "@/components/major/HeroSection";
import { StatisticsSection } from "@/components/major/StatisticsSection";
import { IntroSection } from "@/components/major/IntroSection";
import { RoadmapSection } from "@/components/major/RoadmapSection";
import { TechStackSection } from "@/components/major/TechStackSection";
import { FacilitiesSection } from "@/components/major/FacilitiesSection";

export default function RPLPage() {
  const stats = [
    { value: "100%", label: "Alumni Bekerja / Kuliah" },
    { value: "50+", label: "Real Project Siswa" },
    { value: "15+", label: "Juara Kompetisi IT" },
  ];

  const steps = [
    {
      id: 1,
      level: "Kelas X",
      title: "Fundamentals",
      description:
        "Membangun pondasi logika pemrograman dan pengenalan teknologi informasi dasar.",
      items: [
        "Algoritma Dasar",
        "Dasar Pemrograman Web",
        "Sistem Komputer",
        "Simulasi Digital",
      ],
    },
    {
      id: 2,
      level: "Kelas XI",
      title: "Core Competency",
      description:
        "Fase pendalaman materi produktif dan pembuatan projek aplikasi skala menengah.",
      items: [
        "Pemrograman Berorientasi Objek",
        "Basis Data & SQL",
        "Web Framework (Laravel)",
        "UI/UX Design Basics",
      ],
    },
    {
      id: 3,
      level: "Kelas XII",
      title: "Professional & Internship",
      description:
        "Fokus pada kesiapan kerja, sertifikasi kompetensi, dan praktik kerja industri.",
      items: [
        "Pengembangan App Mobile",
        "Produk Kreatif & Kewirausahaan",
        "Uji Kompetensi Kejuruan",
        "Magang Industri (6 Bulan)",
      ],
    },
  ];

  const techs = [
    { icon: "globe", label: "HTML/CSS" },
    { icon: "code", label: "JavaScript" },
    { icon: "layers", label: "React.js" },
    { icon: "database", label: "Laravel" },
    { icon: "smartphone", label: "Flutter" },
  ];

  const facilities = [
    {
      title: "Fasilitas Lab Standard Industri",
      description:
        'Tidak ada kata "gantian" di sini. Setiap siswa mendapatkan akses penuh ke rig komputer spesifikasi tinggi dengan dual monitor setup, koneksi fiber optic dedicated, dan lingkungan development yang mirroring dengan kondisi startup nyata.',
      features: [
        "PC Spesifikasi Gaming/Rendering",
        "High-Speed Internet Dedicated",
        "Ruang Full AC & Ergonomis",
      ],
      image:
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop",
      icon: "terminal",
    },
    {
      title: "Project-Based Learning",
      description:
        "Belajar teori itu penting, tapi praktik adalah segalanya. Di RPL SMKN 6 Malang, 70% waktu kamu akan dihabiskan untuk mengerjakan real-world projects. Mulai dari aplikasi kasir sederhana hingga sistem manajemen sekolah yang kompleks.",
      features: [
        "Kerja Sama Tim (Agile/Scrum)",
        "Presentasi Produk ke Industri",
        "Portofolio Digital Siswa",
      ],
      image:
        "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop",
      icon: "cpu",
    },
  ];

  return (
    <div className="bg-background font-sans">
      <HeroSection
        theme="sky"
        title="Rekayasa"
        highlight="Perangkat Lunak"
        description="Bukan sekadar coding. Kami membentuk digital architect masa depan yang siap membangun solusi teknologi berskala industri."
        image="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop"
      />
      <StatisticsSection stats={stats} theme="sky" />
      <IntroSection
        theme="sky"
        programName="Rekayasa Perangkat Lunak"
        aboutText={
          <>
            <p className="text-lg text-slate-600 leading-relaxed">
              RPL adalah kompetensi keahlian yang fokus pada{" "}
              <strong className="text-slate-900 font-semibold">
                Software Development Life Cycle
              </strong>
              . Mulai dari analisis kebutuhan, desain sistem, penulisan kode
              (coding), hingga pengujian dan maintenance aplikasi.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Di SMKN 6 Malang, siswa didik untuk menjadi problem solver yang
              mampu menerjemahkan kebutuhan bisnis menjadi solusi digital yang
              fungsional, bukan sekadar operator komputer.
            </p>
          </>
        }
      />
      <RoadmapSection steps={steps} theme="sky" />
      <TechStackSection techs={techs} theme="sky" />
      <FacilitiesSection facilities={facilities} theme="sky" />
    </div>
  );
}
