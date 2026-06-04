import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { site } from './data/site'
import { projects } from './data/projects'

export default function App() {
  return (
    <div className="page">
      <Header name={site.name} />
      <main>
        <Hero site={site} />
        <Projects projects={projects} />
        <About site={site} />
        <Contact links={site.links} />
      </main>
      <Footer name={site.name} />
    </div>
  )
}