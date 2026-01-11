"use client";

import { HeroSection } from "@/components/major/HeroSection";
import { StatisticsSection } from "@/components/major/StatisticsSection";
import { IntroSection } from "@/components/major/IntroSection";
import { RoadmapSection } from "@/components/major/RoadmapSection";
import { TechStackSection } from "@/components/major/TechStackSection";
import { FacilitiesSection } from "@/components/major/FacilitiesSection";

export default function SIJAPage() {
  const stats = [
    { value: "98%", label: "Serapan Industri (4 Tahun)" },
    { value: "50+", label: "Project IoT Terintegrasi" },
    { value: "10+", label: "Mitra Industri Cloud" },
  ];

  const steps = [
    {
      id: 1,
      level: "Kelas X",
      title: "Konsep Dasar IT & Elektronika",
      description:
        "Fondasi pemrograman dasar, sistem komputer, dan elektronika dasar untuk IoT.",
      items: [
        "Algoritma Pemrograman",
        "Sistem Komputer",
        "Elektronika Dasar",
        "Jaringan Dasar",
      ],
    },
    {
      id: 2,
      level: "Kelas XI",
      title: "Infrastruktur Jaringan & server",
      description:
        "Instalasi dan konfigurasi perangkat jaringan serta administrasi server fisik.",
      items: [
        "Routing & Switching",
        "Administrasi Sistem Linux",
        "Virtualisasi",
        "Keamanan Jaringan Dasar",
      ],
    },
    {
      id: 3,
      level: "Kelas XII",
      title: "Cloud Computing & IoT Advanced",
      description:
        "Membangun sistem berbasis awan (Cloud) dan integrasi perangkat IoT (Internet of Things).",
      items: [
        "Cloud Architecture (AWS/GCP)",
        "Containerization (Docker)",
        "Smart Home System",
        "Microservices",
      ],
    },
    {
      id: 4,
      level: "Kelas XIII",
      title: "Industrial Grade Project & Internship",
      description:
        "Tahun ke-4 fokus pada pematangan skill di industri dan pengerjaan proyek skala enterprise.",
      items: [
        "Magang Industri (1 Tahun)",
        "Sertifikasi Internasional",
        "Tugas Akhir Berbasis Produk",
        "Kewirausahaan Digital",
      ],
    },
  ];

  const techs = [
    { icon: "cloud", label: "AWS / Google Cloud" },
    { icon: "server", label: "Linux Server" },
    { icon: "wifi", label: "IoT Connectivity" },
    { icon: "layers", label: "Docker & K8s" },
  ];

  const facilities = [
    {
      title: "Data Center & Server Lab",
      description:
        "Mini Data Center dengan server rackmount enterprise untuk simulasi pengelolaan infrastruktur cloud dan hosting.",
      features: [
        "Server Rackmount",
        "Fiber Optic Network",
        "Cooling System Standard",
      ],
      image:
        "https://images.unsplash.com/photo-1584169417032-d34e8d805e8b?q=80&w=1309&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      icon: "server",
    },
    {
      title: "IoT & Smart System Workshop",
      description:
        "Workshop perakitan dan pemrograman perangkat IoT, dilengkapi dengan berbagai sensor, mikrokontroler, dan simulator.",
      features: [
        "Microcontroller Kits",
        "Smart Home Simulator",
        "Soldering Station",
      ],
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
      icon: "cpu",
    },
  ];

  return (
    <div className="bg-background font-sans">
      <HeroSection
        theme="silver"
        title="Sistem Informatika"
        highlight="Jaringan & Aplikasi"
        description="Program 4 tahun yang mencetak engineer masa depan di bidang Cloud Computing, IoT, dan Cyber Security."
        image="https://images.unsplash.com/photo-1555664424-778a1e5e1b48?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        badge="PROGRAM 4 TAHUN"
      />
      <StatisticsSection stats={stats} theme="silver" />
      <IntroSection
        theme="silver"
        programName="SIJA (4 Tahun)"
        aboutText={
          <>
            <p className="text-lg text-slate-600 leading-relaxed">
              SIJA adalah program keahlian unggulan dengan masa studi{" "}
              <strong className="text-slate-900 font-semibold">4 Tahun</strong>.
              Berbeda dengan TKJ, SIJA lebih mendalam pada integrasi sistem
              (System Integrator), Cloud Computing, dan pengembangan aplikasi
              berbasis layanan (SaaS).
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Siswa kelas XIII sepenuhnya berada di industri atau mengerjakan
              proyek riil, menjadikan lulusan SIJA setara dengan jenjang D1 dan
              siap memimpin tim teknis.
            </p>
          </>
        }
      />
      <RoadmapSection
        steps={steps}
        theme="silver"
        title="Kurikulum 4 Tahun"
        description="Desain kurikulum komprehensif yang memadukan hardware, software, dan infrastruktur modern."
      />
      <TechStackSection
        techs={techs}
        theme="silver"
        title="Teknologi Masa Depan"
      />
      <FacilitiesSection facilities={facilities} theme="silver" />
    </div>
  );
}
