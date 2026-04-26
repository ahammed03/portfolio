import { memo, useEffect, useState } from "react"
import profilePhoto from "../assets/images/Profile.jpg"
import pythonPng from "../assets/icons/icons8-python-48.png"
import javaScriptPng from "../assets/icons/icons8-javascript-48.png"
import reactPng from "../assets/icons/icons8-react-40.png"
import mangoDBPng from "../assets/icons/icons8-mongodb-48.png"
import postgressPng from "../assets/icons/icons8-postgresql-48.png"
import mySQLPng from "../assets/icons/icons8-mysql-50.png"
import tailwindPng from "../assets/icons/icons8-tailwind-css-48.png"
import djangoPng from "../assets/icons/icons8-django-50.png"

const titles = ["Software Engineer", "Backend Engineer", "FastAPI Developer", "Data Platform Engineer"]

const metrics = [
    { value: "2+", label: "Years experience" },
    { value: "300M+", label: "Records handled" },
    { value: "10+", label: "Services deployed" },
]

export default function HeroSection() {
    const [title, setTitle] = useState("Software Engineer")

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTitle(titles[Math.floor(Math.random() * titles.length)])
        }, 3000)
        return () => clearInterval(intervalId)
    }, [])


    return (

        <section id="home" className="relative min-h-[90vh] overflow-hidden border-b border-zinc-200 bg-neutral-50 px-5 py-14 dark:border-zinc-800 dark:bg-black">
            <div className="absolute inset-x-0 top-0 h-px bg-zinc-950/10 dark:bg-white/20"></div>
            <div className="relative mx-auto flex max-w-6xl flex-col-reverse items-center justify-between gap-12 md:min-h-[72vh] md:flex-row">
                <div className="flex max-w-2xl flex-col items-start gap-6">
                    <p className="rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-zinc-600 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-400">Bengaluru based</p>
                    <div>
                        <h1 className="text-4xl font-semibold leading-tight text-zinc-950 dark:text-white md:text-6xl">Ahammed Ali Shaik</h1>
                        <h2 className="mt-3 text-2xl font-semibold text-zinc-700 dark:text-zinc-300 md:text-3xl">{title}</h2>
                    </div>
                    <p className="text-lg leading-8 text-zinc-700 dark:text-zinc-400">
                        I build production B2B SaaS systems across backend, data pipelines, APIs, browser extensions, and infrastructure. My recent work spans 300M+ record PostgreSQL/Citus systems, Redis Streams workers, Stripe billing, and React product delivery.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <a href="#projects" className="rounded-md bg-zinc-950 px-5 py-3 font-medium text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200">View Projects</a>
                        <a href="#contact" className="rounded-md border border-zinc-300 bg-white px-5 py-3 font-medium text-zinc-900 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-black dark:text-zinc-100 dark:hover:bg-zinc-900">Contact Me</a>
                    </div>
                    <div className="grid w-full gap-3 sm:grid-cols-3">
                        {metrics.map((metric) => (
                            <div key={metric.label} className="rounded-md border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950">
                                <p className="text-2xl font-semibold text-zinc-950 dark:text-white">{metric.value}</p>
                                <p className="mt-1 text-sm font-medium text-zinc-600 dark:text-zinc-500">{metric.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="rounded-md border border-zinc-200 bg-white p-2 dark:border-zinc-800 dark:bg-zinc-950">
                    <img className="aspect-square w-64 rounded-md object-cover md:w-80" src={profilePhoto} alt="Ahammed Ali Shaik" />
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
                    <img className="h-12 w-12 rounded-md border border-zinc-200 bg-white p-2 dark:border-zinc-800 dark:bg-zinc-950" src={pythonPng} alt="Python" />
                    <img className="h-12 w-12 rounded-md border border-zinc-200 bg-white p-2 dark:border-zinc-800 dark:bg-zinc-950" src={javaScriptPng} alt="JavaScript" />
                    <img className="h-12 w-12 rounded-md border border-zinc-200 bg-white p-2 dark:border-zinc-800 dark:bg-zinc-950" src={djangoPng} alt="Django" />
                    <span className="flex h-12 items-center rounded-md border border-zinc-200 bg-white px-3 text-sm font-semibold text-zinc-800 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100">FastAPI</span>
                    <span className="flex h-12 items-center rounded-md border border-zinc-200 bg-white px-3 text-sm font-semibold text-zinc-800 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100">Redis</span>
                    <img className="h-12 w-12 rounded-md border border-zinc-200 bg-white p-2 dark:border-zinc-800 dark:bg-zinc-950" src={reactPng} alt="React" />
                    <img className="h-12 w-12 rounded-md border border-zinc-200 bg-white p-2 dark:border-zinc-800 dark:bg-zinc-950" src={tailwindPng} alt="Tailwind CSS" />
                    <img className="h-12 w-12 rounded-md border border-zinc-200 bg-white p-2 dark:border-zinc-800 dark:bg-zinc-950" src={postgressPng} alt="PostgreSQL" />
                    <img className="h-12 w-12 rounded-md border border-zinc-200 bg-white p-2 dark:border-zinc-800 dark:bg-zinc-950" src={mySQLPng} alt="MySQL" />
                    <img className="h-12 w-12 rounded-md border border-zinc-200 bg-white p-2 dark:border-zinc-800 dark:bg-zinc-950" src={mangoDBPng} alt="MongoDB" />
                </ul>
            </div>
    )
});
