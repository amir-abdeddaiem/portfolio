"use client"

import type React from "react"

import Head from "next/head"
import { useLanguage } from "@/contexts/language-context"
import { seoConfig } from "@/lib/seo-config"

interface SEOHeadProps {
  title?: string
  description?: string
  keywords?: string[]
  image?: string
  url?: string
  type?: string
  publishedTime?: string
  modifiedTime?: string
  noIndex?: boolean
  children?: React.ReactNode
}

export function SEOHead({
  title,
  description,
  keywords = [],
  image,
  url,
  type = "website",
  publishedTime,
  modifiedTime,
  noIndex = false,
  children,
}: SEOHeadProps) {
  const { language } = useLanguage()

  const pageTitle = title ? `${title} | ${seoConfig.siteName}` : seoConfig.defaultTitle

  const pageDescription = description || seoConfig.defaultDescription
  const pageKeywords = [...seoConfig.defaultKeywords, ...keywords].join(", ")
  const pageUrl = url ? `${seoConfig.siteUrl}${url}` : seoConfig.siteUrl
  const pageImage = image ? `${seoConfig.siteUrl}${image}` : `${seoConfig.siteUrl}/og-image.jpg`

  const languageAlternates = {
    en: `${seoConfig.siteUrl}/en${url || ""}`,
    fr: `${seoConfig.siteUrl}/fr${url || ""}`,
    ar: `${seoConfig.siteUrl}/ar${url || ""}`,
  }

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content={pageKeywords} />
      <meta name="author" content={seoConfig.author.name} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content={language} />

      {/* Canonical URL */}
      <link rel="canonical" href={pageUrl} />

      {/* Language Alternates */}
      <link rel="alternate" hrefLang="en" href={languageAlternates.en} />
      <link rel="alternate" hrefLang="fr" href={languageAlternates.fr} />
      <link rel="alternate" hrefLang="ar" href={languageAlternates.ar} />
      <link rel="alternate" hrefLang="x-default" href={languageAlternates.en} />

      {/* Robots */}
      <meta name="robots" content={noIndex ? "noindex,nofollow" : "index,follow"} />
      <meta
        name="googlebot"
        content={
          noIndex ? "noindex,nofollow" : "index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1"
        }
      />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:site_name" content={seoConfig.siteName} />
      <meta property="og:image" content={pageImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={pageTitle} />
      <meta property="og:locale" content={language === "en" ? "en_US" : language === "fr" ? "fr_FR" : "ar_TN"} />
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={seoConfig.twitterHandle} />
      <meta name="twitter:creator" content={seoConfig.twitterHandle} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={pageImage} />

      {/* Verification */}
      <meta name="google-site-verification" content={seoConfig.verification.google} />
      <meta name="msvalidate.01" content={seoConfig.verification.bing} />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />

      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#3b82f6" />
      <meta name="msapplication-TileColor" content="#3b82f6" />
      <meta name="format-detection" content="telephone=no" />

      {children}
    </Head>
  )
}
