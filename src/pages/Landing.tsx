import { Link } from 'react-router-dom'
import Disclaimer from '../components/Disclaimer'
import PhonePreview from '../components/PhonePreview'
import Reveal from '../components/Reveal'

const audiences = [
  'Campus food vendors',
  'Student entrepreneurs',
  'POS agents',
  'Informal traders',
]

const stats = [
  { value: '4', label: 'Payment types unified', hint: 'Cash · Transfer · POS · QR' },
  { value: '76', label: 'Credit readiness score', hint: 'Built from clean records' },
  { value: '0', label: 'Real payments touched', hint: 'Prototype, by design' },
]

const modules = [
  { name: 'Smart Ledger', desc: 'Turn cash, transfer, POS & QR into trusted records.', glyph: '₦' },
  { name: 'Fraud Shield', desc: 'Fraud-risk guidance before disputes happen.', glyph: '🛡' },
  { name: 'Debt Book', desc: 'Track who owes you and follow up on time.', glyph: '↺' },
  { name: 'Credit Readiness', desc: 'Clean records that build credit-readiness.', glyph: '★' },
]

export default function Landing() {
  return (
    <div className="landing">
      <div className="landing-glow" aria-hidden="true" />
      <div className="landing-grid" aria-hidden="true" />

      <header className="landing-top">
        <div className="nav-inner">
          <span className="brand">
            <span className="brand-mark" aria-hidden="true">
              ₦
            </span>
            PayLedger&nbsp;AI
          </span>
          <div className="nav-right">
            <Disclaimer variant="pill" />
            <Link to="/app" className="nav-cta">
              Open app
            </Link>
          </div>
        </div>
      </header>

      <section className="hero">
        <div className="hero-inner">
          <div className="hero-copy">
            <Reveal delay={0}>
              <p className="hero-tag">
                <span className="tag-dot" aria-hidden="true" />
                AI business memory for campus &amp; informal commerce
              </p>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="hero-title">
                Every payment becomes a <span className="hl">trusted record</span>.
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="hero-sub">
                Merchant intelligence for cash, transfer, POS and QR transactions — with
                fraud-risk guidance and a credit-readiness report. Not an expense tracker.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="hero-cta">
                <Link to="/app" className="btn btn-primary">
                  Open merchant dashboard
                  <span className="btn-arrow" aria-hidden="true">
                    →
                  </span>
                </Link>
                <a href="#why" className="btn btn-ghost">
                  Why it matters
                </a>
              </div>
            </Reveal>

            <Reveal delay={320}>
              <ul className="audience-row">
                {audiences.map((a) => (
                  <li key={a} className="audience-chip">
                    {a}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={200} className="hero-visual">
            <PhonePreview />
          </Reveal>
        </div>
      </section>

      <div className="container">
        <Reveal delay={0}>
          <ul className="stat-strip">
            {stats.map((s) => (
              <li key={s.label} className="strip-item">
                <span className="strip-value">{s.value}</span>
                <span className="strip-label">{s.label}</span>
                <span className="strip-hint">{s.hint}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      <div className="container">
        <Reveal as="section" className="problem-card">
          <h2 className="block-title">The problem</h2>
          <p>
            Millions of Nigerian merchants receive money every day across cash, transfer,
            POS and QR — but the record disappears the moment the payment lands. No trusted
            history means disputes, forgotten debts, and no path to credit.
          </p>
          <p className="problem-line">
            PayLedger AI is the <strong>business memory</strong> that starts working{' '}
            <em>after</em> the payment.
          </p>
        </Reveal>
      </div>

      <section id="why" className="modules-section">
        <div className="container">
          <Reveal>
            <h2 className="block-title section-center">What PayLedger AI does</h2>
          </Reveal>
          <div className="module-grid">
            {modules.map((m, i) => (
              <Reveal key={m.name} delay={i * 90}>
                <div className="module-card">
                  <span className="module-glyph" aria-hidden="true">
                    {m.glyph}
                  </span>
                  <h3>{m.name}</h3>
                  <p>{m.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="container">
        <Reveal as="section" className="landing-foot">
          <h2 className="foot-title">See the prototype in action</h2>
          <p className="foot-sub">
            Open the merchant dashboard and walk through Ledger, Debt, Fraud and the
            credit-readiness report.
          </p>
          <Link to="/app" className="btn btn-primary btn-wide">
            See the live prototype
            <span className="btn-arrow" aria-hidden="true">
              →
            </span>
          </Link>
          <Disclaimer />
          <p className="builtfor">
            Built for the OPay Scholars National Innovation Challenge · OPay ·
            Google/Gemini · 3MTT
          </p>
        </Reveal>
      </div>
    </div>
  )
}
