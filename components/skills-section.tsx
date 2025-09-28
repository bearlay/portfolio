import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Code, Cloud, Search, Users, Terminal } from "lucide-react"

const skillCategories = [
  {
    title: "Penetration Testing",
    icon: <Shield className="w-6 h-6" />,
    description: "Comprehensive security testing across multiple domains",
    skills: [
      "Web Applications",
      "Mobile Applications",
      "Financial Applications",
      "AD Domain Testing",
      "Infrastructure Testing",
      "Wireless Testing",
      "IoT Security",
      "OT Security",
    ],
  },
  {
    title: "Risk Analysis & Mitigation",
    icon: <Search className="w-6 h-6" />,
    description: "Security assessment and vulnerability management",
    skills: [
      "OWASP Top 10",
      "CIS Benchmarks",
      "Vulnerability Assessment",
      "Risk Severity Calculation",
      "Security Reporting",
    ],
  },
  {
    title: "Security Tools",
    icon: <Terminal className="w-6 h-6" />,
    description: "Professional security testing and analysis tools",
    skills: ["Synopsys Polaris", "BlackDuck", "GitLab DAST", "GitLab SCA", "GitLab SAST", "Burp Suite", "Kali Linux"],
  },
  {
    title: "Programming & Development",
    icon: <Code className="w-6 h-6" />,
    description: "Full-stack development and automation scripting",
    skills: [
      "Python",
      "JavaScript",
      "Node.js",
      "C/C++",
      "Shell Scripting",
      "HTML/CSS",
      "React",
      "Bootstrap",
      "TailwindCSS",
    ],
  },
  {
    title: "Cloud Security",
    icon: <Cloud className="w-6 h-6" />,
    description: "Cloud infrastructure security and configuration",
    skills: [
      "AWS Security",
      "Alibaba Cloud",
      "CI/CD Pipeline Security",
      "Infrastructure Auditing",
      "Cloud Configuration",
    ],
  },
  {
    title: "Professional Skills",
    icon: <Users className="w-6 h-6" />,
    description: "Collaboration and communication abilities",
    skills: [
      "Commercial Pentest Reports",
      "Cross-team Collaboration",
      "Vulnerability Resolution",
      "Strong Teamwork",
      "Adaptability",
    ],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-mono">
            <span className="text-accent">{">"}</span> Skills & Expertise
          </h2>
          <p className="text-muted-foreground text-lg">
            {"Technical skills and professional competencies in cybersecurity"}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="bg-card/50 border-border hover:bg-card/70 transition-colors h-full">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">{category.icon}</div>
                </div>
                <CardTitle className="text-lg font-mono">{category.title}</CardTitle>
                <p className="text-sm text-muted-foreground">{category.description}</p>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <Badge key={i} variant="secondary" className="font-mono text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
