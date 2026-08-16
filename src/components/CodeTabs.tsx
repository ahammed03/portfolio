'use client'

import { useState } from 'react'
import { Terminal, FileCode, Check } from 'lucide-react'

type CodeTab = {
  title: string
  filename: string
  code: string
  explanation: string
}

export default function CodeTabs({ tabs }: { tabs: CodeTab[] }) {
  const [activeTab, setActiveTab] = useState(0)
  const [copied, setCopied] = useState(false)

  const current = tabs[activeTab] || tabs[0]

  const handleCopy = () => {
    navigator.clipboard.writeText(current.code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="bento-card p-6 md:p-8 mb-8 overflow-hidden">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-2">
          <Terminal className="h-5 w-5 text-violet-500" />
          <h2 className="text-xl font-extrabold text-zinc-950 dark:text-white">
            Production Code Blueprint (End-to-End Flow)
          </h2>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap gap-1 rounded-xl border border-zinc-200 bg-zinc-100/80 p-1 dark:border-zinc-800 dark:bg-zinc-900">
          {tabs.map((tab, idx) => (
            <button
              key={tab.title}
              type="button"
              onClick={() => setActiveTab(idx)}
              className={`rounded-lg px-3 py-1.5 text-xs font-bold transition-all ${
                activeTab === idx
                  ? 'bg-white text-indigo-600 shadow-2xs dark:bg-zinc-800 dark:text-indigo-400'
                  : 'text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white'
              }`}
            >
              {tab.title}
            </button>
          ))}
        </div>
      </div>

      {/* Code Header Bar */}
      <div className="flex items-center justify-between rounded-t-xl bg-zinc-900 px-4 py-2.5 border-b border-zinc-800 text-xs text-zinc-400 font-mono">
        <div className="flex items-center gap-2">
          <FileCode className="h-4 w-4 text-indigo-400" />
          <span className="font-semibold text-zinc-200">{current.filename}</span>
        </div>

        <button
          type="button"
          onClick={handleCopy}
          className="inline-flex items-center gap-1 text-[11px] font-bold text-zinc-400 hover:text-white transition-colors"
        >
          {copied ? (
            <>
              <Check className="h-3.5 w-3.5 text-emerald-400" /> Copied!
            </>
          ) : (
            'Copy Snippet'
          )}
        </button>
      </div>

      {/* Code Area */}
      <div className="rounded-b-xl bg-zinc-950 text-zinc-100 p-5 overflow-x-auto font-mono text-xs leading-relaxed border-x border-b border-zinc-800 shadow-inner mb-4">
        <pre>{current.code}</pre>
      </div>

      {/* Architectural Breakdown */}
      <div className="rounded-xl bg-violet-500/5 border border-violet-500/10 p-4">
        <p className="text-xs font-bold text-violet-600 dark:text-violet-400 mb-1">
          Architecture Breakdown:
        </p>
        <p className="text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
          {current.explanation}
        </p>
      </div>
    </div>
  )
}
