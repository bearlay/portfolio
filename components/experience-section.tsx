import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building, Calendar, MapPin } from "lucide-react"

const experiences = [
  {
    title: "Application Security Engineer",
    company: "Yoma Bank",
    period: "2022 - Present", // Updated from "2022 - Present (2024)" to just "2022 - Present"
    location: "Yangon, Myanmar",
    description:
      "Performed penetration testing on various structures, web applications, mobile applications, and banking financial applications.",
    achievements: [
      "Provided risk severity calculations and mitigation recommendations based on OWASP Top 10 and CIS Benchmarks",
      "Collaborated with development teams to resolve vulnerabilities and improve security",
      "Developed Python scripts to automate vulnerability detection and update commercial pentest reports",
      "Configured and managed security scanning tools such as Synopsys Polaris, BlackDuck, and GitLab",
      "Conducted AD Domain, infrastructure, and wireless penetration testing",
      "Audited security configurations in AWS and Alibaba Cloud environments",
    ],
    skills: ["Penetration Testing", "OWASP Top 10", "Python", "AWS Security", "GitLab DAST"],
  },
  {
    title: "Information Security Analyst",
    company: "AYA Bank",
    period: "2020 - 2022",
    location: "Yangon, Myanmar",
    description:
      "Conducted penetration testing on applications, servers, and environments, producing detailed commercial pentest reports.",
    achievements: [
      "Tested and secured multiple web applications, identifying vulnerabilities and providing remediation strategies",
      "Enhanced security posture by identifying vulnerabilities and addressing risks based on OWASP Top 10 and CIS Benchmarks",
      "Produced comprehensive commercial penetration testing reports",
    ],
    skills: ["Web Application Security", "Vulnerability Assessment", "Security Reporting", "Risk Analysis"],
  },
  {
    title: "Freelance Web Developer",
    company: "Independent",
    period: "2020 - Present",
    location: "Remote",
    description: "Developed responsive websites using modern web technologies and enhanced customer service platforms.",
    achievements: [
      "Developed responsive websites using HTML, CSS, JavaScript, Bootstrap, TailwindCSS, and React",
      "Utilized backend technologies such as Python, JavaScript, and Node.js to enhance customer service platforms",
    ],
    skills: ["React", "Node.js", "Python", "TailwindCSS", "Full-Stack Development"],
  },
  {
    title: "Bug Bounty Hunter",
    company: "Various Platforms",
    period: "2019 - Present",
    location: "Remote",
    description: "Earned bug bounties on platforms such as HackerOne, Bugcrowd, and other bug bounty programs.",
    achievements: [
      "Discovered and reported critical vulnerabilities in financial web applications and social mobile applications",
      "Contributing to enhanced security for clients through responsible disclosure",
    ],
    skills: ["Vulnerability Research", "HackerOne", "Bugcrowd", "Responsible Disclosure"],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-mono">
            <span className="text-accent">{">"}</span> Experience
          </h2>
          <p className="text-muted-foreground text-lg">{"My journey in cybersecurity and application development"}</p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="bg-card/50 border-border hover:bg-card/70 transition-colors">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl font-mono text-primary">{exp.title}</CardTitle>
                    <div className="flex items-center gap-2 text-muted-foreground mt-1">
                      <Building className="w-4 h-4" />
                      <span className="font-mono">{exp.company}</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span className="font-mono">{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span className="font-mono">{exp.location}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{exp.description}</p>

                <div className="space-y-2">
                  <h4 className="font-mono text-sm text-accent">Key Achievements:</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, i) => (
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
