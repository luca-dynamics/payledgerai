# PayLedger AI

PayLedger AI is an AI-powered merchant intelligence system for Nigerian campus vendors, student entrepreneurs, POS agents, and informal traders. It helps merchants convert daily cash, transfer, POS, and QR transactions into trusted business records, fraud-risk alerts, debt tracking, inventory insights, and credit-readiness reports.

> Prototype only. PayLedger AI does not process or verify real payments.

## Product concept

PayLedger AI is a mobile-first business memory and merchant trust prototype. It shows how an informal merchant can see daily sales, profit, debt, stock alerts, risk signals, recent transactions, and credit-readiness in one clear dashboard designed for a fast judging demo.

The PR 1 prototype includes:

- A landing/problem page that explains the product story.
- A polished merchant dashboard for **Amaka’s Campus Kitchen**, a campus food vendor.
- Bottom navigation for Dashboard, Ledger, Debt, Fraud, and Report.
- Mock transaction records across Cash, Transfer, POS, and QR.
- A clear prototype disclaimer wherever payment trust could be misunderstood.

## Target users

PayLedger AI is built for informal Nigerian commerce, especially:

- Campus food vendors.
- Student entrepreneurs.
- POS agents.
- Small kiosk owners.
- Market and roadside traders.
- Merchants who need trusted records but do not have formal accounting systems.

## Core modules

- **Dashboard:** A simple daily command center for sales, profit, debt, stock alerts, credit readiness, and fraud-risk alerts.
- **Smart Ledger:** A structured business record from cash, transfer, POS, and QR entries.
- **Debt Book:** A memory layer for customers who owe the merchant money.
- **Fraud Shield:** Risk-alert surfaces for suspicious or repeated payment stories.
- **Inventory Insights:** Stock alerts and restock recommendations.
- **Credit Readiness:** A score-style summary that helps merchants understand how prepared their records are for credit conversations.
- **Merchant Coach:** AI-guided recommendations written in plain language.

## Why it is not just an expense tracker

PayLedger AI is positioned as merchant trust infrastructure, not a personal expense tracker. It focuses on helping merchants prove business activity, remember debts, spot risk, manage stock, and prepare credible records for future financing. The core value is trusted business memory and credit readiness for informal commerce.

## What is mocked in this prototype

All data in this PR 1 prototype is mocked. The prototype does **not** process real payments, verify bank transfers, connect to bank accounts, connect to OPay APIs, make lending decisions, or validate customer identities. Mocked items include:

- Merchant profile and business type.
- Today’s sales and profit.
- Outstanding debt.
- Credit-readiness score.
- Risk and stock alerts.
- Recent transactions and payment methods.
- AI insight text.

## Future modules

Planned future modules include:

- Smart Ledger.
- Fraud Shield.
- Debt Book.
- Inventory.
- Credit Readiness.
- Gemini-powered Merchant Coach.

## Run locally

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```
