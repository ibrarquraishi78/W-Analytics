const usdFormatters = new Map();

export function usd(value, digits = 0) {
  if (!usdFormatters.has(digits)) {
    usdFormatters.set(
      digits,
      new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: digits, maximumFractionDigits: digits })
    );
  }
  return usdFormatters.get(digits).format(value);
}

export function compactUsd(value) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', notation: 'compact', maximumFractionDigits: 1 }).format(value);
}

export function pct(value, digits = 2) {
  return `${value > 0 ? '+' : ''}${value.toFixed(digits)}%`;
}

export function num(value) {
  return value.toLocaleString('en-US', { maximumFractionDigits: 4 });
}
