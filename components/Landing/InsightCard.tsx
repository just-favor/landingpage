// components/InsightsCard.tsx
export default function InsightsCard() {
    const total = 23;
    const keyEvents = 16;
    const general = 5;
    const external = 2;
  
    return (
      <div className="relative overflow-hidden rounded-2xl p-6 w-full max-w-2xl bg-black/10 backdrop-blur-lg h-70 flex flex-col justify-between">
        {/* Radial glow overlay */}
        <div
          className="pointer-events-none "
        />
  
        {/* Header row */}
        <div className="relative flex items-start justify-between">
          <span className="text-lg font-medium tracking-wide text-stone-200">
            Overview
          </span>
          <span className="rounded-full border border-stone-400 px-3 py-1 text-lg text-white">
            +4 new
          </span>
        </div>
  
        {/* Big number */}
        <div className="relative my-5">
          <h2
            className="text-[56px] font-normal leading-none tracking-tight text-stone-100"
            style={{ fontFamily: "Georgia, serif" }}
          >
            {total} insights
          </h2>
        </div>
  
        {/* Stats + bar */}
        <div className="relative">
          <div className="mb-2.5 flex gap-5 text-[13px] text-stone-400">
            <span>
              <strong className="font-semibold text-stone-100">{keyEvents}</strong>{" "}
              Key Events
            </span>
            <span>
              <strong className="font-semibold text-stone-100">{general}</strong>{" "}
              General
            </span>
            <span>
              <strong className="font-semibold text-stone-100">{external}</strong>{" "}
              External
            </span>
          </div>
  
          {/* Proportional progress bar */}
          <div className="flex h-[5px] gap-1.5 overflow-hidden rounded-full">
            <div
              className="rounded-full"
              style={{
                flex: keyEvents,
                backgroundColor: "#00e5a0",
              }}
            />
            <div
              className="rounded-full"
              style={{
                flex: general,
                backgroundColor: "#e8f000",
              }}
            />
            <div
              className="rounded-full bg-stone-500/40"
              style={{ flex: external }}
            />
          </div>
        </div>
      </div>
    );
  }