export default function About({ site }) {
  return (
    <section className="section section--about" id="about">
      <div className="section__head">
        <h2>Who I am</h2>
      </div>
      <p className="about__text">{site.whoIAm}</p>
      <p className="about__text about__text--secondary">{site.portfolioNote}</p>
    </section>
  )
}