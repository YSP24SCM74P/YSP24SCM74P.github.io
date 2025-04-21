"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { DiJava } from "react-icons/di"
import { Cloud } from "lucide-react"
import {
  SiCplusplus,
  SiJavascript,
  SiTypescript,
  SiPython,
  SiReact,
  SiAngular,
  SiNodedotjs,
  SiNextdotjs,
  SiTailwindcss,
  SiDjango,
  SiFlask,
  SiFastapi,
  SiDotnet,
  SiSqlite,
  SiPostgresql,
  SiMongodb,
  SiFirebase,
  SiAmazonwebservices,
  SiGooglecloud,
  SiGit,
  SiDocker,
  SiKubernetes,
  SiPostman,
  SiElasticsearch,
  SiRedis,
} from "react-icons/si"

export function Stack() {
  const [flippedCard, setFlippedCard] = useState<number | null>(null)

  const techStack = [
    { name: "C/C++", icon: <SiCplusplus className="h-12 w-12 text-blue-500" />, description: "System-level programming for high-performance applications" },
    { name: "Java", icon: <DiJava className="h-12 w-12 text-red-600" />, description: "Robust, portable object-oriented programming for enterprise applications" },
    { name: "JavaScript", icon: <SiJavascript className="h-12 w-12 text-yellow-500" />, description: "Core language of the web for interactive front-end and back-end" },
    { name: "TypeScript", icon: <SiTypescript className="h-12 w-12 text-[#3178C6]" />, description: "Adding static typing to JavaScript for better developer experience and code quality" },
    { name: "Python", icon: <SiPython className="h-12 w-12 text-[#3776AB]" />, description: "Versatile language for backend development, data analysis, and machine learning" },
    { name: "React", icon: <SiReact className="h-12 w-12 text-[#61DAFB]" />, description: "Building interactive UIs with reusable components and efficient state management" },
    { name: "Angular", icon: <SiAngular className="h-12 w-12 text-red-600" />, description: "Platform for building scalable web applications with TypeScript and reactive programming" },
    { name: "Node.js", icon: <SiNodedotjs className="h-12 w-12 text-[#339933]" />, description: "Developing scalable backend services with JavaScript runtime environment" },
    { name: "Next.js", icon: <SiNextdotjs className="h-12 w-12 text-black dark:text-white" />, description: "Creating fast, SEO-friendly React applications with server-side rendering capabilities" },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="h-12 w-12 text-[#38B2AC]" />, description: "Rapidly building custom designs with utility-first CSS" },
    { name: "Django", icon: <SiDjango className="h-12 w-12 text-[#092E20]" />, description: "High-level Python web framework that enables rapid development of secure websites" },
    { name: "Flask", icon: <SiFlask className="h-12 w-12 text-[#000000]" />, description: "Lightweight Python web framework for building microservices and APIs" },
    { name: "FastAPI", icon: <SiFastapi className="h-12 w-12 text-[#009688]" />, description: "High-performance Python framework for building APIs with async support" },
    { name: ".NET", icon: <SiDotnet className="h-12 w-12 text-[#512BD4]" />, description: "Platform for building cross-platform applications using C# and other languages" },
    { name: "Sqlite", icon: <SiSqlite className="h-12 w-12 text-[#003B57]" />, description: "Lightweight, file-based SQL database for local development and embedded use" },
    { name: "PostgreSQL", icon: <SiPostgresql className="h-12 w-12 text-[#336791]" />, description: "Powerful, open-source object-relational database system" },
    { name: "MongoDB", icon: <SiMongodb className="h-12 w-12 text-[#47A248]" />, description: "Flexible document-based NoSQL database for modern applications" },
    { name: "Firebase", icon: <SiFirebase className="h-12 w-12 text-[#FFCA28]" />, description: "Platform for building web and mobile applications with serverless backend" },
    { name: "AWS", icon: <SiAmazonwebservices className="h-12 w-12 text-[#FF9900]" />, description: "Comprehensive cloud computing platform for scalable deployments" },
    { name: "Google Cloud", icon: <SiGooglecloud className="h-12 w-12 text-[#4285F4]" />, description: "Cloud platform offering services for compute, storage, and analytics" },
    { name: "Azure", icon: <Cloud className="h-12 w-12 text-[#0089D6]" />, description: "Microsoft's cloud platform for building and managing applications" },
    { name: "Git", icon: <SiGit className="h-12 w-12 text-[#F05032]" />, description: "Distributed version control system for tracking code history" },
    { name: "Docker", icon: <SiDocker className="h-12 w-12 text-[#2496ED]" />, description: "Containerization platform for packaging applications and dependencies" },
    { name: "Kubernetes", icon: <SiKubernetes className="h-12 w-12 text-[#326CE5]" />, description: "Container orchestration system for automating deployments" },
    { name: "Postman", icon: <SiPostman className="h-12 w-12 text-[#FF6C37]" />, description: "API development environment for testing and documenting endpoints" },
    { name: "Elasticsearch", icon: <SiElasticsearch className="h-12 w-12 text-[#005571]" />, description: "Distributed search and analytics engine for real-time data" },
    { name: "Redis", icon: <SiRedis className="h-12 w-12 text-[#D82C20]" />, description: "In-memory data store for caching and real-time applications" },
  ]

  const handleCardClick = (index: number) => {
    if (flippedCard === index) {
      setFlippedCard(null)
    } else {
      setFlippedCard(index)
    }
  }

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-4 gradient-text">Tech Stack</h2>
        <p className="text-muted-foreground">These are the technologies I work with to bring ideas to life</p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {techStack.map((tech, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
          >
            <div className="relative w-full h-64 cursor-pointer perspective" onClick={() => handleCardClick(index)}>
              <motion.div
                className="absolute w-full h-full"
                initial={false}
                animate={{
                  rotateY: flippedCard === index ? 180 : 0,
                }}
                transition={{ duration: 0.6 }}
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                {/* Front of card */}
                <Card className="absolute w-full h-full flex flex-col items-center justify-center p-6 backface-hidden">
                  <div className="mb-4">{tech.icon}</div>
                  <h3 className="text-xl font-bold">{tech.name}</h3>
                </Card>

                {/* Back of card */}
                <Card
                  className="absolute w-full h-full flex items-center justify-center p-6 backface-hidden bg-purple-50 dark:bg-purple-900/20"
                  style={{ transform: "rotateY(180deg)" }}
                >
                  <p className="text-center">{tech.description}</p>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
