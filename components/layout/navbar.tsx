"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Menu, Search } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const profileItems = [
  {
    title: "Tentang Sekolah",
    description: "Profil singkat, sejarah, dan identitas SMK Negeri 6 Malang.",
    link: "/tentang-sekolah",
  },
  {
    title: "Visi & Misi",
    description:
      "Arah tujuan dan nilai-nilai utama yang dijunjung tinggi sekolah.",
    link: "/visi-misi",
  },
  {
    title: "Denah & Fasilitas",
    description:
      "Informasi mengenai lokasi gedung dan fasilitas penunjang belajar.",
    link: "/denah-fasilitas",
  },
  {
    title: "Program Unggulan",
    description:
      "Program khusus untuk meningkatkan kompetensi dan daya saing siswa.",
    link: "/program-unggulan",
  },
  {
    title: "Ekstrakurikuler",
    description:
      "Kegiatan non-akademik untuk mengembangkan minat dan bakat siswa.",
    link: "/ekstrakurikuler",
  },
  {
    title: "Galeri Siswa",
    description: "Dokumentasi kegiatan, karya, dan momen berharga para siswa.",
    link: "/galeri",
  },
  {
    title: "Prestasi Siswa",
    description: "Daftar pencapaian dan penghargaan yang diraih oleh siswa.",
    link: "/prestasi",
  },
];

const competencies = [
  {
    title: "Rekayasa Perangkat Lunak",
    description: "Pengembangan aplikasi web, mobile, dan desktop modern.",
    link: "/kompetensi/rpl",
  },
  {
    title: "Teknik Komputer Jaringan",
    description: "Administrasi infrastruktur jaringan dan keamanan siber.",
    link: "/kompetensi/tkj",
  },
  {
    title: "Sistem Informasi Jaringan Aplikasi",
    description: "Integrasi cloud computing dan pengembangan sistem IoT.",
    link: "/kompetensi/sija",
  },
  {
    title: "Teknik Permesinan",
    description: "Manufaktur komponen menggunakan mesin bubut, frais, dan CNC.",
    link: "/kompetensi/tpm",
  },
  {
    title: "Teknik Alat Berat",
    description: "Maintenance dan perbaikan unit alat berat industri.",
    link: "/kompetensi/tab",
  },
  {
    title: "Teknik Kendaraan Ringan",
    description: "Diagnosa dan servis kendaraan roda empat teknologi terkini.",
    link: "/kompetensi/tkr",
  },
  {
    title: "Otomotif Elektronik",
    description: "Spesialisasi sistem kontrol elektronik pada kendaraan.",
    link: "/kompetensi/oto",
  },
  {
    title: "Teknik Instalasi Tenaga Listrik",
    description: "Instalasi kelistrikan bangunan pintar dan otomasi industri.",
    link: "/kompetensi/titl",
  },
  {
    title: "Desain Pemodelan Informasi Bangunan",
    description: "Perancangan arsitektur digital dan pemodelan 3D (BIM).",
    link: "/kompetensi/dpib",
  },
  {
    title: "Konstruksi Jalan Irigasi Jembatan",
    description: "Teknik sipil untuk pembangunan infrastruktur publik.",
    link: "/kompetensi/kjij",
  },
];

export function Navbar() {
  const headerRef = useRef<HTMLElement>(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const header = headerRef.current;

      if (!header) return;

      if (currentScrollY < lastScrollY.current || currentScrollY < 100) {
        // Scrolling UP or at top
        gsap.to(header, { y: 0, duration: 0.3, ease: "power2.out" });
      } else if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        // Scrolling DOWN
        gsap.to(header, { y: "-100%", duration: 0.3, ease: "power2.out" });
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      ref={headerRef}
      className="fixed top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60"
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          {/* Logo Placeholder */}
          <div className="h-10 w-10">
            <Image
              src="./logo.png"
              alt="Logo SMK Negeri 6 Malang"
              width={40}
              height={40}
              className="h-full w-full object-contain"
            />
          </div>
          <div className="hidden md:block pt-1 pl-0.5">
            <p className="text-sm select-none font-bold leading-none">
              SMK NEGERI 6
            </p>
            <p className="text-xs select-none text-muted-foreground">MALANG</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link
            href="/"
            className="text-foreground hover:text-blue-600 transition-colors duration-300 border-b-2 border-blue-600"
          >
            Beranda
          </Link>

          <NavigationMenu>
            <NavigationMenuList className="gap-8">
              <NavigationMenuItem>
                <NavigationMenuTrigger className="h-auto w-auto p-0 bg-transparent! hover:bg-transparent! data-[state=open]:bg-transparent! text-muted-foreground hover:text-blue-600 data-[state=open]:text-blue-600 transition-colors duration-300 text-sm font-medium">
                  Profil
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {profileItems.map((item) => (
                      <li key={item.title}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={item.link}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none text-foreground">
                              {item.title}
                            </div>
                            <p className="text-muted-foreground mt-1 line-clamp-2 text-sm leading-snug">
                              {item.description}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="h-auto w-auto p-0 bg-transparent! hover:bg-transparent! data-[state=open]:bg-transparent! text-muted-foreground hover:text-blue-600 data-[state=open]:text-blue-600 transition-colors duration-300 text-sm font-medium">
                  Kompetensi Keahlian
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {competencies.map((item) => (
                      <li key={item.title}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={item.link}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none text-foreground">
                              {item.title}
                            </div>
                            <p className="text-muted-foreground mt-1 line-clamp-2 text-sm leading-snug">
                              {item.description}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <Link
            href="/blog"
            className="text-muted-foreground hover:text-blue-600 transition-colors duration-300"
          >
            Blog
          </Link>

          <Link
            href="/mitra-industri"
            className="text-muted-foreground hover:text-blue-600 transition-colors duration-300"
          >
            Mitra Industri
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <div className="relative w-40 lg:w-64">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Telusuri.."
              className="pl-9 rounded-sm bg-muted/50 border-transparent focus:bg-background focus:border-input transition-all"
            />
          </div>
          <Link href="/pendaftaran">
            <Button className="bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-200/80 text-white rounded-sm cursor-pointer font-semibold">
              Daftar PPDB
            </Button>
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>SMK Negeri 6 Malang</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-4 mt-8">
                <Link href="#" className="text-lg font-medium">
                  Beranda
                </Link>

                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="profil" className="border-none">
                    <AccordionTrigger className="py-0 text-lg font-medium hover:no-underline text-foreground">
                      Profil
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="flex flex-col gap-4 mt-4 pl-4 border-l-2 border-muted ml-1">
                        {profileItems.map((item) => (
                          <Link
                            key={item.title}
                            href="#"
                            className="text-base text-muted-foreground hover:text-blue-600 transition-colors"
                          >
                            {item.title}
                          </Link>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="kompetensi" className="border-none">
                    <AccordionTrigger className="py-0 text-lg font-medium hover:no-underline text-foreground">
                      Kompetensi Keahlian
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="flex flex-col gap-4 mt-4 pl-4 border-l-2 border-muted ml-1">
                        {competencies.map((item) => (
                          <Link
                            key={item.title}
                            href="#"
                            className="text-base text-muted-foreground hover:text-blue-600 transition-colors"
                          >
                            {item.title}
                          </Link>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <Link href="#blog" className="text-lg font-medium">
                  Blog
                </Link>

                <Link href="#mitra" className="text-lg font-medium">
                  Mitra Industri
                </Link>

                <Button className="bg-blue-600 w-full mt-4">PPDB 2024</Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
