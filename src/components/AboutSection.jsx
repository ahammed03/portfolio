import AboutMe from "../assets/images/about-me.jpg"

export default function AboutSection() {

    return (
        <section id="about" className="w-full bg-white px-5 py-16" >
            <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 md:flex-row">
            <img className="w-full max-w-sm rounded-lg object-cover shadow-lg" src={AboutMe} alt="Ahammed working on software" />
            <div className="flex max-w-2xl flex-col gap-4">
                <p className="font-semibold uppercase tracking-[0.2em] text-blue-600">About</p>
                <h2 className="text-3xl font-bold text-gray-950">Software engineer building practical, production-ready systems.</h2>
                <p className="leading-8 text-gray-700">
                    I am Ahammed Ali Shaik, a Software Engineer based in Bengaluru with 2+ years of experience building B2B SaaS systems end to end. I enjoy taking ambiguous product problems and turning them into reliable APIs, scalable data workflows, and clean user-facing tools.
                </p>
                <p className="leading-8 text-gray-700">
                    At Kipplo Technologies, I work across FastAPI services, PostgreSQL and Citus databases, Redis Streams workers, CSV ingestion, email infrastructure, Stripe billing, scraping pipelines, React interfaces, and deployment workflows. I like systems that are calm under load and easy for teams to operate.
                </p>
                <p className="leading-8 text-gray-700">
                    I completed my BTech in Mechanical Engineering from Madanapalle Institute of Technology & Sciences with an 8.65 CGPA, then moved deeply into software through hands-on product engineering.
                </p>

            </div>
            </div>
        </section>
    )
}
