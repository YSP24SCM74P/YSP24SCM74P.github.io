"use client";

import React, { useState } from "react"
import { Moon, Sun, X, Menu } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

export function Navbar() {
  const { theme, setTheme } = useTheme()
  const [isMounted, setIsMounted] = useState<boolean>(false)
  const [activeSection, setActiveSection] = useState<string>("home")
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  
  // Handle hydration issues with theme
  React.useEffect(() => {
    setIsMounted(true)
  }, [])

  // Track active section on scroll
  React.useEffect(() => {
    const container = document.querySelector<HTMLDivElement>('.scroll-container');
    if (!container) return;
    const handleScroll = () => {
      const scrollMiddle = container.scrollTop + container.clientHeight / 2;
      const sections = Array.from(container.querySelectorAll<HTMLElement>('section[id]'));
      for (const section of sections) {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.id;
        if (scrollMiddle >= top && scrollMiddle < top + height) {
          setActiveSection(id);
          break;
        }
      }
    };
    container.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Journey", href: "#education-experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Publications", href: "#publications" },
    { name: "Contact", href: "#contact" },
  ]

  // Removed custom scrollToSection; using default anchor scrolling

  return (
    <>
      {/* Desktop Navbar */}
      <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 hidden md:block">
        <div className="flex justify-center px-4 py-2">
          <div 
            className="bg-white/10 dark:bg-gray-900/20
              backdrop-blur-md
              border border-gray-200/20 dark:border-gray-700/20
              rounded-full
              shadow-[0_8px_32px_0_rgba(0,0,0,0.06)]
              dark:shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]
              hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.15)]
              dark:hover:shadow-[0_8px_32px_0_rgba(255,255,255,0.15)]
              transition-all duration-300"
          >
            <div className="px-8 py-3">
              <div className="flex items-center justify-center space-x-2">
                <nav className="flex items-center space-x-2">
                  {navItems.map((item) => (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200
                        ${activeSection === item.href.substring(1) 
                          ? 'bg-blue-100/50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300' 
                          : 'text-foreground/70 hover:text-foreground hover:bg-gray-100/50 dark:hover:bg-gray-800/20'}`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {item.name}
                    </motion.a>
                  ))}
                  <motion.button
                    className="ml-2 p-2 rounded-full bg-gray-100/50 dark:bg-gray-800/30 text-gray-700 dark:text-gray-300"
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    whileHover={{ scale: 1.1, rotate: 15 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label="Toggle theme"
                  >
                    <AnimatePresence initial={false} mode="wait">
                      {isMounted && theme === "dark" ? (
                        <motion.div key="sun" initial={{ scale: 0, rotate: -90, opacity: 0 }} animate={{ scale: 1, rotate: 0, opacity: 1 }} exit={{ scale: 0, rotate: 90, opacity: 0 }} transition={{ duration: 0.3 }}>
                          <Sun className="h-4 w-4" />
                        </motion.div>
                      ) : (
                        <motion.div key="moon" initial={{ scale: 0, rotate: 90, opacity: 0 }} animate={{ scale: 1, rotate: 0, opacity: 1 }} exit={{ scale: 0, rotate: -90, opacity: 0 }} transition={{ duration: 0.3 }}>
                          <Moon className="h-4 w-4" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.button>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 md:hidden">
        <div className="p-4">
          <div className="flex items-center justify-between bg-white/10 dark:bg-gray-900/20 backdrop-blur-md border border-gray-200/20 dark:border-gray-700/20 rounded-full px-4 py-3 shadow-lg">
            <motion.a 
              href="#home"
              className="text-lg font-bold gradient-text"
              whileTap={{ scale: 0.95 }}
            >
              Yogeshwar
            </motion.a>
            <div className="flex items-center gap-2">
              <motion.button
                className="p-2 rounded-full bg-gray-100/50 dark:bg-gray-800/30 text-gray-700 dark:text-gray-300"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Toggle theme"
              >
                <AnimatePresence initial={false} mode="wait">
                  {isMounted && theme === "dark" ? (
                    <motion.div key="sun-mobile" initial={{ scale: 0, rotate: -90, opacity: 0 }} animate={{ scale: 1, rotate: 0, opacity: 1 }} exit={{ scale: 0, rotate: 90, opacity: 0 }} transition={{ duration: 0.3 }}>
                      <Sun className="h-4 w-4" />
                    </motion.div>
                  ) : (
                    <motion.div key="moon-mobile" initial={{ scale: 0, rotate: 90, opacity: 0 }} animate={{ scale: 1, rotate: 0, opacity: 1 }} exit={{ scale: 0, rotate: -90, opacity: 0 }} transition={{ duration: 0.3 }}>
                      <Moon className="h-4 w-4" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
              <motion.button
                className="p-2 rounded-full bg-gray-100/50 dark:bg-gray-800/30 text-gray-700 dark:text-gray-300"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 pt-20"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex flex-col items-center gap-2 p-4">
                {navItems.map((item) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className={`w-full py-3 px-4 rounded-lg text-center text-base font-medium transition-all
                      ${activeSection === item.href.substring(1) 
                        ? 'bg-blue-100/50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300' 
                        : 'text-foreground/70 hover:text-foreground'}`}
                    onClick={() => setIsMenuOpen(false)}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.name}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  )
}
