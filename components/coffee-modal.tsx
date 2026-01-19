"use client"

import { useEffect } from "react"
import { X, Coffee } from "lucide-react"
import { cn } from "@/lib/utils"

interface CoffeeModalProps {
  isOpen: boolean
  onClose: () => void
}

export function CoffeeModal({ isOpen, onClose }: CoffeeModalProps) {
  // Load Stripe script when modal opens
  useEffect(() => {
    if (isOpen) {
      const existingScript = document.querySelector('script[src="https://js.stripe.com/v3/buy-button.js"]')
      if (!existingScript) {
        const script = document.createElement("script")
        script.src = "https://js.stripe.com/v3/buy-button.js"
        script.async = true
        document.body.appendChild(script)
      }
    }
  }, [isOpen])

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    if (isOpen) {
      document.addEventListener("keydown", handleEscape)
      document.body.style.overflow = "hidden"
    }
    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = ""
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-foreground/60 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />
      
      {/* Modal */}
      <div 
        className={cn(
          "relative w-full max-w-sm bg-card border-4 border-foreground p-6",
          "shadow-[8px_8px_0px_0px] shadow-destructive",
          "animate-in zoom-in-95 duration-200"
        )}
        role="dialog"
        aria-modal="true"
        aria-labelledby="coffee-modal-title"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className={cn(
            "absolute -top-3 -right-3 w-10 h-10 bg-destructive text-destructive-foreground",
            "border-3 border-foreground flex items-center justify-center",
            "hover:bg-primary hover:scale-110 transition-all duration-150",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          )}
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Content */}
        <div className="text-center space-y-4">
          <div className="w-16 h-16 mx-auto bg-accent border-3 border-foreground flex items-center justify-center">
            <Coffee className="w-8 h-8 text-foreground" />
          </div>
          
          <h2 
            id="coffee-modal-title" 
            className="text-xl sm:text-2xl font-bold text-foreground"
          >
            Buy Me a Coffee
          </h2>
          
          <p className="font-mono text-sm text-muted-foreground">
            Your support keeps me caffeinated & creating awesome stuff!
          </p>

          {/* Stripe Buy Button Container */}
          <div className="pt-2 flex justify-center">
            {/* @ts-expect-error - Stripe custom element */}
            <stripe-buy-button
              buy-button-id="buy_btn_1Ra1Xd06cFmEmGuRTenKKrNn"
              publishable-key="pk_live_51RUarK06cFmEmGuR86rhPSUGC1uEvKZhEJp01x8x7UeDpP6aAzFT01BELlUtdolnn3lRFTHhdKKD9G2uWT2JNSiP00GURiITlf"
            />
          </div>

          <p className="font-mono text-xs text-muted-foreground pt-2">
            {"<"} thank you so much! {"/>"}
          </p>
        </div>
      </div>
    </div>
  )
}
