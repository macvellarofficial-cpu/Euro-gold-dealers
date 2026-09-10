import React, { useState } from 'react';
import { 
  UserCheck, ShieldCheck, CheckCircle2, ArrowRight, 
  Send, Sparkles, Lock, FileText, Clock, DollarSign 
} from 'lucide-react';
import { accountSteps, companyInfo } from '../data/siteData';

const benefits = [
  { title: "Priority Laboratory Turnaround", desc: "Same-day induction melting and certified fire assay cupellation with digital batch certificates." },
  { title: "Live Spot Price Lock", desc: "Ability to fix buy/sell bullion prices against real-time LBMA spot benchmarks via our phone or WhatsApp desk." },
  { title: "Secure Vault Custody", desc: "Short and medium-term bonded vault storage in Wakiso / Kampala with comprehensive Lloyd's-backed insurance." },
  { title: "Accelerated Export Clearing", desc: "Pre-cleared DGSM documentation and fast-track URA customs seals for direct delivery to Entebbe Airport." }
];

const AccountHolders = () => {
  const [formData, setFormData] = useState({
    entityType: 'Bullion Trading Company',
    companyName: '',
    regNumber: '',
    contactPerson: '',
    email: '',
    phone: '',
    monthlyVolume: '',
    volumeUnit: 'Kilograms',
    country: 'Uganda',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 900);
  };

  return (
    <div className="bg-charcoal-950 text-white min-h-screen">
      
      {/* Hero */}
      <section className="relative py-24 sm:py-32 overflow-hidden bg-charcoal-900 border-b border-gold-500/20">
        <div className="absolute inset-0 bg-cover bg-center opacity-25" style={{ backgroundImage: "url('/images/EURO-GOLD-40-scaled.jpg')" }} />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/85 to-transparent" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/20 border border-gold-400/40 text-gold-300 text-xs font-semibold uppercase tracking-widest mb-6">
            <UserCheck className="w-3.5 h-3.5" />
            <span>Corporate Mineral Accounts</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
            Become an <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 via-yellow-200 to-gold-500">Account Holder</span>
          </h1>
          <p className="max-w-3xl mx-auto text-base sm:text-lg text-gray-300 leading-relaxed">
            Gain verified institutional access to Euro Gold Dealers' refining infrastructure, live bullion rate fixing, and seamless cross-border clearing.
          </p>
        </div>
      </section>

      {/* 4-Step Process Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-400">Simple 4-Step Workflow</span>
          <h2 className="text-3xl font-serif font-bold text-white">How Onboarding Works</h2>
          <p className="text-sm text-gray-300">
            Compliant with Bank of Uganda KYC guidelines and Directorate of Geological Survey and Mines AML frameworks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {accountSteps.map((s, idx) => (
            <div key={idx} className="p-8 rounded-3xl bg-charcoal-900/60 border border-gold-500/20 relative group hover:border-gold-400/50 transition-all">
              <span className="text-4xl font-serif font-bold text-gold-400/25 block mb-4 group-hover:text-gold-400/40 transition-colors">
                {s.step}
              </span>
              <h3 className="text-lg font-bold text-white mb-2">{s.title}</h3>
              <p className="text-xs text-gray-400 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 bg-charcoal-900/50 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-gold-400">Privileged Tier</span>
            <h2 className="text-3xl font-serif font-bold text-white">Account Holder Privileges</h2>
            <p className="text-sm text-gray-300">
              Tailored specifically for commercial miners, international dealers, and financial institutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((b, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-charcoal-950 border border-white/10 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-gold-400/10 border border-gold-400/30 text-gold-400 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white mb-1">{b.title}</h3>
                  <p className="text-xs text-gray-400 leading-relaxed">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-charcoal-900 border border-gold-500/30 shadow-2xl relative">
          
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-gold-400">Online Registration</span>
            <h2 className="text-3xl font-serif font-bold text-white">Apply for an Account Holder ID</h2>
            <p className="text-xs text-gray-400">
              Submit your company credentials to begin verification. Our compliance desk will respond within 24 business hours.
            </p>
          </div>

          {submitted ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-16 h-16 rounded-full bg-gold-500/20 border border-gold-400 text-gold-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-white">Application Received</h3>
              <p className="text-sm text-gray-300 max-w-md mx-auto leading-relaxed">
                Thank you for applying, <strong className="text-white">{formData.contactPerson}</strong>. Your application for <strong className="text-gold-400">{formData.companyName || 'Corporate Account'}</strong> has been routed to our Head of Compliance in Kampala.
              </p>
              <div className="pt-4">
                <a
                  href={companyInfo.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-xs uppercase tracking-wider transition-colors inline-flex items-center gap-2"
                >
                  <span>Follow Up via WhatsApp Desk</span>
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1">Entity Type *</label>
                  <select
                    name="entityType"
                    value={formData.entityType}
                    onChange={handleChange}
                    className="w-full bg-charcoal-950 border border-white/10 rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-gold-400"
                  >
                    <option value="Bullion Trading Company">Bullion Trading Company</option>
                    <option value="Artisanal Miners Cooperative">Artisanal Miners Cooperative</option>
                    <option value="Commercial Mining Company">Commercial Mining Company</option>
                    <option value="Individual Mineral Trader">Individual Mineral Trader</option>
                    <option value="Investment Fund / Bank">Investment Fund / Bank</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1">Company / Entity Name *</label>
                  <input
                    type="text"
                    required
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    placeholder="e.g. Great Lakes Bullion Ltd"
                    className="w-full bg-charcoal-950 border border-white/10 rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-gold-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1">Company Registration / TIN Number *</label>
                  <input
                    type="text"
                    required
                    name="regNumber"
                    value={formData.regNumber}
                    onChange={handleChange}
                    placeholder="e.g. 8002000... / URA TIN"
                    className="w-full bg-charcoal-950 border border-white/10 rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-gold-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1">Authorized Contact Person *</label>
                  <input
                    type="text"
                    required
                    name="contactPerson"
                    value={formData.contactPerson}
                    onChange={handleChange}
                    placeholder="Full Legal Name"
                    className="w-full bg-charcoal-950 border border-white/10 rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-gold-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1">Business Email *</label>
                  <input
                    type="email"
                    required
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="official@company.com"
                    className="w-full bg-charcoal-950 border border-white/10 rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-gold-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1">Phone / WhatsApp Number *</label>
                  <input
                    type="tel"
                    required
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+256 700 000 000"
                    className="w-full bg-charcoal-950 border border-white/10 rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-gold-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="sm:col-span-2">
                  <label className="block text-xs font-medium text-gray-300 mb-1">Estimated Monthly Volume</label>
                  <input
                    type="number"
                    name="monthlyVolume"
                    value={formData.monthlyVolume}
                    onChange={handleChange}
                    placeholder="e.g. 25"
                    className="w-full bg-charcoal-950 border border-white/10 rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-gold-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1">Unit</label>
                  <select
                    name="volumeUnit"
                    value={formData.volumeUnit}
                    onChange={handleChange}
                    className="w-full bg-charcoal-950 border border-white/10 rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-gold-400"
                  >
                    <option value="Kilograms">Kilograms</option>
                    <option value="Grams">Grams</option>
                    <option value="Troy Ounces">Troy Ounces</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1">Additional Operating Context / Requirements</label>
                <textarea
                  rows="3"
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="Detail whether you require assay witnessing, export clearances to Dubai/Europe, or bullion vaulting..."
                  className="w-full bg-charcoal-950 border border-white/10 rounded-lg px-3.5 py-2 text-xs text-white focus:outline-none focus:border-gold-400"
                ></textarea>
              </div>

              <div className="p-3 rounded-lg bg-charcoal-950 border border-white/5 flex items-center gap-2 text-[11px] text-gray-400">
                <Lock className="w-4 h-4 text-gold-400 shrink-0" />
                <span>All submitted KYC credentials are encrypted and strictly confidential under Bank of Uganda guidelines.</span>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-full bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 text-charcoal-950 font-bold text-xs uppercase tracking-widest shadow-xl shadow-gold-500/20 hover:from-gold-400 hover:to-gold-300 transition-all flex items-center justify-center gap-2"
              >
                {loading ? <span>Processing Application...</span> : (
                  <>
                    <span>Submit Account Application</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>

            </form>
          )}

        </div>
      </section>

    </div>
  );
};

export default AccountHolders;
