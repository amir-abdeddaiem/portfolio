"use client"

import { useState, useEffect } from "react"
import { useLanguage } from "@/contexts/language-context"

export function LoadingScreen() {
  const [progress, setProgress] = useState(0)
  const [isVisible, setIsVisible] = useState(true)
  const { t } = useLanguage()

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          setTimeout(() => setIsVisible(false), 500)
          return 100
        }
        return prev + Math.random() * 15
      })
    }, 150)

    return () => clearInterval(timer)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 bg-background z-50 flex items-center justify-center">
      <div className="text-center">
        {/* Animated Logo */}
        <div className="mb-8 relative">
          <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-primary to-purple-500 animate-spin-slow flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-background flex items-center justify-center">
              <span className="text-2xl font-bold text-primary animate-pulse">A</span>
            </div>
          </div>
          <div className="absolute inset-0 w-20 h-20 mx-auto rounded-full border-2 border-dashed border-primary/30 animate-spin"></div>
        </div>

        {/* Loading Text */}
        <h2 className="text-2xl font-bold mb-4 animate-pulse">Amir Abdeddaiem</h2>
        <p className="text-muted-foreground mb-8 animate-fade-in">Loading Portfolio...</p>

        {/* Progress Bar */}
        <div className="w-64 h-2 bg-secondary rounded-full overflow-hidden mx-auto">
          <div
            className="h-full bg-gradient-to-r from-primary to-purple-500 transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-sm text-muted-foreground mt-2">{Math.round(progress)}%</p>
      </div>
    </div>
  )
}
