"use client";

import React, { useEffect, useRef } from 'react'
import TrustedBrands from './TrustedBrands';
import { DM_Serif_Display } from 'next/font/google'

const serif = DM_Serif_Display({
  subsets: ['latin'],
  weight: '400',
});

function Tether() {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (bgRef.current) {
        const rect = bgRef.current.getBoundingClientRect();
        const scrolled = window.scrollY;
        const elementTop = rect.top + scrolled;
        const offset = (scrolled - elementTop) * 0.15;
        bgRef.current.style.backgroundPositionY = `calc(50% + ${offset}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='p-3 h-auto md:h-screen flex items-center justify-center'>
            <div 
            ref={bgRef}
            className='rounded-3xl p-8 md:p-40 h-auto md:h-230 w-full flex items-center justify-center relative overflow-hidden min-h-[400px]' 
            style={{backgroundImage: "url('/adam-kool-ndN00KmbJ1c-unsplash.jpg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
            
            >
                <div className="absolute inset-0 bg-black/10"></div>

                <div className="relative text-white max-w-5xl flex flex-col gap-10 items-center justify-center mx-auto">
                <span className="text-lg bg-white/20 backdrop-blur-md p-1.5 px-8 font-medium rounded-full"> Tether </span>
                <h2 className={`${serif.className} text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-center leading-tight max-w-6xl mb-10`}>From collaboration to breakthroughs</h2>
                <button className="bg-[#fff700] text-gray-900 font-medium px-6 py-3 rounded-full text-lg" >Get started — it’s free</button>
                </div>
            </div>
        </div>
  )
}

export default Tether
