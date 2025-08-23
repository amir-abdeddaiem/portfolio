"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "@/contexts/language-context"
import { useInView } from "@/hooks/use-scroll-animation"

interface Skill {
  name: string
  level: number
  color: string
}

export function SkillsProgress() {
  const { language, isRTL } = useLanguage()
  const [ref, isInView] = useInView(0.3)
  const [animatedLevels, setAnimatedLevels] = useState<{ [key: string]: number }>({})

  const skills: Skill[] = [
    { name: "JavaScript", level: 95, color: "from-yellow-400 to-orange-500" },
    { name: "React/Next.js", level: 90, color: "from-blue-400 to-cyan-500" },
    { name: "Python", level: 85, color: "from-green-400 to-blue-500" },
    { name: "Node.js", level: 88, color: "from-green-500 to-teal-500" },
    { name: "PHP", level: 80, color: "from-purple-400 to-indigo-500" },
    { name: "Java", level: 75, color: "from-red-400 to-pink-500" },
    { name: "MongoDB", level: 85, color: "from-green-600 to-green-400" },
    { name: "MySQL", level: 82, color: "from-blue-600 to-blue-400" },
  ]

  useEffect(() => {
    if (isInView) {
      skills.forEach((skill, index) => {
        setTimeout(() => {
          setAnimatedLevels((prev) => ({
            ...prev,
            [skill.name]: skill.level,
          }))
        }, index * 200)
      })
    }
  }, [isInView])

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4" ref={ref}>
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold mb-4 ${isInView ? "animate-slide-in-up" : "opacity-0"}`}>
            {language === "en"
              ? "Skills Proficiency"
              : language === "fr"
                ? "Maîtrise des Compétences"
                : "مستوى المهارات"}
          </h2>
          <div
            className={`w-24 h-1 bg-gradient-to-r from-primary to-purple-500 mx-auto rounded-full ${isInView ? "animate-scale-in delay-300" : "opacity-0"}`}
          />
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className={`${isInView ? "animate-slide-in-up delay-500" : "opacity-0"}`}>
            <CardHeader>
              <CardTitle className={isRTL ? "text-right" : ""}>
                {language === "en"
                  ? "Technical Skills"
                  : language === "fr"
                    ? "Compétences Techniques"
                    : "المهارات التقنية"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                {skills.map((skill, index) => (
                  <div
                    key={skill.name}
                    className={`space-y-2 ${isInView ? `animate-slide-in-up delay-${700 + index * 100}` : "opacity-0"}`}
                  >
                    <div className={`flex justify-between items-center ${isRTL ? "flex-row-reverse" : ""}`}>
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{animatedLevels[skill.name] || 0}%</span>
                    </div>
                    <div className="h-3 bg-secondary rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out relative`}
                        style={{ width: `${animatedLevels[skill.name] || 0}%` }}
                      >
                        <div className="absolute inset-0 bg-white/20 animate-pulse" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
