"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
// import { DotLottieReact } from "@lottiefiles/dotlottie-react";

gsap.registerPlugin(ScrollTrigger);

export function FacilitiesSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".facilities-text", {
        x: -50,
        opacity: 0,
        duration: 0.6,
        scrollTrigger: {
          trigger: ".facilities-text",
          start: "top 80%",
        },
      });

      gsap.from(".facility-image-1", {
        scale: 0.9,
        opacity: 0,
        duration: 0.5,
        delay: 0.2,
        scrollTrigger: {
          trigger: ".facility-grid",
          start: "top 80%",
        },
      });

      gsap.from(".facility-image-2", {
        scale: 0.9,
        opacity: 0,
        duration: 0.5,
        delay: 0.3,
        scrollTrigger: {
          trigger: ".facility-grid",
          start: "top 80%",
        },
      });

      gsap.from(".facility-image-3", {
        scale: 0.9,
        opacity: 0,
        duration: 0.5,
        delay: 0.4,
        scrollTrigger: {
          trigger: ".facility-grid",
          start: "top 80%",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-24">
      <div className="container mx-auto px-16">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="facility-grid flex-1 grid grid-cols-2 gap-4 h-96">
            <div className="facility-image-1 relative rounded-2xl overflow-hidden shadow-lg h-full">
              <Image
                src="./foto1.webp"
                alt="Fasilitas 1"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                width={500}
                height={500}
              />
            </div>
            <div className="grid grid-rows-2 gap-4 h-96">
              <div className="facility-image-2 relative rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="./foto2.webp"
                  alt="Fasilitas 2"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="facility-image-3 relative rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="./foto3.webp"
                  alt="Fasilitas 3"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
          <div className="facilities-text flex-1">
            {/* <DotLottieReact
              className="max-w-sm absolute -left-52 -top-8 w-1/2"
              src="/lottie/pencil.lottie"
              loop
              autoplay
            /> */}
            <Badge
              variant="outline"
              className="mb-6 border-blue-200 font-semibold bg-blue-50 text-blue-700 px-4 py-1 text-sm rounded-sm"
            >
              SEDIKIT TENTANG KAMI
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              SMK Negeri 6 Malang - Menjadi Pilar Keunggulan Teknik dan
              Teknologi
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              SMK Negeri 6 Malang adalah sekolah kejuruan negeri yang berlokasi
              strategis di Kota Malang, fokus pada pengembangan keterampilan
              praktis, karakter unggul, dan ke-siapan kerja siswa. Dengan
              fasilitas modern, pengajar profesional, serta jaringan mitra
              industri yang luas.{" "}
            </p>

            <Link href="/prestasi">
              <Button
                size="lg"
                className="bg-blue-600 cursor-pointer hover:bg-blue-700 shadow-lg shadow-blue-300 text-white rounded-sm px-8! h-12 text-base"
              >
                Lihat Prestasi Kami <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
