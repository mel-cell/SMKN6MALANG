"use client";

import { HeroSection } from "@/components/major/HeroSection";
import { StatisticsSection } from "@/components/major/StatisticsSection";
import { IntroSection } from "@/components/major/IntroSection";
import { RoadmapSection } from "@/components/major/RoadmapSection";
import { TechStackSection } from "@/components/major/TechStackSection";
import { FacilitiesSection } from "@/components/major/FacilitiesSection";

export default function TABPage() {
  const stats = [
    { value: "50+", label: "Unit Praktik Alat Berat" },
    { value: "15+", label: "Mitra Industri Tambang" },
    { value: "100%", label: "Lulusan Tersertifikasi K3" },
  ];

  const steps = [
    {
      id: 1,
      level: "Kelas X",
      title: "Dasar Mesin & K3 Tambang",
      description:
        "Pengenalan komponen mesin diesel, peralatan bengkel, dan keselamatan kerja pertambangan.",
      items: [
        "Teknologi Dasar Otomotif",
        "Gambar Teknik",
        "Pekerjaan Dasar Teknik Mesin",
        "K3LH & Budaya Industri",
      ],
    },
    {
      id: 2,
      level: "Kelas XI",
      title: "Sistem Hidrolik & Engine",
      description:
        "Mendalami cara kerja sistem hidrolik alat berat dan perawatan mesin diesel kapasitas besar.",
      items: [
        "Sistem Hidrolik Alat Berat",
        "Engine Alat Berat (Diesel)",
        "Powertrain Alat Berat",
        "Preventive Maintenance",
      ],
    },
    {
      id: 3,
      level: "Kelas XII",
      title: "Troubleshooting & Operasional",
      description:
        "Analisa kerusakan sistem (troubleshooting) dan dasar pengoperasian unit.",
      items: [
        "Troubleshooting Hydraulic System",
        "Diagnostic Engine",
        "Undercarriage Maintenance",
        "Uji Kompetensi",
      ],
    },
  ];

  const techs = [
    { icon: "cog", label: "Diesel Engine" },
    { icon: "wrench", label: "Hydraulic System" },
    { icon: "cpu", label: "Electronic Control" },
    { icon: "monitor", label: "Diagnostic Tool" },
    { icon: "truck", label: "Undercarriage" },
  ];

  const facilities = [
    {
      title: "Workshop Alat Berat",
      description:
        "Hanggar besar berisi unit alat berat nyata (Excavator/Bulldozer) untuk praktik pembongkaran dan perawatan.",
      features: [
        "Unit Excavator Komatsu",
        "Engine Stand Diesel Besar",
        "Hydraulic Test Bench",
      ],
      image:
        "https://images.unsplash.com/photo-1570463806618-258bad4cef03?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      icon: "cog",
    },
    {
      title: "Simulasi Sistem Hidrolik",
      description:
        "Alat peraga sistem hidrolik transparan untuk memahami aliran fluida dan kerja pompa/aktuator.",
      features: [
        "Trainer Hidrolik Festo",
        "Simulator Sirkuit Hidrolik",
        "Komponen Pompa & Valve",
      ],
      image:
        "https://images.unsplash.com/photo-1667233169941-7b31a54ec223?q=80&w=1165&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      icon: "layers",
    },
  ];

  return (
    <div className="bg-background font-sans">
      <HeroSection
        theme="green"
        title="Teknik"
        highlight="Alat Berat"
        description="Tenaga raksasa di tangan Anda. Menguasai maintenance dan perbaikan mesin-mesin besar penggerak pertambangan dan konstruksi."
        image="https://images.unsplash.com/photo-1582280871722-424e91cbee8b?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <StatisticsSection stats={stats} theme="green" />
      <IntroSection
        theme="green"
        programName="TAB (Heavy Equipment)"
        aboutText={
          <>
            <p className="text-lg text-slate-600 leading-relaxed">
              Teknik Alat Berat (TAB) adalah jurusan langka yang spesifik
              mempelajari mesin-mesin konstruksi dan pertambangan seperti
              Excavator, Bulldozer, dan Dump Truck. Fokus utamanya pada{" "}
              <strong className="text-slate-900 font-semibold">
                Sistem Hidrolik dan Mesin Diesel
              </strong>
              .
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Lulusan TAB sangat dicari oleh perusahaan tambang (mining) dan
              kontraktor besar karena skill spesifik yang tidak dimiliki jurusan
              otomotif biasa.
            </p>
          </>
        }
      />
      <RoadmapSection
        steps={steps}
        theme="green"
        title="Kurikulum Alat Berat"
        description="Perpaduan mekanik diesel dan kekuatan hidrolik."
      />
      <TechStackSection
        techs={techs}
        theme="green"
        title="Teknologi Heavy Duty"
      />
      <FacilitiesSection facilities={facilities} theme="green" />
    </div>
  );
}
