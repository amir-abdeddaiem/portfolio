import { seoConfig } from "@/lib/seo-config"

interface StructuredDataProps {
  type?: "Person" | "Organization" | "WebSite" | "Article" | "BreadcrumbList"
  data?: any
  language?: string
}

export function StructuredData({ type = "Person", data, language = "en" }: StructuredDataProps) {
  const getPersonSchema = () => ({
    "@context": "https://schema.org",
    "@type": "Person",
    name: seoConfig.author.name,
    jobTitle: seoConfig.author.jobTitle,
    worksFor: {
      "@type": "Organization",
      name: seoConfig.author.company,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: seoConfig.author.location,
      addressCountry: "TN",
    },
    email: seoConfig.author.email,
    url: seoConfig.siteUrl,
    sameAs: [seoConfig.linkedinProfile, seoConfig.githubProfile],
    knowsAbout: [
      "Web Development",
      "Full-Stack Development",
      "JavaScript",
      "React",
      "Next.js",
      "Python",
      "Node.js",
      "MongoDB",
      "Software Engineering",
    ],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "ISET Sfax",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Sfax",
        addressCountry: "TN",
      },
    },
    ...data,
  })

  const getWebSiteSchema = () => ({
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: seoConfig.siteName,
    url: seoConfig.siteUrl,
    description: seoConfig.defaultDescription,
    author: {
      "@type": "Person",
      name: seoConfig.author.name,
    },
    inLanguage: [
      {
        "@type": "Language",
        name: "English",
        alternateName: "en",
      },
      {
        "@type": "Language",
        name: "French",
        alternateName: "fr",
      },
      {
        "@type": "Language",
        name: "Arabic",
        alternateName: "ar",
      },
    ],
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${seoConfig.siteUrl}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
    ...data,
  })

  const getOrganizationSchema = () => ({
    "@context": "https://schema.org",
    "@type": "Organization",
    name: seoConfig.author.name,
    url: seoConfig.siteUrl,
    logo: `${seoConfig.siteUrl}/logo.png`,
    contactPoint: {
      "@type": "ContactPoint",
      email: seoConfig.author.email,
      contactType: "customer service",
    },
    sameAs: [seoConfig.linkedinProfile, seoConfig.githubProfile],
    ...data,
  })

  const getBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${seoConfig.siteUrl}${item.url}`,
    })),
    ...data,
  })

  const getSchema = () => {
    switch (type) {
      case "Person":
        return getPersonSchema()
      case "WebSite":
        return getWebSiteSchema()
      case "Organization":
        return getOrganizationSchema()
      case "BreadcrumbList":
        return getBreadcrumbSchema(data?.items || [])
      default:
        return getPersonSchema()
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(getSchema()),
      }}
    />
  )
}
