"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
// import { DotLottieReact } from "@lottiefiles/dotlottie-react";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: "FJ Saputra",
    role: "Review Google Maps",
    quote:
      "salah satu sekolah menengah kejuruan negeri yang cukup dikenal di kota Malang, dengan berbagai jurusan keahlian.. terletak di dekat gate exit tol Madyopuro",
    image:
      "https://lh3.googleusercontent.com/a-/ALV-UjUBmg_6l_jcBpqzgsTyGGihkqdh7BWEpn3L_Sz7_GpipckZoQ=w41-h41-p-rp-mo-ba5-br100",
  },
  {
    name: "Sarah Wijaya",
    role: "Siswa Kelas XII RPL",
    quote:
      "Lingkungan belajar yang kondusif dan dukungan penuh untuk pengembangan minat bakat di bidang teknologi. Saya bangga menjadi bagian dari sekolah ini.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop",
  },
];

export function TestimonialsSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".testimonial-image-container", {
        scale: 0.9,
        opacity: 0,
        duration: 0.6,
        scrollTrigger: {
          trigger: ".testimonial-image-container",
          start: "top 80%",
        },
      });

      gsap.from(".testimonial-img-1", {
        rotation: -10,
        opacity: 0,
        duration: 0.6,
        delay: 0.2,
        scrollTrigger: {
          trigger: ".testimonial-image-container",
          start: "top 80%",
        },
      });

      gsap.from(".testimonial-img-2", {
        rotation: 10,
        opacity: 0,
        duration: 0.6,
        delay: 0.4,
        scrollTrigger: {
          trigger: ".testimonial-image-container",
          start: "top 80%",
        },
      });

      gsap.from(".testimonial-content", {
        x: 50,
        opacity: 0,
        duration: 0.6,
        scrollTrigger: {
          trigger: ".testimonial-content",
          start: "top 80%",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-24 overflow-hidden bg-white">
      <div className="container mx-auto px-16">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="testimonial-image-container flex-1 relative min-h-[400px] w-full lg:w-auto flex items-center justify-center order-2 lg:order-1">
            {/* Polygon Yellow Background */}
            <div
              className="absolute w-full h-full bg-yellow-400"
              style={{
                clipPath: "polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)",
                zIndex: 0,
              }}
            ></div>
            <div className="relative z-10 flex gap-4">
              <img
                src="https://lh3.googleusercontent.com/geougc-cs/AMBA38sO3o4hboyPsHdMkSO7F2O8O7P7msLfk9w7rxfq-5saMbfS2WWT7iXWPOc1p_e9xwqLvxJLSIlPO1KWhMTqTy8YHmkAjEby7wsDKNSiuR8x5BWsTCRoRNAtPWKr-WXUNdqJ0PaTrNZrFBc=w340-h509-p"
                alt="gambar-1"
                className="testimonial-img-1 w-64 h-80 object-cover rounded-lg shadow-xl -rotate-3 border-4 border-white"
              />
              <img
                src="https://lh3.googleusercontent.com/geougc-cs/AMBA38tb3YelJuRfnesvebIuOJJW69g-r8iqKySUVjNzunrrtTCcmFDMHoOjF01dBblEb2cECQjGCmjaXaokGVcj6KiVyyde2aatuYET7F101G9ie5S7PAEqYieca2znWyc-ZlToOwWehKu-F0BF=w340-h255-p"
                alt="Students Happy 2"
                className="testimonial-img-2 w-64 h-80 object-cover rounded-lg shadow-xl rotate-6 mt-12 border-4 border-white hidden md:block"
              />
            </div>
          </div>

          <div className="testimonial-content flex-1 order-1 lg:order-2">
            <Badge className="mb-2 border-blue-200 font-semibold bg-blue-50 text-blue-700 px-4 py-1 text-sm rounded-sm">
              TESTIMONI
            </Badge>
            <h3 className="text-4xl font-bold mb-8 text-slate-900">
              Pendapat mereka tentang <br /> SMK Negeri 6
            </h3>

            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
              <p className="text-lg text-slate-600 italic mb-6">
                &quot;{testimonials[0].quote}&quot;
              </p>
              <div className="flex items-center gap-4">
                <Avatar className="h-12 w-12 border-2 border-white shadow-sm">
                  <AvatarImage src={testimonials[0].image} />
                  <AvatarFallback>AT</AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-bold text-slate-900">
                    {testimonials[0].name}
                  </h4>
                  <a
                    target="_blank"
                    href="https://maps.app.goo.gl/zGN6eAF9weANY1Pb6"
                    className="text-sm text-blue-500 hover:underline"
                  >
                    {testimonials[0].role}
                  </a>
                </div>
              </div>
              {/* <DotLottieReact
                className="max-w-sm absolute -left-full top-72 w-full"
                src="/lottie/birdie.lottie"
                loop
                autoplay
              /> */}
            </div>

            {/* <div className="flex gap-2 mt-6 justify-center lg:justify-start"> */}
            {/* <span className="h-3 w-3 rounded-full bg-slate-300 cursor-pointer"></span> */}
            {/* <span className="h-3 w-3 rounded-full bg-blue-600 cursor-pointer"></span> */}
            {/* <span className="h-3 w-3 rounded-full bg-slate-300 cursor-pointer"></span> */}
            {/* </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
