"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export function ProfileHeader() {
  const [blink, setBlink] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setBlink((prev) => !prev)
    }, 500)
    return () => clearInterval(interval)
  }, [])

  return (
    <header className="text-center space-y-4">
      {/* Retro avatar with border */}
      <div className="relative inline-block">
        <div className="w-28 h-28 sm:w-32 sm:h-32 mx-auto border-4 border-foreground bg-accent relative overflow-hidden">
          <Image
            src="/images/profile.png"
            alt="Kerrie Mariah - Profile photo"
            fill
            className="object-cover object-top brightness-110 contrast-105"
            priority
          />
        </div>
        {/* Decorative corner brackets */}
        <div className="absolute -top-2 -left-2 w-4 h-4 border-t-4 border-l-4 border-primary" />
        <div className="absolute -top-2 -right-2 w-4 h-4 border-t-4 border-r-4 border-primary" />
        <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b-4 border-l-4 border-primary" />
        <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-4 border-r-4 border-primary" />
      </div>

      <div className="space-y-2">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground tracking-tight">
          @Kerrie_Mariah
        </h1>
        <p className="font-mono text-muted-foreground text-sm md:text-base">
          but where WAS Gondor when the Westfold fell?
          <span 
            className={`ml-1 ${blink ? "opacity-100" : "opacity-0"}`}
            aria-hidden="true"
          >
            _
          </span>
        </p>
      </div>

      {/* Status indicator */}
      <div className="inline-flex items-center gap-2 px-4 py-2 border-2 border-foreground bg-card">
        <span className="w-2 h-2 bg-green-500 animate-pulse" aria-hidden="true" />
        <span className="font-mono text-xs uppercase tracking-wider">
          Available for projects
        </span>
      </div>
    </header>
  )
}
