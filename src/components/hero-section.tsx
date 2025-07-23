"use client"

import { motion } from "framer-motion"
import { ArrowRight, Target, Lightbulb, Users } from "lucide-react"

export function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden bg-white dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
              Finalsite{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                2025
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Empowering educational institutions with innovative technology solutions.
              Discover our mission, goals, and vision for transforming education in 2025.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-10 flex items-center justify-center gap-x-6"
          >
            <button
              onClick={() => {
                const element = document.getElementById("mission")
                element?.scrollIntoView({ behavior: "smooth" })
              }}
              className="rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-lg hover:bg-blue-700 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all duration-200 hover:scale-105"
            >
              Explore Our Mission
            </button>
            <button
              onClick={() => {
                const element = document.getElementById("goals")
                element?.scrollIntoView({ behavior: "smooth" })
              }}
              className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 flex items-center gap-1 group"
            >
              View 2025 Goals <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </motion.div>
        </div>

        {/* Feature icons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl"
        >
          <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 dark:bg-blue-500 shadow-lg shadow-blue-600/25 dark:shadow-blue-500/25">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Clear Goals
              </h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                Strategic objectives that drive our mission forward
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-600 dark:bg-purple-500 shadow-lg shadow-purple-600/25 dark:shadow-purple-500/25">
                <Lightbulb className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Innovation
              </h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                Cutting-edge solutions for modern education
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-green-600 dark:bg-green-500 shadow-lg shadow-green-600/25 dark:shadow-green-500/25">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Community Impact
              </h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                Empowering educators and students worldwide
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Background decoration - only visible in dark mode */}
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80 opacity-0 dark:opacity-100">
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
    </section>
  )
}
