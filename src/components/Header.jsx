import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Phone, Mail, MapPin, Clock, ChevronDown, Menu, X, 
  ShieldCheck, ArrowRight, MessageSquare
} from 'lucide-react';
import { companyInfo } from '../data/siteData';

export default function Header({ onOpenQuote }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [partnersDropdownOpen, setPartnersDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setPartnersDropdownOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const isActive = (path) => location.pathname === path;

  return (
    <header className="w-full sticky top-0 z-50 transition-all duration-300">
      {/* Top Notification Ticker Marquee */}
      <div className="bg-gradient-to-r from-yellow-500 via-amber-400 to-yellow-500 text-slate-950 font-bold text-xs sm:text-sm py-1.5 px-4 overflow-hidden border-b border-yellow-600/30 shadow-sm">
        <div className="flex whitespace-nowrap animate-marquee-infinite">
          <span className="flex items-center space-x-6 mx-4">
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-slate-900" />
              <span>Official Supplier & Refinery for Bank of Uganda (BoU)</span>
            </span>
            <span>•</span>
            <span>Official Partner with Ministry of Energy & Mineral Development</span>
            <span>•</span>
            <span>Licensed Gold Dealers in Uganda • Plot 38 Kitala, Wakiso</span>
            <span>•</span>
            <span>Domestic Gold Purchase Reserve Program Provider</span>
            <span>•</span>
            <span>Direct Bullion Export to Dubai & European Refineries</span>
            <span>•</span>
          </span>
          <span className="flex items-center space-x-6 mx-4">
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-slate-900" />
              <span>Official Supplier & Refinery for Bank of Uganda (BoU)</span>
            </span>
            <span>•</span>
            <span>Official Partner with Ministry of Energy & Mineral Development</span>
            <span>•</span>
            <span>Licensed Gold Dealers in Uganda • Plot 38 Kitala, Wakiso</span>
            <span>•</span>
            <span>Domestic Gold Purchase Reserve Program Provider</span>
            <span>•</span>
            <span>Direct Bullion Export to Dubai & European Refineries</span>
            <span>•</span>
          </span>
        </div>
      </div>

      {/* Top Bar with Contacts & Socials */}
      <div className="bg-charcoal-950 text-slate-300 text-xs py-2 px-4 sm:px-8 border-b border-slate-800 hidden lg:block">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-4">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-yellow-400" />
              <span>Mon – Sat: 8:00 AM – 5:00 PM</span>
            </div>
            <a 
              href={`tel:${companyInfo.phonePrimary.replace(/\s+/g, '')}`}
              className="flex items-center space-x-2 text-slate-300 hover:text-yellow-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-yellow-400" />
              <span>{companyInfo.phonePrimary} / {companyInfo.phoneSecondary}</span>
            </a>
            <a 
              href={`mailto:${companyInfo.emailPrimary}`}
              className="flex items-center space-x-2 text-slate-300 hover:text-yellow-400 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-yellow-400" />
              <span>{companyInfo.emailPrimary}</span>
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-slate-400 flex items-center space-x-1">
              <MapPin className="w-3.5 h-3.5 text-yellow-400" />
              <span>Plot 38 Kitala, Off Entebbe Rd, Uganda</span>
            </span>
            <div className="h-3 w-[1px] bg-slate-700" />
            <div className="flex items-center space-x-3 text-slate-400">
              <a href={companyInfo.socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors">
                <span className="sr-only">X Twitter</span>
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href={companyInfo.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28z"/></svg>
              </a>
              <a href={companyInfo.socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/></svg>
              </a>
              <a href={companyInfo.socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`w-full transition-all duration-300 ${
        isScrolled 
          ? 'bg-charcoal-900/95 backdrop-blur-md shadow-xl py-3 border-b border-slate-800' 
          : 'bg-charcoal-900 py-4 border-b border-slate-800/80'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
          {/* Logo with Link */}
          <Link to="/" className="flex items-center space-x-3 group">
            <img 
              src="/logo.svg" 
              alt="Euro Gold Dealers Logo" 
              className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            <Link 
              to="/" 
              className={`px-3 py-2 text-sm font-semibold transition-colors rounded-md ${
                isActive('/') ? 'text-yellow-400 bg-slate-800/60' : 'text-slate-200 hover:text-yellow-400 hover:bg-slate-800/30'
              }`}
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <Link 
                to="/services" 
                className={`px-3 py-2 text-sm font-semibold flex items-center gap-1 transition-colors rounded-md ${
                  location.pathname.startsWith('/services') ? 'text-yellow-400 bg-slate-800/60' : 'text-slate-200 hover:text-yellow-400 hover:bg-slate-800/30'
                }`}
              >
                <span>Services</span>
                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </Link>

              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 w-64 bg-charcoal-900 border border-slate-700/80 shadow-2xl rounded-lg py-2 mt-1 z-50 animate-in fade-in duration-200">
                  <Link to="/services#gold-refining" className="block px-4 py-2.5 text-xs font-medium text-slate-300 hover:text-yellow-400 hover:bg-slate-800/60 transition-colors">
                    Gold Refining
                  </Link>
                  <Link to="/services#assaying" className="block px-4 py-2.5 text-xs font-medium text-slate-300 hover:text-yellow-400 hover:bg-slate-800/60 transition-colors">
                    Assaying Services
                  </Link>
                  <Link to="/services#gold-smelting" className="block px-4 py-2.5 text-xs font-medium text-slate-300 hover:text-yellow-400 hover:bg-slate-800/60 transition-colors">
                    Gold Smelting
                  </Link>
                  <Link to="/services#transaction-handling" className="block px-4 py-2.5 text-xs font-medium text-slate-300 hover:text-yellow-400 hover:bg-slate-800/60 transition-colors">
                    Transaction Handling & Export
                  </Link>
                  <Link to="/services#gemstone-processing" className="block px-4 py-2.5 text-xs font-medium text-slate-300 hover:text-yellow-400 hover:bg-slate-800/60 transition-colors">
                    Processing of Gemstones
                  </Link>
                  <Link to="/services#mineral-advocacy" className="block px-4 py-2.5 text-xs font-medium text-slate-300 hover:text-yellow-400 hover:bg-slate-800/60 transition-colors">
                    Advocacy for Minerals
                  </Link>
                  <Link to="/services#mineral-consultancy" className="block px-4 py-2.5 text-xs font-medium text-slate-300 hover:text-yellow-400 hover:bg-slate-800/60 transition-colors border-t border-slate-800">
                    Mineral Consultancy
                  </Link>
                </div>
              )}
            </div>

            <Link 
              to="/blog" 
              className={`px-3 py-2 text-sm font-semibold transition-colors rounded-md ${
                isActive('/blog') ? 'text-yellow-400 bg-slate-800/60' : 'text-slate-200 hover:text-yellow-400 hover:bg-slate-800/30'
              }`}
            >
              Blog / News
            </Link>

            <Link 
              to="/about-us" 
              className={`px-3 py-2 text-sm font-semibold transition-colors rounded-md ${
                isActive('/about-us') ? 'text-yellow-400 bg-slate-800/60' : 'text-slate-200 hover:text-yellow-400 hover:bg-slate-800/30'
              }`}
            >
              About Us
            </Link>

            <Link 
              to="/projects" 
              className={`px-3 py-2 text-sm font-semibold transition-colors rounded-md ${
                isActive('/projects') ? 'text-yellow-400 bg-slate-800/60' : 'text-slate-200 hover:text-yellow-400 hover:bg-slate-800/30'
              }`}
            >
              Projects
            </Link>

            {/* Partners & Licenses Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setPartnersDropdownOpen(true)}
              onMouseLeave={() => setPartnersDropdownOpen(false)}
            >
              <Link 
                to="/partners-licenses" 
                className={`px-3 py-2 text-sm font-semibold flex items-center gap-1 transition-colors rounded-md ${
                  location.pathname.startsWith('/partners-licenses') || location.pathname === '/account-holders' 
                    ? 'text-yellow-400 bg-slate-800/60' 
                    : 'text-slate-200 hover:text-yellow-400 hover:bg-slate-800/30'
                }`}
              >
                <span>Partners & Licenses</span>
                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </Link>

              {partnersDropdownOpen && (
                <div className="absolute top-full left-0 w-56 bg-charcoal-900 border border-slate-700/80 shadow-2xl rounded-lg py-2 mt-1 z-50 animate-in fade-in duration-200">
                  <Link to="/partners-licenses" className="block px-4 py-2.5 text-xs font-medium text-slate-300 hover:text-yellow-400 hover:bg-slate-800/60 transition-colors">
                    Partners & Strategic Alliances
                  </Link>
                  <Link to="/account-holders" className="block px-4 py-2.5 text-xs font-medium text-slate-300 hover:text-yellow-400 hover:bg-slate-800/60 transition-colors border-t border-slate-800">
                    Account Holders Program
                  </Link>
                </div>
              )}
            </div>

            <Link 
              to="/contact-us" 
              className={`px-3 py-2 text-sm font-semibold transition-colors rounded-md ${
                isActive('/contact-us') ? 'text-yellow-400 bg-slate-800/60' : 'text-slate-200 hover:text-yellow-400 hover:bg-slate-800/30'
              }`}
            >
              Contact Us
            </Link>
          </div>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center space-x-3">
            <button
              onClick={onOpenQuote}
              className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-slate-900 gold-btn-gradient rounded shadow hover:shadow-yellow-500/20 transition-all flex items-center gap-1.5"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <a
              href={companyInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 text-xs font-bold uppercase tracking-wider text-white bg-emerald-600 hover:bg-emerald-500 rounded shadow transition-all flex items-center gap-1.5"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-300 hover:text-yellow-400 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[auto] bg-charcoal-950/98 backdrop-blur-lg border-b border-slate-800 px-6 py-6 shadow-2xl max-h-[85vh] overflow-y-auto">
          <div className="flex flex-col space-y-3">
            <Link 
              to="/" 
              className={`py-2 text-base font-semibold border-b border-slate-800/60 ${isActive('/') ? 'text-yellow-400' : 'text-slate-200'}`}
            >
              Home
            </Link>
            
            <div>
              <div 
                className="py-2 text-base font-semibold text-slate-200 flex items-center justify-between border-b border-slate-800/60 cursor-pointer"
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${servicesDropdownOpen ? 'rotate-180 text-yellow-400' : ''}`} />
              </div>
              {servicesDropdownOpen && (
                <div className="pl-4 py-2 space-y-2 text-sm text-slate-400 border-l-2 border-yellow-500/40 my-2">
                  <Link to="/services#gold-refining" className="block py-1 hover:text-yellow-400">Gold Refining</Link>
                  <Link to="/services#assaying" className="block py-1 hover:text-yellow-400">Assaying Services</Link>
                  <Link to="/services#gold-smelting" className="block py-1 hover:text-yellow-400">Gold Smelting</Link>
                  <Link to="/services#transaction-handling" className="block py-1 hover:text-yellow-400">Transaction Handling</Link>
                  <Link to="/services#gemstone-processing" className="block py-1 hover:text-yellow-400">Processing of Gemstones</Link>
                  <Link to="/services#mineral-advocacy" className="block py-1 hover:text-yellow-400">Advocacy for Minerals</Link>
                  <Link to="/services#mineral-consultancy" className="block py-1 hover:text-yellow-400">Mineral Consultancy</Link>
                </div>
              )}
            </div>

            <Link 
              to="/blog" 
              className={`py-2 text-base font-semibold border-b border-slate-800/60 ${isActive('/blog') ? 'text-yellow-400' : 'text-slate-200'}`}
            >
              Blog / News
            </Link>

            <Link 
              to="/about-us" 
              className={`py-2 text-base font-semibold border-b border-slate-800/60 ${isActive('/about-us') ? 'text-yellow-400' : 'text-slate-200'}`}
            >
              About Us
            </Link>

            <Link 
              to="/projects" 
              className={`py-2 text-base font-semibold border-b border-slate-800/60 ${isActive('/projects') ? 'text-yellow-400' : 'text-slate-200'}`}
            >
              Projects
            </Link>

            <div>
              <div 
                className="py-2 text-base font-semibold text-slate-200 flex items-center justify-between border-b border-slate-800/60 cursor-pointer"
                onClick={() => setPartnersDropdownOpen(!partnersDropdownOpen)}
              >
                <span>Partners & Licenses</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${partnersDropdownOpen ? 'rotate-180 text-yellow-400' : ''}`} />
              </div>
              {partnersDropdownOpen && (
                <div className="pl-4 py-2 space-y-2 text-sm text-slate-400 border-l-2 border-yellow-500/40 my-2">
                  <Link to="/partners-licenses" className="block py-1 hover:text-yellow-400">Partners & Strategic Alliances</Link>
                  <Link to="/account-holders" className="block py-1 hover:text-yellow-400">Account Holders Program</Link>
                </div>
              )}
            </div>

            <Link 
              to="/contact-us" 
              className={`py-2 text-base font-semibold border-b border-slate-800/60 ${isActive('/contact-us') ? 'text-yellow-400' : 'text-slate-200'}`}
            >
              Contact Us
            </Link>

            <div className="pt-4 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="w-full py-2.5 text-center text-xs font-bold uppercase tracking-wider text-slate-900 gold-btn-gradient rounded shadow"
              >
                Get a Quote
              </button>
              <a
                href={companyInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 text-center text-xs font-bold uppercase tracking-wider text-white bg-emerald-600 rounded shadow flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
