
import EmailIcon from "../assets/icons/icons8-email-100.png"
import GitHub from "../assets/icons/icons8-github-30.png"
import LinkedIn from "../assets/icons/icons8-linkedin-48.png"

const links = [
    {
        label: "Email",
        href: "mailto:ahammedshaik0301@gmail.com",
        value: "ahammedshaik0301@gmail.com",
        icon: EmailIcon,
    },
    {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/ahammed03/",
        value: "linkedin.com/in/ahammed03",
        icon: LinkedIn,
    },
    {
        label: "GitHub",
        href: "https://github.com/ahammed03",
        value: "github.com/ahammed03",
        icon: GitHub,
    },
    {
        label: "LeetCode",
        href: "https://leetcode.com/u/ahammed03/",
        value: "leetcode.com/u/ahammed03",
        icon: null,
    },
]

export default function ContactSection() {
    return (
        <section id="contact" className="flex min-h-[36vh] flex-col items-center justify-center gap-6 bg-neutral-50 px-5 py-20 dark:bg-black">
            <div className="text-center">
                <p className="font-semibold uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-500">Contact</p>
                <h2 className="mt-3 text-3xl font-semibold text-zinc-950 dark:text-white md:text-4xl">Open to product engineering roles.</h2>
            </div>
            <div className="grid w-full max-w-4xl gap-4 md:grid-cols-2">
                {links.map((link) => (
                    <a key={link.href} className="flex items-center gap-3 rounded-md border border-zinc-200 bg-white px-4 py-3 font-medium text-zinc-800 hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100 dark:hover:bg-zinc-900" href={link.href}>
                        {link.icon ? <img className="h-9 w-9" src={link.icon} alt="" /> : <span className="flex h-9 w-9 items-center justify-center rounded-md border border-zinc-200 text-sm font-semibold dark:border-zinc-800">LC</span>}
                        <span>
                            <span className="block text-xs text-zinc-500">{link.label}</span>
                            <span className="block break-all">{link.value}</span>
                        </span>
                    </a>
                ))}
            </div>
        </section>
    )
}
