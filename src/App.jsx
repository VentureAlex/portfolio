import { useState, useEffect } from 'react'
import LeftPanel from './components/LeftPanel'
import About from './components/About'
import Experience from './components/Experience'
import Wins from './components/Wins'
import Projects from './components/Projects'
import Footer from './components/Footer'
import { site } from './data/site'
import { projects } from './data/projects'

const SECTION_IDS = ['about', 'experience', 'wins', 'projects']

export default function App() {
  const [activeSection, setActiveSection] = useState('about')

  useEffect(() => {
    const onMouseMove = (e) => {
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`)
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`)
    }
    window.addEventListener('mousemove', onMouseMove)

    const observers = SECTION_IDS.map((id) => {
      const el = document.getElementById(id)
      if (!el) return null
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id) },
        { rootMargin: '-35% 0px -55% 0px', threshold: 0 }
      )
      obs.observe(el)
      return obs
    })

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      observers.forEach((o) => o?.disconnect())
    }
  }, [])

  return (
    <div className="page">
      <div className="layout">
        <LeftPanel site={site} activeSection={activeSection} />
        <main className="right-content">
          <About site={site} />
          <Experience experience={site.experience} />
          <Wins wins={site.wins} />
          <Projects projects={projects} />
<Footer name={site.name} />
        </main>
      </div>
    </div>
  )
}
