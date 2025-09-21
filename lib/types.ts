export interface Project {
  id: string
  title: { en: string; fr: string }
  description: { en: string; fr: string }
  fullDescription: { en: string; fr: string }
  technologies: string[]
  image: string
  category: string
}

export type Language = "en" | "fr" | "ar"

export interface Translations {
  nav: {
    home: string
    about: string
    projects: string
    contact: string
  }
  hero: {
    greeting: string
    name: string
    title: string
    subtitle: string
    cta: string
    getInTouch: string
  }
  about: {
    title: string
    bio: string
    skills: string
    extracurriculars: string
    education: string
  }
  projects: {
    title: string
    viewDetails: string
    technologies: string
    close: string
  }
  contact: {
    title: string
    name: string
    email: string
    message: string
    send: string
    success: string
    error: string
  }
}
