"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Code, Database, Server, Globe, Layers, TestTube, MessageSquare } from "lucide-react"
import {
  SiC, SiCplusplus, SiJavascript, SiTypescript, SiPython, SiR,
  SiHtml5, SiCss3, SiNodedotjs, SiReact, SiAngular, SiNextdotjs,
  SiDjango, SiFastapi, SiExpress, SiTailwindcss, SiBootstrap, SiPostgresql,
  SiSqlite, SiSupabase, SiFirebase, SiMysql, SiMongodb, SiSwagger,
  SiGraphql, SiAmazon, SiGooglecloud, SiGit, SiGithub, SiCircleci,
  SiDocker, SiKubernetes, SiElasticsearch, SiPostman, SiSelenium, SiLinux,
  SiJira
} from "react-icons/si"
import { FaJava, FaWindows } from "react-icons/fa"

export function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const skillCategories = [
    {
      name: "Programming Languages",
      icon: <Code className="h-5 w-5" />,
      skills: ["C", "C++", "Java", "JavaScript", "TypeScript", "Python", "R", "HTML", "CSS"],
    },
    {
      name: "Frameworks & Libraries",
      icon: <Layers className="h-5 w-5" />,
      skills: ["Node", "React", "Angular", "Next.js", "Django", "FastAPI", "Express.js", "Tailwind CSS", "Bootstrap"],
    },
    {
      name: "Databases",
      icon: <Database className="h-5 w-5" />,
      skills: ["SQL", "NoSQL", "PostgreSQL", "SQLite", "Supabase", "Firebase", "MySQL", "MongoDB"],
    },
    {
      name: "APIs & Cloud Platforms",
      icon: <Globe className="h-5 w-5" />,
      skills: ["REST API", "GraphQL", "AWS", "Google Cloud", "Firebase", "Supabase"],
    },
    {
      name: "DevOps & Tools",
      icon: <Server className="h-5 w-5" />,
      skills: [
        "Git",
        "GitHub",
        "CI/CD",
        "Docker",
        "Kubernetes",
        "Elasticsearch",
        "Postman",
        "Selenium",
        "Linux",
        "Windows",
      ],
    },
    {
      name: "Testing & Project Management",
      icon: <TestTube className="h-5 w-5" />,
      skills: ["OOP", "MVC", "Unit Testing (JUnit, Pytest)", "Integration Testing", "Jira", "Agile", "Scrum"],
    },
    {
      name: "Soft Skills",
      icon: <MessageSquare className="h-5 w-5" />,
      skills: ["Communication", "Teamwork and Collaboration", "Problem-Solving", "Adaptability"],
    },
  ]

  const iconMap: Record<string, React.ComponentType<any>> = {
    "C": SiC,
    "C++": SiCplusplus,
    "Java": FaJava,
    "JavaScript": SiJavascript,
    "TypeScript": SiTypescript,
    "Python": SiPython,
    "R": SiR,
    "HTML": SiHtml5,
    "CSS": SiCss3,
    "Node": SiNodedotjs,
    "React": SiReact,
    "Angular": SiAngular,
    "Next.js": SiNextdotjs,
    "Django": SiDjango,
    "FastAPI": SiFastapi,
    "Express.js": SiExpress,
    "Tailwind CSS": SiTailwindcss,
    "Bootstrap": SiBootstrap,
    "SQL": SiPostgresql,
    "NoSQL": SiMongodb,
    "PostgreSQL": SiPostgresql,
    "SQLite": SiSqlite,
    "Supabase": SiSupabase,
    "Firebase": SiFirebase,
    "MySQL": SiMysql,
    "MongoDB": SiMongodb,
    "REST API": SiSwagger,
    "GraphQL": SiGraphql,
    "AWS": SiAmazon,
    "Google Cloud": SiGooglecloud,
    "Git": SiGit,
    "GitHub": SiGithub,
    "CI/CD": SiCircleci,
    "Docker": SiDocker,
    "Kubernetes": SiKubernetes,
    "Elasticsearch": SiElasticsearch,
    "Postman": SiPostman,
    "Selenium": SiSelenium,
    "Linux": SiLinux,
    "Windows": FaWindows,
    "Jira": SiJira
  }

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
        <h2 className="text-3xl font-bold mb-4 gradient-text">Skills</h2>
        <p className="text-muted-foreground">My technical expertise and professional capabilities</p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="flex flex-col items-center bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold">{category.name}</h3>
            </div>
            <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-4 justify-items-center">
              {category.skills.map((skill, i) => {
                const IconComponent = iconMap[skill]
                return IconComponent ? (
                  <IconComponent key={i} className="h-8 w-8 text-gray-700 dark:text-gray-300" aria-label={skill} />
                ) : (
                  <Code key={i} className="h-8 w-8 text-gray-700 dark:text-gray-300" aria-label={skill} />
                )
              })}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
