import { Link } from 'react-router-dom'
import Disclaimer from '../components/Disclaimer'

const audiences = [
  'Campus food vendors',
  'Student entrepreneurs',
  'POS agents',
  'Informal traders',
]

const modules = [
  { name: 'Smart Ledger', desc: 'Turn cash, transfer, POS & QR into trusted records.' },
  { name: 'Fraud Shield', desc: 'Fraud-risk guidance before disputes happen.' },
  { name: 'Debt Book', desc: 'Track who owes you and follow up on time.' },
  { name: 'Credit Readiness', desc: 'Clean records that build credit-readiness.' },
]

export default function Landing() {
  return (
    <div className="landing">
      <div className="landing-glow" aria-hidden="true" />

      <header className="landing-top">
        <span className="brand">
          <span className="brand-mark" aria-hidden="true">
            ₦
          </span>
          PayLedger&nbsp;AI
        </span>
        <Disclaimer variant="pill" />
      </header>

      <section className="hero">
        <p className="hero-tag">AI business memory for campus &amp; informal commerce</p>
        <h1 className="hero-title">
          Every payment becomes a <span className="hl">trusted record</span>.
        </h1>
        <p className="hero-sub">
          Merchant intelligence for cash, transfer, POS and QR transactions — with
          fraud-risk guidance and a credit-readiness report. Not an expense tracker.
        </p>

        <div className="hero-cta">
          <Link to="/app" className="btn btn-primary">
            Open merchant dashboard
          </Link>
          <a href="#why" className="btn btn-ghost">
            Why it matters
          </a>
        </div>

        <ul className="audience-row">
          {audiences.map((a) => (
            <li key={a} className="audience-chip">
              {a}
            </li>
          ))}
        </ul>
      </section>

      <section className="problem-card">
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
      </section>

      <section id="why" className="modules">
        <h2 className="block-title">What PayLedger AI does</h2>
        <div className="module-grid">
          {modules.map((m) => (
            <div key={m.name} className="module-card">
              <h3>{m.name}</h3>
              <p>{m.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="landing-foot">
        <Link to="/app" className="btn btn-primary btn-wide">
          See the live prototype
        </Link>
        <Disclaimer />
        <p className="builtfor">
          Built for the OPay Scholars National Innovation Challenge · OPay ·
          Google/Gemini · 3MTT
        </p>
      </section>
    </div>
  )
}
