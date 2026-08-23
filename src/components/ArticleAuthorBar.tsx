'use client'

import React from 'react'
import { Calendar, Clock, UserCheck } from 'lucide-react'

type ArticleAuthorBarProps = {
  readTime?: string
  lastUpdated?: string
}

export function ArticleAuthorBar({ readTime = '6 min read', lastUpdated = 'August 2026' }: ArticleAuthorBarProps) {
  return (
    <div className="bento-card p-5 border-indigo-500/20">
      {/* Author Info Header */}
      <div className="flex items-center gap-3 mb-3.5 pb-3 border-b border-zinc-100 dark:border-zinc-800">
        <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-white font-extrabold text-xs shadow-md ring-2 ring-indigo-500/20">
          AS
          <span className="absolute -bottom-0.5 -right-0.5 flex h-3 w-3 items-center justify-center rounded-full bg-emerald-500 ring-2 ring-white dark:ring-zinc-900" />
        </div>
        <div>
          <div className="flex items-center gap-1.5">
            <h4 className="text-xs font-bold text-zinc-950 dark:text-white">Ahammed Ali Shaik</h4>
            <span className="inline-flex items-center gap-1 rounded-md bg-indigo-500/10 px-1.5 py-0.5 text-[9px] font-bold text-indigo-600 dark:text-indigo-400">
              <UserCheck className="h-2.5 w-2.5" /> Author
            </span>
          </div>
          <p className="text-[11px] text-zinc-500 dark:text-zinc-400">
            Backend &amp; Systems Engineer @ Kipplo
          </p>
        </div>
      </div>

      {/* Meta stats & Social Links */}
      <div className="flex items-center justify-between text-[11px] text-zinc-500 dark:text-zinc-400">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1">
            <Clock className="h-3 w-3 text-indigo-500" /> {readTime}
          </span>
          <span className="text-zinc-300 dark:text-zinc-700">•</span>
          <span className="inline-flex items-center gap-1">
            <Calendar className="h-3 w-3 text-indigo-500" /> {lastUpdated}
          </span>
        </div>

        <div className="flex items-center gap-1">
          <a
            href="https://github.com/ahammed03"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md p-1 text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-white transition-colors"
            title="GitHub Profile"
          >
            <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>
          <a
            href="https://linkedin.com/in/ahammed-ali-shaik-ba0175228"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md p-1 text-zinc-500 hover:bg-zinc-100 hover:text-indigo-600 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-indigo-400 transition-colors"
            title="LinkedIn Profile"
          >
            <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}
