import { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Plus, X } from 'lucide-react';
import { usd } from '../../lib/format';

const QUICK = [100, 500, 1000, 5000];

export default function AddFundsDialog() {
  const [open, setOpen] = useState(false);
  const [amount, setAmount] = useState('');
  const value = Number(amount);
  const valid = Number.isFinite(value) && value > 0;

  const submit = (e) => {
    e.preventDefault();
    if (!valid) return;
    setOpen(false);
    setAmount('');
  };

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger className="btn-neon">
        <Plus size={15} strokeWidth={2.6} />
        <span className="max-xs:sr-only">Add funds</span>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-gray-950/60 backdrop-blur-sm data-[state=open]:animate-[fade-in_150ms_ease-out]" />
        <Dialog.Content className="surface-pop fixed z-50 left-1/2 top-1/2 w-[92vw] max-w-sm -translate-x-1/2 -translate-y-1/2 p-5 data-[state=open]:animate-[pop-in_150ms_ease-out]">
          <div className="flex items-start justify-between mb-4">
            <div>
              <Dialog.Title className="text-lg font-semibold text-gray-900 dark:text-white">Add funds</Dialog.Title>
              <Dialog.Description className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">Demo only. No real payment is made.</Dialog.Description>
            </div>
            <Dialog.Close className="icon-btn -mr-2 -mt-1" aria-label="Close"><X size={16} /></Dialog.Close>
          </div>
          <form onSubmit={submit}>
            <label htmlFor="wa-amount" className="block text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-1.5">Amount (USD)</label>
            <input
              id="wa-amount"
              inputMode="decimal"
              value={amount}
              onChange={(e) => setAmount(e.target.value.replace(/[^0-9.]/g, ''))}
              placeholder="0.00"
              className="w-full px-3 py-2.5 text-lg tabular-nums bg-white dark:bg-gray-900/50 text-gray-900 dark:text-white border border-gray-200 dark:border-brand-400/20 rounded-lg outline-none focus:border-brand-500"
            />
            <div className="grid grid-cols-4 gap-2 mt-3">
              {QUICK.map((q) => (
                <button key={q} type="button" onClick={() => setAmount(String(q))} className="btn-ghost justify-center !px-0 !py-1.5 text-xs">{usd(q)}</button>
              ))}
            </div>
            <button type="submit" disabled={!valid} className="btn-neon w-full mt-5 disabled:opacity-40 disabled:pointer-events-none">
              {valid ? `Deposit ${usd(value, 2)}` : 'Enter an amount'}
            </button>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
