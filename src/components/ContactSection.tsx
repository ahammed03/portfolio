'use client'

import React, { useEffect } from 'react'
import Cal, { getCalApi } from '@calcom/embed-react'
import { useTheme } from './theme'
import { Mail, UserRound, GitBranch, Code2, ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'

export default function ContactSection() {
  const { theme } = useTheme()

  useEffect(() => {
    (async function () {
      const cal = await getCalApi()
      if (cal) {
        cal("ui", {
          theme: theme === 'dark' ? 'dark' : 'light',
          styles: { branding: { brandColor: "#09090b" } },
          hideEventTypeDetails: false,
          layout: "month_view"
        })
      }
    })()
  }, [theme])

  // Social Links array matching the resume information
  const socialLinks = [
    {
      label: 'Email',
      href: 'mailto:ahammeddev03@gmail.com',
      value: 'ahammeddev03@gmail.com',
      icon: Mail,
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/ahammed03/',
      value: 'linkedin.com/in/ahammed03',
      icon: UserRound,
    },
    {
      label: 'GitHub',
      href: 'https://github.com/ahammed03',
      value: 'github.com/ahammed03',
      icon: GitBranch,
    },
    {
      label: 'LeetCode',
      href: 'https://leetcode.com/u/ahammed03/',
      value: 'leetcode.com/u/ahammed03',
      icon: Code2,
    },
  ]

  return (
    <section id="contact" className="relative px-4 py-24 bg-zinc-50/40 dark:bg-zinc-950 overflow-hidden border-t border-zinc-200/60 dark:border-zinc-800/40">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-zinc-200/30 dark:bg-zinc-900/20 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="mx-auto max-w-5xl relative">
        {/* Animated header section */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">Scheduler</p>
          <h2 className="mt-2 text-3xl font-extrabold text-zinc-950 dark:text-white md:text-4xl tracking-tight">Book a Session</h2>
          <p className="mt-3 text-sm font-semibold text-zinc-500 dark:text-zinc-400 leading-relaxed">
            Select a convenient slot below to sync directly with my calendar. Perfect for introductory calls, project consultations, or engineering interviews.
          </p>
        </motion.div>

        {/* Premium Window Mockup container - Simple & Compact */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mx-auto max-w-2xl relative group rounded-xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white dark:bg-zinc-900/60 shadow-md backdrop-blur-md overflow-hidden transition-all duration-300 hover:border-zinc-300 dark:hover:border-zinc-750"
        >
          {/* Top Window Control Bar */}
          <div className="flex items-center justify-between px-3.5 py-2.5 border-b border-zinc-150 dark:border-zinc-800 bg-zinc-50/80 dark:bg-zinc-900/90 select-none">
            {/* macOS control dots */}
            <div className="flex gap-1.5 items-center">
              <span className="h-1.5 w-1.5 rounded-full bg-zinc-300 dark:bg-zinc-700/80 transition-colors group-hover:bg-rose-400" />
              <span className="h-1.5 w-1.5 rounded-full bg-zinc-300 dark:bg-zinc-700/80 transition-colors group-hover:bg-amber-400" />
              <span className="h-1.5 w-1.5 rounded-full bg-zinc-300 dark:bg-zinc-700/80 transition-colors group-hover:bg-emerald-400" />
            </div>
            
            {/* Centered Calendar Status */}
            <div className="flex items-center gap-1.5 text-3xs font-extrabold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest">
              cal.com/ahammed-dev
            </div>
            
            {/* Right spacer for alignment */}
            <div className="w-8 h-2" />
          </div>

          {/* Cal.com Embed Screen */}
          <div className="w-full min-h-[500px] bg-white dark:bg-zinc-950/80 relative">
            {/* Subtle loading fallback layout */}
            <div className="absolute inset-0 flex items-center justify-center -z-10 bg-zinc-50 dark:bg-zinc-950 font-semibold text-xs text-zinc-400 dark:text-zinc-600">
              Loading calendar widget...
            </div>
            
            <Cal
              calLink="ahammed-dev"
              style={{ width: "100%", height: "100%", minHeight: "500px" }}
              config={{ 
                layout: "month_view",
                theme: theme === 'dark' ? 'dark' : 'light'
              }}
            />
          </div>
        </motion.div>

        {/* Animated profiles / integrations list below the booking widget */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-3xs font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-4.5">Or connect on other networks</p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {socialLinks.map((link, index) => {
              const Icon = link.icon
              return (
                <motion.a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: 0.35 + index * 0.08 }}
                  className="flex items-center gap-2 rounded-lg border border-zinc-200 bg-white px-3.5 py-2 text-xs font-bold text-zinc-700 shadow-xs hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/40 dark:text-zinc-200 dark:hover:bg-zinc-800 transition-colors"
                >
                  <Icon className="h-4 w-4 text-zinc-400 dark:text-zinc-500" aria-hidden="true" />
                  <span>{link.label}</span>
                  <ExternalLink className="h-3 w-3 text-zinc-400 dark:text-zinc-500" aria-hidden="true" />
                </motion.a>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
