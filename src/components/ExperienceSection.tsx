'use client'

import { motion } from 'framer-motion'
import { Building2, CalendarDays } from 'lucide-react'

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
  'Nginx & Ubuntu VPS',
]

// STAR-structured narratives for EM audience
const pillars = [
  {
    title: 'Core Architecture & Distributed Systems',
    accentText: 'text-indigo-600 dark:text-indigo-400',
    accentDot: 'bg-indigo-400/60 dark:bg-indigo-400/50',
    points: [
      {
        star: true,
        label: 'Reveal System — 300M+ Record Enrichment Engine',
        text: 'Challenge: PostgreSQL connection exhaustion and query timeouts at peak concurrency on a 300M+ record dataset. Solution: Migrated to Citus horizontal sharding + PgBouncer connection pooling with tuned worker node affinity. Result: ~40% reduction in p95 query latency under sustained high-concurrency load with zero downtime migration.',
      },
      {
        star: true,
        label: 'Event-Driven Queue Architecture',
        text: 'Challenge: Enrichment jobs were dropping under burst traffic due to a synchronous task model. Solution: Re-architected to Redis Streams with named consumer groups and dead-letter retry logic, ensuring ordered, fault-tolerant execution. Result: Eliminated job loss under peak load; the system now processes bursts with at-least-once delivery guarantees.',
      },
      {
        star: true,
        label: 'Stripe Subscription Billing (Zero Duplicate Transactions)',
        text: 'Challenge: Race conditions during concurrent webhook replays caused duplicate charge attempts. Solution: Implemented Redis-backed distributed locks (per-customer mutex) combined with Postgres-level idempotency keys on every transaction record. Result: Zero duplicate billing events in production across all subscription lifecycle events (creation, renewal, cancellation, refunds).',
      },
      {
        star: false,
        label: null,
        text: 'Developed async FastAPI REST endpoints with negative Redis caching, reducing redundant DB lookups by eliminating repeat cache misses for known-empty queries.',
      },
    ],
  },
  {
    title: 'Data Pipelines & Web Scraping',
    accentText: 'text-violet-600 dark:text-violet-400',
    accentDot: 'bg-violet-400/60 dark:bg-violet-400/50',
    points: [
      {
        star: true,
        label: '1M+ Row CSV Ingestion — OOM Fix',
        text: 'Challenge: Pandas-based CSV processing caused Out-of-Memory (OOM) crashes on large imports (>500MB files), halting the enrichment pipeline. Solution: Replaced Pandas with Polars streaming engine using size-based chunking — reading and processing data in fixed-memory windows rather than loading the entire file. Result: Eliminated OOM crashes entirely; memory footprint remained flat regardless of file size, enabling reliable processing of multi-million row files.',
      },
      {
        star: true,
        label: 'Distributed Web Scraping Infrastructure',
        text: 'Challenge: Anti-bot systems were blocking single-IP scrapers used to feed the data pipeline. Solution: Built distributed Playwright scrapers with rotating proxy pools, headless fingerprint randomisation, and curl_cffi for TLS mimicry, orchestrated via Python multiprocessing for bulk-insert batching. Result: Reliable, large-scale data harvesting into PostgreSQL with significantly reduced block rates.',
      },
      {
        star: false,
        label: null,
        text: 'Engineered a distributed email verification system checking SMTP mailboxes and MX records, with SPF/DKIM/DMARC configuration and IP warm-up schedules to maintain domain sender reputation.',
      },
    ],
  },
  {
    title: 'Product Engineering, Testing & Operations',
    accentText: 'text-pink-600 dark:text-pink-400',
    accentDot: 'bg-pink-400/60 dark:bg-pink-400/50',
    points: [
      {
        star: true,
        label: 'Testing Strategy & Zero-Downtime Deployments',
        text: 'Enforced reliability through comprehensive Pytest integration and unit test suites covering API endpoints, billing flows, and enrichment pipelines. Deployed 10+ Dockerized services via GitLab CI/CD with staged rollouts — ensuring zero-downtime deployments for all critical APIs.',
      },
      {
        star: false,
        label: null,
        text: 'Instrumented distributed tracing and APM using OpenTelemetry + self-hosted SigNoz across all microservices, enabling latency bottleneck identification and cutting mean production debugging time significantly.',
      },
      {
        star: false,
        label: null,
        text: "Built Kipplo's programmatic SEO Discover pages (discover.kipplo.com) with Next.js, Payload CMS, and FastAPI — with reverse-proxy Nginx caching and IP-based rate limiting against scraping abuse.",
      },
      {
        star: false,
        label: null,
        text: 'Shipped and maintained Kipplo Chrome Extension (700+ installs) and core B2B dashboard (app.kipplo.com) using React.js with Redux for complex async state management.',
      },
    ],
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

export default function ExperienceSection() {
  return (
    <section id="experience" className="px-4 py-20 md:px-8 bg-zinc-50 dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl">
        <motion.p {...fadeUp(0)} className="bento-label mb-8 text-center">
          Experience
        </motion.p>

        <div className="grid grid-cols-12 gap-3">

          {/* ── Company Header Card ───────────────────────── */}
          <motion.div
            {...fadeUp(0.05)}
            className="bento-card col-span-12 flex flex-col gap-4 p-6 md:flex-row md:items-center md:justify-between md:p-7"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-indigo-200 bg-indigo-100 dark:border-indigo-800/60 dark:bg-indigo-950/60">
                <Building2 className="h-6 w-6 text-indigo-600 dark:text-indigo-400" aria-hidden="true" />
              </div>
              <div>
                <h2 className="text-xl font-extrabold text-zinc-950 dark:text-white md:text-2xl">
                  Kipplo Technologies
                </h2>
                <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                  Software Engineer — Backend, Full-Stack &amp; Infrastructure
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-2 md:items-end">
              <div className="flex items-center gap-2 rounded-xl bg-zinc-100/80 px-4 py-2.5 dark:bg-zinc-800/60">
                <CalendarDays className="h-4 w-4 text-zinc-400" aria-hidden="true" />
                <span className="text-xs font-bold text-zinc-600 dark:text-zinc-300">
                  May 2024 – Present · Bengaluru, India
                </span>
              </div>
              <p className="max-w-xs text-xs font-semibold text-zinc-400 dark:text-zinc-500 md:text-right">
                B2B account intelligence platform — 300M+ contact records
              </p>
            </div>
          </motion.div>

          {/* ── Core Stack Card ───────────────────────────── */}
          <motion.div
            {...fadeUp(0.1)}
            className="bento-card col-span-12 p-6 md:col-span-4"
          >
            <p className="bento-label mb-4">Core Stack Used</p>
            <div className="flex flex-wrap gap-1.5">
              {skills.map((skill) => (
                <span key={skill} className="badge-pill shadow-sm">{skill}</span>
              ))}
            </div>

            <div className="mt-5 rounded-xl border border-zinc-100 bg-zinc-50/80 p-4 dark:border-zinc-800/60 dark:bg-zinc-800/40">
              <p className="bento-label mb-1.5">Optimisation Priorities</p>
              <p className="text-xs font-semibold leading-relaxed text-zinc-500 dark:text-zinc-400">
                Correctness under concurrency → throughput at scale → observability → maintainability. In that order — because the sequence matters in live systems.
              </p>
            </div>
          </motion.div>

          {/* ── Pillar 1: Core Architecture (STAR) ───────── */}
          <motion.div
            {...fadeUp(0.14)}
            className="bento-card col-span-12 p-6 md:col-span-8"
          >
            <h3 className={`mb-4 text-[11px] font-extrabold uppercase tracking-wider ${pillars[0].accentText}`}>
              {pillars[0].title}
            </h3>
            <ul className="space-y-4">
              {pillars[0].points.map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${pillars[0].accentDot}`} />
                  <div>
                    {point.star && point.label && (
                      <p className="mb-1 text-xs font-extrabold text-zinc-900 dark:text-zinc-100">
                        {point.label}
                      </p>
                    )}
                    <p className="text-sm font-semibold leading-relaxed text-zinc-600 dark:text-zinc-400">
                      {point.text}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* ── Pillar 2: Data Pipelines (STAR) ──────────── */}
          <motion.div
            {...fadeUp(0.18)}
            className="bento-card col-span-12 p-6 md:col-span-6"
          >
            <h3 className={`mb-4 text-[11px] font-extrabold uppercase tracking-wider ${pillars[1].accentText}`}>
              {pillars[1].title}
            </h3>
            <ul className="space-y-4">
              {pillars[1].points.map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${pillars[1].accentDot}`} />
                  <div>
                    {point.star && point.label && (
                      <p className="mb-1 text-xs font-extrabold text-zinc-900 dark:text-zinc-100">
                        {point.label}
                      </p>
                    )}
                    <p className="text-sm font-semibold leading-relaxed text-zinc-600 dark:text-zinc-400">
                      {point.text}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* ── Pillar 3: Product & Testing (STAR) ───────── */}
          <motion.div
            {...fadeUp(0.22)}
            className="bento-card col-span-12 p-6 md:col-span-6"
          >
            <h3 className={`mb-4 text-[11px] font-extrabold uppercase tracking-wider ${pillars[2].accentText}`}>
              {pillars[2].title}
            </h3>
            <ul className="space-y-4">
              {pillars[2].points.map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${pillars[2].accentDot}`} />
                  <div>
                    {point.star && point.label && (
                      <p className="mb-1 text-xs font-extrabold text-zinc-900 dark:text-zinc-100">
                        {point.label}
                      </p>
                    )}
                    <p className="text-sm font-semibold leading-relaxed text-zinc-600 dark:text-zinc-400">
                      {point.text}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
