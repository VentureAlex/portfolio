export default function About({ site }) {
  return (
    <section className="section section--about" id="about">
      <div className="section__head">
        <h2>Who I am</h2>
      </div>
      {site.whoIAm.split('\n\n').map((para, i) => (
        <p key={i} className="about__text">{para.trim()}</p>
      ))}
      <p className="about__text about__text--secondary">{site.portfolioNote}</p>
    </section>
  )
}