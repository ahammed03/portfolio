'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Boxes, Code2, Database, GitBranch, Layers3, ServerCog, Workflow, Zap } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

const metrics = [
  { value: '2+', label: 'Years Experience' },
  { value: '300M+', label: 'Contact Records' },
  { value: 'Redis', label: 'Streams Workers' },
  { value: 'Stripe', label: 'Billing System' },
]

type FocusArea = {
  label: string
  value: string
  icon: LucideIcon
}

const focusAreas: FocusArea[] = [
  {
    label: 'Backend',
    value: 'FastAPI, high-performance REST APIs, Async task workers',
    icon: ServerCog,
  },
  {
    label: 'Data',
    value: 'PostgreSQL (Citus sharding), Polars, Pandas',
    icon: Database,
  },
  {
    label: 'Systems',
    value: 'Docker, Nginx, GitLab CI/CD, VPS deployments',
    icon: Workflow,
  },
]

type Tech = {
  label: string
  icon: LucideIcon
}

const techStack: Tech[] = [
  { label: 'Python', icon: Code2 },
  { label: 'FastAPI', icon: Zap },
  { label: 'Django', icon: Layers3 },
  { label: 'PostgreSQL', icon: Database },
  { label: 'Citus', icon: Database },
  { label: 'Redis Streams', icon: Workflow },
  { label: 'Elasticsearch', icon: Database },
  { label: 'React', icon: Boxes },
  { label: 'Polars/Pandas', icon: Layers3 },
  { label: 'Playwright', icon: Workflow },
  { label: 'Selenium', icon: Workflow },
  { label: 'Docker', icon: ServerCog },
  { label: 'GitLab CI/CD', icon: GitBranch },
  { label: 'Stripe', icon: Zap },
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
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, scale: 0.97, y: 10 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.2,
    },
  },
}

