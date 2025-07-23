"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Home", href: "#home" },
  { name: "Mission", href: "#mission" },
  { name: "Goals", href: "#goals" },
  { name: "Vision", href: "#vision" },
  { name: "Impact", href: "#impact" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg border-b border-gray-200/80 dark:border-gray-700/80 sticky top-0 z-50 shadow-sm dark:shadow-gray-900/20">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link href="#home" className="-m-1.5 p-1.5">
            <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              Finalsite
            </span>
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-300"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        {/* Desktop navigation */}
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 relative group"
              onClick={() => {
                const element = document.querySelector(item.href)
                element?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-200 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Theme toggle */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <ThemeToggle />
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="fixed inset-0 z-10" />
          <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg px-6 py-6 sm:max-w-sm border-l border-gray-200/80 dark:border-gray-700/80 shadow-2xl">
            <div className="flex items-center justify-between">
              <Link href="#home" className="-m-1.5 p-1.5">
                <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                  Finalsite
                </span>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-gray-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10 dark:divide-gray-700">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-xl px-3 py-3 text-base font-semibold leading-7 text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-all duration-200"
                      onClick={() => {
                        setMobileMenuOpen(false)
                        const element = document.querySelector(item.href)
                        element?.scrollIntoView({ behavior: "smooth" })
                      }}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6">
                  <ThemeToggle />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
