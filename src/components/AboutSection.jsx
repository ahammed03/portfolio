import AboutMe from "../assets/images/about-me.jpg"

export default function AboutSection() {

    return (
        <section id="about" className="w-full border-b border-zinc-200 bg-white px-5 py-20 dark:border-zinc-800 dark:bg-zinc-950" >
            <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-[0.85fr_1.15fr]">
            <div className="rounded-md border border-zinc-200 bg-neutral-50 p-2 dark:border-zinc-800 dark:bg-black">
                <img className="aspect-[4/5] w-full rounded-md object-cover" src={AboutMe} alt="Ahammed working on software" />
            </div>
            <div className="flex flex-col gap-4">
                <p className="font-semibold uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-500">About</p>
                <h2 className="text-3xl font-semibold leading-tight text-zinc-950 dark:text-white md:text-4xl">Software engineer building practical, production-ready systems.</h2>
                <p className="leading-8 text-zinc-700 dark:text-zinc-400">
                    I am Ahammed Ali Shaik, a Software Engineer based in Bengaluru with 2+ years of experience building B2B SaaS systems end to end. I enjoy taking ambiguous product problems and turning them into reliable APIs, scalable data workflows, and clean user-facing tools.
                </p>
                <p className="leading-8 text-zinc-700 dark:text-zinc-400">
                    At Kipplo Technologies, I work across FastAPI services, PostgreSQL and Citus databases, Redis Streams workers, CSV ingestion, email infrastructure, Stripe billing, scraping pipelines, React interfaces, and deployment workflows. I like systems that are calm under load and easy for teams to operate.
                </p>
                <p className="leading-8 text-zinc-700 dark:text-zinc-400">
                    I completed my BTech in Mechanical Engineering from Madanapalle Institute of Technology & Sciences with an 8.65 CGPA, then moved deeply into software through hands-on product engineering.
                </p>

            </div>
            </div>
        </section>
    )
}
