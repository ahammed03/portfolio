const highlights = [
    "Architected Kipplo's Reveal System for real-time, bulk, API, and CSV-based enrichment across a 300M+ record PostgreSQL database distributed with Citus.",
    "Built high-throughput ingestion pipelines for 1M+ row CSV files using Polars and Pandas with size-based chunking to reduce memory overhead.",
    "Designed Redis Streams workers with consumer groups for ordered, fault-tolerant async enrichment jobs across distributed workers.",
    "Integrated Stripe subscriptions with webhook processing, idempotency, and failure recovery to protect payment events from data loss.",
    "Shipped a React Chrome Extension with 700+ installs to surface verified B2B contact intelligence directly from LinkedIn profiles.",
    "Managed deployments for 10+ services across VPS and bare metal servers using Docker, GitLab CI/CD, Nginx, and Apache.",
]

const skills = [
    "Python",
    "FastAPI",
    "PostgreSQL",
    "Citus",
    "Redis Streams",
    "Polars",
    "Pandas",
    "React",
    "Redux",
    "Stripe",
    "Docker",
    "GitLab CI/CD",
]

export default function ExperienceSection() {
    return (
        <section id="experience" className="border-b border-zinc-200 bg-neutral-50 px-5 py-20 dark:border-zinc-800 dark:bg-black">
            <div className="mx-auto max-w-6xl">
                <p className="font-semibold uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-500">Experience</p>
                <div className="mt-3 flex flex-col justify-between gap-4 md:flex-row md:items-end">
                    <div>
                        <h2 className="text-3xl font-semibold text-zinc-950 dark:text-white md:text-4xl">Kipplo Technologies</h2>
                        <p className="mt-2 text-lg font-medium text-zinc-700 dark:text-zinc-400">Software Engineer - May 2024 to Present</p>
                    </div>
                    <p className="max-w-xl text-zinc-600 dark:text-zinc-500">B2B account intelligence platform for contact and company data at production scale.</p>
                </div>

                <div className="mt-8 grid gap-4 md:grid-cols-2">
                    {highlights.map((highlight) => (
                        <div key={highlight} className="rounded-md border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950">
                            <p className="leading-7 text-zinc-700 dark:text-zinc-400">{highlight}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                    {skills.map((skill) => (
                        <span key={skill} className="rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm font-medium text-zinc-800 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-200">
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    )
}
