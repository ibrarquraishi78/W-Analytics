import { useState } from 'react';
import * as Popover from '@radix-ui/react-popover';
import { Bell } from 'lucide-react';
import { notifications as initial } from '../../data/mockData';

export default function NotificationsMenu() {
  const [items, setItems] = useState(initial);
  const unread = items.filter((n) => n.unread).length;

  return (
    <Popover.Root>
      <Popover.Trigger className="icon-btn" aria-label={`Notifications${unread ? `, ${unread} unread` : ''}`}>
        <Bell size={17} />
        {unread > 0 && <span className="absolute top-1 right-1.5 w-2 h-2 rounded-full bg-plasma-500" />}
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content align="end" sideOffset={8} className="surface-pop z-50 w-80 max-w-[92vw] data-[state=open]:animate-[pop-in_150ms_ease-out]">
          <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-brand-400/10">
            <span className="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500">Notifications</span>
            {unread > 0 && (
              <button type="button" className="text-xs font-medium text-brand-600 dark:text-brand-400 hover:underline" onClick={() => setItems((all) => all.map((n) => ({ ...n, unread: false })))}>
                Mark all read
              </button>
            )}
          </div>
          <ul>
            {items.map((n) => (
              <li key={n.id} className="px-4 py-3 border-b border-gray-100 dark:border-brand-400/10 last:border-0">
                <div className="flex items-start gap-2">
                  <span aria-hidden="true">{n.icon}</span>
                  <div className="min-w-0">
                    <div className="text-sm font-medium text-gray-800 dark:text-gray-100">
                      {n.title}
                      {n.unread && <span className="inline-block ml-2 w-1.5 h-1.5 rounded-full bg-plasma-500 align-middle" />}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{n.body}</div>
                    <div className="text-[11px] text-gray-400 dark:text-gray-500 mt-1">{n.time}</div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
