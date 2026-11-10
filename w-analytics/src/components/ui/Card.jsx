import { cx } from '../../lib/cx';

export function Card({ id, className, children }) {
  return (
    <section id={id} className={cx('glass-card scroll-mt-24 flex flex-col', className)}>
      {children}
    </section>
  );
}

export function CardHeader({ title, aside, children }) {
  return (
    <header className="flex items-center justify-between gap-3 px-5 py-4 border-b border-gray-200/70 dark:border-brand-400/10">
      <div className="flex items-center min-w-0">
        {children}
        <h2 className="font-semibold text-gray-800 dark:text-gray-100 truncate">{title}</h2>
      </div>
      {aside && <div className="shrink-0 text-xs text-gray-400 dark:text-gray-500">{aside}</div>}
    </header>
  );
}
