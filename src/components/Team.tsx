export default function Team() {
  return (
<section id="team">
  <div className="team-header">
    <div className="section-label">The Founders</div>
    <h2 className="section-title">Our <span>Partner Team</span></h2>
    <div className="gold-line"></div>
    <p className="section-desc">Three visionaries, one unstoppable group.</p>
  </div>
  <div className="team-grid">
    <div className="team-card">
      <div className="team-avatar">T</div>
      <div className="team-name">Technology Director</div>
      <div className="team-role">Technology Division</div>
      <div className="team-divider"></div>
      <p className="team-bio">Leads software and IT innovation across Vajratrix Group.</p>
    </div>
    <div className="team-card">
      <div className="team-avatar">S</div>
      <div className="team-name">Strategy Director</div>
      <div className="team-role">Strategy Division</div>
      <div className="team-divider"></div>
      <p className="team-bio">Drives business strategy and growth for Vajratrix Group.</p>
    </div>
    <div className="team-card">
      <div className="team-avatar">I</div>
      <div className="team-name">Information Director</div>
      <div className="team-role">Information Division</div>
      <div className="team-divider"></div>
      <p className="team-bio">Leads data and information services for Vajratrix Group.</p>
    </div>
  </div>
</section>
  )
}
