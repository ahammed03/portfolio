import { Code2, GitBranch, Mail, UserRound } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

type ContactLink = {
  label: string
  href: string
  value: string
  icon: LucideIcon
}

const links: ContactLink[] = [
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

export default function ContactSection() {
  return (
    <section id="contact" className="px-5 py-20 md:px-8">
      <div className="mx-auto max-w-7xl rounded-[2.25rem] border border-zinc-200 bg-white/90 px-6 py-10 shadow-2xl shadow-zinc-950/5 dark:border-zinc-800 dark:bg-zinc-950/90 md:px-10">
        <div className="max-w-2xl">
          <p className="font-semibold uppercase tracking-[0.22em] text-zinc-500 dark:text-zinc-500">Contact</p>
          <h2 className="mt-3 text-3xl font-semibold text-zinc-950 dark:text-white md:text-4xl">Open to product engineering roles.</h2>
          <p className="mt-4 max-w-xl leading-8 text-zinc-700 dark:text-zinc-400">If you want someone who can work across backend systems, data workflows, and product integration details, reach out directly.</p>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {links.map((link) => {
            const Icon = link.icon
            return (
              <a key={link.href} className="group flex items-center gap-4 rounded-2xl border border-zinc-200 bg-zinc-50 px-5 py-4 font-medium text-zinc-800 transition hover:-translate-y-0.5 hover:bg-white hover:shadow-md dark:border-zinc-800 dark:bg-black/40 dark:text-zinc-100 dark:hover:bg-zinc-900" href={link.href}>
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">{link.label}</span>
                  <span className="block break-all text-base text-zinc-950 dark:text-white">{link.value}</span>
                </span>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
