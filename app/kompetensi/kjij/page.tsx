"use client";

import { HeroSection } from "@/components/major/HeroSection";
import { StatisticsSection } from "@/components/major/StatisticsSection";
import { IntroSection } from "@/components/major/IntroSection";
import { RoadmapSection } from "@/components/major/RoadmapSection";
import { TechStackSection } from "@/components/major/TechStackSection";
import { FacilitiesSection } from "@/components/major/FacilitiesSection";

export default function KJIJPage() {
  const stats = [
    { value: "100%", label: "Siap Kerja (Level 4 KKNI)" },
    { value: "30+", label: "Proyek Infrastruktur" },
    { value: "15+", label: "Mitra BUMN Karya" },
  ];

  const steps = [
    {
      id: 1,
      level: "Kelas X",
      title: "Geomatika & Dasar Konstruksi",
      description:
        "Pengenalan ilmu ukur tanah, gambar teknik dasar, dan material konstruksi.",
      items: [
        "Ilmu Ukur Tanah (Surveying)",
        "Gambar Teknik Sipil",
        "Mekanika Teknik",
        "K3 Konstruksi",
      ],
    },
    {
      id: 2,
      level: "Kelas XI",
      title: "Konstruksi Jalan & Jembatan",
      description:
        "Perencanaan dan teknik pelaksanaan pekerjaan infrastruktur jalan raya dan jembatan.",
      items: [
        "Konstruksi Jalan Raya",
        "Konstruksi Jembatan",
        "Hitung Volume & RAB",
        "Aplikasi Perangkat Lunak (Civil 3D)",
      ],
    },
    {
      id: 3,
      level: "Kelas XII",
      title: "Irigasi & Manajemen Proyek",
      description:
        "Teknik bangunan air dan manajemen pelaksanaan proyek konstruksi.",
      items: [
        "Konstruksi Irigasi & Bendung",
        "Manajemen Konstruksi",
        "Pengendalian Mutu (QC)",
        "BIM for Infrastructure",
      ],
    },
    {
      id: 4,
      level: "Kelas XIII",
      title: "Praktik Industri & Spesialisasi",
      description:
        "Terjun langsung ke proyek infrastruktur nasional selama 1 tahun penuh.",
      items: [
        "Magang di Proyek Nasional",
        "Sertifikasi Ahli K3 Konstruksi",
        "Laporan Proyek Akhir",
        "Manajemen Alat Berat",
      ],
    },
  ];

  const techs = [
    { icon: "map", label: "AutoCAD Civil 3D" },
    { icon: "globe", label: "ArcGIS" },
    { icon: "monitor", label: "Total Station (Digital)" },
    { icon: "layers", label: "SAP2000" },
    { icon: "map", label: "Global Mapper" },
  ];

  const facilities = [
    {
      title: "Laboratorium Uji Tanah & Beton",
      description:
        "Fasilitas pengujian material teknik sipil lengkap, mulai dari uji tarik besi, tekan beton, hingga kepadatan tanah.",
      features: [
        "Mesin Uji Tekan Beton",
        "Alat Uji Sondir & Boring",
        "Laboratorium Aspal",
      ],
      image:
        "https://images.unsplash.com/photo-1763630730215-d97346f23065?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      icon: "layers",
    },
    {
      title: "Peralatan Survey Digital",
      description:
        "Inventaris alat ukur tanah modern untuk memastikan presisi tinggi dalam pengukuran topografi dan layout proyek.",
      features: ["Total Station Terbaru", "Theodolite Digital", "GPS Geodetik"],
      image:
        "https://images.unsplash.com/photo-1610081339709-d86503fcaf15?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      icon: "map",
    },
  ];

  return (
    <div className="bg-background font-sans">
      <HeroSection
        theme="teal"
        title="Konstruksi Jalan,"
        highlight="Irigasi, dan Jembatan"
        description="Mencetak tenaga ahli pelaksana infrastruktur yang siap membangun konektivitas negeri. Program 4 tahun dengan standar industri BUMN Karya."
        image="https://images.unsplash.com/photo-1569925457326-59b1c3611227?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        badge="PROGRAM 4 TAHUN"
      />
      <StatisticsSection stats={stats} theme="teal" />
      <IntroSection
        theme="teal"
        programName="KJIJ (4 Tahun)"
        aboutText={
          <>
            <p className="text-lg text-slate-600 leading-relaxed">
              KJIJ adalah jurusan Teknik Sipil yang fokus pada infrastruktur
              berat. Dengan masa studi{" "}
              <strong className="text-slate-900 font-semibold">4 Tahun</strong>,
              siswa memiliki waktu lebih banyak untuk mematangkan skill lapangan
              dan manajerial.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Lulusan KJIJ dipersiapkan untuk menjadi pelaksana lapangan,
              surveyor, atau pengawas proyek di berbagai proyek strategis
              nasional seperti jalan tol, bendungan, dan jembatan.
            </p>
          </>
        }
      />
      <RoadmapSection
        steps={steps}
        theme="teal"
        title="Peta Jalan 4 Tahun"
        description="Kurikulum berbasis proyek infrastruktur yang komprehensif dari hulu ke hilir."
      />
      <TechStackSection
        techs={techs}
        theme="teal"
        title="Tools Survey & Engineering"
      />
      <FacilitiesSection facilities={facilities} theme="teal" />
    </div>
  );
}
