export default function Activities() {
  return (
<section id="activities">
  <div className="activities-header">
    <div className="section-label">What's Happening</div>
    <h2 className="section-title">Activities & <span>Updates</span></h2>
    <div className="gold-line"></div>
    <p className="section-desc">Real milestones from Vajratrix Group — releases, roadmap progress, and community updates as they actually happen. No filler, no placeholder news.</p>
  </div>
  <div className="feed-grid">
    <div>
      <div className="feed-title">Latest Activity Feed</div>
      <div className="feed-item">
        <div className="feed-dot update"></div>
        <div className="feed-content">
          <div className="feed-cat">🟢 Site Update</div>
          <div className="feed-headline">Vajratrix Group website refreshed with the updated logo, project names, and honest activity tracking</div>
          <div className="feed-time">Kolkata, India</div>
        </div>
      </div>
      <div className="feed-item">
        <div className="feed-dot update"></div>
        <div className="feed-content">
          <div className="feed-cat">🟢 Product</div>
          <div className="feed-headline">Daily DNA — our open-source productivity tracker — is live and free to use</div>
          <div className="feed-time">Live now</div>
        </div>
      </div>
      <div className="feed-item">
        <div className="feed-dot update"></div>
        <div className="feed-content">
          <div className="feed-cat">🟢 Product</div>
          <div className="feed-headline">ExamForge — our open-source exam preparation portal — is live and free to use</div>
          <div className="feed-time">Live now</div>
        </div>
      </div>
      <div className="feed-item">
        <div className="feed-dot"></div>
        <div className="feed-content">
          <div className="feed-cat">🟡 Roadmap</div>
          <div className="feed-headline">Discussion Forum entered planning — a community space to shape what we build next</div>
          <div className="feed-time">In planning</div>
        </div>
      </div>
    </div>

    <div>
      <div className="security-panel">
        <div className="feed-title">Project Status</div>
        <div className="sec-item">
          <span className="sec-label">Daily DNA</span>
          <span className="sec-badge badge-green">Live</span>
        </div>
        <div className="sec-item">
          <span className="sec-label">ExamForge</span>
          <span className="sec-badge badge-green">Live</span>
        </div>
        <div className="sec-item">
          <span className="sec-label">Discussion Forum</span>
          <span className="sec-badge badge-yellow">Planning</span>
        </div>
        <div className="sec-item">
          <span className="sec-label">License</span>
          <span className="sec-badge badge-green">MIT · Open Source</span>
        </div>
        <div className="sec-item">
          <span className="sec-label">Contributions</span>
          <span className="sec-badge badge-green">Welcome</span>
        </div>
        <br/>
        <a href="#contact" className="btn-primary" style={{width: '100%', textAlign: 'center', display: 'block', fontSize: '0.75rem'}}>Get In Touch →</a>
      </div>
    </div>
  </div>
</section>
  )
}