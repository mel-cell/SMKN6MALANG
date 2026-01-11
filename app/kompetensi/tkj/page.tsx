"use client";

import { HeroSection } from "@/components/major/HeroSection";
import { StatisticsSection } from "@/components/major/StatisticsSection";
import { IntroSection } from "@/components/major/IntroSection";
import { RoadmapSection } from "@/components/major/RoadmapSection";
import { TechStackSection } from "@/components/major/TechStackSection";
import { FacilitiesSection } from "@/components/major/FacilitiesSection";

export default function TKJPage() {
  const stats = [
    { value: "95%", label: "Serapan Industri ISP" },
    { value: "3+", label: "Sertifikasi Global" },
    { value: "200+", label: "Siswa MTCNA Certified" },
  ];

  const steps = [
    {
      id: 1,
      level: "Kelas X",
      title: "Dasar Jaringan & Sistem Komputer",
      description:
        "Memahami model OSI, topologi jaringan, dan perakitan komputer.",
      items: [
        "Perakitan Komputer",
        "Instalasi OS",
        "Dasar Jaringan (LAN)",
        "K3LH",
      ],
    },
    {
      id: 2,
      level: "Kelas XI",
      title: "Administrasi Infrastruktur Jaringan",
      description: "Konfigurasi router, switch, dan manajemen bandwidth.",
      items: [
        "Routing & Switching (MikroTik/Cisco)",
        "VLAN & Trunking",
        "Administrasi Server Dasar",
        "Teknologi Layanan Jaringan",
      ],
    },
    {
      id: 3,
      level: "Kelas XII",
      title: "Keamanan Jaringan & Fiber Optic",
      description:
        "Fokus pada keamanan jaringan, firewall, dan teknologi serat optik (FTTH).",
      items: [
        "Network Security",
        "Instalasi Fiber Optic",
        "Troubleshooting Jaringan Luas (WAN)",
        "Project Based Learning",
      ],
    },
  ];

  const techs = [
    { icon: "server", label: "MikroTik RouterOS" },
    { icon: "terminal", label: "Cisco IOS" },
    { icon: "globe", label: "Fiber Optic" },
    { icon: "shield", label: "Linux Server" },
    { icon: "cpu", label: "IoT Basic" },
  ];

  const facilities = [
    {
      title: "Lab Jaringan Cisco & MikroTik",
      description:
        "Laboratorium dengan perangkat router dan switch standar industri untuk simulasi jaringan skala besar.",
      features: [
        "Router MikroTik Terbaru",
        "Switch Cisco Catalyst",
        "Server Rack",
      ],
      image:
        "https://images.unsplash.com/photo-1606904825846-647eb07f5be2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      icon: "server",
    },
    {
      title: "Workshop Fiber Optic",
      description:
        "Area praktik penyambungan kabel fiber optik (splicing) dan instalasi jaringan FTTH (Fiber To The Home).",
      features: ["Splicer Fusion Machine", "OTDR", "ODP & ODC Simulator"],
      image:
        "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&w=2070&auto=format&fit=crop",
      icon: "globe",
    },
  ];

  return (
    <div className="bg-background font-sans">
      <HeroSection
        theme="purple"
        title="Teknik Komputer"
        highlight="& Jaringan"
        description="Mencetak teknisi ahli yang menguasai infrastruktur jaringan, keamanan siber, dan teknologi fiber optik."
        image="https://images.unsplash.com/photo-1744868562210-fffb7fa882d9?q=80&w=1113&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <StatisticsSection stats={stats} theme="purple" />
      <IntroSection
        theme="purple"
        programName="TKJ (Network Engineering)"
        aboutText={
          <>
            <p className="text-lg text-slate-600 leading-relaxed">
              TKJ fokus pada perancangan, instalasi, dan pemeliharaan
              infrastruktur jaringan komputer. Siswa dilatih untuk menguasai
              konfigurasi perangkat jaringan dari vendor terkemuka seperti
              <strong className="text-slate-900 font-semibold">
                {" "}
                MikroTik dan Cisco
              </strong>
              .
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Di era digital, konektivitas adalah kunci. Lulusan TKJ SMKN 6
              Malang siap menjadi garda terdepan dalam menjaga stabilitas
              koneksi internet dan keamanan data perusahaan.
            </p>
          </>
        }
      />
      <RoadmapSection
        steps={steps}
        theme="purple"
        title="Alur Belajar Network Engineer"
        description="Kurikulum berbasis sertifikasi industri untuk kompetensi jaringan yang valid."
      />
      <TechStackSection
        techs={techs}
        theme="purple"
        title="Perangkat & Teknologi"
      />
      <FacilitiesSection facilities={facilities} theme="purple" />
    </div>
  );
}
