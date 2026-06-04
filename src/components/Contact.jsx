export default function Contact({ links }) {
  return (
    <section className="section" id="contact">
      <div className="section__head">
        <h2>Contact</h2>
        <p>Open to collaboration and feedback on these projects.</p>
      </div>
      <ul className="contact__list">
        <li>
          <a href={links.github} target="_blank" rel="noopener noreferrer">
            GitHub — VentureAlex
          </a>
        </li>
        <li>
          <a href={links.email}>Email</a>
        </li>
      </ul>
    </section>
  )
}