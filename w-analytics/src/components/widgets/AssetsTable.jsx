import { Card, CardHeader } from '../ui/Card';
import { Delta } from '../ui/Delta';
import { num, usd } from '../../lib/format';

export default function AssetsTable({ assets }) {
  return (
    <Card id="assets" className="col-span-full xl:col-span-7">
      <CardHeader title="Active assets" aside={`${assets.length} holdings`} />
      <div className="p-3 overflow-x-auto">
        {assets.length === 0 ? (
          <p className="py-10 text-center text-sm text-gray-400 dark:text-gray-500">No assets match the current filters.</p>
        ) : (
          <table className="w-full text-sm">
            <thead className="text-xs uppercase tracking-wider text-gray-400 dark:text-gray-500 bg-gray-50 dark:bg-gray-700/30">
              <tr>
                <th className="p-2 text-left font-semibold">Asset</th>
                <th className="p-2 text-right font-semibold">Price</th>
                <th className="p-2 text-right font-semibold">24h</th>
                <th className="p-2 text-right font-semibold">Holdings</th>
                <th className="p-2 text-right font-semibold">Value</th>
                <th className="p-2 text-left font-semibold min-w-28">Share</th>
              </tr>
            </thead>
            <tbody className="font-medium divide-y divide-gray-100 dark:divide-brand-400/10">
              {assets.map((a) => (
                <tr key={a.symbol}>
                  <td className="p-2">
                    <div className="flex items-center gap-3">
                      <span className="shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-[11px] font-bold text-gray-950" style={{ backgroundColor: a.color }}>
                        {a.symbol}
                      </span>
                      <div>
                        <div className="text-gray-800 dark:text-gray-100">{a.name}</div>
                        <div className="text-xs text-gray-400 dark:text-gray-500">{a.symbol}</div>
                      </div>
                    </div>
                  </td>
                  <td className="p-2 text-right tabular-nums">{usd(a.price, 2)}</td>
                  <td className="p-2 text-right"><Delta value={a.change24hPct} digits={1} /></td>
                  <td className="p-2 text-right tabular-nums">{num(a.holdings)}</td>
                  <td className="p-2 text-right tabular-nums text-gray-800 dark:text-gray-100">{usd(a.valueUsd, 2)}</td>
                  <td className="p-2">
                    <div className="flex items-center gap-2">
                      <div className="grow h-1.5 bg-gray-200 dark:bg-gray-700/60">
                        <div className="h-full" style={{ width: `${a.allocationPct}%`, backgroundColor: a.color }} />
                      </div>
                      <span className="w-12 text-right text-xs tabular-nums text-gray-500 dark:text-gray-400">{a.allocationPct.toFixed(1)}%</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </Card>
  );
}
