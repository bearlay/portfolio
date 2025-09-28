"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Terminal, Shield, Code, User, Mail } from "lucide-react"

const navItems = [
  { name: "About", href: "#about", icon: User },
  { name: "Experience", href: "#experience", icon: Shield },
  { name: "Projects", href: "#projects", icon: Code },
  { name: "Contact", href: "#contact", icon: Mail },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <Terminal className="w-6 h-6 text-primary" />
            <span className="font-mono text-lg font-bold text-primary">mtn@cybersec</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-mono"
              >
                <item.icon className="w-4 h-4" />
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center gap-2 px-4 py-2 text-muted-foreground hover:text-primary transition-colors font-mono"
                onClick={() => setIsOpen(false)}
              >
                <item.icon className="w-4 h-4" />
                {item.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
