'use client'

import { Moon, Sparkles, Sun } from 'lucide-react'
import { useTheme } from './theme'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()

  return (
    <header className="sticky top-0 z-30 border-b border-zinc-200/80 bg-white/80 px-5 py-4 backdrop-blur-2xl dark:border-zinc-800/80 dark:bg-black/70 md:px-8">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        <a href="#home" className="inline-flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-zinc-200 bg-zinc-950 text-white shadow-sm dark:border-zinc-800 dark:bg-white dark:text-black">
            <Sparkles className="h-4 w-4" aria-hidden="true" />
          </span>
          <span>
            <span className="block text-sm font-medium uppercase tracking-[0.22em] text-zinc-500 dark:text-zinc-500">Portfolio</span>
            <span className="block text-lg font-semibold tracking-tight text-zinc-950 dark:text-white md:text-xl">Ahammed</span>
          </span>
        </a>
        <ul className="hidden items-center gap-2 rounded-full border border-zinc-200 bg-white/80 p-1 text-sm font-medium text-zinc-600 shadow-sm dark:border-zinc-800 dark:bg-zinc-950/70 dark:text-zinc-400 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a className="rounded-full px-4 py-2 transition hover:bg-zinc-950 hover:text-white dark:hover:bg-white dark:hover:text-zinc-950" href={item.href}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-800 shadow-sm hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100 dark:hover:bg-zinc-900"
          type="button"
          onClick={toggleTheme}
          aria-label="Toggle color theme"
        >
          {theme === 'dark' ? <Sun className="h-4 w-4" aria-hidden="true" /> : <Moon className="h-4 w-4" aria-hidden="true" />}
          {theme === 'dark' ? 'Light' : 'Dark'}
        </button>
      </nav>
    </header>
  )
}
