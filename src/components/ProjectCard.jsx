export default function ProjectCard({ project }) {
  const { title, description, tags, liveUrl, repoUrl, featured } = project

  const hasLive = !!liveUrl

  const handleSourceClick = (e) => {
    e.stopPropagation()
  }

  const mainContent = (
    <>
      <h3 className="card__title">{title}</h3>
      <p className="card__desc">{description}</p>
      <ul className="card__tags">
        {tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    </>
  )

  return (
    <article className={`card ${featured ? 'card--featured' : ''}`}>
      {featured && <span className="card__badge">Featured</span>}
      {hasLive ? (
        <a
          href={liveUrl}
          className="card__main-link"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${title} live demo`}
        >
          {mainContent}
        </a>
      ) : (
        mainContent
      )}
      <div className="card__actions">
        <a
          href={repoUrl}
          className="card__link"
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleSourceClick}
        >
          Source code
        </a>
      </div>
    </article>
  )
}