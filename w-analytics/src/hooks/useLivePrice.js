import { useEffect, useState } from 'react';

const pad = (n) => String(n).padStart(2, '0');
const stamp = (d) => `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
const step = (price) => price * (1 + (Math.random() - 0.5) * 0.0075);

/**
 * Simulated price feed (random walk). To go live, replace the interval with a
 * WebSocket subscription that pushes { t, price } into `points`.
 */
export function useLivePrice({ startPrice, size = 40, tickMs = 2000 }) {
  const [points, setPoints] = useState(() => {
    const now = Date.now();
    let price = startPrice;
    return Array.from({ length: size }, (_, i) => {
      price = step(price);
      return { t: stamp(new Date(now - (size - i) * tickMs)), price: Number(price.toFixed(2)) };
    });
  });

  useEffect(() => {
    const id = setInterval(() => {
      setPoints((prev) => {
        const next = Number(step(prev[prev.length - 1].price).toFixed(2));
        return [...prev.slice(1), { t: stamp(new Date()), price: next }];
      });
    }, tickMs);
    return () => clearInterval(id);
  }, [tickMs]);

  const first = points[0].price;
  const last = points[points.length - 1].price;
  return { points, last, changePct: ((last - first) / first) * 100 };
}
