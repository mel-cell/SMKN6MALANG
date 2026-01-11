"use client";

import { HeroSection } from "@/components/major/HeroSection";
import { StatisticsSection } from "@/components/major/StatisticsSection";
import { IntroSection } from "@/components/major/IntroSection";
import { RoadmapSection } from "@/components/major/RoadmapSection";
import { TechStackSection } from "@/components/major/TechStackSection";
import { FacilitiesSection } from "@/components/major/FacilitiesSection";

export default function TITLPage() {
  const stats = [
    { value: "100%", label: "Sertifikasi K3 Listrik" },
    { value: "20+", label: "Modul Latih PLC & IoT" },
    { value: "10+", label: "Instalasi Smart Building" },
  ];

  const steps = [
    {
      id: 1,
      level: "Kelas X",
      title: "Dasar Kelistrikan & Pengukuran",
      description:
        "Hukum dasar listrik, alat ukur (Multimeter/Megger), dan instalasi penerangan sederhana.",
      items: [
        "Gambar Teknik Listrik",
        "Dasar Listrik & Elektronika",
        "Pekerjaan Dasar Elektromekanik",
        "Instalasi Penerangan Listrik",
      ],
    },
    {
      id: 2,
      level: "Kelas XI",
      title: "Instalasi Tenaga & Motor",
      description: "Instalasi motor listrik 3 fasa dan panel kontrol industri.",
      items: [
        "Instalasi Tenaga Listrik",
        "Instalasi Motor Listrik",
        "Sistem Kontrol Elektromagnetik",
        "Perbaikan Peralatan Listrik",
      ],
    },
    {
      id: 3,
      level: "Kelas XII",
      title: "Otomasi & PLC",
      description:
        "Pemrograman PLC, Smart Home, dan instalasi tegangan menengah.",
      items: [
        "Programmable Logic Control (PLC)",
        "Sistem Kontrol Berbasis Komputer",
        "Instalasi Jaringan Distribusi",
        "Project Based Learning",
      ],
    },
  ];

  const techs = [
    { icon: "cpu", label: "PLC (Omron/Siemens)" },
    { icon: "home", label: "Smart Home System" },
    { icon: "monitor", label: "HMI Touch Panel" },
    { icon: "code", label: "Ladder Logic" },
    { icon: "zap", label: "Motor 3 Phase" },
  ];

  const facilities = [
    {
      title: "Workshop Instalasi Penerangan",
      description:
        "Cubicle praktik instalasi listrik bangunan gedung dan rumah tinggal sesuai standar PUIL.",
      features: [
        "Cubicle Individual",
        "KWH Meter Prabayar",
        "Trainer Smart Home",
      ],
      image:
        "https://images.unsplash.com/photo-1639303338365-6d5912cd8c56?q=80&w=1178&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      icon: "smartphone",
    },
    {
      title: "Lab Otomasi Industri (PLC)",
      description:
        "Laboratorium kontrol motor listrik dan pemrograman PLC untuk simulasi conveyor belt dan robotika industri.",
      features: ["Trainer PLC Modular", "Sistem Pneumatik", "HMI Touchscreen"],
      image:
        "https://images.unsplash.com/photo-1697665896542-5de862452972?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      icon: "cpu",
    },
  ];

  return (
    <div className="bg-background font-sans">
      <HeroSection
        theme="orange"
        title="Teknik Instalasi"
        highlight="Tenaga Listrik"
        description="Menerangi masa depan. Ahli dalam instalasi energi, kontrol motor, dan otomasi industri berbasis PLC."
        image="https://images.unsplash.com/photo-1646640381839-02748ae8ddf0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <StatisticsSection stats={stats} theme="orange" />
      <IntroSection
        theme="orange"
        programName="TITL (Listrik)"
        aboutText={
          <>
            <p className="text-lg text-slate-600 leading-relaxed">
              TITL berfokus pada penguasaan energi listrik arus kuat. Mulai dari
              instalasi rumah tinggal, gedung bertingkat, hingga{" "}
              <strong className="text-slate-900 font-semibold">
                sistem kontrol motor industri
              </strong>
              .
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Seiring Revolusi Industri 4.0, materi TITL diperluas mencakup
              Programmable Logic Controller (PLC) dan Smart Building Automation.
            </p>
          </>
        }
      />
      <RoadmapSection
        steps={steps}
        theme="orange"
        title="Kompetensi Kelistrikan"
        description="Jalur menjadi ahli instalasi dan otomasi."
      />
      <TechStackSection
        techs={techs}
        theme="orange"
        title="Teknologi Kontrol"
      />
      <FacilitiesSection facilities={facilities} theme="orange" />
    </div>
  );
}
