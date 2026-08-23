'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, MapPin, GitBranch, Link2, ServerCog, Database, Workflow, Mail, Copy, Check } from 'lucide-react'
import { TechLogo } from './TechLogos'

const metrics = [
  { value: '2+', label: 'Years Experience', color: 'text-indigo-600 dark:text-indigo-400' },
  { value: '~40%', label: 'Query Latency Cut', color: 'text-indigo-600 dark:text-indigo-400' },
  { value: 'Event-Driven', label: 'Queue Architecture', color: 'text-indigo-600 dark:text-indigo-400' },
  { value: '10+', label: 'Microservices Deployed', color: 'text-indigo-600 dark:text-indigo-400' },
]

// ATS-friendly keywords included deliberately
const coreStack = [
  'Python', 'FastAPI', 'Django', 'REST APIs', 'Async I/O',
  'PostgreSQL', 'Citus Sharding', 'Redis Streams', 'Elasticsearch',
  'Microservices', 'React.js', 'Next.js', 'Cloudflare Hosting', 'Docker',
  'AWS', 'CI/CD', 'System Design', 'Playwright', 'Stripe',
]

const focusAreas = [
  { label: 'Backend & APIs', desc: 'FastAPI · Async I/O · REST APIs · Redis Streams · Elasticsearch', icon: ServerCog },
  { label: 'Data Systems', desc: 'Citus sharding · Polars · Playwright scrapers · AWS S3', icon: Database },
  { label: 'Cloud & DevOps', desc: 'AWS EC2/RDS/Lambda · Docker · GitLab CI/CD · Microservices', icon: Workflow },
]

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 18 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.55, delay, ease: 'easeOut' as const },
  }
}

function CopyEmailButton({ email }: { email: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy: ', err)
    }
  }

  return (
    <button
      onClick={handleCopy}
      type="button"
      className="inline-flex shrink-0 items-center gap-1 rounded-lg border border-zinc-200/80 bg-white px-2.5 py-1 text-xs font-bold text-zinc-700 shadow-2xs transition-colors hover:bg-zinc-50 dark:border-zinc-700/80 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700 focus-visible:ring-2 focus-visible:ring-indigo-500 outline-none"
      aria-label="Copy email address to clipboard"
      title="Copy email address"
    >
      {copied ? (
        <>
          <Check className="h-3.5 w-3.5 text-indigo-500" aria-hidden="true" />
          <span className="text-indigo-600 dark:text-indigo-400">Copied</span>
        </>
      ) : (
        <>
          <Copy className="h-3.5 w-3.5 text-zinc-400" aria-hidden="true" />
          <span>Copy</span>
        </>
      )}
    </button>
  )
}

