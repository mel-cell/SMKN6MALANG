"use client";

import { HeroSection } from "@/components/major/HeroSection";
import { StatisticsSection } from "@/components/major/StatisticsSection";
import { IntroSection } from "@/components/major/IntroSection";
import { RoadmapSection } from "@/components/major/RoadmapSection";
import { TechStackSection } from "@/components/major/TechStackSection";
import { FacilitiesSection } from "@/components/major/FacilitiesSection";

export default function TPMPage() {
  const stats = [
    { value: "0.01mm", label: "Presisi Standar Mikron" },
    { value: "50+", label: "Unit Mesin Produksi" },
    { value: "30+", label: "Alumni di Astra Group" },
  ];

  const steps = [
    {
      id: 1,
      level: "Kelas X",
      title: "Dasar Manufaktur & Gambar",
      description:
        "Membaca gambar teknik (Blue Print) dan penggunaan alat ukur presisi.",
      items: [
        "Gambar Teknik Manufaktur",
        "Pekerjaan Dasar Teknik Mesin",
        "Alat Ukur Presisi (Vernier/Micrometer)",
        "K3LH",
      ],
    },
    {
      id: 2,
      level: "Kelas XI",
      title: "Pemesinan Konvensional & CAD",
      description:
        "Mengoperasikan mesin bubut dan frais manual serta desain 2D/3D.",
      items: [
        "Teknik Pemesinan Bubut",
        "Teknik Pemesinan Frais",
        "Teknik Pemesinan Gerinda",
        "Computer Aided Design (CAD)",
      ],
    },
    {
      id: 3,
      level: "Kelas XII",
      title: "CNC & CAM",
      description:
        "Pemrograman dan pengoperasian mesin CNC (Computer Numerical Control).",
      items: [
        "Teknik Pemesinan NC/CNC",
        "Computer Aided Manufacturing (CAM)",
        "Produk Kreatif",
        "Uji Kompetensi",
      ],
    },
  ];

  const techs = [
    { icon: "monitor", label: "Mastercam" },
    { icon: "cpu", label: "CNC Controller" },
    { icon: "pen", label: "SolidWorks" },
    { icon: "cog", label: "Mesin Bubut" },
    { icon: "layers", label: "3D Printing" },
  ];

  const facilities = [
    {
      title: "Lab CNC & Simulator",
      description:
        "Mesin CNC Milling dan Turning modern standar industri manufaktur untuk praktik pemrograman G-Code.",
      features: ["CNC Milling 3 Axis", "CNC Turning", "Simulator Panel"],
      image:
        "https://images.unsplash.com/photo-1729944950511-e9c71556cfd4?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      icon: "cpu",
    },
    {
      title: "Bengkel Pemesinan Konvensional",
      description:
        "Deretan mesin bubut dan frais manual untuk melatih feeling pemakanan logam siswa.",
      features: [
        "Mesin Bubut Standar",
        "Mesin Frais Universal",
        "Mesin Gerinda Datar",
      ],
      image:
        "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop",
      icon: "cog",
    },
  ];

  return (
    <div className="bg-background font-sans">
      <HeroSection
        theme="yellow"
        title="Teknik"
        highlight="Pemesinan"
        description="Master of Precision. Membentuk logam menjadi komponen presisi tinggi yang menggerakkan mesin industri dunia."
        image="https://images.unsplash.com/photo-1711418235334-8895331a6cf9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <StatisticsSection stats={stats} theme="yellow" />
      <IntroSection
        theme="yellow"
        programName="TPM (Teknik Mesin)"
        aboutText={
          <>
            <p className="text-lg text-slate-600 leading-relaxed">
              Teknik Pemesinan adalah seni membentuk logam. Siswa belajar
              membuat komponen mesin (spare part) dengan kepresisian hingga
              seperseribu milimeter menggunakan mesin{" "}
              <strong className="text-slate-900 font-semibold">
                Bubut, Frais, dan CNC
              </strong>
              .
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Lulusan TPM adalah tulang punggung industri manufaktur, mampu
              mengoperasikan mesin produksi canggih untuk menciptakan produk
              massal maupun custom part.
            </p>
          </>
        }
      />
      <RoadmapSection
        steps={steps}
        theme="yellow"
        title="Alur Produksi Manufaktur"
        description="Dari desain CAD hingga produk jadi di mesin CNC."
      />
      <TechStackSection techs={techs} theme="yellow" title="Software & Mesin" />
      <FacilitiesSection facilities={facilities} theme="yellow" />
    </div>
  );
}
