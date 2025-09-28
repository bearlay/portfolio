"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Linkedin, Send, CheckCircle, AlertCircle } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [statusMessage, setStatusMessage] = useState("")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus("success")
        setStatusMessage(data.message)
        setFormData({ name: "", email: "", subject: "", message: "" })
      } else {
        setSubmitStatus("error")
        setStatusMessage(data.error || "Failed to send message")
      }
    } catch (error) {
      setSubmitStatus("error")
      setStatusMessage("Network error. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 px-4 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-mono">
            <span className="text-accent">{">"}</span> Contact
          </h2>
          <p className="text-muted-foreground text-lg">
            {"Let's discuss cybersecurity opportunities and collaborations"}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="bg-card/50 border-border">
              <CardHeader>
                <CardTitle className="font-mono text-primary">Get In Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-accent" />
                  <div>
                    <p className="font-mono text-sm text-muted-foreground">Email</p>
                    <p className="font-mono">minhtetnaing.mhnaing@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-accent" />
                  <div>
                    <p className="font-mono text-sm text-muted-foreground">Phone</p>
                    <p className="font-mono">+959787186530</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-accent" />
                  <div>
                    <p className="font-mono text-sm text-muted-foreground">Location</p>
                    <p className="font-mono">Yangon, Myanmar</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Linkedin className="w-5 h-5 text-accent" />
                  <div>
                    <p className="font-mono text-sm text-muted-foreground">LinkedIn</p>
                    <a
                      href="https://www.linkedin.com/in/m-h-n-4146252a1/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-primary hover:text-accent transition-colors"
                    >
                      linkedin.com/in/m-h-n-4146252a1/
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-border">
              <CardHeader>
                <CardTitle className="font-mono text-primary">Professional Focus</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">{"I'm always interested in discussing:"}</p>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Application Security Engineering opportunities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Penetration Testing projects</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Bug Bounty collaborations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Cybersecurity consulting</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="bg-card/50 border-border">
            <CardHeader>
              <CardTitle className="font-mono text-primary">Send Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-mono text-muted-foreground">Name</label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="mt-1 font-mono"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-mono text-muted-foreground">Email</label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="mt-1 font-mono"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-mono text-muted-foreground">Subject</label>
                  <Input
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="mt-1 font-mono"
                    placeholder="Project discussion"
                    required
                  />
                </div>

                <div>
                  <label className="text-sm font-mono text-muted-foreground">Message</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="mt-1 font-mono min-h-[120px]"
                    placeholder="Tell me about your cybersecurity needs..."
                    required
                  />
                </div>

                {/* Status Message */}
                {submitStatus !== "idle" && (
                  <div
                    className={`flex items-center gap-2 p-3 rounded-md ${
                      submitStatus === "success"
                        ? "bg-green-500/10 text-green-400 border border-green-500/20"
                        : "bg-red-500/10 text-red-400 border border-red-500/20"
                    }`}
                  >
                    {submitStatus === "success" ? (
                      <CheckCircle className="w-4 h-4" />
                    ) : (
                      <AlertCircle className="w-4 h-4" />
                    )}
                    <span className="font-mono text-sm">{statusMessage}</span>
                  </div>
                )}

                <Button type="submit" disabled={isSubmitting} className="w-full font-mono" size="lg">
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 mr-2 border-2 border-current border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
