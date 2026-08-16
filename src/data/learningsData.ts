export type TechLearning = {
  slug: string
  title: string
  subtitle: string
  category: string
  iconName: string
  howILearned: string
  topResources: {
    title: string
    authorOrPlatform: string
    type: 'Book' | 'Documentation' | 'Course' | 'Article'
    link: string
    whyItMatters: string
  }[]
  coreMentalModels: {
    concept: string
    explanation: string
  }[]
  productionLessons: {
    pitfall: string
    solution: string
  }[]
}

export const learningsData: Record<string, TechLearning> = {
  'python-fastapi': {
    slug: 'python-fastapi',
    title: 'Python, Async I/O & FastAPI',
    subtitle: 'High-concurrency backend services, asynchronous task queues & pydantic data validation',
    category: 'Backend Development',
    iconName: 'ServerCog',
    howILearned:
      'I mastered Python and async backend engineering through deep hands-on project building after graduating with a Mechanical Engineering degree. I studied Python internals, the asyncio event loop, and FastAPI source patterns while building real production services at Kipplo.',
    topResources: [
      {
        title: 'FastAPI Official Documentation & Tutorial',
        authorOrPlatform: 'Sebastián Ramírez (tiangolo)',
        type: 'Documentation',
        link: 'https://fastapi.tiangolo.com/',
        whyItMatters: 'The gold standard for API documentation — teaches async request handling, dependency injection, and Pydantic schemas.',
      },
      {
        title: 'Fluent Python (2nd Edition)',
        authorOrPlatform: 'Luciano Ramalho (O\'Reilly)',
        type: 'Book',
        link: 'https://www.oreilly.com/library/view/fluent-python-2nd/9781492056348/',
        whyItMatters: 'Deep dive into Python data model, generators, coroutines, and GIL/multiprocessing concurrency.',
      },
      {
        title: 'Python Concurrency with asyncio',
        authorOrPlatform: 'Matthew Fowler (Manning)',
        type: 'Book',
        link: 'https://www.manning.com/books/python-concurrency-with-asyncio',
        whyItMatters: 'Teaches non-blocking event loops, async database drivers (asyncpg/aioredis), and async pool management.',
      },
    ],
    coreMentalModels: [
      {
        concept: 'The asyncio Event Loop vs Threads',
        explanation:
          'Async I/O in Python is single-threaded cooperative multitasking. You yield control back to the event loop using `await` during I/O operations (network, DB queries). Blocking synchronous functions (like regular file reads) block the entire thread and must be offloaded to worker pools via `run_in_executor`.',
      },
      {
        concept: 'Dependency Injection in FastAPI',
        explanation:
          'FastAPI `Depends()` allows request-scoped resource sharing (DB sessions, authentication tokens, Redis clients) with automatic cleanup and seamless unit testing mock overrides.',
      },
    ],
    productionLessons: [
      {
        pitfall: 'Accidentally invoking synchronous blocking functions inside `async def` endpoints.',
        solution: 'Always use async native drivers (`asyncpg`, `httpx`, `aioredis`) or wrap sync functions in `starlette.concurrency.run_in_threadpool`.',
      },
    ],
  },

  'postgresql-citus': {
    slug: 'postgresql-citus',
    title: 'PostgreSQL, Citus Sharding & Database Tuning',
    subtitle: 'Relational data modeling, horizontal sharding across 300M+ rows, indexing & connection pooling',
    category: 'Database Systems',
    iconName: 'Database',
    howILearned:
      'Learned relational database internals by optimizing heavy analytical and transactional workloads at Kipplo — migrating single-node PostgreSQL databases to sharded Citus clusters and tuning PgBouncer pools under high concurrency.',
    topResources: [
      {
        title: 'Designing Data-Intensive Applications',
        authorOrPlatform: 'Martin Kleppmann (O\'Reilly)',
        type: 'Book',
        link: 'https://dataintensive.net/',
        whyItMatters: 'The essential guide to database internals, B-trees, WAL logs, partition strategies, and distributed transactions.',
      },
      {
        title: 'Citus Official Sharding Architecture Guide',
        authorOrPlatform: 'Microsoft Citus Data',
        type: 'Documentation',
        link: 'https://docs.citusdata.com/',
        whyItMatters: 'Explains how distribution keys, worker nodes, and co-located tables prevent expensive cross-shard joins.',
      },
      {
        title: 'Use The Index, Luke!',
        authorOrPlatform: 'Markus Winand',
        type: 'Article',
        link: 'https://use-the-index-luke.com/',
        whyItMatters: 'Practical guide to SQL indexing, B-Tree lookups, partial index optimization, and EXPLAIN ANALYZE interpretation.',
      },
    ],
    coreMentalModels: [
      {
        concept: 'Distribution Keys in Sharded Databases',
        explanation:
          'In Citus PostgreSQL sharding, selecting the correct distribution column ensures related records land on the same physical worker node, enabling local joins instead of distributed cross-node network traffic.',
      },
      {
        concept: 'PgBouncer Transaction Pooling vs Session Pooling',
        explanation:
          'Transaction pooling reuses backend database connections the instant a query finishes, allowing thousands of application threads to share a small pool of 50-100 PostgreSQL backend processes.',
      },
    ],
    productionLessons: [
      {
        pitfall: 'Missing index on foreign keys causing full table scans during sharded updates.',
        solution: 'Regularly audit `pg_stat_statements` and use `EXPLAIN (ANALYZE, BUFFERS)` to catch missing B-tree indexes early.',
      },
    ],
  },

  'redis-streams': {
    slug: 'redis-streams',
    title: 'Redis Streams, Caching & Distributed Locking',
    subtitle: 'Event-driven job queues, consumer groups, pub/sub & mutex locks',
    category: 'Caching & Messaging',
    iconName: 'Workflow',
    howILearned:
      'Mastered Redis through implementing high-throughput background enrichment pipelines at Kipplo — using Redis Streams for ordered worker queues, Redlock for distributed idempotency, and negative caching to protect PostgreSQL.',
    topResources: [
      {
        title: 'Redis Official Documentation & Data Types Guide',
        authorOrPlatform: 'Redis.io',
        type: 'Documentation',
        link: 'https://redis.io/docs/',
        whyItMatters: 'Covers in-memory data structures, streams consumer groups, eviction policies (LRU/LFU), and persistence (RDB/AOF).',
      },
      {
        title: 'Distributed Locks with Redis (Redlock Algorithm)',
        authorOrPlatform: 'Salvatore Sanfilippo (antirez)',
        type: 'Article',
        link: 'https://redis.io/topics/distlock',
        whyItMatters: 'Explains mutex locking, lease time renewal, and idempotency guarantees in distributed applications.',
      },
    ],
    coreMentalModels: [
      {
        concept: 'Redis Streams Consumer Groups',
        explanation:
          'Streams provide log-based message persistence. Consumer groups distribute incoming messages across worker nodes, tracking pending acknowledgments (`XACK`) to prevent job loss on node failures.',
      },
    ],
    productionLessons: [
      {
        pitfall: 'Cache stampede (thundering herd) when a popular key expires simultaneously.',
        solution: 'Implement probabilistic early expiration (XFetch) or short mutex locks during cache miss re-computation.',
      },
    ],
  },

  'polars-data': {
    slug: 'polars-data',
    title: 'Polars & High-Throughput Data Ingestion',
    subtitle: 'Zero-copy arrow memory models, lazy evaluation & streaming CSV processing for 1M+ rows',
    category: 'Data Engineering',
    iconName: 'Table',
    howILearned:
      'Discovered Polars while fixing Out-of-Memory (OOM) crashes in Kipplo\'s lead import pipeline. Replaced Pandas eager memory allocation with Polars lazy streaming, cutting execution time and stabilizing memory footprint.',
    topResources: [
      {
        title: 'Polars Official Book & User Guide',
        authorOrPlatform: 'Ritchie Vink & Polars Team',
        type: 'Documentation',
        link: 'https://docs.pola.rs/',
        whyItMatters: 'Complete guide to Apache Arrow column memory, SIMD vectorization, and lazy query optimization.',
      },
    ],
    coreMentalModels: [
      {
        concept: 'Eager vs Lazy Execution Engine',
        explanation:
          'Lazy execution builds an abstract syntax tree of data transformations before running, allowing the Polars query optimizer to push down filters, eliminate unused columns, and stream file chunks without fitting the whole file in RAM.',
      },
    ],
    productionLessons: [
      {
        pitfall: 'Loading multi-gigabyte CSVs into memory using default Pandas `read_csv()`.',
        solution: 'Use `polars.scan_csv()` with batch streaming to process data in fixed-size memory windows.',
      },
    ],
  },

  'elasticsearch': {
    slug: 'elasticsearch',
    title: 'Elasticsearch & Search Engineering',
    subtitle: 'Inverted indices, custom analyzers, fuzzy text matching & sub-100ms document retrieval',
    category: 'Search Systems',
    iconName: 'Search',
    howILearned:
      'Engineered Kipplo\'s B2B Data Tools search backend over 250M+ contact profiles and 60M+ company records — configuring custom n-gram tokenizers, edge-ngram analyzers, and multi-field scoring rules.',
    topResources: [
      {
        title: 'Elasticsearch: The Definitive Guide',
        authorOrPlatform: 'Clinton Gormley & Zachary Tong (O\'Reilly)',
        type: 'Book',
        link: 'https://www.elastic.co/guide/en/elasticsearch/guide/current/index.html',
        whyItMatters: 'The classic reference on Lucene inverted indices, TF/IDF & BM25 scoring, mapping types, and cluster sharding.',
      },
    ],
    coreMentalModels: [
      {
        concept: 'Inverted Index Data Structure',
        explanation:
          'An inverted index maps terms/words to document IDs, allowing instant lookups without scanning document bodies row-by-row.',
      },
    ],
    productionLessons: [
      {
        pitfall: 'Mapping explosions caused by dynamic field indexing.',
        solution: 'Define strict explicit JSON schemas for search indices and set `dynamic: false` on unindexed nested fields.',
      },
    ],
  },

  'docker-devops': {
    slug: 'docker-devops',
    title: 'Docker, Ubuntu VPS & CI/CD Pipelines',
    subtitle: 'Containerization, Nginx reverse proxying, GitLab CI/CD & zero-downtime deployments',
    category: 'DevOps & Cloud Systems',
    iconName: 'ShieldCheck',
    howILearned:
      'Built and managed production infrastructure deploying 10+ microservices across dedicated Ubuntu VPS servers via GitLab CI/CD, Nginx SSL reverse proxies, and systemd process management.',
    topResources: [
      {
        title: 'Docker Official Documentation & Best Practices',
        authorOrPlatform: 'Docker Inc.',
        type: 'Documentation',
        link: 'https://docs.docker.com/',
        whyItMatters: 'Multi-stage Dockerfile builds, layer caching, non-root security containers, and Docker Compose networking.',
      },
    ],
    coreMentalModels: [
      {
        concept: 'Immutable Infrastructure & Staged Deployment',
        explanation:
          'Containers guarantee that the exact binary/code tested in CI runs identically in production, removing "works on my machine" bugs.',
      },
    ],
    productionLessons: [
      {
        pitfall: 'Bloated Docker images causing slow deployment rollouts.',
        solution: 'Use multi-stage builds (`golang:alpine` or `python:slim`) and leverage Docker layer cache during CI steps.',
      },
    ],
  },

  'react-nextjs': {
    slug: 'react-nextjs',
    title: 'React, Next.js & Frontend Architecture',
    subtitle: 'Server Components, App Router, Redux async state management & Tailwind CSS systems',
    category: 'Frontend Engineering',
    iconName: 'Code2',
    howILearned:
      'Developed Kipplo\'s core B2B dashboard, Chrome Extension UI, and programmatic SEO Discover pages using React, Redux Toolkit, Next.js App Router, and Tailwind CSS.',
    topResources: [
      {
        title: 'Next.js Official Documentation (App Router)',
        authorOrPlatform: 'Vercel',
        type: 'Documentation',
        link: 'https://nextjs.org/docs',
        whyItMatters: 'Covers React Server Components, Streaming SSR, dynamic routing, metadata API, and static site generation.',
      },
    ],
    coreMentalModels: [
      {
        concept: 'React Server Components vs Client Components',
        explanation:
          'Server Components fetch data on the server with zero client JS bundle overhead. Client Components (`use client`) handle interactive state, browser event listeners, and local UI state.',
      },
    ],
    productionLessons: [
      {
        pitfall: 'Over-rendering React trees due to un-memoized object props or top-level state changes.',
        solution: 'Lift state down, isolate dynamic inputs, and use standard React devtools profiler to identify render bottlenecks.',
      },
    ],
  },
}
