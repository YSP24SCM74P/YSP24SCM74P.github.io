"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const experiences = [
    {
      title: "Software Engineer Intern",
      company: "Reality AI",
      location: "New York, United States",
      period: "June 2024 - October 2024",
      description: [
        "Engineered Marvel AI, a Teaching Assistant utilizing Next.js, React.js, and Firebase, working on both frontend and backend features such as the Intelligent Quiz Generator, Interactive Flashcard Creator, and Real-Time Chat Assistance.",
        "Developed responsive interfaces using Material UI and Redux Toolkit, while supporting serverless backend functions with Firebase Functions, Firestore, and Redis to optimize real-time data handling and performance.",
        "Collaborated in an agile team environment alongside a team of 7 developers, managed GitHub issue tracking for multiple features, and contributed to cloud deployment and scalable system architecture for Marvel AI.",
      ],
      skills: ["Next.js", "React.js", "Firebase", "Material UI", "Redux Toolkit", "Redis"],
    },
    {
      title: "Software Developer",
      company: "Social Syncing",
      location: "Pune, India",
      period: "June 2023 - September 2023",
      description: [
        "Handled 2 customer projects to streamline social media synchronization, reducing manual intervention time for clients.",
        "Applied Redis caching to cut down database load and refined backend systems to handle 12% more concurrent users by refactoring existing server-side code, decreasing server response times.",
        "Optimized data synchronization algorithms, decreasing latency by 35% and improving cross-platform data consistency, leading to higher retention rates.",
      ],
      skills: ["Redis", "Backend Development", "Algorithm Optimization", "Performance Tuning"],
    },
    {
      title: "Robotic Process Automation Developer Intern",
      company: "AutomationEdge",
      location: "Pune, India",
      period: "January 2023 - May 2023",
      description: [
        "Implemented an AI-powered WhatsApp chatbot (EEze) to streamline Bajaj Allianz's (BALIC's) employee self-service processes, improving efficiency by 37% and cutting HR query resolution time.",
        "Integrated payroll systems with chatbot, making it easy for employees to securely access essential documents such as Form 16, payslips, and tax forecasts, enhancing user satisfaction by 22%.",
        "Designed and deployed 3 modules for ID unlocking and password resets, cutting IT support tickets through self-service capabilities.",
      ],
      skills: ["RPA", "Chatbot Development", "System Integration", "AI", "WhatsApp API"],
    },
    {
      title: "Software Developer Intern",
      company: "Akshaya Patra Foundation (NGO)",
      location: "Pune, India",
      period: "August 2021 - February 2022",
      description: [
        "Showcased expertise in full-stack development, blockchain integration, and UI/UX, delivering 2 innovative solutions aligned with Akshaya Patra's mission of social impact and transparency.",
        "Delivered a blockchain-based crowdfunding platform with React, Django, and MetaMask integration for secure milestone-based funding, reducing transaction latency by 18%.",
        "Created a Nutritional Value Tracker with inventory tracking and nutrition calculation features, empowered kitchen staff to make healthier meal options, leading to a 25% increase in favorable feedback from beneficiaries over 6 months.",
      ],
      skills: ["React", "Django", "Blockchain", "MetaMask", "Full Stack Development"],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <div className="space-y-8" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-4 gradient-text">Professional Experience</h2>
        <p className="text-muted-foreground">
          My professional journey has equipped me with diverse skills across various domains of software engineering.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="space-y-6 md:space-y-8"
      >
        {experiences.map((exp, index) => (
          <motion.div key={index} variants={itemVariants} className="md:px-4">
            <Card className="overflow-hidden card-hover">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="md:w-1/3">
                    <h3 className="text-xl font-bold">{exp.title}</h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">{exp.company}</p>
                    <p className="text-sm text-muted-foreground">{exp.location}</p>
                    <p className="text-sm font-medium mt-1">{exp.period}</p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {exp.skills.map((skill, i) => (
                        <Badge
                          key={i}
                          variant="outline"
                          className="bg-blue-100/50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="md:w-2/3">
                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-blue-500 mt-2"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
