"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown, Download, Mail, Sparkles } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import Image from "next/image"

export function HeroSection() {
  const { t, isRTL } = useLanguage()
  const [displayedText, setDisplayedText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showCursor, setShowCursor] = useState(true)
  const scrollY = useScrollAnimation()
  const fullText = t.hero.title

  // Typing animation
  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + fullText[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, 100)
      return () => clearTimeout(timeout)
    }
  }, [currentIndex, fullText])

  // Cursor blinking
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    setDisplayedText("")
    setCurrentIndex(0)
  }, [fullText])
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }
  const scrollToProjects = () => {
    const element = document.getElementById("projects")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-purple-500/5 to-secondary/5">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] opacity-5 animate-pulse"></div>
      </div>

      {/* Floating elements with enhanced animations */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-full animate-float delay-1000 blur-sm"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-r from-blue-500/20 to-primary/20 rounded-full animate-float delay-2000 blur-sm"></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full animate-float delay-3000 blur-sm"></div>
      <div className="absolute top-1/2 right-10 w-8 h-8 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full animate-float delay-4000 blur-sm"></div>

      {/* Sparkle effects */}
      <div className="absolute top-1/4 left-1/3 animate-sparkle delay-1000">
        <Sparkles className="h-4 w-4 text-primary/60" />
      </div>
      <div className="absolute bottom-1/3 right-1/3 animate-sparkle delay-3000">
        <Sparkles className="h-3 w-3 text-purple-500/60" />
      </div>

      <div
        className="container mx-auto px-4 relative z-10"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        <div className="max-w-6xl mx-auto">
          <div className={`grid lg:grid-cols-2 gap-12 items-center ${isRTL ? "lg:grid-cols-2" : ""}`}>
            {/* Text Content */}
            <header className={`text-center lg:text-${isRTL ? "right" : "left"} ${isRTL ? "lg:order-2" : ""}`}>
              <p className="text-lg text-muted-foreground mb-4 animate-slide-in-up delay-300">{t.hero.greeting}</p>

              <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-slide-in-up delay-500 bg-gradient-to-r from-primary via-purple-500 to-primary bg-clip-text text-transparent animate-gradient">
                {t.hero.name}
              </h1>

              <div className="text-xl md:text-3xl text-primary mb-6 h-12 flex items-center justify-center lg:justify-start">
                <span className={`${isRTL ? "border-l-2 border-r-0 pl-1 pr-0" : "border-r-2 pr-1"} border-primary`}>
                  {displayedText}
                  <span className={`${showCursor ? "opacity-100" : "opacity-0"} transition-opacity duration-100`}>
                    |
                  </span>
                </span>
              </div>

              <p className="text-lg text-muted-foreground mb-8 animate-slide-in-up delay-700">
                {t.hero.subtitle}
              </p>

              <div className="flex flex-row items-center gap-4 animate-slide-in-up">
                <Button
                  size="lg"
                  onClick={scrollToContact}
                  className="group hover:scale-105 transition-all duration-300 hover:shadow-lg"
                >
                  <Mail className={`h-4 w-4 group-hover:scale-110 transition-transform ${isRTL ? "ml-2" : "mr-2"}`} />
                  {t.hero.getInTouch}
                </Button>

                <a href="/CV_Amir-Abdeddaiem.pdf" target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    className="hover:scale-110 hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 group relative overflow-hidden"
                    aria-label="View my projects"
                  >
                    <Download className={`h-4 w-4 group-hover:scale-110 transition-transform ${isRTL ? "ml-2" : "mr-2"}`} />
                    <span className="relative z-10">{t.hero.cta}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Button>
                </a>
              </div>




            </header>

            {/* Enhanced Photo Section */}
            <div className={`flex justify-center ${isRTL ? "lg:order-1" : ""}`}>
              <div className="relative group">
                <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl animate-slide-in-right delay-300 group-hover:scale-105 transition-all duration-500 relative">
                  <Image
                    src="/placeholder.jpeg?height=320&width=320"
                    alt="Amir Abdeddaiem - Full-Stack Developer"
                    width={320}
                    height={320}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    priority
                    sizes="(max-width: 768px) 280px, 320px"
                  />
                  {/* Overlay gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Enhanced decorative elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-primary to-purple-500 rounded-full animate-pulse-glow"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse-glow delay-1000"></div>
                <div className="absolute top-1/2 -left-8 w-4 h-4 bg-gradient-to-r from-blue-500 to-primary rounded-full animate-pulse-glow delay-2000"></div>

                {/* Rotating ring */}
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary/30 animate-spin-slow"></div>

                {/* Floating icons around photo */}
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 animate-float delay-1000">
                  <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-xs" role="img" aria-label="Computer">
                      💻
                    </span>
                  </div>
                </div>
                <div className="absolute top-1/2 -right-8 transform -translate-y-1/2 animate-float delay-2000">
                  <div className="w-6 h-6 bg-purple-500/20 rounded-full flex items-center justify-center">
                    <span className="text-xs" role="img" aria-label="Rocket">
                      🚀
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle">
          <ChevronDown className="h-6 w-6 text-muted-foreground animate-pulse" aria-hidden="true" />
        </div>
      </div>
    </section >
  )
}
