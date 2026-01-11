"use client";

import { HeroSection } from "@/components/major/HeroSection";
import { StatisticsSection } from "@/components/major/StatisticsSection";
import { IntroSection } from "@/components/major/IntroSection";
import { RoadmapSection } from "@/components/major/RoadmapSection";
import { TechStackSection } from "@/components/major/TechStackSection";
import { FacilitiesSection } from "@/components/major/FacilitiesSection";

export default function TKRPage() {
  const stats = [
    { value: "98%", label: "Lulusan Siap Kerja" },
    { value: "20+", label: "Mitra Industri ATPM" },
    { value: "100%", label: "Tersertifikasi LSP-P1" },
  ];

  const steps = [
    {
      id: 1,
      level: "Kelas X",
      title: "Dasar Otomotif",
      description:
        "Pengenalan alat bengkel, gambar teknik, dan dasar mesin konversi energi.",
      items: [
        "Gambar Teknik Otomotif",
        "Teknologi Dasar Otomotif",
        "Pekerjaan Dasar Teknik Otomotif",
        "Safety & K3",
      ],
    },
    {
      id: 2,
      level: "Kelas XI",
      title: "Perawatan Kendaraan Ringan",
      description: "Servis berkala mesin, sasis, dan pemindah tenaga.",
      items: [
        "Pemeliharaan Mesin Kendaraan",
        "Pemeliharaan Sasis & Pemindah Tenaga",
        "Pemeliharaan Kelistrikan",
        "Spooring & Balancing",
      ],
    },
    {
      id: 3,
      level: "Kelas XII",
      title: "Overhaul & Diagnosa",
      description:
        "Perbaikan berat (turun mesin), overhaul transmisi, dan manajemen bengkel.",
      items: [
        "Overhaul Mesin",
        "Perbaikan Transmisi Otomatis/Manual",
        "Manajemen Bengkel",
        "Produk Kreatif & Kewirausahaan",
      ],
    },
  ];

  const techs = [
    { icon: "monitor", label: "Scanner EFI" },
    { icon: "wrench", label: "Sistem Hidrolik" },
    { icon: "cog", label: "Mesin 4 Tak" },
    { icon: "map", label: "Wheel Aligner" },
    { icon: "zap", label: "AC System" },
  ];

  const facilities = [
    {
      title: "Bengkel Standar Industri",
      description:
        "Bengkel luas dengan pit service, car lift, dan area kerja yang mensimulasikan bengkel resmi ATPM.",
      features: ["Car Lift Two Post", "Spooring 3D", "Tire Changer"],
      image:
        "https://images.unsplash.com/photo-1697396248143-e6fa96564d35?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      icon: "layers",
    },
    {
      title: "Trainer & Simulator",
      description:
        "Mesin stand alone (Trainer) untuk memudahkan siswa bongkar pasang komponen tanpa risiko merusak unit mobil.",
      features: [
        "Engine Stand Gasoline/Diesel",
        "Transmisi Trainer",
        "Simulator AC",
      ],
      image:
        "https://images.unsplash.com/photo-1729184648234-7650c1484905?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      icon: "cpu",
    },
  ];

  return (
    <div className="bg-background font-sans">
      <HeroSection
        theme="darkblue"
        title="Teknik Kendaraan"
        highlight="Ringan"
        description="Jantung mekanis peradaban ada di sini. Jadilah mekanik handal yang menjaga mobilitas dunia tetap bergerak."
        image="https://images.unsplash.com/photo-1767681092416-bccf9410bda4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <StatisticsSection stats={stats} theme="darkblue" />
      <IntroSection
        theme="darkblue"
        programName="TKRO (Otomotif)"
        aboutText={
          <>
            <p className="text-lg text-slate-600 leading-relaxed">
              Teknik Kendaraan Ringan Otomotif (TKRO) fokus pada penguasaan
              keterampilan perbaikan dan perawatan kendaraan roda empat. Mulai
              dari{" "}
              <strong className="text-slate-900 font-semibold">
                service berkala, overhaul mesin, hingga kelistrikan bodi
              </strong>
              .
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Lulusan TKRO dikenal tangguh, disiplin, dan memiliki logic
              troubleshooting yang kuat, sangat diminati oleh bengkel resmi
              maupun perusahaan armada logistik.
            </p>
          </>
        }
      />
      <RoadmapSection
        steps={steps}
        theme="darkblue"
        title="Kurikulum Servis & Repair"
        description="Langkah demi langkah menjadi mekanik profesional."
      />
      <TechStackSection
        techs={techs}
        theme="darkblue"
        title="Peralatan Bengkel"
      />
      <FacilitiesSection facilities={facilities} theme="darkblue" />
    </div>
  );
}
