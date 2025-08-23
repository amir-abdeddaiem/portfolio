"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type ThemeColor = "blue" | "green" | "purple" | "orange" | "red"

interface ThemeContextType {
  themeColor: ThemeColor
  setThemeColor: (color: ThemeColor) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [themeColor, setThemeColor] = useState<ThemeColor>("blue")

  useEffect(() => {
    const saved = localStorage.getItem("themeColor") as ThemeColor
    if (saved) {
      setThemeColor(saved)
    }
  }, [])

  const handleSetThemeColor = (color: ThemeColor) => {
    setThemeColor(color)
    localStorage.setItem("themeColor", color)

    // Update CSS custom properties
    const root = document.documentElement
    const colors = {
      blue: { primary: "221.2 83.2% 53.3%", secondary: "210 40% 98%" },
      green: { primary: "142.1 76.2% 36.3%", secondary: "138 76% 97%" },
      purple: { primary: "262.1 83.3% 57.8%", secondary: "270 20% 98%" },
      orange: { primary: "24.6 95% 53.1%", secondary: "60 9% 98%" },
      red: { primary: "0 84.2% 60.2%", secondary: "0 85.7% 97.3%" },
    }

    root.style.setProperty("--primary", colors[color].primary)
    root.style.setProperty("--secondary", colors[color].secondary)
  }

  return (
    <ThemeContext.Provider value={{ themeColor, setThemeColor: handleSetThemeColor }}>{children}</ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}
