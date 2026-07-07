import { useState } from 'react'

export default function PrivacyPolicy() {
  const [expanded, setExpanded] = useState(false)

  return (
    <div id="privacy-policy" style={{
      background: 'var(--navy2)',
      border: '1px solid var(--border)',
      borderRadius: '8px',
      padding: '32px',
      flex: 1,
      minWidth: '300px',
    }}>
      <div className="section-label" style={{ fontSize: '0.7rem' }}>Legal</div>
      <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.6rem', color: 'var(--white)', margin: '6px 0 4px' }}>
        Privacy <span style={{ color: 'var(--gold)' }}>Policy</span>
      </h3>
      <p style={{ fontSize: '0.78rem', color: 'var(--muted)', marginBottom: '16px' }}>Last updated: 2026</p>

      <p style={{ color: 'var(--text)', lineHeight: 1.7, fontSize: '0.92rem' }}>
        We only collect what you submit via our Contact and Feedback forms (name, email, message) plus basic anonymous site analytics. We never sell or share your data with third parties.
      </p>

      {expanded && (
        <div style={{ color: 'var(--text)', lineHeight: 1.7, fontSize: '0.92rem', marginTop: '18px' }}>
          <h4 style={{ color: 'var(--gold)', marginTop: '20px', marginBottom: '8px', fontSize: '0.95rem' }}>Who We Are</h4>
          <p>Vajratrix Group is an open-source collective based in Kolkata, West Bengal, India. This policy covers vajratrix.github.io and the forms on it. It does not cover third-party sites we link to, or the privacy practices of Daily DNA or ExamForge individually — refer to each product's own documentation for that.</p>

          <h4 style={{ color: 'var(--gold)', marginTop: '20px', marginBottom: '8px', fontSize: '0.95rem' }}>What We Collect</h4>
          <p><strong>Form submissions:</strong> When you use our Contact or Feedback forms, we collect whatever you type into them — typically your name, email address, and message (and a star rating, for Feedback). This is sent directly to our inbox; we don't store it in a separate database beyond that.</p>
          <p style={{ marginTop: '10px' }}><strong>Basic site analytics:</strong> We use Google Analytics to understand how many people visit the site and which pages they view. This may involve cookies and collects general information like browser type, approximate location (country/city level), and device type — not your name or email unless you separately submit it via a form. Google's own privacy policy governs how they process this data.</p>

          <h4 style={{ color: 'var(--gold)', marginTop: '20px', marginBottom: '8px', fontSize: '0.95rem' }}>How We Use It</h4>
          <p>Form submissions are used only to respond to you — nothing else. We don't sell, rent, or share your information with third parties for marketing. Analytics data is used in aggregate to understand site traffic and improve the site; we don't use it to identify individual visitors.</p>

          <h4 style={{ color: 'var(--gold)', marginTop: '20px', marginBottom: '8px', fontSize: '0.95rem' }}>Where It's Processed</h4>
          <p>Form submissions are routed through a Google Apps Script tied to our Gmail account (connect2vajratrix@gmail.com) — meaning Google processes this data as our email provider, under their own security and privacy practices. We don't use any other third-party form service.</p>

          <h4 style={{ color: 'var(--gold)', marginTop: '20px', marginBottom: '8px', fontSize: '0.95rem' }}>Your Rights</h4>
          <p>You can ask us to delete any information you've submitted via our forms at any time — just email connect2vajratrix@gmail.com and we'll remove it from our inbox. Since we're a small volunteer-run group, we handle these requests personally and will respond as promptly as we can.</p>

          <h4 style={{ color: 'var(--gold)', marginTop: '20px', marginBottom: '8px', fontSize: '0.95rem' }}>Children's Privacy</h4>
          <p>This site is not directed at children under 13, and we don't knowingly collect information from them.</p>

          <h4 style={{ color: 'var(--gold)', marginTop: '20px', marginBottom: '8px', fontSize: '0.95rem' }}>Changes to This Policy</h4>
          <p>We may update this policy as the site or our products evolve. The "Last updated" date at the top will reflect the most recent revision.</p>

          <h4 style={{ color: 'var(--gold)', marginTop: '20px', marginBottom: '8px', fontSize: '0.95rem' }}>Contact</h4>
          <p>Questions about this policy? Email us at connect2vajratrix@gmail.com.</p>
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