"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Download } from "lucide-react"

export function Home() {
  const [roleIndex, setRoleIndex] = useState(0)
  const roles = ["Software Engineer", "Full Stack Developer", "AI/ML Engineer", "Problem Solver"]

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [roles.length])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
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

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.7,
      },
    },
  }

  return (
    <div className="relative min-h-screen">
      {/* Animated background */}
      <div className="hero-animated-bg">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <div className="w-full max-w-[1400px] mx-auto min-h-[calc(100vh-80px)] pt-24 md:pt-32 flex flex-col-reverse md:flex-row items-center justify-center gap-8">
        <motion.div 
          className="w-full md:w-3/5 lg:w-[65%] flex flex-col justify-center px-6 md:px-12"
          variants={containerVariants} 
          initial="hidden" 
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-blue-600 dark:text-blue-400 mb-4">
              Hi, I&apos;m Yogeshwar!
            </h2>
          </motion.div>
          <motion.div variants={itemVariants}>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium mb-6">
              I&apos;m a{" "}
              <span className="relative">
                <span className="absolute inset-0 blur-sm opacity-30 rounded-lg" />
                <span className="relative bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {roles[roleIndex]}
                </span>
              </span>
            </h1>
          </motion.div>
          <motion.p variants={itemVariants} className="text-lg text-muted-foreground mb-8">
            Software engineer with 2 years of experience building scalable applications. Recent
            Computer Science graduate eager to contribute technical skills and solve complex problems in dynamic
            environments.
          </motion.p>
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4">

            <Button
              size="lg"
              variant="outline"
              onClick={() => {
                const contactSection = document.querySelector("#contact")
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" })
                }
              }}
            >
              Contact Me
            </Button>
            <Button size="lg" variant="ghost" className="flex items-center gap-2" asChild>
              <a href="public/Resume.pdf" download>
                <Download className="h-4 w-4" /> Download Resume
              </a>
            </Button>
          </motion.div>
        </motion.div>
        <motion.div 
          className="w-full md:w-2/5 lg:w-[35%] flex justify-center items-center h-full"
          variants={imageVariants} 
          initial="hidden" 
          animate="visible"
        >
          <div className="relative w-64 h-64 md:w-[400px] md:h-[400px] rounded-full overflow-hidden border-4 border-blue-500/20 glow">
            <Image
              src="/profile.jpeg"
              alt="Yogeshwar Pawade"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-blue-500/20" />
          </div>
        </motion.div>
      </div>
    </div>
  )
}
