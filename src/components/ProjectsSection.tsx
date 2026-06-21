'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Terminal, Puzzle, Globe, ArrowUpRight } from 'lucide-react'

type Project = {
  title: string
  category: string
  description: string
  highlights: string[]
  link: string
  linkLabel: string
  tags: string[]
  icon: any
}

const projectsData: Project[] = [
  {
    title: 'Kipplo Web Application',
    category: 'Core B2B Platform',
    description: 'The core B2B account intelligence platform designed for high-concurrency and real-time contact enrichment at scale.',
    highlights: [
      'Challenge: PostgreSQL connection exhaustion under high concurrency. Solution: Implemented Citus sharding and custom connection pooling, reducing query latencies under load by 40%.',
      'Processed 1M+ row CSV files using Polars data chunking.',
      'Secured Stripe payments with concurrency locks and idempotency.'
    ],
    link: 'https://app.kipplo.com?utm_source=ahammed.xyz',
    linkLabel: 'Open Platform',
    tags: ['FastAPI', 'PostgreSQL', 'Redis Streams', 'Polars', 'Stripe'],
    icon: Terminal
  },
  {
    title: 'Kipplo Chrome Extension',
    category: 'Browser Utility',
    description: 'React-based browser extension surfacing verified B2B contact intelligence directly on LinkedIn profiles.',
    highlights: [
      'Challenge: LinkedIn profile DOM parsing breaking due to dynamic page updates. Solution: Built resilient mutation observer trees combined with Redux client caching to reduce API overhead.',
      'Grew active customer base to 700+ installs in production.',
      'Integrated asynchronous backend pipelines for rapid search.'
    ],
    link: 'https://chromewebstore.google.com/detail/kipplo-an-ai-powered-inte/mfilcfngbefbaeggcglepgdklgdffeih?utm_source=ahammed.xyz',
    linkLabel: 'Chrome Web Store',
    tags: ['React.js', 'Redux', 'TypeScript', 'Chrome Extension APIs'],
    icon: Puzzle
  },
  {
    title: 'Kipplo Discover Directory',
    category: 'Programmatic SEO Directory',
    description: 'Public-facing B2B directory indexing companies and professionals for search engine optimization.',
    highlights: [
      'Challenge: Protecting public directories against scraping abuses while maintaining fast page speed. Solution: Implemented reverse-proxy caching layers, IP-based rate limiting, and FastAPI validations.',
      'Engineered dynamic pages using Next.js, Payload CMS, and FastAPI.',
      'Optimized page loads and caching using Nginx reverse proxies.'
    ],
    link: 'https://discover.kipplo.com?utm_source=ahammed.xyz',
    linkLabel: 'Open Directory',
    tags: ['Next.js', 'Payload CMS', 'FastAPI', 'Nginx Cache'],
    icon: Globe
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: 'easeOut',
    },
  },
} as const

export default function ProjectsSection() {
  return (
    <section id="projects" className="border-b border-zinc-200/80 px-4 py-20 dark:border-zinc-800/80 md:px-8 bg-zinc-50/30 dark:bg-zinc-950/20">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between border-b border-zinc-200 pb-6 dark:border-zinc-800">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">Projects</p>
            <h2 className="mt-3 text-3xl font-extrabold text-zinc-950 dark:text-white md:text-4xl">Selected Work</h2>
          </div>
          <p className="max-w-xl text-sm font-semibold text-zinc-500 dark:text-zinc-400 md:text-right">
            Core B2B products designed for scale, concurrent data processing, and production deployment.
          </p>
        </div>

        {/* Redesigned Cards Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {projectsData.map((project) => {
            const Icon = project.icon
            return (
              <motion.article 
                key={project.title}
                variants={cardVariants}
                className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-zinc-200 bg-white p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-zinc-300 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/40 dark:hover:border-zinc-700 dark:hover:shadow-zinc-950/50 backdrop-blur-md"
              >
                <div className="space-y-4">
                  {/* Category, Icon & Header */}
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center rounded-full bg-zinc-100 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
                      {project.category}
                    </span>
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-200/80 bg-zinc-50 text-indigo-600 transition-colors group-hover:bg-indigo-50/50 dark:border-zinc-800/80 dark:bg-zinc-950 dark:text-indigo-400 dark:group-hover:bg-indigo-950/30">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-1.5">
                    <h3 className="text-lg font-bold text-zinc-950 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-200 leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-sm font-medium leading-normal text-zinc-600 dark:text-zinc-400">
                      {project.description}
                    </p>
                  </div>

                  {/* Highlights Bullet List */}
                  <ul className="space-y-2 pt-2 border-t border-zinc-100 dark:border-zinc-800/60">
                    {project.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-2 text-xs font-semibold text-zinc-600 dark:text-zinc-400 leading-relaxed">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500/80 dark:bg-indigo-400/80" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Tags & CTA Button */}
                <div className="mt-6 space-y-4 pt-3 border-t border-zinc-100 dark:border-zinc-800/60">
                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tech-tag">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA link */}
                  <div>
                    <a 
                      href={project.link} 
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${project.title} in a new tab`}
                      className="inline-flex h-9 items-center gap-1.5 rounded-lg border border-zinc-200 bg-white px-3.5 text-xs font-bold text-zinc-700 shadow-2xs hover:bg-zinc-50 hover:text-zinc-950 focus-visible:ring-2 focus-visible:ring-indigo-500 outline-none dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-white transition-all duration-200"
                    >
                      <span>{project.linkLabel}</span>
                      <ArrowUpRight className="h-3.5 w-3.5 text-zinc-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 dark:text-zinc-500" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </motion.article>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
