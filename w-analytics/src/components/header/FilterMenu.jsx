import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { Check, SlidersHorizontal } from 'lucide-react';

const OPTIONS = [
  { key: 'hideStable', label: 'Hide stablecoins' },
  { key: 'gainersOnly', label: 'Gainers only (24h)' },
];

export default function FilterMenu({ filters, onChange }) {
  const active = OPTIONS.filter((o) => filters[o.key]).length;
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="btn-ghost" aria-label="Filter assets">
        <SlidersHorizontal size={15} className="text-gray-400" />
        <span className="hidden sm:inline">Filter</span>
        {active > 0 && <span className="px-1.5 text-[11px] font-bold bg-brand-400 text-gray-950 rounded-sm">{active}</span>}
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content align="end" sideOffset={8} className="surface-pop z-50 w-56 p-1.5 data-[state=open]:animate-[pop-in_150ms_ease-out]">
          {OPTIONS.map((o) => (
            <DropdownMenu.CheckboxItem
              key={o.key}
              checked={filters[o.key]}
              onCheckedChange={(v) => onChange({ ...filters, [o.key]: v })}
              onSelect={(e) => e.preventDefault()}
              className="menu-item justify-between"
            >
              {o.label}
              <DropdownMenu.ItemIndicator><Check size={14} className="text-brand-500" /></DropdownMenu.ItemIndicator>
            </DropdownMenu.CheckboxItem>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
