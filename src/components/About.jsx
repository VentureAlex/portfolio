export default function About({ site }) {
  return (
    <section id="about" className="section">
      <p className="section__label" aria-hidden="true">About</p>
      {site.whoIAm.split('\n\n').map((para, i) => (
        <p key={i} className="body-text">{para}</p>
      ))}
      <p className="body-text body-text--secondary">{site.portfolioNote}</p>
    </section>
  )
}
