import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Cpu, Camera, Warehouse, Car, Coffee, Lightbulb } from "lucide-react"

const projects = [
  {
    title: "Automatic Sensor Smart Dustbin",
    description: "IoT-enabled waste management system with automatic sensor detection for enhanced efficiency.",
    icon: <Cpu className="w-6 h-6" />,
    category: "IoT Project",
    skills: ["IoT", "Sensors", "Automation", "Waste Management"],
  },
  {
    title: "Obstacle-Avoiding Car System",
    description: "Autonomous navigation system for vehicles with real-time obstacle detection and avoidance.",
    icon: <Car className="w-6 h-6" />,
    category: "IoT Project",
    skills: ["Autonomous Systems", "Sensors", "Navigation", "Real-time Processing"],
  },
  {
    title: "Virtual Coffee Machine",
    description: "User-friendly IoT integration system for smart coffee brewing with remote control capabilities.",
    icon: <Coffee className="w-6 h-6" />,
    category: "IoT Project",
    skills: ["IoT Integration", "User Interface", "Remote Control", "Smart Devices"],
  },
  {
    title: "Smart Street Light System",
    description: "Energy-optimized street lighting system with intelligent brightness control and scheduling.",
    icon: <Lightbulb className="w-6 h-6" />,
    category: "IoT Project",
    skills: ["Energy Optimization", "Smart Lighting", "Scheduling", "IoT"],
  },
  {
    title: "Real-Time Face Attendance System",
    description: "Secure identity verification system using facial recognition for attendance tracking.",
    icon: <Camera className="w-6 h-6" />,
    category: "Security Project",
    skills: ["Facial Recognition", "Identity Verification", "Real-time Processing", "Security"],
  },
  {
    title: "Business Smart Warehouse System",
    description: "Efficient inventory management system with IoT integration for business workflows.",
    icon: <Warehouse className="w-6 h-6" />,
    category: "Business IoT",
    skills: ["Inventory Management", "Business Integration", "IoT", "Workflow Optimization"],
  },
]

const achievements = [
  {
    title: "eCPPTv2 Certification",
    description: "Certified Professional Penetration Tester - Advanced penetration testing certification",
    icon: <Award className="w-6 h-6" />,
    type: "Certification",
  },
  {
    title: "KLCP Certification",
    description: "Kali Linux Certified Professional - Expert-level Linux security certification",
    icon: <Award className="w-6 h-6" />,
    type: "Certification",
  },
  {
    title: "Network Engineer Certification",
    description: "Professional network engineering and security certification",
    icon: <Award className="w-6 h-6" />,
    type: "Certification",
  },
  {
    title: "MCSC CTF 5th Place",
    description: "Myanmar Cyber Security Challenge CTF competition - Secured 5th place in 2019",
    icon: <Award className="w-6 h-6" />,
    type: "Competition",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-mono">
            <span className="text-accent">{">"}</span> Projects & Achievements
          </h2>
          <p className="text-muted-foreground text-lg">{"University IoT projects and professional certifications"}</p>
        </div>

        {/* Projects Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 font-mono text-primary">IoT Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="bg-card/50 border-border hover:bg-card/70 transition-all hover:scale-105">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary">{project.icon}</div>
                    <Badge variant="outline" className="font-mono text-xs">
                      {project.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg font-mono">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.skills.map((skill, i) => (
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

        {/* Achievements Grid */}
        <div>
          <h3 className="text-2xl font-bold mb-8 font-mono text-primary">Certifications & Awards</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="bg-card/50 border-border hover:bg-card/70 transition-colors">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-accent/10 rounded-lg text-accent">{achievement.icon}</div>
                    <Badge variant="outline" className="font-mono text-xs">
                      {achievement.type}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg font-mono">{achievement.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
