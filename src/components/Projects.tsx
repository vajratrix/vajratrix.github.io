export default function Projects() {
  return (
<section id="projects">
  <div className="projects-header">
    <div className="section-label">Our Work</div>
    <h2 className="section-title">Our <span>Projects</span></h2>
    <div className="gold-line"></div>
    <p className="section-desc">Open-source apps built by Vajratrix Group.</p>
  </div>

  <div className="projects-grid" style={{marginBottom: '20px'}}>
    <div className="project-card">
      <div className="project-top">
        <img src="/assets/projects/daily-dna-logo-dark.svg" alt="Daily DNA logo" className="project-logo-full" />
        <span className="project-status status-active">Live</span>
      </div>
      <div className="project-body">
        <div className="project-title">
          <a href="https://getdailydna.vercel.app" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>Daily DNA</a>
        </div>
        <p className="project-desc">Free, open-source task and habit tracker: no paywalls, ever.</p>
        <div className="project-meta">
          <div className="meta-item"><strong>Domain</strong> Productivity</div>
          <div className="meta-item"><strong>License</strong> Open Source</div>
          <div className="meta-item"><strong>Status</strong> Live</div>
        </div>
        <a href="https://getdailydna.vercel.app" target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ marginTop: '24px', display: 'inline-block' }}>Visit Daily DNA →</a>
      </div>
    </div>
    <div className="project-card">
      <div className="project-top">
        <div style={{fontSize: '1.5rem'}}>📝</div>
        <span className="project-status status-upcoming">Development</span>
      </div>
      <div className="project-body">
        <div className="project-title">ExamForge</div>
        <p className="project-desc">Free, open-source MCQ practice platform for learners: currently in development and testing.</p>
        <div className="project-meta">
          <div className="meta-item"><strong>Domain</strong> Education</div>
          <div className="meta-item"><strong>License</strong> Open Source</div>
          <div className="meta-item"><strong>Status</strong> Development &amp; Testing</div>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}
