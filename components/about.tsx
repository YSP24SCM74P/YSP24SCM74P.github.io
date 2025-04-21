"use client"

import { motion } from "framer-motion"

export function About() {
  return (
    <div className="relative py-12 md:py-20">
      {/* Subtle animated background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[60vw] h-[40vh] rounded-3xl blur-2xl bg-gradient-to-tr from-blue-300/20 via-purple-300/10 to-pink-300/10 dark:from-blue-900/30 dark:via-purple-900/20 dark:to-pink-900/10" />
        <div className="absolute bottom-10 right-1/3 w-60 h-32 rounded-2xl blur-2xl bg-gradient-to-br from-blue-200/20 via-purple-200/10 to-pink-200/10 dark:from-blue-700/20 dark:via-purple-700/10 dark:to-pink-700/10" />
      </div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.7 }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.18, delayChildren: 0.1 },
          },
        }}
        className="relative z-10 space-y-8"
      >
        {/* Heading */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.7, type: 'spring' } },
          }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-4 gradient-text">About Me</h2>
          <p className="text-muted-foreground text-sm">
          Ever since ten‑year‑old me traded a week’s pocket money for an hour of Counter‑Strike at the local internet cafe and watched the owner hot‑swap RAM sticks between matches. I’ve been captivated by what happens behind the screen. That spark carried me from tinkering with game mods to unpacking how social‑media feeds stay perfectly in sync, and now to asking a bigger question: How can AI reason at scale to solve everyday problems?
          </p>
          <br />
          <p className="text-muted-foreground text-sm">
              I'm a software engineer with 2 years of experience building scalable applications. As a recent Computer
              Science graduate, I'm eager to contribute my technical skills and solve complex problems in dynamic
              environments.
            </p>
            <br />
            <p className="text-muted-foreground text-sm">
            Outside the code editor you will catch me spiking volleyballs, chasing lane lines in the pool, or hiking forest trails. These are the activities that sharpen teamwork, resilience, and systems‑level thinking.
            </p>

        </motion.div>
      </motion.div>
    </div>
  )
}
