export default function FeatureCard() {
    return (
      <section className="bg-[#cfcac4] py-20 px-8">
        <div className="max-w-7xl mx-auto bg-[#e7e6e3] rounded-3xl p-16 grid grid-cols-2 gap-16 items-center">
  
          {/* LEFT CONTENT */}
          <div className="max-w-md">
            <p className="text-xs tracking-[0.2em] uppercase text-gray-600 mb-4">
              Meaning
            </p>
  
            <h2 className="text-4xl font-light mb-6">
              Strengthen connection
            </h2>
  
            <p className="text-gray-600 leading-relaxed mb-8">
              Bring your people together through meaningful rituals,
              guided team-building exercises, and shared experiences.
            </p>
  
            <button className="bg-black text-white px-6 py-3 rounded-full text-sm">
              Get Started
            </button>
          </div>
  
          {/* RIGHT IMAGE */}
          <div className="relative w-full h-[420px] rounded-2xl overflow-hidden">
  
            <img
              src="/plant.jpg"
              alt="workspace plant"
              className="w-full h-full object-cover"
            />
  
            {/* FLOATING CARD */}
            <div className="absolute bottom-8 left-8 bg-white rounded-2xl p-6 shadow-xl w-[340px]">
  
              {/* HEADER */}
              <div className="flex items-center justify-between mb-4">
                <span className="bg-yellow-300 text-xs px-3 py-1 rounded-full">
                  8:30 am
                </span>
  
                <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-sm">
                  👤
                </div>
              </div>
  
              {/* TEXT */}
              <h4 className="font-medium">
                Action Items for Backend Team
              </h4>
  
              <p className="text-sm text-gray-500 mb-4">
                Task created on 7 Sep 2026
              </p>
  
              {/* AVATARS */}
              <div className="flex -space-x-2">
                <img
                  src="/avatar1.jpg"
                  alt="user"
                  className="w-8 h-8 rounded-full border-2 border-white"
                />
                <img
                  src="/avatar2.jpg"
                  alt="user"
                  className="w-8 h-8 rounded-full border-2 border-white"
                />
                <img
                  src="/avatar3.jpg"
                  alt="user"
                  className="w-8 h-8 rounded-full border-2 border-white"
                />
              </div>
  
            </div>
          </div>
  
        </div>
      </section>
    );
  }