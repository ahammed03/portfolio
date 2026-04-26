import GitHub from '../assets/icons/icons8-github-30.png'
import chatBotImg1 from '../assets/projectsImages/ChatBot.png'
import tailorFlowImg from '../assets/projectsImages/TailorFlow.png'
import githubExplorerImg from '../assets/projectsImages/githubExplorer.png'

export default function ProjectsSection() {

    const projectsData = [
        {
            'title': 'Kipplo Chrome Extension',
            'description': `React browser extension with 700+ installs that helps sales teams discover verified B2B contact intelligence directly from LinkedIn profiles, reducing manual prospecting work.`,
            'codeLink': 'https://github.com/ahammed03',
            'imageLink': githubExplorerImg
        },
        {
            'title': 'GitHub Explorer',
            'description': `A React application using the GitHub API to explore user profiles, repositories, followers, forks, and project details with a clean searchable interface.`,
            'codeLink': 'https://github.com/ahammed03/GithubExplorer.git',
            'imageLink': githubExplorerImg
        }, 
        {
            'title': 'Chatbot using Gemini AI',
            'description': `A Gemini AI chatbot supported by a Django backend for intelligent responses, system integration, and smoother user communication workflows.`,
            'codeLink': 'https://github.com/ahammed03/chatbot.git',
            'imageLink': chatBotImg1
        },
        {
            'title': 'TailorFlow',
            'description': `A Django-based tailor operations dashboard for managing orders, customers, daily work, and business trends in one practical workflow.`,
            'codeLink': 'https://github.com/ahammed03/TailorFlow1.git',
            'imageLink': tailorFlowImg
        },


    ]

    return (

        <section id="projects" className='flex flex-col items-center gap-6 bg-white px-5 py-16'>
            <div className="w-full max-w-6xl">
                <p className="font-semibold uppercase tracking-[0.2em] text-blue-600">Projects</p>
                <h2 className='mt-3 text-3xl font-bold text-gray-950'>Selected Work</h2>
            </div>
            {
                projectsData.map((project) => (
                    <div key={project.title} className="flex w-full max-w-6xl flex-col items-center gap-5 border-b border-gray-200 py-6 md:flex-row">
                        <img className='aspect-video w-full rounded-md object-cover shadow-sm md:w-[42%]' src={project.imageLink} alt={`${project.title} preview`} />
                        <div className="space-y-3">
                            <h3 className="text-xl font-semibold text-gray-950">{project.title}</h3>
                            <p className='leading-7 text-gray-700'>{project.description}</p>
                            <a href={project.codeLink} className='inline-flex items-center gap-2 font-semibold text-blue-600 hover:text-blue-700'>
                                <img className="h-6 w-6" src={GitHub} alt="" />
                                View code
                            </a>
                        </div>
                    </div>
                ))
            }

        </section>
    )
}
