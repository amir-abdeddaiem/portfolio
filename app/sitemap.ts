import type { MetadataRoute } from "next"
import { seoConfig } from "@/lib/seo-config"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = seoConfig.siteUrl
  const lastModified = new Date()

  // Define your routes
  const routes = [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
  ]

  // Add language variants
  const languageRoutes = routes.flatMap((route) => [
    route,
    {
      ...route,
      url: route.url.replace(baseUrl, `${baseUrl}/en`),
    },
    {
      ...route,
      url: route.url.replace(baseUrl, `${baseUrl}/fr`),
    },
    {
      ...route,
      url: route.url.replace(baseUrl, `${baseUrl}/ar`),
    },
  ])

  return languageRoutes
}
