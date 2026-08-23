import type { MetadataRoute } from 'next'
import { projectsData } from '@/data/projectsData'
import { learningsData } from '@/data/learningsData'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const BASE_URL = 'https://ahammed.xyz'
  const now = new Date()

  const projectRoutes = Object.keys(projectsData).map((slug) => ({
    url: `${BASE_URL}/projects/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  const learningRoutes = Object.keys(learningsData).map((slug) => ({
    url: `${BASE_URL}/learnings/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/learnings`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/#about`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/#experience`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/#projects`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/#contact`,
      lastModified: now,
      changeFrequency: 'yearly' as const,
      priority: 0.7,
    },
    ...projectRoutes,
    ...learningRoutes,
  ]
}
