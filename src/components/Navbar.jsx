const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
]

export default function Navbar({ theme, onThemeToggle }) {

    return (
        <header className="sticky top-0 z-20 border-b border-zinc-200 bg-white/90 px-5 py-4 backdrop-blur-xl dark:border-zinc-800 dark:bg-black/85 md:px-12">
            <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4">
            <a href="#home" className="text-lg font-semibold tracking-tight text-zinc-950 dark:text-white md:text-xl">Ahammed Ali Shaik</a>
            <ul className="hidden items-center gap-7 text-sm font-medium text-zinc-600 dark:text-zinc-400 md:flex">
                {navItems.map((item) => (
                    <li key={item.href}>
                        <a className="hover:text-zinc-950 dark:hover:text-white" href={item.href}>{item.label}</a>
                    </li>
                ))}
            </ul>
            <button
                className="inline-flex items-center gap-2 rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm font-medium text-zinc-800 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-100 dark:hover:bg-zinc-900"
                type="button"
                onClick={onThemeToggle}
                aria-label="Toggle color theme"
            >
                {theme === 'dark' ? <Sun className="h-4 w-4" aria-hidden="true" /> : <Moon className="h-4 w-4" aria-hidden="true" />}
                {theme === 'dark' ? 'Light' : 'Dark'}
            </button>
            </nav>
        </header>
    )
}
import { Moon, Sun } from "lucide-react"
