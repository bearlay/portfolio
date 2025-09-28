import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ExperienceSection } from "@/components/experience-section"
import { SkillsSection } from "@/components/skills-section"
import { ProjectsSection } from "@/components/projects-section"
import { ContactSection } from "@/components/contact-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <div id="about">
        <SkillsSection />
      </div>
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />

      {/* Footer */}
      <footer className="border-t border-border py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground font-mono text-sm">{"© 2025 Min Htet Naing"}</p>
          <p className="text-muted-foreground font-mono text-xs mt-2">
            <span className="text-accent">{">"}</span> {"Securing the digital world, one vulnerability at a time."}
          </p>
        </div>
      </footer>
    </main>
  )
}
