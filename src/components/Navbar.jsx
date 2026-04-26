const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
]

export default function Navbar({ theme, onThemeToggle }) {

    return (
        <header className="sticky top-0 z-20 border-b border-slate-200/80 bg-white/90 px-5 py-4 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/85 md:px-12">
            <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4">
            <a href="#home" className="text-lg font-bold tracking-tight text-slate-950 dark:text-white md:text-xl">Ahammed Ali Shaik</a>
            <ul className="hidden items-center gap-7 text-sm font-semibold text-slate-600 dark:text-slate-300 md:flex">
                {navItems.map((item) => (
                    <li key={item.href}>
                        <a className="hover:text-blue-600 dark:hover:text-cyan-300" href={item.href}>{item.label}</a>
                    </li>
                ))}
            </ul>
            <button
                className="rounded-md border border-slate-300 bg-white px-3 py-2 text-sm font-semibold text-slate-800 shadow-sm hover:border-blue-500 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-cyan-400 dark:hover:text-cyan-300"
                type="button"
                onClick={onThemeToggle}
                aria-label="Toggle color theme"
            >
                {theme === 'dark' ? 'Light' : 'Dark'}
            </button>
            </nav>
        </header>
    )
}
