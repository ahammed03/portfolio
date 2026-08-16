import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap', // prevents FOUT blocking render
})

const BASE_URL = 'https://ahammed.xyz'

export const metadata: Metadata = {
  // ── Core ───────────────────────────────────────────────────────
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Ahammed Ali Shaik | Software Engineer',
    template: '%s | Ahammed Ali Shaik',
  },
  description:
    'Ahammed Ali Shaik is a Software Engineer based in Bengaluru building high-performance distributed backend systems, cloud-native APIs, and scalable data pipelines with Python (FastAPI), PostgreSQL, Redis, and AWS.',
  keywords: [
    'Ahammed Ali Shaik',
    'Software Engineer Bengaluru',
    'Backend Engineer India',
    'Python FastAPI Developer',
    'Distributed Systems Engineer',
    'PostgreSQL Citus Sharding',
    'Redis Streams Developer',
    'Elasticsearch Engineer',
    'React Next.js Developer',
    'AWS Cloud Engineer',
    'Full Stack Engineer India',
    'Kipplo Technologies',
    'Stripe Integration Developer',
    'Docker DevOps Engineer',
    'Web Scraping Playwright',
  ],
  authors: [{ name: 'Ahammed Ali Shaik', url: BASE_URL }],
  creator: 'Ahammed Ali Shaik',
  publisher: 'Ahammed Ali Shaik',
  category: 'Technology',

  // ── Canonical ──────────────────────────────────────────────────
  alternates: {
    canonical: BASE_URL,
  },

  // ── Open Graph (social sharing) ────────────────────────────────
  openGraph: {
    type: 'website',
    url: BASE_URL,
    siteName: 'Ahammed Ali Shaik — Software Engineer',
    locale: 'en_US',
    title: 'Ahammed Ali Shaik | Software Engineer',
    description:
      'Software Engineer building high-performance distributed systems, cloud-native APIs, and scalable data pipelines. 2+ years at Kipplo Technologies — 300M+ record PostgreSQL systems, Redis Streams, FastAPI, React.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Ahammed Ali Shaik — Software Engineer Portfolio',
        type: 'image/jpeg',
      },
    ],
  },

  // ── Twitter Card ───────────────────────────────────────────────
  twitter: {
    card: 'summary_large_image',
    title: 'Ahammed Ali Shaik | Software Engineer',
    description:
      'Software Engineer building distributed systems, cloud-native APIs, and scalable data pipelines. FastAPI · PostgreSQL · Redis · React · AWS.',
    images: ['/og-image.jpg'],
  },

  // ── Robots ─────────────────────────────────────────────────────
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // ── Verification placeholders ──────────────────────────────────
  // Uncomment and fill in once you verify ownership
  // verification: {
  //   google: 'YOUR_GOOGLE_SEARCH_CONSOLE_TOKEN',
  // },
}

// ── Theme init script (runs before paint to avoid flash) ─────────
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

// ── Structured Data (JSON-LD) ─────────────────────────────────────
// Person schema: helps Google show a rich Knowledge Panel
const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${BASE_URL}/#person`,
  name: 'Ahammed Ali Shaik',
  url: BASE_URL,
  image: `${BASE_URL}/og-image.jpg`,
  jobTitle: 'Software Engineer',
  description:
    'Software Engineer specialising in distributed systems, high-performance APIs, data pipelines, and cloud-native backend infrastructure.',
  email: 'ahammeddev03@gmail.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Bengaluru',
    addressRegion: 'Karnataka',
    addressCountry: 'IN',
  },
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'Madanapalle Institute of Technology & Sciences',
    url: 'https://www.mits.ac.in',
  },
  worksFor: {
    '@type': 'Organization',
    name: 'Kipplo Technologies',
    url: 'https://www.kipplo.com',
  },
  knowsAbout: [
    'Python', 'FastAPI', 'Django', 'JavaScript', 'TypeScript',
    'React', 'Next.js', 'PostgreSQL', 'Citus', 'Redis Streams',
    'Elasticsearch', 'AWS', 'Docker', 'GitLab CI/CD', 'Playwright',
    'Stripe API', 'Distributed Systems', 'Web Scraping',
    'Chrome Extensions', 'Nginx', 'Ubuntu Server',
  ],
  sameAs: [
    'https://github.com/ahammed03',
    'https://www.linkedin.com/in/ahammed03/',
    'https://leetcode.com/u/ahammed03/',
  ],
}

// WebSite schema: enables Google Sitelinks Searchbox
const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${BASE_URL}/#website`,
  url: BASE_URL,
  name: 'Ahammed Ali Shaik — Software Engineer',
  description: 'Portfolio of Ahammed Ali Shaik, a Software Engineer based in Bengaluru.',
  author: { '@id': `${BASE_URL}/#person` },
  inLanguage: 'en-US',
}

// WebPage schema: gives context to the page itself
const webPageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  '@id': `${BASE_URL}/#webpage`,
  url: BASE_URL,
  name: 'Ahammed Ali Shaik | Software Engineer Portfolio',
  isPartOf: { '@id': `${BASE_URL}/#website` },
  about: { '@id': `${BASE_URL}/#person` },
  description:
    'Portfolio website of Ahammed Ali Shaik — Software Engineer building distributed systems and cloud-native APIs.',
  inLanguage: 'en-US',
  dateModified: new Date().toISOString(),
}

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable}`}>
      <head>
        {/* Anti-flash theme script — must be first */}
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
        />
      </head>
      <body className="antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
