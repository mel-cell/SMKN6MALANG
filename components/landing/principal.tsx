"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

function QuoteIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="none"
    >
      <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" />
    </svg>
  );
}

export function PrincipalMessageSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".principal-image-section", {
        x: -50,
        opacity: 0,
        duration: 0.6,
        scrollTrigger: {
          trigger: ".principal-image-section",
          start: "top 80%",
        },
      });

      gsap.from(".principal-text-section", {
        x: 50,
        opacity: 0,
        duration: 0.6,
        scrollTrigger: {
          trigger: ".principal-text-section",
          start: "top 80%",
        },
      });

      gsap.to(".shape-1", {
        scale: 1,
        rotate: 45,
        duration: 0.8,
        ease: "elastic.out(1, 0.3)",
        delay: 0.3,
        scrollTrigger: {
          trigger: ".principal-image-section",
          start: "top 80%",
        },
      });

      gsap.to(".shape-2", {
        scale: 1,
        duration: 0.8,
        rotate: 45,
        ease: "elastic.out(1, 0.3)",
        delay: 0.5,
        scrollTrigger: {
          trigger: ".principal-image-section",
          start: "top 80%",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="profil"
      className="pt-24 pb-44 bg-white overflow-hidden"
    >
      <div className="container mx-auto px-16">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="principal-image-section flex-1 relative order-2 lg:order-1">
            <div className="relative z-20 max-w-md mx-auto">
              <Image
                src="/sambutan.png"
                alt="Kepala Sekolah"
                className="w-full h-auto object-cover"
                width={500}
                height={500}
              />
            </div>
            {/* Abstract Shapes Background */}
            <div className="shape-1 scale-0 absolute top-24 -left-2 w-40 h-40 bg-yellow-400 rounded-4xl z-10"></div>
            <div className="absolute -bottom-10 -right-2 w-64 h-64 bg-red-500 rounded-[3rem] rotate-45 z-10 opacity-90"></div>
            <div className="shape-2 scale-0 absolute top-24 right-24 w-24 h-24 bg-teal-400 rounded-xl z-10 translate-x-1/2 -translate-y-1/2 shadow-lg"></div>
          </div>
          <div className="principal-text-section flex-1 order-1 lg:order-2 ml-10">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-8">
              Sambutan Kepala Sekolah
            </h2>
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <QuoteIcon className="h-12 w-12 text-slate-200 mb-4" />
              <p>
                Assalamualaikum Wr. Wb. Selamat datang di portal resmi SMK
                Negeri 6 Malang. Kami ber-komitmen untuk menjadi pilar
                keunggulan teknik dan teknologi, mencetak lulusan yang
                profesional, berkarakter unggul, dan siap kerja. Dengan
                fasilitas modern dan kurikulum yang adaptif, kami siap menjadi
                jembatan sukses bagi masa depan siswa dan mendukung pertumbuhan
                industri di Malang dan sekitarnya. Mari bergabung bersama kami.{" "}
              </p>
              <div className="pt-6">
                <h4 className="text-xl font-semibold text-slate-900">
                  Drs. Muhammad Taufik S.Pd
                </h4>
                <p className="text-[16px] text-blue-600">
                  Kepala Sekolah SMK Negeri 6 Malang
                </p>
                {/* <DotLottieReact
                  className="max-w-md absolute left-64 -bottom-20 w-full"
                  src="/lottie/books.lottie"
                  loop
                  autoplay
                /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
