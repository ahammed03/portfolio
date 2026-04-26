
import EmailIcon from "../assets/icons/icons8-email-100.png"
import LinkedIn from "../assets/icons/icons8-linkedin-48.png"

export default function ContactSection() {
    return (
        <section id="contact" className="flex min-h-[36vh] flex-col items-center justify-center gap-6 bg-gray-50 px-5 py-16">
            <div className="text-center">
                <p className="font-semibold uppercase tracking-[0.2em] text-blue-600">Contact</p>
                <h2 className="mt-3 text-3xl font-bold text-gray-950">Let&apos;s build something useful.</h2>
            </div>
            <div className="flex flex-col gap-4 md:flex-row">
                <div className="flex items-center rounded-md bg-white px-4 py-3 shadow-sm">
                    <img className="w-14" src={EmailIcon} alt="" />
                    <a className="font-semibold text-gray-800 hover:text-blue-600" href="mailto:ahammedshaik0301@gmail.com">ahammedshaik0301@gmail.com</a>
                </div>
                <div className="flex items-center rounded-md bg-white px-4 py-3 shadow-sm">
                    <img className="w-12" src={LinkedIn} alt="" />
                    <a className="font-semibold text-gray-800 hover:text-blue-600" href="https://www.linkedin.com/in/ahammed03/">LinkedIn</a>
                </div>
            </div>
        </section>
    )
}
