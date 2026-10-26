// ============================================================================
// Global User Profile & Site Configuration
// Single source of truth for all personal details, metadata & SEO configurations.
// Update this file once — every page, component, and metadata pulls from here.
// ============================================================================

export const siteConfig = {
  url: 'https://ahammed.xyz',
  title: 'Ahammed Ali Shaik | Software Engineer',
  siteName: 'Ahammed Ali Shaik — Software Engineer',
  ogImage: '/og-image.jpg',
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
    'Cloudflare Hosting CDN',
  ],
} as const

export const author = {
  name: 'Ahammed Ali Shaik',
  initials: 'AS',
  role: 'Software Engineer',
  company: 'Kipplo Technologies',
  companyUrl: 'https://www.kipplo.com',
  roleAtCompany: 'Software Engineer @ Kipplo',
  location: 'Bengaluru, India',
  email: 'ahammeddev03@gmail.com',
  bio: 'Software Engineer based in Bengaluru with 2+ years of production-scale experience at Kipplo Technologies — a B2B account intelligence startup. I build systems that are correct under concurrency, observable in real-time, and scale with direct business value.',
  availability: 'Open to Software Engineering roles',
} as const

export const socialLinks = {
  github: 'https://github.com/ahammed03',
  linkedin: 'https://linkedin.com/in/ahammed-ali-shaik-ba0175228',
  leetcode: 'https://leetcode.com/u/ahammed03/',
  email: 'mailto:ahammeddev03@gmail.com',
} as const

export const education = {
  degree: 'BTech in Mechanical Engineering',
  cgpa: '8.65',
  graduationDate: 'May 2023',
  summary:
    'After graduating with a BTech in Mechanical Engineering (CGPA 8.65, May 2023), I spent a year doing intensive self-directed learning in backend systems, distributed architectures, and system design — building projects, solving DSA on LeetCode, and studying production engineering patterns before joining Kipplo in May 2024.',
} as const

export const experience = {
  company: 'Kipplo Technologies',
  companyUrl: 'https://www.kipplo.com',
  role: 'Software Engineer @ Kipplo',
  period: 'May 2024 — Present',
  location: 'Bengaluru, India (On-Site)',
  type: 'Full-Time',
  teamSize: '~10 person startup',
} as const

export const seoData = {
  home: {
    title: 'Ahammed Ali Shaik | Software Engineer',
    description:
      'Software Engineer building high-performance distributed backend systems, cloud-native APIs, and scalable data pipelines with Python (FastAPI), PostgreSQL, Redis, and Cloudflare.',
  },
  learnings: {
    title: 'Engineering Learnings, Resources & Tech Deep Dives | Ahammed Ali Shaik',
    description:
      'Detailed engineering learnings, mental models, curated learning resources, and real production lessons across Python, FastAPI, PostgreSQL, Citus, Redis Streams, Polars, Docker, React, and Next.js.',
  },
  notFound: {
    title: '404 - Page Not Found | Ahammed Ali Shaik',
    description: 'The requested engineering case study or learning page could not be found.',
  },
} as const
