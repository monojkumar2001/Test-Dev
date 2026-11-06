"use client"

import { useEffect, useState } from "react"
import { ArrowUp } from "lucide-react"
import { cn } from "@/lib/utils"

const SHOW_AFTER_PX = 400

export function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > SHOW_AFTER_PX)
    }

    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={scrollToTop}
      className={cn(
        "fixed right-5 bottom-5 z-40 flex size-11 cursor-pointer items-center justify-center rounded-full border border-border/70 bg-background/90 text-foreground shadow-[0_12px_40px_-18px_rgba(0,0,0,0.45)] backdrop-blur-md transition-all duration-300 md:right-8 md:bottom-8",
        "hover:border-foreground/20 hover:bg-foreground hover:text-background hover:shadow-[0_16px_48px_-16px_rgba(0,0,0,0.55)]",
        "focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none",
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0"
      )}
    >
      <ArrowUp className="size-4" strokeWidth={1.75} />
    </button>
  )
}
