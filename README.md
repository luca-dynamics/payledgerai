# PayLedger AI

PayLedger AI is an AI-powered merchant intelligence system for Nigerian campus vendors, student entrepreneurs, POS agents, and informal traders. It helps merchants convert daily cash, transfer, POS, and QR transactions into trusted business records, fraud-risk alerts, debt tracking, inventory insights, and credit-readiness reports.

## Product concept

PayLedger AI is **AI business memory for campus and informal commerce**. It gives merchants a clean post-payment workspace where daily sales, customer debts, stock alerts, dispute notes, risk reminders, and credit-readiness signals are organized in one mobile-first dashboard.

**Prototype disclaimer:** Prototype only. PayLedger AI does not process or verify real payments.

## Target users

- Nigerian campus food vendors and student entrepreneurs.
- POS agents and informal traders who receive cash, transfer, POS, and QR payments.
- Small merchants who need trusted records before they can access better support, credit, or business opportunities.

## Core modules in PR 1

- Landing/problem page explaining the merchant trust problem.
- Merchant dashboard for **Amaka’s Campus Kitchen**, a campus food vendor.
- Summary cards for sales, profit, debt, inventory, credit readiness, and fraud-risk alerts.
- Gemini-style AI insight card for merchant coaching.
- Recent transaction list using mock Cash, Transfer, POS, and QR payment methods.
- Bottom navigation: Dashboard, Ledger, Debt, Fraud, and Report.

## Why it is not just an expense tracker

PayLedger AI is positioned as merchant intelligence, not personal expense tracking. It focuses on what happens **after payments** for informal businesses:

- Building trusted business memory from merchant transactions.
- Helping reduce payment disputes through fraud-risk guidance, not bank verification.
- Tracking customer debt and suspicious payment notes.
- Turning clean records into a credit-readiness report, not loan approval.
- Surfacing inventory and sales insights that help merchants operate better.

## Challenge alignment: OPay, Google/Gemini, and 3MTT

- **OPay fit:** supports merchants and digital payment users after transactions happen by helping them organize records and resolve disputes more clearly.
- **Google/Gemini fit:** demonstrates AI-powered business insight and merchant coaching using a Gemini-style assistant experience.
- **3MTT fit:** showcases software development, UI/UX design, AI/ML product thinking, data analysis, cybersecurity awareness, and product management.
- **Student fit:** starts with campus vendors and student entrepreneurs, then scales to wider informal merchants.

## What is mocked in this prototype

All data is mocked for demo purposes, including:

- Today’s sales: ₦82,500.
- Today’s profit: ₦21,800.
- Outstanding debt: ₦13,500.
- Credit readiness score: 76/100.
- Risk alerts: 2.
- Stock alerts: 4.
- Recent Cash, Transfer, POS, and QR transactions.
- AI insights and readiness scoring logic.

There is no real payment processing, real banking connection, transaction verification, credit bureau integration, or loan approval flow.


## Demo walkthrough

Use this 3-minute path to show the prototype without changing routes or static-hosting behavior:

1. **Landing page** — introduce PayLedger AI as AI business memory for campus and informal merchants, then open the app dashboard.
2. **Dashboard** — highlight Amaka’s Campus Kitchen, the summary cards, recent mock transactions, and the merchant coaching insight.
3. **Smart Ledger** — review the ledger view to show how daily Cash, Transfer, POS, and QR activity becomes organized business records.
4. **Debt Book** — show how customer debts and follow-up notes are tracked for informal credit given by the merchant.
5. **Fraud Shield** — walk through the suspicious-payment and dispute-risk reminders as guidance only, not payment verification.
6. **Credit Readiness Report** — finish with the mock readiness score and explain how cleaner records could support future credit conversations.

**Mock-data and integration note:** All data in this prototype is mock data. PayLedger AI does not process payments, verify transfers, approve loans, connect to any bank API, or connect to any OPay API.

## Future modules

- Smart Ledger.
- Fraud Shield.
- Debt Book.
- Inventory Tracker.
- Credit Readiness Report.
- Gemini-powered Merchant Coach.
- QR receipt mode.
- Suspicious payment dispute log.

## Local development

```bash
npm install
npm run dev
```

Run a production build:

```bash
npm run build
```
