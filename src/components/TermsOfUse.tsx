import { useState } from 'react'

export default function TermsOfUse() {
  const [expanded, setExpanded] = useState(false)

  return (
    <div id="terms-of-use" className="legal-card" style={{
      background: 'var(--navy2)',
      border: '1px solid var(--border)',
      borderRadius: '8px',
      padding: '32px',
      flex: 1,
      minWidth: '300px',
    }}>
      <h3 style={{ fontSize: '1.6rem', color: 'var(--white)', margin: '0 0 4px' }}>
        Terms of <span style={{ color: 'var(--gold)' }}>Use</span>
      </h3>
      <p style={{ fontSize: '0.78rem', color: 'var(--muted)', marginBottom: '16px' }}>Last updated: 2026</p>

      <p className="legal-text">
        This site is provided "as is" with no warranty, governed by the laws of India.
      </p>

      {expanded && (
        <div className="legal-text" style={{ marginTop: '10px' }}>
          <h4>Scope</h4>
          <p>These terms cover vajratrix.github.io. Our individual products (Daily DNA, ExamForge, and future releases) may carry their own separate terms.</p>

          <h4>No Warranty</h4>
          <p>Content is provided as is. We aim for accuracy and uptime, but can't guarantee uninterrupted availability or error-free information.</p>

          <h4>Acceptable Use</h4>
          <p>Don't use our Contact form to submit spam, malicious content, or anything illegal. We may block submissions that violate this.</p>

          <h4>Intellectual Property</h4>
          <p>The Vajratrix name, logo, and brand assets belong to Vajratrix Group, except where specific code or products are separately licensed.</p>

          <h4>Third-Party Links</h4>
          <p>This site may link to third-party sites. We aren't responsible for their content or practices.</p>

          <h4>Limitation of Liability</h4>
          <p>To the fullest extent permitted by law, Vajratrix Group isn't liable for damages arising from your use of this site or our products.</p>

          <h4>Governing Law</h4>
          <p>These terms are governed by the laws of India and are a plain-language starting point, not a substitute for legal advice.</p>

          <h4>Updates</h4>
          <p>We may revise these terms as our offerings evolve. The date above reflects the latest revision.</p>

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
