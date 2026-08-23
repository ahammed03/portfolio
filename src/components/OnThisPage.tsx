'use client'

import React, { useEffect, useState } from 'react'
import { ListFilter, ChevronRight } from 'lucide-react'

export type SectionItem = {
  id: string
  label: string
}

type OnThisPageProps = {
  sections: SectionItem[]
}

export function OnThisPage({ sections }: OnThisPageProps) {
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    if (!sections || sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: '-80px 0px -60% 0px' }
    )

    sections.forEach((sec) => {
      const el = document.getElementById(sec.id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [sections])

  if (!sections || sections.length === 0) return null

  return (
    <nav aria-label="On this page navigation" className="bento-card p-5 border-indigo-500/20">
      <div className="flex items-center gap-2 mb-3 pb-2 border-b border-zinc-100 dark:border-zinc-800">
        <ListFilter className="h-4 w-4 text-indigo-500" />
        <h4 className="text-xs font-extrabold uppercase tracking-wider text-zinc-900 dark:text-zinc-100">
          On This Page
        </h4>
      </div>

      <ul className="flex flex-col gap-1 text-xs">
        {sections.map((sec) => {
          const isActive = activeId === sec.id
          return (
            <li key={sec.id}>
              <a
                href={`#${sec.id}`}
                onClick={(e) => {
                  e.preventDefault()
                  const el = document.getElementById(sec.id)
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
                    setActiveId(sec.id)
                  }
                }}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium transition-all ${
                  isActive
                    ? 'bg-indigo-600 text-white font-bold shadow-sm'
                    : 'text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-200'
                }`}
              >
                <ChevronRight className={`h-3 w-3 shrink-0 ${isActive ? 'text-white' : 'text-indigo-500'}`} />
                <span>{sec.label}</span>
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
