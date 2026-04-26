import AboutMe from "../assets/images/about-me.jpg"

export default function AboutSection() {

    return (
        <section id="about" className="w-full bg-white px-5 py-20 dark:bg-slate-900" >
            <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-[0.85fr_1.15fr]">
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-3 shadow-sm dark:border-slate-800 dark:bg-slate-950">
                <img className="aspect-[4/5] w-full rounded-md object-cover" src={AboutMe} alt="Ahammed working on software" />
            </div>
            <div className="flex flex-col gap-4">
                <p className="font-semibold uppercase tracking-[0.18em] text-blue-600 dark:text-cyan-300">About</p>
                <h2 className="text-3xl font-bold leading-tight text-slate-950 dark:text-white md:text-4xl">Software engineer building practical, production-ready systems.</h2>
                <p className="leading-8 text-slate-700 dark:text-slate-300">
                    I am Ahammed Ali Shaik, a Software Engineer based in Bengaluru with 2+ years of experience building B2B SaaS systems end to end. I enjoy taking ambiguous product problems and turning them into reliable APIs, scalable data workflows, and clean user-facing tools.
                </p>
                <p className="leading-8 text-slate-700 dark:text-slate-300">
                    At Kipplo Technologies, I work across FastAPI services, PostgreSQL and Citus databases, Redis Streams workers, CSV ingestion, email infrastructure, Stripe billing, scraping pipelines, React interfaces, and deployment workflows. I like systems that are calm under load and easy for teams to operate.
                </p>
                <p className="leading-8 text-slate-700 dark:text-slate-300">
                    I completed my BTech in Mechanical Engineering from Madanapalle Institute of Technology & Sciences with an 8.65 CGPA, then moved deeply into software through hands-on product engineering.
                </p>

            </div>
            </div>
        </section>
    )
}
