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

        <section id="home" className="relative min-h-[90vh] overflow-hidden bg-slate-50 px-5 py-14 dark:bg-slate-950">
            <div className="absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-blue-100 via-emerald-50 to-transparent dark:from-blue-950/60 dark:via-emerald-950/20 dark:to-transparent"></div>
            <div className="relative mx-auto flex max-w-6xl flex-col-reverse items-center justify-between gap-12 md:min-h-[72vh] md:flex-row">
                <div className="flex max-w-2xl flex-col items-start gap-6">
                    <p className="rounded-md border border-blue-200 bg-white px-3 py-2 text-sm font-bold uppercase tracking-[0.18em] text-blue-700 shadow-sm dark:border-cyan-500/30 dark:bg-slate-900 dark:text-cyan-300">Bengaluru based</p>
                    <div>
                        <h1 className="text-4xl font-bold leading-tight text-slate-950 dark:text-white md:text-6xl">Ahammed Ali Shaik</h1>
                        <h2 className="mt-3 text-2xl font-bold text-slate-700 dark:text-slate-300 md:text-3xl">{title}</h2>
                    </div>
                    <p className="text-lg leading-8 text-slate-700 dark:text-slate-300">
                        I build production B2B SaaS systems across backend, data pipelines, APIs, browser extensions, and infrastructure. My recent work spans 300M+ record PostgreSQL/Citus systems, Redis Streams workers, Stripe billing, and React product delivery.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <a href="#projects" className="rounded-md bg-blue-600 px-5 py-3 font-semibold text-white shadow-sm hover:bg-blue-700 dark:bg-cyan-400 dark:text-slate-950 dark:hover:bg-cyan-300">View Projects</a>
                        <a href="#contact" className="rounded-md border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-900 hover:border-blue-600 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-cyan-400 dark:hover:text-cyan-300">Contact Me</a>
                    </div>
                    <div className="grid w-full gap-3 sm:grid-cols-3">
                        {metrics.map((metric) => (
                            <div key={metric.label} className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                                <p className="text-2xl font-bold text-slate-950 dark:text-white">{metric.value}</p>
                                <p className="mt-1 text-sm font-semibold text-slate-600 dark:text-slate-400">{metric.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="rounded-lg border border-slate-200 bg-white p-3 shadow-xl dark:border-slate-800 dark:bg-slate-900">
                    <img className="aspect-square w-64 rounded-md object-cover md:w-80" src={profilePhoto} alt="Ahammed Ali Shaik" />
                </div>
            </div>
            
            <TechStack></TechStack>
        </section>

    )
} 

const TechStack = memo(function TechStack(){
    
    return (
        
        <div className="relative mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-4 border-t border-slate-200 pt-8 dark:border-slate-800 md:justify-start">
                <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Core Stack</h2>
                <ul className="flex flex-wrap gap-3">
                    <img className="h-12 w-12 rounded-md border border-slate-200 bg-white p-2 shadow-sm dark:border-slate-800 dark:bg-slate-900" src={pythonPng} alt="Python" />
                    <img className="h-12 w-12 rounded-md border border-slate-200 bg-white p-2 shadow-sm dark:border-slate-800 dark:bg-slate-900" src={javaScriptPng} alt="JavaScript" />
                    <img className="h-12 w-12 rounded-md border border-slate-200 bg-white p-2 shadow-sm dark:border-slate-800 dark:bg-slate-900" src={djangoPng} alt="Django" />
                    <span className="flex h-12 items-center rounded-md border border-slate-200 bg-white px-3 text-sm font-bold text-slate-800 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100">FastAPI</span>
                    <span className="flex h-12 items-center rounded-md border border-slate-200 bg-white px-3 text-sm font-bold text-slate-800 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100">Redis</span>
                    <img className="h-12 w-12 rounded-md border border-slate-200 bg-white p-2 shadow-sm dark:border-slate-800 dark:bg-slate-900" src={reactPng} alt="React" />
                    <img className="h-12 w-12 rounded-md border border-slate-200 bg-white p-2 shadow-sm dark:border-slate-800 dark:bg-slate-900" src={tailwindPng} alt="Tailwind CSS" />
                    <img className="h-12 w-12 rounded-md border border-slate-200 bg-white p-2 shadow-sm dark:border-slate-800 dark:bg-slate-900" src={postgressPng} alt="PostgreSQL" />
                    <img className="h-12 w-12 rounded-md border border-slate-200 bg-white p-2 shadow-sm dark:border-slate-800 dark:bg-slate-900" src={mySQLPng} alt="MySQL" />
                    <img className="h-12 w-12 rounded-md border border-slate-200 bg-white p-2 shadow-sm dark:border-slate-800 dark:bg-slate-900" src={mangoDBPng} alt="MongoDB" />
                </ul>
            </div>
    )
});
