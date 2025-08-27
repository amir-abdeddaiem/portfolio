import Link from "next/link"
import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Home, ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Page Not Found | Amir Abdeddaiem",
  description:
    "The page you're looking for doesn't exist. Return to the homepage to explore Amir Abdeddaiem's portfolio and projects.",
  robots: {
    index: false,
    follow: false,
  },
}

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-md mx-auto">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-primary/20" aria-hidden="true">
            404
          </h1>
        </div>

        <h2 className="text-2xl font-bold mb-4">Page Not Found</h2>
        <p className="text-muted-foreground mb-8">
          The page you're looking for doesn't exist or has been moved. Let's get you back on track.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild>
            <Link href="/">
              <Home className="h-4 w-4 mr-2" />
              Go Home
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/#projects">
              <ArrowLeft className="h-4 w-4 mr-2" />
              View Projects
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
