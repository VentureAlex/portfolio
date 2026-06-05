import ProjectCard from './ProjectCard'

export default function Projects({ projects }) {
  const sorted = [...projects].sort(
    (a, b) => Number(b.featured) - Number(a.featured)
  )

  return (
    <section className="section" id="projects">
      <div className="section__head">
        <h2>Projects</h2>
        <p>Live apps and open-source repos.</p>
      </div>

      <div className="grid">
        {sorted.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  )
}