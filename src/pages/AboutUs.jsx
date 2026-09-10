import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, Leaf, Flame, Award, Globe, Users, 
  CheckCircle2, ArrowRight, Sparkles, Building2, 
  Compass, Eye, Target, HeartHandshake
} from 'lucide-react';
import { companyInfo, companyStats, trustedPartners } from '../data/siteData';

const AboutUs = ({ onOpenQuote }) => {
  return (
    <div className="bg-charcoal-950 text-white min-h-screen">
      
      {/* Page Hero */}
      <section className="relative py-24 sm:py-32 overflow-hidden bg-charcoal-900 border-b border-gold-500/20">
        <div className="absolute inset-0 bg-cover bg-center opacity-25" style={{ backgroundImage: "url('/images/EURO-GOLD-12.jpg')" }} />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/80 to-transparent" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/20 border border-gold-400/40 text-gold-300 text-xs font-semibold uppercase tracking-widest mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Integrity • Precision • Compliance</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 via-yellow-200 to-gold-500">{companyInfo.name}</span>
          </h1>
          <p className="max-w-3xl mx-auto text-base sm:text-lg text-gray-300 leading-relaxed">
            Headquartered in Uganda with global commercial hubs across Dubai and East Africa, Euro Gold Dealers is an official supplier and certified refinery partner to the Bank of Uganda and the Ministry of Energy and Mineral Development.
          </p>
        </div>
      </section>

      {/* Corporate Overview & Story */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-gold-400">Our Heritage & Mission</span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white leading-tight">
                Pioneering Responsible Mineral Value Addition in Africa
              </h2>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                Founded with a visionary commitment to modernize the East African precious metals supply chain, Euro Gold Dealers has grown into a multi-jurisdictional leader holding 9 official mineral licenses and 10 operational certifications issued by the Directorate of Geological Survey and Mines (DGSM).
              </p>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                Rather than exporting crude, unrefined mineral ores, we invest heavily in cutting-edge European thermal induction smelting, chemical Miller and Wohlwill purification processes, and accredited XRF / fire assay spectrometry. This ensures raw African gold is minted to 99.9% LBMA-compliant bullion right here in Uganda.
              </p>

              <div className="p-6 rounded-2xl bg-charcoal-900 border border-gold-500/30">
                <p className="text-xs font-bold text-gold-400 uppercase tracking-wider mb-2">
                  Key Strategic Milestone
                </p>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  Designated by the Bank of Uganda under the national sovereign gold purchase program, Euro Gold Dealers refines domestic gold to reinforce national currency stability, formalize small-scale miners, and retain billions of shillings in domestic economic value.
                </p>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden border border-gold-500/30 shadow-2xl">
                <img
                  src="/images/EURO-GOLD-23-scaled.jpg"
                  alt="Gold Ingot Casting Euro Gold"
                  className="w-full h-[450px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-6 rounded-xl bg-charcoal-950/90 border border-white/10 backdrop-blur-md">
                  <p className="text-sm font-bold text-gold-400">99.9% Certified Purity Standard</p>
                  <p className="text-xs text-gray-300">LBMA & ASTM Testing Protocols with Tamper-Evident Security Seals</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Vision, Mission, Values */}
      <section className="py-20 bg-charcoal-900/50 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="p-8 rounded-2xl bg-charcoal-950 border border-white/10 hover:border-gold-500/40 transition-all space-y-4">
              <div className="w-12 h-12 rounded-xl bg-gold-400/10 border border-gold-400/30 text-gold-400 flex items-center justify-center">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif font-bold text-white">Our Vision</h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                To be the preeminent African gold refining and commodity trading gateway, synonymous worldwide with metallurgical perfection, complete traceability, and unmatched institutional reliability.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-charcoal-950 border border-white/10 hover:border-gold-500/40 transition-all space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-400/10 border border-emerald-400/30 text-emerald-400 flex items-center justify-center">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif font-bold text-white">Our Mission</h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                To deliver world-class mineral value addition, empower local mining cooperatives through fair market transactions, and uphold rigorous ESG compliance that protects communities and the environment.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-charcoal-950 border border-white/10 hover:border-gold-500/40 transition-all space-y-4">
              <div className="w-12 h-12 rounded-xl bg-amber-400/10 border border-amber-400/30 text-amber-400 flex items-center justify-center">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif font-bold text-white">Core Values</h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                Total Transparency in Assaying, Zero Tolerance for Conflict Minerals, Uncompromising Client Confidentiality, and Continuous Technological Innovation in Smelting.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Sustainability & Environmental Policy */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 rounded-2xl bg-charcoal-900 border border-white/10 text-center">
                  <Leaf className="w-8 h-8 text-emerald-400 mx-auto mb-3" />
                  <p className="text-lg font-bold text-white mb-1">Zero Mercury</p>
                  <p className="text-xs text-gray-400">100% closed loop chemical extraction</p>
                </div>
                <div className="p-6 rounded-2xl bg-charcoal-900 border border-white/10 text-center">
                  <Flame className="w-8 h-8 text-amber-400 mx-auto mb-3" />
                  <p className="text-lg font-bold text-white mb-1">Clean Smelting</p>
                  <p className="text-xs text-gray-400">Induction electric furnaces with wet scrubbers</p>
                </div>
                <div className="p-6 rounded-2xl bg-charcoal-900 border border-white/10 text-center">
                  <Users className="w-8 h-8 text-gold-400 mx-auto mb-3" />
                  <p className="text-lg font-bold text-white mb-1">Community First</p>
                  <p className="text-xs text-gray-400">Direct investment in miner health and safety</p>
                </div>
                <div className="p-6 rounded-2xl bg-charcoal-900 border border-white/10 text-center">
                  <ShieldCheck className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                  <p className="text-lg font-bold text-white mb-1">Conflict-Free</p>
                  <p className="text-xs text-gray-400">ICGLR & OECD Due Diligence aligned</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">Eco-Friendly Refining</span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white leading-tight">
                Sustainability & The Global Energy Transition
              </h2>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                Gold refining has historically carried an environmental burden. At Euro Gold Dealers, we have fundamentally re-engineered the process. Our Wakiso refinery employs modern wet fume scrubbers that neutralize acid vapors and eliminate atmospheric emissions.
              </p>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                Through our advocacy wing, we actively train artisanal miners across Mubende, Busia, and Yumbe on gravity separation concentrators, progressively eliminating mercury usage and restoring local water basins.
              </p>
              
              <div className="pt-2">
                <button
                  onClick={() => onOpenQuote('Sustainability & Responsible Sourcing')}
                  className="px-6 py-3 rounded-full bg-gold-400 hover:bg-gold-300 text-charcoal-950 font-bold text-xs uppercase tracking-wider transition-colors inline-flex items-center gap-2"
                >
                  <span>Request ESG & Compliance Report</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Bottom Banner */}
      <section className="py-20 bg-charcoal-900 border-t border-gold-500/20">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
            Partner with Africa’s Premier Bullion House
          </h2>
          <p className="text-sm sm:text-base text-gray-300">
            Open an institutional account today for preferential assay rates, secured vault storage, and seamless export clearances.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              to="/account-holders"
              className="px-8 py-3.5 rounded-full bg-gold-400 hover:bg-gold-300 text-charcoal-950 font-bold text-xs uppercase tracking-widest transition-colors"
            >
              Become an Account Holder
            </Link>
            <Link
              to="/contact-us"
              className="px-8 py-3.5 rounded-full bg-charcoal-950 hover:bg-charcoal-800 text-white border border-white/10 font-bold text-xs uppercase tracking-widest transition-colors"
            >
              Contact Head Office
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutUs;
