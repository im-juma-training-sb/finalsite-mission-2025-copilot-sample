"use client"

import { motion } from "framer-motion"
import { CheckCircle, TrendingUp, Users, Shield, Zap, Award } from "lucide-react"

export function GoalsSection() {
  const goals = [
    {
      icon: TrendingUp,
      title: "Platform Growth",
      description: "Expand our platform to serve 2,000+ educational institutions globally",
      metrics: "Current: 1,200+ schools",
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: Users,
      title: "User Experience",
      description: "Achieve 95% user satisfaction through enhanced UX design and support",
      metrics: "Current: 89% satisfaction",
      color: "from-blue-500 to-cyan-600",
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Implement advanced security measures and achieve SOC 2 Type II certification",
      metrics: "Target: Q2 2025",
      color: "from-purple-500 to-violet-600",
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Reduce platform loading times by 40% through advanced optimization",
      metrics: "Target: Sub-2s load times",
      color: "from-orange-500 to-red-600",
    },
    {
      icon: Award,
      title: "Innovation Leadership",
      description: "Launch 3 groundbreaking features for modern educational communication",
      metrics: "AI-powered tools, VR integration",
      color: "from-pink-500 to-rose-600",
    },
    {
      icon: CheckCircle,
      title: "Sustainability",
      description: "Achieve carbon-neutral operations and promote sustainable practices",
      metrics: "Green hosting, paperless workflows",
      color: "from-teal-500 to-green-600",
    },
  ]

  return (
    <section id="goals" className="py-24 sm:py-32 bg-white dark:bg-gray-800">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            2025 Strategic Goals
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Our ambitious roadmap for the year ahead, focused on growth, innovation,
            and delivering exceptional value to educational communities worldwide.
          </p>
        </motion.div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:mt-20 lg:max-w-none lg:grid-cols-3">
          {goals.map((goal, index) => (
            <motion.div
              key={goal.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-gray-900 p-8 shadow-lg hover:shadow-xl dark:shadow-gray-900/20 ring-1 ring-gray-200/50 dark:ring-gray-700/50 transition-all duration-300 hover:scale-[1.02] hover:ring-blue-500/20">
                {/* Gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${goal.color} opacity-0 transition-opacity duration-300 group-hover:opacity-5`} />
                
                {/* Icon */}
                <div className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${goal.color} shadow-lg`}>
                  <goal.icon className="h-7 w-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {goal.title}
                </h3>
                <p className="text-base text-gray-600 dark:text-gray-300 mb-4">
                  {goal.description}
                </p>
                
                {/* Metrics */}
                <div className="mt-auto">
                  <div className="rounded-lg bg-white dark:bg-gray-800 px-3 py-2 border border-gray-200 dark:border-gray-600">
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {goal.metrics}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto mt-20 max-w-4xl"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              2025 Roadmap
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Key milestones throughout the year
            </p>
          </div>

          <div className="space-y-8">
            {[
              { quarter: "Q1 2025", milestone: "Platform optimization & security enhancements" },
              { quarter: "Q2 2025", milestone: "AI-powered features launch & SOC 2 certification" },
              { quarter: "Q3 2025", milestone: "Global expansion & partnership growth" },
              { quarter: "Q4 2025", milestone: "Sustainability goals achievement & innovation showcase" },
            ].map((item, index) => (
              <div key={item.quarter} className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 rounded-full bg-blue-600 dark:bg-blue-500 flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">
                      {index + 1}
                    </span>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {item.quarter}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    {item.milestone}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
