'use client'

import { motion } from 'framer-motion'

type HighlightGroup = {
  title: string
  points: string[]
}

const experiencePillars: HighlightGroup[] = [
  {
    title: 'Core Architecture & Distributed Systems',
    points: [
      'Architected the Reveal System — Kipplo’s core data enrichment engine — enabling real-time, bulk, API, and CSV-based enrichment across a sharded 300M+ record PostgreSQL database.',
      'Designed event-driven background workers leveraging Redis Streams and consumer groups to ensure ordered, fault-tolerant execution of enrichment queues.',
      'Developed high-performance async REST APIs in FastAPI with Redis caching and negative caching, implementing secure authentication and user logins.',
      'Integrated Stripe subscription billing, enforcing strict concurrency locks and idempotency controls to prevent duplicate transactions and ensure billing reliability.'
    ]
  },
  {
    title: 'Data Pipelines & Web Scraping',
    points: [
      'Engineered high-throughput data ingestion pipelines capable of processing 1M+ row CSVs using Polars, and built distributed web scrapers using Playwright with rotating proxy layers.',
      'Engineered a distributed email verification system checking SMTP mailboxes and MX records, configuring SPF/DKIM/DMARC to optimize domain reputation.'
    ]
  },
  {
    title: 'Product Engineering & Operations',
    points: [
      'Built Kipplo’s programmatic SEO Discover pages (discover.kipplo.com) with Next.js, Payload CMS, and FastAPI, integrating strict security validations for public directories.',
      'Developed and shipped Kipplo’s browser extension (700+ installs) and core web dashboard (app.kipplo.com) using React.js with Redux for state management.',
      'Enforced reliability by implementing comprehensive integration and unit testing suites in Pytest, ensuring zero-downtime deployments for critical APIs.',
      'Collaborated closely with product managers and frontend developers to define technical specifications, translate user stories into robust databases, and ship cohesive B2B products.',
      'Instrumented distributed tracing and APM using OpenTelemetry and self-hosted SigNoz, cutting production debugging times and tracking latency bottlenecks.',
      'Configured AWS S3 for secure file storage and AWS Route 53 for domain DNS, deploying 10+ Dockerized services across dedicated Ubuntu VPS instances.'
    ]
  }
]

const skills = [
  'Python (FastAPI/Django)',
  'JavaScript/TypeScript',
  'React.js (Redux)',
  'Next.js (Payload CMS)',
  'PostgreSQL (Citus)',
  'Redis Streams & Cache',
  'Elasticsearch',
  'AWS (S3/EC2/Route53)',
  'Playwright Scrapers',
  'Stripe Integration',
  'Pytest (TDD)',
  'OpenTelemetry (SigNoz)',
  'Email Systems (SMTP)',
  'Docker & GitLab CI/CD',
  'Nginx & Ubuntu VPS'
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: 'easeOut',
    },
  },
}

export default function ExperienceSection() {
  return (
    <section id="experience" className="border-b border-zinc-200/80 px-4 py-20 dark:border-zinc-800/80 md:px-8 bg-white dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between border-b border-zinc-200 pb-6 dark:border-zinc-800"
        >
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">Experience</p>
            <h2 className="mt-3 text-3xl font-extrabold text-zinc-950 dark:text-white md:text-4xl">Kipplo Technologies</h2>
            <p className="mt-1 text-sm font-semibold text-zinc-500 dark:text-zinc-400">Software Engineer — May 2024 to Present</p>
          </div>
          <p className="max-w-xl text-sm font-semibold text-zinc-500 dark:text-zinc-400 md:text-right">
            B2B account intelligence platform with contact and company enrichment across 300M+ contact records.
          </p>
        </motion.div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Left: Core Stack Card with scroll-reveal */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="h-fit rounded-xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/60 backdrop-blur-sm"
          >
            <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">Core Stack</p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {skills.map((skill) => (
                <span key={skill} className="badge-pill shadow-sm">
                  {skill}
                </span>
              ))}
            </div>
            
            <div className="mt-6 rounded-lg border border-zinc-100 bg-zinc-50/50 p-[18px] dark:border-zinc-800/50 dark:bg-zinc-900/20">
              <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">What I Optimize For</p>
              <p className="mt-1.5 text-xs font-semibold leading-relaxed text-zinc-500 dark:text-zinc-400">
                Correctness, throughput, observability, and maintainability across systems that are expected to work under production load.
              </p>
            </div>
          </motion.div>

          {/* Right: Highlights List grouped by pillars */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-4"
          >
            {experiencePillars.map((pillar) => (
              <motion.div 
                key={pillar.title} 
                variants={itemVariants}
                className="group rounded-xl border border-zinc-200 bg-white p-[18px] shadow-sm transition-all duration-300 hover:border-zinc-300 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/60 dark:hover:border-zinc-700 dark:hover:shadow-zinc-950/50"
              >
                <h3 className="text-[11px] font-extrabold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 border-b border-zinc-100 dark:border-zinc-800/80 pb-2 mb-3">
                  {pillar.title}
                </h3>
                <ul className="space-y-3.5 mt-3">
                  {pillar.points.map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500/30 dark:bg-indigo-400/30" />
                      <p className="text-sm font-semibold leading-relaxed text-zinc-700 dark:text-zinc-400">{point}</p>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
