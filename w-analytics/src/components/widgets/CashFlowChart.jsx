import { Bar, BarChart, CartesianGrid, ReferenceLine, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { Card, CardHeader } from '../ui/Card';
import { ChartTooltip } from '../ui/ChartTooltip';
import { cashFlow } from '../../data/mockData';
import { compactUsd, usd } from '../../lib/format';

const BRAND = '#1fe3ff';
const PLASMA = '#f526c9';

export default function CashFlowChart() {
  const net = cashFlow.reduce((sum, m) => sum + m.inflow + m.outflow, 0);

  return (
    <Card className="col-span-full xl:col-span-5">
      <CardHeader title="Monthly cash flow" />
      <div className="flex items-end gap-2 px-5 pt-4">
        <div className="text-3xl font-bold tabular-nums text-gray-800 dark:text-gray-100">{net >= 0 ? '+' : '-'}{usd(Math.abs(net))}</div>
        <div className="mb-1 text-xs font-medium text-gray-400 dark:text-gray-500">net, last {cashFlow.length} months</div>
        <div className="ml-auto mb-1 flex items-center gap-3 text-xs font-medium text-gray-500 dark:text-gray-400">
          <span className="inline-flex items-center gap-1.5"><span className="w-2 h-2 bg-brand-400" />In</span>
          <span className="inline-flex items-center gap-1.5"><span className="w-2 h-2 bg-plasma-500" />Out</span>
        </div>
      </div>
      <div className="h-60 mt-2 pr-2 pb-2">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={cashFlow} stackOffset="sign" margin={{ top: 10, right: 12, left: 4, bottom: 0 }}>
            <CartesianGrid vertical={false} stroke="var(--chart-grid)" />
            <XAxis dataKey="label" tickLine={false} axisLine={false} tick={{ fill: 'var(--chart-text)', fontSize: 12 }} />
            <YAxis width={52} tickLine={false} axisLine={false} tick={{ fill: 'var(--chart-text)', fontSize: 12 }} tickFormatter={compactUsd} />
            <Tooltip content={<ChartTooltip format={(v) => usd(v)} />} cursor={{ fill: 'rgb(127 138 168 / 0.1)' }} />
            <ReferenceLine y={0} stroke="var(--chart-text)" strokeOpacity={0.4} />
            <Bar dataKey="inflow" name="Inflow" stackId="flow" fill={BRAND} maxBarSize={28} isAnimationActive={false} />
            <Bar dataKey="outflow" name="Outflow" stackId="flow" fill={PLASMA} maxBarSize={28} isAnimationActive={false} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
