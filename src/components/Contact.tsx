import { useState } from 'react'
import { submitForm } from '../utils/submitForm'

const ENDPOINT = 'https://script.google.com/macros/s/AKfycbwSW9B52m558zV8cPzZqxclRj8Wo6sGII8NGUUZatb-dIC1iKY9F2CrKfDqzAIVATqi5Q/exec'

export default function Contact() {
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
  "Thanks for reaching out - we've received your message and will get back to you soon. 🔱"
)
    setStatus({ sending: false, message: result.message, ok: result.ok })
    if (result.ok) e.currentTarget.reset()
  }

  return (
    <section id="contact">
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div className="section-label">Get In Touch</div>
        <h2 className="section-title">Connect With <span>Vajratrix</span></h2>
        <div className="gold-line"></div>
      </div>
      <div className="contact-grid">
        <div className="contact-info">
          <p className="section-desc" style={{ marginBottom: '40px' }}>Ready to collaborate, invest, or explore our services? Our team is available to discuss your needs and build a lasting partnership.</p>
          <div className="contact-item">
            <div className="contact-icon">📍</div>
            <div>
              <div className="contact-detail-label">Headquarters</div>
              <div className="contact-detail-val">Kolkata, West Bengal, India</div>
            </div>
          </div>
          <div className="contact-item">
            <div className="contact-icon">📧</div>
            <div>
              <div className="contact-detail-label">Email</div>
              <div className="contact-detail-val">connect2vajratrix@gmail.com</div>
            </div>
          </div>
          <div className="contact-item">
            <div className="contact-icon">🌐</div>
            <div>
              <div className="contact-detail-label">Website</div>
              <div className="contact-detail-val">https://vajratrix.github.io</div>
            </div>
          </div>
          <div className="contact-item">
            <div className="contact-icon">🔱</div>
            <div>
              <div className="contact-detail-label">Our Pillars</div>
              <div className="contact-detail-val">Technology · Strategy · Information</div>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="feed-title" style={{ marginBottom: '24px' }}>Send Us a Message</div>

          <input type="hidden" name="_form" value="Contact Form" />
          {/* Honeypot — real visitors never see or fill this; bots often do */}
          <input
            type="text"
            name="_honeypot"
            tabIndex={-1}
            autoComplete="off"
            style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px' }}
            aria-hidden="true"
          />

          <div className="form-group">
            <label className="form-label">Name</label>
            <input type="text" name="name" className="form-input" placeholder="Your full name" required />
          </div>
          <div className="form-group">
            <label className="form-label">Email</label>
            <input type="email" name="email" className="form-input" placeholder="your@email.com" required />
          </div>
          <div className="form-group">
            <label className="form-label">Subject</label>
            <select className="form-select" name="subject">
              <option>Client Inquiry</option>
              <option>Partnership Proposal</option>
              <option>Investment Interest</option>
              <option>Product Purchase</option>
              <option>General Query</option>
            </select>
          </div>
          <div className="form-group">
            <label className="form-label">Message</label>
            <textarea name="message" className="form-textarea" placeholder="Tell us about your project or query..." required></textarea>
          </div>
          <button type="submit" className="btn-primary" style={{ width: '100%' }} disabled={status.sending}>
            {status.sending ? 'Sending…' : 'Send Message →'}
          </button>
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