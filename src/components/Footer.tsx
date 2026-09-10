/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Shield, Award, Landmark, MapPin, CheckSquare, Sparkles } from 'lucide-react';

export default function Footer({ setActiveTab, setShowAdmin }: { setActiveTab: (tab: string) => void; setShowAdmin: (s: boolean) => void }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="site-footer-wrapper" className="bg-[#050608] border-t border-neutral-900 text-xs font-sans text-gray-400 select-none">
      
      {/* Upper footer trust badges / assurances matrix */}
      <div className="border-b border-neutral-900 py-10 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          
          <div className="space-y-2 pb-6 md:pb-0 md:border-r border-neutral-900/80 pr-4">
            <div className="flex items-center justify-center md:justify-start gap-2 text-gold-500 font-bold tracking-tight">
              <Landmark className="w-5 h-5 text-gold-500" />
              <span className="uppercase text-[11px] tracking-wider">Licensed Precious Exporter</span>
            </div>
            <p className="text-gray-400 leading-relaxed text-[11px]">
              Full mineral exploration & export brokerage licenses authorized under Kampala Mineral Acts, Uganda Ministry of Energy & Mineral Development.
            </p>
          </div>

          <div className="space-y-2 pb-6 md:pb-0 md:border-r border-neutral-900/80 px-0 md:px-6">
            <div className="flex items-center justify-center md:justify-start gap-2 text-gold-500 font-bold tracking-tight">
              <Award className="w-5 h-5 text-gold-500" />
              <span className="uppercase text-[11px] tracking-wider">International Assaying Standards</span>
            </div>
            <p className="text-gray-400 leading-relaxed text-[11px]">
              Equipped with modern optical spectrometer scanners, chemical cupellation furnaces, and full fire-assay laboratories for 99.99% exact purity scans.
            </p>
          </div>

          <div className="space-y-2 pl-0 md:pl-6">
            <div className="flex items-center justify-center md:justify-start gap-2 text-gold-500 font-bold tracking-tight">
              <Shield className="w-5 h-5 text-gold-500" />
              <span className="uppercase text-[11px] tracking-wider">Anti-Money Laundering Compliant</span>
            </div>
            <p className="text-gray-400 leading-relaxed text-[11px]">
              Strict compliance regulations honoring Dodd-Frank Mineral Vetting guidelines and the Uganda Mining Act, guaranteeing fully documented origins.
            </p>
          </div>

        </div>
      </div>

      {/* Main footer directory */}
      <div className="py-12 px-4 max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-5 gap-8">
        
        {/* Brand statement column */}
        <div className="col-span-2 space-y-4">
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center w-8 h-8 border border-gold-500 rounded bg-black">
              <span className="text-gold-500 font-display font-extrabold text-sm">EG</span>
            </div>
            <h2 className="text-white font-extrabold text-sm tracking-widest font-display">EURO GOLD DEALERS</h2>
          </div>
          <p className="text-gray-400 leading-relaxed max-w-sm text-[11px]">
            Established as a pillar of high-purity gold trading, refinery liaison, and secure exporting logistics in the Great Lakes Region. Headquartered securely in Kampala, Uganda, facilitating gold bullion trade with Europe, the Middle East, and Asia.
          </p>
          <div className="flex items-center gap-1.5 text-[10px] text-gray-500">
            <span className="bg-neutral-900 border border-neutral-800 px-2 py-0.5 rounded text-gold-500 font-bold text-[9px] uppercase tracking-wider">
              Registration No. 800293021
            </span>
          </div>
        </div>

        {/* Directory links */}
        <div className="space-y-3.5">
          <h4 className="text-white font-bold uppercase tracking-wider text-[10px]">Operations</h4>
          <ul className="space-y-2 text-[11px] text-gray-400">
            <li>
              <button onClick={() => { setActiveTab('home'); setShowAdmin(false); }} className="hover:text-gold-400 transition cursor-pointer">
                Gold Sourcing
              </button>
            </li>
            <li>
              <button onClick={() => { setActiveTab('home'); setShowAdmin(false); }} className="hover:text-gold-400 transition cursor-pointer">
                Laboratory Assaying
              </button>
            </li>
            <li>
              <button onClick={() => { setActiveTab('home'); setShowAdmin(false); }} className="hover:text-gold-400 transition cursor-pointer">
                Refining Coordination
              </button>
            </li>
            <li>
              <button onClick={() => { setActiveTab('home'); setShowAdmin(false); }} className="hover:text-gold-400 transition cursor-pointer">
                Customs Clearance
              </button>
            </li>
          </ul>
        </div>

        {/* Product Catalog quick selectors */}
        <div className="space-y-3.5">
          <h4 className="text-white font-bold uppercase tracking-wider text-[10px]">Product Catalog</h4>
          <ul className="space-y-2 text-[11px] text-gray-400">
            <li>
              <button onClick={() => { setActiveTab('products'); setShowAdmin(false); }} className="hover:text-gold-400 transition cursor-pointer">
                Gold Dust
              </button>
            </li>
            <li>
              <button onClick={() => { setActiveTab('products'); setShowAdmin(false); }} className="hover:text-gold-400 transition cursor-pointer">
                Gold Doré Bars
              </button>
            </li>
            <li>
              <button onClick={() => { setActiveTab('products'); setShowAdmin(false); }} className="hover:text-gold-400 transition cursor-pointer">
                Gold Bullion / Bars
              </button>
            </li>
            <li>
              <button onClick={() => { setActiveTab('products'); setShowAdmin(false); }} className="hover:text-gold-400 transition cursor-pointer">
                Precious Logistics
              </button>
            </li>
          </ul>
        </div>

        {/* Quick Contact & Credentials info */}
        <div className="space-y-3.5 col-span-2 lg:col-span-1">
          <h4 className="text-white font-bold uppercase tracking-wider text-[10px]">Nakasero Vaults</h4>
          <p className="text-gray-400 leading-relaxed text-[11px]">
            Plot 24, Nakasero Road<br />
            Nakasero Lane, Kampala, Uganda
          </p>
          <div className="pt-2">
            <span className="text-[10px] text-gray-500 uppercase tracking-widest block font-bold mb-1">Campus Guard Desk</span>
            <span className="text-gold-400 font-mono font-bold block">+256 (0) 414 492 882</span>
          </div>
        </div>

      </div>

      {/* Extreme bottom copyright and compliance notes */}
      <div className="bg-[#020304] border-t border-neutral-900/60 py-6 px-4 text-center text-[10px] text-gray-500">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-3">
          
          <div className="text-center md:text-left leading-relaxed">
            <p>© {currentYear} Euro Gold Dealers Ltd. All rights cleared. Designed for Kampala Domestic Precious Exchange.</p>
            <p className="mt-1 text-gray-600 max-w-xl">
              Compliance Notice: Registered with the East African Mineral Assembly, the Uganda Chamber of Mines & Petroleum (UCMP), and fully bonded under domestic gold reserve requirements. All customer transactions are processed privately under non-disclosure accords.
            </p>
          </div>

          <div className="flex gap-4">
            <button onClick={() => setShowAdmin(true)} className="hover:text-white transition cursor-pointer">
              Admin CMS Entry
            </button>
            <span className="text-neutral-800">|</span>
            <span className="text-gray-400">Ver. 2.6.4-WP</span>
          </div>

        </div>
      </div>

    </footer>
  );
}
