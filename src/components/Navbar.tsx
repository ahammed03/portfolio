'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Code2, Moon, Sun, Menu, X, GitBranch, ChevronDown, BookOpen, Layers, Terminal, Search, Puzzle, Globe, Database, Workflow, Table, ShieldCheck } from 'lucide-react'
import { useTheme } from './theme'
import { motion, AnimatePresence } from 'framer-motion'

const projectItems = [
  { label: 'Kipplo B2B Data Tools', desc: 'Full-stack Next.js, FastAPI, Elasticsearch & Redis', href: '/projects/kipplo-b2b-data-tools', icon: Search },
  { label: 'Kipplo Web Application', desc: 'Citus sharded DB, 1M+ CSV streaming & Stripe idempotency', href: '/projects/kipplo-web-app', icon: Terminal },
  { label: 'Kipplo Chrome Extension', desc: 'Shadow DOM injection, Redux state & 700+ installs', href: '/projects/kipplo-chrome-extension', icon: Puzzle },
  { label: 'Kipplo Discover Directory', desc: 'Programmatic SEO, Nginx stale-while-revalidate microcache', href: '/projects/kipplo-discover', icon: Globe },
]

const learningItems = [
  { label: 'Python & FastAPI', desc: 'Async I/O, event loops & Pydantic schemas', href: '/learnings/python-fastapi', icon: Terminal },
  { label: 'PostgreSQL & Citus Sharding', desc: 'Citus horizontal sharding & PgBouncer pooling', href: '/learnings/postgresql-citus', icon: Database },
  { label: 'Redis Streams & Caching', desc: 'Consumer groups, pub/sub & Redlock mutexes', href: '/learnings/redis-streams', icon: Workflow },
  { label: 'Polars Streaming Engine', desc: 'Zero-copy Arrow memory & lazy chunking', href: '/learnings/polars-data', icon: Table },
  { label: 'Elasticsearch Search', desc: 'Inverted document indices & sub-100ms queries', href: '/learnings/elasticsearch', icon: Search },
  { label: 'Docker & DevOps', desc: 'Multi-stage builds, Ubuntu VPS & GitLab CI/CD', href: '/learnings/docker-devops', icon: ShieldCheck },
  { label: 'React.js & Redux Architecture', desc: 'Virtual DOM reconciliation, Fiber engine & Redux Toolkit', href: '/learnings/react-js', icon: Code2 },
  { label: 'Next.js & App Router Systems', desc: 'SSG, ISR, SSR, Server Components & Cloudflare CDN', href: '/learnings/nextjs', icon: Layers },
]

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<'projects' | 'learnings' | null>(null)
  const [mobileSection, setMobileSection] = useState<'projects' | 'learnings' | null>(null)

  const toggleMenu = () => setIsOpen((prev) => !prev)
  const closeMenu = () => {
    setIsOpen(false)
    setActiveDropdown(null)
    setMobileSection(null)
  }

  return (
    <header className="sticky top-0 z-40 border-b border-zinc-200/60 bg-white/80 px-4 py-3.5 backdrop-blur-md dark:border-zinc-800/60 dark:bg-zinc-950/80 md:px-8">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4" aria-label="Main navigation">
        {/* Logo / Brand */}
        <Link href="/" className="inline-flex items-center gap-2.5 group" onClick={closeMenu}>
          <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-zinc-200 bg-white text-zinc-900 shadow-xs transition-colors group-hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100 dark:group-hover:border-zinc-700">
            <Code2 className="h-4 w-4 text-zinc-700 dark:text-zinc-300" aria-hidden="true" />
          </span>
          <div className="flex flex-col">
            <span className="text-sm font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              ahammed<span className="text-indigo-500">.xyz</span>
            </span>
          </div>
        </Link>

        {/* Desktop Menu with Categorized Dropdowns */}
        <ul className="hidden items-center gap-1 rounded-xl border border-zinc-200/80 bg-zinc-50/50 p-1 text-xs font-bold text-zinc-600 shadow-xs dark:border-zinc-800/80 dark:bg-zinc-900/50 dark:text-zinc-400 md:flex">
          <li>
            <Link
              href="/#home"
              className="rounded-lg px-3 py-1.5 transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/#about"
              className="rounded-lg px-3 py-1.5 transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/#experience"
              className="rounded-lg px-3 py-1.5 transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800"
            >
              Experience
            </Link>
          </li>

          {/* Categorized Dropdown: Projects */}
          <li
            className="relative"
            onMouseEnter={() => setActiveDropdown('projects')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <Link
              href="/#projects"
              className="inline-flex items-center gap-1 rounded-lg px-3 py-1.5 transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800"
            >
              <span>Projects</span>
              <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${activeDropdown === 'projects' ? 'rotate-180' : ''}`} />
            </Link>

            <AnimatePresence>
              {activeDropdown === 'projects' && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.18 }}
                  className="absolute left-0 top-full pt-2 w-80 z-50"
                >
                  <div className="rounded-2xl border border-zinc-200 bg-white p-3 shadow-xl dark:border-zinc-800 dark:bg-zinc-900">
                    <p className="px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-widest text-zinc-400">Case Studies</p>
                    <div className="space-y-1">
                      {projectItems.map((item) => {
                        const Icon = item.icon
                        return (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={closeMenu}
                            className="flex items-start gap-3 rounded-xl p-2.5 transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-800/60"
                          >
                            <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600 dark:bg-indigo-950/60 dark:text-indigo-400">
                              <Icon className="h-3.5 w-3.5" />
                            </span>
                            <div>
                              <p className="text-xs font-bold text-zinc-900 dark:text-zinc-100">{item.label}</p>
                              <p className="text-[11px] text-zinc-500 dark:text-zinc-400 line-clamp-1">{item.desc}</p>
                            </div>
                          </Link>
                        )
                      })}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </li>

          {/* Categorized Dropdown: Learnings */}
          <li
            className="relative"
            onMouseEnter={() => setActiveDropdown('learnings')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <Link
              href="/learnings"
              className="inline-flex items-center gap-1 rounded-lg px-3 py-1.5 transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800"
            >
              <span>Learnings</span>
              <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${activeDropdown === 'learnings' ? 'rotate-180' : ''}`} />
            </Link>

            <AnimatePresence>
              {activeDropdown === 'learnings' && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.18 }}
                  className="absolute left-0 top-full pt-2 w-96 z-50"
                >
                  <div className="rounded-2xl border border-zinc-200 bg-white p-3 shadow-xl dark:border-zinc-800 dark:bg-zinc-900">
                    <div className="flex items-center justify-between px-3 py-1.5">
                      <p className="text-[10px] font-extrabold uppercase tracking-widest text-zinc-400">Tech Masterclass Hub</p>
                      <Link href="/learnings" onClick={closeMenu} className="text-[11px] font-bold text-indigo-600 dark:text-indigo-400 hover:underline">
                        View Hub →
                      </Link>
                    </div>
                    <div className="grid grid-cols-1 gap-1">
                      {learningItems.map((item) => {
                        const Icon = item.icon
                        return (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={closeMenu}
                            className="flex items-start gap-3 rounded-xl p-2 transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-800/60"
                          >
                            <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600 dark:bg-indigo-950/60 dark:text-indigo-400">
                              <Icon className="h-3.5 w-3.5" />
                            </span>
                            <div>
                              <p className="text-xs font-bold text-zinc-900 dark:text-zinc-100">{item.label}</p>
                              <p className="text-[10px] text-zinc-500 dark:text-zinc-400 line-clamp-1">{item.desc}</p>
                            </div>
                          </Link>
                        )
                      })}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </li>

          <li>
            <Link
              href="/#contact"
              className="rounded-lg px-3 py-1.5 transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800"
            >
              Schedule
            </Link>
          </li>
        </ul>

        {/* Action Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* GitHub Link */}
          <a
            href="https://github.com/ahammed03"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Ahammed's GitHub profile"
            className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-zinc-200 bg-white text-zinc-700 shadow-xs hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 focus-visible:ring-2 focus-visible:ring-indigo-500 outline-none transition-colors"
          >
            <GitBranch className="h-4 w-4" aria-hidden="true" />
          </a>

          {/* Theme Switcher */}
          <button
            className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-zinc-200 bg-white text-zinc-800 shadow-xs hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800 focus-visible:ring-2 focus-visible:ring-indigo-500 outline-none"
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle color theme"
          >
            {theme === 'dark' ? <Sun className="h-4 w-4" aria-hidden="true" /> : <Moon className="h-4 w-4" aria-hidden="true" />}
          </button>

          {/* Desktop Schedule Button */}
          <Link
            href="/#contact"
            className="hidden sm:inline-flex h-9 items-center justify-center rounded-xl bg-indigo-600 px-4 text-xs font-bold text-white shadow-xs hover:bg-indigo-500 transition-colors focus-visible:ring-2 focus-visible:ring-indigo-500 outline-none"
          >
            Book Session
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={toggleMenu}
            className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-zinc-200 bg-white text-zinc-800 shadow-xs hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800 md:hidden focus-visible:ring-2 focus-visible:ring-indigo-500 outline-none"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
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
            <div className="flex flex-col gap-1 border-t border-zinc-200/60 mt-3 pt-3 dark:border-zinc-800/60">
              <Link href="/#home" className="block rounded-lg px-4 py-2 text-xs font-bold text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800" onClick={closeMenu}>
                Home
              </Link>
              <Link href="/#about" className="block rounded-lg px-4 py-2 text-xs font-bold text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800" onClick={closeMenu}>
                About
              </Link>
              <Link href="/#experience" className="block rounded-lg px-4 py-2 text-xs font-bold text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800" onClick={closeMenu}>
                Experience
              </Link>

              {/* Mobile Projects Collapsible Section */}
              <div className="border-t border-b border-zinc-100 py-2 dark:border-zinc-900 my-1">
                <button
                  type="button"
                  onClick={() => setMobileSection(mobileSection === 'projects' ? null : 'projects')}
                  className="flex w-full items-center justify-between px-4 py-1 text-xs font-extrabold uppercase tracking-wider text-indigo-600 dark:text-indigo-400"
                >
                  <span>Project Case Studies</span>
                  <ChevronDown className={`h-3.5 w-3.5 transition-transform ${mobileSection === 'projects' ? 'rotate-180' : ''}`} />
                </button>
                {mobileSection === 'projects' && (
                  <div className="pl-4 mt-2 space-y-1 border-l-2 border-indigo-500/20 ml-4">
                    {projectItems.map((p) => (
                      <Link key={p.href} href={p.href} onClick={closeMenu} className="block py-1.5 text-xs font-semibold text-zinc-600 dark:text-zinc-400">
                        {p.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Learnings Collapsible Section */}
              <div className="border-b border-zinc-100 pb-2 dark:border-zinc-900 mb-1">
                <button
                  type="button"
                  onClick={() => setMobileSection(mobileSection === 'learnings' ? null : 'learnings')}
                  className="flex w-full items-center justify-between px-4 py-1 text-xs font-extrabold uppercase tracking-wider text-indigo-600 dark:text-indigo-400"
                >
                  <span>Learnings &amp; Tech Stack</span>
                  <ChevronDown className={`h-3.5 w-3.5 transition-transform ${mobileSection === 'learnings' ? 'rotate-180' : ''}`} />
                </button>
                {mobileSection === 'learnings' && (
                  <div className="pl-4 mt-2 space-y-1 border-l-2 border-indigo-500/20 ml-4">
                    <Link href="/learnings" onClick={closeMenu} className="block py-1 text-xs font-bold text-indigo-600 dark:text-indigo-400">
                      Explore All Learnings Hub →
                    </Link>
                    {learningItems.map((l) => (
                      <Link key={l.href} href={l.href} onClick={closeMenu} className="block py-1.5 text-xs font-semibold text-zinc-600 dark:text-zinc-400">
                        {l.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link href="/#contact" className="block rounded-lg px-4 py-2 text-xs font-bold text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800" onClick={closeMenu}>
                Schedule Call
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
