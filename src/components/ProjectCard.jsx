export default function ProjectCard({ project }) {
  const { title, description, tags, liveUrl, repoUrl, featured } = project

  const titleContent = liveUrl ? (
    <a
      href={liveUrl}
      className="card__title-link"
      target="_blank"
      rel="noopener noreferrer"
    >
      {title}
    </a>
  ) : (
    title
  )

  return (
    <article className={`card ${featured ? 'card--featured' : ''}`}>
      {featured && <span className="card__badge">Featured</span>}
      <h3 className="card__title">{titleContent}</h3>
      <p className="card__desc">{description}</p>
      <ul className="card__tags">
        {tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
      <div className="card__actions">
        <a
          href={repoUrl}
          className="card__link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Source code
        </a>
      </div>
    </article>
  )
}