import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { projectsData } from '@/data/projectsData'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { ArticleAuthorBar } from '@/components/ArticleAuthorBar'
import { OnThisPage } from '@/components/OnThisPage'
import { ArrowLeft, ArrowUpRight, CheckCircle2, AlertTriangle, Lightbulb, Server, Workflow } from 'lucide-react'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return Object.keys(projectsData).map((slug) => ({ slug }))
}

const BASE_URL = 'https://ahammed.xyz'

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = projectsData[slug]
  if (!project) return { title: 'Project Not Found' }

  const title = `${project.title} — Technical Case Study & Architecture`
  const description = project.subtitle
  const url = `${BASE_URL}/projects/${slug}`

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

const projectSections = [
  { id: 'overview', label: 'Overview' },
  { id: 'problems-solutions', label: 'Problems & Solutions' },
  { id: 'takeaways', label: 'Engineering Takeaways' },
  { id: 'tech-stack', label: 'Tech Stack Breakdown' },
]

export default async function ProjectCaseStudyPage({ params }: Props) {
  const { slug } = await params
  const project = projectsData[slug]

  if (!project) {
    notFound()
  }

  const techArticleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: project.title,
    description: project.subtitle,
    url: `${BASE_URL}/projects/${slug}`,
    author: {
      '@type': 'Person',
      name: 'Ahammed Ali Shaik',
      url: BASE_URL,
    },
    publisher: {
      '@type': 'Person',
      name: 'Ahammed Ali Shaik',
    },
    dependencies: project.tags.join(', '),
  }

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(techArticleJsonLd) }}
      />
      <Navbar />

      <main className="flex-1 px-4 py-12 md:px-8 max-w-7xl mx-auto w-full">
        {/* Back link */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-xs font-bold text-zinc-500 dark:text-zinc-400 mb-8 transition-colors hover:text-indigo-600 dark:hover:text-indigo-400"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Portfolio Projects
        </Link>

        {/* Header Hero */}
        <div id="overview" className="bento-card p-8 md:p-10 mb-8 relative overflow-hidden scroll-mt-24">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <span className="inline-flex items-center rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-indigo-600 dark:border-indigo-900/60 dark:bg-indigo-950/50 dark:text-indigo-400">
              {project.category}
            </span>
            <span className="text-xs font-semibold text-zinc-400">{project.period}</span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-3 text-zinc-950 dark:text-white">
            {project.title}
          </h1>
          <p className="text-lg font-semibold text-indigo-600 dark:text-indigo-400 mb-6">
            {project.subtitle}
          </p>

          <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-300 max-w-3xl mb-8">
            {project.overview}
          </p>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-zinc-100 dark:border-zinc-800">
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((t) => (
                <span key={t} className="tech-tag">{t}</span>
              ))}
            </div>
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-2.5 text-xs font-bold text-white hover:bg-indigo-500 transition-colors"
            >
              Open Live Product <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Article Content (8 cols) */}
          <div className="lg:col-span-8 space-y-8">
            {/* Grid Section: Problems & Solutions */}
            <div id="problems-solutions" className="grid grid-cols-1 md:grid-cols-2 gap-6 scroll-mt-24">
              {/* Problems Faced */}
              <div className="bento-card p-7">
                <div className="flex items-center gap-2 mb-6">
                  <AlertTriangle className="h-5 w-5 text-indigo-500" />
                  <h2 className="text-lg font-bold text-zinc-950 dark:text-white">Key Problems Faced</h2>
                </div>
                <div className="space-y-6">
                  {project.problemsFaced.map((p, i) => (
                    <div key={i} className="rounded-xl bg-indigo-500/5 border border-indigo-500/10 p-4">
                      <p className="text-sm font-extrabold text-indigo-600 dark:text-indigo-400 mb-1">
                        {p.title}
                      </p>
                      <p className="text-xs leading-relaxed text-zinc-600 dark:text-zinc-400 mb-2">
                        {p.description}
                      </p>
                      <div className="text-[11px] font-semibold text-zinc-500 dark:text-zinc-400 border-t border-indigo-500/10 pt-2 mt-2">
                        <span className="font-bold text-indigo-600 dark:text-indigo-400">Impact: </span>
                        {p.impact}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Solutions & Architectural Trade-offs */}
              <div className="bento-card p-7">
                <div className="flex items-center gap-2 mb-6">
                  <Workflow className="h-5 w-5 text-indigo-500" />
                  <h2 className="text-lg font-bold text-zinc-950 dark:text-white">Solutions &amp; Trade-offs</h2>
                </div>
                <div className="space-y-6">
                  {project.solutionsImplemented.map((s, i) => (
                    <div key={i} className="rounded-xl bg-indigo-500/5 border border-indigo-500/10 p-4">
                      <p className="text-sm font-extrabold text-indigo-600 dark:text-indigo-400 mb-1">
                        {s.title}
                      </p>
                      <p className="text-xs leading-relaxed text-zinc-600 dark:text-zinc-400 mb-2">
                        {s.architecture}
                      </p>
                      <div className="text-[11px] font-semibold text-zinc-500 dark:text-zinc-400 border-t border-indigo-500/10 pt-2 mt-2">
                        <span className="font-bold text-indigo-600 dark:text-indigo-400">Trade-offs Considered: </span>
                        {s.tradeOffs}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Takeaways and Deep Understandings */}
            <div id="takeaways" className="bento-card p-8 scroll-mt-24">
              <div className="flex items-center gap-2 mb-6">
                <Lightbulb className="h-5 w-5 text-indigo-500" />
                <h2 className="text-xl font-bold text-zinc-950 dark:text-white">
                  Engineering Takeaways &amp; Key Understandings
                </h2>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {project.takeawaysAndLearnings.map((t, i) => (
                  <div key={i} className="rounded-xl bg-zinc-100/70 p-5 dark:bg-zinc-800/60 border border-zinc-200/50 dark:border-zinc-700/50">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle2 className="h-4 w-4 text-indigo-500 shrink-0" />
                      <p className="text-xs font-bold text-zinc-900 dark:text-zinc-100">{t.title}</p>
                    </div>
                    <p className="text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">{t.insight}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Detailed Tech Stack breakdown */}
            <div id="tech-stack" className="bento-card p-8 scroll-mt-24">
              <div className="flex items-center gap-2 mb-6">
                <Server className="h-5 w-5 text-indigo-500" />
                <h2 className="text-xl font-bold text-zinc-950 dark:text-white">Tech Stack Breakdown</h2>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {project.techStackDetailed.map((item) => (
                  <div key={item.name} className="flex items-start gap-3 rounded-xl bg-zinc-100/50 p-4 dark:bg-zinc-800/40">
                    <span className="font-bold text-xs text-indigo-600 dark:text-indigo-400 shrink-0 w-24">{item.name}</span>
                    <span className="text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">{item.usage}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar (4 cols) */}
          <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
            <ArticleAuthorBar readTime="7 min read" lastUpdated="August 2026" />
            <OnThisPage sections={projectSections} />
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  )
}
