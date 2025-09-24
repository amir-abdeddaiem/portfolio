"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "@/contexts/language-context"
import { useInView } from "@/hooks/use-scroll-animation"
import { Github, Linkedin, Mail, Send, MapPin, X, Facebook } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export function ContactSection() {
  const { t, isRTL } = useLanguage()
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [ref, isInView] = useInView(0.2)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const payload = {
        ...formData,
        access_key: "d7362281-659e-4e93-b6a1-a473103245be", // 🔑 replace with your Web3Forms key
      }

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      })

      const result = await response.json()

      if (result.success) {
        toast({
          title: t.contact.success,
          description: "I'll get back to you soon!",
        })
        setFormData({ name: "", email: "", message: "" })
      } else {
        toast({
          title: t.contact.error,
          description: result.message || "Something went wrong.",
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: t.contact.error,
        description: "Network error. Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="py-20 bg-secondary/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5" />

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <div className="text-center mb-16">
          <h2
            className={`text-4xl font-bold mb-4 ${isInView ? "animate-slide-in-up" : "opacity-0"
              }`}
          >
            {t.contact.title}
          </h2>
          <div
            className={`w-24 h-1 bg-gradient-to-r from-primary to-purple-500 mx-auto rounded-full ${isInView ? "animate-scale-in delay-300" : "opacity-0"
              }`}
          />
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card
            className={`group hover:shadow-xl transition-all duration-500 hover:scale-105 ${isInView ? "animate-slide-in-left delay-500" : "opacity-0"
              }`}
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-2 group-hover:text-primary transition-colors">
                <Mail className="h-5 w-5 group-hover:animate-pulse" />
                {t.contact.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="animate-slide-in-up delay-700">
                  <Input
                    name="name"
                    placeholder={t.contact.name}
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="hover:border-primary focus:border-primary transition-colors"
                  />
                </div>
                <div className="animate-slide-in-up delay-800">
                  <Input
                    name="email"
                    type="email"
                    placeholder={t.contact.email}
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="hover:border-primary focus:border-primary transition-colors"
                  />
                </div>
                <div className="animate-slide-in-up delay-900">
                  <Textarea
                    name="message"
                    placeholder={t.contact.message}
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    required
                    className="hover:border-primary focus:border-primary transition-colors resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full hover:scale-105 transition-all duration-300 group/btn animate-slide-in-up delay-1000"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <Send className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      {t.contact.send}
                    </div>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Sidebar: Social + Info */}
          <div className="space-y-8">
            <Card
              className={`group hover:shadow-lg hover:scale-105 transition-all duration-500 ${isInView ? "animate-slide-in-right delay-600" : "opacity-0"
                }`}
            >
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors">
                  Connect with me
                </h3>
                <div className="space-y-4">
                  <a
                    href="https://github.com/amir-abdeddaiem"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-primary/10 hover:scale-105 transition-all duration-300 group/link"
                  >
                    <Github className="h-5 w-5 group-hover/link:animate-pulse" />
                    <span className="group-hover/link:text-primary transition-colors">
                      GitHub
                    </span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/abdeddaiemamir/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-primary/10 hover:scale-105 transition-all duration-300 group/link"
                  >
                    <Linkedin className="h-5 w-5 group-hover/link:animate-pulse" />
                    <span className="group-hover/link:text-primary transition-colors">
                      LinkedIn
                    </span>
                  </a>
                  <a
                    href="https://www.facebook.com/amir.abdeddaiem"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-primary/10 hover:scale-105 transition-all duration-300 group/link"
                  >
                    <Facebook className="h-5 w-5 group-hover/link:animate-pulse" />
                    <span className="group-hover/link:text-primary transition-colors">
                      Facebook
                    </span>
                  </a>
                  <a
                    href="https://x.com/Amir0001001"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-primary/10 hover:scale-105 transition-all duration-300 group/link"
                  >
                    <X className="h-5 w-5 group-hover/link:animate-pulse" />
                    <span className="group-hover/link:text-primary transition-colors">
                      x
                    </span>
                  </a>

                </div>
              </CardContent>
            </Card>

            <Card
              className={`group hover:shadow-lg hover:scale-105 transition-all duration-500 ${isInView ? "animate-slide-in-right delay-700" : "opacity-0"
                }`}
            >
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors">
                  Let's work together
                </h3>
                <p className="text-muted-foreground mb-4">
                  I'm always interested in new opportunities and exciting
                  projects. Feel free to reach out if you'd like to collaborate!
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>Sfax, Tunisia</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
