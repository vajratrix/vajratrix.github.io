export default function About() {
  return (
<section id="about">
  <div className="about-grid">
    <div>
      <div className="section-label">Who We Are</div>
      <h2 className="section-title">Three Forces.<br/><span>One Vision. Infinite Power.</span></h2>
      <div className="gold-line"></div>
      <p className="section-desc">Vajratrix Group is a technology, strategy, and information services alliance built to help businesses grow smarter, faster, and stronger.</p>
      <br/>
      <p className="section-desc">Founded in 2025 and headquartered in Kolkata, India, we bring specialized expertise together under one trusted name.</p>
      <br/>
      <a href="#contact" className="btn-outline" style={{marginTop: '12px'}}>Contact Us →</a>
    </div>
    <div className="about-visual">
      <div className="about-card">
        <div className="pillar">
          <div className="pillar-icon">T</div>
          <div>
            <div className="pillar-name">Technology</div>
            <div className="pillar-desc">Software, IT infrastructure, and digital innovation.</div>
          </div>
        </div>
        <div className="pillar">
          <div className="pillar-icon">S</div>
          <div>
            <div className="pillar-name">Strategy</div>
            <div className="pillar-desc">Business consulting and growth planning.</div>
          </div>
        </div>
        <div className="pillar">
          <div className="pillar-icon">I</div>
          <div>
            <div className="pillar-name">Information</div>
            <div className="pillar-desc">Data, analytics, and knowledge management.</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}
