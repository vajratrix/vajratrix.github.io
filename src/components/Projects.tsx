export default function Projects() {
  return (
<section id="projects">
  <div className="projects-header">
    <div className="section-label">Our Work</div>
    <h2 className="section-title">Our <span>Projects</span></h2>
    <div className="gold-line"></div>
    <p className="section-desc">Live open-source applications built and maintained by Vajratrix Group, alongside our roadmap for what's coming next.</p>
  </div>

  <div style={{maxWidth: '1100px', margin: '0 auto 16px'}}>
    <div className="feed-title" style={{border: 'none', padding: '0', marginBottom: '0'}}>🟢 Live &amp; Open Source</div>
  </div>
  <div className="projects-grid" style={{marginBottom: '60px'}}>
    <div className="project-card">
      <div className="project-top">
        <div style={{fontSize: '1.5rem'}}>📈</div>
        <span className="project-status status-active">Live</span>
      </div>
      <div className="project-body">
        <div className="project-title">Daily DNA</div>
        <p className="project-desc">A free, open-source web app to plan, track, and review daily tasks and habits — built to help individuals build consistency without any paywalls or hidden costs.</p>
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
        <p className="project-desc">An open-source practice platform offering structured multiple-choice question sets for learners — free to use, free to contribute to, built for the community.</p>
        <div className="project-meta">
          <div className="meta-item"><strong>Domain</strong> Education</div>
          <div className="meta-item"><strong>License</strong> Open Source</div>
          <div className="meta-item"><strong>Status</strong> Live</div>
        </div>
      </div>
    </div>
  </div>

  <div style={{maxWidth: '1100px', margin: '0 auto 16px'}}>
    <div className="feed-title" style={{border: 'none', padding: '0', marginBottom: '0'}}>🟡 Future Plans &amp; Roadmap</div>
  </div>
  <div className="projects-grid">
    <div className="project-card">
      <div className="project-top">
        <div style={{fontSize: '1.5rem'}}>💬</div>
        <span className="project-status status-upcoming">Planned</span>
      </div>
      <div className="project-body">
        <div className="project-title">Discussion Forum</div>
        <p className="project-desc">A community discussion space for users and contributors to ask questions, share feedback, and shape the direction of Daily DNA, ExamForge, and future tools.</p>
        <div className="project-meta">
          <div className="meta-item"><strong>Domain</strong> Community</div>
          <div className="meta-item"><strong>License</strong> Open Source</div>
          <div className="meta-item"><strong>Status</strong> Planning</div>
        </div>
      </div>
    </div>
    <div className="project-card">
      <div className="project-top">
        <div style={{fontSize: '1.5rem'}}>🔱</div>
        <span className="project-status status-upcoming">Planned</span>
      </div>
      <div className="project-body">
        <div className="project-title">Vajratrix Unified Platform</div>
        <p className="project-desc">An integrated digital platform connecting all three partner companies under one ecosystem — enabling seamless collaboration, resource sharing, and client management.</p>
        <div className="project-meta">
          <div className="meta-item"><strong>Domain</strong> IT & Strategy</div>
          <div className="meta-item"><strong>Team</strong> All Partners</div>
          <div className="meta-item"><strong>Status</strong> Planning</div>
        </div>
      </div>
    </div>
    <div className="project-card">
      <div className="project-top">
        <div style={{fontSize: '1.5rem'}}>🔐</div>
        <span className="project-status status-upcoming">Planned</span>
      </div>
      <div className="project-body">
        <div className="project-title">SecureWatch India</div>
        <p className="project-desc">A real-time cybersecurity monitoring and alert concept for SMEs across Eastern India — aiming to provide affordable, accessible security intelligence.</p>
        <div className="project-meta">
          <div className="meta-item"><strong>Domain</strong> Cybersecurity</div>
          <div className="meta-item"><strong>Lead</strong> C. Tech</div>
          <div className="meta-item"><strong>Status</strong> Concept</div>
        </div>
      </div>
    </div>
    <div className="project-card">
      <div className="project-top">
        <div style={{fontSize: '1.5rem'}}>📡</div>
        <span className="project-status status-upcoming">Planned</span>
      </div>
      <div className="project-body">
        <div className="project-title">InfoPulse Global</div>
        <p className="project-desc">A curated global technology & business news intelligence concept — envisioned to deliver daily briefings, security advisories, and market signals to professionals worldwide.</p>
        <div className="project-meta">
          <div className="meta-item"><strong>Domain</strong> Info Services</div>
          <div className="meta-item"><strong>Lead</strong> P. Info</div>
          <div className="meta-item"><strong>Status</strong> Concept</div>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}