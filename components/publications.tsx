"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Award } from "lucide-react"

export function Publications() {
  const publications = [
    {
      title: "Music and Movie Recommendation Using Emotion Detection",
      publisher: "International Journal of Novel Research and Development",
      description:
        "Research on using emotion detection algorithms to provide personalized music and movie recommendations to users based on their emotional state.",
      link: "https://www.ijnrd.org/viewpaperforall?paper=IJNRD2305349",
    },
    {
      title: "Covicare",
      publisher: "IEEE 8th International Conference on Signal Processing ICSC 2022",
      description:
        "Research paper on a comprehensive COVID-19 care system that helps track, manage, and provide resources during the pandemic.",
      link: "https://ieeexplore.ieee.org/document/10009069",
    },
  ]

  const certifications = [
    {
      title: "Walmart USA - Advance Software Engineering",
      date: "April 2024",
      issuer: "Walmart",
      link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Walmart%20USA/oX6f9BbCL9kJDJzfg_Walmart%20USA_zWykyyPfh78AAWm5p_1713425086636_completion_certificate.pdf",
    },
    {
      title: "JP Morgan Chase & Co. - Software Engineering",
      date: "October 2021",
      issuer: "JP Morgan Chase",
      link: "/JPMorganChase.pdf",
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
        <h2 className="text-3xl font-bold mb-4 gradient-text">Publications & Certifications</h2>
        <p className="text-muted-foreground">
          My research contributions and professional certifications that demonstrate my expertise and continuous
          learning.
        </p>
      </motion.div>

      {/* Publications Cards */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="max-w-3xl mx-auto text-center">
        <h3 className="text-xl font-semibold mb-4">Publications</h3>
      </motion.div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {publications.map((pub, i) => (
          <Card key={i} className="flex flex-col p-6 hover:shadow-lg transition">
            <div className="flex items-center gap-2 mb-4">
              <FileText className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              <h4 className="text-lg text-center font-semibold">{pub.title}</h4>
            </div>
            <p className="text-sm text-blue-600 dark:text-blue-400 mb-2">{pub.publisher}</p>
            <p className="text-sm text-muted-foreground flex-1 mb-4">{pub.description}</p>
            <Button asChild variant="outline">
              <a href={pub.link || '#'} target="_blank" rel="noopener noreferrer">View Paper</a>
            </Button>
          </Card>
        ))}
      </div>
      {/* Certifications Cards */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="max-w-3xl mx-auto text-center">
        <h3 className="text-xl font-semibold mb-4">Certifications</h3>
      </motion.div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {certifications.map((cert, i) => (
          <Card key={i} className="flex flex-col p-6 hover:shadow-lg transition">
            <div className="flex items-center gap-2 mb-4">
              <Award className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              <h4 className="text-lg text-center font-semibold">{cert.title}</h4>
            </div>
            <p className="text-sm text-blue-600 dark:text-blue-400 mb-2">Issued: {cert.date}</p>
            <p className="text-sm text-muted-foreground flex-1 mb-4">Issuer: {cert.issuer}</p>
            <Button asChild variant="outline">
              <a href={cert.link || '#'} target="_blank" rel="noopener noreferrer">View Certificate</a>
            </Button>
          </Card>
        ))}
      </div>
    </div>
  )
}
