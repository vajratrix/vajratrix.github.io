export default function Services() {
  return (
<section id="services">
  <div className="services-header">
    <div className="section-label">What We Offer</div>
    <h2 className="section-title">Our <span>Services</span></h2>
    <div className="gold-line"></div>
    <p className="section-desc">Technology, strategy, and information services built to help your business grow.</p>
  </div>
  <div className="services-grid">
    <div className="service-card">
      <div className="service-icon">💻</div>
      <div className="service-title">IT & Software</div>
      <p className="service-desc">Web, mobile, and cloud development for growing businesses.</p>
      <div className="service-tags">
        <span className="tag">Web Dev</span>
        <span className="tag">Mobile</span>
        <span className="tag">Cloud</span>
        <span className="tag">Enterprise</span>
      </div>
    </div>
    <div className="service-card">
      <div className="service-icon">📊</div>
      <div className="service-title">Business Consulting</div>
      <p className="service-desc">Strategy and growth consulting to help you scale smarter.</p>
      <div className="service-tags">
        <span className="tag">Strategy</span>
        <span className="tag">Growth</span>
        <span className="tag">Operations</span>
      </div>
    </div>
    <div className="service-card">
      <div className="service-icon">🗄️</div>
      <div className="service-title">Data & Information Services</div>
      <p className="service-desc">Analytics and insights that turn data into decisions.</p>
      <div className="service-tags">
        <span className="tag">Analytics</span>
        <span className="tag">BI</span>
        <span className="tag">Data Mgmt</span>
      </div>
    </div>
    <div className="service-card">
      <div className="service-icon">🔐</div>
      <div className="service-title">Security Solutions</div>
      <p className="service-desc">Cybersecurity audits and monitoring to keep you protected.</p>
      <div className="service-tags">
        <span className="tag">Cybersec</span>
        <span className="tag">Audit</span>
        <span className="tag">Monitoring</span>
      </div>
    </div>
    <div className="service-card">
      <div className="service-icon">🌐</div>
      <div className="service-title">Global Tech Updates</div>
      <p className="service-desc">Curated tech intel and advisories to keep you ahead.</p>
      <div className="service-tags">
        <span className="tag">Intel</span>
        <span className="tag">Global</span>
        <span className="tag">Advisory</span>
      </div>
    </div>
    <div className="service-card">
      <div className="service-icon">🛒</div>
      <div className="service-title">Products & Solutions</div>
      <p className="service-desc">Ready-to-deploy SaaS products built by our team.</p>
      <div className="service-tags">
        <span className="tag">SaaS</span>
        <span className="tag">Products</span>
        <span className="tag">Licensing</span>
      </div>
    </div>
  </div>
</section>
  )
}
