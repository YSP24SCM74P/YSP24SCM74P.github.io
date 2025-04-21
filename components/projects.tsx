"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Github, Code } from "lucide-react"
import { SiReact, SiDjango, SiSqlite, SiDocker, SiAmazonwebservices, SiTailwindcss, SiNodedotjs, SiFirebase, SiPostgresql } from "react-icons/si"
import { Button } from "@/components/ui/button"

// Map technology names to icons
const projectIconMap: Record<string, React.ComponentType<any>> = {
  React: SiReact,
  Django: SiDjango,
  SQLite: SiSqlite,
  Docker: SiDocker,
  AWS: SiAmazonwebservices,
  "Tailwind CSS": SiTailwindcss,
  "Node.js": SiNodedotjs,
  Firebase: SiFirebase,
  PostgreSQL: SiPostgresql,
}

export function Projects() {
  const [flippedCard, setFlippedCard] = useState<number | null>(null)
  const handleCardClick = (id: number) => setFlippedCard(flippedCard === id ? null : id)

  const projects = [
    {
      id: 1,
      title: "Oasis: AI-Powered Personal Assistant",
      period: "July 2024 - Present",
      image: "/placeholder.jpg",
      description:
        "AI-powered personal assistant and task/goal manager with conversational interactions and intuitive task management.",
      details: [
        "Developed a responsive user interface with React, enabling seamless two-way conversational interactions and intuitive task management with CRUD functionality.",
        "Built scalable backend services using Django, incorporating Llama AI trained with prompt engineering and LangChain to design Agents for chaining and evaluating prompts.",
        "Utilized SQLite for reliable data storage, deployed Docker-containerized application on AWS, and maintained version control with Git.",
      ],
      technologies: ["React", "Django", "Llama AI", "LangChain", "SQLite", "Docker", "AWS"],
      github: "https://github.com/yogeshwar-pawade/oasis-assistant",
      demo: "https://oasis-assistant.vercel.app",
    },
    {
      id: 2,
      title: "PlanItNow: Event Hosting Platform",
      period: "May 2024 - August 2024",
      image: "/placeholder.jpg",
      description:
        "Interactive platform for organizing events, RSVP, and event management with location-based venue suggestions.",
      details: [
        "Engineered an interactive platform using React Vite and Tailwind, facilitating users to organize events, RSVP, and manage events with CRUD functionality.",
        "Implemented 2 secure methods for login/signup: Google OAuth and email-password authentication, ensuring seamless session management.",
        "Devised a dedicated messenger feature for events, facilitating attendees and hosts to discuss event details in real-time.",
      ],
      technologies: ["React Vite", "Tailwind CSS", "Django", "Google OAuth", "Real-time Messaging"],
      github: "https://github.com/yogeshwar-pawade/planitnow",
      demo: "https://planitnow.vercel.app",
    },
    {
      id: 3,
      title: "MedEase: Healthcare Management System",
      period: "April 2022 - September 2022",
      image: "/placeholder.jpg",
      description:
        "Full-stack web application to centralize hospital operations, including patient records, appointments, and inventory.",
      details: [
        "Built a full-stack web application with React, Django, and PostgreSQL to centralize hospital operations.",
        "Integrated dynamic APIs to accelerate real-time role-based access control for administrators, doctors, pharmacists, and receptionists.",
        "Designed a relational database schema in PostgreSQL to enable scalable and efficient hospital data storage, increasing data retrieval performance by 40%.",
      ],
      technologies: ["React", "Django", "PostgreSQL", "Role-based Access Control", "RESTful APIs"],
      github: "https://github.com/yogeshwar-pawade/medease",
      demo: "https://medease-demo.vercel.app",
    },
  ]

  return (
    <div className="space-y-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 gradient-text">Projects</h2>
        <p className="text-muted-foreground">A showcase of my work</p>
      </motion.div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <motion.div key={project.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: project.id * 0.1 }}>
            <div className="w-full h-64 cursor-pointer perspective" onClick={() => handleCardClick(project.id)}>
              <motion.div className="relative w-full h-full" initial={false} animate={{ rotateY: flippedCard === project.id ? 180 : 0 }} transition={{ duration: 0.6 }} style={{ transformStyle: 'preserve-3d' }}>
                {/* Front */}
                <Card className="absolute w-full h-full flex flex-col items-center justify-between p-6 backface-hidden">
                  <h3 className="text-xl text-center font-bold">{project.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => {
                      const Icon = projectIconMap[tech]
                      return Icon ? <Icon key={i} className="h-6 w-6 text-gray-700 dark:text-gray-300" aria-label={tech} /> : <Code key={i} className="h-6 w-6 text-gray-700 dark:text-gray-300" aria-label={tech} />
                    })}
                  </div>
                  <Button asChild variant="outline">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-600">
                      <Github className="h-5 w-5" /> GitHub
                    </a>
                  </Button>
                </Card>
                {/* Back */}
                <Card className="absolute w-full h-full flex items-center justify-center p-6 bg-gray-50 dark:bg-gray-800 backface-hidden" style={{ transform: 'rotateY(180deg)' }}>
                  <p className="text-center text-gray-800 dark:text-gray-200">{project.description}</p>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
