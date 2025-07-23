"use client"

import { motion } from "framer-motion"
import { Users, Globe, GraduationCap, Heart, TrendingUp, Star } from "lucide-react"

export function ImpactSection() {
  const stats = [
    {
      icon: Users,
      value: "1,200+",
      label: "Schools Served",
      description: "Educational institutions trust our platform",
    },
    {
      icon: GraduationCap,
      value: "500K+",
      label: "Students Reached",
      description: "Young minds connected through our technology",
    },
    {
      icon: Globe,
      value: "15+",
      label: "Countries",
      description: "Global presence across multiple continents",
    },
    {
      icon: Heart,
      value: "95%",
      label: "Satisfaction Rate",
      description: "Client satisfaction with our services",
    },
  ]

  const impactAreas = [
    {
      title: "Enhanced Communication",
      description: "Streamlined communication between schools, parents, and students through our integrated platform.",
      impact: "40% improvement in parent engagement",
    },
    {
      title: "Digital Transformation",
      description: "Helping traditional institutions embrace modern technology and digital-first approaches.",
      impact: "60% reduction in administrative overhead",
    },
    {
      title: "Community Building",
      description: "Strengthening school communities through better connectivity and shared experiences.",
      impact: "25% increase in community participation",
    },
    {
      title: "Educational Excellence",
      description: "Supporting institutions in delivering exceptional educational outcomes and experiences.",
      impact: "Improved student outcomes across all metrics",
    },
  ]

  return (
    <section id="impact" className="py-24 sm:py-32 bg-white dark:bg-gradient-to-br dark:from-gray-900 dark:via-blue-900 dark:to-purple-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Our Impact
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Measuring success through the positive changes we create in educational
            communities worldwide.
          </p>
        </motion.div>

        {/* Statistics */}
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:mt-20 lg:max-w-none lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center"
            >
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-white dark:bg-gray-800 shadow-lg shadow-gray-200/50 dark:shadow-gray-900/20 ring-1 ring-gray-200/50 dark:ring-gray-700/50">
                <stat.icon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {stat.value}
              </div>
              <div className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 text-center">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Impact areas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mx-auto mt-20 max-w-4xl"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Areas of Impact
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              How we're making a difference in education
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {impactAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl dark:shadow-gray-900/20 border border-gray-200/50 dark:border-gray-700/50 transition-all duration-300 hover:scale-[1.02] hover:border-blue-500/20"
              >
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {area.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {area.description}
                </p>
                <div className="flex items-center space-x-2">
                  <TrendingUp className="h-5 w-5 text-green-600 dark:text-green-400" />
                  <span className="text-sm font-medium text-green-700 dark:text-green-400">
                    {area.impact}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto mt-20 max-w-4xl text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
            <div className="flex justify-center mb-6">
              <Star className="h-12 w-12" />
            </div>
            <h3 className="text-3xl font-bold mb-4">
              Join Our Mission
            </h3>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Be part of the educational transformation. Together, we can create
              extraordinary experiences that inspire learning and build stronger communities.
            </p>
            <button className="inline-flex items-center rounded-full bg-white text-blue-600 px-8 py-3 text-lg font-semibold shadow-lg hover:bg-gray-50 transition-colors">
              Learn More About Our Platform
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
