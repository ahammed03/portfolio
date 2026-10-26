'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Terminal, Puzzle, Globe, Search, ArrowUpRight, BookOpen } from 'lucide-react'

type Project = {
  slug: string
  title: string
  category: string
  description: string
  highlights: string[]
  link: string
  linkLabel: string
  tags: string[]
  icon: React.ElementType
  accentText: string
  accentBadge: string
}

const projects: Project[] = [
  {
    slug: 'kipplo-b2b-data-tools',
    title: 'Kipplo B2B Data Tools',
    category: 'Full-Stack Suite (Frontend & Backend)',
    description:
      'Suite of free, instant B2B lookup tools for discovering LinkedIn profiles, verified emails, phone numbers, and company SIC/NAICS codes without login.',
    highlights: [
      'Engineered both the responsive Next.js frontend and high-speed FastAPI backend endpoints.',
      'Implemented Redis-backed rate limiting (3 free daily lookups per IP/fingerprint) with anti-abuse protection.',
      'Engineered low-latency Elasticsearch search indices querying across 250M+ profiles, 60M+ companies, and 73M+ phone records.',
    ],
    link: 'https://www.kipplo.com/b2b-data-tools/?utm_source=ahammed.xyz',
    linkLabel: 'Open Data Tools',
    tags: ['Next.js', 'FastAPI', 'Elasticsearch', 'Redis', 'Tailwind CSS'],
    icon: Search,
    accentText: 'text-indigo-600 dark:text-indigo-400',
    accentBadge: 'bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 border-indigo-100 dark:border-indigo-900/60',
  },
  {
    slug: 'kipplo-web-app',
    title: 'Kipplo Web Application',
    category: 'Core B2B Platform',
    description:
      'The core B2B account intelligence platform — real-time contact enrichment at scale with high-concurrency backend systems.',
    highlights: [
      'Citus sharding + connection pooling cut query latencies under heavy load by ~40%.',
      'Processed 1M+ row CSV files using Polars size-based chunked streaming.',
      'Stripe payments secured with concurrency locks and idempotency keys — zero duplicate transactions.',
    ],
    link: 'https://app.kipplo.com?utm_source=ahammed.xyz',
    linkLabel: 'Open Platform',
    tags: ['FastAPI', 'PostgreSQL', 'Redis Streams', 'Polars', 'Stripe'],
    icon: Terminal,
    accentText: 'text-indigo-600 dark:text-indigo-400',
    accentBadge: 'bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 border-indigo-100 dark:border-indigo-900/60',
  },
  {
    slug: 'kipplo-chrome-extension',
    title: 'Kipplo Chrome Extension',
    category: 'Browser Utility',
    description:
      'React-based browser extension surfacing verified B2B contact intelligence directly on LinkedIn profiles.',
    highlights: [
      'Grew to 700+ active installs in production.',
      'Resilient mutation observer trees with Redux caching to reduce API overhead.',
    ],
    link: 'https://chromewebstore.google.com/detail/kipplo-an-ai-powered-inte/mfilcfngbefbaeggcglepgdklgdffeih?utm_source=ahammed.xyz',
    linkLabel: 'Chrome Web Store',
    tags: ['React.js', 'Redux', 'TypeScript', 'Chrome APIs'],
    icon: Puzzle,
    accentText: 'text-indigo-600 dark:text-indigo-400',
    accentBadge: 'bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 border-indigo-100 dark:border-indigo-900/60',
  },
  {
    slug: 'kipplo-discover',
    title: 'Kipplo Discover Directory',
    category: 'Programmatic SEO',
    description:
      'Public-facing B2B directory indexing companies and professionals for search engine visibility.',
    highlights: [
      'Reverse-proxy caching, IP rate limiting, and FastAPI validations against scraping abuse.',
      'Dynamic pages via Next.js, Payload CMS, and FastAPI with Nginx caching.',
    ],
    link: 'https://discover.kipplo.com?utm_source=ahammed.xyz',
    linkLabel: 'Open Directory',
    tags: ['Next.js', 'Payload CMS', 'FastAPI', 'Nginx Cache'],
    icon: Globe,
    accentText: 'text-indigo-600 dark:text-indigo-400',
    accentBadge: 'bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 border-indigo-100 dark:border-indigo-900/60',
  },
]

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 16 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-80px' },
    transition: { duration: 0.5, delay, ease: 'easeOut' as const },
  }
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="px-4 py-20 md:px-8 bg-white dark:bg-zinc-900/20">
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <motion.p {...fadeUp(0)} className="bento-label mb-2">
            Selected Work &amp; Case Studies
          </motion.p>
          <motion.h2 {...fadeUp(0.04)} className="text-2xl md:text-3xl font-extrabold text-zinc-950 dark:text-white">
            Engineering Projects &amp; Deep-Dive Learnings
          </motion.h2>
          <motion.p {...fadeUp(0.08)} className="mt-2 text-xs font-semibold text-zinc-500 dark:text-zinc-400">
            Click any project's Case Study to read problems faced, architectural solutions, trade-offs, and key learnings.
          </motion.p>
        </div>

        <div className="grid grid-cols-12 gap-3">
          {projects.map((project, i) => {
            const Icon = project.icon
            return (
              <motion.article
                key={project.title}
                {...fadeUp(0.05 + i * 0.06)}
                className="bento-card group col-span-12 md:col-span-6 flex flex-col justify-between p-6 md:p-7"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className={`inline-flex items-center rounded-full border px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider ${project.accentBadge}`}>
                      {project.category}
                    </span>
                    <span className={`flex h-9 w-9 items-center justify-center rounded-xl border border-zinc-200 bg-zinc-50 transition-colors dark:border-zinc-700 dark:bg-zinc-800 ${project.accentText}`}>
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </div>

                  <div>
                    <h3 className="mb-2 text-lg font-extrabold text-zinc-950 dark:text-white">
                      {project.title}
                    </h3>
                    <p className="text-xs leading-relaxed text-zinc-600 dark:text-zinc-400 md:text-sm">
                      {project.description}
                    </p>
                  </div>

                  <ul className="space-y-2 border-t border-zinc-100 pt-3 dark:border-zinc-800/60">
                    {project.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-start gap-2.5 text-xs font-semibold leading-relaxed text-zinc-600 dark:text-zinc-400"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500/80" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 space-y-3 border-t border-zinc-100 pt-4 dark:border-zinc-800/60">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tech-tag">{tag}</span>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-2 pt-1">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex h-9 items-center gap-1.5 rounded-xl bg-zinc-900 px-3.5 text-xs font-bold text-white transition-all hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-950 dark:hover:bg-zinc-200 focus-visible:ring-2 focus-visible:ring-indigo-500"
                    >
                      <BookOpen className="h-3.5 w-3.5" /> Read Case Study &amp; Learnings
                    </Link>

                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${project.title} live product`}
                      className="inline-flex h-9 items-center gap-1 rounded-xl border border-zinc-200 bg-white px-3 text-xs font-semibold text-zinc-700 outline-none transition-all hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-800/60 dark:text-zinc-300 dark:hover:bg-zinc-800 focus-visible:ring-2 focus-visible:ring-indigo-500"
                    >
                      Live <ArrowUpRight className="h-3 w-3 text-zinc-400" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
