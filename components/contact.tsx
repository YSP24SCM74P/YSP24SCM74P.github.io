"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Phone, MapPin, Send } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import emailjs from '@emailjs/browser'

export function Contact() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Initialize EmailJS with public key
    emailjs.init('frkUnagPZohiU4vU8')

    try {
      await emailjs.send(
        'service_dx19vx9',
        'template_f0aeyxf',
        {
          name: formData.name,
          user_email: formData.email,
          email: formData.email,
          message: formData.message,
        }
      )
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      })
      setFormData({ name: "", email: "", message: "" })
    } catch (error) {
      console.error('EmailJS error:', error)
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  }

  const letterVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.05,
        duration: 0.5,
      },
    }),
  }

  const contactMethods = [
    {
      icon: <Mail className="h-5 w-5 text-blue-600" />,
      label: "Email",
      value: "pawade.yogeshwar@gmail.com",
      href: "mailto:pawade.yogeshwar@gmail.com",
    },
    {
      icon: <Phone className="h-5 w-5 text-blue-600" />,
      label: "Phone",
      value: "(773) 930-2892",
      href: "tel:+17739302892",
    },
    {
      icon: <Linkedin className="h-5 w-5 text-blue-600" />,
      label: "LinkedIn",
      value: "linkedin.com/in/ypawade",
      href: "https://linkedin.com/in/ypawade/",
    },
    {
      icon: <Github className="h-5 w-5 text-blue-600" />,
      label: "GitHub",
      value: "github.com/yogeshwar-pawade",
      href: "https://github.com/yogeshwar-pawade",
    },
    {
      icon: <MapPin className="h-5 w-5 text-blue-600" />,
      label: "Location",
      value: "United States",
    },
  ]

  return (
    <div className="space-y-12 pb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Get In Touch</h2>
        <p className="text-muted-foreground text-lg">
          Feel free to reach out for collaborations, opportunities, or just to say hello!
        </p>
      </motion.div>

      <div className="flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="w-full max-w-lg mx-auto"
        >
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg shadow p-8 bg-white dark:bg-zinc-900 space-y-6">
            <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-6">
              <div className="text-center space-y-2">
                <h3 className="text-2xl font-bold gradient-text">Send Me a Message</h3>
                <p className="text-muted-foreground">I'll get back to you as soon as possible</p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-5">
                <motion.div variants={itemVariants}>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="rounded-lg border-gray-200 dark:border-gray-700 focus:border-blue-500 focus:ring-blue-500 transition-all"
                    required
                  />
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email"
                    className="rounded-lg border-gray-200 dark:border-gray-700 focus:border-blue-500 focus:ring-blue-500 transition-all"
                    required
                  />
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message"
                    rows={5}
                    className="rounded-lg border-gray-200 dark:border-gray-700 focus:border-blue-500 focus:ring-blue-500 transition-all"
                    required
                  />
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <Button 
                    type="submit" 
                    className="w-full rounded-lg bg-blue-600 hover:bg-blue-700 text-white py-2.5 transition-all duration-300" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        <Send className="h-5 w-5" /> Send Message
                      </span>
                    )}
                  </Button>
                </motion.div>
              </form>
            </motion.div>
            <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
              <h4 className="text-lg font-semibold mb-4 text-center">Connect with me</h4>
              <div className="flex gap-4 justify-center">
                <a href="https://linkedin.com/in/ypawade" aria-label="LinkedIn"><Linkedin className="h-6 w-6 text-blue-600 hover:text-blue-800" /></a>
                <a href="mailto:pawade.yogeshwar@gmail.com" aria-label="Mail"><Mail className="h-6 w-6 text-blue-600 hover:text-blue-800" /></a>
                <a href="https://github.com/yogeshwar-pawade" aria-label="GitHub"><Github className="h-6 w-6 text-blue-600 hover:text-blue-800" /></a>
                <a href="tel:+17739302892" aria-label="Call"><Phone className="h-6 w-6 text-blue-600 hover:text-blue-800" /></a>
                <a href="https://www.google.com/maps?q=United+States" aria-label="Location"><MapPin className="h-6 w-6 text-blue-600 hover:text-blue-800" /></a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
