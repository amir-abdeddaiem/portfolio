import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { LanguageProvider } from "@/contexts/language-context"
import { ThemeProvider } from "@/contexts/theme-context"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Amir Abdeddaiem - Full-Stack Developer",
  description:
    "Portfolio of Amir Abdeddaiem, a passionate full-stack developer specializing in web technologies and innovative solutions.",
  keywords: "Amir Abdeddaiem, Full-Stack Developer, Web Developer, JavaScript, React, Next.js, Python, Portfolio",
  authors: [{ name: "Amir Abdeddaiem" }],
  openGraph: {
    title: "Amir Abdeddaiem - Full-Stack Developer",
    description:
      "Portfolio of Amir Abdeddaiem, a passionate full-stack developer specializing in web technologies and innovative solutions.",
    type: "website",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <LanguageProvider>
            {children}
            <Toaster />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
