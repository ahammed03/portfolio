'use client'

import { motion } from 'framer-motion'
import Image, { type StaticImageData } from 'next/image'
import { ExternalLink } from 'lucide-react'
import kipploWebImg from '../assets/projectsImages/kipplo_web_app.webp'
import kipploExtImg from '../assets/projectsImages/kipplo_extension.webp'

type Project = {
  title: string
  description: string
  link: string
  linkLabel: string
  imageLink: StaticImageData
}

const projectsData: Project[] = [
  {
    title: 'Kipplo Web Application',
    description: 'The core web platform for B2B account intelligence and contact enrichment. Handles real-time, bulk searches and CSV processing across a sharded 300M+ contact database. Powers enrichment pipelines with Polars, async task workers, and end-to-end Stripe billing integrations.',
    link: 'https://app.kipplo.com?utm_source=ahammed.xyz',
    linkLabel: 'Open Application',
    imageLink: kipploWebImg,
  },
  {
    title: 'Kipplo Chrome Extension',
    description: 'React-based browser extension with 700+ installs that surfaces verified B2B contact intelligence directly on LinkedIn profiles, connecting sales workflows with production enrichment APIs.',
    link: 'https://chromewebstore.google.com/detail/kipplo-an-ai-powered-inte/mfilcfngbefbaeggcglepgdklgdffeih?utm_source=ahammed.xyz',
    linkLabel: 'View on Web Store',
    imageLink: kipploExtImg,
  },
]

export default function ProjectsSection() {
  return (
    <section id="projects" className="border-b border-zinc-200/80 px-4 py-20 dark:border-zinc-800/80 md:px-8 bg-zinc-50/30 dark:bg-zinc-950/20">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between border-b border-zinc-200 pb-6 dark:border-zinc-800">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">Projects</p>
            <h2 className="mt-3 text-3xl font-extrabold text-zinc-950 dark:text-white md:text-4xl">Selected Work</h2>
          </div>
          <p className="max-w-xl text-sm font-semibold text-zinc-500 dark:text-zinc-400 md:text-right">
            Projects here represent core product work built for production scale, deployment reliability, and direct user value.
          </p>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          {projectsData.map((project, index) => {
            const isExtension = project.title.toLowerCase().includes('extension');
            return (
              <motion.article 
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900/40 backdrop-blur-sm flex flex-col"
              >
                {/* Custom Image Box wrapper */}
                <div className="relative h-[280px] sm:h-[340px] w-full bg-zinc-50/50 dark:bg-zinc-950/40 p-4 sm:p-6 border-b border-zinc-200/80 dark:border-zinc-800/80 flex items-center justify-center overflow-hidden">
                  {isExtension ? (
                    /* Extension: Cropped 340px width and full height like mobile screen size */
                    <div className="w-[340px] max-w-full h-full rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-md flex flex-col overflow-hidden relative">
                      {/* Extension top bar */}
                      <div className="flex items-center justify-between px-3 py-2 border-b border-zinc-100 dark:border-zinc-800/60 bg-zinc-50 dark:bg-zinc-950 select-none">
                        <span className="text-[9px] font-bold text-zinc-400 dark:text-zinc-500">Kipplo Extension</span>
                        <span className="h-1.5 w-4 rounded-full bg-zinc-200 dark:bg-zinc-800" />
                      </div>
                      {/* Extension screen */}
                      <div className="relative flex-1 w-full overflow-hidden bg-zinc-50 dark:bg-zinc-900">
                        <Image 
                          className="object-cover object-top transition-transform duration-300 hover:scale-101" 
                          src={project.imageLink} 
                          alt={`${project.title} preview`} 
                          fill 
                          sizes="(max-width: 1024px) 100vw, 50vw" 
                        />
                      </div>
                    </div>
                  ) : (
                    /* Web App: Full Desktop Browser Mockup */
                    <div className="w-full h-full rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-md flex flex-col overflow-hidden">
                      {/* Browser header */}
                      <div className="flex items-center gap-1.5 px-3 py-2 border-b border-zinc-100 dark:border-zinc-800/60 bg-zinc-50 dark:bg-zinc-950 select-none">
                        <div className="flex gap-1">
                          <span className="h-1.5 w-1.5 rounded-full bg-zinc-300 dark:bg-zinc-600" />
                          <span className="h-1.5 w-1.5 rounded-full bg-zinc-300 dark:bg-zinc-600" />
                          <span className="h-1.5 w-1.5 rounded-full bg-zinc-300 dark:bg-zinc-600" />
                        </div>
                        <div className="mx-auto w-1/3 h-3.5 rounded bg-zinc-200/50 dark:bg-zinc-800/50 text-[8px] flex items-center justify-center text-zinc-400 dark:text-zinc-500 font-mono">app.kipplo.com</div>
                      </div>
                      {/* Browser screen */}
                      <div className="relative flex-1 w-full overflow-hidden bg-zinc-50 dark:bg-zinc-900">
                        <Image 
                          className="object-cover object-top transition-transform duration-300 hover:scale-101" 
                          src={project.imageLink} 
                          alt={`${project.title} preview`} 
                          fill 
                          sizes="(max-width: 1024px) 100vw, 50vw" 
                        />
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="flex-1 flex flex-col justify-between p-5 sm:p-6 space-y-4">
                  <div className="space-y-2">
                    <span className="text-3xs font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
                      {isExtension ? 'Chrome Extension' : 'Web Application'}
                    </span>
                    <h3 className="text-lg font-bold text-zinc-950 dark:text-white leading-snug">{project.title}</h3>
                    <p className="text-sm font-medium leading-relaxed text-zinc-600 dark:text-zinc-400">{project.description}</p>
                  </div>
                  
                  <div>
                    <a 
                      href={project.link} 
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${project.title} in a new tab`}
                      className="inline-flex h-9 items-center gap-2 rounded-lg border border-zinc-200 bg-white px-3.5 text-xs font-semibold text-zinc-800 shadow-sm hover:bg-zinc-50 focus-visible:ring-2 focus-visible:ring-indigo-500 outline-none dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800 transition-colors"
                    >
                      <ExternalLink className="h-3.5 w-3.5 text-zinc-400 dark:text-zinc-500" aria-hidden="true" />
                      {project.linkLabel}
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  )
}
