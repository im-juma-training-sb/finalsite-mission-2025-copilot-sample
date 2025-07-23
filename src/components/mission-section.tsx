"use client"

import { motion } from "framer-motion"
import { Book, Globe, Rocket, Heart } from "lucide-react"

export function MissionSection() {
  const missionPoints = [
    {
      icon: Book,
      title: "Educational Excellence",
      description: "We empower educational institutions with cutting-edge technology solutions that enhance learning experiences and institutional effectiveness.",
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Connecting schools, students, and communities worldwide through innovative digital platforms and communication tools.",
    },
    {
      icon: Rocket,
      title: "Innovation Leadership",
      description: "Pioneering next-generation educational technology that transforms how institutions engage with their communities.",
    },
    {
      icon: Heart,
      title: "Community Focus",
      description: "Building stronger relationships between schools and families through transparent communication and engagement tools.",
    },
  ]

  return (
    <section id="mission" className="py-24 sm:py-32 bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Our Mission
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300">
            At Finalsite, we believe in the transformative power of education and technology.
            Our mission is to provide innovative solutions that help educational institutions
            thrive in the digital age.
          </p>
        </motion.div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            {missionPoints.map((point, index) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col"
              >
                <div className="flex items-center gap-x-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 dark:bg-blue-500 shadow-lg shadow-blue-600/20 dark:shadow-blue-500/20">
                    <point.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-semibold leading-7 text-gray-900 dark:text-white">
                    {point.title}
                  </h3>
                </div>
                <p className="mt-4 text-base leading-7 text-gray-600 dark:text-gray-300">
                  {point.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mission statement highlight */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mx-auto mt-20 max-w-4xl"
        >
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-600 to-purple-700 px-8 py-16 text-center shadow-xl">
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white sm:text-3xl">
                "Empowering Education Through Innovation"
              </h3>
              <p className="mt-4 text-lg text-blue-100">
                We envision a world where every educational institution has the tools and
                technology needed to create exceptional experiences for their communities.
              </p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
