"use client";

import { FaStar } from "react-icons/fa";

export default function TrustedBrands() {
  return (
    <section className="w-full max-w-4xl mx-auto py-16 overflow-hidden">

      {/* Heading */}
      <p
        className="text-center text-black text-2xl md:text-4xl font-extralight mb-6 md:mb-10 px-4">
        Trusted by the world&apos;s top brands
      </p>

      {/* Marquee */}
      <div className="relative w-full overflow-hidden my-25">

        {/* Left fade */}
        <div
          className="pointer-events-none absolute left-0 top-0 h-full w-32 z-10"
          style={{ background: "linear-gradient(to right, #EDECEA, transparent)" }}
        />

        {/* Right fade */}
        <div
          className="pointer-events-none absolute right-0 top-0 h-full w-32 z-10"
          style={{ background: "linear-gradient(to left, #EDECEA, transparent)" }}
        />

        <div className="flex marquee-track items-center gap-8 md:gap-16">

          {/* Your logos */}
          <img src="/Brands/logoipsum-11.webp" alt="brand1" className="h-7 md:h-12 w-auto object-contain" />
          <img src="/Brands/logoipsum-394.webp" alt="brand2" className="h-7 md:h-12 w-auto object-contain" />
          <img src="/Brands/logoipsum-397.webp" alt="brand3" className="h-7 md:h-12 w-auto object-contain" />
          <img src="/Brands/logoipsum-42.webp" alt="brand4" className="h-7 md:h-12 w-auto object-contain" />
          <img src="/Brands/logoipsum-53.webp" alt="brand5" className="h-7 md:h-12 w-auto object-contain" />
          <img src="/Brands/logoipsum-6.webp" alt="brand6" className="h-7 md:h-12 w-auto object-contain" />
          <img src="/Brands/logoipsum-8.webp" alt="brand7" className="h-7 md:h-12 w-auto object-contain" />

          {/* Duplicate for seamless loop */}
          <img src="/Brands/logoipsum-11.webp" alt="brand1" className="h-7 md:h-12 w-auto object-contain" />
          <img src="/Brands/logoipsum-394.webp" alt="brand2" className="h-7 md:h-12 w-auto object-contain" />
          <img src="/Brands/logoipsum-397.webp" alt="brand3" className="h-7 md:h-12 w-auto object-contain" />
          <img src="/Brands/logoipsum-42.webp" alt="brand4" className="h-7 md:h-12 w-auto object-contain" />
          <img src="/Brands/logoipsum-53.webp" alt="brand5" className="h-7 md:h-12 w-auto object-contain" />
          <img src="/Brands/logoipsum-6.webp" alt="brand6" className="h-7 md:h-12 w-auto object-contain" />
          <img src="/Brands/logoipsum-8.webp" alt="brand7" className="h-7 md:h-12 w-auto object-contain" />

        
        </div>
      </div>

      {/* Rating badge */}
      <div className="flex justify-center mt-10">
        <div className="inline-flex items-center gap-2 px-3 py-2 md:px-5 md:py-2.5 rounded-full border border-[#c8c5c0] bg-[#EDECEA] text-sm md:text-lg text-[#1a1a1a]">
          <span className="font-semibold">4.9/5</span>

          <span className="flex text-black gap-1">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </span>

          <span className="text-[#343434]">
            From <strong>2k+</strong> reviews
          </span>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .marquee-track {
          animation: marquee 22s linear infinite;
          width: max-content;
        }

        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

    </section>
  );
}