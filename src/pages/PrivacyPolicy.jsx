import React from 'react';
import { ShieldCheck, Lock, FileText, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { companyInfo } from '../data/siteData';

const PrivacyPolicy = () => {
  return (
    <div className="bg-charcoal-950 text-white min-h-screen py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Link to="/" className="inline-flex items-center gap-2 text-xs font-bold text-gold-400 hover:text-gold-300 uppercase tracking-wider mb-8">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>

        <div className="p-8 sm:p-12 rounded-3xl bg-charcoal-900 border border-gold-500/20 space-y-8 shadow-2xl">
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-gold-400">Data Governance & Compliance</span>
            <h1 className="text-3xl sm:text-4xl font-serif font-bold text-white">
              Privacy Policy
            </h1>
            <p className="text-xs text-gray-400">
              Effective Date: January 1, 2026 • Last Reviewed: September 2026 • Domain: eurogolddealers.com
            </p>
          </div>

          <div className="space-y-6 text-sm text-gray-300 leading-relaxed">
            <section className="space-y-2">
              <h2 className="text-lg font-bold text-white">1. Commitment to Client Confidentiality</h2>
              <p>
                {companyInfo.legalName} ("Euro Gold Dealers", "we", "our", or "us") operates strict confidentiality standards in accordance with the Laws of Uganda, the Data Protection and Privacy Act (2019), and international anti-money laundering (AML) protocols.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-white">2. Information We Collect</h2>
              <p>
                When you apply for an Account Holder ID, request a refining quotation, or engage in physical gold trading, we collect necessary KYC/AML documentation, including corporate certificates, beneficial ownership disclosures, government-issued identification, assay certificates, and transaction records.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-white">3. Bank of Uganda & DGSM Regulatory Reporting</h2>
              <p>
                Under the Mining and Minerals Act of Uganda and Bank of Uganda domestic reserve guidelines, licensed dealers are legally obligated to record mineral origin, weight, assay fineness, and tax royalty compliance. Such records are maintained securely and shared solely with designated state supervisory authorities.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-white">4. Data Security & Physical Vault Confidentiality</h2>
              <p>
                All digital records are encrypted using AES-256 standard encryption. Physical assay and settlement records are safeguarded within our high-security vault facility at Plot 38 Kitala, Wakiso District.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-white">5. Contact Our Data Protection Officer</h2>
              <p>
                For privacy inquiries or document verification requests, contact our legal counsel at <a href={`mailto:${companyInfo.emailPrimary}`} className="text-gold-400 underline">{companyInfo.emailPrimary}</a>.
              </p>
            </section>
          </div>

        </div>

      </div>
    </div>
  );
};

export default PrivacyPolicy;
