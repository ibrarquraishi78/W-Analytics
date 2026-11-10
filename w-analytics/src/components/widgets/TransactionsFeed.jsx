import { ArrowDownLeft, ArrowUpRight } from 'lucide-react';
import { Card, CardHeader } from '../ui/Card';
import { transactions } from '../../data/mockData';
import { num, usd } from '../../lib/format';

const LABELS = { buy: 'Bought', sell: 'Sold', deposit: 'Deposit', withdraw: 'Withdrawal', swap: 'Swapped', stake: 'Staked', reward: 'Reward' };
const STATUS = {
  pending: 'bg-yellow-500/15 text-yellow-600 dark:text-yellow-400',
  failed: 'bg-red-500/15 text-red-600 dark:text-red-400',
};

function Row({ tx }) {
  const incoming = tx.direction === 'in';
  const Icon = incoming ? ArrowDownLeft : ArrowUpRight;
  return (
    <li className="flex items-center gap-3 px-2 py-2.5 border-b border-gray-100 dark:border-brand-400/10 last:border-0">
      <span className={`shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-gray-950 ${incoming ? 'bg-green-500' : 'bg-red-500'}`}>
        <Icon size={18} strokeWidth={2.4} />
      </span>
      <div className="grow min-w-0 text-sm">
        <div className="font-medium text-gray-800 dark:text-gray-100">
          {LABELS[tx.type]} {tx.asset}
          {STATUS[tx.status] && (
            <span className={`ml-2 px-1.5 py-0.5 rounded-sm text-[10px] font-semibold uppercase tracking-wider ${STATUS[tx.status]}`}>{tx.status}</span>
          )}
        </div>
        <div className="text-xs text-gray-400 dark:text-gray-500 truncate">{tx.counterparty}</div>
      </div>
      <div className="shrink-0 text-right text-sm">
        <div className="font-medium tabular-nums text-gray-800 dark:text-gray-100">
          {incoming ? '+' : '-'}{num(tx.amount)} {tx.asset}
        </div>
        <div className="text-xs tabular-nums text-gray-400 dark:text-gray-500">{usd(tx.valueUsd, 2)}</div>
      </div>
    </li>
  );
}

export default function TransactionsFeed() {
  const groups = [
    { title: 'Last 24 hours', items: transactions.filter((t) => t.hoursAgo < 24) },
    { title: 'Earlier', items: transactions.filter((t) => t.hoursAgo >= 24) },
  ].filter((g) => g.items.length);

  return (
    <Card id="transactions" className="col-span-full xl:col-span-7">
      <CardHeader title="Recent transactions" aside={`${transactions.length} shown`} />
      <div className="p-3">
        {groups.map((g) => (
          <div key={g.title} className="mb-1 last:mb-0">
            <div className="px-2 py-2 text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 bg-gray-50 dark:bg-gray-700/30">{g.title}</div>
            <ul>{g.items.map((tx) => <Row key={tx.id} tx={tx} />)}</ul>
          </div>
        ))}
      </div>
    </Card>
  );
}