export default function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden border-b border-zinc-200/80 px-4 py-16 dark:border-zinc-800/80 md:px-8 md:py-24 bg-white dark:bg-zinc-950">
      {/* Faint Cal.com Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]"
      >
        <div className="relative z-10 space-y-6">
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-3.5 py-1.5 text-xs font-semibold text-zinc-800 dark:border-zinc-800 dark:bg-zinc-900/50 dark:text-zinc-200">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Available for product engineering roles
          </motion.div>
          
          <div className="space-y-4">
            <motion.p variants={itemVariants} className="text-xs font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">Ahammed Ali Shaik</motion.p>
            <motion.h1 variants={itemVariants} className="text-4xl font-extrabold leading-[1.1] tracking-tight text-zinc-950 dark:text-white sm:text-5xl md:text-6xl">
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400">Software Engineer</span> building reliable systems for real product load.
            </motion.h1>
            <motion.p variants={itemVariants} className="max-w-2xl text-base leading-8 text-zinc-600 dark:text-zinc-400 md:text-lg">
              I design <span className="font-semibold text-zinc-900 dark:text-zinc-100">distributed backend systems</span>, <span className="font-semibold text-zinc-900 dark:text-zinc-100">data-heavy APIs</span>, and <span className="font-semibold text-zinc-900 dark:text-zinc-100">observability-focused workflows</span> in Python, FastAPI, PostgreSQL, Redis Streams, and React. The work I ship is optimized for scale, correctness, and production visibility.
            </motion.p>
          </div>
          
          <motion.div variants={itemVariants} className="flex flex-wrap gap-3 pt-2">
            <a href="#contact" className="inline-flex h-11 items-center justify-center rounded-lg bg-zinc-950 px-5 text-sm font-semibold text-white shadow-sm hover:bg-zinc-800 hover:scale-[1.02] active:scale-[0.98] dark:bg-zinc-50 dark:text-zinc-950 dark:hover:bg-zinc-200 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-indigo-500 outline-none">
              Book Intro Call
              <ArrowRight className="ml-2 h-4 w-4 animate-pulse" aria-hidden="true" />
            </a>
            <a href="#projects" className="inline-flex h-11 items-center justify-center rounded-lg border border-zinc-200 bg-white px-5 text-sm font-semibold text-zinc-800 shadow-sm hover:bg-zinc-50 hover:scale-[1.02] active:scale-[0.98] dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-indigo-500 outline-none">
              Explore Projects
            </a>
            <a href="https://leetcode.com/u/ahammed03/" target="_blank" rel="noopener noreferrer" aria-label="Visit Ahammed's LeetCode profile (opens in a new tab)" className="inline-flex h-11 items-center justify-center rounded-lg border border-zinc-200 bg-white px-5 text-sm font-semibold text-zinc-800 shadow-sm hover:bg-zinc-50 hover:scale-[1.02] active:scale-[0.98] dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-indigo-500 outline-none">
              LeetCode
            </a>
          </motion.div>
          
          <motion.div variants={itemVariants} className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-4 pt-4">
            {metrics.map((metric) => (
              <div key={metric.label} className="rounded-xl border border-zinc-200 bg-white/70 p-4.5 shadow-sm backdrop-blur-sm dark:border-zinc-800/80 dark:bg-zinc-900/40 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300 group">
                <p className="text-xl font-bold text-zinc-900 dark:text-zinc-50 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">{metric.value}</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">{metric.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div variants={cardVariants} className="relative">
          <div className="relative rounded-xl border border-zinc-200 bg-white p-5 shadow-md dark:border-zinc-800 dark:bg-zinc-900/60 backdrop-blur-sm">
            <div className="flex items-center justify-between border-b border-zinc-200/80 pb-4 mb-4 dark:border-zinc-800/80">
              <p className="text-xs font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">Engineering Focus</p>
              <span className="inline-flex items-center rounded-full bg-zinc-100 px-2 py-0.5 text-3xs font-semibold text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">Active</span>
            </div>
            
            <div className="space-y-3">
              {focusAreas.map((area) => {
                const Icon = area.icon
                return (
                  <div key={area.label} className="rounded-lg border border-zinc-100 bg-zinc-50/50 p-3.5 dark:border-zinc-800/50 dark:bg-zinc-900/20">
                    <div className="flex items-center gap-2">
                      <Icon className="h-4 w-4 text-zinc-400 dark:text-zinc-500" aria-hidden="true" />
                      <p className="text-xs font-bold text-zinc-400 uppercase tracking-wider dark:text-zinc-500">{area.label}</p>
                    </div>
                    <p className="mt-1.5 text-sm font-semibold text-zinc-800 dark:text-zinc-200 leading-normal">{area.value}</p>
                  </div>
                )
              })}
            </div>
            
            <div className="mt-4 rounded-lg border border-zinc-100 bg-zinc-50/50 p-3.5 dark:border-zinc-800/50 dark:bg-zinc-900/20">
              <p className="text-xs font-bold text-zinc-400 uppercase tracking-wider dark:text-zinc-500">Current Focus</p>
              <p className="mt-1.5 text-xs font-medium leading-relaxed text-zinc-500 dark:text-zinc-400">
                Building systems that stay correct under concurrency, expose clear telemetry, and keep data workflows fast at scale.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <TechStack />
    </section>
  )
}

function TechStack() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="relative mx-auto mt-12 flex max-w-7xl flex-wrap items-center justify-center gap-4 border-t border-zinc-200/80 pt-8 dark:border-zinc-800/80 md:justify-start"
    >
      <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">Core Stack</h2>
      <ul className="flex flex-wrap gap-2">
        {techStack.map((tech) => {
          const Icon = tech.icon
          return (
            <li key={tech.label} className="flex h-9 items-center gap-2 rounded-lg border border-zinc-200 bg-white px-3 text-xs font-semibold text-zinc-700 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200">
              <Icon className="h-3.5 w-3.5 text-zinc-400 dark:text-zinc-500" aria-hidden="true" />
              {tech.label}
            </li>
          )
        })}
      </ul>
    </motion.div>
  )
}
