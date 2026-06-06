import ProjectCard from './ProjectCard'

export default function Projects({ projects }) {
  const sorted = [...projects].sort((a, b) => Number(b.featured) - Number(a.featured))

  return (
    <section id="projects" className="section">
      <p className="section__label" aria-hidden="true">Projects</p>
      <div className="project-list">
        {sorted.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  )
}
