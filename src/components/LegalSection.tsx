import PrivacyPolicy from './PrivacyPolicy'
import TermsOfUse from './TermsOfUse'

export default function LegalSection() {
  return (
<section id="legal">
  <div className="legal-header">
    <div className="section-label">Compliance</div>
    <h2 className="section-title">Legal & <span>Policies</span></h2>
    <div className="gold-line"></div>
    <p className="section-desc">Straightforward terms and privacy practices, plainly written.</p>
  </div>
  <div className="legal-grid">
    <PrivacyPolicy />
    <TermsOfUse />
  </div>
</section>
  )
}
