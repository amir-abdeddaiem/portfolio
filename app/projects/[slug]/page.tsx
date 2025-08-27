import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { BreadcrumbStructuredData } from "@/components/seo/breadcrumb-structured-data"
import { StructuredData } from "@/components/seo/structured-data"
import { getPageMetadata } from "@/lib/seo-config"
import { projectsData } from "@/lib/projects-data"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"

interface ProjectPageProps {
  params: {
    slug: string
  }
}

// Generate static params for all projects
export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.id,
  }))
}

// Generate metadata for each project
export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = projectsData.find((p) => p.id === params.slug)

  if (!project) {
    return getPageMetadata({
      title: "Project Not Found",
      description: "The requested project could not be found.",
      url: `/projects/${params.slug}`,
    })
  }

  return getPageMetadata({
    title: project.title.en,
    description: project.fullDescription.en,
    keywords: [...project.technologies, "project", "portfolio", "web development"],
    url: `/projects/${params.slug}`,
    image: project.image,
    type: "article",
    publishedTime: "2024-01-01T00:00:00.000Z",
    modifiedTime: new Date().toISOString(),
  })
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projectsData.find((p) => p.id === params.slug)

  if (!project) {
    notFound()
  }

  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title.en,
    description: project.fullDescription.en,
    image: project.image,
    author: {
      "@type": "Person",
      name: "Amir Abdeddaiem",
    },
    dateCreated: "2024-01-01",
    keywords: project.technologies.join(", "),
    programmingLanguage: project.technologies,
  }

  const breadcrumbItems = [
    { name: "Projects", url: "/projects" },
    { name: project.title.en, url: `/projects/${params.slug}` },
  ]

  return (
    <>
      <StructuredData data={projectSchema} />
      <BreadcrumbStructuredData items={breadcrumbItems} />

      <main className="min-h-screen py-20">
        <div className="container mx-auto px-4">
          {/* Breadcrumbs */}
          <Breadcrumbs items={breadcrumbItems} className="mb-8" />

          {/* Back Button */}
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Projects
          </Link>

          <article className="max-w-4xl mx-auto">
            {/* Project Header */}
            <header className="mb-8">
              <h1 className="text-4xl font-bold mb-4">{project.title.en}</h1>
              <p className="text-xl text-muted-foreground mb-6">{project.description.en}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>

              <div className="flex gap-4">
                <Button asChild>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    Source Code
                  </a>
                </Button>
              </div>
            </header>

            {/* Project Image */}
            <div className="mb-8">
              <Image
                src={project.image || "/placeholder.svg?height=600&width=800&text=Project Screenshot"}
                alt={`Screenshot of ${project.title.en} project showing the main interface and key features`}
                width={800}
                height={600}
                className="w-full h-auto rounded-lg shadow-lg"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 800px"
              />
            </div>

            {/* Project Content */}
            <div className="prose prose-lg max-w-none mb-8">
              <h2>Project Overview</h2>
              <p>{project.fullDescription.en}</p>

              <h2>Technologies Used</h2>
              <ul>
                {project.technologies.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>

              <h2>Key Features</h2>
              <ul>
                <li>Responsive design optimized for all devices and screen sizes</li>
                <li>Modern and intuitive user interface with accessibility in mind</li>
                <li>Performance optimized with fast loading times</li>
                <li>SEO-friendly implementation with proper meta tags and structured data</li>
                <li>Cross-browser compatibility and progressive enhancement</li>
              </ul>

              <h2>Development Process</h2>
              <p>
                This project was developed using modern web development practices, including component-based
                architecture, responsive design principles, and performance optimization techniques. The development
                process involved careful planning, iterative development, and thorough testing across different devices
                and browsers.
              </p>
            </div>

            {/* Related Projects */}
            <section>
              <h2 className="text-2xl font-bold mb-6">Related Projects</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {projectsData
                  .filter((p) => p.id !== project.id)
                  .slice(0, 2)
                  .map((relatedProject) => (
                    <Card key={relatedProject.id} className="hover:shadow-lg transition-shadow">
                      <CardHeader className="p-0">
                        <Image
                          src={relatedProject.image || "/placeholder.svg?height=200&width=400&text=Project Preview"}
                          alt={`Preview of ${relatedProject.title.en} project`}
                          width={400}
                          height={200}
                          className="w-full h-48 object-cover rounded-t-lg"
                          sizes="(max-width: 768px) 100vw, 400px"
                        />
                      </CardHeader>
                      <CardContent className="p-6">
                        <CardTitle className="mb-2">
                          <Link
                            href={`/projects/${relatedProject.id}`}
                            className="hover:text-primary transition-colors"
                          >
                            {relatedProject.title.en}
                          </Link>
                        </CardTitle>
                        <p className="text-muted-foreground mb-4">{relatedProject.description.en}</p>
                        <div className="flex flex-wrap gap-2">
                          {relatedProject.technologies.slice(0, 3).map((tech) => (
                            <Badge key={tech} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                          {relatedProject.technologies.length > 3 && (
                            <Badge variant="outline" className="text-xs">
                              +{relatedProject.technologies.length - 3} more
                            </Badge>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </section>
          </article>
        </div>
      </main>
    </>
  )
}
