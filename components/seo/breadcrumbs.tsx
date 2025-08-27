"use client"

import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"

interface BreadcrumbItem {
  name: string
  url: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
  className?: string
}

export function Breadcrumbs({ items, className = "" }: BreadcrumbsProps) {
  const breadcrumbItems = [{ name: "Home", url: "/" }, ...items]

  return (
    <nav aria-label="Breadcrumb" className={`flex items-center space-x-2 text-sm ${className}`}>
      <Link
        href="/"
        className="flex items-center text-muted-foreground hover:text-primary transition-colors"
        aria-label="Go to homepage"
      >
        <Home className="h-4 w-4" />
      </Link>

      {breadcrumbItems.slice(1).map((item, index) => (
        <div key={item.url} className="flex items-center space-x-2">
          <ChevronRight className="h-4 w-4 text-muted-foreground" />
          {index === breadcrumbItems.length - 2 ? (
            <span className="text-foreground font-medium" aria-current="page">
              {item.name}
            </span>
          ) : (
            <Link href={item.url} className="text-muted-foreground hover:text-primary transition-colors">
              {item.name}
            </Link>
          )}
        </div>
      ))}
    </nav>
  )
}
