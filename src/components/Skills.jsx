export default function Skills({ skills }) {
  return (
    <section id="skills" className="section">
      <p className="section__label" aria-hidden="true">Skills</p>
      <div className="skills-grid">
        <div className="skills-col">
          <p className="skills-col__heading">Platforms</p>
          <ul className="skills-tags">
            {skills.platforms.map((p) => (
              <li key={p} className="skills-tag skills-tag--platform">{p}</li>
            ))}
          </ul>
        </div>
        <div className="skills-col">
          <p className="skills-col__heading">Skills</p>
          <ul className="skills-tags">
            {skills.skills.map((s) => (
              <li key={s} className="skills-tag skills-tag--skill">{s}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
