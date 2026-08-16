import { Metadata } from 'next'
import Link from 'next/link'
import { learningsData } from '@/data/learningsData'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { BookOpen, ArrowRight, Lightbulb, Server, Database, Workflow, Table, Search, ShieldCheck, Code2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Engineering Learnings, Resources & Tech Deep Dives | Ahammed Ali Shaik',
  description:
    'Detailed engineering learnings, mental models, curated learning resources, and real production lessons across Python, FastAPI, PostgreSQL, Citus, Redis Streams, Polars, Docker, and React.',
}

const iconMap: Record<string, React.ElementType> = {
  ServerCog: Server,
  Database: Database,
  Workflow: Workflow,
  Table: Table,
  Search: Search,
  ShieldCheck: ShieldCheck,
  Code2: Code2,
}

export default function LearningsHubPage() {
  const learnings = Object.values(learningsData)

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 flex flex-col">
      <Navbar />

      <main className="flex-1 px-4 py-14 md:px-8 max-w-6xl mx-auto w-full">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-indigo-600 dark:border-indigo-900/60 dark:bg-indigo-950/50 dark:text-indigo-400 mb-4">
            <BookOpen className="h-3.5 w-3.5" /> Engineering Knowledge Base
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-zinc-950 dark:text-white mb-4">
            Learning Journey, Resources &amp; Mental Models
          </h1>
          <p className="text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
            As a self-directed engineer who transitioned from Mechanical Engineering to Software Engineering, I believe in deep mental models and continuous learning. Here is how I mastered each core technology, the resources I recommend, and the production lessons I learned.
          </p>
        </div>

        {/* Grid of Tech Stack Deep Dives */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {learnings.map((tech) => {
            const Icon = iconMap[tech.iconName] || BookOpen

            return (
              <Link
                key={tech.slug}
                href={`/learnings/${tech.slug}`}
                className="bento-card group p-6 flex flex-col justify-between hover:border-indigo-500/50 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                      {tech.category}
                    </span>
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-zinc-200 bg-zinc-50 text-indigo-600 dark:border-zinc-700 dark:bg-zinc-800 dark:text-indigo-400">
                      <Icon className="h-4 w-4" />
                    </span>
                  </div>

                  <h2 className="text-lg font-extrabold text-zinc-950 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors mb-2">
                    {tech.title}
                  </h2>
                  <p className="text-xs leading-relaxed text-zinc-600 dark:text-zinc-400 mb-6">
                    {tech.subtitle}
                  </p>
                </div>

                <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between text-xs font-bold text-indigo-600 dark:text-indigo-400">
                  <span>Explore Deep Dive &amp; Resources</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            )
          })}
        </div>

        {/* Learning Philosophy Card */}
        <div className="bento-card p-8 md:p-10 relative overflow-hidden">
          <div className="flex items-center gap-2 mb-4">
            <Lightbulb className="h-5 w-5 text-indigo-500" />
            <h2 className="text-xl font-extrabold text-zinc-950 dark:text-white">
              My Engineering Learning Philosophy
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
            <div className="space-y-2">
              <p className="font-bold text-zinc-900 dark:text-zinc-100 text-sm">1. First-Principles Understanding</p>
              <p>Don't just use APIs blindly. Understand the memory model, execution thread, database storage layout, and network protocols underneath.</p>
            </div>
            <div className="space-y-2">
              <p className="font-bold text-zinc-900 dark:text-zinc-100 text-sm">2. Learn from Master Documentation</p>
              <p>Read primary books and official docs (Kleppmann, Ramalho, O'Reilly, Vercel, Redis.io) over quick copy-paste snippets.</p>
            </div>
            <div className="space-y-2">
              <p className="font-bold text-zinc-900 dark:text-zinc-100 text-sm">3. Validate in Real Production</p>
              <p>Real learning happens when systems encounter production traffic spikes, memory limits, network retries, and edge cases.</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
