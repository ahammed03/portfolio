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
        <section id="experience" className="bg-gray-50 px-5 py-16">
            <div className="mx-auto max-w-6xl">
                <p className="font-semibold uppercase tracking-[0.2em] text-blue-600">Experience</p>
                <div className="mt-3 flex flex-col justify-between gap-4 md:flex-row md:items-end">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-950">Kipplo Technologies</h2>
                        <p className="mt-2 text-lg font-semibold text-gray-700">Software Engineer · May 2024 - Present</p>
                    </div>
                    <p className="max-w-xl text-gray-600">B2B account intelligence platform for contact and company data at production scale.</p>
                </div>

                <div className="mt-8 grid gap-4 md:grid-cols-2">
                    {highlights.map((highlight) => (
                        <div key={highlight} className="rounded-md border border-gray-200 bg-white p-5 shadow-sm">
                            <p className="leading-7 text-gray-700">{highlight}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                    {skills.map((skill) => (
                        <span key={skill} className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-800 shadow-sm">
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    )
}
