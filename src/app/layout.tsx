import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme'
import { siteConfig, author, socialLinks, seoData } from '@/data/siteConfig'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap', // prevents FOUT blocking render
})

const BASE_URL = siteConfig.url

export const metadata: Metadata = {
  // ── Core ───────────────────────────────────────────────────────
  metadataBase: new URL(BASE_URL),
  title: {
    default: siteConfig.title,
    template: `%s | ${author.name}`,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  authors: [{ name: author.name, url: BASE_URL }],
  creator: author.name,
  publisher: author.name,
  category: 'Technology',

  // ── Canonical ──────────────────────────────────────────────────
  alternates: {
    canonical: BASE_URL,
  },

  // ── Open Graph (social sharing) ────────────────────────────────
  openGraph: {
    type: 'website',
    url: BASE_URL,
    siteName: siteConfig.siteName,
    locale: 'en_US',
    title: siteConfig.title,
    description: seoData.home.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${author.name} — ${author.role} Portfolio`,
        type: 'image/jpeg',
      },
    ],
  },

  // ── Twitter Card ───────────────────────────────────────────────
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: seoData.home.description,
    images: [siteConfig.ogImage],
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
  name: author.name,
  url: BASE_URL,
  image: `${BASE_URL}${siteConfig.ogImage}`,
  jobTitle: author.role,
  description: author.bio,
  email: author.email,
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
    name: author.company,
    url: author.companyUrl,
  },
  knowsAbout: [
    'Python', 'FastAPI', 'Django', 'JavaScript', 'TypeScript',
    'React', 'Next.js', 'PostgreSQL', 'Citus', 'Redis Streams',
    'Elasticsearch', 'AWS', 'Docker', 'GitLab CI/CD', 'Playwright',
    'Stripe API', 'Distributed Systems', 'Web Scraping',
    'Chrome Extensions', 'Nginx', 'Cloudflare Hosting',
  ],
  sameAs: [
    socialLinks.github,
    socialLinks.linkedin,
    socialLinks.leetcode,
  ],
}

// WebSite schema: enables Google Sitelinks Searchbox
const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${BASE_URL}/#website`,
  url: BASE_URL,
  name: siteConfig.siteName,
  description: siteConfig.description,
  author: { '@id': `${BASE_URL}/#person` },
  inLanguage: 'en-US',
}

// WebPage schema: gives context to the page itself
const webPageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  '@id': `${BASE_URL}/#webpage`,
  url: BASE_URL,
  name: siteConfig.title,
  isPartOf: { '@id': `${BASE_URL}/#website` },
  about: { '@id': `${BASE_URL}/#person` },
  description: siteConfig.description,
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
