"use client";

import { HeroSection } from "@/components/major/HeroSection";
import { StatisticsSection } from "@/components/major/StatisticsSection";
import { IntroSection } from "@/components/major/IntroSection";
import { RoadmapSection } from "@/components/major/RoadmapSection";
import { TechStackSection } from "@/components/major/TechStackSection";
import { FacilitiesSection } from "@/components/major/FacilitiesSection";

export default function DPIBPage() {
  const stats = [
    { value: "100%", label: "Alumni Bekerja / Kuliah" },
    { value: "20+", label: "Mitra Industri Konstruksi" },
    { value: "10+", label: "Juara Lomba Desain" },
  ];

  const steps = [
    {
      id: 1,
      level: "Kelas X",
      title: "Dasar Konstruksi & Gambar",
      description:
        "Memahami dasar-dasar teknik bangunan dan keterampilan gambar teknik manual serta digital dasar.",
      items: [
        "Gambar Teknik Dasar",
        "Mekanika Teknik",
        "Dasar Konstruksi Bangunan",
        "K3LH & Budaya Kerja",
      ],
    },
    {
      id: 2,
      level: "Kelas XI",
      title: "Digital Modeling & CAD",
      description:
        "Fase pendalaman software arsitektur 2D/3D dan perhitungan biaya bangunan.",
      items: [
        "Aplikasi Perangkat Lunak (AutoCAD)",
        "Perencanaan Bisnis Konstruksi",
        "Estimasi Biaya (RAB)",
        "Konstruksi Jalan & Jembatan",
      ],
    },
    {
      id: 3,
      level: "Kelas XII",
      title: "Advanced BIM & Professional",
      description:
        "Fokus pada Building Information Modeling (BIM), manajemen proyek, dan kesiapan kerja.",
      items: [
        "Konstruksi Gedung & Utilitas",
        "Building Information Modeling (BIM)",
        "Produk Kreatif & Kewirausahaan",
        "Praktik Kerja Industri",
      ],
    },
  ];

  const techs = [
    { icon: "monitor", label: "AutoCAD" },
    { icon: "layers", label: "SketchUp" },
    { icon: "database", label: "Revit (BIM)" },
    { icon: "globe", label: "Lumion" },
    { icon: "map", label: "Civil 3D" },
  ];

  const facilities = [
    {
      title: "Lab Komputer Desain Arsitektur",
      description:
        "Fasilitas komputer spesifikasi workstation untuk rendering dan pemodelan 3D yang berat. Dilengkapi dengan lisensi software industri terkini seperti AutoCAD dan Revit.",
      features: [
        "PC Spek Workstation",
        "Dual Monitor Setup",
        "Software Berlisensi Resmi",
      ],
      image:
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2072&auto=format&fit=crop",
      icon: "monitor",
    },
    {
      title: "Studio Gambar Manual & Maket",
      description:
        "Ruang studio luas dengan meja gambar profesional untuk melatih kepekaan garis dan proporsi sebelum masuk ke digital. Area khusus untuk perakitan maket gedung dan infrastruktur.",
      features: [
        "Meja Gambar Adjustable",
        "Alat Ukur Tanah Digital (Theodolite)",
        "Workshop Maket",
      ],
      image:
        "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop",
      icon: "pen",
    },
  ];

  return (
    <div className="bg-background font-sans">
      <HeroSection
        theme="red"
        title="Desain Pemodelan &"
        highlight="Informasi Bangunan"
        description="Mewujudkan imajinasi arsitektur menjadi rancangan teknis yang presisi. Cetak biru masa depan dimulai dari garis yang kamu buat di sini."
        image="https://images.unsplash.com/photo-1583248483203-555f3d850303?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <StatisticsSection stats={stats} theme="red" />
      <IntroSection
        theme="red"
        programName="Desain Pemodelan & Informasi Bangunan"
        aboutText={
          <>
            <p className="text-lg text-slate-600 leading-relaxed">
              DPIB adalah kompetensi keahlian yang mempelajari perencanaan tata
              letak, struktur, dan estetika bangunan. Siswa diajarkan
              menerjemahkan ide abstrak menjadi gambar kerja yang{" "}
              <strong className="text-slate-900 font-semibold">
                siap bangun (Build-ready)
              </strong>
              .
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Di SMKN 6 Malang, kami mengintegrasikan teknologi BIM (Building
              Information Modeling) agar siswa tidak hanya pandai menggambar,
              tapi juga memahami manajemen informasi gedung secara utuh.
            </p>
          </>
        }
      />
      <RoadmapSection
        steps={steps}
        theme="red"
        title="Alur Pembelajaran & Kurikulum"
        description="Tahapan belajar dari dasar manual hingga penguasaan teknologi BIM mutakhir."
      />
      <TechStackSection
        techs={techs}
        theme="red"
        title="Software & Tools Industri"
      />
      <FacilitiesSection facilities={facilities} theme="red" />
    </div>
  );
}
