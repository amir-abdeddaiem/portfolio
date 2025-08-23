"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/contexts/language-context"
import { useInView } from "@/hooks/use-scroll-animation"
import { Trophy, Target, Users, Code2 } from "lucide-react"

export function AchievementsSection() {
  const { language, isRTL } = useLanguage()
  const [ref, isInView] = useInView(0.2)

  const achievements = [
    {
      icon: Trophy,
      title: {
        en: "Microsoft Tech Club President",
        fr: "Président du Club Tech Microsoft",
        ar: "رئيس نادي مايكروسوفت التقني",
      },
      description: {
        en: "Led a team of 50+ members in organizing tech events and workshops",
        fr: "Dirigé une équipe de 50+ membres dans l'organisation d'événements tech",
        ar: "قاد فريقاً من أكثر من 50 عضواً في تنظيم الفعاليات التقنية",
      },
      color: "from-yellow-400 to-orange-500",
    },
    {
      icon: Code2,
      title: {
        en: "Full-Stack Developer",
        fr: "Développeur Full-Stack",
        ar: "مطور ويب متكامل",
      },
      description: {
        en: "Proficient in 6+ programming languages and 10+ frameworks",
        fr: "Maîtrise de 6+ langages de programmation et 10+ frameworks",
        ar: "متمكن من أكثر من 6 لغات برمجة و 10 إطارات عمل",
      },
      color: "from-blue-400 to-purple-500",
    },
    {
      icon: Users,
      title: {
        en: "Youth Council Member",
        fr: "Membre du Conseil Jeunesse",
        ar: "عضو مجلس الشباب",
      },
      description: {
        en: "Active participant in community development initiatives",
        fr: "Participant actif aux initiatives de développement communautaire",
        ar: "مشارك نشط في مبادرات التنمية المجتمعية",
      },
      color: "from-green-400 to-teal-500",
    },
    {
      icon: Target,
      title: {
        en: "Project Success Rate",
        fr: "Taux de Réussite des Projets",
        ar: "معدل نجاح المشاريع",
      },
      description: {
        en: "100% project completion rate with client satisfaction",
        fr: "100% de taux d'achèvement avec satisfaction client",
        ar: "معدل إنجاز 100% مع رضا العملاء",
      },
      color: "from-purple-400 to-pink-500",
    },
  ]

  const stats = [
    { number: "15+", label: { en: "Projects", fr: "Projets", ar: "مشروع" } },
    { number: "6+", label: { en: "Languages", fr: "Langages", ar: "لغة برمجة" } },
    { number: "100%", label: { en: "Success Rate", fr: "Taux de Réussite", ar: "معدل النجاح" } },
    { number: "50+", label: { en: "Team Members", fr: "Membres d'Équipe", ar: "عضو فريق" } },
  ]

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-purple-500/5" />

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold mb-4 ${isInView ? "animate-slide-in-up" : "opacity-0"}`}>
            {language === "en" ? "Achievements" : language === "fr" ? "Réalisations" : "الإنجازات"}
          </h2>
          <div
            className={`w-24 h-1 bg-gradient-to-r from-primary to-purple-500 mx-auto rounded-full ${isInView ? "animate-scale-in delay-300" : "opacity-0"}`}
          />
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className={`text-center group hover:scale-105 transition-all duration-500 hover:shadow-lg ${
                isInView ? `animate-slide-in-up delay-${500 + index * 100}` : "opacity-0"
              }`}
            >
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">{stat.label[language]}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Achievements */}
        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon
            return (
              <Card
                key={index}
                className={`group hover:shadow-xl hover:scale-105 transition-all duration-500 relative overflow-hidden ${
                  isInView ? `animate-slide-in-up delay-${700 + index * 200}` : "opacity-0"
                }`}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />
                <CardContent className="p-6 relative z-10">
                  <div className={`flex items-start gap-4 ${isRTL ? "flex-row-reverse text-right" : ""}`}>
                    <div
                      className={`p-3 rounded-full bg-gradient-to-br ${achievement.color} group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                        {achievement.title[language]}
                      </h3>
                      <p className="text-muted-foreground">{achievement.description[language]}</p>
                      <Badge
                        variant="secondary"
                        className="mt-3 group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                      >
                        {language === "en" ? "Achievement" : language === "fr" ? "Réalisation" : "إنجاز"}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
