import React from 'react';
import { ShieldCheck, Scale, FileCheck, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { companyInfo } from '../data/siteData';

const TermsOfService = () => {
  return (
    <div className="bg-charcoal-950 text-white min-h-screen py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Link to="/" className="inline-flex items-center gap-2 text-xs font-bold text-gold-400 hover:text-gold-300 uppercase tracking-wider mb-8">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>

        <div className="p-8 sm:p-12 rounded-3xl bg-charcoal-900 border border-gold-500/20 space-y-8 shadow-2xl">
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-gold-400">Legal Agreement & Trading Standards</span>
            <h1 className="text-3xl sm:text-4xl font-serif font-bold text-white">
              Terms of Service & Bullion Trading Terms
            </h1>
            <p className="text-xs text-gray-400">
              Governed by the Mining and Minerals Act (2022) of the Republic of Uganda • Host: eurogolddealers.com
            </p>
          </div>

          <div className="space-y-6 text-sm text-gray-300 leading-relaxed">
            <section className="space-y-2">
              <h2 className="text-lg font-bold text-white">1. Scope of Service</h2>
              <p>
                {companyInfo.legalName} ("Euro Gold Dealers") provides precious metal refining, fire assaying, smelting, bonded storage, mineral consulting, and international commodity export documentation under licenses granted by the Directorate of Geological Survey and Mines (DGSM).
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-white">2. Assaying, Melting Loss & Purity Guarantees</h2>
              <p>
                Crude dore gold, alluvial dust, or scrap metal submitted for smelting and refining undergoes client-witnessed initial weight registration. Normal melting loss resulting from base metal flux separation and slag removal is governed by certified metallurgical assay certificates issued by our laboratory.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-white">3. Pricing & Market Spot Rate Fixing</h2>
              <p>
                All bullion buy/sell transactions are pegged to the London Bullion Market Association (LBMA) spot gold price at the time of official rate lock. Due to international market volatility, rate locks require written confirmation and agreed escrow/settlement deposits.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-white">4. Compliance & Anti-Money Laundering (AML)</h2>
              <p>
                We maintain zero tolerance for illicit mining or conflict minerals. In alignment with the ICGLR Regional Certification Mechanism and OECD Due Diligence Guidance, all clients must furnish verifiable mineral origin declarations and valid trade licenses before transaction settlement.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-white">5. Governing Law & Dispute Resolution</h2>
              <p>
                These terms are governed by the Laws of the Republic of Uganda. Any disputes arising from trading contracts shall be resolved under the jurisdiction of the commercial courts of Uganda in Kampala.
              </p>
            </section>
          </div>

        </div>

      </div>
    </div>
  );
};

export default TermsOfService;
