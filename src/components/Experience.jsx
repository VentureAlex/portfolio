function groupByCompany(experience) {
  const groups = []
  for (const job of experience) {
    const last = groups[groups.length - 1]
    if (last && last.company === job.company) {
      last.roles.push(job)
    } else {
      groups.push({ company: job.company, roles: [job] })
    }
  }
  return groups
}

export default function Experience({ experience }) {
  const groups = groupByCompany(experience)

  return (
    <section id="experience" className="section">
      <p className="section__label" aria-hidden="true">Experience</p>
      <div className="exp-list">
        {groups.map((group) => (
          <div key={group.company} className="exp-group">
            <div className="exp-group__header">
              <span className="exp-group__company">{group.company}</span>
              <span className="exp-group__span">
                {group.roles[group.roles.length - 1].period.split(' — ')[0]}
                {' — '}
                {group.roles[0].period.split(' — ')[1] ?? group.roles[0].period.split(' — ')[0]}
              </span>
            </div>
            <div className="exp-roles">
              {group.roles.map((job, i) => (
                <div key={i} className="exp-role">
                  <span className="exp-role__period">{job.period}</span>
                  <div className="exp-role__body">
                    <h3 className="exp-role__title">{job.role}</h3>
                    <p className="exp-card__desc">{job.description}</p>
                    <ul className="exp-card__tags">
                      {job.platforms.map((tag) => (
                        <li key={tag} className="exp-tag--platform">{tag}</li>
                      ))}
                      {job.skills.map((tag) => (
                        <li key={tag} className="exp-tag--skill">{tag}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
