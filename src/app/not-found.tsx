import React from 'react'
import Link from 'next/link'
import { Home, BookOpen, Layers, AlertCircle } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: '404 - Page Not Found | Ahammed Ali Shaik',
  description: 'The requested engineering case study or learning page could not be found.',
}

export default function NotFound() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 flex flex-col justify-between">
      <Navbar />

      <main className="flex-1 flex items-center justify-center px-4 py-16 md:px-8 max-w-4xl mx-auto w-full">
        <div className="bento-card p-8 md:p-12 text-center w-full max-w-2xl border-indigo-500/20 relative overflow-hidden">
          {/* Badge indicator */}
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3.5 py-1 text-xs font-bold text-indigo-600 dark:text-indigo-400 mb-6">
            <AlertCircle className="h-4 w-4" /> 404 Error • Page Not Found
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-950 dark:text-white mb-4">
            Lost in <span className="text-indigo-600 dark:text-indigo-400">Cyber Space</span>?
          </h1>

          <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-lg mx-auto mb-8">
            The page or engineering case study you are looking for doesn&apos;t exist, has been moved, or the URL slug is incorrect.
          </p>

          {/* Action Links */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-2.5 text-xs font-bold text-white hover:bg-indigo-500 transition-colors shadow-sm"
            >
              <Home className="h-4 w-4" /> Return to Home Portfolio
            </Link>

            <Link
              href="/learnings"
              className="inline-flex items-center gap-2 rounded-xl border border-zinc-200 bg-white px-5 py-2.5 text-xs font-bold text-zinc-700 hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 transition-colors"
            >
              <BookOpen className="h-4 w-4 text-indigo-500" /> Browse Learnings Hub
            </Link>

            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 rounded-xl border border-zinc-200 bg-white px-5 py-2.5 text-xs font-bold text-zinc-700 hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 transition-colors"
            >
              <Layers className="h-4 w-4 text-indigo-500" /> View Case Studies
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
