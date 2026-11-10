export default function Footer() {
  return (
    <footer className="mt-10 border-t border-gray-200/70 dark:border-brand-400/10">
      <div className="max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-500 dark:text-gray-400">
        <p>© {new Date().getFullYear()} W-Analytics. Market data shown is simulated.</p>
        <p>
          Developed by <span className="font-semibold text-neon">Wasim Ibrar</span>
        </p>
      </div>
    </footer>
  );
}
