export type ProjectCaseStudy = {
  slug: string
  title: string
  subtitle: string
  category: string
  period: string
  role: string
  liveLink: string
  tags: string[]
  overview: string
  problemsFaced: {
    title: string
    description: string
    impact: string
  }[]
  solutionsImplemented: {
    title: string
    architecture: string
    tradeOffs: string
  }[]
  takeawaysAndLearnings: {
    title: string
    insight: string
  }[]
  techStackDetailed: {
    name: string
    usage: string
  }[]
}

export const projectsData: Record<string, ProjectCaseStudy> = {
  'kipplo-b2b-data-tools': {
    slug: 'kipplo-b2b-data-tools',
    title: 'Kipplo B2B Data Tools',
    subtitle: 'High-speed public B2B lookup suite for emails, phone numbers, and company codes',
    category: 'Full-Stack Suite (Frontend & Backend)',
    period: '2024 – Present',
    role: 'Full-Stack Engineer (100% Backend & Frontend)',
    liveLink: 'https://www.kipplo.com/b2b-data-tools/',
    tags: ['Next.js', 'FastAPI', 'Elasticsearch', 'Redis', 'Tailwind CSS'],
    overview:
      'Kipplo B2B Data Tools is a suite of free, public-facing search utilities (Find LinkedIn Profile by Email, Phone Number Finder, Company SIC/NAICS Lookup) that allow growth teams and recruiters to instantly verify contacts without requiring a user login. I engineered 100% of both the Next.js frontend and the FastAPI/Elasticsearch/Redis backend.',
    problemsFaced: [
      {
        title: 'Sub-100ms Search Across 250M+ Records',
        description:
          'Standard database text search (SQL ILIKE queries or regex matching) was far too slow for instant public search across 250M+ profiles and 60M+ companies.',
        impact: 'Unoptimized queries were taking 2–4 seconds, causing high bounce rates for unauthenticated visitors.',
      },
      {
        title: 'Automated Scraping & API Resource Starvation',
        description:
          'Because the tools do not require authentication, automated web scrapers and bot traffic threatened to drain backend search memory and crash Elasticsearch clusters.',
        impact: 'Unrestricted access risked backend server overload and unauthorized data extraction at scale.',
      },
    ],
    solutionsImplemented: [
      {
        title: 'Elasticsearch Inverted Indices with Custom n-gram Tokenizers',
        architecture:
          'Configured specialized Elasticsearch indices for company names, domains, and personal profiles with custom edge-ngram tokenizers, BM25 text scoring, and fuzzy term matching.',
        tradeOffs:
          'Elasticsearch requires near-real-time index sync and higher RAM allocation, but delivers sub-100ms response times for complex fuzzy text searches.',
      },
      {
        title: 'Redis Sliding-Window Rate Limiting & Fingerprinting',
        architecture:
          'Built Redis-backed sliding-window rate limiters per IP address and client TLS fingerprint, enforcing a strict 3 free daily lookups policy per tool with bot detection headers.',
        tradeOffs:
          'Requires maintaining client IP state in Redis with short TTLs, but effectively blocks automated scrapers while providing zero friction for human users.',
      },
    ],
    takeawaysAndLearnings: [
      {
        title: 'Search Indexing Beats RDBMS Text Queries at Scale',
        insight:
          'Relational databases excel at ACID transactions, but inverted search indices (Elasticsearch/OpenSearch) are indispensable when querying un-normalized text across hundreds of millions of records.',
      },
      {
        title: 'Public Unauthenticated APIs Must Be Rate-Limited At The Edge',
        insight:
          'Never expose a public endpoint without edge or Redis-level rate-limiting. IP-based sliding windows combined with TLS fingerprinting save thousands of dollars in compute and prevent resource starvation.',
      },
      {
        title: 'SEO-Driven Free Tools Generate High Organic Pipeline',
        insight:
          'Providing frictionless, no-signup mini tools with instant value serves as a powerful top-of-funnel organic growth engine, converting casual searchers into platform subscribers.',
      },
    ],
    techStackDetailed: [
      { name: 'Next.js', usage: 'Server-side rendered frontend UI with instant search preview and clean responsive design.' },
      { name: 'FastAPI', usage: 'Async Python backend delivering lightweight, high-concurrency API endpoints.' },
      { name: 'Elasticsearch', usage: 'Inverted document indices powering sub-100ms text queries across 250M+ records.' },
      { name: 'Redis', usage: 'Sliding-window rate-limiting, session state, and fast transient caching.' },
      { name: 'Tailwind CSS', usage: 'Utility-first styling with dark mode support and custom micro-animations.' },
    ],
  },

  'kipplo-web-app': {
    slug: 'kipplo-web-app',
    title: 'Kipplo Core Web Application',
    subtitle: 'Real-time account intelligence & bulk contact enrichment engine',
    category: 'Core B2B Platform',
    period: '2024 – Present',
    role: 'Software Engineer (Backend & Architecture)',
    liveLink: 'https://app.kipplo.com',
    tags: ['FastAPI', 'PostgreSQL', 'Citus', 'Redis Streams', 'Polars', 'Stripe'],
    overview:
      'The primary B2B web platform powering Kipplo. Enables sales and marketing teams to search, reveal, and enrich millions of lead profiles with real-time verified email, phone, and company metadata.',
    problemsFaced: [
      {
        title: 'PostgreSQL Connection Exhaustion under High Concurrency',
        description:
          'Simultaneous bulk enrichment requests from hundreds of active users caused database connection pool exhaustion and query timeouts on a 300M+ row database.',
        impact: 'API error rates spiked during high-traffic business hours, causing dropped user requests.',
      },
      {
        title: 'Duplicate Charges & Webhook Replays in Billing System',
        description:
          'Network retries and concurrent user clicks during checkout triggered duplicate Stripe charge creation and credit allocation errors.',
        impact: 'Risk of financial inaccuracy and customer support complaints regarding double-billing.',
      },
    ],
    solutionsImplemented: [
      {
        title: 'Citus Horizontal Database Sharding + PgBouncer Pooling',
        architecture:
          'Migrated single PostgreSQL database to a Citus sharded cluster with distribution keys tuned for contact records, combined with PgBouncer transaction-level connection pooling.',
        tradeOffs:
          'Citus requires careful schema design (cross-shard joins can be expensive if distribution keys are mismatched), but scales read/write throughput horizontally across worker nodes.',
      },
      {
        title: 'Distributed Locks & Webhook Idempotency Keys',
        architecture:
          'Implemented Redis distributed locking (per-customer mutex) and Postgres-level unique idempotency keys on every transaction and credit deduction.',
        tradeOffs:
          'Adds a minor latency overhead (~5ms) for Redis lock acquire/release, but guarantees 100% transaction safety under concurrent calls.',
      },
    ],
    takeawaysAndLearnings: [
      {
        title: 'Database Sharding Requires Upfront Query Pattern Analysis',
        insight:
          'Sharding is not magic — choosing the right distribution key (e.g. `tenant_id` or `company_id`) determines whether queries execute on a single node or trigger expensive multi-node fan-outs.',
      },
      {
        title: 'Financial Workflows Demand Strict Idempotency',
        insight:
          'Always assume webhooks will arrive multiple times or out of order. Store idempotency keys at the database boundary before mutating user balances.',
      },
    ],
    techStackDetailed: [
      { name: 'Python / FastAPI', usage: 'Async backend service handling authentication, credit deduction, and API routing.' },
      { name: 'PostgreSQL & Citus', usage: 'Horizontally sharded transactional database storing 300M+ contact records.' },
      { name: 'Redis Streams', usage: 'Event-driven job queues for bulk asynchronous background enrichment tasks.' },
      { name: 'Polars', usage: 'High-speed, zero-copy streaming CSV parsing for 1M+ row lead imports.' },
      { name: 'Stripe API', usage: 'Subscription billing, metered usage, credit purchasing, and webhook handlers.' },
    ],
  },

  'kipplo-chrome-extension': {
    slug: 'kipplo-chrome-extension',
    title: 'Kipplo Chrome Extension',
    subtitle: 'Real-time LinkedIn contact reveal browser utility',
    category: 'Browser Utility',
    period: '2024 – Present',
    role: 'Frontend & Browser Engineer',
    liveLink: 'https://chromewebstore.google.com/detail/kipplo-an-ai-powered-inte/mfilcfngbefbaeggcglepgdklgdffeih',
    tags: ['React.js', 'Redux', 'TypeScript', 'Chrome Extension Manifest V3'],
    overview:
      'A production Chrome extension used by 700+ professionals to reveal verified B2B email addresses and direct phone numbers directly on LinkedIn profile pages.',
    problemsFaced: [
      {
        title: 'DOM Dynamic Mutations & Page Layout Shifts on LinkedIn',
        description:
          'LinkedIn frequently updates its single-page application DOM structure, causing hardcoded selector scripts to break or inject duplicate UI elements.',
        impact: 'Extension buttons would disappear or crash when users navigated between profile tabs.',
      },
    ],
    solutionsImplemented: [
      {
        title: 'Resilient MutationObserver & Shadow DOM Injection',
        architecture:
          'Built custom MutationObserver trees that detect profile element mounts dynamically and inject UI widgets inside an isolated Shadow DOM container.',
        tradeOffs:
          'Shadow DOM styling requires explicit CSS injection, but completely insulates extension styles from LinkedIn global CSS overrides.',
      },
    ],
    takeawaysAndLearnings: [
      {
        title: 'Shadow DOM Prevents Style Pollution in Extension Engineering',
        insight:
          'When building browser extensions that overlay third-party websites, mounting inside a Shadow Root is mandatory to prevent stylesheet collisions.',
      },
      {
        title: 'Local Client Caching Minimizes Unnecessary API Costs',
        insight:
          'Caching profile lookup responses in extension local storage avoids repeat API calls when users revisit profiles in the same session.',
      },
    ],
    techStackDetailed: [
      { name: 'React.js & TypeScript', usage: 'Component-driven extension popup and embedded profile overlay UI.' },
      { name: 'Redux Toolkit', usage: 'Async state management for credits, user authentication, and search history.' },
      { name: 'Chrome Extension V3', usage: 'Service worker background scripts and content script messaging.' },
    ],
  },

  'kipplo-discover': {
    slug: 'kipplo-discover',
    title: 'Kipplo Discover Directory',
    subtitle: 'Programmatic SEO directory indexing companies & industry profiles',
    category: 'Programmatic SEO Platform',
    period: '2024 – Present',
    role: 'Full-Stack Engineer',
    liveLink: 'https://discover.kipplo.com',
    tags: ['Next.js', 'Payload CMS', 'FastAPI', 'Nginx Cache'],
    overview:
      'A massive, public-facing programmatic SEO directory indexing millions of company profiles and industry categories for search engine crawlers.',
    problemsFaced: [
      {
        title: 'High Server Load from Crawler Traffic',
        description:
          'Search engine crawlers (Googlebot, Bingbot) making tens of thousands of requests per minute overloaded dynamic application servers.',
        impact: 'High CPU utilization and slow response times for organic human visitors.',
      },
    ],
    solutionsImplemented: [
      {
        title: 'Nginx Stale-While-Revalidate Caching Layer',
        architecture:
          'Configured Nginx reverse-proxy microcaching with `stale-while-revalidate` directives, serving static responses to crawlers directly from memory.',
        tradeOffs:
          'Data changes may take up to 10 minutes to propagate to crawlers, but reduces backend server load by over 85%.',
      },
    ],
    takeawaysAndLearnings: [
      {
        title: 'Microcaching Protects Core Systems From Crawler Spikes',
        insight:
          'Serving dynamic SEO pages through an Nginx memory cache allows millions of pages to be indexed without overloading application databases.',
      },
    ],
    techStackDetailed: [
      { name: 'Next.js (App Router)', usage: 'Fast static page generation with dynamic metadata tags.' },
      { name: 'Payload CMS', usage: 'Headless CMS managing custom page templates and industry category hierarchies.' },
      { name: 'Nginx', usage: 'Edge caching, rate limiting, and reverse proxy routing.' },
    ],
  },
}
