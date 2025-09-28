"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Download, Shield } from "lucide-react"
import { TerminalHeader } from "./terminal-header"

export function HeroSection() {
  const [displayText, setDisplayText] = useState("")
  const roles = ["Application Security Engineer", "Penetration Tester", "Bug Bounty Hunter", "Cybersecurity Specialist"]
  const [currentRole, setCurrentRole] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <TerminalHeader />

          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold text-balance">
              <span className="text-foreground">Min Htet Naing</span>
            </h1>

            <div className="text-xl md:text-2xl text-primary font-mono">
              <span className="text-accent">{">"}</span> {roles[currentRole]}
              <span className="terminal-cursor"></span>
            </div>

            <p className="text-lg text-muted-foreground text-pretty max-w-2xl">
              {
                "I'm a cybersecurity professional passionate about securing digital infrastructures and applications. My expertise lies at the intersection of penetration testing and application security, creating robust defenses against evolving threats."
              }
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button className="font-mono" size="lg">
              <Mail className="w-4 h-4 mr-2" />
              Contact Me
            </Button>
            <Button variant="outline" size="lg" className="font-mono bg-transparent">
              <Download className="w-4 h-4 mr-2" />
              Download CV
            </Button>
          </div>

          <div className="flex gap-4">
            <Button variant="ghost" size="sm">
              <Github className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="sm">
              <Linkedin className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="sm">
              <Mail className="w-5 h-5" />
            </Button>
          </div>
        </div>

        <div className="relative">
          <div className="bg-card border border-border rounded-lg p-6 font-mono text-sm">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-destructive"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-accent"></div>
              <span className="ml-4 text-muted-foreground">security_profile.json</span>
            </div>
            <div className="space-y-2 text-sm">
              <div>
                <span className="text-accent">{"{"}</span>
              </div>
              <div className="ml-4">
                <span className="text-primary">{'"name"'}</span>:{" "}
                <span className="text-accent">{'"Min Htet Naing"'}</span>,
              </div>
              <div className="ml-4">
                <span className="text-primary">{'"role"'}</span>:{" "}
                <span className="text-accent">{'"Application Security Engineer"'}</span>,
              </div>
              <div className="ml-4">
                <span className="text-primary">{'"location"'}</span>:{" "}
                <span className="text-accent">{'"Yangon, Myanmar"'}</span>,
              </div>
              <div className="ml-4">
                <span className="text-primary">{'"certifications"'}</span>: [
              </div>
              <div className="ml-8">
                <span className="text-accent">{'"eCPPTv2"'}</span>,
              </div>
              <div className="ml-8">
                <span className="text-accent">{'"KLCP"'}</span>,
              </div>
              <div className="ml-8">
                <span className="text-accent">{'"Network Engineer"'}</span>
              </div>
              <div className="ml-4">],</div>
              <div className="ml-4">
                <span className="text-primary">{'"specialties"'}</span>: [
              </div>
              <div className="ml-8">
                <span className="text-accent">{'"Penetration Testing"'}</span>,
              </div>
              <div className="ml-8">
                <span className="text-accent">{'"Application Security"'}</span>,
              </div>
              <div className="ml-8">
                <span className="text-accent">{'"Bug Bounty Hunting"'}</span>
              </div>
              <div className="ml-4">]</div>
              <div>
                <span className="text-accent">{"}"}</span>
              </div>
            </div>
          </div>

          <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent rounded-full flex items-center justify-center">
            <Shield className="w-4 h-4 text-accent-foreground" />
          </div>
        </div>
      </div>
    </section>
  )
}
