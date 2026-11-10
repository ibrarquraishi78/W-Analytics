import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { ChevronDown, LogOut, Settings, ShieldCheck } from 'lucide-react';
import { user } from '../../data/mockData';

const initials = user.name.split(' ').map((p) => p[0]).join('');

export default function UserMenu() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="flex items-center gap-2 rounded-full pr-1 outline-offset-4" aria-label="Account menu">
        <span className="w-8 h-8 rounded-full bg-brand-400 text-gray-950 text-xs font-bold flex items-center justify-center">{initials}</span>
        <span className="hidden md:block text-sm font-medium text-gray-700 dark:text-gray-100">{user.name}</span>
        <ChevronDown size={14} className="hidden md:block text-gray-400" />
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content align="end" sideOffset={8} className="surface-pop z-50 w-56 p-1.5 data-[state=open]:animate-[pop-in_150ms_ease-out]">
          <div className="px-3 py-2 mb-1 border-b border-gray-200 dark:border-brand-400/10">
            <div className="text-sm font-semibold text-gray-800 dark:text-gray-100">{user.name}</div>
            <div className="text-xs text-gray-400 dark:text-gray-500">{user.handle} · {user.tier}</div>
          </div>
          <DropdownMenu.Item className="menu-item"><ShieldCheck size={15} />{user.kycVerified ? 'Identity verified' : 'Verify identity'}</DropdownMenu.Item>
          <DropdownMenu.Item className="menu-item"><Settings size={15} />Settings</DropdownMenu.Item>
          <DropdownMenu.Item className="menu-item text-red-600 dark:text-red-400"><LogOut size={15} />Sign out</DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
