"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { useLanguage } from "@/contexts/language-context"
import { useInView } from "@/hooks/use-scroll-animation"
import { projectsData } from "@/lib/projects-data"
import type { Project } from "@/lib/types"
import { ExternalLink } from "lucide-react"
import Image from "next/image"

export function ProjectsSection() {
  const { t, language } = useLanguage()
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [ref, isInView] = useInView(0.1)

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-purple-500/5" />

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold mb-4 ${isInView ? "animate-slide-in-up" : "opacity-0"}`}>
            {t.projects.title}
          </h2>
          <div
            className={`w-24 h-1 bg-gradient-to-r from-primary to-purple-500 mx-auto rounded-full ${isInView ? "animate-scale-in delay-300" : "opacity-0"}`}
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <Card
              key={project.id}
              className={`group hover:shadow-2xl transition-all duration-500 cursor-pointer hover:scale-105 hover:-translate-y-2 relative overflow-hidden ${isInView ? `animate-slide-in-up delay-${300 + index * 150}` : "opacity-0"
                }`}
              onClick={() => setSelectedProject(project)}
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-purple-500/0 group-hover:from-primary/10 group-hover:to-purple-500/10 transition-all duration-500 z-10" />

              <CardHeader className="p-0 relative">
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title[language as keyof typeof project.title] ?? ""}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                      <Button variant="secondary" className="mr-2 hover:scale-110 transition-transform">
                        {t.projects.viewDetails}
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        className="hover:scale-110 transition-transform bg-transparent"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6 relative z-20">
                <CardTitle className="mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                  {project.title[language as keyof typeof project.title] ?? project.title["en"]}
                </CardTitle>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {project.description[language as keyof typeof project.description] ?? project.description["en"]}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors animate-fade-in"
                      style={{ animationDelay: `${techIndex * 100}ms` }}
                    >
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge variant="outline" className="text-xs animate-fade-in delay-300">
                      +{project.technologies.length - 3}
                    </Badge>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto animate-scale-in">
            {selectedProject && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl animate-slide-in-up">
                    {selectedProject.title[language as keyof typeof selectedProject.title] ??
                      selectedProject.title["en"]}
                  </DialogTitle>
                </DialogHeader>
                <div className="space-y-6">
                  <div className="animate-slide-in-up delay-200">
                    <Image
                      src={selectedProject.image || "/placeholder.svg"}
                      alt={selectedProject.title[language as keyof typeof selectedProject.title] ?? selectedProject.title["en"]}
                      width={600}
                      height={400}
                      className="w-full h-64 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <p className="text-muted-foreground leading-relaxed animate-slide-in-up delay-300">
                    {selectedProject.fullDescription[language as keyof typeof selectedProject.fullDescription] ??
                      selectedProject.fullDescription["en"]}
                  </p>
                  <div className="animate-slide-in-up delay-400">
                    <h4 className="font-semibold mb-3">{t.projects.technologies}:</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, index) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="animate-fade-in hover:scale-110 transition-transform"
                          style={{ animationDelay: `${index * 100}ms` }}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}
