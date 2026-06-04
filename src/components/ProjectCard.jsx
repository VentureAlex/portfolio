export default function ProjectCard({ project }) {
  const { title, description, tags, liveUrl, repoUrl, featured } = project

  return (
    <article className={`card ${featured ? 'card--featured' : ''}`}>
      {featured && <span className="card__badge">Featured</span>}
      <h3 className="card__title">{title}</h3>
      <p className="card__desc">{description}</p>
      <ul className="card__tags">
        {tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
      <div className="card__actions">
        {liveUrl ? (
          <a
            href={liveUrl}
            className="card__link card__link--live"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live demo
          </a>
        ) : (
          <span className="card__link card__link--muted">Deploy to set live URL</span>
        )}
        <a
          href={repoUrl}
          className="card__link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Source
        </a>
      </div>
    </article>
  )
}