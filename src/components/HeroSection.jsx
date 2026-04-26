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



export default function HeroSection() {
    const [title, setTitle] = useState("Software Engineer")

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTitle(titles[Math.floor(Math.random() * titles.length)])
        }, 3000)
        return () => clearInterval(intervalId)
    }, [])


    return (

        <section id="home" className="min-h-[90vh] w-full bg-gray-50 px-5 py-12">
            <div className="mx-auto flex max-w-6xl flex-col-reverse items-center justify-between gap-10 md:min-h-[72vh] md:flex-row">
                <div className="flex max-w-2xl flex-col items-start gap-5">
                    <p className="font-semibold uppercase tracking-[0.2em] text-blue-600">Bengaluru based</p>
                    <div>
                        <h1 className="text-4xl font-bold leading-tight text-gray-950 md:text-6xl">Ahammed Ali Shaik</h1>
                        <h2 className="mt-3 text-2xl font-bold text-gray-700 md:text-3xl">{title}</h2>
                    </div>
                    <p className="text-lg leading-8 text-gray-700">
                        I build production B2B SaaS systems across backend, data pipelines, APIs, browser extensions, and infrastructure. My recent work spans 300M+ record PostgreSQL/Citus systems, Redis Streams workers, Stripe billing, and React product delivery.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <a href="#projects" className="rounded-md bg-blue-600 px-5 py-3 font-semibold text-white shadow-sm hover:bg-blue-700">View Projects</a>
                        <a href="#contact" className="rounded-md border border-gray-300 px-5 py-3 font-semibold text-gray-900 hover:border-blue-600 hover:text-blue-600">Contact Me</a>
                    </div>
                </div>
                <img className="w-60 rounded-full border-4 border-white object-cover shadow-xl md:w-80" src={profilePhoto} alt="Ahammed Ali Shaik" />
            </div>
            
            <TechStack></TechStack>
        </section>

    )
} 

const TechStack = memo(function TechStack(){
    
    return (
        
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-4 border-t border-gray-200 pt-8 md:justify-start">
                <h2 className="text-lg font-semibold text-gray-900">Core Stack</h2>
                <ul className="flex flex-wrap gap-3">
                    <img className="h-12 w-12 rounded-md bg-white p-2 shadow-sm" src={pythonPng} alt="Python" />
                    <img className="h-12 w-12 rounded-md bg-white p-2 shadow-sm" src={javaScriptPng} alt="JavaScript" />
                    <img className="h-12 w-12 rounded-md bg-white p-2 shadow-sm" src={djangoPng} alt="Django" />
                    <span className="flex h-12 items-center rounded-md bg-white px-3 text-sm font-bold text-gray-800 shadow-sm">FastAPI</span>
                    <span className="flex h-12 items-center rounded-md bg-white px-3 text-sm font-bold text-gray-800 shadow-sm">Redis</span>
                    <img className="h-12 w-12 rounded-md bg-white p-2 shadow-sm" src={reactPng} alt="React" />
                    <img className="h-12 w-12 rounded-md bg-white p-2 shadow-sm" src={tailwindPng} alt="Tailwind CSS" />
                    <img className="h-12 w-12 rounded-md bg-white p-2 shadow-sm" src={postgressPng} alt="PostgreSQL" />
                    <img className="h-12 w-12 rounded-md bg-white p-2 shadow-sm" src={mySQLPng} alt="MySQL" />
                    <img className="h-12 w-12 rounded-md bg-white p-2 shadow-sm" src={mangoDBPng} alt="MongoDB" />
                </ul>
            </div>
    )
});
