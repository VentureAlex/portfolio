export default function About({ site }) {
  return (
    <section className="section section--about" id="about">
      <div className="section__head">
        <h2>About</h2>
      </div>
      <p className="about__text">{site.bio}</p>
    </section>
  )
}