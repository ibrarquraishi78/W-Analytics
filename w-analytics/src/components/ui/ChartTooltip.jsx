/** Shared Recharts tooltip. Pass `format` to control how values are printed. */
export function ChartTooltip({ active, payload, label, format = (v) => v }) {
  if (!active || !payload?.length) return null;
  return (
    <div className="surface-pop px-3 py-2 text-xs min-w-32">
      <div className="mb-1.5 font-medium text-gray-500 dark:text-gray-400">{label}</div>
      {payload.map((p) => (
        <div key={p.dataKey} className="flex items-center gap-2 py-0.5">
          <span className="w-2 h-2 shrink-0" style={{ backgroundColor: p.color }} />
          <span className="text-gray-600 dark:text-gray-300">{p.name}</span>
          <span className="ml-auto pl-3 font-semibold tabular-nums text-gray-900 dark:text-white">{format(p.value)}</span>
        </div>
      ))}
    </div>
  );
}
