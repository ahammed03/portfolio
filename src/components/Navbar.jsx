export default function Navbar() {

    return (
        <div className="sticky top-0 z-20 flex w-full items-center justify-between bg-white/95 px-5 py-4 shadow-sm backdrop-blur md:px-12">
            <a href="#home" className="text-xl font-bold tracking-tight text-gray-950">Ahammed Ali Shaik</a>
            <ul className="hidden items-center gap-8 text-sm font-semibold text-gray-700 md:flex">
                <li><a className="hover:text-blue-600" href="#home">Home</a></li>
                <li><a className="hover:text-blue-600" href="#about">About</a></li>
                <li><a className="hover:text-blue-600" href="#experience">Experience</a></li>
                <li><a className="hover:text-blue-600" href="#projects">Projects</a></li>
                <li><a className="hover:text-blue-600" href="#contact">Contact</a></li>
            </ul>
           
        </div>
    )
}
