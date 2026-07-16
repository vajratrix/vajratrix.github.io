export default function Projects() {
  return (
<section id="projects">
  <div className="projects-header">
    <div className="section-label">Our Work</div>
    <h2 className="section-title">Our <span>Projects</span></h2>
    <div className="gold-line"></div>
    <p className="section-desc">Live, open-source apps built by Vajratrix Group.</p>
  </div>

  <div className="projects-grid" style={{marginBottom: '20px'}}>
    <div className="project-card">
      <div className="project-top">
        <img src="/assets/projects/daily-dna-logo-dark.svg" alt="Daily DNA logo" className="project-logo-full" />
        <span className="project-status status-active">Live</span>
      </div>
      <div className="project-body">
        <div className="project-title">Daily DNA</div>
        <p className="project-desc">Free, open-source task and habit tracker: no paywalls, ever.</p>
        <div className="project-meta">
          <div className="meta-item"><strong>Domain</strong> Productivity</div>
          <div className="meta-item"><strong>License</strong> Open Source</div>
          <div className="meta-item"><strong>Status</strong> Live</div>
        </div>
      </div>
    </div>
    <div className="project-card">
      <div className="project-top">
        <div style={{fontSize: '1.5rem'}}>📝</div>
        <span className="project-status status-active">Live</span>
      </div>
      <div className="project-body">
        <div className="project-title">ExamForge</div>
        <p className="project-desc">Free, open-source MCQ practice platform for learners.</p>
        <div className="project-meta">
          <div className="meta-item"><strong>Domain</strong> Education</div>
          <div className="meta-item"><strong>License</strong> Open Source</div>
          <div className="meta-item"><strong>Status</strong> Live</div>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}
