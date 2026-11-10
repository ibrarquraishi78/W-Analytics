# W-Analytics

A crypto and fintech portfolio dashboard built with React 19, Vite and Tailwind CSS v4.

- Wallet balance with 24h change and a portfolio vs BTC chart (3 / 6 / 12 month range)
- Allocation donut, active assets table (filterable), recent transactions, monthly cash flow
- Live BTC/USD chart on a simulated price feed, ready to swap for a WebSocket
- Search (Ctrl/Cmd + K), notifications, add-funds dialog, light and dark themes
- Dark by default, sharp-edged glassmorphism design with neon accents

## Stack

React 19 · Vite · Tailwind CSS v4 · Recharts · Radix UI (dropdowns, dialog, popover) · Lucide icons

## Getting started

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build in dist/
npm run preview    # serve the production build
```

## Project structure

```
src/
  components/
    header/        search, notifications, user menu, filters, range select, add funds
    layout/        TopNav, Footer, Logo
    ui/            Card, Delta, ChartTooltip
    widgets/       PortfolioOverview, AllocationDonut, LivePriceTicker,
                   AssetsTable, TransactionsFeed, CashFlowChart
  data/            mockData.js, all demo data lives here
  hooks/           useTheme, useLivePrice
  lib/             format helpers
  pages/           Dashboard.jsx
  index.css        design tokens (@theme) and shared component classes
```

## Customising

- Colors, fonts, radius and shadows: the `@theme` block in `src/index.css`.
- Demo data: `src/data/mockData.js`. Replace the exports with API responses.
- Live ticker: `src/hooks/useLivePrice.js`.

All market and account data is simulated for demonstration.
