/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Scale, ChevronRight, TrendingUp, HelpCircle } from 'lucide-react';

interface GoldCalculatorProps {
  onScheduleAppointment: (product: string, weight: number) => void;
}

export default function GoldCalculator({ onScheduleAppointment }: GoldCalculatorProps) {
  const [weight, setWeight] = useState<number>(100);
  const [unit, setUnit] = useState<'g' | 'oz' | 'kg'>('g');
  const [purity, setPurity] = useState<number>(0.92); // raw gold is around 92% purity
  const [discountPercent, setDiscountPercent] = useState<number>(6); // typical local Ugandan unrefined gold discount
  
  // Custom prices
  const spotPriceUSDPerOz = 2342.60;
  const spotRateUSDPerGram = spotPriceUSDPerOz / 31.1034768;
  const ugxExchangeRate = 3790;

  // Convert weight to grams
  const getWeightInGrams = () => {
    if (unit === 'g') return weight;
    if (unit === 'oz') return weight * 31.1034768;
    return weight * 1000;
  };

  const weightInGrams = getWeightInGrams();
  const pureGoldGrams = weightInGrams * purity;
  
  // Calculations
  const rawValueUSD = pureGoldGrams * spotRateUSDPerGram;
  const discountMultiplier = (100 - discountPercent) / 100;
  const discountedValueUSD = rawValueUSD * discountMultiplier;
  const rawValueUGX = rawValueUSD * ugxExchangeRate;
  const discountedValueUGX = discountedValueUSD * ugxExchangeRate;

  return (
    <div id="gold-valuation-calculator" className="bg-neutral-950 rounded-2xl border border-neutral-800 p-6 shadow-xl space-y-6">
      <div className="flex items-center gap-3">
        <div className="p-2.5 bg-gold-500/10 rounded-xl text-gold-500 border border-gold-500/20">
          <Scale className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-white font-semibold font-display text-lg tracking-wide">Ugandan Mineral Value Calculator</h3>
          <p className="text-xs text-gray-400">Estimate raw gold dust, dore bars, and pure bullion valuations.</p>
        </div>
      </div>

      <div className="space-y-4">
        {/* Weight input and Unit */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-gray-400 text-xs font-medium block">Total Metal Mass / Weight</label>
            <div className="relative">
              <input
                type="number"
                min="1"
                value={weight || ''}
                onChange={(e) => setWeight(Math.max(0, parseFloat(e.target.value) || 0))}
                className="w-full bg-neutral-900 border border-neutral-800 focus:border-gold-500/50 p-3 rounded-xl text-white font-mono font-bold focus:outline-none"
              />
              <span className="absolute right-3 top-3 text-gold-500 font-bold font-mono text-xs uppercase">{unit}</span>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-gray-400 text-xs font-medium block">Measurement Unit</label>
            <div className="grid grid-cols-3 gap-2 bg-neutral-900 p-1 rounded-xl border border-neutral-800 text-xs text-center font-bold">
              <button
                onClick={() => setUnit('g')}
                className={`py-2 rounded-lg transition ${unit === 'g' ? 'bg-gold-500 text-black' : 'text-gray-400 hover:text-white'}`}
              >
                Grams (g)
              </button>
              <button
                onClick={() => setUnit('oz')}
                className={`py-2 rounded-lg transition ${unit === 'oz' ? 'bg-gold-500 text-black' : 'text-gray-400 hover:text-white'}`}
              >
                Ounces (oz)
              </button>
              <button
                onClick={() => setUnit('kg')}
                className={`py-2 rounded-lg transition ${unit === 'kg' ? 'bg-gold-500 text-black' : 'text-gray-400 hover:text-white'}`}
              >
                Kilos (kg)
              </button>
            </div>
          </div>
        </div>

        {/* Purity slider */}
        <div className="space-y-2 bg-neutral-900/40 p-4 rounded-xl border border-neutral-800/60">
          <div className="flex justify-between items-center text-xs">
            <span className="text-gray-400 font-medium">Estimated Gold Purity (Assay Preview)</span>
            <span className="text-gold-400 font-mono font-bold">{(purity * 100).toFixed(1)}% ({Math.round(purity * 24)}K)</span>
          </div>
          <input
            type="range"
            min="0.50"
            max="0.999"
            step="0.005"
            value={purity}
            onChange={(e) => setPurity(parseFloat(e.target.value))}
            className="w-full accent-gold-500 cursor-pointer h-1 rounded bg-neutral-800 focus:outline-none"
          />
          <div className="flex justify-between text-[10px] text-gray-500">
            <span>Raw alluvial gold / Doré (~90-94%)</span>
            <span>Refined Bullion (99.9%)</span>
          </div>
        </div>

        {/* Local discount percentage slider */}
        <div className="space-y-2 bg-neutral-900/40 p-4 rounded-xl border border-neutral-800/60">
          <div className="flex justify-between items-center text-xs">
            <span className="text-gray-400 font-medium flex items-center gap-1.5">
              Local Discount Factor <HelpCircle className="w-3.5 h-3.5 text-gray-600 cursor-help" title="Unrefined local gold typically commands a slight discount to offset refining & export taxes" />
            </span>
            <span className="text-amber-500 font-mono font-bold">{discountPercent}% Off Spot</span>
          </div>
          <input
            type="range"
            min="0"
            max="12"
            step="0.5"
            value={discountPercent}
            onChange={(e) => setDiscountPercent(parseFloat(e.target.value))}
            className="w-full accent-gold-500 cursor-pointer h-1 rounded bg-neutral-800 focus:outline-none"
          />
          <div className="flex justify-between text-[10px] text-gray-500">
            <span>Refined / No Discount</span>
            <span>Standard Raw Gold Discount max 12%</span>
          </div>
        </div>
      </div>

      {/* Output valuation panel - Black-Gold contrasting blocks */}
      <div className="bg-black border border-gold-500/20 rounded-xl p-5 space-y-4">
        <div className="grid grid-cols-2 gap-4 divide-x divide-neutral-900">
          <div>
            <span className="text-gray-500 text-[10px] uppercase font-bold tracking-wider block mb-1">Global Spot Gold Valuation</span>
            <div className="text-white font-mono font-bold text-base">
              ${rawValueUSD.toLocaleString(undefined, { maximumFractionDigits: 2 })}
            </div>
            <div className="text-gray-400 text-[11px] mt-0.5">
              {Math.round(rawValueUGX).toLocaleString()} UGX
            </div>
          </div>

          <div className="pl-4">
            <span className="text-amber-500 text-[10px] uppercase font-bold tracking-wider block mb-1">Estimated Net Local Payout</span>
            <div className="text-gold-500 font-mono font-bold text-lg">
              ${discountedValueUSD.toLocaleString(undefined, { maximumFractionDigits: 2 })}
            </div>
            <div className="text-amber-400/80 text-[11px] font-semibold mt-0.5">
              {Math.round(discountedValueUGX).toLocaleString()} UGX
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-900 pt-3.5 text-[10px] text-gray-400 leading-relaxed flex items-start gap-1.5">
          <TrendingUp className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
          <span>
            Valuation based on actual pure content: <strong className="text-white">{pureGoldGrams.toFixed(2)} grams</strong> pure gold, with the unrefined discount factored for smelting & legal export processing costs. Rates subject to daily Kampalan assay tests.
          </span>
        </div>
      </div>

      {/* Dispatch into booking slot flow CTA */}
      <button
        onClick={() => onScheduleAppointment(`Gold Doré / Dust (Est: ${weight} ${unit}, Purity: ${Math.round(purity*100)}%)`, weightInGrams / 1000)}
        className="w-full bg-gold-500 hover:bg-gold-400 text-black py-3 px-4 rounded-xl font-bold font-display text-sm flex items-center justify-center gap-1.5 shadow-lg active:scale-[0.98] transition-all cursor-pointer"
      >
        <span>Schedule Lab Assaying & Sale</span>
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
}
