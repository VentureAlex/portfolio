export default function Hero({ site }) {
  return (
    <section className="hero" id="top">
      <p className="hero__eyebrow">Portfolio</p>
      <h1 className="hero__title">{site.name}</h1>
      <p className="hero__headline">{site.headline}</p>
      <div className="hero__actions">
        <a href="#about" className="btn btn--primary">
          Who I am
        </a>
        <a href="#projects" className="btn btn--ghost">
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