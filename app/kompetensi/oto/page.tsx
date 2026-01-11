"use client";

import { HeroSection } from "@/components/major/HeroSection";
import { StatisticsSection } from "@/components/major/StatisticsSection";
import { IntroSection } from "@/components/major/IntroSection";
import { RoadmapSection } from "@/components/major/RoadmapSection";
import { TechStackSection } from "@/components/major/TechStackSection";
import { FacilitiesSection } from "@/components/major/FacilitiesSection";

export default function OTOPage() {
  const stats = [
    { value: "92%", label: "Serapan Industri Otomotif" },
    { value: "15+", label: "Mitra Bengkel Resmi" },
    { value: "100%", label: "Kurikulum EV Ready" },
  ];

  const steps = [
    {
      id: 1,
      level: "Kelas X",
      title: "Dasar Otomotif & Elektronika",
      description:
        "Pengenalan dasar mesin, alat ukur mekanik/elektrik, dan komponen elektronika dasar.",
      items: [
        "Gambar Teknik Otomotif",
        "Teknologi Dasar Otomotif",
        "Dasar Listrik & Elektronika",
        "Pekerjaan Dasar Teknik Otomotif",
      ],
    },
    {
      id: 2,
      level: "Kelas XI",
      title: "Engine Management & Chassis",
      description:
        "Mempelajari sistem kontrol mesin elektronik (EMS) dan sasis kendaraan modern.",
      items: [
        "Sistem Pengapian Elektronik",
        "Sistem Bahan Bakar Injeksi",
        "Sistem Rem ABS & ESP",
        "Pemeliharaan Sasis",
      ],
    },
    {
      id: 3,
      level: "Kelas XII",
      title: "Diagnosa Lanjut & Kendaraan Listrik",
      description:
        "Diagnosa kerusakan kompleks dengan scanner dan pengenalan teknologi mobil listrik.",
      items: [
        "Diagnosa Kerusakan (Troubleshooting)",
        "Sistem Keamanan Aktif",
        "Teknologi Kendaraan Hybrid/EV",
        "Produk Kreatif & Kewirausahaan",
      ],
    },
  ];

  const techs = [
    { icon: "monitor", label: "Scanner Tools (OBD)" },
    { icon: "code", label: "ECU Programming" },
    { icon: "cpu", label: "Engine Management" },
    { icon: "map", label: "Wiring Diagrams" },
    { icon: "zap", label: "Hybrid System" },
  ];

  const facilities = [
    {
      title: "Laboratorium Ototronik",
      description:
        "Bengkel modern dengan peralatan diagnostik komputerisasi untuk simulasi dan perbaikan sistem elektronik kendaraan.",
      features: [
        "Car Lift",
        "Scanner Diagnostic Tools",
        "Trainer Engine Stand",
      ],
      image:
        "https://images.unsplash.com/photo-1767990495521-95cceb571125?q=80&w=1291&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      icon: "cpu",
    },
    {
      title: "Unit Kendaraan Praktik",
      description:
        "Berbagai unit mobil tahun terbaru untuk praktik langsung siswa, termasuk unit simulasi hybrid.",
      features: [
        "Mobil Unit Praktik",
        "Trainer Kelistrikan Bodi",
        "Area Test Drive",
      ],
      image:
        "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?q=80&w=2070&auto=format&fit=crop",
      icon: "terminal",
    },
  ];

  return (
    <div className="bg-background font-sans">
      <HeroSection
        theme="graphite"
        title="Teknik"
        highlight="Ototronik"
        description="Integrasi mekanik presisi dan elektronik cerdas. Kami melahirkan teknisi modern untuk industri otomotif masa depan."
        image="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2166&auto=format&fit=crop"
      />
      <StatisticsSection stats={stats} theme="graphite" />
      <IntroSection
        theme="graphite"
        programName="Teknik Ototronik"
        aboutText={
          <>
            <p className="text-lg text-slate-600 leading-relaxed">
              Ototronik (Otomotif & Elektronik) adalah evolusi dari teknik
              kendaraan ringan. Fokusnya ada pada{" "}
              <strong className="text-slate-900 font-semibold">
                Engine Management System (EMS)
              </strong>
              , sistem keamanan aktif (ABS, Airbag), dan teknologi kendaraan
              listrik.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Teknisi Ototronik tidak hanya kotor dengan oli, tetapi juga mahir
              menggunakan laptop dan scanner untuk mendiagnosa &apos;otak&apos;
              dari mobil modern.
            </p>
          </>
        }
      />
      <RoadmapSection
        steps={steps}
        theme="graphite"
        title="Kurikulum Otomotif Modern"
        description="Pembelajaran yang menyesuaikan pesatnya perkembangan teknologi mobil."
      />
      <TechStackSection
        techs={techs}
        theme="graphite"
        title="Teknologi Diagnostik"
      />
      <FacilitiesSection facilities={facilities} theme="graphite" />
    </div>
  );
}
