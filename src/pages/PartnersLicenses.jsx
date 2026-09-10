import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, Award, FileCheck, CheckCircle2, ArrowRight, 
  ExternalLink, Building2, Sparkles, Scale, Globe, Landmark
} from 'lucide-react';
import { trustedPartners, companyInfo } from '../data/siteData';

const licensesList = [
  { id: "DGSM-ML-01", type: "Mineral Dealer License (MDL)", desc: "Authorized under DGSM to purchase, hold, melt, and trade gold throughout the Republic of Uganda." },
  { id: "DGSM-EXP-02", type: "Gold Export Permit & Customs Clearing", desc: "Certified for legal precious metals export via Entebbe International Airport with URA tax validation." },
  { id: "DGSM-REF-03", type: "Precious Metals Refining License", desc: "Commercial metallurgical license authorizing chemical refining up to 99.9% fine purity in Wakiso." },
  { id: "DGSM-ASS-04", type: "Accredited Fire Assay & Laboratory Certification", desc: "Official certification for non-destructive XRF and gravimetric cupellation assay documentation." },
  { id: "DGSM-CON-05", type: "Exploration & Concession License (Yumbe)", desc: "79.8 km² mineral exploration and mechanized extraction concession in Yumbe District." },
  { id: "DGSM-MIN-06", type: "Mining Lease & Alluvial Recovery Permit", desc: "Commercial permit for mechanized gravel washing and eco-friendly gravity separation." },
  { id: "DGSM-GEM-07", type: "Gemstone Processing & Evaluation License", desc: "Certified appraisal, cutting, and export of diamonds, emeralds, and colored stones." },
  { id: "DGSM-TRC-08", type: "ICGLR Regional Mineral Traceability Certificate", desc: "Great Lakes Region certificate guaranteeing 100% conflict-free artisanal gold origin." },
  { id: "DGSM-ENV-09", type: "NEMA Environmental Compliance Certificate", desc: "Full environmental clearance for scrubber-equipped, mercury-free refining emissions." }
];

