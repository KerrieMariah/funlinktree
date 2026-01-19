"use client"

import type { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface LinkCardProps {
  title: string
  description: string
  href: string
  icon: LucideIcon
  color: "primary" | "secondary" | "accent" | "destructive"
  isHovered: boolean
  onHover: () => void
  onLeave: () => void
  index: number
}

const colorClasses = {
  primary: {
    bg: "bg-primary",
    text: "text-primary-foreground",
    border: "border-primary",
    shadow: "shadow-[4px_4px_0px_0px] shadow-primary",
    hoverShadow: "hover:shadow-[8px_8px_0px_0px] hover:shadow-primary",
  },
  secondary: {
    bg: "bg-secondary",
    text: "text-secondary-foreground",
    border: "border-secondary",
    shadow: "shadow-[4px_4px_0px_0px] shadow-secondary",
    hoverShadow: "hover:shadow-[8px_8px_0px_0px] hover:shadow-secondary",
  },
  accent: {
    bg: "bg-accent",
    text: "text-accent-foreground",
    border: "border-accent",
    shadow: "shadow-[4px_4px_0px_0px] shadow-foreground",
    hoverShadow: "hover:shadow-[8px_8px_0px_0px] hover:shadow-foreground",
  },
  destructive: {
    bg: "bg-destructive",
    text: "text-destructive-foreground",
    border: "border-destructive",
    shadow: "shadow-[4px_4px_0px_0px] shadow-destructive",
    hoverShadow: "hover:shadow-[8px_8px_0px_0px] hover:shadow-destructive",
  },
}

export function LinkCard({
  title,
  description,
  href,
  icon: Icon,
  color,
  isHovered,
  onHover,
  onLeave,
  index,
}: LinkCardProps) {
  const colors = colorClasses[color]

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group block w-full p-3 sm:p-4 border-3 border-foreground transition-all duration-200 ease-out",
        colors.bg,
        colors.text,
        colors.shadow,
        colors.hoverShadow,
        "hover:-translate-x-1 hover:-translate-y-1",
        "active:translate-x-0 active:translate-y-0 active:shadow-none",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      )}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      style={{
        animationDelay: `${index * 100}ms`,
      }}
    >
      <div className="flex items-center gap-3 sm:gap-4">
        <div className={cn(
          "w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center border-2 border-current",
          "transition-transform duration-200",
          isHovered && "rotate-12 scale-110"
        )}>
          <Icon className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" />
        </div>
        <div className="flex-1 text-left">
          <h2 className="font-bold text-base sm:text-lg leading-tight">{title}</h2>
          <p className={cn(
            "font-mono text-xs mt-1 opacity-80",
            color === "accent" ? "text-foreground/70" : ""
          )}>
            {description}
          </p>
        </div>
        <div className={cn(
          "text-xl sm:text-2xl transition-transform duration-200",
          isHovered ? "translate-x-1" : ""
        )} aria-hidden="true">
          →
        </div>
      </div>
    </a>
  )
}
