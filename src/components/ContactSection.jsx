
import EmailIcon from "../assets/icons/icons8-email-100.png"
import LinkedIn from "../assets/icons/icons8-linkedin-48.png"

export default function ContactSection() {
    return (
        <section id="contact" className="flex min-h-[36vh] flex-col items-center justify-center gap-6 bg-neutral-50 px-5 py-20 dark:bg-black">
            <div className="text-center">
                <p className="font-semibold uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-500">Contact</p>
                <h2 className="mt-3 text-3xl font-semibold text-zinc-950 dark:text-white md:text-4xl">Let&apos;s build something useful.</h2>
            </div>
            <div className="flex flex-col gap-4 md:flex-row">
                <div className="flex items-center rounded-md border border-zinc-200 bg-white px-4 py-3 dark:border-zinc-800 dark:bg-zinc-950">
                    <img className="w-14" src={EmailIcon} alt="" />
                    <a className="font-medium text-zinc-800 hover:text-zinc-500 dark:text-zinc-100 dark:hover:text-zinc-400" href="mailto:ahammedshaik0301@gmail.com">ahammedshaik0301@gmail.com</a>
                </div>
                <div className="flex items-center rounded-md border border-zinc-200 bg-white px-4 py-3 dark:border-zinc-800 dark:bg-zinc-950">
                    <img className="w-12" src={LinkedIn} alt="" />
                    <a className="font-medium text-zinc-800 hover:text-zinc-500 dark:text-zinc-100 dark:hover:text-zinc-400" href="https://www.linkedin.com/in/ahammed03/">LinkedIn</a>
                </div>
            </div>
        </section>
    )
}
