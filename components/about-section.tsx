"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "@/contexts/language-context"
import { useInView } from "@/hooks/use-scroll-animation"
import { GraduationCap, Code, Users } from "lucide-react"
import { skillsData } from "@/lib/skills-data"

export function AboutSection() {
  const { t, language, isRTL } = useLanguage()
  const [ref, isInView] = useInView(0.2)

  const extracurriculars =
    language === "en"
      ? ["President of Microsoft Tech Club", "Member of Youth Council at Projet Sharek"]
      : language === "fr"
        ? ["Président du Microsoft Tech Club", "Membre du conseil jeunesse à Projet Sharek"]
        : ["رئيس نادي مايكروسوفت التقني", "عضو مجلس الشباب في مشروع شارك"]

  const skillCategories = [
    {
      title:
        language === "en" ? "Programming Languages" : language === "fr" ? "Langages de Programmation" : "لغات البرمجة",
      skills: skillsData.languages,
    },
    {
      title:
        language === "en"
          ? "Frameworks & Libraries"
          : language === "fr"
            ? "Frameworks et Bibliothèques"
            : "الأطر والمكتبات",
      skills: skillsData.frameworks,
    },
    {
      title: language === "en" ? "Databases" : language === "fr" ? "Bases de Données" : "قواعد البيانات",
      skills: skillsData.databases,
    },
    {
      title:
        language === "en" ? "Tools & Technologies" : language === "fr" ? "Outils et Technologies" : "الأدوات والتقنيات",
      skills: skillsData.tools,
    },
  ]

  return (
    <section id="about" className="py-20 bg-secondary/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <div className={`text-center mb-16 ${isRTL ? "rtl" : ""}`}>
          <h2 className={`text-4xl font-bold mb-4 ${isInView ? "animate-slide-in-up" : "opacity-0"}`}>
            {t.about.title}
          </h2>
          <p
            className={`text-xl text-muted-foreground max-w-2xl mx-auto ${isInView ? "animate-slide-in-up delay-300" : "opacity-0"}`}
          >
            {t.about.bio}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="skills" className="w-full">
            <TabsList className={`grid w-full grid-cols-3 ${isInView ? "animate-slide-in-up delay-500" : "opacity-0"}`}>
              <TabsTrigger value="skills" className="flex items-center gap-2 hover:scale-105 transition-transform">
                <Code className="h-4 w-4" />
                {t.about.skills}
              </TabsTrigger>
              <TabsTrigger value="leadership" className="flex items-center gap-2 hover:scale-105 transition-transform">
                <Users className="h-4 w-4" />
                {t.about.extracurriculars}
              </TabsTrigger>
              <TabsTrigger value="education" className="flex items-center gap-2 hover:scale-105 transition-transform">
                <GraduationCap className="h-4 w-4" />
                {t.about.education}
              </TabsTrigger>
            </TabsList>

            <TabsContent value="skills" className="mt-8">
              <div className="grid md:grid-cols-2 gap-6">
                {skillCategories.map((category, index) => (
                  <Card
                    key={index}
                    className={`group hover:shadow-xl hover:scale-105 transition-all duration-500 hover:bg-gradient-to-br hover:from-background hover:to-primary/5 ${
                      isInView ? `animate-slide-in-up delay-${700 + index * 200}` : "opacity-0"
                    }`}
                  >
                    <CardHeader>
                      <CardTitle className={`${isRTL ? "text-right" : ""} group-hover:text-primary transition-colors`}>
                        {category.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-3">
                        {category.skills.map((skill, skillIndex) => {
                          const IconComponent = skill.icon
                          return (
                            <div
                              key={skill.name}
                              className={`flex items-center gap-2 p-2 rounded-lg hover:bg-primary/10 hover:scale-105 transition-all duration-300 cursor-pointer group/skill ${
                                isRTL ? "flex-row-reverse" : ""
                              }`}
                              style={{ animationDelay: `${skillIndex * 100}ms` }}
                            >
                              <IconComponent className="h-5 w-5 text-primary group-hover/skill:animate-pulse" />
                              <span className="text-sm font-medium group-hover/skill:text-primary transition-colors">
                                {skill.name}
                              </span>
                            </div>
                          )
                        })}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="leadership" className="mt-8">
              <div className="grid gap-6">
                {extracurriculars.map((activity, index) => (
                  <Card
                    key={index}
                    className={`group hover:shadow-lg hover:scale-105 transition-all duration-500 hover:bg-gradient-to-r hover:from-background hover:to-primary/5 ${
                      isInView ? `animate-slide-in-left delay-${700 + index * 300}` : "opacity-0"
                    }`}
                  >
                    <CardContent className="pt-6">
                      <div className={`flex items-center gap-3 ${isRTL ? "flex-row-reverse text-right" : ""}`}>
                        <Users className="h-5 w-5 text-primary group-hover:animate-pulse" />
                        <span className="text-lg group-hover:text-primary transition-colors">{activity}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="education" className="mt-8">
              <Card
                className={`group hover:shadow-xl hover:scale-105 transition-all duration-500 hover:bg-gradient-to-br hover:from-background hover:to-primary/5 ${
                  isInView ? "animate-slide-in-up delay-700" : "opacity-0"
                }`}
              >
                <CardContent className="pt-6">
                  <div className={`flex items-start gap-4 ${isRTL ? "flex-row-reverse text-right" : ""}`}>
                    <GraduationCap className="h-6 w-6 text-primary mt-1 group-hover:animate-bounce" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                        {language === "en"
                          ? "Information Systems Development"
                          : language === "fr"
                            ? "Développement de Systèmes d'Information"
                            : "تطوير أنظمة المعلومات"}
                      </h3>
                      <p className="text-muted-foreground">
                        {language === "en"
                          ? "ISET Sfax - Recent Graduate"
                          : language === "fr"
                            ? "ISET Sfax - Récent Diplômé"
                            : "المعهد العالي للدراسات التكنولوجية بصفاقس - خريج حديث"}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}
