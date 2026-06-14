'use client'

import * as Separator from '@radix-ui/react-separator'
import * as Tabs from '@radix-ui/react-tabs'

const skillGroups = [
  {
    title: 'Languages',
    items: ['Python', 'JavaScript', 'TypeScript', 'SQL'],
  },
  {
    title: 'Backend',
    items: ['FastAPI', 'Django', 'Flask', 'Redis Streams'],
  },
  {
    title: 'Data & Infra',
    items: ['PostgreSQL', 'MySQL', 'BigQuery', 'Docker'],
  },
]

const focusPoints = [
  'Distributed and event-driven architectures',
  'High-volume data pipelines and processing',
  'Observability, tracing, and production diagnostics',
  'Reliability, idempotency, and fault-tolerant workflows',
]

export default function AboutSection() {
  return (
    <section id="about" className="border-b border-zinc-200/80 px-5 py-20 dark:border-zinc-800/80 md:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="space-y-4">
          <p className="font-semibold uppercase tracking-[0.22em] text-zinc-500 dark:text-zinc-500">About</p>
          <h2 className="text-3xl font-semibold leading-tight text-zinc-950 dark:text-white md:text-4xl">Focused on backend systems that need to be dependable, observable, and easy to scale.</h2>
          <p className="max-w-2xl leading-8 text-zinc-700 dark:text-zinc-400">
            I am Ahammed, a Software Engineer based in Bengaluru with 2+ years of experience building production systems end to end. My strongest work is in Python, FastAPI, Redis Streams, PostgreSQL, and API design for systems that need to stay correct under real load.
          </p>
          <p className="max-w-2xl leading-8 text-zinc-700 dark:text-zinc-400">
            My recent work includes distributed email verification, large-scale data processing, and observability with OpenTelemetry and SigNoz. I care about idempotency, fault tolerance, data consistency, and practical performance improvements that show up in production.
          </p>
          <div className="grid gap-3 pt-4 sm:grid-cols-2">
            {focusPoints.map((point) => (
              <div key={point} className="rounded-2xl border border-zinc-200 bg-white/80 p-4 text-sm font-medium text-zinc-700 shadow-sm dark:border-zinc-800 dark:bg-zinc-950/80 dark:text-zinc-300">
                {point}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-zinc-200 bg-white/90 p-5 shadow-xl shadow-zinc-950/5 dark:border-zinc-800 dark:bg-zinc-950/90">
          <Tabs.Root defaultValue="overview" className="w-full">
            <Tabs.List className="grid grid-cols-3 gap-2 rounded-2xl bg-zinc-100 p-2 dark:bg-zinc-900">
              <Tabs.Trigger className="rounded-xl px-3 py-2 text-sm font-semibold text-zinc-600 data-[state=active]:bg-white data-[state=active]:text-zinc-950 data-[state=active]:shadow-sm dark:text-zinc-400 dark:data-[state=active]:bg-zinc-950 dark:data-[state=active]:text-white" value="overview">
                Overview
              </Tabs.Trigger>
              <Tabs.Trigger className="rounded-xl px-3 py-2 text-sm font-semibold text-zinc-600 data-[state=active]:bg-white data-[state=active]:text-zinc-950 data-[state=active]:shadow-sm dark:text-zinc-400 dark:data-[state=active]:bg-zinc-950 dark:data-[state=active]:text-white" value="stack">
                Stack
              </Tabs.Trigger>
              <Tabs.Trigger className="rounded-xl px-3 py-2 text-sm font-semibold text-zinc-600 data-[state=active]:bg-white data-[state=active]:text-zinc-950 data-[state=active]:shadow-sm dark:text-zinc-400 dark:data-[state=active]:bg-zinc-950 dark:data-[state=active]:text-white" value="approach">
                Approach
              </Tabs.Trigger>
            </Tabs.List>

            <Tabs.Content value="overview" className="pt-5">
              <div className="space-y-4">
                <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5 dark:border-zinc-800 dark:bg-black/40">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-500">Location</p>
                  <p className="mt-2 text-lg font-semibold text-zinc-950 dark:text-white">Bengaluru, India</p>
                </div>
                <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5 dark:border-zinc-800 dark:bg-black/40">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-500">Education</p>
                  <p className="mt-2 text-lg font-semibold text-zinc-950 dark:text-white">BTech, Mechanical Engineering</p>
                  <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-500">Madanapalle Institute of Technology & Sciences</p>
                </div>
                <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5 dark:border-zinc-800 dark:bg-black/40">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-500">Coding Profile</p>
                  <a className="mt-2 block break-words text-lg font-semibold text-zinc-950 hover:text-zinc-600 dark:text-white dark:hover:text-zinc-400" href="https://leetcode.com/u/ahammed03/">
                    leetcode.com/u/ahammed03
                  </a>
                </div>
              </div>
            </Tabs.Content>

            <Tabs.Content value="stack" className="pt-5">
              <div className="space-y-5">
                {skillGroups.map((group, index) => (
                  <div key={group.title}>
                    {index > 0 ? <Separator.Root className="my-5 h-px bg-zinc-200 dark:bg-zinc-800" decorative /> : null}
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-500">{group.title}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <span key={item} className="rounded-full border border-zinc-200 bg-white px-3 py-2 text-sm font-medium text-zinc-700 shadow-sm dark:border-zinc-800 dark:bg-black/40 dark:text-zinc-300">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Tabs.Content>

            <Tabs.Content value="approach" className="pt-5">
              <div className="space-y-3">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-500">Working style</p>
                <ul className="space-y-3 text-zinc-700 dark:text-zinc-400">
                  <li className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-black/40">I prefer clear boundaries, simple APIs, and production decisions backed by measurable signals.</li>
                  <li className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-black/40">I focus on reliability first, then performance, then polish, because the order matters in live systems.</li>
                  <li className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-black/40">I like systems with strong observability, because debugging time is part of the product cost.</li>
                </ul>
              </div>
            </Tabs.Content>
          </Tabs.Root>
        </div>
      </div>
    </section>
  )
}
