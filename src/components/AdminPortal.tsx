/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Database, TrendingUp, Cpu, Award, Beaker, FileSpreadsheet, Lock, Sparkles, Scale, Check, Trash2, ListFilter } from 'lucide-react';
import { Booking } from '../types';

export default function AdminPortal() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [assayWeight, setAssayWeight] = useState<number>(350);
  const [impuritiesPercent, setImpuritiesPercent] = useState<number>(6.5);
  const [assayResult, setAssayResult] = useState<{ purity: number; pureWeight: number; stamp: string; isCalculated: boolean }>({
    purity: 0,
    pureWeight: 0,
    stamp: '',
    isCalculated: false,
  });

  // Pull local bookings
  useEffect(() => {
    const pullBookings = () => {
      const saved = localStorage.getItem('eurogold_bookings');
      if (saved) {
        setBookings(JSON.parse(saved));
      } else {
        // Initialize with realistic mock seed data
        const seedData: Booking[] = [
          {
            id: 'seed-1',
            fullName: 'Michael Alinda',
            email: 'alinda.m@uganda-minerals.co',
            phone: '+256 702 991 230',
            passportId: 'E_UG882193',
            companyName: 'Nile Alluvial Minerals Ltd',
            desiredService: 'Laboratory Fire Assaying & XRF Scan',
            estimatedWeightKg: 4.8,
            date: new Date(Date.now() + 86400000).toISOString().split('T')[0], // tomorrow
            timeSlot: '10:30 AM - 12:00 PM (Laboratory Assaying Slot A)',
            securityDisclaimerAccepted: true,
            bookingRef: 'KLA-EGD-802195',
            createdAt: '2026-06-15 09:12:00',
            status: 'Approved',
          },
          {
            id: 'seed-2',
            fullName: 'David Hassel',
            email: 'hassel.d@londonfinery.co.uk',
            phone: '+44 7911 123456',
            passportId: 'PO-GB819274',
            companyName: 'London Mint Investors',
            desiredService: 'Institutional Bullion Purchase Inquiry',
            estimatedWeightKg: 12.0,
            date: new Date(Date.now() + 172800000).toISOString().split('T')[0], // in 2 days
            timeSlot: '04:00 PM - 05:30 PM (Private Bulk Bullion Advisory)',
            securityDisclaimerAccepted: true,
            bookingRef: 'KLA-EGD-718293',
            createdAt: '2026-06-14 14:48:30',
            status: 'Pending Verification',
          }
        ];
        localStorage.setItem('eurogold_bookings', JSON.stringify(seedData));
        setBookings(seedData);
      }
    };

    pullBookings();
    
    // Listen for updates
    const interval = setInterval(pullBookings, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleDelete = (id: string) => {
    const updated = bookings.filter(b => b.id !== id);
    localStorage.setItem('eurogold_bookings', JSON.stringify(updated));
    setBookings(updated);
  };

  const handleApprove = (id: string) => {
    const updated = bookings.map(b => {
      if (b.id === id) {
        return { ...b, status: 'Approved' as const };
      }
      return b;
    });
    localStorage.setItem('eurogold_bookings', JSON.stringify(updated));
    setBookings(updated);
  };

  const calculateLabAssay = () => {
    const computedPurity = (100 - impuritiesPercent) / 100;
    const computedPureWeight = assayWeight * computedPurity;
    let computedStamp = '916 / 22K (Standard Uganda Alluvial)';
    if (computedPurity >= 0.99) computedStamp = '999 / 24K Mint Quality (Refined Bullion)';
    else if (computedPurity >= 0.95) computedStamp = '958 / 23K Premium Reef Gold';
    else if (computedPurity >= 0.916) computedStamp = '916 / 22K High Grade Alluvial';
    else if (computedPurity >= 0.75) computedStamp = '750 / 18K Medium Grade Sourced';
    else computedStamp = 'Low Grade / Smelter Recommended';

    setAssayResult({
      purity: computedPurity,
      pureWeight: computedPureWeight,
      stamp: computedStamp,
      isCalculated: true,
    });
  };

  return (
    <div id="admin-leads-dashboard" className="space-y-6">
      
      {/* WordPress-like Info Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        
        <div className="bg-neutral-900/50 p-4 rounded-xl border border-neutral-800 flex justify-between items-center">
          <div>
            <span className="text-[10px] text-gray-500 uppercase tracking-wider font-bold block mb-1">Active Leads</span>
            <span className="text-white font-mono font-bold text-2xl">{bookings.length}</span>
            <span className="text-emerald-400 text-[10px] block mt-0.5">Secure WP database sync</span>
          </div>
          <div className="p-3 bg-gold-500/10 rounded-lg text-gold-500">
            <Database className="w-5 h-5" />
          </div>
        </div>

        <div className="bg-neutral-900/50 p-4 rounded-xl border border-neutral-800 flex justify-between items-center">
          <div>
            <span className="text-[10px] text-gray-500 uppercase tracking-wider font-bold block mb-1">Approved Bookings</span>
            <span className="text-emerald-400 font-mono font-bold text-2xl">
              {bookings.filter(b => b.status === 'Approved').length}
            </span>
            <span className="text-gray-400 text-[10px] block mt-0.5">Cleared for Nakasero entry</span>
          </div>
          <div className="p-3 bg-emerald-500/10 rounded-lg text-emerald-400">
            <Check className="w-5 h-5" />
          </div>
        </div>

        <div className="bg-neutral-900/50 p-4 rounded-xl border border-neutral-800 flex justify-between items-center">
          <div>
            <span className="text-[10px] text-gray-500 uppercase tracking-wider font-bold block mb-1">Pending Clearance</span>
            <span className="text-amber-500 font-mono font-bold text-2xl">
              {bookings.filter(b => b.status !== 'Approved').length}
            </span>
            <span className="text-gray-400 text-[10px] block mt-0.5">Background verification live</span>
          </div>
          <div className="p-3 bg-amber-500/10 rounded-lg text-amber-500">
            <Lock className="w-5 h-5" />
          </div>
        </div>

        <div className="bg-neutral-900/50 p-4 rounded-xl border border-neutral-800 flex justify-between items-center">
          <div>
            <span className="text-[10px] text-gray-500 uppercase tracking-wider font-bold block mb-1">Total Vault Intake</span>
            <span className="text-gold-500 font-mono font-bold text-2xl">
              {bookings.reduce((acc, curr) => acc + curr.estimatedWeightKg, 0).toFixed(1)} KG
            </span>
            <span className="text-gray-400 text-[10px] block mt-0.5">Sum of declared lead metals</span>
          </div>
          <div className="p-3 bg-gold-500/10 rounded-lg text-gold-500">
            <Scale className="w-5 h-5" />
          </div>
        </div>

      </div>

      {/* Main CMS Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Bookings Tracker List */}
        <div className="lg:col-span-2 bg-neutral-950 rounded-2xl border border-neutral-800 p-5 space-y-4">
          <div className="flex items-center justify-between border-b border-neutral-900 pb-3">
            <div className="flex items-center gap-2">
              <FileSpreadsheet className="w-5 h-5 text-gold-500" />
              <h4 className="text-white text-sm font-semibold font-display">Client Gate Clearance Database</h4>
            </div>
            <span className="text-[10px] text-gray-500">Kampala Portal Server</span>
          </div>

          <div className="space-y-3.5 max-h-[480px] overflow-y-auto pr-1">
            {bookings.length === 0 ? (
              <div className="text-center py-10">
                <p className="text-gray-500 text-xs">No current appointments logged in WP database.</p>
              </div>
            ) : (
              bookings.map((booking) => (
                <div key={booking.id} className="p-4 bg-neutral-900/60 rounded-xl border border-neutral-800/80 space-y-3">
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-white font-semibold text-xs">{booking.fullName}</span>
                        <span className="text-[9px] font-mono text-gray-500">Ref: {booking.bookingRef}</span>
                      </div>
                      <p className="text-[11px] text-gray-400">
                        {booking.email} • {booking.phone}
                      </p>
                    </div>

                    <span className={`px-2 py-0.5 rounded text-[9px] font-bold ${
                      booking.status === 'Approved' ? 'bg-emerald-950 text-emerald-400 border border-emerald-800' : 'bg-amber-950 text-amber-500 border border-amber-800'
                    }`}>
                      {booking.status}
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-2 bg-black/40 p-2 rounded-lg text-[10px] text-gray-400 border border-neutral-900">
                    <div>
                      <span className="block text-[8px] uppercase text-gray-500 font-bold">Service Requested</span>
                      <span className="text-white truncate block">{booking.desiredService}</span>
                    </div>
                    <div>
                      <span className="block text-[8px] uppercase text-gray-500 font-bold">Vessel Weight</span>
                      <span className="text-white block">{booking.estimatedWeightKg} KG</span>
                    </div>
                    <div>
                      <span className="block text-[8px] uppercase text-gray-500 font-bold">Planned Arrival</span>
                      <span className="text-gold-400 block truncate">{booking.date}</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center pt-1">
                    <span className="text-[9px] text-gray-500">Registered ID: <strong className="text-gray-300 font-mono">{booking.passportId}</strong></span>
                    <div className="flex gap-2">
                      {booking.status !== 'Approved' && (
                        <button
                          onClick={() => handleApprove(booking.id)}
                          className="bg-emerald-600 hover:bg-emerald-500 text-black font-semibold text-[10px] px-2.5 py-1 rounded transition cursor-pointer"
                        >
                          Approve Permit
                        </button>
                      )}
                      <button
                        onClick={() => handleDelete(booking.id)}
                        className="text-gray-500 hover:text-rose-400 p-1 rounded hover:bg-rose-950/20 transition cursor-pointer"
                        title="Delete record"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Laboratory Simulator Mini-Game */}
        <div className="bg-neutral-950 rounded-2xl border border-neutral-800 p-5 space-y-4">
          <div className="flex items-center gap-2 border-b border-neutral-900 pb-3">
            <Beaker className="w-5 h-5 text-gold-500" />
            <h4 className="text-white text-sm font-semibold font-display">Lab Fire Assay Simulator</h4>
          </div>

          <p className="text-[11px] text-gray-400 leading-relaxed">
            Representing the supreme assay services of <strong>Euro Gold Dealers Kampala</strong>. Simulate unrefined sample smelting & density assessment.
          </p>

          <div className="space-y-4 pt-1">
            <div className="space-y-1.5">
              <label className="text-gray-400 text-[10px] uppercase font-bold tracking-wider block">Raw Sample Input Weight (g)</label>
              <input
                type="number"
                value={assayWeight || ''}
                onChange={(e) => setAssayWeight(Math.max(1, parseInt(e.target.value) || 0))}
                className="w-full bg-neutral-900 border border-neutral-800 p-2 rounded-lg text-white font-mono text-xs focus:outline-none focus:border-gold-500/50"
              />
            </div>

            <div className="space-y-1.5">
              <div className="flex justify-between text-[10px]">
                <span className="text-gray-400 font-bold uppercase">Impurities Detected (Cu, Ag, Fe)</span>
                <span className="text-amber-500 font-mono font-bold">{impuritiesPercent}%</span>
              </div>
              <input
                type="range"
                min="0.1"
                max="25.0"
                step="0.1"
                value={impuritiesPercent}
                onChange={(e) => setImpuritiesPercent(parseFloat(e.target.value))}
                className="w-full accent-gold-500 cursor-pointer h-1 rounded bg-neutral-800 focus:outline-none"
              />
            </div>

            <button
              onClick={calculateLabAssay}
              className="w-full bg-gold-500 hover:bg-gold-400 text-black py-2.5 rounded-lg text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <Cpu className="w-4 h-4" />
              <span>Simulate Smelter Ignition</span>
            </button>

            {assayResult.isCalculated && (
              <div className="bg-black/80 rounded-xl p-4 border border-gold-500/30 space-y-3.5 animate-in zoom-in-95 duration-200">
                <div className="flex items-center gap-1.5 text-gold-400 font-semibold text-[10px] uppercase">
                  <Award className="w-4 h-4 text-gold-400" />
                  <span>XRF Certificate Generated</span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs divide-x divide-neutral-900">
                  <div>
                    <span className="text-[10px] text-gray-500 block mb-0.5">Refined Pure Gold</span>
                    <strong className="text-white font-mono text-sm">{assayResult.pureWeight.toFixed(2)} g</strong>
                  </div>
                  <div className="pl-3">
                    <span className="text-[10px] text-gray-500 block mb-0.5">Assay Purity</span>
                    <strong className="text-gold-400 font-mono text-sm">{(assayResult.purity * 100).toFixed(1)}%</strong>
                  </div>
                </div>

                <div className="bg-neutral-950 p-2 rounded border border-neutral-900 text-center">
                  <span className="text-[9px] text-gray-500 uppercase tracking-widest block font-bold">Uganda Chamber Standard Badge</span>
                  <span className="text-white font-mono font-bold text-[11px] block text-gold-400 mt-1">{assayResult.stamp}</span>
                </div>
              </div>
            )}
          </div>
        </div>

      </div>

    </div>
  );
}
