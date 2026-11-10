import { useCallback, useEffect, useState } from 'react';

const STORAGE_KEY = 'wa-theme';

export function useTheme() {
  const [theme, setTheme] = useState(() => (localStorage.getItem(STORAGE_KEY) === 'light' ? 'light' : 'dark'));

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('dark', theme === 'dark');
    root.style.colorScheme = theme;
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      /* storage can be blocked; theme still works for this session */
    }
  }, [theme]);

  const toggle = useCallback(() => setTheme((t) => (t === 'dark' ? 'light' : 'dark')), []);
  return { theme, toggle };
}
