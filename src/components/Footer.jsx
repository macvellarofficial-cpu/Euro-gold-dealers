import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, Phone, Mail, Clock, ArrowRight, ShieldCheck, 
  Send, ExternalLink, Globe, CheckCircle2 
} from 'lucide-react';
import { companyInfo, servicesData } from '../data/siteData';

const Footer = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setNewsletterEmail('');
      }, 5000);
    }
  };

  return (
    <footer className="bg-charcoal-950 text-gray-300 relative border-t border-gold-500/20 overflow-hidden font-sans">
      {/* Subtle background glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 right-10 w-[500px] h-[300px] bg-gold-400/5 rounded-full blur-3xl pointer-events-none" />

      {/* Top Banner - Institutional Trust Callout */}
      <div className="border-b border-white/5 bg-charcoal-900/60 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-white font-semibold text-sm sm:text-base">
                Official Supplier & Partner to Bank of Uganda & Ministry of Energy
              </p>
              <p className="text-xs text-gray-400">
                Holding 9 DGSM Mineral Licenses & 10 Certifications for Ethical Mineral Value Addition
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Link
              to="/account-holders"
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-gold-500 to-gold-400 text-charcoal-950 font-bold text-xs uppercase tracking-wider hover:shadow-lg hover:shadow-gold-500/20 transition-all flex items-center gap-2"
            >
              <span>Become an Account Holder</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Column 1: Brand & Overview (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <Link to="/" className="inline-block group">
              <div className="flex items-center gap-3">
                <img 
                  src="/logo.svg" 
                  alt={companyInfo.name} 
                  className="h-12 w-auto object-contain transition-transform group-hover:scale-105 duration-300" 
                />
              </div>
            </Link>
            
            <p className="text-sm text-gray-400 leading-relaxed">
              {companyInfo.name} is Africa's premier licensed gold trading, assaying, and refining company headquartered in Uganda with international operations in Dubai, Kenya, and Congo. We empower transparent, certified precious metal trade with LBMA-standard 99.9% fine purity.
            </p>

            <div className="p-4 rounded-xl bg-charcoal-900/80 border border-gold-500/20 backdrop-blur-sm space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-gold-400 uppercase tracking-wider">
                <Globe className="w-3.5 h-3.5" />
                <span>Global Presence & Desks</span>
              </div>
              <p className="text-xs text-gray-300 leading-normal">
                Kampala (HQ) • Wakiso • Yumbe Concession • Dubai Bullion Desk • Nairobi • Bunia DRC
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              {Object.entries(companyInfo.socialLinks).map(([platform, url]) => (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-charcoal-900 border border-white/10 hover:border-gold-400/50 hover:bg-gold-500/10 text-gray-400 hover:text-gold-400 flex items-center justify-center transition-all duration-300 text-xs capitalize font-medium"
                  aria-label={platform}
                >
                  {platform.charAt(0).toUpperCase()}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider border-l-2 border-gold-400 pl-3">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-gray-400 hover:text-gold-400 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-500/40"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about-us" className="text-gray-400 hover:text-gold-400 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-500/40"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-gold-400 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-500/40"></span>
                  Services
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-400 hover:text-gold-400 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-500/40"></span>
                  Projects & Mines
                </Link>
              </li>
              <li>
                <Link to="/partners-licenses" className="text-gray-400 hover:text-gold-400 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-500/40"></span>
                  Partners & Licenses
                </Link>
              </li>
              <li>
                <Link to="/account-holders" className="text-gray-400 hover:text-gold-400 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-500/40"></span>
                  Account Holders
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-gold-400 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-500/40"></span>
                  News & Media
                </Link>
              </li>
              <li>
                <Link to="/contact-us" className="text-gray-400 hover:text-gold-400 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-500/40"></span>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider border-l-2 border-gold-400 pl-3">
              Refinery Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              {servicesData.map((s) => (
                <li key={s.id}>
                  <Link 
                    to={`/services#${s.id}`} 
                    className="text-gray-400 hover:text-gold-400 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-500/40 group-hover:bg-gold-400 transition-colors"></span>
                    <span className="truncate">{s.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Newsletter (3 cols) */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider border-l-2 border-gold-400 pl-3">
              Head Office Contact
            </h4>
            
            <div className="space-y-3.5 text-xs text-gray-400">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <span>{companyInfo.headOffice.address}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold-400 shrink-0" />
                <div className="flex flex-col">
                  <a href={`tel:${companyInfo.phonePrimary}`} className="hover:text-gold-400 transition-colors">
                    {companyInfo.phonePrimary}
                  </a>
                  <a href={`tel:${companyInfo.phoneSecondary}`} className="hover:text-gold-400 transition-colors">
                    {companyInfo.phoneSecondary}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold-400 shrink-0" />
                <div className="flex flex-col">
                  <a href={`mailto:${companyInfo.emailPrimary}`} className="hover:text-gold-400 transition-colors">
                    {companyInfo.emailPrimary}
                  </a>
                  <a href={`mailto:${companyInfo.emailSales}`} className="hover:text-gold-400 transition-colors">
                    {companyInfo.emailSales}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <div>
                  <p>{companyInfo.workingHoursWeekday}</p>
                  <p>{companyInfo.workingHoursSaturday}</p>
                </div>
              </div>
            </div>

            {/* Newsletter Subscription */}
            <div className="pt-2">
              <p className="text-xs text-gray-300 font-medium mb-2">Subscribe to Commodity & Gold Market Bulletins:</p>
              {subscribed ? (
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 text-xs">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Thank you! You're subscribed to Euro Gold market updates.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex items-center gap-2">
                  <input
                    type="email"
                    required
                    placeholder="Enter business email..."
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="flex-1 bg-charcoal-900 border border-white/10 rounded-lg px-3 py-2 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-gold-400 transition-colors"
                  />
                  <button
                    type="submit"
                    className="px-3.5 py-2 rounded-lg bg-gold-400 text-charcoal-950 hover:bg-gold-300 transition-colors font-bold text-xs shrink-0 flex items-center justify-center"
                    aria-label="Subscribe"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>

        {/* Bottom Bar: Copyright, Legal & Disclaimer */}
        <div className="mt-14 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} {companyInfo.legalName}. All rights reserved. Host domain: eurogolddealers.com</p>
          <div className="flex flex-wrap items-center gap-6">
            <Link to="/privacy-policy" className="hover:text-gold-400 transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-gold-400 transition-colors">Terms of Service</Link>
            <Link to="/partners-licenses" className="hover:text-gold-400 transition-colors">DGSM Licenses</Link>
            <a 
              href="https://eurogolddealers.com/sitemap.xml" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-gold-400 transition-colors flex items-center gap-1"
            >
              <span>Sitemap</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
