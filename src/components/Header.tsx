/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Menu, X, Shield, Phone, Mail, MapPin, Sparkles, SlidersHorizontal, Settings } from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  showAdmin: boolean;
  setShowAdmin: (show: boolean) => void;
}

export default function Header({ activeTab, setActiveTab, showAdmin, setShowAdmin }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [stampTime, setStampTime] = useState('');

  useEffect(() => {
    setStampTime(new Date().toLocaleDateString(undefined, {
      weekday: 'long',
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    }));
  }, []);

  const navItems = [
    { id: 'home', label: 'Security Sourcing' },
    { id: 'products', label: 'Gold Catalog' },
    { id: 'booking', label: 'Appointment Booking' },
    { id: 'contact', label: 'Secure Vault & Location' },
  ];

  return (
    <header id="site-header-wrapper" className="w-full text-xs font-sans relative z-40 select-none">
      
      {/* Top Banner - Global Trust Accords */}
      <div className="bg-[#0b0c10] border-b border-neutral-900 py-2.5 px-4 text-gray-400">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-center sm:text-left">
            <span className="flex items-center gap-1.5 text-gold-400 font-semibold font-mono uppercase text-[10px]">
              <Shield className="w-3.5 h-3.5 text-gold-500 fill-gold-500/10" />
              <span>Security Clearance Active</span>
            </span>
            <span className="hidden md:inline text-neutral-700">|</span>
            <span className="flex items-center gap-1">
              <MapPin className="w-3 h-3 text-gold-500" /> Plot 24, Nakasero Road, Kampala, Uganda
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1">
            <a href="tel:+256414492882" className="flex items-center gap-1 hover:text-white transition">
              <Phone className="w-3 h-3 text-gold-500" /> +256 (0) 414 492 882
            </a>
            <a href="mailto:secure@eurogolddealers.com" className="flex items-center gap-1 hover:text-white transition">
              <Mail className="w-3 h-3 text-gold-500" /> secure@eurogolddealers.com
            </a>
            <span className="bg-neutral-900 border border-neutral-800 px-2 py-0.5 rounded text-gray-500 text-[10px] hidden lg:inline">
              {stampTime}
            </span>
          </div>

        </div>
      </div>

      {/* Main Premium Navigation bar */}
      <div className="bg-black/95 backdrop-blur-md border-b border-light-slate/10 py-5 px-4 sticky top-0">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          
          {/* Logo with Brand typography (Outfit/Grotesk styled) */}
          <div 
            onClick={() => { setActiveTab('home'); setShowAdmin(false); }} 
            className="flex items-center gap-2.5 cursor-pointer group"
          >
            <div className="relative flex items-center justify-center w-10 h-10 border-2 border-gold-500 rounded bg-gradient-to-br from-neutral-950 to-neutral-800 shadow-md">
              <span className="text-gold-500 font-display font-extrabold text-lg group-hover:scale-105 transition-transform">EG</span>
              <div className="absolute -inset-0.5 border border-white/20 rounded pointer-events-none" />
            </div>
            <div>
              <h1 className="text-white font-extrabold font-display leading-tight tracking-[2px] text-sm md:text-base group-hover:text-gold-400 transition-colors">
                EURO GOLD <span className="text-gold-500">DEALERS</span>
              </h1>
              <p className="text-[9px] text-gray-500 tracking-widest font-mono uppercase font-bold">Kampala Sourcing & Refining</p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-xs font-semibold">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setShowAdmin(false);
                }}
                className={`py-1.5 px-3 rounded-lg uppercase tracking-wider transition-all relative ${
                  !showAdmin && activeTab === item.id
                    ? 'text-gold-500 font-bold bg-gold-500/5 border border-gold-500/20'
                    : 'text-gray-400 hover:text-white hover:bg-neutral-900'
                }`}
              >
                <span>{item.label}</span>
                {!showAdmin && activeTab === item.id && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-gold-500" />
                )}
              </button>
            ))}
          </nav>

          {/* Special Toggle to show WP Leads Admin Dashboard Backoffice */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => setShowAdmin(!showAdmin)}
              className={`px-4 py-2 rounded-xl text-xs font-bold font-display uppercase tracking-wider flex items-center gap-2 transition cursor-pointer border ${
                showAdmin
                  ? 'bg-gold-500 text-black border-gold-400 shadow-lg'
                  : 'bg-neutral-900 text-gray-300 border-neutral-800 hover:text-white hover:border-gold-500/50'
              }`}
            >
              <Settings className="w-3.5 h-3.5" />
              <span>{showAdmin ? 'Exit Backoffice' : 'WP Backoffice'}</span>
            </button>
          </div>

          {/* Mobile Menu Button icon */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-gray-300 hover:text-white p-2 rounded-xl hover:bg-neutral-900 transition"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-gold-500" /> : <Menu className="w-6 h-6 text-gold-500" />}
          </button>

        </div>
      </div>

      {/* Mobile Dropdown Menu Drawer */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-neutral-950 border-b border-neutral-800 shadow-3xl p-5 lg:hidden flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-2.5">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setShowAdmin(false);
                  setMobileMenuOpen(false);
                }}
                className={`py-3 px-4 rounded-xl text-left font-semibold uppercase tracking-wider text-xs transition ${
                  !showAdmin && activeTab === item.id
                    ? 'bg-gold-500/10 text-gold-500 border border-gold-500/30'
                    : 'text-gray-400 hover:text-white hover:bg-neutral-900'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="pt-4 border-t border-neutral-900 flex flex-col gap-3">
            <button
              onClick={() => {
                setShowAdmin(!showAdmin);
                setMobileMenuOpen(false);
              }}
              className={`w-full py-3 px-4 rounded-xl font-bold font-display text-center uppercase tracking-wider text-xs flex items-center justify-center gap-2 border transition ${
                showAdmin
                  ? 'bg-gold-500 text-black border-gold-400'
                  : 'bg-neutral-900 text-gray-300 border-neutral-800'
              }`}
            >
              <Settings className="w-4 h-4" />
              <span>{showAdmin ? 'Exit Backoffice View' : 'WP leads Backoffice'}</span>
            </button>
          </div>
        </div>
      )}

    </header>
  );
}
