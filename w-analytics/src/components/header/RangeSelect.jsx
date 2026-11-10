import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { Calendar, Check } from 'lucide-react';

export const RANGES = [
  { value: 3, label: 'Last 3 months' },
  { value: 6, label: 'Last 6 months' },
  { value: 12, label: 'Last 12 months' },
];

export default function RangeSelect({ value, onChange }) {
  const current = RANGES.find((r) => r.value === value);
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="btn-ghost" aria-label="Chart range">
        <Calendar size={15} className="text-gray-400" />
        {current.label}
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content align="end" sideOffset={8} className="surface-pop z-50 w-48 p-1.5 data-[state=open]:animate-[pop-in_150ms_ease-out]">
          <DropdownMenu.RadioGroup value={String(value)} onValueChange={(v) => onChange(Number(v))}>
            {RANGES.map((r) => (
              <DropdownMenu.RadioItem key={r.value} value={String(r.value)} className="menu-item justify-between">
                {r.label}
                <DropdownMenu.ItemIndicator><Check size={14} className="text-brand-500" /></DropdownMenu.ItemIndicator>
              </DropdownMenu.RadioItem>
            ))}
          </DropdownMenu.RadioGroup>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
