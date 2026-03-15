"use client";

import { DM_Serif_Display } from 'next/font/google'
import { useEffect, useState, useRef } from 'react';
const serif = DM_Serif_Display({ weight: '400', subsets: ['latin'] })

function AIfeats() {
  const [visibleCount, setVisibleCount] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let timers: ReturnType<typeof setTimeout>[] = [];

    const runAnimation = () => {
      setVisibleCount(0);
      timers.push(setTimeout(() => setVisibleCount(1), 500));
      timers.push(setTimeout(() => setVisibleCount(2), 2500));
      timers.push(setTimeout(() => setVisibleCount(3), 4500));
      timers.push(setTimeout(() => runAnimation(), 8000));
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          runAnimation();
        } else {
          timers.forEach(clearTimeout);
          timers = [];
          setVisibleCount(0);
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => { observer.disconnect(); timers.forEach(clearTimeout); };
  }, []);

  return (
    <section className="min-h-screen mx-auto px-4 md:px-0">
      <div className="mx-auto text-center max-w-3xl">
        <h1 className={`${serif.className} text-4xl md:text-6xl lg:text-7xl font-light text-gray-900 leading-tight max-w-6xl mb-10`}>
          Proven results with innovative AI features
        </h1>
        <p className="text-lg md:text-2xl font-medium">
          Thousands of teams trust Tether to deliver measurable ROI, unlock greater productivity, and harness the power of AI.
        </p>
      </div>

      {/* grid section */}
      <section className="my-10 md:my-20 flex items-center justify-center w-full md:w-[85%] p-4 md:p-8 mx-auto">
        <div className="w-full grid grid-cols-1 lg:grid-cols-[1fr_400px_400px] gap-4">

          {/* Left: Chat UI Card */}
          <div ref={sectionRef} className="relative rounded-3xl overflow-hidden min-h-[820px]">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80')` }}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center px-6 md:px-10 py-12">
              <div className="max-w-2xl w-full bg-stone-200 backdrop-blur-sm rounded-2xl p-6" style={{ height: '520px' }}>
                <div className="flex flex-col gap-4 overflow-hidden h-full justify-center">
                  {/* AI message 1 */}
                  <div
                    className="flex items-start gap-3 transition-all duration-700 ease-out"
                    style={{
                      opacity: visibleCount >= 1 ? 1 : 0,
                      transform: visibleCount >= 1 ? 'translateY(0)' : 'translateY(40px)',
                      maxHeight: visibleCount >= 1 ? '200px' : '0',
                    }}
                  >
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-slate-400 to-slate-600 flex-shrink-0 mt-1" />
                    <div className="bg-white rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm max-w-[80%] md:max-w-[50%]">
                      <p className="text-lg font-semibold text-gray-900 mb-0.5">Tether AI</p>
                      <p className="text-lg text-gray-600">How can I help you today?</p>
                    </div>
                  </div>
                  {/* User message */}
                  <div
                    className="flex items-end gap-3 justify-end transition-all duration-700 ease-out"
                    style={{
                      opacity: visibleCount >= 2 ? 1 : 0,
                      transform: visibleCount >= 2 ? 'translateY(0)' : 'translateY(40px)',
                      maxHeight: visibleCount >= 2 ? '200px' : '0',
                    }}
                  >
                    <div className="bg-[#EEFF00] rounded-2xl rounded-br-sm px-4 py-3 max-w-[80%] md:max-w-[50%] ">
                      <p className="text-lg font-bold text-gray-900 mb-0.5">Jacob Smith</p>
                      <p className="text-lg text-gray-800 leading-snug">
                        What's a fun activity that I can set up for the team meeting tomorrow?
                      </p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex-shrink-0" />
                  </div>
                  {/* AI message 2 */}
                  <div
                    className="flex items-start gap-3 transition-all duration-700 ease-out"
                    style={{
                      opacity: visibleCount >= 3 ? 1 : 0,
                      transform: visibleCount >= 3 ? 'translateY(0)' : 'translateY(40px)',
                      maxHeight: visibleCount >= 3 ? '200px' : '0',
                    }}
                  >
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-slate-400 to-slate-600 flex-shrink-0 mt-1" />
                    <div className="bg-white rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm max-w-[80%] md:max-w-[50%]">
                      <p className="text-lg font-semibold text-gray-900 mb-0.5">Tether AI</p>
                      <p className="text-lg text-gray-600">Let me generate a few ideas…</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Middle column */}
          <div className="flex flex-col gap-4">
            <div className="bg-white rounded-3xl p-10 flex-1 flex flex-col items-center justify-between">
              <div>
                <h2 className="text-4xl font-normal text-black mb-5">The choice of thousands</h2>
                <div className="flex -space-x-2 mb-5">
                  {['bg-amber-400', 'bg-rose-400', 'bg-emerald-400'].map((color, i) => (
                    <div key={i} className={`w-9 h-9 rounded-full ${color} border-2 border-white`} />
                  ))}
                </div>
              </div>
              <p className="text-lg text-black leading-relaxed">Over 8,000 clients trust Tether to connect their teams</p>
            </div>

            <div className="bg-white rounded-3xl p-10 flex-1 flex flex-col items-start justify-between">
              <p className="text-6xl font-bold text-black mb-6">+4<span className="text-3xl font-medium">x</span></p>
              <p className="text-lg text-black leading-relaxed">Average increase in team productivity following our operational audits</p>
            </div>
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-4">
            <div className="bg-white rounded-3xl p-10 h-70 flex flex-col items-start justify-between">
              <p className="text-6xl font-bold text-gray-900 tracking-tighter">92<span className="text-2xl font-medium">%</span></p>
              <p className="text-lg leading-relaxed">Of clients report measurable ROI within 90 days of using Tether</p>
            </div>

            <div className="relative rounded-3xl overflow-hidden flex-1 min-h-[600px] md:min-h-[260px] bg-gradient-to-b from-[#ffe600] via-[#fff9ac] to-[#ffffff]">
              <div className="absolute inset-0 flex items-center justify-center">
                <img src="/IMG_5480-removebg-preview.png" alt="" />
              </div>
              <div className="absolute inset-x-4 bottom-4">
                <button className="w-full bg-white text-gray-900 font-semibold text-sm py-3.5 rounded-full hover:bg-yellow-300 transition-colors shadow-sm">
                  Get Started
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>
    </section>
  )
}

export default AIfeats
