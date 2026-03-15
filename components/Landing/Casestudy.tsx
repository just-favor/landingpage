"use client";

import React, { useEffect, useRef, useState } from 'react'
import { FaPlay } from "react-icons/fa6";

const CASE_STUDY_VIDEO = "https://www.youtube.com/watch?v=8jPQjjsBbIc";

function getYouTubeId(url: string) {
  const match = url.match(/(?:v=|youtu\.be\/)([^&?/]+)/);
  return match ? match[1] : null;
}

interface VideoModalProps {
  youtubeUrl: string;
  onClose: () => void;
}

function VideoModal({ youtubeUrl, onClose }: VideoModalProps) {
  const videoId = getYouTubeId(youtubeUrl);
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ background: "rgba(0,0,0,0.85)" }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl mx-4"
        style={{ aspectRatio: "16/9" }}
        onClick={(e) => e.stopPropagation()}
      >
        <iframe
          src={embedUrl}
          className="w-full h-full rounded-2xl"
          allow="autoplay; fullscreen"
          allowFullScreen
          style={{ border: "none" }}
        />
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white text-4xl leading-none hover:text-yellow-400 transition-colors"
          aria-label="Close video"
        >
          &times;
        </button>
      </div>
    </div>
  );
}

function Casestudy() {
  const bgRef = useRef<HTMLDivElement>(null);
  const [showVideo, setShowVideo] = useState(false);
  const videoId = getYouTubeId(CASE_STUDY_VIDEO);
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  useEffect(() => {
    const handleScroll = () => {
      if (bgRef.current) {
        const rect = bgRef.current.getBoundingClientRect();
        const scrolled = window.scrollY;
        const elementTop = rect.top + scrolled;
        const offset = (scrolled - elementTop) * 0.3;
        bgRef.current.style.backgroundPositionY = `${offset}px`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="p-3 md:p-5 flex items-center justify-center my-10 md:my-30" id="results">
      <div
        ref={bgRef}
        className="bg-black rounded-3xl p-6 md:p-40 w-full relative overflow-hidden min-h-[500px] md:h-230"
        style={{
          backgroundImage: `url('${thumbnailUrl}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative text-white max-w-4xl flex flex-col gap-6 md:gap-10">
          <h2 className="text-sm md:text-lg font-semibold leading-tight mb-3 md:mb-5">CASE STUDY</h2>
          <p className="text-xl md:text-4xl font-light leading-relaxed mb-2 md:mb-4">
            Tether has completely transformed how our remote team connects. What used to feel like a scattered group
            of individuals now feels like a true culture we're proud of.
          </p>
          <p className="text-xl md:text-4xl font-light leading-relaxed mb-2 md:mb-4">
            Our people are more engaged, communication flows naturally, and we've seen measurable
            improvements in both morale and productivity
          </p>
        </div>
        <div className="flex items-center justify-between mt-6 md:mt-10 text-white">
          <div className="flex flex-col">
            <span className="text-xl md:text-2xl font-light">Jordan Lee</span>
            <span className="text-sm md:text-lg text-white/60">CFO at Brightwave</span>
          </div>
          <button
            onClick={() => setShowVideo(true)}
            className="bg-white/20 backdrop-blur-md rounded-full p-2 px-4 md:px-5 text-base md:text-lg flex items-center justify-center gap-2 hover:bg-white/30 transition-colors cursor-pointer"
          >
            <FaPlay />Play Video
          </button>
        </div>
      </div>
      {showVideo && (
        <VideoModal
          youtubeUrl={CASE_STUDY_VIDEO}
          onClose={() => setShowVideo(false)}
        />
      )}
    </div>
  )
}

export default Casestudy
