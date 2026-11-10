import { useMemo, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { CornerDownLeft, Search } from 'lucide-react';
import { assets } from '../../data/mockData';

const ENTRIES = [
  { label: 'Wallet balance', hint: 'Section', href: '#portfolio' },
  { label: 'BTC/USD live market', hint: 'Section', href: '#markets' },
  { label: 'Active assets', hint: 'Section', href: '#assets' },
  { label: 'Recent transactions', hint: 'Section', href: '#transactions' },
  ...assets.map((a) => ({ label: `${a.name} (${a.symbol})`, hint: 'Asset', href: '#assets' })),
];

export default function CommandSearch({ open, onOpenChange }) {
  const [query, setQuery] = useState('');
  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return q ? ENTRIES.filter((e) => e.label.toLowerCase().includes(q)) : ENTRIES;
  }, [query]);

  const go = (href) => {
    onOpenChange(false);
    setQuery('');
    window.location.hash = href;
  };

  return (
    <Dialog.Root open={open} onOpenChange={(v) => { onOpenChange(v); if (!v) setQuery(''); }}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-gray-950/60 backdrop-blur-sm data-[state=open]:animate-[fade-in_150ms_ease-out]" />
        <Dialog.Content className="surface-pop fixed z-50 left-1/2 top-24 w-[92vw] max-w-xl -translate-x-1/2 overflow-hidden data-[state=open]:animate-[pop-in_150ms_ease-out]">
          <Dialog.Title className="sr-only">Search</Dialog.Title>
          <Dialog.Description className="sr-only">Jump to a section or asset</Dialog.Description>
          <div className="flex items-center gap-3 px-4 border-b border-gray-200 dark:border-brand-400/10">
            <Search size={16} className="text-gray-400 shrink-0" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => { if (e.key === 'Enter' && results[0]) go(results[0].href); }}
              placeholder="Search assets and sections…"
              className="w-full py-3.5 bg-transparent text-sm text-gray-800 dark:text-gray-100 placeholder-gray-400 outline-none"
            />
          </div>
          <ul className="max-h-80 overflow-y-auto p-1.5">
            {results.length === 0 && <li className="px-3 py-6 text-center text-sm text-gray-400">No results for “{query}”.</li>}
            {results.map((r, i) => (
              <li key={r.label}>
                <button type="button" onClick={() => go(r.href)} className="menu-item w-full justify-between hover:bg-brand-500/10">
                  <span className="text-gray-800 dark:text-gray-100">{r.label}</span>
                  <span className="flex items-center gap-2 text-xs text-gray-400">
                    {r.hint}
                    {i === 0 && query && <CornerDownLeft size={12} />}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
