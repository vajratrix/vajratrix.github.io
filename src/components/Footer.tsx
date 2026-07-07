export default function Footer() {
  return (
<footer>
  <div className="footer-top">
    <div>
      <div className="footer-brand-name">VAJRA<span>TRIX</span> GROUP</div>
      <p className="footer-tagline">Three indestructible forces united as one — delivering technology, strategy, and information solutions that build lasting trust and market presence.</p>
      <p className="footer-secret">🔱 Sanskrit root: Vajra (indestructible) + Trix (matrix of power)</p>
    </div>
    <div>
      <div className="footer-col-title">Navigate</div>
      <ul className="footer-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#activities">Activities</a></li>
      </ul>
    </div>
    <div>
      <div className="footer-col-title">Company</div>
      <ul className="footer-links">
        <li><a href="#team">Our Team</a></li>
        <li><a href="#feedback">Feedback</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#privacy-policy">Privacy Policy</a></li>
        <li><a href="#terms-of-use">Terms of Use</a></li>
      </ul>
    </div>
    <div>
      <div className="footer-col-title">Partners</div>
      <ul className="footer-links">
        <li><a href="#">C. Tech</a></li>
        <li><a href="#">S. Group</a></li>
        <li><a href="#">P. Info</a></li>
        <li style={{color: 'var(--muted)', cursor: 'default'}}>Careers <span style={{fontSize: '0.7rem', opacity: 0.7}}>(Coming Soon)</span></li>
        <li style={{color: 'var(--muted)', cursor: 'default'}}>Press Kit <span style={{fontSize: '0.7rem', opacity: 0.7}}>(Coming Soon)</span></li>
      </ul>
    </div>
  </div>
  <div className="footer-bottom">
    <div className="footer-copy">© 2025 Vajratrix Group. All rights reserved. Kolkata, India.</div>
    <div className="footer-badges">
      <span className="f-badge">Open Source</span>
      <span className="f-badge">MIT Licensed</span>
      <span className="f-badge">Community Driven</span>
    </div>
  </div>
</footer>
  )
}