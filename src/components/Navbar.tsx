'use client'

import { useState } from 'react'
import { Code2, Moon, Sun, Menu, X } from 'lucide-react'
import { useTheme } from './theme'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Schedule', href: '#contact' },
]

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen((prev) => !prev)
  const closeMenu = () => setIsOpen(false)

  return (
    <header className="sticky top-0 z-30 border-b border-zinc-200/60 bg-white/80 px-4 py-3.5 backdrop-blur-md dark:border-zinc-800/60 dark:bg-zinc-950/80 md:px-8">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4" aria-label="Main navigation">
        {/* Logo / Brand */}
        <a href="#home" className="inline-flex items-center gap-2.5 group" onClick={closeMenu}>
          <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-zinc-200 bg-white text-zinc-900 shadow-sm transition-colors group-hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100 dark:group-hover:border-zinc-700">
            <Code2 className="h-4 w-4 text-zinc-700 dark:text-zinc-300" aria-hidden="true" />
          </span>
          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
              ahammed<span className="text-zinc-400">.xyz</span>
            </span>
          </div>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden items-center gap-1.5 rounded-lg border border-zinc-200/80 bg-zinc-50/50 p-1 text-sm font-medium text-zinc-600 shadow-sm dark:border-zinc-800/80 dark:bg-zinc-900/50 dark:text-zinc-400 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a 
                className="rounded-md px-3.5 py-1.5 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:hover:bg-zinc-800 dark:hover:text-zinc-50" 
                href={item.href}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Action Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Theme Switcher */}
          <button
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-200 bg-white text-zinc-800 shadow-sm hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800 focus-visible:ring-2 focus-visible:ring-indigo-500 outline-none"
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle color theme"
          >
            {theme === 'dark' ? <Sun className="h-4 w-4" aria-hidden="true" /> : <Moon className="h-4 w-4" aria-hidden="true" />}
          </button>
          
          {/* Desktop Schedule Button */}
          <a
            href="#contact"
            className="hidden sm:inline-flex h-9 items-center justify-center rounded-lg bg-zinc-900 px-4 text-sm font-semibold text-white shadow-sm hover:bg-zinc-800 transition-colors focus-visible:ring-2 focus-visible:ring-indigo-500 outline-none dark:bg-zinc-100 dark:text-zinc-950 dark:hover:bg-zinc-200"
          >
            Book Session
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={toggleMenu}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-200 bg-white text-zinc-800 shadow-sm hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800 md:hidden focus-visible:ring-2 focus-visible:ring-indigo-500 outline-none"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="h-4 w-4" aria-hidden="true" /> : <Menu className="h-4 w-4" aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden md:hidden"
          >
            <ul className="flex flex-col gap-1 border-t border-zinc-200/60 mt-3 pt-3 dark:border-zinc-800/60">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a 
                    className="block rounded-lg px-4 py-2.5 text-sm font-medium text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-50"
                    href={item.href}
                    onClick={closeMenu}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="mt-2 pt-2 border-t border-zinc-100 dark:border-zinc-900 sm:hidden">
                <a
                  href="#contact"
                  onClick={closeMenu}
                  className="flex h-10 w-full items-center justify-center rounded-lg bg-zinc-900 text-sm font-semibold text-white shadow-sm hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-950 dark:hover:bg-zinc-200"
                >
                  Book Session
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
