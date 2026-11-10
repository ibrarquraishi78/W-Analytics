import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';
import { Card, CardHeader } from '../ui/Card';
import { ChartTooltip } from '../ui/ChartTooltip';
import { assets } from '../../data/mockData';

export default function AllocationDonut() {
  return (
    <Card className="col-span-full sm:col-span-6 xl:col-span-4">
      <CardHeader title="Allocation" />
      <div className="grow flex flex-col justify-center">
      <div className="relative h-60 mt-2">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Tooltip content={<ChartTooltip format={(v) => `${v.toFixed(1)}%`} />} />
            <Pie data={assets} dataKey="allocationPct" nameKey="symbol" innerRadius="68%" outerRadius="88%" paddingAngle={2} stroke="none" isAnimationActive={false}>
              {assets.map((a) => <Cell key={a.symbol} fill={a.color} />)}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-2xl font-bold text-gray-800 dark:text-gray-100">{assets.length}</span>
          <span className="text-[11px] uppercase tracking-wider text-gray-400 dark:text-gray-500">assets</span>
        </div>
      </div>
      <ul className="flex flex-wrap justify-center gap-2 px-5 pb-5 pt-1">
        {assets.map((a) => (
          <li key={a.symbol} className="inline-flex items-center gap-2 px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700/40 text-gray-600 dark:text-gray-300 rounded-sm">
            <span className="w-2 h-2" style={{ backgroundColor: a.color }} />
            {a.symbol}
          </li>
        ))}
      </ul>
      </div>
    </Card>
  );
}
