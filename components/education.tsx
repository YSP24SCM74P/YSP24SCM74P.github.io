"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, BookOpen } from "lucide-react"

export function Education() {
  const education = [
    {
      school: "Illinois Institute of Technology",
      location: "Chicago, IL",
      degree: "Master of Computer Science",
      period: "Expected May 2025",
      gpa: "GPA: 3.8",
      courses: [
        "Science of Programming",
        "Computer Networks",
        "Advance Database Organization",
        "Unified Modeling Language",
        "Mobile Application Development",
        "Machine Learning",
        "Big Data Technologies",
      ],
    },
    {
      school: "Symbiosis Institute of Technology",
      location: "Pune, India",
      degree: "Bachelor of Technology in Computer Science",
      period: "July 2019 - May 2023",
      gpa: "GPA: 3.3",
      courses: [
        "Data Structures and Algorithms",
        "Database Organization",
        "Operating Systems",
        "Software Engineering",
        "Object-Oriented Programming",
        "Cloud Computing",
        "Machine Learning",
        "Artificial Intelligence",
      ],
    },
  ]

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-4 gradient-text">Education</h2>
        <p className="text-muted-foreground">My academic journey and qualifications</p>
      </motion.div>

      <div className="space-y-6">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="overflow-hidden card-hover">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/4 flex flex-col items-center md:items-start">
                    <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900/30 mb-4">
                      <GraduationCap className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h3 className="text-xl font-bold text-center md:text-left">{edu.school}</h3>
                    <p className="text-sm text-muted-foreground">{edu.location}</p>
                    <p className="text-sm font-medium mt-2">{edu.period}</p>
                    <p className="text-sm font-medium text-blue-600 dark:text-blue-400">{edu.gpa}</p>
                  </div>

                  <div className="md:w-3/4">
                    <h4 className="text-lg font-semibold mb-3">{edu.degree}</h4>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <BookOpen className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                        <h5 className="font-medium">Key Coursework</h5>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1">
                        {edu.courses.map((course, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-blue-500"></span>
                            <span className="text-sm">{course}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
