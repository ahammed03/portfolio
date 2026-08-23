'use client'

import React, { useState } from 'react'

type TechLogoProps = {
  name: string
  className?: string
}

// Local downloaded icon map
const localIconMap: Record<string, string> = {
  python: '/icons/python.svg',
  fastapi: '/icons/fastapi.svg',
  django: '/icons/django.svg',
  citus: '/icons/citus.svg',
  postgres: '/icons/postgresql.svg',
  postgresql: '/icons/postgresql.svg',
  redis: '/icons/redis.svg',
  docker: '/icons/docker.svg',
  react: '/icons/react.svg',
  next: '/icons/nextjs.svg',
  cloudflare: '/icons/cloudflare.svg',
}

export function TechLogo({ name, className = 'h-4 w-4 shrink-0' }: TechLogoProps) {
  const [hasError, setHasError] = useState(false)
  const normalized = name.toLowerCase().trim()

  // Match key from local icon map
  const matchedKey = Object.keys(localIconMap).find((k) => normalized.includes(k))
  const localSrc = matchedKey ? localIconMap[matchedKey] : null

  // 1. Primary: Safely load local SVG file from public/icons
  if (localSrc && !hasError) {
    return (
      <img
        src={localSrc}
        alt={`${name} logo`}
        className={`${className} object-contain`}
        onError={() => setHasError(true)}
        loading="lazy"
      />
    )
  }

  // 2. Fallback: Embedded official vector SVG rendering if local file fails or is unmapped

  // Python Fallback
  if (normalized.includes('python')) {
    return (
      <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
        <path fill="#3776AB" d="M11.97 2c-4.27 0-3.99 1.85-3.99 1.85l.01 1.92h4.06v.57H6.34S4.04 6.05 4.04 10.32c0 4.27 2.01 4.13 2.01 4.13h1.2v-1.72s-.07-2.01 2.01-2.01h3.44s1.93.03 1.93-1.93V5.91S14.91 2 11.97 2zm-2.04 1.33a.77.77 0 1 1 0 1.54.77.77 0 0 1 0-1.54z" />
        <path fill="#FFD43B" d="M12.03 22c4.27 0 3.99-1.85 3.99-1.85l-.01-1.92h-4.06v-.57h5.71s2.3.29 2.3-3.98c0-4.27-2.01-4.13-2.01-4.13h-1.2v1.72s.07 2.01-2.01 2.01h-3.44s-1.93-.03-1.93 1.93v2.96S9.09 22 12.03 22zm2.04-1.33a.77.77 0 1 1 0-1.54.77.77 0 0 1 0 1.54z" />
      </svg>
    )
  }

  // FastAPI Fallback
  if (normalized.includes('fastapi')) {
    return (
      <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
        <path fill="#009688" d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm1.18 4.747a.573.573 0 0 1 .536.375l2.673 7.02a.574.574 0 0 1-.537.778h-3.088l-1.077 5.706a.574.574 0 0 1-1.074.153l-3.321-7.02a.574.574 0 0 1 .518-.819h3.33l.995-5.82a.574.574 0 0 1 .545-.373z" />
      </svg>
    )
  }

  // Django Fallback
  if (normalized.includes('django')) {
    return (
      <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
        <path fill="#092E20" className="dark:fill-[#44B78B]" d="M11.164 0h2.894v20.732h-2.894V0zm4.843 20.732h2.893v-6.726h-2.893v6.726zm0-8.899h2.893V0h-2.893v11.833zM6.302 10.963c-1.354 0-2.302.879-2.302 2.21 0 1.353.948 2.23 2.302 2.23 1.375 0 2.33-.877 2.33-2.23 0-1.331-.955-2.21-2.33-2.21zm0-2.333c2.947 0 5.109 2.012 5.109 4.543 0 2.553-2.162 4.564-5.109 4.564S1.193 15.726 1.193 13.173c0-2.531 2.162-4.543 5.109-4.543z" />
      </svg>
    )
  }

  // 4. Citus (Distributed Database Sharding Cluster)
  if (normalized.includes('citus')) {
    return (
      <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="5" r="3" fill="#0284C7" />
        <circle cx="5" cy="17" r="3" fill="#0284C7" />
        <circle cx="19" cy="17" r="3" fill="#0284C7" />
        <path d="M12 8v4M9.5 13.5L7 15M14.5 13.5L17 15" stroke="#0284C7" strokeWidth="2" strokeLinecap="round" />
        <circle cx="12" cy="12" r="1.5" fill="#008B8B" />
      </svg>
    )
  }

  // 5. PostgreSQL (Relational Database)
  if (normalized.includes('postgres') || normalized.includes('sql')) {
    return (
      <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
        <path fill="#4169E1" d="M18.825 5.568c-.684-1.282-1.854-2.232-3.197-2.738-1.343-.506-2.846-.464-4.148.116-1.302.58-2.327 1.62-2.825 2.923C8.157 7.172 8.168 8.68 8.688 9.98c-1.396.42-2.593 1.34-3.328 2.596C4.624 13.832 4.5 15.35 5.016 16.78c.516 1.43 1.547 2.597 2.872 3.25 1.325.653 2.868.747 4.263.26 1.395-.487 2.544-1.488 3.197-2.793.653-1.305.748-2.82.26-4.234 1.302-.58 2.327-1.62 2.825-2.923.498-1.303.487-2.81-.008-4.108v-.001zm-6.611 14.86c-1.074.375-2.26.303-3.28-.198s-1.812-1.398-2.209-2.497c-.397-1.099-.306-2.267.247-3.23.553-.963 1.474-1.67 2.548-1.993 1.074-.323 2.228-.2 3.205.343s1.674 1.442 1.944 2.535c.27 1.093.084 2.247-.518 3.197-.602.95-1.54 1.626-2.615 1.846h-.002z" />
      </svg>
    )
  }

  // Redis Fallback
  if (normalized.includes('redis')) {
    return (
      <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
        <path fill="#DC382D" d="M22.016 14.288c0-.608-.432-1.088-1.072-1.2l.016-1.52c.64-.112 1.056-.608 1.056-1.216 0-.688-.56-1.248-1.248-1.248h-7.664c-.688 0-1.248.56-1.248 1.248 0 .608.416 1.104 1.056 1.216l.016 1.52c-.64.112-1.072.592-1.072 1.2 0 .688.56 1.248 1.248 1.248h7.664c.688 0 1.248-.56 1.248-1.248zM12 0L1.6 4.16v4.16L12 12.48l10.4-4.16V4.16L12 0zm0 14.88L1.6 10.72v4.16L12 19.04l10.4-4.16v-4.16L12 14.88zM12 24l-10.4-4.16v-4.16L12 19.84l10.4-4.16v4.16L12 24z" />
      </svg>
    )
  }

  // Elasticsearch Fallback
  if (normalized.includes('elasticsearch')) {
    return (
      <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
        <path fill="#005571" d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-5.114 4.544h10.228c.45 0 .815.365.815.815v2.718a.815.815 0 0 1-.815.815H6.886a.815.815 0 0 1-.815-.815V5.359c0-.45.365-.815.815-.815zm0 5.438h10.228c.45 0 .815.365.815.815v2.718a.815.815 0 0 1-.815.815H6.886a.815.815 0 0 1-.815-.815V10.797c0-.45.365-.815.815-.815zm0 5.438h10.228c.45 0 .815.365.815.815v2.718a.815.815 0 0 1-.815.815H6.886a.815.815 0 0 1-.815-.815v-2.718c0-.45.365-.815.815-.815z" />
      </svg>
    )
  }

  // React Fallback
  if (normalized.includes('react')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="2.05" fill="#61DAFB" />
        <g stroke="#61DAFB" strokeWidth="1.2">
          <ellipse cx="12" cy="12" rx="9.5" ry="3.7" />
          <ellipse cx="12" cy="12" rx="9.5" ry="3.7" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="9.5" ry="3.7" transform="rotate(120 12 12)" />
        </g>
      </svg>
    )
  }

  // Next.js Fallback
  if (normalized.includes('next')) {
    return (
      <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
        <path fill="#000000" className="dark:fill-white" d="M18.665 21.978C16.758 23.275 14.467 24 12 24 5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12c0 3.06-.174 5.86-1.575 8.163l-8.628-11.758V7.5H12v9h1.8v-5.632l4.865 7.11zm-4.865-1.503L7.5 11.25V16.5H6V7.5h1.5l6.3 9.735v-6.96h1.5v10.2z" />
      </svg>
    )
  }

  // Docker Fallback
  if (normalized.includes('docker')) {
    return (
      <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
        <path fill="#2496ED" d="M13.983 11.078h2.119v2.119h-2.119zm-2.775 0h2.119v2.119h-2.119zm-2.776 0h2.119v2.119H8.432zm-2.776 0h2.119v2.119H5.656zm8.327-2.775h2.119v2.119h-2.119zm-2.775 0h2.119v2.119h-2.119zm-2.776 0h2.119v2.119H8.432zm5.551-2.776h2.119v2.119h-2.119zM.583 12.983s1.785-1.272 5.027-1.272c3.243 0 4.708 1.66 7.95 1.66 3.242 0 4.882-1.66 7.95-1.66 2.766 0 4.316 1.272 4.316 1.272s-1.062 4.85-5.313 6.242c-4.252 1.392-10.076.553-13.528-1.815C3.535 15.152.583 12.983.583 12.983z" />
      </svg>
    )
  }

  // Cloudflare (Hosting & Edge CDN)
  if (normalized.includes('cloudflare')) {
    return (
      <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
        <path fill="#F38020" d="M16.526 12.87c.046-.334.077-.678.077-1.026 0-3.321-2.693-6.014-6.014-6.014-2.732 0-5.029 1.834-5.74 4.339C2.126 10.568 0 12.834 0 15.652c0 3.233 2.621 5.854 5.854 5.854h12.316c3.233 0 5.854-2.621 5.854-5.854 0-3.081-2.384-5.6-5.498-5.782z" />
      </svg>
    )
  }

  // AWS Fallback
  if (normalized.includes('aws')) {
    return (
      <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
        <path fill="#FF9900" d="M18.75 14.5c-2.3 1.7-5.5 2.5-8.4 2.5-4.1 0-7.8-1.5-10.6-4.1-.2-.2-.3-.5-.1-.7.2-.2.5-.2.7 0 2.6 2.4 6 3.8 9.9 3.8 2.6 0 5.6-.7 7.7-2.2.3-.2.7-.1.9.2.1.2 0 .5-.1.5zm1.5-1.9c-.3-.4-1.9-.2-2.6 0-.2.1-.3 0-.2-.2.5-.8 1.8-.6 2.6-.2.4.2.5.6.3 1-.3.8-1.2 2-2.1 2.6-.2.1-.3 0-.2-.2.4-.7 1.4-2 2.2-3z" />
        <path fill="#232F3E" className="dark:fill-white" d="M7.2 12.3c0-1.1.2-1.9.7-2.4.5-.5 1.2-.8 2.2-.8 1.1 0 1.8.3 2.3.9V8.6h2v6.6h-1.9v-1c-.5.7-1.3 1.1-2.4 1.1-1 0-1.7-.3-2.2-.8-.5-.6-.7-1.4-.7-2.4zm2.1.1c0 .6.1 1 .4 1.3.3.3.7.4 1.2.4.6 0 1.1-.2 1.4-.6v-2.3c-.3-.4-.8-.6-1.4-.6-.5 0-.9.1-1.2.4-.3.3-.4.8-.4 1.4z" />
      </svg>
    )
  }

  // Playwright Fallback
  if (normalized.includes('playwright')) {
    return (
      <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
        <path fill="#2EAD33" d="M12.002 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-3.6 16.8V7.2l8.4 4.8-8.4 4.8z" />
      </svg>
    )
  }

  // Stripe Fallback
  if (normalized.includes('stripe')) {
    return (
      <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
        <path fill="#635BFF" d="M13.976 9.15c0-.851-.661-1.258-1.796-1.258-1.572 0-3.303.543-4.475 1.189L6.5 6.13c1.554-.925 3.731-1.536 5.86-1.536 3.901 0 6.326 1.954 6.326 5.097 0 4.7-6.425 5.253-6.425 7.962 0 .925.792 1.357 1.981 1.357 1.636 0 3.633-.679 4.887-1.424l1.173 2.981c-1.572.975-3.951 1.605-6.07 1.605-4.108 0-6.702-2.001-6.702-5.184 0-4.993 6.445-5.385 6.445-7.838z" />
      </svg>
    )
  }

  // TypeScript Fallback
  if (normalized.includes('typescript')) {
    return (
      <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
        <path fill="#3178C6" d="M0 0h24v24H0z" />
        <path fill="#FFFFFF" d="M1.5 1.5v21h21v-21h-21zm10.45 12.2h-3.45V19.5H6.2v-5.8H2.75v-2.3h9.2v2.3zm1.65 5.8l1.7-1c.4.7 1 1.1 1.9 1.1.8 0 1.3-.4 1.3-1 0-.6-.5-.9-1.6-1.3l-.6-.2c-1.7-.7-2.8-1.6-2.8-3.4 0-2 1.6-3.4 4-3.4 1.8 0 3 .6 3.8 1.9l-1.6 1c-.4-.7-1-1-2-1-.8 0-1.3.4-1.3 1 0 .6.4.9 1.5 1.3l.6.2c2 .8 3 1.7 3 3.5 0 2.2-1.7 3.6-4.4 3.6-2.2 0-3.8-.9-4.6-2.2z" />
      </svg>
    )
  }

  // JavaScript Fallback
  if (normalized.includes('javascript')) {
    return (
      <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
        <path fill="#F7DF1E" d="M0 0h24v24H0z" />
        <path fill="#000000" d="M6.75 18.27l1.77-1.07c.41.72.82 1.25 1.62 1.25.82 0 1.34-.41 1.34-1.44v-6.91h2.27v7.01c0 2.22-1.27 3.32-3.41 3.32-1.84 0-3.08-.94-3.59-2.16zm8.28 0l1.78-1.07c.52.84 1.34 1.34 2.45 1.34 1.05 0 1.66-.5 1.66-1.23 0-.82-.57-1.15-1.91-1.64l-.65-.25c-2.02-.75-3.32-1.88-3.32-4.12 0-2.34 1.83-4 4.54-4 2.01 0 3.44.75 4.34 2.24l-1.78 1.13c-.49-.78-1.21-1.19-2.42-1.19-1.01 0-1.68.49-1.68 1.17 0 .74.55 1.07 1.7 1.51l.65.25c2.34.88 3.52 2.01 3.52 4.22 0 2.62-1.99 4.12-5.02 4.12-2.52 0-4.24-1.03-5.07-2.42z" />
      </svg>
    )
  }

  // GitLab / CI/CD Fallback
  if (normalized.includes('gitlab') || normalized.includes('ci/cd')) {
    return (
      <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
        <path fill="#FC6D26" d="M23.955 13.587l-1.342-4.135-2.664-8.189c-.135-.417-.724-.417-.859 0L16.425 9.452H7.575L4.91.737c-.135-.417-.724-.417-.859 0L1.387 8.926.045 13.587a.972.972 0 0 0 .353 1.087l11.026 8.01a.972.972 0 0 0 1.152 0l11.026-8.01a.972.972 0 0 0 .353-1.087z" />
      </svg>
    )
  }

  // Nginx Fallback
  if (normalized.includes('nginx')) {
    return (
      <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
        <path fill="#009639" d="M12 0L1.608 6v12L12 24l10.392-6V6L12 0zm4.5 16.5l-4.875-7.313v7.313H9.75v-9h1.875l4.875 7.313V7.5h1.875v9H16.5z" />
      </svg>
    )
  }

  // Ubuntu Fallback
  if (normalized.includes('ubuntu')) {
    return (
      <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
        <path fill="#E95420" d="M12 0a12 12 0 1 0 12 12A12 12 0 0 0 12 0zm0 2.25a9.75 9.75 0 1 1-9.75 9.75A9.75 9.75 0 0 1 12 2.25z" />
        <circle cx="12" cy="6.75" r="1.5" fill="#E95420" />
        <circle cx="7.46" cy="14.61" r="1.5" fill="#E95420" />
        <circle cx="16.54" cy="14.61" r="1.5" fill="#E95420" />
      </svg>
    )
  }

  // Payload CMS Fallback
  if (normalized.includes('payload')) {
    return (
      <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
        <path fill="#000000" className="dark:fill-white" d="M12 0L1.608 6v12L12 24l10.392-6V6L12 0zm-1.5 6.75l6.75 5.25-6.75 5.25V6.75z" />
      </svg>
    )
  }

  // Redux Fallback
  if (normalized.includes('redux')) {
    return (
      <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
        <path fill="#764ABC" d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.5 13.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm-9 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
      </svg>
    )
  }

  // Polars / Pandas Fallback
  if (normalized.includes('polars') || normalized.includes('pandas')) {
    return (
      <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
        <rect width="24" height="24" rx="4" fill="#0369A1" />
        <path fill="#FFFFFF" d="M7 6h10v3H7V6zm0 5h10v3H7v-3zm0 5h10v2H7v-2z" />
      </svg>
    )
  }

  // Pytest Fallback
  if (normalized.includes('pytest')) {
    return (
      <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
        <path fill="#0096D6" d="M12 0L1.6 6v12L12 24l10.4-6V6L12 0zm-2 15l-4-4 1.4-1.4L10 12.2l6.6-6.6L18 7l-8 8z" />
      </svg>
    )
  }

  // OpenTelemetry / SigNoz Fallback
  if (normalized.includes('opentelemetry') || normalized.includes('signoz')) {
    return (
      <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
        <path fill="#F5A800" d="M12 0L2 6v12l10 6 10-6V6L12 0zm0 3.5L19 7.7v8.6L12 20.5 5 16.3V7.7L12 3.5z" />
      </svg>
    )
  }

  // Selenium Fallback
  if (normalized.includes('selenium')) {
    return (
      <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
        <path fill="#43B02A" d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm1 17h-2v-2h2v2zm0-4h-2V7h2v6z" />
      </svg>
    )
  }

  // 3. Ultimate Fallback: Clean, stylized code emblem
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#6366F1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  )
}
