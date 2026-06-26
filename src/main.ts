type Tone = 'green' | 'amber' | 'red' | 'blue';
type Stat = { label: string; value: string; detail: string; icon: string; tone: Tone };
type PaymentMethod = 'Cash' | 'Transfer' | 'POS' | 'QR';
type Transaction = { customer: string; item: string; amount: string; method: PaymentMethod; time: string };
type NavItem = { label: string; icon: string };

const merchant = {
  businessName: 'Amaka’s Campus Kitchen',
  businessType: 'Campus food vendor',
  sales: '₦82,500',
  profit: '₦21,800',
  debt: '₦13,500',
  creditReadiness: '76/100',
  riskAlerts: '2',
  stockAlerts: '4',
};

const stats: Stat[] = [
  { label: 'Today’s Sales', value: merchant.sales, detail: '+18% vs. yesterday', icon: '💳', tone: 'green' },
  { label: 'Today’s Profit', value: merchant.profit, detail: 'Estimated from mock ledger', icon: '📈', tone: 'blue' },
  { label: 'Outstanding Debt', value: merchant.debt, detail: 'Follow-up needed today', icon: '🧾', tone: 'amber' },
  { label: 'Stock Alerts', value: merchant.stockAlerts, detail: 'Drinks, rice, chicken, water', icon: '📦', tone: 'amber' },
  { label: 'Credit Readiness', value: merchant.creditReadiness, detail: 'Strong business memory', icon: '📄', tone: 'green' },
  { label: 'Risk Alerts', value: merchant.riskAlerts, detail: 'Review duplicate claims', icon: '🛡️', tone: 'red' },
];

const transactions: Transaction[] = [
  { customer: 'Adaeze', item: 'Jollof rice + drink', amount: '₦3,200', method: 'Cash', time: '2 min ago' },
  { customer: 'Tunde', item: 'Fried rice pack', amount: '₦2,800', method: 'Transfer', time: '9 min ago' },
  { customer: 'POS walk-in', item: 'Rice + chicken x2', amount: '₦7,000', method: 'POS', time: '18 min ago' },
  { customer: 'Chika', item: 'Snack bundle', amount: '₦1,600', method: 'QR', time: '31 min ago' },
];

const navItems: NavItem[] = [
  { label: 'Dashboard', icon: '⌂' },
  { label: 'Ledger', icon: '☰' },
  { label: 'Debt', icon: '₦' },
  { label: 'Fraud', icon: '!' },
  { label: 'Report', icon: '▤' },
];

const disclaimer = 'Prototype only. PayLedger AI does not process or verify real payments.';

function statCard(stat: Stat): string {
  return `
    <article class="stat-card ${stat.tone}">
      <div class="stat-icon">${stat.icon}</div>
      <p>${stat.label}</p>
      <strong>${stat.value}</strong>
      <span>${stat.detail}</span>
    </article>`;
}

function transactionRow(transaction: Transaction): string {
  const icon = transaction.method === 'QR' ? '▦' : '💳';
  return `
    <div class="transaction-row">
      <div class="method-icon" aria-hidden="true">${icon}</div>
      <div class="transaction-copy">
        <strong>${transaction.item}</strong>
        <span>${transaction.customer} • ${transaction.time}</span>
      </div>
      <div class="transaction-meta">
        <strong>${transaction.amount}</strong>
        <span>${transaction.method}</span>
      </div>
    </div>`;
}

function bottomNav(): string {
  return `
    <nav class="bottom-nav" aria-label="Prototype sections">
      ${navItems.map((item, index) => `
        <a class="${index === 0 ? 'active' : ''}" href="#dashboard">
          <span class="nav-icon">${item.icon}</span>
          <span>${item.label}</span>
        </a>`).join('')}
    </nav>`;
}

function renderApp(): string {
  return `
    <main class="app-shell">
      <section class="hero-card" aria-labelledby="product-title">
        <div class="eyebrow">Merchant trust + credit readiness</div>
        <h1 id="product-title">PayLedger AI turns everyday sales into reliable business memory.</h1>
        <p>
          Built for Nigerian campus vendors, student entrepreneurs, POS agents, and informal traders who need safer records,
          debt visibility, fraud-risk alerts, inventory insight, and lender-ready reports.
        </p>
        <div class="hero-actions">
          <a href="#dashboard" class="primary-action">View demo dashboard</a>
          <span class="prototype-pill">Prototype only</span>
        </div>
        <p class="disclaimer">${disclaimer}</p>
      </section>

      <section id="dashboard" class="phone-frame" aria-label="Merchant dashboard prototype">
        <header class="dashboard-header">
          <div>
            <p class="greeting">Good afternoon</p>
            <h2>${merchant.businessName}</h2>
            <span>${merchant.businessType}</span>
          </div>
          <div class="logo-badge">🛍️</div>
        </header>

        <section class="summary-grid" aria-label="Today’s merchant metrics">
          ${stats.map(statCard).join('')}
        </section>

        <article class="ai-card">
          <div class="ai-icon">🤖</div>
          <div>
            <p>AI Insight</p>
            <strong>Your food sales increased today. Rice and drinks sold fastest. Restock drinks before evening rush and follow up with customers owing ₦13,500.</strong>
          </div>
        </article>

        <section class="transactions-card" aria-labelledby="transactions-title">
          <div class="section-heading">
            <div>
              <p>Live mock ledger</p>
              <h3 id="transactions-title">Recent transactions</h3>
            </div>
            <span class="arrow">↗</span>
          </div>
          ${transactions.map(transactionRow).join('')}
        </section>

        <section class="why-card">
          <h3>Why this matters</h3>
          <p>PayLedger AI helps informal merchants stay organized, spot risky payment stories, remember who owes them, and build the trusted records they need to become credit-ready without handling real payments.</p>
        </section>

        <p class="dashboard-disclaimer">${disclaimer}</p>
        ${bottomNav()}
      </section>
    </main>`;
}

const root = document.querySelector<HTMLDivElement>('#root');
if (root) root.innerHTML = renderApp();
