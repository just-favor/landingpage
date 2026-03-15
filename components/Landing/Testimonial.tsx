"use client";

import { useRef, useState, useEffect } from "react";

const YOUTUBE_LINKS: Record<string, string> = {
  alexander: "https://www.youtube.com/watch?v=8jPQjjsBbIc",
  ethan: "https://www.youtube.com/watch?v=Tuw8hxrFBH8",
};

function getYouTubeId(url: string) {
  const match = url.match(/(?:v=|youtu\.be\/)([^&?/]+)/);
  return match ? match[1] : null;
}

type Item =
  | {
      type: "video";
      id: string;
      name: string;
      role: string;
      thumbnail: string;
      youtubeUrl: string;
    }
  | {
      type: "quote";
      id: string;
      quote: string;
      name: string;
      role: string;
      avatar?: string;
      bgColor: string;
    };

const items: Item[] = [
  {
    type: "video",
    id: "alexander",
    name: "Alexander Wright",
    role: "Chief Operating Officer",
    thumbnail:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&q=80",
    youtubeUrl: YOUTUBE_LINKS.alexander,
  },
  {
    type: "quote",
    id: "christopher",
    quote:
      "Switching to Tether streamlined our operations overnight. Meetings are shorter, tasks are clearer, and our team finally feels aligned around the same goals.",
    name: "Christopher Johnson",
    role: "Team Lead, Horizon",
    avatar:
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=100&q=80",
    bgColor: "#FFFFFF",
  },
  {
    type: "video",
    id: "ethan",
    name: "Ethan Clarke",
    role: "Customer Success",
    thumbnail:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&q=80",
    youtubeUrl: YOUTUBE_LINKS.ethan,
  },
  {
    type: "quote",
    id: "ethan-ramirez",
    quote:
      "Before Tether, onboarding was a headache. Now tasks are automated, progress is visible in real time, and new hires are fully productive within two weeks.",
    name: "Ethan Ramirez",
    role: "Director of IT",
    bgColor: "#FFFF00",
  },
];

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

function VideoCard({
  item,
  onPlay,
}: {
  item: Extract<Item, { type: "video" }>;
  onPlay: () => void;
}) {
  const videoId = getYouTubeId(item.youtubeUrl);
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&modestbranding=1&playsinline=1`;

  return (
    <div
      className="relative shrink-0 rounded-2xl overflow-hidden group"
      style={{ width: 'clamp(280px, 80vw, 550px)', height: 'clamp(350px, 60vw, 700px)' }}
    >
      <iframe
        src={embedUrl}
        className="w-full h-full object-cover pointer-events-none"
        allow="autoplay; loop"
        style={{ border: "none" }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.7) 30%, transparent 70%)",
        }}
      />
      {/* Bottom section with name and play button */}
      <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
        <div>
          <p className="text-white font-semibold text-base leading-tight">
            {item.name}
          </p>
          <p className="text-white/70 text-sm">{item.role}</p>
        </div>
        <button
          onClick={onPlay}
          className="w-14 h-14 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center transition-transform duration-200 group-hover:scale-110 shadow-lg cursor-pointer z-10"
          style={{ opacity: 0.92 }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="white"
            className="size-7"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </button>
      </div>
    </div>
  );
}

function QuoteCard({ item }: { item: Extract<Item, { type: "quote" }> }) {
  return (
    <div
      className="relative shrink-0 rounded-2xl flex flex-col justify-between p-6 md:p-8"
      style={{
        width: 'clamp(280px, 80vw, 700px)',
        height: 'clamp(350px, 60vw, 700px)',
        background: item.bgColor,
      }}
    >
      <p
        className="text-gray-900 text-lg md:text-2xl lg:text-3xl leading-snug font-medium"
        style={{ fontFamily: "serif" }}
      >
        &ldquo;{item.quote}&rdquo;
      </p>
      <div className="flex items-center justify-between mt-6">
        <div>
          <p className="text-gray-900 font-bold text-lg">{item.name}</p>
          <p className="text-black/50 text-md">{item.role}</p>
        </div>
        {item.avatar && (
          <img
            src={item.avatar}
            alt={item.name}
            className="w-10 h-10 rounded-full object-cover"
          />
        )}
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const cardWidth = 340;
  const gap = 16;
  const unitWidth = (cardWidth + gap) * items.length;
  const duplicatedItems = [...items, ...items, ...items];

  return (
    <>
      <style>{`
        @keyframes scroll-left {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-${unitWidth}px); }
        }
        .testimonials-track {
          animation: scroll-left 28s linear infinite;
          will-change: transform;
        }
      `}</style>

      <section
        className="py-20 overflow-hidden"
        style={{ background: "#F0EDE6" }}
      >
        {/* Heading */}
        <div className="text-center mb-14 px-4">
          <h2
            className="text-2xl md:text-4xl lg:text-6xl text-gray-900 leading-tight"
            style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
          >
            Real stories of growth
            <br />
            and productivity
          </h2>
        </div>

        {/* Scrolling strip */}
        <div className="overflow-hidden">
          <div
            ref={trackRef}
            className="testimonials-track flex"
            style={{ gap: gap, width: "max-content" }}
          >
            {duplicatedItems.map((item, idx) =>
              item.type === "video" ? (
                <VideoCard
                  key={`${item.id}-${idx}`}
                  item={item}
                  onPlay={() =>
                    setActiveVideo((item as Extract<Item, { type: "video" }>).youtubeUrl)
                  }
                />
              ) : (
                <QuoteCard
                  key={`${item.id}-${idx}`}
                  item={item as Extract<Item, { type: "quote" }>}
                />
              )
            )}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {activeVideo && (
        <VideoModal
          youtubeUrl={activeVideo}
          onClose={() => setActiveVideo(null)}
        />
      )}
    </>
  );
}