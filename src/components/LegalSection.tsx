import PrivacyPolicy from './PrivacyPolicy'
import TermsOfUse from './TermsOfUse'

export default function LegalSection() {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: '24px',
        flexWrap: 'wrap',
        maxWidth: '1100px',
        margin: '60px auto',
        padding: '0 24px',
      }}
    >
      <PrivacyPolicy />
      <TermsOfUse />
    </div>
  )
}