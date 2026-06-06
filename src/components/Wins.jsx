export default function Wins({ wins }) {
  return (
    <section id="wins" className="section">
      <p className="section__label" aria-hidden="true">Highlights</p>
      <div className="wins-grid">
        {wins.map((win, i) => (
          <div key={i} className="win-card">
            <span className="win-card__metric">{win.metric}</span>
            <span className="win-card__label">{win.label}</span>
            <p className="win-card__desc">{win.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
