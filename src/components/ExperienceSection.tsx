'use client'

import { motion } from 'framer-motion'

const highlights = [
  'Architected the Reveal System — Kipplo’s core data enrichment engine — enabling real-time, bulk, API, and CSV-based enrichment across a 300M+ record Citus-sharded PostgreSQL database.',
  'Engineered high-throughput data ingestion pipelines capable of processing 1M+ row CSVs with size-based chunking using Polars and Pandas, reducing memory overhead and failure rate.',
  'Designed event-driven async task workers leveraging Redis Streams and consumer groups for ordered, fault-tolerant execution of enrichment jobs across distributed workers.',
  'Developed high-performance async REST APIs in FastAPI with Redis caching and negative caching, cutting redundant database queries and improving response reliability.',
  'Integrated Stripe subscription billing end-to-end including webhook processing, transactional workflows, and failure recovery — ensuring zero data loss across all payment events.',
  'Automated email pattern discovery and SMTP delivery infrastructure with SPF, DKIM, DMARC, warm-up scheduling, and provider-level limits to maximize deliverability.',
  'Shipped Kipplo’s React Chrome Extension with 700+ installs, enabling sales teams to surface verified B2B contact intelligence directly from LinkedIn profiles.',
  'Built large-scale web scraping pipelines using Selenium in headless mode with proxy rotation, processing data with Pandas and bulk-inserting records via multiprocessing.',
  'Streamlined production deployments across 10+ services on VPS and bare metal servers using Docker, GitLab CI/CD, Nginx, and Apache, maintaining consistent uptime.'
]

const skills = [
  'Python',
  'FastAPI',
  'PostgreSQL',
  'Citus',
  'Redis Streams',
  'Elasticsearch',
  'Polars/Pandas',
  'Stripe Payments',
  'React',
  'Chrome Extensions',
  'Docker',
  'GitLab CI/CD',
  'Nginx/Apache',
  'Selenium',
  'Email Systems (SPF/DKIM)'
]

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
            <p className="text-3xs font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">Core Stack</p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {skills.map((skill) => (
                <span key={skill} className="rounded-md border border-zinc-200 bg-zinc-50 px-2.5 py-1 text-xs font-semibold text-zinc-700 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/40 dark:text-zinc-300">
                  {skill}
                </span>
              ))}
            </div>
            
            <div className="mt-6 rounded-lg border border-zinc-100 bg-zinc-50/50 p-4.5 dark:border-zinc-800/50 dark:bg-zinc-900/20">
              <p className="text-3xs font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">What I Optimize For</p>
              <p className="mt-1.5 text-xs font-semibold leading-relaxed text-zinc-500 dark:text-zinc-400">
                Correctness, throughput, observability, and maintainability across systems that are expected to work under production load.
              </p>
            </div>
          </motion.div>

          {/* Right: Highlights List with staggered entry on scroll */}
          <div className="space-y-3">
            {highlights.map((highlight, index) => (
              <motion.div 
                key={highlight} 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group rounded-xl border border-zinc-200 bg-white p-4.5 shadow-sm transition-colors hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900/60 dark:hover:border-zinc-700"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-zinc-200 bg-zinc-50 text-2xs font-extrabold text-zinc-450 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-500">
                    0{index + 1}
                  </div>
                  <p className="text-sm font-semibold leading-relaxed text-zinc-700 dark:text-zinc-400">{highlight}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
