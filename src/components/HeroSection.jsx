import { memo } from "react"
import { Braces, Boxes, Code2, Database, GitBranch, Layers3, ServerCog, Workflow, Zap } from "lucide-react"

const metrics = [
    { value: "2+", label: "Years experience" },
    { value: "300M+", label: "Records handled" },
    { value: "1M+", label: "Row CSV pipelines" },
    { value: "10+", label: "Production services" },
]

const focusAreas = [
    {
        label: "Backend",
        value: "FastAPI, idempotent APIs, background jobs",
        icon: ServerCog,
    },
    {
        label: "Data",
        value: "PostgreSQL/Citus, Redis Streams, Polars",
        icon: Database,
    },
    {
        label: "Systems",
        value: "Caching, queues, billing, deployments",
        icon: Workflow,
    },
]

const techStack = [
    { label: "Python", icon: Code2 },
    { label: "JavaScript", icon: Braces },
    { label: "Django", icon: Layers3 },
    { label: "FastAPI", icon: Zap },
    { label: "Redis", icon: Workflow },
    { label: "React", icon: Boxes },
    { label: "Tailwind CSS", icon: Layers3 },
    { label: "PostgreSQL", icon: Database },
    { label: "MySQL", icon: Database },
    { label: "MongoDB", icon: Database },
    { label: "Git", icon: GitBranch },
]

export default function HeroSection() {
    return (

        <section id="home" className="relative min-h-[90vh] overflow-hidden border-b border-zinc-200 bg-neutral-50 px-5 py-14 dark:border-zinc-800 dark:bg-black">
            <div className="absolute inset-x-0 top-0 h-px bg-zinc-950/10 dark:bg-white/20"></div>
            <div className="relative mx-auto flex max-w-6xl flex-col-reverse items-center justify-between gap-12 md:min-h-[72vh] md:flex-row">
                <div className="flex max-w-3xl flex-col items-start gap-6">
                    <div>
                        <h1 className="text-4xl font-semibold leading-tight text-zinc-950 dark:text-white md:text-6xl">Ahammed</h1>
                        <h2 className="mt-3 text-2xl font-semibold text-zinc-700 dark:text-zinc-300 md:text-3xl">Software Engineer</h2>
                    </div>
                    <p className="text-lg leading-8 text-zinc-700 dark:text-zinc-400">
                        Software Engineer with 2+ years of experience designing backend systems, distributed data workflows, async APIs, and production infrastructure. I work on Python, FastAPI, PostgreSQL/Citus, Redis, and React systems that need to stay reliable under real product load.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <a href="#projects" className="rounded-md bg-zinc-950 px-5 py-3 font-medium text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200">View Projects</a>
                        <a href="#contact" className="rounded-md border border-zinc-300 bg-white px-5 py-3 font-medium text-zinc-900 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-black dark:text-zinc-100 dark:hover:bg-zinc-900">Contact Me</a>
                        <a href="https://leetcode.com/u/ahammed03/" className="rounded-md border border-zinc-300 bg-white px-5 py-3 font-medium text-zinc-900 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-black dark:text-zinc-100 dark:hover:bg-zinc-900">LeetCode</a>
                    </div>
                    <div className="grid w-full gap-3 sm:grid-cols-2 lg:grid-cols-4">
                        {metrics.map((metric) => (
                            <div key={metric.label} className="rounded-md border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950">
                                <p className="text-2xl font-semibold text-zinc-950 dark:text-white">{metric.value}</p>
                                <p className="mt-1 text-sm font-medium text-zinc-600 dark:text-zinc-500">{metric.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="w-full max-w-sm rounded-md border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950">
                    <p className="text-sm font-medium uppercase tracking-[0.18em] text-zinc-500">Engineering Focus</p>
                    <div className="mt-5 space-y-4">
                        {focusAreas.map((area) => {
                            const Icon = area.icon
                            return (
                                <div key={area.label} className="rounded-md border border-zinc-200 p-4 dark:border-zinc-800">
                                    <div className="flex items-center gap-2">
                                        <Icon className="h-4 w-4 text-zinc-500" aria-hidden="true" />
                                        <p className="text-sm font-medium text-zinc-500 dark:text-zinc-500">{area.label}</p>
                                    </div>
                                    <p className="mt-1 text-lg font-semibold text-zinc-950 dark:text-white">{area.value}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            
            <TechStack></TechStack>
        </section>

    )
} 

const TechStack = memo(function TechStack(){
    
    return (
        
        <div className="relative mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-4 border-t border-zinc-200 pt-8 dark:border-zinc-800 md:justify-start">
                <h2 className="text-lg font-semibold text-zinc-900 dark:text-white">Core Stack</h2>
                <ul className="flex flex-wrap gap-3">
                    {techStack.map((tech) => {
                        const Icon = tech.icon
                        return (
                            <li key={tech.label} className="flex h-12 items-center gap-2 rounded-md border border-zinc-200 bg-white px-3 text-sm font-semibold text-zinc-800 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100">
                                <Icon className="h-4 w-4 text-zinc-500" aria-hidden="true" />
                                {tech.label}
                            </li>
                        )
                    })}
                </ul>
            </div>
    )
});
