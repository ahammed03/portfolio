'use client'

import { motion } from 'framer-motion'
import * as Separator from '@radix-ui/react-separator'
import * as Tabs from '@radix-ui/react-tabs'

const skillGroups = [
  {
    title: 'Languages',
    items: ['Python', 'JavaScript', 'TypeScript', 'SQL'],
  },
  {
    title: 'Backend & Databases',
    items: ['FastAPI', 'Django', 'PostgreSQL (Citus)', 'Redis Streams', 'Elasticsearch', 'PgBouncer'],
  },
  {
    title: 'Frontend & CMS',
    items: ['React.js', 'Redux', 'Next.js', 'Payload CMS'],
  },
  {
    title: 'Data & Infrastructure',
    items: ['AWS (S3/EC2/RDS)', 'Polars/Pandas', 'Playwright', 'Docker', 'GitLab CI/CD', 'Nginx/Apache'],
  },
]

const focusPoints = [
  'Distributed systems & event-driven architecture',
  'High-throughput ingestion & web scraping (Playwright)',
  'Database sharding & optimization (Citus, Redis)',
  'Stripe subscription billing workflows',
  'Programmatic SEO & secure directories (Next.js/FastAPI)',
]

export default function AboutSection() {
  return (
    <section id="about" className="border-b border-zinc-200/80 px-4 py-20 dark:border-zinc-800/80 md:px-8 bg-zinc-50/30 dark:bg-zinc-950/20">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_1fr]">
        
        {/* Left Column: text and focus areas with scroll-reveal */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">About Me</p>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-zinc-950 dark:text-white md:text-4xl">
              Building reliable systems that solve business problems and scale under production load.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-zinc-600 dark:text-zinc-400">
            I am Ahammed, a Software Engineer based in Bengaluru with 2+ years of production-scale experience. I believe code is only as good as its production reliability, test coverage, and telemetry. Having worked in a fast-paced startup (Kipplo), I collaborate closely with product managers, designers, and developers to ship features that work correctly under concurrency, remain observable in real-time, and scale with direct business value.
          </p>
          <p className="max-w-2xl text-base leading-8 text-zinc-600 dark:text-zinc-400">
            My work spans building concurrent Stripe billing engines, Citus-sharded PostgreSQL databases, and programmatic SEO directories. I focus on high-throughput data pipelines, test-driven backend reliability, and distributed tracing to ensure operational visibility at scale.
          </p>
          
          <div className="grid gap-3 pt-2 sm:grid-cols-2">
            {focusPoints.map((point, index) => (
              <motion.div 
                key={point} 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="rounded-xl border border-zinc-200 bg-white p-4 text-xs font-semibold text-zinc-700 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/40 dark:text-zinc-300"
              >
                {point}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Column: Tabs card with scroll-reveal */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/60 backdrop-blur-sm"
        >
          <Tabs.Root defaultValue="overview" className="w-full">
            <Tabs.List className="flex gap-1 border-b border-zinc-200 pb-2.5 dark:border-zinc-800">
              <Tabs.Trigger 
                className="rounded-lg px-4 py-2 text-xs font-bold uppercase tracking-wider text-zinc-400 transition-all cursor-pointer hover:text-zinc-900 data-[state=active]:bg-zinc-100 data-[state=active]:text-zinc-900 dark:text-zinc-500 dark:hover:text-zinc-200 dark:data-[state=active]:bg-zinc-800 dark:data-[state=active]:text-zinc-200 focus-visible:ring-2 focus-visible:ring-indigo-500 outline-none" 
                value="overview"
              >
                Overview
              </Tabs.Trigger>
              <Tabs.Trigger 
                className="rounded-lg px-4 py-2 text-xs font-bold uppercase tracking-wider text-zinc-400 transition-all cursor-pointer hover:text-zinc-900 data-[state=active]:bg-zinc-100 data-[state=active]:text-zinc-900 dark:text-zinc-500 dark:hover:text-zinc-200 dark:data-[state=active]:bg-zinc-800 dark:data-[state=active]:text-zinc-200 focus-visible:ring-2 focus-visible:ring-indigo-500 outline-none" 
                value="stack"
              >
                Stack
              </Tabs.Trigger>
              <Tabs.Trigger 
                className="rounded-lg px-4 py-2 text-xs font-bold uppercase tracking-wider text-zinc-400 transition-all cursor-pointer hover:text-zinc-900 data-[state=active]:bg-zinc-100 data-[state=active]:text-zinc-900 dark:text-zinc-500 dark:hover:text-zinc-200 dark:data-[state=active]:bg-zinc-800 dark:data-[state=active]:text-zinc-200 focus-visible:ring-2 focus-visible:ring-indigo-500 outline-none" 
                value="approach"
              >
                Approach
              </Tabs.Trigger>
            </Tabs.List>

            <Tabs.Content value="overview" className="pt-[18px] outline-none">
              <motion.div 
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-3"
              >
                <div className="rounded-lg border border-zinc-100 bg-zinc-50/50 p-4 dark:border-zinc-800/50 dark:bg-zinc-900/20">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">Location</p>
                  <p className="mt-1 text-sm font-semibold text-zinc-800 dark:text-zinc-200">Bengaluru, India</p>
                </div>
                <div className="rounded-lg border border-zinc-100 bg-zinc-50/50 p-4 dark:border-zinc-800/50 dark:bg-zinc-900/20">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">Education</p>
                  <p className="mt-1 text-sm font-semibold text-zinc-800 dark:text-zinc-200 font-sans">BTech, Mechanical Engineering</p>
                  <p className="mt-0.5 text-xs text-zinc-400 dark:text-zinc-500">Madanapalle Institute of Technology & Sciences (CGPA: 8.65)</p>
                </div>
                <div className="rounded-lg border border-zinc-100 bg-zinc-50/50 p-4 dark:border-zinc-800/50 dark:bg-zinc-900/20">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">Coding Profile</p>
                  <a className="mt-1 block text-sm font-semibold text-zinc-800 hover:text-zinc-900 dark:text-zinc-200 dark:hover:text-zinc-50 underline decoration-zinc-200/80 dark:decoration-zinc-800 underline-offset-4 cursor-pointer focus-visible:ring-2 focus-visible:ring-indigo-500 rounded outline-none" href="https://leetcode.com/u/ahammed03/" target="_blank" rel="noopener noreferrer" aria-label="Visit Ahammed's LeetCode profile (opens in a new tab)">
                    leetcode.com/u/ahammed03
                  </a>
                </div>
                <div className="rounded-lg border border-zinc-100 bg-zinc-50/50 p-4 dark:border-zinc-800/50 dark:bg-zinc-900/20">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">Currently Exploring</p>
                  <p className="mt-1 text-sm font-semibold text-zinc-800 dark:text-zinc-200">Rust (for low-latency systems) & AWS Serverless (for scale-to-zero compute)</p>
                </div>
              </motion.div>
            </Tabs.Content>

            <Tabs.Content value="stack" className="pt-[18px] outline-none">
              <motion.div 
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                {skillGroups.map((group, index) => (
                  <div key={group.title}>
                    {index > 0 ? <Separator.Root className="my-4 h-px bg-zinc-100 dark:bg-zinc-800" decorative /> : null}
                    <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">{group.title}</p>
                    <div className="mt-2.5 flex flex-wrap gap-1.5">
                      {group.items.map((item) => (
                        <span key={item} className="badge-pill">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </motion.div>
            </Tabs.Content>

            <Tabs.Content value="approach" className="pt-[18px] outline-none">
              <motion.div 
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-3"
              >
                <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">Working Style</p>
                <ul className="space-y-3.5 text-sm font-semibold text-zinc-600 dark:text-zinc-400">
                  <li className="rounded-lg border border-zinc-100 bg-zinc-50/50 p-4 dark:border-zinc-800/50 dark:bg-zinc-900/20">
                    I prefer clear boundaries, simple APIs, and production decisions backed by measurable signals.
                  </li>
                  <li className="rounded-lg border border-zinc-100 bg-zinc-50/50 p-4 dark:border-zinc-800/50 dark:bg-zinc-900/20">
                    I focus on reliability first, then performance, then polish, because the order matters in live systems.
                  </li>
                  <li className="rounded-lg border border-zinc-100 bg-zinc-50/50 p-4 dark:border-zinc-800/50 dark:bg-zinc-900/20">
                    I like systems with strong observability, because debugging time is part of the product cost.
                  </li>
                </ul>
              </motion.div>
            </Tabs.Content>
          </Tabs.Root>
        </motion.div>
      </div>
    </section>
  )
}