const PartnersLicenses = ({ onOpenQuote }) => {
  return (
    <div className="bg-charcoal-950 text-white min-h-screen">
      
      {/* Hero */}
      <section className="relative py-24 sm:py-32 overflow-hidden bg-charcoal-900 border-b border-gold-500/20">
        <div className="absolute inset-0 bg-cover bg-center opacity-25" style={{ backgroundImage: "url('/images/EURO-GOLD-12.jpg')" }} />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/85 to-transparent" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/20 border border-gold-400/40 text-gold-300 text-xs font-semibold uppercase tracking-widest mb-6">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Institutional Governance</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
            Partners & <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 via-yellow-200 to-gold-500">Government Licenses</span>
          </h1>
          <p className="max-w-3xl mx-auto text-base sm:text-lg text-gray-300 leading-relaxed">
            Holding 9 official mineral licenses and 10 operational certifications, Euro Gold Dealers is an authorized supplier to the Bank of Uganda and partner to the Ministry of Energy and Mineral Development.
          </p>
        </div>
      </section>

      {/* Primary Strategic Partners */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Bank of Uganda Strategic Accord */}
        <div className="p-8 sm:p-12 rounded-3xl bg-charcoal-900/80 border-2 border-gold-500/40 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 space-y-6">
              <div className="flex items-center gap-4">
                <img 
                  src="/images/bou-home-sm-1.png" 
                  alt="Bank of Uganda" 
                  className="h-14 w-auto object-contain bg-charcoal-950 p-2 rounded-xl border border-white/10" 
                />
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-gold-400 block">Sovereign Supply Agreement</span>
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">Bank of Uganda (BoU)</h2>
                </div>
              </div>

              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                Euro Gold Dealers holds a milestone contract with the Bank of Uganda (BoU) under the Domestic Gold Purchase Reserve Program. Designed to build national sovereign gold reserves and reduce reliance on foreign reserve currencies, the central bank procures regular consignments of 99.9% fine gold bullion refined at our facility.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-charcoal-950 border border-white/10">
                  <p className="text-xs text-gray-400">National Objective</p>
                  <p className="text-sm font-bold text-white mt-1">Sovereign Wealth & Currency Backing</p>
                </div>
                <div className="p-4 rounded-xl bg-charcoal-950 border border-white/10">
                  <p className="text-xs text-gray-400">Quality Benchmark</p>
                  <p className="text-sm font-bold text-gold-400 mt-1">99.9% Pure LBMA Standard</p>
                </div>
                <div className="p-4 rounded-xl bg-charcoal-950 border border-white/10">
                  <p className="text-xs text-gray-400">Impact</p>
                  <p className="text-sm font-bold text-emerald-400 mt-1">Direct Artisanal Formalization</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 space-y-4">
              <div className="rounded-2xl overflow-hidden border border-gold-500/30 shadow-xl">
                <img 
                  src="/images/WhatsApp-Image-2026-04-11-at-8.23.02-AM-3.jpeg" 
                  alt="Bank of Uganda Signing Event" 
                  className="w-full h-48 object-cover" 
                />
                <div className="p-3 bg-charcoal-950/90 text-center border-t border-white/5">
                  <p className="text-[11px] text-gold-400 font-semibold">Official BoU Reserve Program Signing</p>
                </div>
              </div>
              <button
                onClick={() => onOpenQuote('Bank of Uganda Compliance Program')}
                className="w-full py-2.5 rounded-full bg-gold-400 hover:bg-gold-300 text-charcoal-950 text-xs font-bold uppercase tracking-wider transition-colors"
              >
                Inquire on Reserve Standards
              </button>
            </div>
          </div>
        </div>

        {/* Ministry of Energy Accord */}
        <div className="p-8 sm:p-12 rounded-3xl bg-charcoal-900/80 border border-white/10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 space-y-6">
              <div className="flex items-center gap-4">
                <img 
                  src="/images/moe-sm-1.png" 
                  alt="Ministry of Energy" 
                  className="h-14 w-auto object-contain bg-charcoal-950 p-2 rounded-xl border border-white/10" 
                />
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 block">Regulatory Oversight</span>
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">Ministry of Energy and Mineral Development</h2>
                </div>
              </div>

              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                Euro Gold Dealers works in close synergy with the Ministry of Energy and Mineral Development and the Directorate of Geological Survey and Mines (DGSM). We uphold the 2022 Mining and Minerals Act, paying all mandatory URA royalties and guaranteeing end-to-end supply chain transparency.
              </p>

              <div className="space-y-2 text-xs text-gray-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Full payment of official Uganda Revenue Authority mineral royalties</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Licensed mineral dealer, refinery operator, and exporter under DGSM registers</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Routine state audits of physical scales, XRF calibration, and melting yields</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 space-y-3">
              <div className="rounded-2xl overflow-hidden border border-emerald-500/30 shadow-xl">
                <img 
                  src="/images/Nankabirwa-1.webp" 
                  alt="Ministry of Energy Leadership" 
                  className="w-full h-48 object-cover" 
                />
                <div className="p-3 bg-charcoal-950/90 text-center border-t border-white/5">
                  <p className="text-[11px] text-emerald-400 font-semibold">Supporting National Mineral Value Addition</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* DGSM 9 Mineral Licenses Breakdown */}
      <section className="py-20 bg-charcoal-900/60 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-gold-400">DGSM Licensing Register</span>
            <h2 className="text-3xl font-serif font-bold text-white">
              Official Mineral Licenses & Accreditations
            </h2>
            <p className="text-sm text-gray-300">
              Euro Gold Dealers holds 9 specialized licenses and 10 certifications from the Directorate of Geological Survey and Mines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {licensesList.map((lic) => (
              <div
                key={lic.id}
                className="p-6 rounded-2xl bg-charcoal-950 border border-gold-500/20 hover:border-gold-400/50 transition-all space-y-3 group"
              >
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-md bg-gold-400/10 border border-gold-400/30 text-gold-400 text-[10px] font-mono font-bold">
                    {lic.id}
                  </span>
                  <FileCheck className="w-4 h-4 text-gold-400" />
                </div>
                <h3 className="text-base font-bold text-white group-hover:text-gold-400 transition-colors">
                  {lic.type}
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed">
                  {lic.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* International Alliances */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-400">Global Bullion Network</span>
          <h2 className="text-3xl font-serif font-bold text-white">
            International Refining & Trading Alliances
          </h2>
          <p className="text-sm text-gray-300">
            Partnering with global refineries, accredited testing bodies, and trading groups across the United Arab Emirates and Europe.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustedPartners.map((tp, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-charcoal-900 border border-white/10 hover:border-gold-500/30 text-center space-y-3 flex flex-col items-center justify-between"
            >
              <div className="w-16 h-16 rounded-2xl bg-charcoal-950 border border-gold-500/30 p-2 flex items-center justify-center mx-auto">
                {tp.logoImg ? (
                  <img src={tp.logoImg} alt={tp.name} className="max-h-12 max-w-full object-contain filter brightness-95" />
                ) : (
                  <Globe className="w-6 h-6 text-gold-400" />
                )}
              </div>
              <div>
                <h3 className="text-sm font-bold text-white mb-1">{tp.name}</h3>
                <p className="text-[11px] text-gold-400">{tp.tag}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Verification Consultation */}
      <section className="py-20 bg-charcoal-900 border-t border-gold-500/20 text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <h2 className="text-3xl font-serif font-bold text-white">
            Need Due Diligence Documentation?
          </h2>
          <p className="text-sm text-gray-300">
            Institutional buyers, compliance officers, and banks can request verified copies of our DGSM licenses, tax clearance certificates, and BoU designation letters under NDA.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onOpenQuote('Due Diligence Verification Package')}
              className="px-8 py-3.5 rounded-full bg-gold-400 hover:bg-gold-300 text-charcoal-950 font-bold text-xs uppercase tracking-widest transition-colors inline-flex items-center gap-2"
            >
              <span>Request Due Diligence Package</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default PartnersLicenses;
