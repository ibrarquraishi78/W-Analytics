import { Area, CartesianGrid, ComposedChart, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { Card } from '../ui/Card';
import { Delta } from '../ui/Delta';
import { ChartTooltip } from '../ui/ChartTooltip';
import { portfolioHistory, wallet } from '../../data/mockData';
import { compactUsd, usd } from '../../lib/format';

const BRAND = '#1fe3ff';
const PLASMA = '#ff4bdc';

const STATS = [
  { label: 'Available', value: wallet.available },
  { label: 'Staked', value: wallet.staked },
  { label: 'In open orders', value: wallet.inOrders },
];

export default function PortfolioOverview({ months }) {
  const data = portfolioHistory.slice(-(months + 1));
  const up = wallet.change24hUsd >= 0;

  return (
    <Card id="portfolio" className="col-span-full xl:col-span-8">
      <div className="px-5 pt-5">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500">Wallet balance</h2>
          <div className="flex items-center gap-4 text-xs font-medium text-gray-500 dark:text-gray-400">
            <span className="inline-flex items-center gap-2"><span className="w-3 h-0.5 bg-brand-400" />Portfolio</span>
            <span className="inline-flex items-center gap-2"><span className="w-3 border-t border-dashed border-plasma-400" />BTC benchmark</span>
          </div>
        </div>

        <div className="flex flex-wrap items-end gap-x-4 gap-y-2">
          <div className="text-4xl md:text-5xl font-bold tabular-nums text-neon">{usd(wallet.totalBalance, 2)}</div>
          <div className="mb-1.5 inline-flex items-center gap-2 text-sm">
            <Delta value={wallet.change24hPct} chip />
            <span className={`font-semibold tabular-nums ${up ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
              {up ? '+' : '-'}{usd(Math.abs(wallet.change24hUsd), 2)}
            </span>
            <span className="text-gray-400 dark:text-gray-500">24h</span>
          </div>
        </div>

        <dl className="grid grid-cols-3 gap-px mt-5 bg-gray-200/60 dark:bg-brand-400/10 border border-gray-200/60 dark:border-brand-400/10">
          {STATS.map((s) => (
            <div key={s.label} className="bg-white/70 dark:bg-gray-900/60 px-3 py-2.5">
              <dt className="text-[11px] uppercase tracking-wider text-gray-400 dark:text-gray-500">{s.label}</dt>
              <dd className="text-sm sm:text-base font-semibold tabular-nums text-gray-800 dark:text-gray-100">{usd(s.value, 2)}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="h-60 sm:h-72 mt-3 pr-2 pb-2">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={data} margin={{ top: 10, right: 12, left: 4, bottom: 8 }}>
            <defs>
              <linearGradient id="wa-portfolio-fill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" style={{ stopColor: BRAND, stopOpacity: 0.32 }} />
                <stop offset="100%" style={{ stopColor: BRAND, stopOpacity: 0 }} />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} stroke="var(--chart-grid)" />
            <XAxis dataKey="label" tickLine={false} axisLine={false} tick={{ fill: 'var(--chart-text)', fontSize: 12 }} interval="preserveStartEnd" minTickGap={24} tickMargin={10} />
            <YAxis width={56} tickLine={false} axisLine={false} tick={{ fill: 'var(--chart-text)', fontSize: 12 }} tickFormatter={compactUsd} domain={['auto', 'auto']} padding={{ top: 6, bottom: 14 }} />
            <Tooltip content={<ChartTooltip format={(v) => usd(v)} />} cursor={{ stroke: BRAND, strokeOpacity: 0.3 }} />
            <Area type="monotone" dataKey="portfolio" name="Portfolio" stroke={BRAND} strokeWidth={2} fill="url(#wa-portfolio-fill)" dot={false} activeDot={{ r: 4, fill: BRAND, stroke: 'none' }} />
            <Line type="monotone" dataKey="btc" name="BTC benchmark" stroke={PLASMA} strokeOpacity={0.7} strokeWidth={1.5} strokeDasharray="5 5" dot={false} activeDot={{ r: 3, fill: PLASMA, stroke: 'none' }} />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
