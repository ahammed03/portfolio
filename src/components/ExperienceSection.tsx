const highlights = [
  'Built distributed email verification pipelines using Redis Streams and consumer groups for ordered, fault-tolerant job execution.',
  'Developed SMTP verification workers with MX record validation, catch-all detection, and asynchronous polling flows.',
  'Implemented webhook delivery and result processing pipelines so customer integrations stayed reliable and observable.',
  'Worked on large-scale data workflows and analytics systems handling 150M+ records with PostgreSQL and BigQuery.',
  'Instrumented production services with OpenTelemetry and SigNoz to improve tracing, debugging, and visibility.',
  'Focused on idempotent APIs, caching, and consistent data handling to reduce duplication and failure risk under concurrency.',
]

const skills = [
  'Python',
  'FastAPI',
  'PostgreSQL',
  'Redis Streams',
  'BigQuery',
  'OpenTelemetry',
  'SigNoz',
  'React',
  'Docker',
  'Webhooks',
  'SMTP',
]

export default function ExperienceSection() {
  return (
    <section id="experience" className="border-b border-zinc-200/80 px-5 py-20 dark:border-zinc-800/80 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-semibold uppercase tracking-[0.22em] text-zinc-500 dark:text-zinc-500">Experience</p>
            <h2 className="mt-3 text-3xl font-semibold text-zinc-950 dark:text-white md:text-4xl">Kipplo Technologies</h2>
            <p className="mt-2 text-lg font-medium text-zinc-700 dark:text-zinc-400">Software Engineer - May 2024 to Present</p>
          </div>
          <p className="max-w-xl text-zinc-600 dark:text-zinc-500">B2B account intelligence platform with contact and company enrichment across 150M+ records.</p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] border border-zinc-200 bg-white/90 p-6 shadow-xl shadow-zinc-950/5 dark:border-zinc-800 dark:bg-zinc-950/90">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-zinc-500 dark:text-zinc-500">Core stack</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span key={skill} className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm font-medium text-zinc-800 shadow-sm dark:border-zinc-800 dark:bg-black/40 dark:text-zinc-200">
                  {skill}
                </span>
              ))}
            </div>
            <div className="mt-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-5 dark:border-zinc-800 dark:bg-black/40">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-500">What I optimize for</p>
              <p className="mt-2 leading-7 text-zinc-700 dark:text-zinc-400">Correctness, throughput, observability, and maintainability across systems that are expected to work under production load.</p>
            </div>
          </div>

          <div className="space-y-4">
            {highlights.map((highlight, index) => (
              <div key={highlight} className="group rounded-[1.75rem] border border-zinc-200 bg-white/90 p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-950/90">
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-zinc-950 text-sm font-semibold text-white dark:bg-white dark:text-zinc-950">
                    0{index + 1}
                  </div>
                  <p className="leading-7 text-zinc-700 dark:text-zinc-400">{highlight}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
