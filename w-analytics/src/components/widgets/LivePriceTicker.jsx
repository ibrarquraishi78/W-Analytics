import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { Card, CardHeader } from '../ui/Card';
import { Delta } from '../ui/Delta';
import { ChartTooltip } from '../ui/ChartTooltip';
import { useLivePrice } from '../../hooks/useLivePrice';
import { liveFeed } from '../../data/mockData';
import { usd } from '../../lib/format';

const PLASMA = '#ff4bdc';

export default function LivePriceTicker() {
  const { points, last, changePct } = useLivePrice({ startPrice: liveFeed.startPrice });

  return (
    <Card id="markets" className="col-span-full xl:col-span-5">
      <CardHeader title={`Live ${liveFeed.pair}`} aside="Simulated feed">
        <span className="relative flex w-2 h-2 mr-3">
          <span className="absolute inline-flex w-full h-full rounded-full bg-green-400 opacity-75 animate-ping" />
          <span className="relative inline-flex w-2 h-2 rounded-full bg-green-400" />
        </span>
      </CardHeader>

      <div className="flex items-center gap-3 px-5 pt-4">
        <div className="text-3xl font-bold tabular-nums text-gray-800 dark:text-gray-100">{usd(last, 2)}</div>
        <Delta value={changePct} chip />
      </div>

      <div className="h-56 mt-2 pr-2 pb-2">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={points} margin={{ top: 10, right: 12, left: 4, bottom: 0 }}>
            <defs>
              <linearGradient id="wa-live-fill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" style={{ stopColor: PLASMA, stopOpacity: 0.28 }} />
                <stop offset="100%" style={{ stopColor: PLASMA, stopOpacity: 0 }} />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} stroke="var(--chart-grid)" />
            <XAxis dataKey="t" tickLine={false} axisLine={false} tick={{ fill: 'var(--chart-text)', fontSize: 11 }} minTickGap={48} />
            <YAxis width={62} orientation="left" tickLine={false} axisLine={false} tick={{ fill: 'var(--chart-text)', fontSize: 11 }} tickFormatter={(v) => usd(v)} domain={['dataMin - 40', 'dataMax + 40']} />
            <Tooltip content={<ChartTooltip format={(v) => usd(v, 2)} />} cursor={{ stroke: PLASMA, strokeOpacity: 0.3 }} />
            <Area type="monotone" dataKey="price" name="Price" stroke={PLASMA} strokeWidth={2} fill="url(#wa-live-fill)" dot={false} isAnimationActive={false} activeDot={{ r: 3, fill: PLASMA, stroke: 'none' }} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
