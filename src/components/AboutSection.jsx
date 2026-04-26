export default function AboutSection() {

    return (
        <section id="about" className="w-full border-b border-zinc-200 bg-white px-5 py-20 dark:border-zinc-800 dark:bg-zinc-950" >
            <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.1fr_0.9fr]">
            <div className="flex flex-col gap-4">
                <p className="font-semibold uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-500">About</p>
                <h2 className="text-3xl font-semibold leading-tight text-zinc-950 dark:text-white md:text-4xl">Backend-leaning product engineer focused on scale, reliability, and clean execution.</h2>
                <p className="leading-8 text-zinc-700 dark:text-zinc-400">
                    I am Ahammed Ali Shaik, a Software Engineer based in Bengaluru with 2+ years of experience building B2B SaaS systems end to end. My strongest work is in backend engineering, data-heavy APIs, distributed task execution, and turning product requirements into systems that are maintainable in production.
                </p>
                <p className="leading-8 text-zinc-700 dark:text-zinc-400">
                    At Kipplo Technologies, I work across FastAPI services, PostgreSQL/Citus databases, Redis Streams workers, CSV ingestion, email infrastructure, Stripe billing, scraping pipelines, React interfaces, and deployment workflows. I care about API correctness, idempotency, data consistency, observability, and practical performance.
                </p>
                <p className="leading-8 text-zinc-700 dark:text-zinc-400">
                    I am targeting strong product engineering teams where backend fundamentals, system design, data structures, ownership, and production thinking matter.
                </p>

            </div>
            <div className="grid gap-3">
                <div className="rounded-md border border-zinc-200 bg-neutral-50 p-5 dark:border-zinc-800 dark:bg-black">
                    <p className="text-sm font-medium text-zinc-500 dark:text-zinc-500">Location</p>
                    <p className="mt-2 text-xl font-semibold text-zinc-950 dark:text-white">Bengaluru, India</p>
                </div>
                <div className="rounded-md border border-zinc-200 bg-neutral-50 p-5 dark:border-zinc-800 dark:bg-black">
                    <p className="text-sm font-medium text-zinc-500 dark:text-zinc-500">Education</p>
                    <p className="mt-2 text-xl font-semibold text-zinc-950 dark:text-white">BTech, Mechanical Engineering</p>
                    <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-500">Madanapalle Institute of Technology & Sciences</p>
                </div>
                <div className="rounded-md border border-zinc-200 bg-neutral-50 p-5 dark:border-zinc-800 dark:bg-black">
                    <p className="text-sm font-medium text-zinc-500 dark:text-zinc-500">Coding Profile</p>
                    <a className="mt-2 block break-words text-xl font-semibold text-zinc-950 hover:text-zinc-600 dark:text-white dark:hover:text-zinc-400" href="https://leetcode.com/u/ahammed03/">leetcode.com/u/ahammed03</a>
                </div>
            </div>
            </div>
        </section>
    )
}
