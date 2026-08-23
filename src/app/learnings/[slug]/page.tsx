import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { learningsData } from '@/data/learningsData'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CodeTabs from '@/components/CodeTabs'
import { ArticleAuthorBar } from '@/components/ArticleAuthorBar'
import { OnThisPage } from '@/components/OnThisPage'
import { ArrowLeft, BookOpen, ExternalLink, Lightbulb, GraduationCap, CheckCircle2, Video, GitBranch, Zap, ShieldCheck, Workflow, ArrowRight } from 'lucide-react'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return Object.keys(learningsData).map((slug) => ({ slug }))
}

const BASE_URL = 'https://ahammed.xyz'

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const tech = learningsData[slug]
  if (!tech) return { title: 'Technology Not Found' }

  const title = `${tech.title} — How I Learnt It, Resources & Code Blueprint`
  const description = tech.subtitle
  const url = `${BASE_URL}/learnings/${slug}`

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      type: 'article',
      siteName: 'Ahammed Ali Shaik — Software Engineer',
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/og-image.jpg'],
    },
  }
}

const learningsSections = [
  { id: 'overview', label: 'Overview' },
  { id: 'metrics', label: 'Production Impact' },
  { id: 'architecture', label: 'Architecture Blueprint' },
  { id: 'resources', label: 'Recommended Resources' },
  { id: 'concepts', label: 'Mental Models' },
  { id: 'lessons', label: 'Production Lessons' },
]

