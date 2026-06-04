export default function Hero({ site }) {
  return (
    <section className="hero" id="top">
      <p className="hero__eyebrow">Portfolio</p>
      <h1 className="hero__title">
        {site.name}
        <span className="hero__role"> — {site.role}</span>
      </h1>
      <p className="hero__tagline">{site.tagline}</p>
      <div className="hero__actions">
        <a href="#projects" className="btn btn--primary">
          View projects
        </a>
        <a
          href={site.links.github}
          className="btn btn--ghost"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>
    </section>
  )
}