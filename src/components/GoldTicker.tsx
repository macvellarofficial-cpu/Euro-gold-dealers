/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown, RefreshCw, Landmark } from 'lucide-react';
import { GoldRates } from '../types';

export default function GoldTicker() {
  const [rates, setRates] = useState<GoldRates>({
    spotUSDPerOz: 2342.60,
    spotUSDPerGram: 75.31,
    spotUGXPerGram: 285420,
    ugandaDiscountedPerGram: 268300, // Doré gold pricing typically enjoys a slight local discount prior to refining/export clearance
    lastUpdated: new Date().toLocaleTimeString(),
  });
  const [trend, setTrend] = useState<'up' | 'down' | 'stable'>('up');
  const [isUpdating, setIsUpdating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsUpdating(true);
      setTimeout(() => {
        setRates(prev => {
          const change = (Math.random() - 0.48) * 0.45; // slightly upward bias
          const newUSDPerOz = prev.spotUSDPerOz + change;
          const newUSDPerGram = newUSDPerOz / 31.1034768;
          const newUGXPerGram = Math.round(newUSDPerGram * 3790); // 1 USD ~ 3790 UGX
          const discountRate = Math.round(newUGXPerGram * 0.94); // 6% unrefined discount

          setTrend(change > 0 ? 'up' : 'down');
          return {
            spotUSDPerOz: Number(newUSDPerOz.toFixed(2)),
            spotUSDPerGram: Number(newUSDPerGram.toFixed(2)),
            spotUGXPerGram: newUGXPerGram,
            ugandaDiscountedPerGram: discountRate,
            lastUpdated: new Date().toLocaleTimeString(),
          };
        });
        setIsUpdating(false);
      }, 600);
    }, 12000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="gold-ticker-wrapper" className="bg-black border-y border-gold-500/30 py-2.5 px-4 overflow-hidden text-xs select-none">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 font-mono">
        <div className="flex items-center gap-2">
          <Landmark className="w-4 h-4 text-gold-500 animate-pulse" />
          <span className="text-gray-400">Kampala Exchange Desk:</span>
          <span className="text-white font-bold tracking-tight">EURO GOLD DEALERS LTD</span>
          <span className="bg-emerald-950 text-emerald-400 px-1.5 py-0.5 rounded text-[10px] border border-emerald-800 font-sans font-semibold">
            Licensed Exporter #KLA-G-8292
          </span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-center md:text-left">
          <div className="flex items-center gap-1.5">
            <span className="text-gray-400">Spot Gold (USD/oz):</span>
            <span className="text-white font-semibold">
              ${rates.spotUSDPerOz.toLocaleString(undefined, { minimumFractionDigits: 2 })}
            </span>
            {trend === 'up' ? (
              <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
            ) : trend === 'down' ? (
              <TrendingDown className="w-3.5 h-3.5 text-rose-500" />
            ) : null}
          </div>

          <div className="flex items-center gap-1.5">
            <span className="text-gray-400">Spot Gold (USD/g):</span>
            <span className="text-gold-400 font-bold">${rates.spotUSDPerGram}</span>
          </div>

          <div className="flex items-center gap-1.5 border-l border-neutral-800 pl-4 hidden sm:flex">
            <span className="text-gray-400">Domestic UGX/g:</span>
            <span className="text-white font-semibold">{rates.spotUGXPerGram.toLocaleString()} UGX</span>
          </div>

          <div className="flex items-center gap-1.5 border-l border-neutral-800 pl-4 hidden md:flex">
            <span className="text-gray-400">Locally Sourced Doré (UGX/g):</span>
            <span className="text-amber-400 font-semibold">{rates.ugandaDiscountedPerGram.toLocaleString()} UGX</span>
            <span className="text-[10px] text-emerald-400">(-6% discount)</span>
          </div>
        </div>

        <div className="flex items-center gap-2 text-gray-500 text-[10px]">
          <RefreshCw className={`w-3 h-3 ${isUpdating ? 'animate-spin text-gold-500' : ''}`} />
          <span>Real-time Feed (UGX rate base 1:3790)</span>
          <span className="bg-neutral-900 border border-neutral-800 px-1 rounded">{rates.lastUpdated}</span>
        </div>
      </div>
    </div>
  );
}
