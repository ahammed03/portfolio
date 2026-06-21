import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'Ahammed Ali Shaik | Software Engineer',
  description: 'Portfolio of Ahammed Ali Shaik, a Software Engineer focused on distributed systems, data-heavy APIs, production reliability, and scalable search infrastructure.',
  keywords: [
    'Ahammed Ali Shaik', 
    'Software Engineer', 
    'Backend Engineer', 
    'Distributed Systems', 
    'Elasticsearch', 
    'Citus Sharding', 
    'Polars', 
    'Stripe Integration', 
    'Kipplo Technologies'
  ],
  authors: [{ name: 'Ahammed Ali Shaik' }],
  creator: 'Ahammed Ali Shaik',
  metadataBase: new URL('https://ahammed.xyz'),
  openGraph: {
    title: 'Ahammed Ali Shaik | Software Engineer',
    description: 'Portfolio of Ahammed Ali Shaik, a Software Engineer focused on distributed systems, data-heavy APIs, and production reliability.',
    url: 'https://ahammed.xyz',
    siteName: 'Ahammed Ali Shaik Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ahammed Ali Shaik | Software Engineer',
    description: 'Portfolio of Ahammed Ali Shaik, a Software Engineer focused on distributed systems, data-heavy APIs, and production reliability.',
  },
  robots: {
    index: true,
    follow: true,
  }
}

const themeInitScript = `
(() => {
  try {
    const storedTheme = window.localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = storedTheme === 'light' || storedTheme === 'dark'
      ? storedTheme
      : systemPrefersDark
        ? 'dark'
        : 'light';
    document.documentElement.classList.toggle('dark', theme === 'dark');
    document.documentElement.style.colorScheme = theme;
  } catch (error) {}
})();
`

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Ahammed Ali Shaik',
  url: 'https://ahammed.xyz',
  jobTitle: 'Software Engineer',
  knowsAbout: [
    'Software Engineering',
    'Distributed Systems',
    'Python',
    'FastAPI',
    'Django',
    'PostgreSQL',
    'Citus',
    'Redis Streams',
    'Elasticsearch',
    'React',
    'Chrome Extensions',
    'Docker'
  ],
  sameAs: [
    'https://github.com/ahammed03',
    'https://www.linkedin.com/in/ahammed03/',
    'https://leetcode.com/u/ahammed03/'
  ]
}

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
