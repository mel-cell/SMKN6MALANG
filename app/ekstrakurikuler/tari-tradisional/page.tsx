"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

import { Music, Star, Calendar, MapPin, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function TariPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Text Animation
      gsap.from(".hero-text", {
        x: -30,
        opacity: 0,
        duration: 0.7,
        ease: "power2.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen pt-24 bg-stone-50 font-sans"
    >
      {/* Hero Section - Arts Theme (Pink/Gold/Stone) */}
      <section className="relative h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1535525153412-5a42439a210d?q=80&w=2070&auto=format&fit=crop"
            alt="Tari Tradisional"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-r from-pink-900/80 to-transparent mix-blend-multiply"></div>
        </div>
        <div className="container mx-auto px-16 relative z-10 h-full flex flex-col justify-center text-white">
          <div className="hero-text">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-6 h-6 text-yellow-400" />
              <span className="font-serif italic text-xl text-yellow-200">
                Seni & Budaya
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif mb-6">
              Sekar Arum <br />{" "}
              <span className="text-pink-300">Dance Club</span>
            </h1>
            <p className="text-xl text-stone-100 max-w-xl italic font-light">
              &quot;Melestarikan budaya bangsa melalui gerak tari yang anggun
              dan penuh makna.&quot;
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-12">
              <div>
                <h2 className="text-4xl font-serif text-pink-900 mb-6">
                  Profil Sanggar
                </h2>
                <p className="text-lg text-stone-600 leading-loose">
                  Sanggar Tari Sekar Arum SMK Negeri 6 Malang berfokus pada
                  pelestarian tari tradisional Nusantara, khususnya tari topeng
                  Malangan dan tari kreasi baru. Kami percaya bahwa seni tari
                  bukan hanya tentang gerakan, tetapi juga tentang penjiwaan,
                  kedisiplinan, dan rasa cinta terhadap warisan leluhur.
                </p>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-sm border border-pink-100">
                <h3 className="text-2xl font-serif text-pink-900 mb-6 flex items-center gap-2">
                  <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />{" "}
                  Prestasi & Penampilan
                </h3>
                <ul className="space-y-4">
                  {[
                    "Penyaji Terbaik FLS2N Tari Tradisional Tingkat Kota 2024",
                    "Penampil Utama dalam Upacara HUT Kota Malang",
                    "Juara 1 Lomba Tari Kreasi Universitas Brawijaya",
                    "Delegasi Misi Budaya ke Thailand 2023",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-4 text-stone-700 border-b border-pink-50 pb-3 last:border-0"
                    >
                      <span className="text-pink-400 font-serif text-xl italic">
                        0{i + 1}.
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-pink-900 text-white p-8 rounded-t-3xl rounded-b-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
                <h3 className="text-2xl font-serif mb-6 relative z-10">
                  Informasi Latihan
                </h3>
                <div className="space-y-6 relative z-10">
                  <div className="flex gap-4">
                    <Calendar className="w-6 h-6 text-pink-300" />
                    <div>
                      <p className="font-bold text-lg">Rabu & Jumat</p>
                      <p className="text-pink-200">15.00 - 17.00 WIB</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <MapPin className="w-6 h-6 text-pink-300" />
                    <div>
                      <p className="font-bold text-lg">Aula Kesenian</p>
                      <p className="text-pink-200">Gedung C Lt. 2</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Music className="w-6 h-6 text-pink-300" />
                    <div>
                      <p className="font-bold text-lg">Pembina</p>
                      <p className="text-pink-200">Ibu Ratna Sari, S.Sn</p>
                    </div>
                  </div>
                </div>
                <Button className="w-full mt-8 bg-white text-pink-900 hover:bg-pink-100 font-serif">
                  Daftar Audisi
                </Button>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div className="relative h-32 w-full rounded-xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1516475429286-465d815a0df4?q=80&w=800&auto=format&fit=crop"
                    className="object-cover"
                    alt="Dance 1"
                    fill
                  />
                </div>
                <div className="relative h-32 w-full rounded-xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1535525153412-5a42439a210d?q=80&w=800&auto=format&fit=crop"
                    className="object-cover"
                    alt="Dance 2"
                    fill
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
