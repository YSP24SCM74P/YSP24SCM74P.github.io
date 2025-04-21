"use client"

import React from "react"
import { motion } from "framer-motion"
import { GraduationCap, Briefcase } from "lucide-react"

// Journey entries
const timelineData = [
  {
    type: "education",
    title: "Master's of Computer Science",
    institution: "Illinois Institute of Technology, Chicago, IL",
    date: "2023 - 2025",
    GPA: "3.8",
    details: [

      "Coursework: Science of Programming, Computer Networks, Advanced Database Organization, Unified Modeling Language, Mobile Application Development, Machine Learning, Big Data Technologies, Software Project Management, Introduction to Information Security."
    ],
  },
  {
    type: "experience",
    title: "Software Engineer Intern",
    institution: "Reality AI, New York, United States",
    date: "June 2024 - October 2024",
    details: [
      "Engineered Marvel AI teaching assistant using Next.js, React, and Firebase. Built UI with Material UI; backend with Firebase Functions, Firestore, Redis. Collaborated in agile team, managed GitHub issues, deployed scalable cloud architecture."
    ],
  },
  {
    type: "experience",
    title: "Software Developer",
    institution: "Social Syncing, Pune, India",
    date: "June 2023 - September 2023",
    details: [
      "Streamlined social media synchronization for clients; reduced manual tasks. Implemented Redis caching to improve response times and handle more concurrent users. Optimized algorithms, reducing latency by 35%."
    ],
  },
  {
    type: "experience",
    title: "RPA Developer Intern",
    institution: "AutomationEdge, Pune, India",
    date: "January 2023 - May 2023",
    details: [
      "Built AI-powered WhatsApp chatbot for employee self-service, improving efficiency by 37%. Integrated payroll systems for secure document access. Deployed modules for IT self-service, cutting support tickets significantly."
    ],
  },
  {
    type: "experience",
    title: "Software Developer Intern",
    institution: "Akshaya Patra Foundation, Pune, India",
    date: "August 2021 - February 2022",
    details: [
      "Delivered blockchain crowdfunding platform with React, Django, MetaMask. Built a Nutritional Value Tracker improving meal planning feedback by 25%."
    ],
  },
  {
    type: "education",
    title: "Bachelor of Technology in Computer Science",
    institution: "Symbiosis Institute of Technology, Pune, India",
    date: "July 2019 - May 2023",
    GPA: "3.3",
    details: [
      "Relevant coursework: Data Structures, Operating Systems, Software Engineering, Cloud Computing, ML, AI."
    ],
  },
]

export function EducationExperienceTimeline() {
  return (
    <section id="education-experience" className="relative py-12 md:py-16">
      {/* Subtle animated background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[60vw] h-[40vh] rounded-3xl blur-2xl bg-gradient-to-tr from-blue-300/20 via-purple-300/10 to-pink-300/10 dark:from-blue-900/30 dark:via-purple-900/20 dark:to-pink-900/10" />
        <div className="absolute bottom-10 right-1/3 w-60 h-32 rounded-2xl blur-2xl bg-gradient-to-br from-blue-200/20 via-purple-200/10 to-pink-200/10 dark:from-blue-700/20 dark:via-purple-700/10 dark:to-pink-700/10" />
        {/* decorative dots */}
        <div className="absolute -top-4 -left-6 w-12 h-12 bg-blue-500/20 dark:bg-blue-400/30 rounded-full blur-xl" />
        <div className="absolute -top-6 right-10 w-8 h-8 bg-pink-500/20 dark:bg-pink-400/30 rounded-full blur-md" />
        <div className="absolute top-1/3 left-1/4 w-8 h-8 bg-yellow-500/30 dark:bg-yellow-300/30 rounded-full blur-md" />
        <div className="absolute bottom-16 left-1/3 w-14 h-14 bg-purple-500/20 dark:bg-purple-400/30 rounded-full blur-lg" />
        <div className="absolute bottom-10 right-1/4 w-10 h-10 bg-blue-300/20 dark:bg-blue-600/30 rounded-full blur-lg" />
        <div className="absolute top-1/2 right-1/3 w-12 h-12 bg-pink-300/20 dark:bg-pink-600/30 rounded-full blur-xl" />
        <div className="absolute left-10 bottom-8 w-6 h-6 bg-yellow-500/30 dark:bg-yellow-300/30 rounded-full blur-sm" />
        <div className="absolute right-20 top-1/4 w-16 h-16 bg-purple-300/20 dark:bg-purple-600/30 rounded-full blur-2xl" />
      </div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.25, delayChildren: 0.1 } } }}
        className="relative z-10 max-w-5xl mx-auto px-4 space-y-8"
      >
        <motion.div
          variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, type: 'spring' } } }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-8">Journey</h2>
        </motion.div>
        <div className="relative">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full border-l-2 border-violet-500 dark:border-violet-700" />
          <div className="relative">
            {timelineData.map((item, idx) => (
              <motion.div
                key={idx}
                variants={{ hidden: { opacity: 0, x: idx % 2 === 0 ? -40 : 40 }, visible: { opacity: 1, x: 0, transition: { duration: 0.7, type: 'spring' } } }}
                className="relative mb-12"
              >
                <div className="absolute left-1/2 top-4 transform -translate-x-1/2 w-10 h-10 bg-violet-500 dark:bg-violet-700 rounded-full flex items-center justify-center z-10">
                  {item.type === "education" ? (
                    <GraduationCap className="w-6 h-6 text-white" />
                  ) : (
                    <Briefcase className="w-6 h-6 text-white" />
                  )}
                </div>
                <div className={`card-hover backdrop-blur bg-card border border-border text-card-foreground rounded-lg shadow-sm p-6 w-full md:w-[48%] ${idx % 2 === 0 ? 'md:ml-auto md:pr-8 text-left' : 'md:mr-auto md:pl-8 text-right'}`}> 
                  <div className="text-sm text-muted-foreground">{item.date}</div>
                  <h4 className="text-lg font-semibold mt-1">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.institution}</p>
                  {item.type === "education" && (
                    <p className="text-sm text-muted-foreground">GPA: {item.GPA}</p>
                  )}
                  <p className="mt-2 text-justify">{item.details.join(', ')}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default EducationExperienceTimeline
