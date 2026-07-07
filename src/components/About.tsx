export default function About() {
  return (
<section id="about">
  <div className="about-grid">
    <div>
      <div className="section-label">Who We Are</div>
      <h2 className="section-title">Three Forces.<br/><span>One Vision. Infinite Power.</span></h2>
      <div className="gold-line"></div>
      <p className="section-desc">Vajratrix Group is the convergence of three formidable entities — C. Tech, S. Group, and P. Info — forming an indestructible alliance in technology, strategy, and information services.</p>
      <br/>
      <p className="section-desc">Rooted in Sanskrit tradition, our name carries a hidden truth: <em>Vajra</em> (indestructible force) + <em>Trix</em> (matrix of power). Together, we deliver end-to-end solutions that build trust, drive growth, and create lasting impact across industries.</p>
      <br/>
      <a href="#contact" className="btn-outline" style={{marginTop: '12px'}}>Our Story →</a>
    </div>
    <div className="about-visual">
      <div className="about-card">
        <div className="pillar">
          <div className="pillar-icon">CT</div>
          <div>
            <div className="pillar-name">C. Tech</div>
            <div className="pillar-desc">Technology backbone — software development, IT infrastructure, and digital innovation powering the group's tech arm.</div>
          </div>
        </div>
        <div className="pillar">
          <div className="pillar-icon">SG</div>
          <div>
            <div className="pillar-name">S. Group</div>
            <div className="pillar-desc">Business strategy, consulting, and multi-domain group operations — the strategic intelligence behind every decision.</div>
          </div>
        </div>
        <div className="pillar">
          <div className="pillar-icon">PI</div>
          <div>
            <div className="pillar-name">P. Info</div>
            <div className="pillar-desc">Information services, data analytics, and knowledge management — ensuring precision and clarity in all operations.</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}