export default async function LearningDetailPage({ params }: Props) {
  const { slug } = await params
  const tech = learningsData[slug]

  if (!tech) {
    notFound()
  }

  const techArticleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: tech.title,
    description: tech.subtitle,
    url: `${BASE_URL}/learnings/${slug}`,
    author: {
      '@type': 'Person',
      name: 'Ahammed Ali Shaik',
      url: BASE_URL,
    },
    publisher: {
      '@type': 'Person',
      name: 'Ahammed Ali Shaik',
    },
    dependencies: tech.tags ? tech.tags.join(', ') : '',
  }

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(techArticleJsonLd) }}
      />
      <Navbar />

      <main className="flex-1 px-4 py-12 md:px-8 max-w-7xl mx-auto w-full">
        {/* Navigation Bar */}
        <div className="flex items-center justify-between gap-4 mb-8">
          <Link
            href="/learnings"
            className="inline-flex items-center gap-2 text-xs font-bold text-zinc-500 dark:text-zinc-400 transition-colors hover:text-indigo-600 dark:hover:text-indigo-400"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Learnings Hub
          </Link>

          <a
            href={tech.githubRepoLink || 'https://github.com/ahammed03'}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-xl border border-zinc-200 bg-white px-3.5 py-1.5 text-xs font-bold text-zinc-700 shadow-2xs hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 transition-colors"
          >
            <GitBranch className="h-3.5 w-3.5 text-indigo-500" /> Verify Code on GitHub <ExternalLink className="h-3 w-3 text-zinc-400" />
          </a>
        </div>

        {/* Header Banner */}
        <div id="overview" className="bento-card p-8 md:p-10 mb-8 scroll-mt-24">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
              <GraduationCap className="h-4 w-4" /> {tech.category}
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-zinc-950 dark:text-white mb-2">
            {tech.title}
          </h1>
          <p className="text-base font-semibold text-zinc-500 dark:text-zinc-400 mb-6">
            {tech.subtitle}
          </p>

          {/* Tech Stack Skill Pills */}
          {tech.tags && tech.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-6">
              {tech.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-lg border border-zinc-200/80 bg-zinc-50/80 px-3 py-1 text-xs font-bold text-zinc-700 dark:border-zinc-700/80 dark:bg-zinc-800/80 dark:text-zinc-300"
                >
                  {t}
                </span>
              ))}
            </div>
          )}

          <div className="rounded-xl bg-zinc-100/80 p-5 dark:bg-zinc-800/60 border border-zinc-200/50 dark:border-zinc-700/50">
            <p className="bento-label mb-2">How I Learnt &amp; Mastered This Tech</p>
            <p className="text-xs leading-relaxed text-zinc-700 dark:text-zinc-300">
              {tech.howILearned}
            </p>
          </div>
        </div>

        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Content Column (8 cols) */}
          <div className="lg:col-span-8 space-y-8">
            {/* Real-World Production Impact & Metrics */}
            {tech.productionMetrics && tech.productionMetrics.length > 0 && (
              <div id="metrics" className="bento-card p-8 scroll-mt-24">
                <div className="flex items-center gap-2 mb-6">
                  <Zap className="h-5 w-5 text-indigo-500" />
                  <h2 className="text-xl font-extrabold text-zinc-950 dark:text-white">
                    Real-World Production Impact &amp; Metrics at Kipplo
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {tech.productionMetrics.map((m, i) => (
                    <div key={i} className="rounded-xl bg-indigo-500/5 border border-indigo-500/10 p-5 flex flex-col justify-between">
                      <div>
                        <span className="text-[10px] font-extrabold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 block mb-1">
                          {m.label}
                        </span>
                        <p className="text-xl font-extrabold text-zinc-950 dark:text-white mb-2">
                          {m.value}
                        </p>
                      </div>
                      <p className="text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
                        {m.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Architecture Flowchart Diagram */}
            {tech.architectureDiagram && (
              <div id="architecture" className="bento-card p-8 scroll-mt-24">
                <div className="flex items-center gap-2 mb-6">
                  <Workflow className="h-5 w-5 text-indigo-500" />
                  <h2 className="text-xl font-extrabold text-zinc-950 dark:text-white">
                    {tech.architectureDiagram.title}
                  </h2>
                </div>

                <div className="space-y-3">
                  {tech.architectureDiagram.steps.map((step, idx) => (
                    <div key={idx} className="flex flex-col sm:flex-row sm:items-center gap-3 rounded-xl border border-zinc-200/80 bg-zinc-50/60 p-4 dark:border-zinc-800 dark:bg-zinc-900/40">
                      <div className="shrink-0 font-bold text-xs text-indigo-600 dark:text-indigo-400 sm:w-48 flex items-center gap-1.5">
                        <span>{step.step}</span>
                        {idx < tech.architectureDiagram!.steps.length - 1 && (
                          <ArrowRight className="h-3 w-3 text-zinc-400 hidden sm:inline" />
                        )}
                      </div>
                      <p className="text-xs leading-relaxed text-zinc-600 dark:text-zinc-400 flex-1">
                        {step.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tabbed Interactive Code Blueprint */}
            {tech.codeTabs && tech.codeTabs.length > 0 && (
              <CodeTabs tabs={tech.codeTabs} />
            )}

            {/* Top Recommended Learning Resources */}
            <div id="resources" className="bento-card p-8 scroll-mt-24">
              <div className="flex items-center gap-2 mb-6">
                <BookOpen className="h-5 w-5 text-indigo-500" />
                <h2 className="text-xl font-extrabold text-zinc-950 dark:text-white">
                  Recommended Learning Resources &amp; Documentation
                </h2>
              </div>

              <div className="space-y-4">
                {tech.topResources.map((res, i) => (
                  <a
                    key={i}
                    href={res.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-xl border border-zinc-200/80 bg-zinc-50/50 p-4 transition-all hover:bg-white hover:border-indigo-500/50 dark:border-zinc-800 dark:bg-zinc-900/40 dark:hover:bg-zinc-800"
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="inline-flex items-center gap-1 rounded-md px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-indigo-50 text-indigo-600 dark:bg-indigo-950/60 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-900/60">
                          {res.type === 'YouTube' && <Video className="h-3 w-3 text-indigo-500" />}
                          {res.type}
                        </span>
                        <span className="text-xs font-bold text-zinc-900 dark:text-zinc-100 transition-colors">
                          {res.title}
                        </span>
                      </div>
                      <p className="text-[11px] font-semibold text-zinc-400 mb-1">
                        By {res.authorOrPlatform}
                      </p>
                      <p className="text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
                        <span className="font-bold text-zinc-700 dark:text-zinc-300">Why it matters: </span>
                        {res.whyItMatters}
                      </p>
                    </div>

                    <div className="shrink-0 flex items-center gap-1 text-xs font-bold text-indigo-600 dark:text-indigo-400">
                      <span>Open Resource</span>
                      <ExternalLink className="h-3.5 w-3.5" />
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Core Mental Models */}
            <div id="concepts" className="bento-card p-8 scroll-mt-24">
              <div className="flex items-center gap-2 mb-6">
                <Lightbulb className="h-5 w-5 text-indigo-500" />
                <h2 className="text-xl font-extrabold text-zinc-950 dark:text-white">
                  Core Mental Models &amp; Architectural Concepts
                </h2>
              </div>

              <div className="space-y-4">
                {tech.coreMentalModels.map((m, i) => (
                  <div key={i} className="rounded-xl bg-zinc-100/70 p-5 dark:bg-zinc-800/60 border border-zinc-200/50 dark:border-zinc-700/50">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle2 className="h-4 w-4 text-indigo-500 shrink-0" />
                      <h3 className="text-sm font-extrabold text-zinc-950 dark:text-white">{m.concept}</h3>
                    </div>
                    <p className="text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">{m.explanation}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Production Lessons & Pitfalls */}
            <div id="lessons" className="bento-card p-8 scroll-mt-24">
              <div className="flex items-center gap-2 mb-6">
                <ShieldCheck className="h-5 w-5 text-indigo-500" />
                <h2 className="text-xl font-extrabold text-zinc-950 dark:text-white">
                  Production Pitfalls &amp; Lessons Learned
                </h2>
              </div>

              <div className="space-y-4">
                {tech.productionLessons.map((l, i) => (
                  <div key={i} className="rounded-xl bg-indigo-500/5 border border-indigo-500/10 p-5">
                    <p className="text-xs font-bold text-indigo-600 dark:text-indigo-400 mb-1">
                      Common Pitfall: {l.pitfall}
                    </p>
                    <p className="text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
                      <span className="font-bold text-zinc-800 dark:text-zinc-200">Production Solution: </span>
                      {l.solution}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar (4 cols) */}
          <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
            <ArticleAuthorBar readTime="6 min read" lastUpdated="August 2026" />
            <OnThisPage sections={learningsSections} />
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  )
}
