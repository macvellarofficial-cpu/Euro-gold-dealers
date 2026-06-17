/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Sparkles, ShieldCheck, ShoppingBag, Scale, Landmark, ChevronRight, Calculator, HelpCircle } from 'lucide-react';
import { GoldProduct } from '../types';

interface ProductPageProps {
  onSelectProduct: (productName: string, defaultWeight: number) => void;
}

export default function ProductPage({ onSelectProduct }: ProductPageProps) {
  
  const products: GoldProduct[] = [
    {
      id: 'dust',
      name: 'Alluvial Gold Dust',
      purity: '85.4% - 92.1% (Raw Unrefined)',
      form: 'Fine/Medium Alluvial Grains',
      origin: 'Karamoja / Mubende Mining Yards, Uganda',
      availability: 'Consistent Monthly Sourcing',
      description: 'Raw mineral stream particles recovered by certified artisanal cooperatives. High mineral density with authentic natural properties.',
      longDescription: 'Our unrefined alluvial gold dust is gathered under clean, mercury-free mining covenants. Sourced locally across Mubende, Busia, and Karamoja precious-metal territories. Ideal for refinery buyers looking to smelt unrefined batches with natural characteristics, verified on-premises under advanced X-ray fluorescence spectrometers in our Kampala vault desks.',
      specifications: [
        { label: 'Chemical State', value: 'Au Alluvial Particles' },
        { label: 'Typical Purity Range', value: '21K - 22.4K Fine Gold' },
        { label: 'Minimum Transaction Bar', value: '5.00 Kilograms (Kg)' },
        { label: 'Mercury / Lead Toxins', value: '0.00% Zero-Toxin Certified' },
        { label: 'Packaging Format', value: 'Sealed UN-Stamped Steel Jars' },
      ],
      image: 'gold_dust_asset',
    },
    {
      id: 'dore',
      name: 'Unrefined Gold Doré Bars',
      purity: '92.3% - 96.8% (Smelted Bars)',
      form: 'Custom Smelted Ingots',
      origin: 'Kampala Induction Yards, Uganda',
      availability: 'Ready for Vault Escrow Intake',
      description: 'Semi-refined smelted metallic gold bars. Perfect unrefined shipping weights for domestic and international jewelry refiners.',
      longDescription: 'Gold Doré bars are casted into convenient metallic ingots at our partner Kampala smelting facilities using induction-magnetic ovens. These unrefined bars undergo detailed gravity density tests and spectroscopy stamps. Ready to be cleared under our bonded regional export licenses, typically shipped directly to Dubai Multi Commodities Centre (DMCC) or Istanbul precious metal refineries.',
      specifications: [
        { label: 'Physical Form', value: 'Smelted Doré Ingots' },
        { label: 'Average Purity', value: '22K - 23.1K Assayed Purity' },
        { label: 'Minimum Transaction Order', value: '2.00 Kilograms (Kg)' },
        { label: 'Escrow Security System', value: 'Kampala Bank Vault Release' },
        { label: 'Shipping Route Authority', value: 'Security Bond Air-Freight' },
      ],
      image: 'gold_dore_asset',
    },
    {
      id: 'bullion',
      name: 'Investment Gold Bullion (999.9)',
      purity: '99.99% (Pure Investment Grade)',
      form: 'Minted Cast Bars',
      origin: 'Vetted International Refinery Liaisons',
      availability: 'Pre-Packaged / Vault Allocated',
      description: 'Supreme-tier minted bars encased in tamper-proof security assay cards. Certified legal gold assets ideal for banks and wealth managers.',
      longDescription: 'Investment-grade fine gold bars certified 99.99% pure. Produced under rigorous standards of the London Bullion Market Association (LBMA) or audited Kampala gold refinery partners. Every bullion bar is individually engraved with a unique serial number, stamped with exact pure metric mass, and sealed in tamper-proof safe cards.',
      specifications: [
        { label: 'Refinery Status', value: 'LBMA / Kampala Audited Mint' },
        { label: 'Tested Pure Content', value: '99.99% Fine 24K Gold' },
        { label: 'Engraving Stamps', value: 'Unique Certified Serial Code' },
        { label: 'Tamper Protection', value: 'Vacuum Sealed Assay Card' },
        { label: 'Minimum Safe Order', value: '1.00 Kilogram (Kg)' },
      ],
      image: 'gold_bullion_asset',
    },
  ];

  const [selectedProduct, setSelectedProduct] = useState<string>('dore');

  const curProduct = products.find(p => p.id === selectedProduct) || products[1];

  return (
    <div id="product-showcase-view" className="space-y-12">
      
      {/* Intro and Product Selector Buttons */}
      <div className="text-center space-y-3">
        <span className="text-gold-500 uppercase tracking-widest font-mono text-[10px] font-bold block"> Precious Metals Catalog </span>
        <h2 className="text-white text-2xl md:text-3xl font-extrabold font-display tracking-tight">Precious Sourced Commodities</h2>
        <p className="text-xs text-gray-400 max-w-lg mx-auto">
          Explore our certified range of East African gold dust, smelted doré bars, and asset class bullion tailored for private and corporate buyers.
        </p>

        {/* Dynamic Selector Buttons with high-fidelity styled outline */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
          {products.map((p) => (
            <button
              key={p.id}
              onClick={() => setSelectedProduct(p.id)}
              className={`px-5 py-3 rounded-xl text-xs font-bold font-display uppercase tracking-wider border transition-all cursor-pointer ${
                selectedProduct === p.id
                  ? 'bg-gold-500 text-black border-gold-400 shadow-lg'
                  : 'bg-neutral-950 text-gray-400 border-neutral-900 hover:text-white hover:border-gold-500/40'
              }`}
            >
              {p.name}
            </button>
          ))}
        </div>
      </div>

      {/* Main Single-view Layout Showcase */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start bg-neutral-950 p-6 md:p-8 rounded-3xl border border-neutral-800 shadow-2xl">
        
        {/* Left Side: Product Details */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-2">
            <span className="text-gold-500 font-mono text-[9px] font-bold uppercase tracking-wider block">
              Origin: {curProduct.origin}
            </span>
            <h3 className="text-white font-extrabold font-display text-xl md:text-2xl leading-snug tracking-wide">
              {curProduct.name} — <span className="text-gold-500">{curProduct.purity}</span>
            </h3>
            <p className="text-xs text-gray-400 font-semibold">{curProduct.availability}</p>
          </div>

          <p className="text-gray-300 leading-relaxed text-xs">{curProduct.longDescription}</p>

          <div className="space-y-3">
            <h4 className="text-white font-bold uppercase tracking-wider text-[10px] text-gray-400">Chemical Specifications & Quality Metrics</h4>
            <div className="border border-neutral-900 rounded-xl overflow-hidden divide-y divide-neutral-900/60 bg-black/40">
              {curProduct.specifications.map((spec, sIdx) => (
                <div key={sIdx} className="grid grid-cols-3 p-3 text-xs">
                  <span className="text-gray-500 font-medium col-span-1">{spec.label}</span>
                  <span className="text-white font-semibold col-span-2 text-right">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Security Assurances & Sourcing Action Box */}
        <div className="lg:col-span-5 space-y-6 bg-black border border-neutral-900 p-6 rounded-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/5 blur-2xl rounded-full" />
          
          <div className="relative z-10 space-y-4">
            
            <div className="p-3 bg-neutral-950 rounded-xl border border-neutral-900 flex items-center gap-3">
              <Landmark className="w-5 h-5 text-gold-500 shrink-0" />
              <div>
                <span className="text-[10px] text-gray-500 uppercase tracking-widest block font-bold">Kampala Exchange Policy</span>
                <span className="text-white text-xs font-semibold">Pre-vetting of buyers required</span>
              </div>
            </div>

            <p className="text-gray-400 text-xs leading-relaxed">
              Vessel transactions involving physical minerals in Nakasero vaults demand active passport reference, corporate credentials verification, and standard export taxation bonding.
            </p>

            <div className="bg-neutral-900/40 p-4 rounded-xl border border-neutral-800 space-y-2">
              <span className="text-[10px] text-gray-400 uppercase tracking-widest block font-bold">Standard Sourcing Protocol</span>
              <ul className="text-[10px] text-gray-500 space-y-1.5 list-disc pl-4 leading-relaxed">
                <li>Pre-clearance of export permits under Uganda mineral laws.</li>
                <li>Laboratory fire assay and spectrometer density verification.</li>
                <li>Secure escrow vault deposit or bank guarantee custody.</li>
                <li>Secured airport transit via Brinks/G4S.</li>
              </ul>
            </div>

            {/* Quick Sourcing Action linking to stateful pre-fills inside Booking Form */}
            <button
              onClick={() => onSelectProduct(curProduct.name, curProduct.id === 'dust' ? 5.0 : curProduct.id === 'dore' ? 2.0 : 1.0)}
              className="w-full bg-gold-500 hover:bg-gold-400 text-black py-3 rounded-xl font-bold font-display text-xs tracking-wider uppercase flex items-center justify-center gap-1.5 shadow-lg active:scale-[0.98] transition cursor-pointer"
            >
              <span>Initiate Sourcing Inquiry</span>
              <ChevronRight className="w-4 h-4" />
            </button>

          </div>
        </div>

      </div>

    </div>
  );
}