export default function HeroSection() {
  return (
    <section id="home" className="relative px-4 py-16 md:px-8 md:py-20 bg-zinc-50 dark:bg-zinc-950 overflow-hidden">
      <div className="relative mx-auto max-w-7xl">
        <div className="grid grid-cols-12 gap-3">

          {/* ── Card 1: Hero ───────────────────────────────── */}
          <motion.div
            {...fadeUp(0)}
            className="bento-card relative col-span-12 overflow-hidden p-7 md:col-span-8 md:p-9"
          >

            {/* Availability badge */}
            <div className="mb-5 flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-indigo-500" />
              </span>
              <span className="text-xs font-semibold text-zinc-500 dark:text-zinc-400">
                Open to Backend / Full-Stack roles
              </span>
            </div>

            <p className="mb-2 text-[11px] font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
              Ahammed Ali Shaik · Bengaluru, India
            </p>

            {/* Role-specific headline for ATS + recruiters */}
            <h1 className="mb-2 text-3xl font-extrabold leading-tight text-zinc-950 dark:text-white md:text-4xl lg:text-5xl">
              <span className="text-indigo-600 dark:text-indigo-400">
                Backend / Full-Stack Engineer
              </span>
            </h1>
            <p className="mb-4 text-base font-semibold text-zinc-500 dark:text-zinc-400 md:text-lg">
              Python · React · PostgreSQL · Distributed Systems &amp; Scale
            </p>

            <p className="mb-7 max-w-xl text-sm leading-relaxed text-zinc-500 dark:text-zinc-400 md:text-base">
              I design distributed backend architectures, high-performance REST APIs, and scalable microservices using Python (FastAPI), React, Next.js, and PostgreSQL — optimized for concurrency, Async I/O, and production reliability.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-flex h-10 items-center gap-2 rounded-xl bg-indigo-600 px-5 text-sm font-semibold text-white outline-none transition-colors hover:bg-indigo-500 focus-visible:ring-2 focus-visible:ring-indigo-500"
              >
                Book a Call <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="https://github.com/ahammed03"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Ahammed's GitHub profile (opens in a new tab)"
                className="inline-flex h-10 items-center gap-2 rounded-xl border border-zinc-200 bg-zinc-50 px-5 text-sm font-semibold text-zinc-700 outline-none transition-colors hover:bg-white dark:border-zinc-700 dark:bg-zinc-800/60 dark:text-zinc-200 dark:hover:bg-zinc-800 focus-visible:ring-2 focus-visible:ring-indigo-500"
              >
                <GitBranch className="h-4 w-4" aria-hidden="true" /> GitHub
              </a>
            </div>
          </motion.div>

          {/* ── Card 2: Status / Info ─────────────────────── */}
          <motion.div
            {...fadeUp(0.08)}
            className="bento-card col-span-12 flex flex-col justify-between gap-4 p-6 md:col-span-4"
          >
            <div className="space-y-3">
              <div>
                <p className="bento-label mb-2">Based in</p>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-indigo-500 dark:text-indigo-400" aria-hidden="true" />
                  <p className="text-base font-bold text-zinc-950 dark:text-white">Bengaluru, India</p>
                </div>
              </div>

              <div className="rounded-xl bg-zinc-100/70 p-4 dark:bg-zinc-800/60">
                <p className="bento-label mb-1.5">Current Role</p>
                <p className="text-sm font-bold text-zinc-900 dark:text-white">Software Engineer</p>
                <p className="mt-0.5 text-xs font-semibold text-indigo-500 dark:text-indigo-400">
                  @ Kipplo Technologies
                </p>
                <p className="mt-1 text-[10px] text-zinc-400 dark:text-zinc-500">May 2024 – Present</p>
              </div>

              {/* Direct Email with copy button */}
              <div className="rounded-xl bg-zinc-100/70 p-4 dark:bg-zinc-800/60">
                <p className="bento-label mb-1.5">Direct Email</p>
                <div className="flex items-center justify-between gap-2">
                  <a
                    href="mailto:ahammeddev03@gmail.com"
                    className="flex items-center gap-2 text-sm font-bold text-zinc-900 transition-colors dark:text-white min-w-0"
                    aria-label="Send email to Ahammed"
                  >
                    <Mail className="h-3.5 w-3.5 text-indigo-400 shrink-0" aria-hidden="true" />
                    <span className="truncate">ahammeddev03@gmail.com</span>
                  </a>
                  <CopyEmailButton email="ahammeddev03@gmail.com" />
                </div>
              </div>

              <div className="rounded-xl bg-zinc-100/70 p-4 dark:bg-zinc-800/60">
                <p className="bento-label mb-1.5">Education</p>
                <p className="text-sm font-bold text-zinc-900 dark:text-white">BTech, Mech. Engineering</p>
                <p className="mt-0.5 text-[10px] text-zinc-400 dark:text-zinc-500">MITS · CGPA 8.65 · May 2023</p>
              </div>
            </div>

            <div className="flex gap-2 pt-1">
              <a
                href="https://github.com/ahammed03"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="flex h-9 flex-1 items-center justify-center gap-1.5 rounded-xl border border-zinc-200 text-xs font-semibold text-zinc-600 transition-colors hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-400 dark:hover:bg-zinc-800"
              >
                <GitBranch className="h-3.5 w-3.5" aria-hidden="true" /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/ahammed03/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="flex h-9 flex-1 items-center justify-center gap-1.5 rounded-xl border border-zinc-200 text-xs font-semibold text-zinc-600 transition-colors hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-400 dark:hover:bg-zinc-800"
              >
                <Link2 className="h-3.5 w-3.5" aria-hidden="true" /> LinkedIn
              </a>
            </div>
          </motion.div>

          {/* ── Row 2: Metric Cards ───────────────────────── */}
          {metrics.map((metric, i) => (
            <motion.div
              key={metric.label}
              {...fadeUp(0.14 + i * 0.06)}
              className="bento-card col-span-6 p-5 md:col-span-3"
            >
              <p className={`mb-1 text-lg sm:text-xl md:text-2xl font-extrabold tracking-tight ${metric.color}`}>{metric.value}</p>
              <p className="text-xs font-semibold leading-snug text-zinc-500 dark:text-zinc-400">
                {metric.label}
              </p>
            </motion.div>
          ))}

          {/* ── Row 3: Focus Areas ────────────────────────── */}
          <motion.div
            {...fadeUp(0.34)}
            className="bento-card col-span-12 p-6 md:col-span-5"
          >
            <p className="bento-label mb-4">Engineering Focus</p>
            <div className="space-y-2">
              {focusAreas.map((area) => {
                const Icon = area.icon
                return (
                  <div
                    key={area.label}
                    className="flex items-start gap-3 rounded-xl bg-zinc-100/60 p-3.5 dark:bg-zinc-800/50"
                  >
                    <Icon className="mt-0.5 h-4 w-4 shrink-0 text-indigo-500 dark:text-indigo-400" aria-hidden="true" />
                    <div>
                      <p className="text-xs font-bold text-zinc-900 dark:text-zinc-100">{area.label}</p>
                      <p className="mt-0.5 text-[11px] text-zinc-500 dark:text-zinc-400">{area.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </motion.div>

          {/* ── Row 3: Core Stack (ATS keyword-rich) ─────── */}
          <motion.div
            {...fadeUp(0.38)}
            className="bento-card col-span-12 p-6 md:col-span-7"
          >
            <p className="bento-label mb-4">Core Stack &amp; Skills</p>
            <div className="flex flex-wrap gap-2">
              {coreStack.map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center gap-2 rounded-lg border border-zinc-200/80 bg-zinc-50 px-3 py-1.5 text-xs font-semibold text-zinc-700 dark:border-zinc-700/60 dark:bg-zinc-800/60 dark:text-zinc-300"
                >
                  <TechLogo name={tech} className="h-4 w-4 shrink-0" />
                  <span>{tech}</span>
                </span>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
