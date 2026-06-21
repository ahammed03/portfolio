import AboutSection from '@/components/AboutSection'
import ContactSection from '@/components/ContactSection'
import ExperienceSection from '@/components/ExperienceSection'
import HeroSection from '@/components/HeroSection'
import Navbar from '@/components/Navbar'
import ProjectsSection from '@/components/ProjectsSection'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <main className="relative z-10">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
