'use client'

import { motion } from 'framer-motion'
import { MapPin, GraduationCap, Code2, Rocket } from 'lucide-react'
import { TechLogo } from './TechLogos'

const skillGroups = [
  {
    title: 'Languages',
    items: ['Python', 'JavaScript', 'TypeScript', 'SQL'],
  },
  {
    title: 'Backend & DB',
    items: ['FastAPI', 'Django', 'PostgreSQL', 'Citus Sharding', 'Redis Streams', 'Elasticsearch', 'PgBouncer'],
  },
  {
    title: 'Frontend & CMS',
    items: ['React.js', 'Redux', 'Next.js', 'Payload CMS'],
  },
  {
    title: 'Data & Scraping',
    items: ['Polars', 'Pandas', 'Playwright', 'Selenium', 'curl_cffi'],
  },
  {
    title: 'DevOps & Cloud',
    items: ['Cloudflare Hosting', 'AWS (S3/EC2/RDS)', 'Docker', 'GitLab CI/CD', 'Nginx', 'Ubuntu VPS'],
  },
  {
    title: 'Payments & Email',
    items: ['Stripe (Subscriptions)', 'Webhook Idempotency', 'SMTP', 'DKIM/SPF/DMARC'],
  },
]

const focusPoints = [
  'Distributed systems & event-driven architecture',
  'High-throughput ingestion & web scraping (Playwright)',
  'Database sharding & optimization (Citus, Redis)',
  'Stripe subscription billing workflows',
  'Programmatic SEO & secure directories (Next.js/FastAPI)',
]

const infoCards = [
  {
    label: 'Location',
    icon: MapPin,
    color: 'text-indigo-500 dark:text-indigo-400',
    content: (
      <p className="text-sm font-bold text-zinc-900 dark:text-white">Bengaluru, India</p>
    ),
  },
  {
    label: 'Education',
    icon: GraduationCap,
    color: 'text-indigo-500 dark:text-indigo-400',
    content: (
      <div>
        <p className="text-sm font-bold text-zinc-900 dark:text-white">BTech, Mech. Engineering</p>
        <p className="mt-0.5 text-[10px] text-zinc-400 dark:text-zinc-500">MITS · CGPA 8.65 · May 2023</p>
        <p className="mt-2 text-[11px] leading-snug text-zinc-400 dark:text-zinc-500">
          Transitioned into software engineering through deep self-learning and production work at a startup.
        </p>
      </div>
    ),
  },
  {
    label: 'Coding Profile',
    icon: Code2,
    color: 'text-indigo-500 dark:text-indigo-400',
    content: (
      <a
        href="https://leetcode.com/u/ahammed03/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit Ahammed's LeetCode profile (opens in a new tab)"
        className="text-sm font-bold text-zinc-900 underline decoration-zinc-200 underline-offset-4 transition-colors dark:text-white dark:decoration-zinc-700"
      >
        leetcode.com/u/ahammed03
      </a>
    ),
  },
  {
    label: 'Currently Exploring',
    icon: Rocket,
    color: 'text-indigo-500 dark:text-indigo-400',
    content: (
      <p className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">
        Rust for low-latency systems & AWS Serverless for scale-to-zero compute
      </p>
    ),
  },
]

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 16 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-60px' },
    transition: { duration: 0.5, delay, ease: 'easeOut' as const },
  }
}

export default function AboutSection() {
  return (
    <section id="about" className="px-4 py-20 md:px-8 bg-white dark:bg-zinc-900/20">
      <div className="mx-auto max-w-7xl">
        <motion.p {...fadeUp(0)} className="bento-label mb-8 text-center">
          About Me
        </motion.p>

        <div className="grid grid-cols-12 gap-3">

          {/* ── About Text Card ───────────────────────────── */}
          <motion.div
            {...fadeUp(0.05)}
            className="bento-card col-span-12 p-7 md:col-span-8 md:p-9"
          >
            <h2 className="mb-5 text-2xl font-extrabold leading-tight text-zinc-950 dark:text-white md:text-3xl">
              Building reliable systems that solve business problems and scale under production load.
            </h2>
            <p className="mb-4 text-sm leading-8 text-zinc-600 dark:text-zinc-400">
              I'm Ahammed, a Backend / Full-Stack Engineer based in Bengaluru with 2+ years of production-scale experience at Kipplo Technologies — a B2B account intelligence startup. I build systems that are correct under concurrency, observable in real-time, and scale with direct business value.
            </p>
            <p className="mb-4 text-sm leading-8 text-zinc-600 dark:text-zinc-400">
              After graduating with a BTech in Mechanical Engineering (CGPA 8.65, May 2023), I spent a year doing intensive self-directed learning in backend systems, distributed architectures, and system design — building projects, solving DSA on LeetCode, and studying production engineering patterns before joining Kipplo in May 2024.
            </p>
            <p className="mb-6 text-sm leading-8 text-zinc-600 dark:text-zinc-400">
              My work at Kipplo spans concurrent Stripe billing engines, Citus-sharded PostgreSQL databases handling 300M+ records, distributed web scrapers, and programmatic SEO directories. The engineering challenges I've solved are documented as STAR case studies in the Experience section.
            </p>

            <p className="bento-label mb-3">What I Focus On</p>
            <div className="grid gap-2 sm:grid-cols-2">
              {focusPoints.map((point) => (
                <div
                  key={point}
                  className="flex items-start gap-2.5 rounded-xl border border-zinc-100 bg-zinc-50 p-3 dark:border-zinc-800/60 dark:bg-zinc-800/50"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500" />
                  <span className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">{point}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── Quick Info Cards Column ───────────────────── */}
          <div className="col-span-12 flex flex-col gap-3 md:col-span-4">
            {infoCards.map((card, i) => {
              const Icon = card.icon
              return (
                <motion.div
                  key={card.label}
                  {...fadeUp(0.1 + i * 0.06)}
                  className="bento-card p-5"
                >
                  <div className="mb-2 flex items-center gap-2">
                    <Icon className={`h-4 w-4 shrink-0 ${card.color}`} aria-hidden="true" />
                    <p className="bento-label">{card.label}</p>
                  </div>
                  {card.content}
                </motion.div>
              )
            })}
          </div>

          {/* ── Skills Grid Card ──────────────────────────── */}
          <motion.div
            {...fadeUp(0.28)}
            className="bento-card col-span-12 p-6 md:p-7"
          >
            <p className="bento-label mb-5">Technical Skills</p>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {skillGroups.map((group) => (
                <div key={group.title}>
                  <p className="mb-2.5 text-[10px] font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
                    {group.title}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {group.items.map((item) => (
                      <span key={item} className="badge-pill inline-flex items-center gap-1.5">
                        <TechLogo name={item} className="h-3.5 w-3.5 shrink-0" />
                        <span>{item}</span>
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
