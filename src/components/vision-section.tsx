"use client"

import { motion } from "framer-motion"
import { Eye, Brain, Network, Sparkles } from "lucide-react"

export function VisionSection() {
  const visionElements = [
    {
      icon: Brain,
      title: "AI-Powered Education",
      description: "Integrate artificial intelligence to personalize learning experiences and automate administrative tasks.",
    },
    {
      icon: Network,
      title: "Connected Communities",
      description: "Create seamless connections between schools, families, and communities through our platform.",
    },
    {
      icon: Sparkles,
      title: "Future-Ready Solutions",
      description: "Develop cutting-edge tools that prepare educational institutions for tomorrow's challenges.",
    },
  ]

  return (
    <section id="vision" className="py-24 sm:py-32 bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 mb-6 shadow-lg shadow-purple-600/25">
              <Eye className="w-8 h-8 text-white" />
            </div>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Our Vision for the Future
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Envisioning a world where technology seamlessly enhances education,
            creating meaningful connections and unlocking unlimited potential.
          </p>
        </motion.div>

        {/* Main vision statement */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mx-auto mt-16 max-w-4xl"
        >
          <div className="relative overflow-hidden rounded-3xl bg-white dark:bg-gradient-to-br dark:from-gray-800 dark:via-gray-700 dark:to-blue-900 p-12 text-center shadow-2xl border border-gray-100 dark:border-gray-700">
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl mb-6">
                "Transforming Education Through Innovation"
              </h3>
              <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                By 2030, we envision Finalsite as the global leader in educational technology,
                empowering every school to create extraordinary experiences that inspire learning,
                foster community, and prepare students for a rapidly evolving world.
              </p>
            </div>
            
            {/* Background decoration */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 translate-x-1/3 translate-y-1/3 w-80 h-80 bg-gradient-to-r from-cyan-400/20 to-indigo-400/20 rounded-full blur-3xl" />
          </div>
        </motion.div>

        {/* Vision elements */}
        <div className="mx-auto mt-20 max-w-2xl lg:max-w-none">
          <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {visionElements.map((element, index) => (
              <motion.div
                key={element.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center group"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-600 to-blue-600 shadow-lg shadow-purple-600/25 transition-transform duration-300 group-hover:scale-110">
                  <element.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {element.title}
                </h3>
                <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                  {element.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Future outlook */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto mt-20 max-w-4xl text-center"
        >
          <div className="border-t border-gray-200 dark:border-gray-700 pt-12">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Looking Beyond 2025
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Our vision extends far beyond the immediate future. We're building the foundation
              for next-generation educational experiences that will shape how institutions
              connect, communicate, and inspire their communities for decades to come.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
