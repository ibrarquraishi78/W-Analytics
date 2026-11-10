export function LogoMark({ size = 32 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path d="M16 2 28 9v14l-12 7L4 23V9z" stroke="#1fe3ff" strokeWidth="2" strokeLinejoin="round" />
      <path d="M10 11.5 13 21l3-6.5 3 6.5 3-9.5" stroke="#ff4bdc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Wordmark() {
  return (
    <span className="whitespace-nowrap text-lg font-bold tracking-tight text-gray-900 dark:text-white">
      W<span className="text-brand-600 dark:text-brand-400">-Analytics</span>
    </span>
  );
}
