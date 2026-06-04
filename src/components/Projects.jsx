import ProjectCard from './ProjectCard'

export default function Projects({ projects }) {
  const featured = projects.filter((p) => p.featured)
  const rest = projects.filter((p) => !p.featured)

  return (
    <section className="section" id="projects">
      <div className="section__head">
        <h2>Projects</h2>
        <p>Live apps and repos. Add entries in <code>src/data/projects.js</code>.</p>
      </div>

      <div className="grid grid--featured">
        {featured.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>

      {rest.length > 0 && (
        <div className="grid">
          {rest.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      )}
    </section>
  )
}