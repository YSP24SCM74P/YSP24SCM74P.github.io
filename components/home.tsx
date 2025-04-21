"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react"

export function Home() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.25,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 14,
        duration: 0.7,
      },
    },
    exit: { opacity: 0, y: 60, transition: { duration: 0.5 } },
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0, rotateY: 30 },
    visible: {
      scale: 1,
      opacity: 1,
      rotateY: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8,
      },
    },
    exit: { scale: 0.7, opacity: 0, rotateY: -30, transition: { duration: 0.6 } },
  };

  const floatingAnimation = {
    y: [0, -15, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      repeatType: "loop" as const,
      ease: "easeInOut",
    },
  };

  const [roleIndex, setRoleIndex] = useState(0)
  const roles = ["Software Engineer", "Full Stack Developer", "AI/ML Engineer", "Problem Solver"]

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [roles.length])

  const socialLinks = [
    { icon: <Github className="h-5 w-5" />, url: "https://github.com/yogeshwar-pawade", label: "GitHub" },
    { icon: <Linkedin className="h-5 w-5" />, url: "https://linkedin.com/in/ypawade/", label: "LinkedIn" },
    { icon: <Mail className="h-5 w-5" />, url: "mailto:pawade.yogeshwar@gmail.com", label: "Email" },
  ]

  return (
    <div className="relative min-h-screen">
      {/* Animated background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Animated squares background (pop and float up) */}
        <div className="hero-animated-bg">
          <div className="bg-blue-400/80 dark:bg-blue-700/50 border border-blue-300/70 dark:border-blue-900/40 shadow-lg shadow-blue-200/40 dark:shadow-blue-900/10" />
          <div className="bg-purple-400/80 dark:bg-purple-700/50 border border-purple-300/70 dark:border-purple-900/40 shadow-lg shadow-purple-200/40 dark:shadow-purple-900/10" />
          <div className="bg-pink-400/80 dark:bg-pink-700/50 border border-pink-300/70 dark:border-pink-900/40 shadow-lg shadow-pink-200/40 dark:shadow-pink-900/10" />
          <div className="bg-blue-500/70 dark:bg-blue-800/40 border border-blue-400/60 dark:border-blue-900/30 shadow-md shadow-blue-300/30 dark:shadow-blue-900/10" />
          <div className="bg-purple-500/70 dark:bg-purple-800/40 border border-purple-400/60 dark:border-purple-900/30 shadow-md shadow-purple-300/30 dark:shadow-purple-900/10" />
          <div className="bg-pink-500/70 dark:bg-pink-800/40 border border-pink-400/60 dark:border-pink-900/30 shadow-md shadow-pink-300/30 dark:shadow-pink-900/10" />
          <div className="bg-blue-300/70 dark:bg-blue-600/40 border border-blue-200/60 dark:border-blue-800/30 shadow shadow-blue-100/30 dark:shadow-blue-900/10" />
          <div className="bg-purple-300/70 dark:bg-purple-600/40 border border-purple-200/60 dark:border-purple-800/30 shadow shadow-purple-100/30 dark:shadow-purple-900/10" />
          <div className="bg-pink-300/70 dark:bg-pink-600/40 border border-pink-200/60 dark:border-pink-800/30 shadow shadow-pink-100/30 dark:shadow-pink-900/10" />
        </div>
      </div>

      <div className="w-full max-w-[1400px] mx-auto min-h-[calc(100vh-80px)] flex flex-col-reverse md:flex-row items-center justify-center gap-12 pt-16 relative z-10">
        <motion.div 
          className="w-full md:w-2/3 flex flex-col justify-center px-6 md:px-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <div className="inline-block bg-blue-100/80 dark:bg-blue-900/40 rounded-full px-4 py-1 text-sm text-blue-800 dark:text-blue-200 mb-6 shadow-md">
              <span className="flex items-center gap-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                </span>
                Available for new opportunities
              </span>
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
              <span className="gradient-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
                Hi, I&apos;m Yogeshwar!
              </span>
            </h2>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium mb-6">
              I&apos;m a{" "}
              <span className="relative">
                <span className="absolute inset-0 blur-sm opacity-30 rounded-lg" />
                <span className="relative bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-purple-400">
                  {roles[roleIndex]}
                </span>
              </span>
            </h1>
          </motion.div>
          
          <motion.p variants={itemVariants} className="text-lg text-muted-foreground mb-8">
            Software Engineer with 2 years of experience building scalable applications. Recent
            Computer Science graduate eager to contribute technical skills and solve complex problems in dynamic
            environments.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-8">
            <Button
              asChild
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 shadow-lg"
            >
              <a href="#contact">Contact Me</a>
            </Button>
            <Button size="lg" variant="outline" className="flex items-center gap-2 rounded-full px-6 border-blue-500 dark:border-blue-400 text-blue-700 dark:text-blue-200" asChild>
              <a href="/Resume.pdf" download>
                <Download className="h-4 w-4" /> Download Resume
              </a>
            </Button>
          </motion.div>
          
          <motion.div variants={itemVariants} className="flex items-center gap-4">
            <div className="text-sm text-muted-foreground">Follow me:</div>
            <div className="flex gap-3">
              {socialLinks.map((link, i) => (
                <motion.a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-background border border-border rounded-full hover:scale-110 hover:border-blue-500/50 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 shadow"
                  aria-label={link.label}
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="w-full md:w-1/3 flex justify-center items-center h-full"
          initial="hidden"
          animate="visible"
          variants={imageVariants}
        >
          <motion.div 
            className="relative"
            animate={floatingAnimation}
          >
            <div className="relative w-64 h-64 md:w-[380px] md:h-[380px] rounded-full overflow-hidden border-4 border-blue-500/30 dark:border-blue-400/30 shadow-2xl">
              <Image
                src="/profile.jpeg"
                alt="Yogeshwar Pawade"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-blue-500/20 dark:from-purple-400/20 dark:to-blue-400/20" />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-blue-500/20 dark:bg-blue-400/30 rounded-full blur-xl" />
            <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-purple-500/20 dark:bg-purple-400/30 rounded-full blur-xl" />
            <div className="absolute top-1/2 -right-8 w-8 h-8 bg-yellow-500/30 dark:bg-yellow-300/30 rounded-full blur-md" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
