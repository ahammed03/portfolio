'use client'

import { motion } from 'framer-motion'
import { Terminal, Puzzle, Globe, ArrowUpRight } from 'lucide-react'

type Project = {
  title: string
  category: string
  description: string
  highlights: string[]
  link: string
  linkLabel: string
  tags: string[]
  icon: React.ElementType
  accentText: string
  accentBg: string
  accentBadge: string
}

const projects: Project[] = [
  {
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
    accentBg: 'bg-indigo-50 dark:bg-indigo-950/40',
    accentBadge: 'bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 border-indigo-100 dark:border-indigo-900/60',
  },
  {
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
    accentText: 'text-violet-600 dark:text-violet-400',
    accentBg: 'bg-violet-50 dark:bg-violet-950/40',
    accentBadge: 'bg-violet-50 dark:bg-violet-950/50 text-violet-600 dark:text-violet-400 border-violet-100 dark:border-violet-900/60',
  },
  {
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
    accentText: 'text-pink-600 dark:text-pink-400',
    accentBg: 'bg-pink-50 dark:bg-pink-950/40',
    accentBadge: 'bg-pink-50 dark:bg-pink-950/50 text-pink-600 dark:text-pink-400 border-pink-100 dark:border-pink-900/60',
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
  const featured = projects[0]
  const rest = projects.slice(1)

  return (
    <section id="projects" className="px-4 py-20 md:px-8 bg-white dark:bg-zinc-900/20">
      <div className="mx-auto max-w-7xl">
        <motion.p {...fadeUp(0)} className="bento-label mb-8 text-center">
          Selected Work
        </motion.p>

        <div className="grid grid-cols-12 gap-3">

          {/* ── Featured Project ──────────────────────────── */}
          <motion.div
            {...fadeUp(0.05)}
            className="bento-card group col-span-12 flex flex-col justify-between p-6 md:col-span-7 md:p-8"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className={`inline-flex items-center rounded-full border px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider ${featured.accentBadge}`}>
                  {featured.category}
                </span>
                <span className={`flex h-9 w-9 items-center justify-center rounded-xl border border-zinc-200 bg-zinc-50 transition-colors dark:border-zinc-700 dark:bg-zinc-800 ${featured.accentText}`}>
                  <featured.icon className="h-4 w-4" aria-hidden="true" />
                </span>
              </div>

              <div>
                <h3 className={`mb-2 text-xl font-extrabold text-zinc-950 transition-colors dark:text-white group-hover:${featured.accentText.split(' ')[0]}`}>
                  {featured.title}
                </h3>
                <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {featured.description}
                </p>
              </div>

              <ul className="space-y-2 border-t border-zinc-100 pt-3 dark:border-zinc-800/60">
                {featured.highlights.map((h) => (
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
                {featured.tags.map((tag) => (
                  <span key={tag} className="tech-tag">{tag}</span>
                ))}
              </div>
              <a
                href={featured.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${featured.title} in a new tab`}
                className="inline-flex h-9 items-center gap-1.5 rounded-xl border border-zinc-200 bg-white px-4 text-xs font-bold text-zinc-700 outline-none transition-all hover:bg-zinc-50 hover:text-zinc-950 dark:border-zinc-700 dark:bg-zinc-800/60 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-white focus-visible:ring-2 focus-visible:ring-indigo-500"
              >
                {featured.linkLabel} <ArrowUpRight className="h-3.5 w-3.5 text-zinc-400" aria-hidden="true" />
              </a>
            </div>
          </motion.div>

          {/* ── Rest of Projects ──────────────────────────── */}
          <div className="col-span-12 flex flex-col gap-3 md:col-span-5">
            {rest.map((project, i) => {
              const Icon = project.icon
              return (
                <motion.article
                  key={project.title}
                  {...fadeUp(0.1 + i * 0.08)}
                  className="bento-card group flex flex-1 flex-col justify-between p-6"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className={`inline-flex items-center rounded-full border px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider ${project.accentBadge}`}>
                        {project.category}
                      </span>
                      <span className={`flex h-8 w-8 items-center justify-center rounded-xl border border-zinc-200 bg-zinc-50 transition-colors dark:border-zinc-700 dark:bg-zinc-800 ${project.accentText}`}>
                        <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                      </span>
                    </div>

                    <div>
                      <h3 className={`mb-1.5 text-base font-extrabold text-zinc-950 transition-colors dark:text-white group-hover:${project.accentText.split(' ')[0]}`}>
                        {project.title}
                      </h3>
                      <p className="text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
                        {project.description}
                      </p>
                    </div>

                    <ul className="space-y-1.5 border-t border-zinc-100 pt-2 dark:border-zinc-800/60">
                      {project.highlights.map((h) => (
                        <li
                          key={h}
                          className="flex items-start gap-2 text-xs font-semibold leading-relaxed text-zinc-600 dark:text-zinc-400"
                        >
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-zinc-400 dark:bg-zinc-600" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-4 space-y-2.5 border-t border-zinc-100 pt-3 dark:border-zinc-800/60">
                    <div className="flex flex-wrap gap-1">
                      {project.tags.map((tag) => (
                        <span key={tag} className="tech-tag">{tag}</span>
                      ))}
                    </div>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${project.title} in a new tab`}
                      className="inline-flex h-8 items-center gap-1.5 rounded-xl border border-zinc-200 bg-white px-3.5 text-xs font-bold text-zinc-700 outline-none transition-all hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-800/60 dark:text-zinc-300 dark:hover:bg-zinc-800 focus-visible:ring-2 focus-visible:ring-indigo-500"
                    >
                      {project.linkLabel} <ArrowUpRight className="h-3 w-3 text-zinc-400" aria-hidden="true" />
                    </a>
                  </div>
                </motion.article>
              )
            })}
          </div>

        </div>
      </div>
    </section>
  )
}
