import { useState } from 'react'
import { submitForm } from '../utils/submitForm'

const ENDPOINT = 'https://script.google.com/macros/s/AKfycbwSW9B52m558zV8cPzZqxclRj8Wo6sGII8NGUUZatb-dIC1iKY9F2CrKfDqzAIVATqi5Q/exec'

export default function Feedback() {
  const [rating, setRating] = useState(0)
  const [status, setStatus] = useState<{ sending: boolean; message: string | null; ok: boolean }>({
    sending: false,
    message: null,
    ok: false,
  })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus({ sending: true, message: null, ok: false })
    const result = await submitForm(
  ENDPOINT,
  e.currentTarget,
  "Thanks for sharing your feedback - it genuinely helps us improve. 🔱"
)
    setStatus({ sending: false, message: result.message, ok: result.ok })
    if (result.ok) {
      e.currentTarget.reset()
      setRating(0)
    }
  }

  return (
    <section id="feedback">
      <div className="feedback-wrap">
        <div className="feedback-header">
          <div className="section-label">Your Voice Matters</div>
          <h2 className="section-title">Share Your <span>Feedback</span></h2>
          <div className="gold-line"></div>
          <p className="section-desc">Help us grow by sharing your experience, suggestions, or concerns. Every feedback is reviewed by our founding team personally.</p>
        </div>
        <form className="feedback-form" onSubmit={handleSubmit}>
          <input type="hidden" name="_form" value="Feedback Form" />
          <input type="hidden" name="rating" value={rating} />
          {/* Honeypot — real visitors never see or fill this; bots often do */}
          <input
            type="text"
            name="_honeypot"
            tabIndex={-1}
            autoComplete="off"
            style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px' }}
            aria-hidden="true"
          />

          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Full Name</label>
              <input type="text" name="name" className="form-input" placeholder="Your name" required />
            </div>
            <div className="form-group">
              <label className="form-label">Email Address</label>
              <input type="email" name="email" className="form-input" placeholder="your@email.com" required />
            </div>
          </div>
          <div className="form-group">
            <label className="form-label">Feedback Type</label>
            <select className="form-select" name="feedback_type">
              <option>General Feedback</option>
              <option>Service Review</option>
              <option>Security Report</option>
              <option>Partnership Inquiry</option>
              <option>Product Suggestion</option>
              <option>Complaint</option>
            </select>
          </div>
          <div className="form-group">
            <label className="form-label">Rate Your Experience</label>
            <div className="rating-row">
              {[1, 2, 3, 4, 5].map((n) => (
                <span
                  key={n}
                  className={`star${n <= rating ? ' active' : ''}`}
                  onClick={() => setRating(n)}
                >
                  ★
                </span>
              ))}
            </div>
          </div>
          <div className="form-group">
            <label className="form-label">Your Message</label>
            <textarea name="message" className="form-textarea" placeholder="Share your thoughts, suggestions, or experience with us..." required></textarea>
          </div>
          <div className="form-group" style={{ marginTop: '8px' }}>
            <button type="submit" className="btn-primary" style={{ width: '100%' }} disabled={status.sending}>
              {status.sending ? 'Sending…' : 'Submit Feedback →'}
            </button>
          </div>
          {status.message && (
            <p style={{ marginTop: '12px', fontSize: '0.85rem', color: status.ok ? '#4ade80' : '#f87171' }}>
              {status.message}
            </p>
          )}
        </form>
      </div>
    </section>
  )
}