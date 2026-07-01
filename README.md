# PayLedger AI

**AI business memory for campus and informal commerce.**
Merchant intelligence for cash, transfer, POS, and QR transactions.

> **Prototype only. PayLedger AI does not process or verify real payments.**

**▶ Live demo:** https://payledgerai.vercel.app/

PayLedger AI is a mobile-first prototype built for the **OPay Scholars National
Innovation Challenge**, in the partnership direction involving **OPay**,
**Google / Gemini**, and **3MTT**.

> **One-line pitch:** PayLedger AI turns a merchant's daily cash, transfer, POS
> and QR payments into trusted records, fraud-risk guidance, debt tracking and a
> credit-readiness report — **business memory for informal commerce, not an
> expense tracker.**

### ▶ For judges — quick start

```bash
npm install && npm run dev
```

Open the printed URL (default `http://localhost:5173`) in a **phone-width
window**. Then follow the **[3-minute demo script](DEMO.md)** — it walks the
landing page → dashboard → Ledger → Debt → Fraud → Report → challenge fit in
under three minutes.

The product story is readable in ~10 seconds on the dashboard: sales, profit,
debt, risk, an AI recommendation, and mixed payment methods, all on one screen.

---

## Product concept

Nigerian campus vendors, student entrepreneurs, POS agents, and informal traders
receive money every day — across cash, transfer, POS, and QR — but the **record of
that money disappears** the moment the payment lands. No trusted history means disputes,
forgotten debts, and no path to credit.

PayLedger AI is the **business memory that starts working _after_ the payment**. It
turns daily transactions into trusted business records, fraud-risk alerts, debt
tracking, inventory insights, and a credit-readiness report.

**This is not an expense tracker.** It is a merchant trust, business memory,
fraud-awareness, and credit-readiness system for informal commerce.

---

## Target users

- Campus food vendors (e.g. _Amaka's Campus Kitchen_, the mock merchant in this demo)
- Student entrepreneurs
- POS agents
- Informal traders and small merchants

Starts with campus vendors and student entrepreneurs, then scales to the wider informal
merchant economy.

---

## Core modules

| Module | What it does |
| --- | --- |
| **Dashboard** | A premium merchant workspace: hero banner with credit readiness, quick actions (record sale, new debt, scan QR, view report), the six at-a-glance metrics, an AI insight card, and recent transactions. |
| **Smart Ledger** | Records every cash, transfer, POS, and QR payment as a trusted business record, filterable by method. |
| **Debt Book** | Tracks who owes the merchant, since when, and follow-up status with simple risk levels. |
| **Fraud Shield** | A suspicious-payment log and a fraud-awareness checklist — guidance, not bank verification. |
| **Credit Readiness Report** | A 0–100 readiness score explained by clear factors, plus an inventory tracker. |

Navigation is a mobile bottom bar: **Dashboard · Ledger · Debt · Fraud · Report**.

---

## Why it is not just an expense tracker

An expense tracker tells you where your money went. PayLedger AI does something
different for informal merchants:

- **Business memory, not bookkeeping** — it captures _who_ paid, _how_ (cash / transfer /
  POS / QR), and _what is still owed_, building a trusted history.
- **Fraud-risk guidance** — it flags suspicious payment patterns and coaches safe habits
  to reduce disputes (it does **not** detect fraud from bank data).
- **Credit readiness** — clean records produce a credit-readiness report, helping
  merchants become more bankable over time (it is **not** a loan approval).
- **AI merchant coaching** — a Gemini-style assistant turns the day's activity into plain
  next actions ("restock drinks before evening rush, follow up on ₦13,500 owed").

---

## How it fits the challenge

- **OPay fit** — supports merchants and digital-payment users _after_ transactions
  happen, complementing the payment rails rather than replacing them.
- **Google / Gemini fit** — AI-powered business insight and merchant coaching.
- **3MTT fit** — demonstrates software development, AI/ML, data analysis, UI/UX design,
  and cybersecurity awareness.
- **Student fit** — starts with campus vendors and student entrepreneurs, then scales to
  informal merchants nationwide.

**Focus areas:** fintech & digital payments, and digital tools for SMEs and the informal
sector — supported by AI/automation, fraud awareness, data/business intelligence, and
student entrepreneurship.

---

## What is mocked in this prototype

Everything in this build is demonstration data:

- The merchant (**Amaka's Campus Kitchen**), sales, profit, debt, and readiness figures.
- All transactions, debtors, fraud flags, and inventory items (see
  [`src/data/mockData.ts`](src/data/mockData.ts)).
- The "AI Insight" is a written, representative example of Gemini-style coaching — no
  live model call is made.

No backend, database, payment gateway, or bank connection is involved.

---

## Safety disclaimer

> **Prototype only. PayLedger AI does not process or verify real payments.**

- It does **not** process payments or move money.
- It does **not** verify bank or transfer transactions.
- It does **not** approve loans or perform real fraud detection from bank data.
- Fraud features are **fraud-risk guidance**, and the score is a **credit-readiness
  report** — not bank verification or loan approval.

---

## Future modules

- **Smart Ledger** (expanded auto-categorization)
- **Fraud Shield** (richer suspicious-pattern detection)
- **Debt Book** (automated reminders)
- **Inventory Tracker** (restock forecasting)
- **Credit Readiness Report** (lender-shareable summary)
- **Gemini-powered Merchant Coach** (live AI insights)
- **QR receipt mode** (instant digital receipts)
- **Suspicious payment dispute log** (structured dispute records)

---

## Run locally

```bash
npm install
npm run dev
```

Then open the printed local URL (default `http://localhost:5173`). Best viewed in a
phone-width viewport — the app is mobile-first.

```bash
npm run build    # type-check + production build
npm run preview  # preview the production build
```

### Tech

React + TypeScript + Vite. Clean, typed, componentized. State is local and uses mock
data only.
