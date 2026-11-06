"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

export function MouseFollower() {
  const spotlightRef = useRef<HTMLDivElement>(null)
  const cursorRef = useRef<HTMLDivElement>(null)
  const target = useRef({ x: 0, y: 0 })
  const current = useRef({ x: 0, y: 0 })
  const cursorCurrent = useRef({ x: 0, y: 0 })
  const rafRef = useRef<number | null>(null)
  const [enabled, setEnabled] = useState(false)
  const [active, setActive] = useState(false)
  const [hoveringInteractive, setHoveringInteractive] = useState(false)

  useEffect(() => {
    const media = window.matchMedia("(pointer: fine)")
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)")

    const sync = () => {
      setEnabled(media.matches && !motion.matches)
    }

    sync()
    media.addEventListener("change", sync)
    motion.addEventListener("change", sync)
    return () => {
      media.removeEventListener("change", sync)
      motion.removeEventListener("change", sync)
    }
  }, [])

  useEffect(() => {
    if (!enabled) return

    const isInteractive = (el: EventTarget | null) => {
      if (!(el instanceof Element)) return false
      return Boolean(
        el.closest(
          "a, button, input, textarea, select, label, [role='button'], [data-slot='button']"
        )
      )
    }

    const onMove = (event: MouseEvent) => {
      target.current.x = event.clientX
      target.current.y = event.clientY
      setActive(true)
      setHoveringInteractive(isInteractive(event.target))
    }

    const onLeave = () => setActive(false)

    const animate = () => {
      current.current.x += (target.current.x - current.current.x) * 0.12
      current.current.y += (target.current.y - current.current.y) * 0.12
      cursorCurrent.current.x +=
        (target.current.x - cursorCurrent.current.x) * 0.28
      cursorCurrent.current.y +=
        (target.current.y - cursorCurrent.current.y) * 0.28

      if (spotlightRef.current) {
        spotlightRef.current.style.transform = `translate3d(${current.current.x}px, ${current.current.y}px, 0)`
      }
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${cursorCurrent.current.x}px, ${cursorCurrent.current.y}px, 0)`
      }

      rafRef.current = requestAnimationFrame(animate)
    }

    window.addEventListener("mousemove", onMove, { passive: true })
    window.addEventListener("mouseleave", onLeave)
    rafRef.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener("mousemove", onMove)
      window.removeEventListener("mouseleave", onLeave)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [enabled])

  if (!enabled) return null

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[60] hidden overflow-hidden md:block"
    >
      <div
        ref={spotlightRef}
        className={cn(
          "absolute top-0 left-0 size-[220px] -translate-x-1/2 -translate-y-1/2 rounded-full transition-opacity duration-500",
          "bg-[radial-gradient(circle,rgba(0,0,0,0.07)_0%,rgba(0,0,0,0.025)_40%,transparent_70%)]",
          "dark:bg-[radial-gradient(circle,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.025)_40%,transparent_70%)]",
          active ? "opacity-100" : "opacity-0"
        )}
      />
      <div
        ref={cursorRef}
        className={cn(
          "absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full border transition-all duration-300 ease-out",
          "border-foreground/25 bg-foreground/5 backdrop-blur-[1px]",
          active ? "opacity-100" : "opacity-0",
          hoveringInteractive
            ? "size-7 border-foreground/40 bg-foreground/10"
            : "size-4"
        )}
      />
    </div>
  )
}
