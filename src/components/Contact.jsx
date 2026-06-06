function ExternalLinkIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M7 17L17 7M17 7H7M17 7v10" />
    </svg>
  )
}

export default function Contact({ links }) {
  return (
    <section id="contact" className="section">
      <p className="section__label" aria-hidden="true">Contact</p>
      <h2 className="contact__heading">Let's Connect</h2>
      <p className="body-text">
        Whether you want to collaborate on a project, discuss an opportunity, or just say hello — my inbox is open.
      </p>
      <div className="contact__links">
        <a href={links.email} className="contact__link">
          <ExternalLinkIcon />
          AlexanderBaLee@gmail.com
        </a>
        <a href={links.linkedin} className="contact__link" target="_blank" rel="noopener noreferrer">
          <ExternalLinkIcon />
          linkedin.com/in/venturealex
        </a>
        <a href={links.github} className="contact__link" target="_blank" rel="noopener noreferrer">
          <ExternalLinkIcon />
          github.com/VentureAlex
        </a>
      </div>
    </section>
  )
}
