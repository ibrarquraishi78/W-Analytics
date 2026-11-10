import { useMemo, useState } from 'react';
import TopNav from '../components/layout/TopNav';
import Footer from '../components/layout/Footer';
import RangeSelect from '../components/header/RangeSelect';
import FilterMenu from '../components/header/FilterMenu';
import AddFundsDialog from '../components/header/AddFundsDialog';
import PortfolioOverview from '../components/widgets/PortfolioOverview';
import AllocationDonut from '../components/widgets/AllocationDonut';
import LivePriceTicker from '../components/widgets/LivePriceTicker';
import AssetsTable from '../components/widgets/AssetsTable';
import TransactionsFeed from '../components/widgets/TransactionsFeed';
import CashFlowChart from '../components/widgets/CashFlowChart';
import { assets } from '../data/mockData';

export default function Dashboard() {
  const [months, setMonths] = useState(12);
  const [filters, setFilters] = useState({ hideStable: false, gainersOnly: false });

  const visibleAssets = useMemo(
    () => assets.filter((a) => !(filters.hideStable && a.stable) && !(filters.gainersOnly && a.change24hPct <= 0)),
    [filters]
  );

  return (
    <div id="top" className="flex min-h-screen flex-col">
      <TopNav />

      <main className="grow">
        <div className="w-full max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="sm:flex sm:items-center sm:justify-between mb-8">
            <div className="mb-4 sm:mb-0">
              <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-800 dark:text-gray-100">Portfolio overview</h1>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Track balances, markets and activity in one place.</p>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <FilterMenu filters={filters} onChange={setFilters} />
              <RangeSelect value={months} onChange={setMonths} />
              <AddFundsDialog />
            </div>
          </div>

          {/* Asymmetric 12-column grid: 8/4, 5/7, 7/5 */}
          <div className="grid grid-cols-12 gap-6">
            <PortfolioOverview months={months} />
            <AllocationDonut />
            <LivePriceTicker />
            <AssetsTable assets={visibleAssets} />
            <TransactionsFeed />
            <CashFlowChart />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
