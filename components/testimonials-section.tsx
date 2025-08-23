"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import { useInView } from "@/hooks/use-scroll-animation"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"
import Image from "next/image"

interface Testimonial {
  id: number
  name: { en: string; fr: string; ar: string }
  role: { en: string; fr: string; ar: string }
  company: string
  content: { en: string; fr: string; ar: string }
  rating: number
  avatar: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: { en: "Sarah Johnson", fr: "Sarah Johnson", ar: "سارة جونسون" },
    role: { en: "Project Manager", fr: "Chef de Projet", ar: "مديرة المشروع" },
    company: "Tech Solutions Inc.",
    content: {
      en: "Amir delivered exceptional work on our web application. His attention to detail and technical expertise exceeded our expectations.",
      fr: "Amir a livré un travail exceptionnel sur notre application web. Son attention aux détails et son expertise technique ont dépassé nos attentes.",
      ar: "قدم أمير عملاً استثنائياً في تطبيق الويب الخاص بنا. اهتمامه بالتفاصيل وخبرته التقنية فاقت توقعاتنا.",
    },
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    id: 2,
    name: { en: "Mohamed Ali", fr: "Mohamed Ali", ar: "محمد علي" },
    role: { en: "CTO", fr: "Directeur Technique", ar: "المدير التقني" },
    company: "StartupHub",
    content: {
      en: "Working with Amir was a pleasure. He's professional, skilled, and always delivers on time. Highly recommended!",
      fr: "Travailler avec Amir était un plaisir. Il est professionnel, compétent et livre toujours à temps. Hautement recommandé!",
      ar: "كان العمل مع أمير متعة. إنه محترف وماهر ويسلم دائماً في الوقت المحدد. أنصح به بشدة!",
    },
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    id: 3,
    name: { en: "Emma Wilson", fr: "Emma Wilson", ar: "إيما ويلسون" },
    role: { en: "UI/UX Designer", fr: "Designer UI/UX", ar: "مصممة واجهات المستخدم" },
    company: "Creative Agency",
    content: {
      en: "Amir transformed our designs into pixel-perfect, responsive web applications. His code quality is outstanding.",
      fr: "Amir a transformé nos designs en applications web responsives et parfaites au pixel près. La qualité de son code est exceptionnelle.",
      ar: "حول أمير تصاميمنا إلى تطبيقات ويب مثالية ومتجاوبة. جودة كوده متميزة.",
    },
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
  },
]

export function TestimonialsSection() {
  const { t, language, isRTL } = useLanguage()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [ref, isInView] = useInView(0.2)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-purple-500/5 relative overflow-hidden">
      <div className="container mx-auto px-4" ref={ref}>
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold mb-4 ${isInView ? "animate-slide-in-up" : "opacity-0"}`}>
            {language === "en" ? "What People Say" : language === "fr" ? "Ce Que Disent Les Gens" : "ما يقوله الناس"}
          </h2>
          <div
            className={`w-24 h-1 bg-gradient-to-r from-primary to-purple-500 mx-auto rounded-full ${isInView ? "animate-scale-in delay-300" : "opacity-0"}`}
          />
        </div>

        <div className="max-w-4xl mx-auto relative">
          <Card
            className={`group hover:shadow-2xl transition-all duration-500 ${
              isInView ? "animate-slide-in-up delay-500" : "opacity-0"
            }`}
          >
            <CardContent className="p-8 text-center">
              <Quote className="h-12 w-12 text-primary/30 mx-auto mb-6" />

              <div className="mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 inline-block mx-1 ${
                      i < currentTestimonial.rating ? "text-yellow-400 fill-current" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>

              <blockquote className={`text-lg text-muted-foreground mb-8 leading-relaxed ${isRTL ? "text-right" : ""}`}>
                "{currentTestimonial.content[language]}"
              </blockquote>

              <div className="flex items-center justify-center gap-4">
                <Image
                  src={currentTestimonial.avatar || "/placeholder.svg"}
                  alt={currentTestimonial.name[language]}
                  width={60}
                  height={60}
                  className="rounded-full border-2 border-primary/20"
                />
                <div className={isRTL ? "text-right" : ""}>
                  <h4 className="font-semibold text-lg">{currentTestimonial.name[language]}</h4>
                  <p className="text-muted-foreground">
                    {currentTestimonial.role[language]} at {currentTestimonial.company}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="hover:scale-110 transition-transform bg-transparent"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "bg-primary scale-125" : "bg-primary/30 hover:bg-primary/50"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="hover:scale-110 transition-transform bg-transparent"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
