// Mock data for the demo. Replace these exports with your API responses.

export const user = {
  "name": "Alex Morgan",
  "handle": "@alexm",
  "tier": "Pro Trader",
  "kycVerified": true
};

export const wallet = {
  "currency": "USD",
  "totalBalance": 128450.32,
  "change24hUsd": 3403.34,
  "change24hPct": 2.72,
  "available": 16309.32,
  "staked": 38420.0,
  "inOrders": 6320.75
};

export const portfolioHistory = [
  {
    "label": "Nov '25",
    "portfolio": 109278.68,
    "btc": 109278.68
  },
  {
    "label": "Dec '25",
    "portfolio": 120809.24,
    "btc": 119917.12
  },
  {
    "label": "Jan '26",
    "portfolio": 125673.74,
    "btc": 117738.01
  },
  {
    "label": "Feb '26",
    "portfolio": 127315.19,
    "btc": 125841.76
  },
  {
    "label": "Mar '26",
    "portfolio": 133693.16,
    "btc": 133047.57
  },
  {
    "label": "Apr '26",
    "portfolio": 122804.65,
    "btc": 145600.74
  },
  {
    "label": "May '26",
    "portfolio": 130996.24,
    "btc": 131879.08
  },
  {
    "label": "Jun '26",
    "portfolio": 140054.29,
    "btc": 143428.91
  },
  {
    "label": "Jul '26",
    "portfolio": 129078.97,
    "btc": 135462.34
  },
  {
    "label": "Aug '26",
    "portfolio": 133358.61,
    "btc": 125422.18
  },
  {
    "label": "Sep '26",
    "portfolio": 126965.07,
    "btc": 127866.86
  },
  {
    "label": "Oct '26",
    "portfolio": 120815.42,
    "btc": 136532.62
  },
  {
    "label": "Nov '26",
    "portfolio": 128450.32,
    "btc": 149002.8
  }
];

export const assets = [
  {
    "symbol": "BTC",
    "name": "Bitcoin",
    "price": 71500.0,
    "holdings": 0.62,
    "valueUsd": 44330.0,
    "change24hPct": 2.1,
    "allocationPct": 34.51,
    "color": "#F7931A",
    "stable": false
  },
  {
    "symbol": "ETH",
    "name": "Ethereum",
    "price": 3420.0,
    "holdings": 9.8,
    "valueUsd": 33516.0,
    "change24hPct": 4.6,
    "allocationPct": 26.09,
    "color": "#8C9EFF",
    "stable": false
  },
  {
    "symbol": "SOL",
    "name": "Solana",
    "price": 168.5,
    "holdings": 112,
    "valueUsd": 18872.0,
    "change24hPct": 7.9,
    "allocationPct": 14.69,
    "color": "#14F195",
    "stable": false
  },
  {
    "symbol": "LINK",
    "name": "Chainlink",
    "price": 14.25,
    "holdings": 540,
    "valueUsd": 7695.0,
    "change24hPct": -3.2,
    "allocationPct": 5.99,
    "color": "#2A5ADA",
    "stable": false
  },
  {
    "symbol": "AVAX",
    "name": "Avalanche",
    "price": 36.8,
    "holdings": 210,
    "valueUsd": 7728.0,
    "change24hPct": -1.4,
    "allocationPct": 6.02,
    "color": "#E84142",
    "stable": false
  },
  {
    "symbol": "USDC",
    "name": "USD Coin",
    "price": 1.0,
    "holdings": 16309.32,
    "valueUsd": 16309.32,
    "change24hPct": 0.0,
    "allocationPct": 12.7,
    "color": "#2775CA",
    "stable": true
  }
];

export const transactions = [
  {
    "id": "tx_91f3a2",
    "type": "buy",
    "asset": "SOL",
    "amount": 24,
    "valueUsd": 4044.0,
    "direction": "in",
    "status": "completed",
    "counterparty": "Spot Market",
    "hoursAgo": 2
  },
  {
    "id": "tx_91f3a1",
    "type": "stake",
    "asset": "ETH",
    "amount": 2.5,
    "valueUsd": 8550.0,
    "direction": "out",
    "status": "completed",
    "counterparty": "Validator Pool #12",
    "hoursAgo": 5
  },
  {
    "id": "tx_91e8c7",
    "type": "deposit",
    "asset": "USDC",
    "amount": 5000,
    "valueUsd": 5000.0,
    "direction": "in",
    "status": "pending",
    "counterparty": "Bank ACH ••4821",
    "hoursAgo": 9
  },
  {
    "id": "tx_91d0b4",
    "type": "swap",
    "asset": "LINK",
    "amount": 120,
    "valueUsd": 1710.0,
    "direction": "out",
    "status": "completed",
    "counterparty": "LINK → ETH",
    "hoursAgo": 19
  },
  {
    "id": "tx_91c77e",
    "type": "reward",
    "asset": "ETH",
    "amount": 0.043,
    "valueUsd": 147.06,
    "direction": "in",
    "status": "completed",
    "counterparty": "Staking Reward",
    "hoursAgo": 27
  },
  {
    "id": "tx_91b210",
    "type": "withdraw",
    "asset": "BTC",
    "amount": 0.08,
    "valueUsd": 5720.0,
    "direction": "out",
    "status": "completed",
    "counterparty": "Cold Wallet 0x7f3a…c91e",
    "hoursAgo": 31
  },
  {
    "id": "tx_91a9d5",
    "type": "sell",
    "asset": "AVAX",
    "amount": 60,
    "valueUsd": 2208.0,
    "direction": "out",
    "status": "failed",
    "counterparty": "Spot Market",
    "hoursAgo": 46
  },
  {
    "id": "tx_919f02",
    "type": "buy",
    "asset": "BTC",
    "amount": 0.05,
    "valueUsd": 3575.0,
    "direction": "in",
    "status": "completed",
    "counterparty": "Spot Market",
    "hoursAgo": 52
  }
];

export const cashFlow = [
  {
    "label": "Jun '26",
    "inflow": 8200,
    "outflow": -5100
  },
  {
    "label": "Jul '26",
    "inflow": 11400,
    "outflow": -6800
  },
  {
    "label": "Aug '26",
    "inflow": 7600,
    "outflow": -9200
  },
  {
    "label": "Sep '26",
    "inflow": 13250,
    "outflow": -5400
  },
  {
    "label": "Oct '26",
    "inflow": 9800,
    "outflow": -7300
  },
  {
    "label": "Nov '26",
    "inflow": 14200,
    "outflow": -6100
  }
];

export const notifications = [
  { id: 'n1', icon: '📈', title: 'BTC crossed your $71,000 alert', body: 'Price is up 2.1% in the last 24 hours.', time: '12 min ago', unread: true },
  { id: 'n2', icon: '✅', title: 'Deposit received', body: '5,000 USDC from Bank ACH ••4821 is pending confirmation.', time: '9 hours ago', unread: true },
  { id: 'n3', icon: '🔒', title: "New device sign-in", body: "If this wasn't you, rotate your API keys.", time: 'Yesterday', unread: false },
];

export const liveFeed = { pair: 'BTC/USD', startPrice: 71000 };
