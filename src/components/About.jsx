export default function About({ site }) {
  return (
    <section id="about" className="section">
      <p className="section__label" aria-hidden="true">About</p>
      <p className="body-text">{site.whoIAm}</p>
      <p className="body-text body-text--secondary">{site.portfolioNote}</p>
    </section>
  )
}
