import { Navbar } from "@/components/navbar"
import { ThemeProvider } from "@/components/theme-provider"
import { Home } from "@/components/home"
import { About } from "@/components/about"
import { Stack } from "@/components/stack"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"

import { EducationExperienceTimeline } from "@/components/education-experience-timeline"
import { Publications } from "@/components/publications"
import { AnimatedSection } from "@/components/animated-section";

export default function Page() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="h-screen scroll-container snap-y snap-mandatory overflow-y-auto">
          <AnimatedSection id="home" className="section-container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto snap-start">
            <Home />
          </AnimatedSection>
          <AnimatedSection id="about" className="section-container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto snap-start">
            <About />
          </AnimatedSection>
          <AnimatedSection id="education-experience" className="section-container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto snap-start">
            <EducationExperienceTimeline />
          </AnimatedSection>
          <section id="skills" className="section-container justify-start px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto snap-start">
            <Stack />
          </section>
          <AnimatedSection id="projects" className="section-container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto snap-start">
            <Projects />
          </AnimatedSection>
          <AnimatedSection id="publications" className="section-container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto snap-start">
            <Publications />
          </AnimatedSection>
          <AnimatedSection id="contact" className="section-container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto snap-start">
            <Contact />
          </AnimatedSection>
        </main>
        {/* <Footer /> */}
      </div>
    </ThemeProvider>
  )
}
