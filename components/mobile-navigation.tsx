"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, X, Globe, Palette } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { useTheme } from "@/contexts/theme-context"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()
  const { themeColor, setThemeColor } = useTheme()

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsOpen(false)
    }
  }

  const themeColors = [
    { name: "blue", color: "bg-blue-500" },
    { name: "green", color: "bg-green-500" },
    { name: "purple", color: "bg-purple-500" },
    { name: "orange", color: "bg-orange-500" },
    { name: "red", color: "bg-red-500" },
  ]

  return (
    <div className="md:hidden">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="hover:scale-110 transition-transform">
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-80 bg-background/95 backdrop-blur-md">
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-primary">Menu</h2>
              <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                <X className="h-5 w-5" />
              </Button>
            </div>

            <nav className="flex-1 space-y-4">
              <button
                onClick={() => scrollToSection("home")}
                className="block w-full text-left p-3 rounded-lg hover:bg-primary/10 hover:text-primary transition-all duration-300 hover:translate-x-2"
              >
                {t.nav.home}
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="block w-full text-left p-3 rounded-lg hover:bg-primary/10 hover:text-primary transition-all duration-300 hover:translate-x-2"
              >
                {t.nav.about}
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="block w-full text-left p-3 rounded-lg hover:bg-primary/10 hover:text-primary transition-all duration-300 hover:translate-x-2"
              >
                {t.nav.projects}
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full text-left p-3 rounded-lg hover:bg-primary/10 hover:text-primary transition-all duration-300 hover:translate-x-2"
              >
                {t.nav.contact}
              </button>
            </nav>

            <div className="border-t pt-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Language</span>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm" className="hover:scale-105 transition-transform bg-transparent">
                      <Globe className="h-4 w-4 mr-2" />
                      {language.toUpperCase()}
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem onClick={() => setLanguage("en")}>English</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setLanguage("fr")}>Français</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setLanguage("ar")}>العربية</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Theme</span>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm" className="hover:scale-105 transition-transform bg-transparent">
                      <Palette className="h-4 w-4 mr-2" />
                      Color
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {themeColors.map((theme) => (
                      <DropdownMenuItem
                        key={theme.name}
                        onClick={() => setThemeColor(theme.name as any)}
                        className="flex items-center space-x-2"
                      >
                        <div className={`w-4 h-4 rounded-full ${theme.color}`} />
                        <span className="capitalize">{theme.name}</span>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}
