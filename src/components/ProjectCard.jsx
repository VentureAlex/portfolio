function ArrowIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7 17L17 7M17 7H7M17 7v10" />
    </svg>
  )
}

export default function ProjectCard({ project }) {
  const { title, description, tags, liveUrl, repoUrl, year } = project
  const href = liveUrl || repoUrl

  return (
    <a
      href={href}
      className="project-card"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${title} — opens in new tab`}
    >
      <span className="project-card__year">{year}</span>
      <div className="project-card__body">
        <div className="project-card__header">
          <h3 className="project-card__title">{title}</h3>
          <span className="project-card__arrow">
            <ArrowIcon />
          </span>
        </div>
        <p className="project-card__desc">{description}</p>
        <ul className="project-card__tags">
          {tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        {repoUrl && liveUrl && (
          <p className="project-card__repo-link">
            <span
              onClick={(e) => { e.preventDefault(); window.open(repoUrl, '_blank', 'noopener,noreferrer') }}
              role="link"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); window.open(repoUrl, '_blank', 'noopener,noreferrer') }}}
            >
              View source ↗
            </span>
          </p>
        )}
      </div>
    </a>
  )
}
