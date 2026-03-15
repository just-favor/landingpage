import TrustedBrands from './TrustedBrands';
import { DM_Serif_Display } from 'next/font/google'
const serif = DM_Serif_Display({ weight: '400', subsets: ['latin'] })

export default function Hero() {
    return (
      <section className="flex flex-col items-center justify-center text-center px-6">
        
        {/* Headline */}
        <h1 className={`${serif.className} text-6xl md:text-7xl lg:text-8xl font-light text-gray-900 leading-tight max-w-6xl mb-10`}>
          Building stronger, more connected teams
        </h1>
  
        {/* CTA Buttons */}
        <div className="flex items-center gap-5 mb-10">
          <button className="bg-[#fff700] text-gray-900 font-medium px-6 py-3 rounded-full text-lg">
            Get started — it's free
          </button>
          <button className="bg-white text-gray-900 font-medium px-6 py-3 rounded-full text-lg">
            Explore more
          </button>
        </div>
  
        {/* Social Proof */}
        <div className="flex flex-col items-center gap-2">
          {/* Overlapping Avatars */}
          <div className="flex -space-x-3">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="size-13 rounded-full border-2 border-[#ECEADE] bg-gray-300 overflow-hidden"
              >
                <img
                  src={`https://i.pravatar.cc/40?img=${i + 10}`}
                  alt={`User ${i}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          <p className="text-lg text-black">+8k Happy users</p>
        </div>
  
          
          {/* Card section  */}
            
        <section className="my-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-3 rounded-2xl overflow-hidden mx-auto">
        
        {/* Left Card */}
        <div className="bg-[#1C1C1C] rounded-2xl p-8 md:p-15 flex flex-col justify-between sm:min-h-150 md:min-h-145">
          <p className="text-white text-left text-4xl font-light leading-snug max-w-lg">
            Keep everyone aligned and engaged with tools designed for real-time collaboration.
          </p>
          <div className="flex flex-col gap-2">
            {["Employee workflow", "Generate invoices", "Connections"].map((item) => (
              <button
                key={item}
                className="w-fit text-white font-semibold text-lg border tracking-wider border-white/30 rounded-full px-4 py-2 hover:bg-white/10 transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Center Card  */}
        <div className="rounded-2xl overflow-hidden relative flex items-end justify-center sm:min-h-150 md:min-h-0"
          style={{ background: 'linear-gradient(to bottom, #E8F532, #fff9c4, #ffff)' }} >
          <img
            src="/phone-mock.webp"
            alt="App mockup"
            className="w-[75%] object-contain drop-shadow-2xl"
          />
        </div>

        {/* Right Card*/}
        <div className="rounded-2xl overflow-hidden sm:min-h-150">
          <img
            src="/smile-800x800.webp"
            alt="Happy user"
            className="w-full h-full object-cover object-top"
          />
        </div>

      </div>
    </section>

    <TrustedBrands />
      </section>
    );
  }