import { useState } from 'react'

export default function PrivacyPolicy() {
  const [expanded, setExpanded] = useState(false)

  return (
    <div id="privacy-policy" className="legal-card" style={{
      background: 'var(--navy2)',
      border: '1px solid var(--border)',
      borderRadius: '8px',
      padding: '32px',
      flex: 1,
      minWidth: '300px',
    }}>
      <h3 style={{ fontSize: '1.6rem', color: 'var(--white)', margin: '0 0 4px' }}>
        Privacy <span style={{ color: 'var(--gold)' }}>Policy</span>
      </h3>
      <p style={{ fontSize: '0.78rem', color: 'var(--muted)', marginBottom: '16px' }}>Last updated: 2026</p>

      <p className="legal-text">
        We collect only what you submit via our Contact form, plus anonymous site analytics. Your data is never sold or shared with third parties.
      </p>

      {expanded && (
        <div className="legal-text" style={{ marginTop: '10px' }}>
          <h4>Data We Collect</h4>
          <p>Contact form details (name, email, message, optional rating) and anonymous analytics: browser type, approximate location, device type.</p>

          <h4>How It's Used</h4>
          <p>Solely to respond to your message and understand site traffic. Never sold, rented, or used for marketing.</p>

          <h4>Where It's Processed</h4>
          <p>Form data routes through Google's infrastructure to our business inbox, under Google's own security and privacy practices.</p>

          <h4>Your Rights</h4>
          <p>Email us anytime to review, correct, or delete your submitted data. Requests are handled promptly by our team.</p>

          <h4>Children's Privacy</h4>
          <p>This site isn't directed at children under 13, and we don't knowingly collect their data.</p>

          <h4>Policy Updates</h4>
          <p>We may revise this policy as our products evolve. The date above reflects the latest revision.</p>

          <h4>Contact</h4>
          <p>Questions? Email connect2vajratrix@gmail.com.</p>
        </div>
      )}

      <button
        onClick={() => setExpanded(!expanded)}
        style={{
          background: 'none',
          border: 'none',
          color: 'var(--gold)',
          cursor: 'pointer',
          fontSize: '0.85rem',
          fontWeight: 600,
          marginTop: '16px',
          padding: 0,
        }}
      >
        {expanded ? '↑ Show Less' : '↓ Show More'}
      </button>
    </div>
  )
}
