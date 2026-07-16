export default function Hero() {
  return (
<section id="home">
  <div className="hero-bg"></div>
  <div className="hero-grid"></div>

  <div className="hero-eyebrow fade-up">Est. 2025 · Kolkata, India</div>

  <img src="/assets/logo.svg" alt="Vajratrix Group emblem" className="hero-emblem fade-up delay-1" />

  <h1 className="hero-title fade-up delay-2">VAJRA<span>TRIX</span></h1>
  <div className="hero-sub fade-up delay-2">G R O U P</div>
  <div className="hero-divider fade-up delay-3"></div>
  <p className="hero-tagline fade-up delay-3">"Innovative. Alliance. Excellence."</p>

  <div className="hero-actions fade-up delay-4">
    <a href="#services" className="btn-primary">Explore Services</a>
    <a href="#contact" className="btn-outline">Connect With Us</a>
  </div>

  <div className="hero-stats fade-up delay-4">
    <div className="stat">
      <div className="stat-num">3</div>
      <div className="stat-label">Partner Companies</div>
    </div>
    <div className="stat">
      <div className="stat-num">6+</div>
      <div className="stat-label">Services Offered</div>
    </div>
    <div className="stat">
      <div className="stat-num">100%</div>
      <div className="stat-label">Founder-Led</div>
    </div>
    <div className="stat">
      <div className="stat-num">2025</div>
      <div className="stat-label">Founded</div>
    </div>
    <div className="stat">
      <div className="stat-num">Instant</div>
      <div className="stat-label">Solutions</div>
    </div>
    <div className="stat">
      <div className="stat-num">Proper</div>
      <div className="stat-label">Guidance</div>
    </div>
    <div className="stat">
      <div className="stat-num">24/7</div>
      <div className="stat-label">Support</div>
    </div>
  </div>
</section>
  )
}
