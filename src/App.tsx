import LegalSection from './components/LegalSection'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Projects from './components/Projects'
import Team from './components/Team'
import Trust from './components/Trust'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  // Fade-in-on-scroll for cards/items, same behavior as the original site.
  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>(
      '.service-card, .project-card, .team-card, .pillar, .trust-card'
    )
    targets.forEach((el) => {
      el.style.opacity = '0'
      el.style.transform = 'translateY(20px)'
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease'
    })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement
            el.style.opacity = '1'
            el.style.transform = 'translateY(0)'
          }
        })
      },
      { threshold: 0.1 }
    )

    targets.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Team />
      <Trust />
      <Contact />
      <LegalSection />
      <Footer />
    </>
  )
}
