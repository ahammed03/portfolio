'use client'

import { Code2, Moon, Sun } from 'lucide-react'
import { useTheme } from './theme'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Schedule', href: '#contact' },
]

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()

  return (
    <header className="sticky top-0 z-30 border-b border-zinc-200/60 bg-white/80 px-4 py-3.5 backdrop-blur-md dark:border-zinc-800/60 dark:bg-zinc-950/80 md:px-8">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        <a href="#home" className="inline-flex items-center gap-2.5 group">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-zinc-200 bg-white text-zinc-900 shadow-sm transition-colors group-hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100 dark:group-hover:border-zinc-700">
            <Code2 className="h-4 w-4 text-zinc-700 dark:text-zinc-300" aria-hidden="true" />
          </span>
          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
              ahammed<span className="text-zinc-400">.xyz</span>
            </span>
          </div>
        </a>

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

        <div className="flex items-center gap-3">
          <button
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-200 bg-white text-zinc-800 shadow-sm hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800"
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle color theme"
          >
            {theme === 'dark' ? <Sun className="h-4 w-4" aria-hidden="true" /> : <Moon className="h-4 w-4" aria-hidden="true" />}
          </button>
          
          <a
            href="#contact"
            className="hidden sm:inline-flex h-9 items-center justify-center rounded-lg bg-zinc-900 px-4 text-sm font-semibold text-white shadow-sm hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-950 dark:hover:bg-zinc-200"
          >
            Book Session
          </a>
        </div>
      </nav>
    </header>
  )
}
