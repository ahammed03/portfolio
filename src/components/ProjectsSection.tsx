import Image, { type StaticImageData } from 'next/image'
import { GitBranch } from 'lucide-react'
import chatBotImg1 from '../assets/projectsImages/ChatBot.png'
import tailorFlowImg from '../assets/projectsImages/TailorFlow.png'
import githubExplorerImg from '../assets/projectsImages/githubExplorer.png'

type Project = {
  title: string
  description: string
  codeLink: string
  imageLink: StaticImageData
}

export default function ProjectsSection() {
  const projectsData: Project[] = [
    {
      title: 'Kipplo Chrome Extension',
      description: 'React browser extension with 700+ installs that surfaces verified B2B contact intelligence on LinkedIn profiles, connecting frontend workflows with production enrichment APIs.',
      codeLink: 'https://github.com/ahammed03',
      imageLink: githubExplorerImg,
    },
    {
      title: 'GitHub Explorer',
      description: 'React application using the GitHub API to explore user profiles, repositories, followers, forks, and project details with clean API-driven state and search behavior.',
      codeLink: 'https://github.com/ahammed03/GithubExplorer.git',
      imageLink: githubExplorerImg,
    },
    {
      title: 'Chatbot using Gemini AI',
      description: 'Gemini AI chatbot backed by Django, focused on request handling, backend integration, and a practical conversational workflow.',
      codeLink: 'https://github.com/ahammed03/chatbot.git',
      imageLink: chatBotImg1,
    },
    {
      title: 'TailorFlow',
      description: 'Django-based operations dashboard for order, customer, and daily workflow management, built as a CRUD-heavy business application with practical reporting needs.',
      codeLink: 'https://github.com/ahammed03/TailorFlow1.git',
      imageLink: tailorFlowImg,
    },
  ]

  return (
    <section id="projects" className="border-b border-zinc-200/80 px-5 py-20 dark:border-zinc-800/80 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-semibold uppercase tracking-[0.22em] text-zinc-500 dark:text-zinc-500">Projects</p>
            <h2 className="mt-3 text-3xl font-semibold text-zinc-950 dark:text-white md:text-4xl">Selected Work</h2>
          </div>
          <p className="max-w-xl text-zinc-600 dark:text-zinc-500">Projects here are positioned as product-facing work, with emphasis on outcome, workflow, and implementation clarity.</p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {projectsData.map((project) => (
            <article key={project.title} className="overflow-hidden rounded-[2rem] border border-zinc-200 bg-white/90 shadow-xl shadow-zinc-950/5 dark:border-zinc-800 dark:bg-zinc-950/90">
              <div className="relative aspect-[16/10] w-full">
                <Image className="object-cover" src={project.imageLink} alt={`${project.title} preview`} fill sizes="(max-width: 1024px) 100vw, 50vw" />
              </div>
              <div className="space-y-4 p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500 dark:text-zinc-500">Featured project</p>
                    <h3 className="mt-2 text-2xl font-semibold text-zinc-950 dark:text-white">{project.title}</h3>
                  </div>
                </div>
                <p className="leading-7 text-zinc-700 dark:text-zinc-400">{project.description}</p>
                <a href={project.codeLink} className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-4 py-2 text-sm font-semibold text-zinc-950 hover:bg-zinc-100 dark:border-zinc-800 dark:bg-black/40 dark:text-zinc-100 dark:hover:bg-zinc-900">
                  <GitBranch className="h-4 w-4" aria-hidden="true" />
                  View code
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
