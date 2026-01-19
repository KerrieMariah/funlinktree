"use client"

export function RetroDecoration() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      {/* Top left corner decoration */}
      <div className="absolute top-8 left-8 hidden md:block">
        <div className="w-24 h-24 border-4 border-primary opacity-30 rotate-12" />
        <div className="w-16 h-16 border-4 border-secondary opacity-40 -mt-12 ml-8" />
      </div>

      {/* Top right corner decoration */}
      <div className="absolute top-12 right-12 hidden md:block">
        <div className="w-8 h-8 bg-accent opacity-50" />
        <div className="w-8 h-8 bg-primary opacity-40 ml-6 -mt-4" />
        <div className="w-8 h-8 bg-secondary opacity-30 -ml-2 mt-2" />
      </div>

      {/* Bottom left */}
      <div className="absolute bottom-16 left-16 hidden lg:block">
        <div className="font-mono text-6xl text-primary/20 font-bold select-none">
          {"*"}
        </div>
      </div>

      {/* Bottom right zigzag */}
      <div className="absolute bottom-8 right-8 hidden md:block">
        <svg
          width="80"
          height="60"
          viewBox="0 0 80 60"
          className="text-secondary opacity-30"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
        >
          <path d="M0 50 L20 10 L40 50 L60 10 L80 50" />
        </svg>
      </div>

      {/* Floating dots pattern */}
      <div className="absolute top-1/4 right-1/4 hidden lg:grid grid-cols-3 gap-3 opacity-20">
        {[...Array(9)].map((_, i) => (
          <div
            key={i}
            className="w-2 h-2 bg-foreground"
          />
        ))}
      </div>

      {/* Left side vertical stripe */}
      <div className="absolute left-0 top-0 bottom-0 w-2 bg-primary/10 hidden lg:block" />
      
      {/* Right side vertical stripe */}
      <div className="absolute right-0 top-0 bottom-0 w-2 bg-secondary/10 hidden lg:block" />

      {/* Scanlines overlay for extra retro feel */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(0, 0, 0, 0.1) 2px,
            rgba(0, 0, 0, 0.1) 4px
          )`,
        }}
      />
    </div>
  )
}
