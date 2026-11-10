import { cx } from '../../lib/cx';
import { pct } from '../../lib/format';

/** Gain/loss text with the matching color. */
export function Delta({ value, digits = 2, chip = false, className }) {
  const up = value >= 0;
  return (
    <span
      className={cx(
        'tabular-nums font-semibold',
        up ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400',
        chip && cx('px-1.5 py-0.5 rounded-sm', up ? 'bg-green-500/15' : 'bg-red-500/15'),
        className
      )}
    >
      {pct(value, digits)}
    </span>
  );
}
