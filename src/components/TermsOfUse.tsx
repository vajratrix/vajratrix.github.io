import { useState } from 'react'

export default function TermsOfUse() {
  const [expanded, setExpanded] = useState(false)

  return (
    <div id="terms-of-use" style={{
      background: 'var(--navy2)',
      border: '1px solid var(--border)',
      borderRadius: '8px',
      padding: '32px',
      flex: 1,
      minWidth: '300px',
    }}>
      <div className="section-label" style={{ fontSize: '0.7rem' }}>Legal</div>
      <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.6rem', color: 'var(--white)', margin: '6px 0 4px' }}>
        Terms of <span style={{ color: 'var(--gold)' }}>Use</span>
      </h3>
      <p style={{ fontSize: '0.78rem', color: 'var(--muted)', marginBottom: '16px' }}>Last updated: 2026</p>

      <p style={{ color: 'var(--text)', lineHeight: 1.7, fontSize: '0.92rem' }}>
        This site's own code is open-source (MIT License), provided "as is" with no warranty, and governed by the laws of India.
      </p>

      {expanded && (
        <div style={{ color: 'var(--text)', lineHeight: 1.7, fontSize: '0.92rem', marginTop: '18px' }}>
          <h4 style={{ color: 'var(--gold)', marginTop: '20px', marginBottom: '8px', fontSize: '0.95rem' }}>Who This Applies To</h4>
          <p>These terms cover vajratrix.github.io — the Vajratrix Group website itself. Our individual open-source projects (Daily DNA, ExamForge, and future ones like our planned Discussion Forum) may carry their own separate license terms in their respective repositories.</p>

          <h4 style={{ color: 'var(--gold)', marginTop: '20px', marginBottom: '8px', fontSize: '0.95rem' }}>Open Source</h4>
          <p>This website's own source code is open-source under the MIT License — see our <a href="https://github.com/vajratrix/vajratrix.github.io/blob/main/LICENSE" target="_blank" rel="noopener" style={{ color: 'var(--gold)' }}>LICENSE file</a> for the full license text. You're free to view, fork, and reuse it under those terms.</p>

          <h4 style={{ color: 'var(--gold)', marginTop: '20px', marginBottom: '8px', fontSize: '0.95rem' }}>No Warranty</h4>
          <p>This site and the information on it are provided "as is," without warranty of any kind. As a volunteer-run, non-commercial collective, we make reasonable effort to keep information accurate and the site running, but we can't guarantee uninterrupted availability or that every statement on the site is error-free.</p>

          <h4 style={{ color: 'var(--gold)', marginTop: '20px', marginBottom: '8px', fontSize: '0.95rem' }}>Acceptable Use</h4>
          <p>Please don't use our Contact or Feedback forms to submit spam, malicious content, or anything illegal. We reserve the right to ignore or block submissions that violate this.</p>

          <h4 style={{ color: 'var(--gold)', marginTop: '20px', marginBottom: '8px', fontSize: '0.95rem' }}>Intellectual Property</h4>
          <p>The Vajratrix name, logo, and brand assets are the property of Vajratrix Group, except where we've explicitly open-sourced them. Our published code is separately licensed as noted above.</p>

          <h4 style={{ color: 'var(--gold)', marginTop: '20px', marginBottom: '8px', fontSize: '0.95rem' }}>Third-Party Links</h4>
          <p>This site may link to third-party sites (like GitHub). We aren't responsible for the content or practices of sites we don't control.</p>

          <h4 style={{ color: 'var(--gold)', marginTop: '20px', marginBottom: '8px', fontSize: '0.95rem' }}>Limitation of Liability</h4>
          <p>To the fullest extent permitted by law, Vajratrix Group and its members aren't liable for any damages arising from your use of this site or our free, open-source tools.</p>

          <h4 style={{ color: 'var(--gold)', marginTop: '20px', marginBottom: '8px', fontSize: '0.95rem' }}>Governing Law</h4>
          <p>These terms are governed by the laws of India. This section, like the rest of this document, is a plain-language starting point — not a substitute for advice from a qualified lawyer, particularly if you plan to offer paid services in the future.</p>

          <h4 style={{ color: 'var(--gold)', marginTop: '20px', marginBottom: '8px', fontSize: '0.95rem' }}>Changes to These Terms</h4>
          <p>We may update these terms as the site or our offerings evolve. The "Last updated" date at the top reflects the most recent revision.</p>

          <h4 style={{ color: 'var(--gold)', marginTop: '20px', marginBottom: '8px', fontSize: '0.95rem' }}>Contact</h4>
          <p>Questions about these terms? Email us at connect2vajratrix@gmail.com.</p>
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
