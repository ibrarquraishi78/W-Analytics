import { useEffect, useState } from 'react';
import { Menu, Search, X } from 'lucide-react';
import { LogoMark, Wordmark } from './Logo';
import CommandSearch from '../header/CommandSearch';
import NotificationsMenu from '../header/NotificationsMenu';
import UserMenu from '../header/UserMenu';
import ThemeToggle from '../header/ThemeToggle';
import { useTheme } from '../../hooks/useTheme';

const LINKS = [
  { label: 'Overview', href: '#top' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Markets', href: '#markets' },
  { label: 'Assets', href: '#assets' },
  { label: 'Transactions', href: '#transactions' },
];

export default function TopNav() {
  const { theme, toggle } = useTheme();
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Ctrl/Cmd + K opens search
  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setSearchOpen(true);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-gray-200/70 dark:border-brand-400/10 bg-white/80 dark:bg-gray-900/70 backdrop-blur-xl">
      <div className="max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="#top" className="flex shrink-0 items-center gap-2.5 mr-6 lg:mr-8" aria-label="W-Analytics home">
              <LogoMark />
              <Wordmark />
            </a>
            <nav className="hidden lg:flex items-center gap-1" aria-label="Primary">
              {LINKS.map((l) => (
                <a key={l.label} href={l.href} className="px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
                  {l.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-1 sm:gap-2">
            <button type="button" className="icon-btn" onClick={() => setSearchOpen(true)} aria-label="Search (Ctrl K)">
              <Search size={17} />
            </button>
            <NotificationsMenu />
            <ThemeToggle theme={theme} onToggle={toggle} />
            <span className="hidden sm:block w-px h-6 mx-1 bg-gray-200 dark:bg-gray-700/60" />
            <UserMenu />
            <button type="button" className="icon-btn lg:hidden" onClick={() => setMenuOpen((v) => !v)} aria-expanded={menuOpen} aria-controls="mobile-nav" aria-label="Toggle navigation">
              {menuOpen ? <X size={19} /> : <Menu size={19} />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav id="mobile-nav" className="lg:hidden grid gap-1 pb-3" aria-label="Primary mobile">
            {LINKS.map((l) => (
              <a key={l.label} href={l.href} onClick={() => setMenuOpen(false)} className="px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800/70 rounded-lg">
                {l.label}
              </a>
            ))}
          </nav>
        )}
      </div>
      <CommandSearch open={searchOpen} onOpenChange={setSearchOpen} />
    </header>
  );
}
