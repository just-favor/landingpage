import { TbUserSearch } from "react-icons/tb";
import InsightCard from "./InsightCard";

export default function StickyStack() {
    return (
      <div className="relative">
  
        {/* Section 1 */}
        <div className="sticky top-1 md:top-20 h-auto min-h-screen w-full flex items-center justify-center z-10 pb-10 md:pb-20 px-4 md:px-16" id="features">
          <div className="w-full md:max-w-400 bg-white h-auto lg:h-180 rounded-2xl p-6 md:p-10 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-3">
            <div className="flex flex-col items-start gap-5 w-full lg:w-2xl lg:p-20">
               <span className="font-light text-lg">MEANING</span>
               <span className="text-3xl md:text-4xl font-light">Strengthen connection</span>
               <span className="text-base md:text-lg font-light">Bring your people together through meaningful rituals, guided team-building exercises, and shared experiences.</span>
               <button className="bg-black rounded-full p-2 px-5 text-white/90 text-lg font-medium">Get Started</button>
            </div>

            {/* stack images  */}
            <div className="relative w-full lg:w-3xl h-64 md:h-100 lg:h-full rounded-2xl overflow-hidden flex items-center justify-center"
            style={{backgroundImage: `url('/ken-cheung-KonWFWUaAuk-unsplash.jpg')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'}} >
                <div className="absolute inset-0 bg-black/30"></div>
                <div className="relative bg-white/95 w-[90%] h-70 p-6 rounded-2xl flex items-start justify-between gap-4">
                  <div className="flex flex-col items-start justify-between h-full w-full">
                    <span className="text-sm font-medium bg-[#ffe100] rounded-2xl px-3 py-1 mb-3">8:30 am</span>
                    <h3 className="text-xl md:text-2xl font-medium text-black mb-1">Action Items for Backend Team <br />
                    <span className="text-base md:text-lg text-black/40">Task created on 7 Sep 2026</span></h3>
                    <div className="flex items-center gap-3">
                      <img src="/user1.JPG" alt="" className="size-12 md:size-15 rounded-full"/>
                      <img src="/user2.JPG" alt="" className="size-12 md:size-15 rounded-full"/>
                      <img src="/user3.JPG" alt="" className="size-12 md:size-15 rounded-full"/>
                    </div>
                  </div>
                  <div className="bg-white p-3 rounded-full shadow-lg">
                    <TbUserSearch className="size-7"/>
                  </div>
                </div>
            </div>
          </div>
        </div>
  
        {/* section 2 */}
        <div className="sticky top-7 md:top-30 h-auto min-h-screen w-full flex items-center justify-center z-20 pb-10 md:pb-20 px-4 md:px-16">
          <div className="w-full lg:max-w-400 bg-[#c9c7c4] h-auto lg:h-180 rounded-2xl p-6 md:p-10 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-3">
            <div className="flex flex-col items-start gap-5 w-full lg:w-2xl lg:p-20">
               <span className="font-light text-lg">INSIGHT</span>
               <span className="text-3xl md:text-4xl font-light">Culture pulse & insights</span>
               <span className="text-base md:text-lg font-light">Stay in tune with your team through lightweight check-ins and clear engagement data, giving leaders visibility.</span>
               <button className="bg-black rounded-full p-2 px-5 text-white/90 text-lg font-medium">Get Started</button>
            </div>

            <div className="relative w-full lg:w-3xl h-64 md:h-100 lg:h-full rounded-2xl overflow-hidden flex items-center justify-center"
            style={{backgroundImage: `url('/green.JPG')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'}} >
                <InsightCard />
            </div>
          </div>
        </div>

        {/* section 3 */}
        <div className="sticky top-14 md:top-40 h-auto min-h-screen w-full flex items-center justify-center z-30 pb-10 md:pb-20 px-4 md:px-16">
          <div className="w-full lg:max-w-400 bg-yellow-300 h-auto lg:h-180 rounded-2xl p-6 md:p-10 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-3">
            <div className="flex flex-col items-start gap-5 w-full lg:w-2xl lg:p-20">
               <span className="font-light text-lg">CULTURE</span>
               <span className="text-3xl md:text-4xl font-light">Recognition & shared wins</span>
               <span className="text-base md:text-lg font-light">Create a culture of appreciation with built-in recognition tools that make it easy to celebrate milestones.</span>
               <button className="bg-black rounded-full p-2 px-5 text-white/90 text-lg font-medium">Get Started</button>
            </div>

            <div className="w-full lg:w-3xl h-64 md:h-100 lg:h-full rounded-2xl relative text-white"
              style={{backgroundImage: `url('/john-cobb-IE_sifhay7o-unsplash.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'}}
            >
              <span className="text-sm md:text-lg bg-white/10 rounded-2xl backdrop-blur-md py-1 px-4 absolute top-5 left-5 md:top-20 md:left-30">• Slack Champion</span>
              <span className="text-sm md:text-lg bg-white/10 rounded-2xl backdrop-blur-md py-1 px-4 absolute top-16 right-5 md:top-70 md:right-10">• New Certification</span>
              <span className="text-sm md:text-lg bg-white/10 rounded-2xl backdrop-blur-md py-1 px-4 absolute top-28 left-5 md:top-120 md:left-30">• 4 Year Milestone</span>
            </div>
          </div>
        </div>

      </div>
    );
  }
