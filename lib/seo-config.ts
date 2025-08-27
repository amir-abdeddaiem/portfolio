export const seoConfig = {
  defaultTitle: "Amir Abdeddaiem - Full-Stack Developer & Software Engineer",
  defaultDescription:
    "Experienced Full-Stack Developer specializing in React, Next.js, Python, and modern web technologies. Recent graduate from ISET Sfax with expertise in building scalable web applications.",
  defaultKeywords: [
    "Amir Abdeddaiem",
    "Full-Stack Developer",
    "Web Developer",
    "Software Engineer",
    "React Developer",
    "Next.js Developer",
    "JavaScript Developer",
    "Python Developer",
    "ISET Sfax",
    "Tunisia Developer",
    "Frontend Developer",
    "Backend Developer",
    "Web Applications",
    "Mobile Development",
    "Flutter Developer",
    "MongoDB",
    "Node.js",
    "Portfolio",
    "Freelancer",
    "Software Development",
  ],
  siteUrl: "https://amir-abdeddaiem.com", // Replace with your actual domain
  siteName: "Amir Abdeddaiem Portfolio",
  twitterHandle: "@amir_abdeddaiem", // Replace with your Twitter handle
  linkedinProfile: "https://www.linkedin.com/in/abdeddaiemamir/",
  githubProfile: "https://github.com/amir-abdeddaiem",
  author: {
    name: "Amir Abdeddaiem",
    email: "amir.abdeddaiem@example.com", // Replace with your email
    jobTitle: "Full-Stack Developer",
    company: "Freelancer",
    location: "Sfax, Tunisia",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocales: ["fr_FR", "ar_TN"],
    siteName: "Amir Abdeddaiem Portfolio",
  },
  verification: {
    google: "your-google-verification-code", // Replace with your Google verification code
    bing: "your-bing-verification-code", // Replace with your Bing verification code
  },
}

export const getPageMetadata = (page: {
  title?: string
  description?: string
  keywords?: string[]
  image?: string
  url?: string
  type?: string
  publishedTime?: string
  modifiedTime?: string
}) => {
  const title = page.title ? `${page.title} | ${seoConfig.siteName}` : seoConfig.defaultTitle

  const description = page.description || seoConfig.defaultDescription
  const keywords = page.keywords ? [...seoConfig.defaultKeywords, ...page.keywords] : seoConfig.defaultKeywords

  const url = page.url ? `${seoConfig.siteUrl}${page.url}` : seoConfig.siteUrl
  const image = page.image ? `${seoConfig.siteUrl}${page.image}` : `${seoConfig.siteUrl}/og-image.jpg`

  return {
    title,
    description,
    keywords: keywords.join(", "),
    canonical: url,
    openGraph: {
      title,
      description,
      url,
      siteName: seoConfig.siteName,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: seoConfig.openGraph.locale,
      alternateLocale: seoConfig.openGraph.alternateLocales,
      type: (page.type as any) || seoConfig.openGraph.type,
      publishedTime: page.publishedTime,
      modifiedTime: page.modifiedTime,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: seoConfig.twitterHandle,
      site: seoConfig.twitterHandle,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    verification: seoConfig.verification,
  }
}
