import { ArrowRight, Braces, Boxes, Code2, Database, GitBranch, Layers3, ServerCog, Workflow, Zap } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

const metrics = [
  { value: '2+', label: 'Years experience' },
  { value: '150M+', label: 'Records handled' },
  { value: 'Redis', label: 'Distributed workers' },
  { value: 'OpenTelemetry', label: 'Observability' },
]

type FocusArea = {
  label: string
  value: string
  icon: LucideIcon
}

const focusAreas: FocusArea[] = [
  {
    label: 'Backend',
    value: 'FastAPI, idempotent APIs, background jobs',
    icon: ServerCog,
  },
  {
    label: 'Data',
    value: 'PostgreSQL, BigQuery, Redis Streams',
    icon: Database,
  },
  {
    label: 'Systems',
    value: 'Caching, queues, tracing, deployments',
    icon: Workflow,
  },
]

type Tech = {
  label: string
  icon: LucideIcon
}

const techStack: Tech[] = [
  { label: 'Python', icon: Code2 },
  { label: 'JavaScript', icon: Braces },
  { label: 'Django', icon: Layers3 },
  { label: 'FastAPI', icon: Zap },
  { label: 'Redis', icon: Workflow },
  { label: 'React', icon: Boxes },
  { label: 'PostgreSQL', icon: Database },
  { label: 'BigQuery', icon: Database },
  { label: 'OpenTelemetry', icon: Layers3 },
  { label: 'SigNoz', icon: Layers3 },
  { label: 'Git', icon: GitBranch },
]

export default function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden border-b border-zinc-200/80 px-5 py-16 dark:border-zinc-800/80 md:px-8 md:py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="relative">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/80 px-4 py-2 text-sm font-medium text-zinc-700 shadow-sm backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/80 dark:text-zinc-300">
            <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
            Available for product engineering roles
          </div>
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-zinc-500 dark:text-zinc-500">Ahammed Ali Shaik</p>
            <h1 className="text-5xl font-semibold leading-[1.02] tracking-tight text-zinc-950 dark:text-white md:text-7xl">
              Backend engineer building reliable systems for real product load.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-700 dark:text-zinc-400 md:text-xl">
              I design distributed backend systems, data-heavy APIs, and observability-focused workflows in Python, FastAPI, PostgreSQL, Redis Streams, and React. The work I ship is optimized for scale, correctness, and production visibility.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-zinc-950 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-zinc-950/10 hover:-translate-y-0.5 hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200">
              View Projects
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a href="#contact" className="inline-flex items-center rounded-full border border-zinc-200 bg-white px-6 py-3 text-sm font-semibold text-zinc-900 shadow-sm hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100 dark:hover:bg-zinc-900">
              Contact Me
            </a>
            <a href="https://leetcode.com/u/ahammed03/" className="inline-flex items-center rounded-full border border-zinc-200 bg-white px-6 py-3 text-sm font-semibold text-zinc-900 shadow-sm hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100 dark:hover:bg-zinc-900">
              LeetCode
            </a>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {metrics.map((metric) => (
              <div key={metric.label} className="rounded-3xl border border-zinc-200 bg-white/90 p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-950/80">
                <p className="text-2xl font-semibold text-zinc-950 dark:text-white">{metric.value}</p>
                <p className="mt-2 text-sm font-medium text-zinc-600 dark:text-zinc-500">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-amber-200/40 via-white to-slate-100/60 blur-2xl dark:from-cyan-500/10 dark:via-zinc-900 dark:to-violet-500/10"></div>
          <div className="relative rounded-[2rem] border border-zinc-200 bg-white/90 p-6 shadow-2xl shadow-zinc-950/5 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/90">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-zinc-500 dark:text-zinc-500">Engineering Focus</p>
            <div className="mt-5 space-y-4">
              {focusAreas.map((area) => {
                const Icon = area.icon
                return (
                  <div key={area.label} className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-black/40">
                    <div className="flex items-center gap-2">
                      <Icon className="h-4 w-4 text-zinc-500" aria-hidden="true" />
                      <p className="text-sm font-medium text-zinc-500 dark:text-zinc-500">{area.label}</p>
                    </div>
                    <p className="mt-2 text-lg font-semibold text-zinc-950 dark:text-white">{area.value}</p>
                  </div>
                )
              })}
            </div>
            <div className="mt-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-black/40">
              <p className="text-sm font-medium text-zinc-500 dark:text-zinc-500">Current focus</p>
              <p className="mt-2 text-base leading-7 text-zinc-700 dark:text-zinc-400">
                Building systems that stay correct under concurrency, expose clear telemetry, and keep data workflows fast at scale.
              </p>
            </div>
          </div>
        </div>
      </div>

      <TechStack />
    </section>
  )
}

function TechStack() {
  return (
    <div className="relative mx-auto mt-12 flex max-w-7xl flex-wrap items-center justify-center gap-4 border-t border-zinc-200 pt-8 dark:border-zinc-800 md:justify-start">
      <h2 className="text-lg font-semibold text-zinc-900 dark:text-white">Core Stack</h2>
      <ul className="flex flex-wrap gap-3">
        {techStack.map((tech) => {
          const Icon = tech.icon
          return (
            <li key={tech.label} className="flex h-12 items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 text-sm font-semibold text-zinc-800 shadow-sm dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100">
              <Icon className="h-4 w-4 text-zinc-500" aria-hidden="true" />
              {tech.label}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
