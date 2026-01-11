"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export function CtaSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".cta-image", {
        scale: 0.9,
        opacity: 0,
        duration: 0.6,
        scrollTrigger: {
          trigger: ".cta-image",
          start: "top 85%",
        },
      });

      gsap.from(".cta-content", {
        x: 50,
        opacity: 0,
        duration: 0.6,
        scrollTrigger: {
          trigger: ".cta-content",
          start: "top 85%",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="bg-blue-600 text-white relative overflow-hidden"
    >
      <div className="container mx-auto px-16 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Side - Image Composition */}
          <div className="cta-image flex-1 relative w-full max-w-xl mx-auto md:mx-0 flex justify-center md:justify-start">
            <div className="relative w-full">
              {/* Decorations */}

              {/* Image */}
              <div className="relative z-10 px-4">
                <img
                  src="/cta.png"
                  alt="Siswa SMK Negeri 6"
                  className="w-full h-auto object-cover rounded-xl"
                />
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="cta-content flex-1 text-center md:text-left">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              Bergabunglah dengan <br /> kami!
            </h2>
            <p className="text-blue-100 text-lg mb-8 max-w-xl mx-auto md:mx-0">
              Tekan tombol berikut untuk menuju laman pendaftaran PPDB 2024.
            </p>
            <Link href="/pendaftaran">
              <Button
                size="lg"
                className="bg-red-600 cursor-pointer hover:bg-red-700 text-white rounded-sm px-8! h-12 text-base"
              >
                Daftar PPDB <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
