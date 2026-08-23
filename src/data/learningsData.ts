export type TechLearning = {
  slug: string
  title: string
  subtitle: string
  category: string
  iconName: string
  howILearned: string
  tags?: string[]
  githubRepoLink?: string
  productionMetrics?: {
    label: string
    value: string
    description: string
  }[]
  architectureDiagram?: {
    title: string
    steps: { step: string; detail: string }[]
  }
  codeTabs?: {
    title: string
    filename: string
    code: string
    explanation: string
  }[]
  codeBlueprint?: {
    language: string
    filename: string
    code: string
    explanation: string
  }
  topResources: {
    title: string
    authorOrPlatform: string
    type: 'Book' | 'Documentation' | 'Course' | 'YouTube' | 'Article'
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
    subtitle: 'High-concurrency backend services, asynchronous task queues & Pydantic v2 validation',
    category: 'Backend Development',
    iconName: 'ServerCog',
    tags: ['FastAPI', 'Python 3.12', 'AsyncPG', 'Pydantic v2', 'Redis', 'Docker', 'Pytest', 'OpenAPI / Swagger'],
    githubRepoLink: 'https://github.com/ahammed03',
    howILearned:
      'I transitioned from Mechanical Engineering into software engineering by studying Python internals, the asyncio event loop, and REST API architectural patterns. I built hands-on projects, read primary documentation, and applied these learnings directly to build production backend microservices at Kipplo.',
    productionMetrics: [
      {
        label: 'API Throughput & P95 Latency',
        value: '1,500+ RPS / <50ms P95',
        description: 'Engineered non-blocking async FastAPI endpoints serving over 1,500 requests/sec with p95 response time under 50ms.',
      },
      {
        label: 'DB Connection Overhead Reduction',
        value: '35% Reduction',
        description: 'Migrated synchronous ORM calls to native AsyncPG connection pooling, drastically reducing database connection overhead under high concurrency.',
      },
      {
        label: 'Test Suite Coverage & CI/CD Safety',
        value: '>85% Pytest Coverage',
        description: 'Enforced >85% test coverage using pytest-asyncio and automated OpenAPI schema drift checks in GitHub Actions CI/CD pipelines.',
      },
    ],
    architectureDiagram: {
      title: 'High-Concurrency FastAPI Request Architecture',
      steps: [
        { step: '1. Client Request', detail: 'HTTP/2 incoming request passes through Nginx reverse proxy & Redis sliding-window rate limiter.' },
        { step: '2. FastAPI / Starlette Event Loop', detail: 'Single-threaded async event loop parses headers & matches route without thread allocation overhead.' },
        { step: '3. Pydantic v2 Rust Engine', detail: 'C-level validation validates incoming JSON payload via pydantic-core at 5–10x speed over v1.' },
        { step: '4. AsyncPG Connection Pool', detail: 'Leases non-blocking PostgreSQL connection from AsyncPG pool, committing transaction on yield return.' },
        { step: '5. Workload Isolation (If Heavy)', detail: 'Offloads CPU-heavy tasks (e.g. 500MB CSV parsing) to Redis Streams / ProcessPool workers.' },
      ],
    },
    codeTabs: [
      {
        title: '1. DB Dependency',
        filename: 'dependencies/database.py',
        code: `from contextlib import asynccontextmanager
from typing import AsyncGenerator
from sqlalchemy.ext.asyncio import create_async_engine, AsyncSession, async_sessionmaker

DATABASE_URL = "postgresql+asyncpg://user:pass@localhost:5432/kipplo_db"

engine = create_async_engine(DATABASE_URL, pool_size=20, max_overflow=10, pool_pre_ping=True)
AsyncSessionFactory = async_sessionmaker(bind=engine, class_=AsyncSession, expire_on_commit=False)

# Async Context Manager for Database Session Leasing & Rollback
async def get_db_session() -> AsyncGenerator[AsyncSession, None]:
    async with AsyncSessionFactory() as session:
        try:
            yield session
            await session.commit()
        except Exception:
            await session.rollback()
            raise`,
        explanation:
          'FastAPI dependency injection with an async context manager leases connections from the AsyncPG pool, commits on success, and guarantees database rollback on exceptions — preventing connection leaks and keeping transaction boundaries clean.',
      },
      {
        title: '2. Pydantic v2 Schema',
        filename: 'schemas/enrichment.py',
        code: `from pydantic import BaseModel, EmailStr, Field, model_validator
from typing import Self

class EnrichRequestSchema(BaseModel):
    email: EmailStr = Field(..., description="Target contact email address")
    domain: str = Field(..., min_length=3, description="Company domain name")
    include_phone: bool = Field(default=False)

    @model_validator(mode='before')
    @classmethod
    def sanitize_input(cls, data: dict) -> dict:
        if isinstance(data, dict):
            if 'domain' in data and isinstance(data['domain'], str):
                data['domain'] = data['domain'].lower().strip().replace('https://', '').replace('http://', '')
        return data

    class Config:
        frozen = True`,
        explanation:
          'Utilizes Pydantic v2 Rust-backed `model_validator(mode="before")` for fast input sanitization before type parsing, ensuring strict data boundaries before database lookups.',
      },
      {
        title: '3. FastAPI Route Handler',
        filename: 'api/v1/enrich.py',
        code: `from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.ext.asyncio import AsyncSession
from dependencies.database import get_db_session
from schemas.enrichment import EnrichRequestSchema

router = APIRouter(prefix="/v1", tags=["Enrichment"])

@router.post("/enrich", status_code=status.HTTP_200_OK)
async def enrich_contact(
    payload: EnrichRequestSchema,
    db: AsyncSession = Depends(get_db_session)
):
    result = await db.execute(...) # Non-blocking AsyncPG query
    if not result:
        raise HTTPException(status_code=404, detail="Contact record not found")
    return {"status": "success", "data": result}`,
        explanation:
          'The route handler binds Pydantic v2 schema validation, dependency-injected AsyncPG DB sessions, and async exception handling into an end-to-end type-safe endpoint.',
      },
    ],
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
        title: 'Backend Engineering & System Design Series',
        authorOrPlatform: 'Harkirat Singh (YouTube)',
        type: 'YouTube',
        link: 'https://www.youtube.com/@harkirat1',
        whyItMatters: 'Practical real-world explanations of HTTP servers, async queues, DB connections, and backend scalability.',
      },
    ],
    coreMentalModels: [
      {
        concept: 'The asyncio Event Loop vs OS Threads',
        explanation:
          'Async I/O in Python is single-threaded cooperative multitasking. You yield control back to the event loop using `await` during I/O operations (network, DB queries). Blocking synchronous functions block the thread and must be offloaded to worker pools.',
      },
      {
        concept: 'Pydantic v2 Rust Core Validation (`pydantic-core`)',
        explanation:
          'Pydantic v2 rewrote its internal validation engine in Rust (`pydantic-core`). Using `model_validator(mode="before")` allows raw dictionary transformation prior to type parsing, resulting in 5–10x faster JSON validation under high concurrency.',
      },
      {
        concept: 'OpenAPI Schema Drift Checks in CI/CD',
        explanation:
          'Automated OpenAPI schema diffing inside CI/CD pipelines ensures that endpoint refactors never break consumer SDKs or external integration contracts.',
      },
      {
        concept: 'CPU-Bound vs I/O-Bound Workload Isolation',
        explanation:
          'Use `asyncio` for non-blocking network I/O (REST API calls, DB queries). For heavy CPU tasks (like parsing 500MB CSV files or image manipulation), delegate processing to `ProcessPoolExecutor` or background worker queues like Redis Streams / ARQ / Celery to prevent blocking the event loop.',
      },
      {
        concept: 'Testing Async APIs with Pytest & Httpx',
        explanation:
          'Enforce >85% test coverage using `pytest-asyncio` combined with `httpx.AsyncClient` to execute end-to-end API tests against async routes in memory, mocking external third-party services with dependency overrides.',
      },
    ],
    productionLessons: [
      {
        pitfall: 'Accidentally invoking synchronous blocking functions inside `async def` endpoints.',
        solution: 'Always use async native drivers (`asyncpg`, `httpx`, `aioredis`) or wrap sync functions in `starlette.concurrency.run_in_threadpool`.',
      },
      {
        pitfall: 'Unrestricted endpoint access leading to API resource exhaustion from bots.',
        solution: 'Implement Redis-backed sliding window rate limiters per IP/fingerprint to enforce strict quota bounds at the edge.',
      },
    ],
  },

  'redis-streams': {
    slug: 'redis-streams',
    title: 'Redis Streams, Caching & Distributed Locking',
    subtitle: 'Event-driven job queues, consumer groups, pub/sub & mutex locks',
    category: 'Caching & Messaging',
    iconName: 'Workflow',
    tags: ['Redis Streams', 'Redis Sentinel', 'Redlock', 'Pub/Sub', 'Python aioredis', 'In-Memory Cache'],
    githubRepoLink: 'https://github.com/ahammed03',
    howILearned:
      'Learned in-memory architectures by studying Redis documentation, distributed systems papers, and online queue architecture tutorials, then applying them to implement high-throughput background enrichment pipelines at Kipplo — using Redis Streams for ordered worker queues and Redlock for distributed idempotency.',
    productionMetrics: [
      {
        label: 'Message Delivery Guarantee',
        value: 'At-Least-Once / Zero Loss',
        description: 'Implemented Redis Streams consumer groups with pending entry tracking (PEL) and dead-letter retry logic for 100% job recovery on worker crashes.',
      },
      {
        label: 'Duplicate Charge Prevention',
        value: '0 Duplicate Webhooks',
        description: 'Enforced Redis distributed locks with per-customer mutex keys during Stripe webhook callbacks.',
      },
    ],
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
      {
        title: 'Redis Streams & Pub/Sub Queue Deep Dive',
        authorOrPlatform: 'Harkirat Singh (YouTube)',
        type: 'YouTube',
        link: 'https://www.youtube.com/@harkirat1',
        whyItMatters: 'Practical walkthrough of message queues, worker consumer groups, and managing state in Redis.',
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

  'postgresql-citus': {
    slug: 'postgresql-citus',
    title: 'PostgreSQL, Citus Sharding & Database Tuning',
    subtitle: 'Relational data modeling, horizontal sharding across 300M+ rows, indexing & connection pooling',
    category: 'Database Systems',
    iconName: 'Database',
    tags: ['PostgreSQL 16', 'Citus Sharding', 'PgBouncer', 'AsyncPG', 'B-Tree Indexes', 'EXPLAIN ANALYZE'],
    githubRepoLink: 'https://github.com/ahammed03',
    howILearned:
      'Learned relational database internals by reading foundational database literature, studying EXPLAIN query plans, and migrating single-node PostgreSQL databases to sharded Citus clusters at Kipplo.',
    productionMetrics: [
      {
        label: 'Query Latency Reduction',
        value: '~40% Latency Cut',
        description: 'Reduced p95 query latency under heavy concurrency on a 300M+ row dataset by sharding tables and tuning worker node affinity.',
      },
    ],
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
      {
        title: 'Postgres Indexing & Database Architecture',
        authorOrPlatform: 'Harkirat Singh (YouTube)',
        type: 'YouTube',
        link: 'https://www.youtube.com/@harkirat1',
        whyItMatters: 'Clear breakdown of database indexing, query execution, connection pools, and raw SQL performance.',
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

  'docker-devops': {
    slug: 'docker-devops',
    title: 'Docker, Ubuntu VPS & CI/CD Pipelines',
    subtitle: 'Containerization, Nginx reverse proxying, GitLab CI/CD & zero-downtime deployments',
    category: 'DevOps & Cloud Systems',
    iconName: 'ShieldCheck',
    tags: ['Docker', 'GitLab CI/CD', 'Nginx', 'Ubuntu VPS', 'Systemd', 'SSL / Certbot'],
    githubRepoLink: 'https://github.com/ahammed03',
    howILearned:
      'Mastered containerization and VPS deployments through Docker documentation, Linux administration guides, hands-on building, and managing production services across Ubuntu VPS servers at Kipplo.',
    topResources: [
      {
        title: 'Docker Official Documentation & Best Practices',
        authorOrPlatform: 'Docker Inc.',
        type: 'Documentation',
        link: 'https://docs.docker.com/',
        whyItMatters: 'Multi-stage Dockerfile builds, layer caching, non-root security containers, and Docker Compose networking.',
      },
      {
        title: 'Complete Docker & DevOps Masterclass',
        authorOrPlatform: 'Harkirat Singh (YouTube)',
        type: 'YouTube',
        link: 'https://www.youtube.com/@harkirat1',
        whyItMatters: 'Step-by-step tutorials on Docker, Nginx reverse proxies, SSL certificates, and deploying apps on Linux VPS.',
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

  'polars-data': {
    slug: 'polars-data',
    title: 'Polars & High-Throughput Data Ingestion',
    subtitle: 'Zero-copy arrow memory models, lazy evaluation & streaming CSV processing for 1M+ rows',
    category: 'Data Engineering',
    iconName: 'Table',
    tags: ['Polars', 'Apache Arrow', 'Lazy Evaluation', 'CSV Streaming', 'Python Data Processing'],
    githubRepoLink: 'https://github.com/ahammed03',
    howILearned:
      'Discovered Polars while fixing Out-of-Memory (OOM) crashes in Kipplo\'s lead import pipeline. Studied Apache Arrow memory concepts and Polars docs to replace Pandas eager memory allocation with Polars lazy streaming.',
    productionMetrics: [
      {
        label: 'Memory Optimization',
        value: '0 OOM Heap Crashes',
        description: 'Replaced Pandas eager CSV parsing with Polars chunked streaming engine, ensuring flat memory consumption regardless of file size.',
      },
    ],
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
    tags: ['Elasticsearch 8', 'Inverted Index', 'Edge N-Gram', 'Lucene', 'Fuzzy Search', 'BM25 Scoring'],
    githubRepoLink: 'https://github.com/ahammed03',
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

  'react-js': {
    slug: 'react-js',
    title: 'React.js, Virtual DOM & Redux State Management',
    subtitle: 'Virtual DOM Reconciliation, Fiber Architecture, Redux Toolkit Async Thunks, Hydration Errors & Custom Hooks',
    category: 'Frontend Engineering',
    iconName: 'Code2',
    tags: ['React 19', 'Virtual DOM', 'Fiber Engine', 'Redux Toolkit', 'Hydration', 'Custom Hooks', 'TypeScript'],
    githubRepoLink: 'https://github.com/ahammed03',
    howILearned:
      'Mastered React internals by building Kipplo\'s interactive dashboard, Chrome extension popups, and state-heavy web interfaces. Studied React Fiber reconciliation, Virtual DOM diffing, Redux Toolkit async thunks, and solved complex client-side hydration mismatch bugs.',
    productionMetrics: [
      {
        label: 'Redux Dispatch Execution',
        value: '< 2ms',
        description: 'Achieved ultra-fast state mutations with Redux Toolkit normalized slices and Immer immutable updates.',
      },
      {
        label: 'DOM Reconciliation Savings',
        value: '65%',
        description: 'Reduced unneeded browser DOM mutations by lifting state down and memoizing selector sub-trees.',
      },
      {
        label: 'Client Hydration Stability',
        value: '100%',
        description: 'Eliminated server vs client hydration crashes by isolating browser-only state inside useEffect & useSyncExternalStore.',
      },
    ],
    architectureDiagram: {
      title: 'React Fiber & Virtual DOM Reconciliation Pipeline',
      steps: [
        {
          step: '1. State / Action Dispatch',
          detail: 'User action triggers `dispatch()` or `setState()`. React schedules a work loop in the Fiber tree.',
        },
        {
          step: '2. Render / Diffing Phase',
          detail: 'React constructs a new Virtual DOM tree in memory and diffs Fiber nodes without touching the real browser DOM.',
        },
        {
          step: '3. Commit Phase',
          detail: 'React applies minimal batched DOM updates to the browser DOM in a single synchronous commit.',
        },
        {
          step: '4. Hydration & Event Delegation',
          detail: 'React attaches root synthetic event listeners to server HTML, linking client state to existing DOM nodes.',
        },
      ],
    },
    codeTabs: [
      {
        title: 'Redux Toolkit Store & Async Thunk',
        filename: 'store/contactsSlice.ts',
        explanation: 'Production Redux Toolkit slice featuring typed async thunks, normalized state, and extraReducers.',
        code: `import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

export interface Contact {
  id: string;
  name: string;
  email: string;
}

interface ContactsState {
  items: Contact[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: ContactsState = {
  items: [],
  status: 'idle',
  error: null,
};

// Async Thunk for fetching contacts from FastAPI backend
export const fetchContacts = createAsyncThunk('contacts/fetchContacts', async () => {
  const res = await fetch('https://api.kipplo.com/v1/contacts');
  if (!res.ok) throw new Error('Failed to fetch contacts');
  return (await res.json()) as Contact[];
});

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action: PayloadAction<Contact>) => {
      // Immer allows direct mutable syntax safely
      state.items.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Unknown error';
      });
  },
});

export const { addContact } = contactsSlice.actions;
export default contactsSlice.reducer;
`,
      },
      {
        title: 'Safe Hydration Mismatch Guard Hook',
        filename: 'hooks/useIsMounted.ts',
        explanation: 'Custom hook preventing React server vs client hydration mismatches when reading browser-only APIs.',
        code: `import { useState, useEffect } from 'react';

// Custom hook to detect when component has mounted on client DOM
// Prevents "Text content does not match server-rendered HTML" errors
export function useIsMounted() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return isMounted;
}

// Example Component Usage:
export function UserThemeDisplay() {
  const isMounted = useIsMounted();

  if (!isMounted) {
    // Render neutral fallback during SSR to avoid hydration mismatch
    return <div className="h-6 w-20 bg-zinc-200 animate-pulse rounded" />;
  }

  // Safe to read window / localStorage on client
  const theme = localStorage.getItem('theme') || 'system';
  return <span className="text-xs font-bold">Theme: {theme}</span>;
}
`,
      },
    ],
    topResources: [
      {
        title: 'React Official Documentation (react.dev)',
        authorOrPlatform: 'React Core Team',
        type: 'Documentation',
        link: 'https://react.dev',
        whyItMatters: 'The official interactive guide covering React 19 hooks, state preservation, Virtual DOM reconciliation, and Concurrent Mode.',
      },
      {
        title: 'Redux Toolkit Official Usage Guide',
        authorOrPlatform: 'Redux Maintainers',
        type: 'Documentation',
        link: 'https://redux-toolkit.js.org/',
        whyItMatters: 'Comprehensive patterns for createSlice, createAsyncThunk, Reselect selectors, and TypeScript integration.',
      },
    ],
    coreMentalModels: [
      {
        concept: '1. Virtual DOM Reconciliation & Diffing',
        explanation:
          'React creates a lightweight in-memory tree of Virtual DOM nodes. When state updates, React generates a new tree, computes the minimal diff against the previous tree, and executes batched updates to the real browser DOM in a single synchronous commit.',
      },
      {
        concept: '2. React Fiber Architecture',
        explanation:
          'The Fiber engine breaks render work into incremental units of work (Fiber nodes). This enables concurrent rendering—allowing React to pause, resume, or abort low-priority rendering tasks when user interactions (clicks, typing) require immediate main-thread responsiveness.',
      },
      {
        concept: '3. Redux Unidirectional Data Flow',
        explanation:
          'State is stored in a single immutable Redux store. Components dispatch explicit Actions (`dispatch(fetchContacts())`), Reducers update state immutably via Immer, and Selectors notify subscribed UI components to re-render.',
      },
      {
        concept: '4. React Hydration Process',
        explanation:
          'During SSR, server sends pre-rendered static HTML. In the browser, React downloads the JS bundle and "hydrates" the DOM—attaching event listeners (`onClick`, `onChange`) and linking internal React Fiber nodes to existing HTML elements.',
      },
    ],
    productionLessons: [
      {
        pitfall: 'Hydration Error #1: Reading `window`, `localStorage`, or `new Date()` directly in Component Body',
        solution: 'Accessing browser-only APIs outside `useEffect` generates HTML on the server that differs from initial client render, crashing with "Hydration failed because initial UI does not match". Solution: Defer browser API access until after mount using a `useIsMounted()` hook or `useEffect()`.',
      },
      {
        pitfall: 'Redux Issue #1: Un-memoized Selectors Causing Whole-Tree Re-renders',
        solution: 'Returning new object/array references inside inline `useSelector` calls causes subscribed components to re-render on every state change. Solution: Use memoized selectors created via `createSelector()` from Reselect.',
      },
      {
        pitfall: 'Memory Leak #1: Uncleaned Subscriptions in Custom Hooks',
        solution: 'Adding `window.addEventListener()` or WebSocket listeners without a cleanup function causes memory leaks and duplicate handler invocations. Solution: Always return a cleanup function (`return () => window.removeEventListener(...)`) from `useEffect()`.',
      },
    ],
  },

  'nextjs': {
    slug: 'nextjs',
    title: 'Next.js App Router, SSG, ISR & SSR Systems',
    subtitle: 'Static Site Generation, Incremental Static Regeneration, Server-Side Rendering & Cloudflare Edge Caching',
    category: 'Frontend Engineering',
    iconName: 'Code2',
    tags: ['Next.js 15', 'App Router', 'SSG', 'ISR', 'SSR', 'CSR', 'Server Components', 'Cloudflare'],
    githubRepoLink: 'https://github.com/ahammed03',
    howILearned:
      'Architected Kipplo\'s high-performance web platform, SEO directory pages, and interactive dashboards by mastering rendering trade-offs: SSG for static pages, ISR for 10,000+ programmatic SEO routes, SSR for dynamic real-time data, and Cloudflare edge caching.',
    productionMetrics: [
      {
        label: 'P99 Edge TTFB Latency',
        value: '18ms',
        description: 'Achieved ultra-fast Time To First Byte across global Cloudflare edge locations by using SSG & ISR caching over un-cached SSR.',
      },
      {
        label: 'Programmatic SEO Pages',
        value: '10,000+',
        description: 'Served 10k+ programmatic SEO directory pages with 60-second ISR background revalidation and zero build-time timeout.',
      },
      {
        label: 'Lighthouse Performance Score',
        value: '99/100',
        description: 'Eliminated client JS bundle bloat by replacing client-side data fetching with React Server Components.',
      },
    ],
    architectureDiagram: {
      title: 'Next.js Rendering Strategy Flowchart (SSG vs ISR vs SSR vs CSR)',
      steps: [
        {
          step: '1. Request Ingestion',
          detail: 'Incoming HTTP request hits Cloudflare Edge CDN & DNS. Path routing determines static asset cache vs edge execution.',
        },
        {
          step: '2. SSG / ISR Edge Cache Hit',
          detail: 'If path is static or valid ISR cache exists, edge node instantly returns pre-rendered HTML/JSON (TTFB ~15ms).',
        },
        {
          step: '3. Background ISR Revalidation',
          detail: 'If ISR cache TTL expired, edge serves stale HTML while triggering background Node.js serverless revalidation.',
        },
        {
          step: '4. Dynamic SSR Execution',
          detail: 'If route requires live authentication or dynamic data, Node.js server renders React Server Components on demand.',
        },
        {
          step: '5. CSR Hydration & State',
          detail: 'Browser receives HTML stream, downloads minimal JS bundle (`use client`), hydrates interactive components, and attaches state.',
        },
      ],
    },
    codeTabs: [
      {
        title: 'Next.js App Router (SSG, ISR, SSR, CSR)',
        filename: 'app/rendering-examples/page.tsx',
        explanation: 'Demonstrates unified implementation of SSG static params, ISR revalidation, SSR dynamic fetching, and React Server Components.',
        code: `// Next.js App Router Rendering Architectures (SSG, ISR, SSR, CSR)
import { Suspense } from 'react';

// SSG & ISR Setup
export const dynamic = 'auto';
export const revalidate = 60; // ISR: Revalidate static HTML every 60 seconds

export async function generateStaticParams() {
  const popularSlugs = ['fastapi-guide', 'postgresql-tuning', 'redis-architecture'];
  return popularSlugs.map((slug) => ({ slug }));
}

// SSR Fetching
async function fetchLiveUserFeed(userId: string) {
  const res = await fetch(\`https://api.kipplo.com/v1/feed/\${userId}\`, {
    cache: 'no-store', // SSR: Disables caching
  });
  if (!res.ok) throw new Error('SSR Data Fetch Failed');
  return res.json();
}

export default async function RenderingDemoPage({ params }: { params: { slug: string } }) {
  const feedData = await fetchLiveUserFeed('usr_99201');

  return (
    <main className="p-8 max-w-4xl mx-auto space-y-6">
      <header className="border-b pb-4">
        <h1 className="text-2xl font-bold">Rendering Strategy Showcase</h1>
        <p className="text-sm text-zinc-500">SSG + ISR + SSR + CSR in Next.js App Router</p>
      </header>

      <section className="p-6 bg-zinc-900 rounded-xl text-white">
        <h2 className="text-lg font-semibold mb-2">SSR Live Feed (Zero-Store)</h2>
        <pre className="text-xs text-emerald-400">{JSON.stringify(feedData, null, 2)}</pre>
      </section>

      <Suspense fallback={<div className="p-4 bg-zinc-800 text-xs animate-pulse">Streaming Analytics...</div>}>
        <HeavyAnalyticsComponent />
      </Suspense>
    </main>
  );
}

async function HeavyAnalyticsComponent() {
  await new Promise((resolve) => setTimeout(resolve, 200));
  return <div className="p-4 bg-indigo-900/40 rounded-xl text-xs">Analytics Streamed via React Suspense</div>;
}
`,
      },
      {
        title: 'On-Demand ISR Revalidation Handler',
        filename: 'app/api/revalidate/route.ts',
        explanation: 'Route handler providing instant secret-authenticated tag and path cache purging for headless CMS & DB updates.',
        code: `import { revalidatePath, revalidateTag } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { secret, tag, path } = await req.json();

    if (secret !== process.env.ISR_REVALIDATION_SECRET) {
      return NextResponse.json({ message: 'Invalid revalidation secret token' }, { status: 401 });
    }

    if (tag) {
      revalidateTag(tag);
      return NextResponse.json({ revalidated: true, tag, now: Date.now() });
    }

    if (path) {
      revalidatePath(path);
      return NextResponse.json({ revalidated: true, path, now: Date.now() });
    }

    return NextResponse.json({ message: 'Missing tag or path parameter' }, { status: 400 });
  } catch (err: any) {
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
}
`,
      },
    ],
    topResources: [
      {
        title: 'Next.js Official Documentation (App Router & Caching)',
        authorOrPlatform: 'Vercel',
        type: 'Documentation',
        link: 'https://nextjs.org/docs/app/building-your-application/caching',
        whyItMatters: 'The authoritative reference on Next.js 4-level caching: Request Memoization, Data Cache, Full Route Cache, and Router Cache.',
      },
      {
        title: 'Rendering Patterns: SSG, SSR, ISR, CSR & Server Components',
        authorOrPlatform: 'Patterns.dev (Lydia Hallie & Addy Osmani)',
        type: 'Article',
        link: 'https://www.patterns.dev/posts/rendering-introduction',
        whyItMatters: 'Deep visual breakdown of web rendering architectures, performance metrics (FCP, LCP, CLS), and memory footprints.',
      },
    ],
    coreMentalModels: [
      {
        concept: '1. Static Site Generation (SSG)',
        explanation:
          'HTML and JSON data are pre-rendered at build time (`npm run build`). Pages are deployed directly to Cloudflare Edge CDN, delivering ultra-fast ~15ms TTFB. Ideal for documentation, marketing pages, and static portfolio routes.',
      },
      {
        concept: '2. Incremental Static Regeneration (ISR)',
        explanation:
          'Combines SSG speed with dynamic freshness. Pages are served statically from edge cache while background Node.js processes regenerate stale HTML when requested after `revalidate` TTL or via on-demand `revalidateTag()`. Enables scaling to 100k+ dynamic pages without 5-hour build times.',
      },
      {
        concept: '3. Server-Side Rendering (SSR)',
        explanation:
          'HTML is generated on demand in Node.js for every incoming HTTP request. Ensures 100% real-time data freshness and personalized user content, but incurs server CPU execution costs and higher TTFB latency compared to edge-cached SSG.',
      },
      {
        concept: '4. Client-Side Rendering (CSR)',
        explanation:
          'Server sends a minimal HTML shell (`<div id="root"></div>`) and a JavaScript bundle. Browser executes React (`useState`, `useEffect`) to fetch data from REST/GraphQL APIs and render DOM nodes dynamically. Great for private app dashboards behind login walls.',
      },
    ],
    productionLessons: [
      {
        pitfall: 'ISR Issue #1: Stale Cache & Serverless Race Conditions',
        solution: 'In multi-region serverless deployments, ISR pages updated on node A may serve stale content on node B if cache invalidation is un-synchronized. Solution: Use tag-based invalidation (`revalidateTag`) backed by a shared global Edge Cache KV store.',
      },
      {
        pitfall: 'ISR Issue #2: Build Memory & Timeout Explosion on 50,000+ Slugs',
        solution: 'Passing 50,000+ paths in `generateStaticParams()` causes `npm run build` to exceed CI/CD 30-minute timeouts and crash with Out-Of-Memory (OOM) errors. Solution: Pre-render only the top 500 popular slugs during build, and configure `dynamicParams = true` to lazily generate the remaining 49,500 pages via ISR on first request.',
      },
      {
        pitfall: 'SSR Issue #1: Hydration Mismatch Crashes ("Text content does not match server-rendered HTML")',
        solution: 'Caused when server HTML differs from client initial render due to `window.innerWidth`, `localStorage`, or `new Date()`. Solution: Wrap browser-only state inside `useEffect()` or load client components with `dynamic(() => import(...), { ssr: false })`.',
      },
      {
        pitfall: 'SSR Issue #2: High TTFB Latency & Blocking Sequential Fetch Waterfalls',
        solution: 'Awaiting async fetch calls sequentially inside RSC (`await getA(); await getB();`) blocks the HTTP response header. Solution: Fetch in parallel with `Promise.all([getA(), getB()])` or wrap slow data components in React `<Suspense>` to stream HTML progressive responses.',
      },
      {
        pitfall: 'CSR Issue #1: SEO Indexation Failure & Initial Blank Screen White Flash',
        solution: 'Relying purely on CSR (`useEffect` API fetch) leaves initial HTML empty, causing search engine bots (Googlebot, Bing) to index blank pages. Solution: Use SSG/SSR for public SEO routes, reserving CSR strictly for authenticated dashboard views.',
      },
    ],
  },
}
