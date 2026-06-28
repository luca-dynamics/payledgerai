type Tone = 'green' | 'blue' | 'amber' | 'red' | 'purple';
type Metric = { label: string; value: string; detail: string; tone: Tone; icon: string };
type PaymentMethod = 'Cash' | 'Transfer' | 'POS' | 'QR';
type Transaction = { customer: string; item: string; amount: string; method: PaymentMethod; time: string };

const metrics: Metric[] = [
  { label: "Today's Sales", value: '₦82,500', detail: '+18% vs yesterday', tone: 'green', icon: '💳' },
  { label: "Today's Profit", value: '₦21,800', detail: 'Estimated margin 26%', tone: 'blue', icon: '📈' },
  { label: 'Outstanding Debt', value: '₦13,500', detail: '6 customers to follow up', tone: 'amber', icon: '🤝' },
  { label: 'Stock Alerts', value: '4', detail: 'Drinks, rice, packs, oil', tone: 'purple', icon: '📦' },
  { label: 'Credit Readiness', value: '76/100', detail: 'Clean records improving', tone: 'green', icon: '✅' },
  { label: 'Risk Alerts', value: '2', detail: 'Needs dispute notes', tone: 'red', icon: '🛡️' },
];

const transactions: Transaction[] = [
  { customer: 'Tobi A.', item: 'Jollof rice + drink', amount: '₦3,200', method: 'Transfer', time: '2:45 PM' },
  { customer: 'Ada M.', item: 'Fried rice bowls', amount: '₦5,500', method: 'POS', time: '2:18 PM' },
  { customer: 'Hall 3 order', item: '10 lunch packs', amount: '₦18,000', method: 'QR', time: '1:52 PM' },
  { customer: 'Chinedu', item: 'Beans and plantain', amount: '₦2,400', method: 'Cash', time: '1:05 PM' },
];

const methodIcons: Record<PaymentMethod, string> = {
  Cash: '🏦',
  Transfer: '💳',
  POS: '🛍️',
  QR: '▦',
};

const navItems = [
  { label: 'Dashboard', icon: '⌂', active: true },
  { label: 'Ledger', icon: '☰' },
  { label: 'Debt', icon: '₦' },
  { label: 'Fraud', icon: '!' },
  { label: 'Report', icon: '▥' },
];

function escapeHtml(value: string): string {
  return value.replace(/[&<>"]/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[char] ?? char);
}

function metricCard(metric: Metric): string {
  return `
    <article class="metric-card ${metric.tone}">
      <div class="metric-icon" aria-hidden="true">${metric.icon}</div>
      <p>${escapeHtml(metric.label)}</p>
      <strong>${escapeHtml(metric.value)}</strong>
      <span>${escapeHtml(metric.detail)}</span>
    </article>`;
}

function transactionRow(transaction: Transaction): string {
  return `
    <article class="transaction-row">
      <div class="method-icon" aria-hidden="true">${methodIcons[transaction.method]}</div>
      <div>
        <strong>${escapeHtml(transaction.customer)}</strong>
        <p>${escapeHtml(transaction.item)} · ${transaction.method}</p>
      </div>
      <div class="amount-block"><strong>${escapeHtml(transaction.amount)}</strong><span>${escapeHtml(transaction.time)}</span></div>
    </article>`;
}

function renderApp(): void {
  const root = document.querySelector<HTMLDivElement>('#root');
  if (!root) throw new Error('Root element not found');

  root.innerHTML = `
    <main class="app-shell">
      <section class="phone-frame" aria-label="PayLedger AI mobile prototype">
        <header class="hero-card">
          <div class="brand-row">
            <div class="logo-mark">PL</div>
            <div>
              <p class="eyebrow">OPay Scholars Challenge Prototype</p>
              <h1>PayLedger AI</h1>
            </div>
          </div>
          <p class="hero-copy">AI business memory for campus and informal commerce.</p>
          <p class="hero-subcopy">Merchant intelligence for cash, transfer, POS, and QR transactions after payment happens.</p>
          <div class="pill-row"><span>Fraud-risk guidance</span><span>Credit-readiness report</span></div>
          <p class="disclaimer">Prototype only. PayLedger AI does not process or verify real payments.</p>
        </header>

        <section class="dashboard-card">
          <div class="merchant-header">
            <div>
              <p class="eyebrow">Student entrepreneur / campus vendor</p>
              <h2>Amaka’s Campus Kitchen</h2>
              <p>Campus food vendor</p>
            </div>
            <div class="readiness-ring" aria-label="Credit readiness 76 out of 100">76</div>
          </div>

          <div class="metrics-grid">${metrics.map(metricCard).join('')}</div>

          <article class="insight-card">
            <div class="section-title"><span>🤖 AI Insight</span><span>✨</span></div>
            <p>Your food sales increased today. Rice and drinks sold fastest. Restock drinks before evening rush and follow up with customers owing ₦13,500.</p>
            <small>Gemini-style merchant coaching using mock ledger patterns.</small>
          </article>

          <section class="content-panel">
            <div class="section-title"><span>📒 Recent transactions</span><span>›</span></div>
            <div class="transaction-list">${transactions.map(transactionRow).join('')}</div>
            <p class="microcopy">Fraud-risk guidance, not bank verification.</p>
          </section>

          <section class="content-panel story-panel">
            <h3>Why this matters</h3>
            <ul>
              <li>Many student entrepreneurs, campus vendors, POS agents, and informal traders receive payments daily but lack trusted records.</li>
              <li>PayLedger AI helps them stay organized after payment.</li>
              <li>PayLedger AI helps reduce payment disputes through fraud-risk guidance.</li>
              <li>PayLedger AI helps merchants become more credit-ready through clean business records.</li>
            </ul>
          </section>

          <section class="content-panel story-panel innovation-panel">
            <h3>Innovation Fit</h3>
            <div class="fit-list">
              <p><strong>OPay fit:</strong> supports merchants and digital payment users after transactions happen.</p>
              <p><strong>Google/Gemini fit:</strong> AI-powered business insight and merchant coaching.</p>
              <p><strong>3MTT fit:</strong> software development, AI, data analysis, UI/UX, and cybersecurity-awareness skills.</p>
              <p><strong>Student fit:</strong> starts with campus vendors and student entrepreneurs, then scales to informal merchants.</p>
            </div>
            <p class="disclaimer compact">Prototype only. PayLedger AI does not process or verify real payments.</p>
          </section>
        </section>

        <nav class="bottom-nav" aria-label="Primary navigation">
          ${navItems.map((item) => `<button class="${item.active ? 'active' : ''}" type="button"><span aria-hidden="true">${item.icon}</span><span>${item.label}</span></button>`).join('')}
        </nav>
      </section>
    </main>`;
}

renderApp();
