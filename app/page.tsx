"use client"

import { useState } from "react"
import { LinkCard } from "@/components/link-card"
import { ProfileHeader } from "@/components/profile-header"
import { RetroDecoration } from "@/components/retro-decoration"
import { CoffeeModal } from "@/components/coffee-modal"
import { Newspaper, Briefcase, Calendar, Coffee } from "lucide-react"

export default function LinksPage() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [isCoffeeModalOpen, setIsCoffeeModalOpen] = useState(false)

  const links = [
    {
      title: "Read My Blog",
      description: "Thoughts, tutorials & random musings",
      href: "https://www.the-traveling-coder.com/",
      icon: Newspaper,
      color: "primary" as const,
    },
    {
      title: "Portfolio Site",
      description: "Check out my work & projects",
      href: "https://www.kerriemariah.com",
      icon: Briefcase,
      color: "secondary" as const,
    },
    {
      title: "Book a Call",
      description: "Let's chat & collaborate",
      href: "https://tidycal.com/kerriemariah/15-minute-meeting",
      icon: Calendar,
      color: "accent" as const,
    },
  ]

  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      {/* Retro decorative elements */}
      <RetroDecoration />
      
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-8 sm:py-12">
        <div className="w-full max-w-md space-y-6 sm:space-y-8">
          <ProfileHeader />
          
          <nav className="space-y-3 sm:space-y-4" aria-label="Social links">
            {links.map((link, index) => (
              <LinkCard
                key={link.title}
                {...link}
                isHovered={hoveredIndex === index}
                onHover={() => setHoveredIndex(index)}
                onLeave={() => setHoveredIndex(null)}
                index={index}
              />
            ))}
            
            {/* Coffee button that opens modal */}
            <button
              type="button"
              onClick={() => setIsCoffeeModalOpen(true)}
              onMouseEnter={() => setHoveredIndex(3)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group block w-full p-3 sm:p-4 border-3 border-foreground transition-all duration-200 ease-out bg-destructive text-destructive-foreground shadow-[4px_4px_0px_0px] shadow-destructive hover:shadow-[8px_8px_0px_0px] hover:shadow-destructive hover:-translate-x-1 hover:-translate-y-1 active:translate-x-0 active:translate-y-0 active:shadow-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 text-left"
            >
              <div className="flex items-center gap-3 sm:gap-4">
                <div className={`w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center border-2 border-current transition-transform duration-200 ${hoveredIndex === 3 ? "rotate-12 scale-110" : ""}`}>
                  <Coffee className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" />
                </div>
                <div className="flex-1">
                  <h2 className="font-bold text-base sm:text-lg leading-tight">Buy Me a Coffee</h2>
                  <p className="font-mono text-xs mt-1 opacity-80">
                    Keep me caffeinated & sane
                  </p>
                </div>
                <div className={`text-xl sm:text-2xl transition-transform duration-200 ${hoveredIndex === 3 ? "translate-x-1" : ""}`} aria-hidden="true">
                  →
                </div>
              </div>
            </button>
          </nav>

          <footer className="text-center pt-6 sm:pt-8">
            <p className="font-mono text-xs sm:text-sm text-muted-foreground">
              {"<"} pls do not be afriad to reach out {"/>"}
            </p>
          </footer>
        </div>
      </div>

      {/* Coffee Modal */}
      <CoffeeModal 
        isOpen={isCoffeeModalOpen} 
        onClose={() => setIsCoffeeModalOpen(false)} 
      />
    </main>
  )
}
