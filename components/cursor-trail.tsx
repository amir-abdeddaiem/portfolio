"use client"

import { useEffect, useState } from "react"

interface TrailPoint {
  x: number
  y: number
  id: number
}

export function CursorTrail() {
  const [trail, setTrail] = useState<TrailPoint[]>([])
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    setIsDesktop(window.innerWidth > 768)
  }, [])

  useEffect(() => {
    if (!isDesktop) return

    let animationId: number
    let trailId = 0

    const handleMouseMove = (e: MouseEvent) => {
      const newPoint: TrailPoint = {
        x: e.clientX,
        y: e.clientY,
        id: trailId++,
      }

      setTrail((prev) => [...prev.slice(-20), newPoint])
    }

    const animate = () => {
      setTrail((prev) => prev.filter((_, index) => index > prev.length - 15))
      animationId = requestAnimationFrame(animate)
    }

    document.addEventListener("mousemove", handleMouseMove)
    animate()

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      cancelAnimationFrame(animationId)
    }
  }, [isDesktop])

  if (!isDesktop) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {trail.map((point, index) => (
        <div
          key={point.id}
          className="absolute w-2 h-2 bg-primary/30 rounded-full"
          style={{
            left: point.x - 4,
            top: point.y - 4,
            opacity: (index + 1) / trail.length,
            transform: `scale(${(index + 1) / trail.length})`,
            transition: "opacity 0.3s ease-out, transform 0.3s ease-out",
          }}
        />
      ))}
    </div>
  )
}
